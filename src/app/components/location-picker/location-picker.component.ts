import { Component, OnInit } from '@angular/core';

declare let L

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('mapid').setView([-7.7, 110.2], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.control.locate({
      icon: 'locate'
    }).addTo(map);
    // var marker = L.marker([-7.7, 110.2], { icon: myIcon }).addTo(map);

    map.on('click', (event) => { this.onMapClicked(event, map) })
  }

  onMapClicked(e, map) {
    console.log(e.latlng)
    var myIcon = L.icon({
      iconUrl: '../../../assets/decks/fire/location/SelectHazeLocation.png',
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    L.marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(map)
  }

}
