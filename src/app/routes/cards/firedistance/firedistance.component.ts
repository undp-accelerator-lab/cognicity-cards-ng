import { Component, OnInit } from '@angular/core';

declare let L

@Component({
  selector: 'app-firedistance',
  templateUrl: './firedistance.component.html',
  styleUrls: ['./firedistance.component.scss']
})
export class FiredistanceComponent implements OnInit {
  private currentInformerMarker: any
  private currentFireMarker: any
  public latlng: { lat: string, lng: string }

  constructor() { }

  ngOnInit() {
    const initialLatLng = [-7.5, 110.2]
    const map = L.map('mapid').setView(initialLatLng, 8);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(map);

    L.control.locate({
      icon: 'locate'
    }).addTo(map);

    map.addControl( new L.Control.Compass() );

    map.on('zoomend', (event) => {
      console.log(event)
    })

    this.addMarker({ lat: initialLatLng[0], lng: initialLatLng[1] + initialLatLng[1] / 500 }, map, 'informer')
    this.addMarker({ lat: initialLatLng[0], lng: initialLatLng[1] - initialLatLng[1] / 500 }, map, 'fire')
  }

  private addMarker(latlng, map, type: 'informer' | 'fire'): void {
    const icon = L.icon({
      iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    const marker = L.marker([latlng.lat, latlng.lng], { 
      icon,
      draggable: true, 
    })

    this.latlng = latlng

    marker.on('move', (event) => {
      this.latlng = event.latlng
    })

    marker.addTo(map)

    marker.on('mouseover', (e) => {
      console.log('mouseover', e)

      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Highlight.png`,
      }))
    })

    marker.on('dragend', (e) => {
      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      }))
    })

    marker.on('mouseout', (e) => {
      marker.setIcon(L.icon({
        iconUrl: `../../../assets/decks/fire/location/Select${type === 'fire' ? 'Fire' : ''}Location_Grey.png`,
      }))
    })

    switch (type) {
      case 'informer':
        this.currentInformerMarker = marker
        break;
      case 'fire':
        this.currentFireMarker = marker
        break;
    }
  }
}
