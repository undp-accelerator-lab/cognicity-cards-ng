import { Component, OnInit, OnChanges } from '@angular/core';
import { latLng } from 'leaflet';

declare let L

interface latlng { 
  lat: string
  lng: string 
}


@Component({
  selector: 'app-firedistance',
  templateUrl: './firedistance.component.html',
  styleUrls: ['./firedistance.component.scss']
})
export class FiredistanceComponent implements OnInit {
  private informerMarkerLatlng: latlng
  private fireMarkerLatlng: latlng

  constructor() { }

  ngOnInit() {
    const initialMapLatlng = [-7.5, 110.2]

    const map = L
      .map('mapid')
      .setView(initialMapLatlng, 8);

    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(map);


    // Add compass
    map.addControl( new L.Control.Compass() );

    // Add locate
    const locate = L
      .control
      .locate({
        icon: 'locate'
      })
      .addTo(map);

    locate.start()

    map.on('locationfound ', (e) => {
      const initialInformerMarkerLatlng = { lat: map.getCenter().lat, lng: map.getCenter().lng }
      const initialFireMarkerLatlng = { lat: map.getCenter().lat, lng: map.getCenter().lng - map.getCenter().lng / 500000 }

      if (!this.fireMarkerLatlng && !this.informerMarkerLatlng) {
        this.addMarker(initialInformerMarkerLatlng, map, 'informer')
        this.addMarker(initialFireMarkerLatlng, map, 'fire')  
      }
      
      const latlngs = [
        initialFireMarkerLatlng,
        initialInformerMarkerLatlng,
      ];
      
      const line = L
        .polyline(latlngs, {
          color: 'red',
        })
        .addTo(map);

      line.setText('5 km', {
        repeat: false, 
        offset: 12,
      })
    })
  }

  private addMarker(latlng, map, type: 'informer' | 'fire'): void {
    const icon = L.icon({
      iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50]
    });

    const marker = L.marker([latlng.lat, latlng.lng], { 
      icon,
      draggable: true, 
    })

    switch (type) {
      case 'informer':
        this.informerMarkerLatlng = latlng
        break;
      case 'fire':
        this.fireMarkerLatlng = latlng
        break;
    }

    marker.on('move', (event) => {
      switch (type) {
        case 'informer':
          this.informerMarkerLatlng = latlng
          break;
        case 'fire':
          this.fireMarkerLatlng = latlng
          break;
      }
    })

    marker.addTo(map)

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
}
