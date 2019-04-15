import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import * as L from 'leaflet'

declare let L

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {
  @Input() type: string
  provider: any
  map: any

  private currentMarker: any
  public latlng: { lat: string, lng: string }

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.map = L.map('mapid', { center: [-7.7, 110.2], zoom: 18});    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    L.control.zoom({ position: 'bottomleft' })

    const locate = L.control.locate({ icon: 'locate', keepCurrentZoomLevel: true }).addTo(this.map);
    locate.start()

    this.map.addControl(new L.Control.Compass());
    this.map.on('locationfound ', (event) => { 
      if (this.currentMarker) this.currentMarker.remove(this.map)      
      this.addMarker(event)
    })

    this.map.on('click', (event) => {
      if (this.currentMarker) this.currentMarker.remove(this.map)
      this.addMarker(event)
    })

    this.provider = new OpenStreetMapProvider()
  }

  async onSearch(query: string) {
    const results = await this.provider.search({ query });

    this.map.setView({ lat: results[0].y, lng: results[0].x }, 18)
    if (this.currentMarker) this.currentMarker.remove(this.map)

    const icon = L.icon({
      iconUrl: this.getIcon(),
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    const marker = L.marker([results[0].y, results[0].x], { icon, draggable: true })

    this.latlng = { lat: results[0].y, lng: results[0].x }
    this.deckService.setLocation({ lat: results[0].y, lng: results[0].x })

    marker.on('move', (event) => {
      this.latlng = event.latlng
      this.deckService.setLocation({ lat: results[0].y, lng: results[0].x })
    })

    marker.addTo(this.map)

    this.currentMarker = marker
  }

  private addMarker(e): void {
    const icon = L.icon({
      iconUrl: this.getIcon(),
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    const marker = L.marker([e.latlng.lat, e.latlng.lng], { icon, draggable: true })

    this.latlng = e.latlng
    this.deckService.setLocation(e.latlng)

    marker.on('move', (event) => {
      this.latlng = event.latlng
      this.deckService.setLocation(e.latlng)
    })

    marker.addTo(this.map)

    this.currentMarker = marker
  }

  getIcon() {
    switch (this.type) {
      case 'structure':
        return '../../../assets/decks/earthquake/eqlocation/AddStructureFailureIcon_Location.png'
      case 'road':
        return '../../../assets/decks/earthquake/eqlocation/AddAccessReportIcon_Location.png'
      case 'wind':
        return '../../../assets/decks/wind/windlocation/Wind_Pin.png'
      default:
        return '../../../assets/decks/fire/location/SelectHazeLocation.png';
    }
  }
}
