import { Component, OnInit } from '@angular/core';

declare let L

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {
  private currentMarker: any

  constructor() { }

  ngOnInit() {
    const map = L.map('mapid').setView([-7.7, 110.2], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.control.locate({
      icon: 'locate'
    }).addTo(map);

    map.on('click', (event) => { 
      if (!this.currentMarker) {
        this.addMarker(event, map)
      } else {
        this.currentMarker.remove(map)
        this.addMarker(event, map)
      }
    })
  }

  private addMarker(e, map): void {
    const icon = L.icon({
      iconUrl: '../../../assets/decks/fire/location/SelectHazeLocation.png',
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    const marker = L.marker([e.latlng.lat, e.latlng.lng], { 
      icon,
      draggable: true, 
    })

    marker.on('click', () => {
      console.log('marker clicked')
    })

    marker.addTo(map)

    this.currentMarker = marker
  }
}
