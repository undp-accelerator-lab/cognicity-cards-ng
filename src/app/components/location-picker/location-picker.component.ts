import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';

declare let L

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {
  @Input() type: string

  private currentMarker: any
  public latlng: { lat: string, lng: string }

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    const map = L
      .map('mapid')
      .setView([-7.7, 110.2], 15);

    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(map);

    L
      .control
      .zoom({
        position: 'bottomleft'
      })

    const locate = L
      .control
      .locate({
        icon: 'locate'
      })
      .addTo(map);

    locate.start()

    map.addControl(new L.Control.Compass());
    map.on('locationfound ', (event) => { this.addMarker(event, map) })

    map.on('click', (event) => {
      if (this.currentMarker) this.currentMarker.remove(map)
      this.addMarker(event, map)
    })
  }

  private addMarker(e, map): void {
    const icon = L.icon({
      iconUrl: this.getIcon(),
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
      popupAnchor: [-3, -76],
    });

    const marker = L.marker([e.latlng.lat, e.latlng.lng], {
      icon,
      draggable: true,
    })

    this.latlng = e.latlng
    this.deckService.setLocation(e.latlng)

    marker.on('move', (event) => {
      this.latlng = event.latlng
      this.deckService.setLocation(e.latlng)
    })

    marker.addTo(map)

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
