import { Component, OnInit, OnChanges } from '@angular/core';
import { latLng } from 'leaflet';

declare let L

interface latlng { 
  lat: string | number
  lng: string | number
}


@Component({
  selector: 'app-firedistance',
  templateUrl: './firedistance.component.html',
  styleUrls: ['./firedistance.component.scss']
})
export class FiredistanceComponent implements OnInit {
  private informerMarkerLatlng: latlng
  private fireMarkerLatlng: latlng
  private map
  private distanceLine

  constructor() { }

  ngOnInit() {
    this.map = L
      .map('mapid')
      .setView([-7.5, 110.2], 8);

    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);

    // Add compass
    this.map.addControl( new L.Control.Compass() );

    // Add locate
    const locate = L
      .control
      .locate({
        icon: 'locate'
      })
      .addTo(this.map);

    // Locate user current location
    locate.start()

    this.map.on('locationfound ', (e) => {
      this.onLocateFound()
    })
  }

  private onLocateFound(): void {
    if (!this.fireMarkerLatlng && !this.informerMarkerLatlng) {
      this.informerMarkerLatlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng }
      this.fireMarkerLatlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng - this.map.getCenter().lng / 50 }

      this.addMarker('informer')
      this.addMarker('fire')  
      
      this.distanceLine = L
        .polyline([this.fireMarkerLatlng, this.informerMarkerLatlng], {
          color: 'red',
        })
        .addTo(this.map);
  
      this.distanceLine.setText(this.countDistance(), {
        repeat: false, 
        offset: 12,
      })
    }
  }

  private countDistance(): string {
    const distanceInM = this.map.distance(this.fireMarkerLatlng, this.informerMarkerLatlng)
    const ceiledDistance = Math.ceil(distanceInM)
    const distanceInString = `${ceiledDistance.toString()} m`

    return distanceInString
  }

  private addMarker(type: 'informer' | 'fire'): void {
    let latlng;
    switch (type) {
      case 'informer':
        latlng = this.informerMarkerLatlng
        break;
      case 'fire':
        latlng = this.fireMarkerLatlng
        break;
    }

    const marker = L.marker([latlng.lat, latlng.lng], { 
      icon: L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
        iconSize: [57.2 / 2, 103.5 / 2],
        iconAnchor: [15, 50]
      }),
      draggable: true, 
    })

    this.onMarkerMove(type, latlng)

    marker.on('move', (event) => {
      this.onMarkerMove(type, event.latlng)
    })

    marker.addTo(this.map)

    marker.on('mouseover', (e) => {
      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Highlight.png`,
      }))
    })

    marker.on('moveend', (e) => {
      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      }))
    })

    marker.on('mouseout', (e) => {
      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      }))
    })
  }

  private onMarkerMove(markerType, newLatlng) {
    switch (markerType) {
      case 'informer':
        this.informerMarkerLatlng = newLatlng
        break;
      case 'fire':
        this.fireMarkerLatlng = newLatlng
        break;
    }
  }
}
