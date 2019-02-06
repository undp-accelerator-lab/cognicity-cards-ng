import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../services/cards/fire/fire.service'

declare let L

@Component({
  selector: 'app-fireestimate',
  templateUrl: './fireestimate.component.html',
  styleUrls: ['./fireestimate.component.scss']
})
export class FireestimateComponent implements OnInit {
  private informerMarker
  private radiusMarker
  private circleRadius
  public latlng: { lat: string, lng: string }

  private map

  constructor(private fireService: FireService) { }

  ngOnInit() {
    this.initMap()
  }

  private initMap(): void {
    let lat = -7.7;
    let lng = 110.2
    if (this.fireService.getFireLocation()) {
      lat = this.fireService.getFireLocation().lat
      lng = this.fireService.getFireLocation().lng
    }

    this.map = L
      .map('mapid')
      .setView([lat, lng], 15);

    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);

    L
      .control
      .zoom({
        position: 'bottomleft'
      })

    this.map.addControl(new L.Control.Compass());

    L
      .control
      .locate({
        icon: 'locate'
      })
      .addTo(this.map);

    // locate.start()

    this.onLocateFound()

    // this.map.on('locationfound ', () => { this.onLocateFound() })
  }

  private onLocateFound(): void {
    this.addMarker('informer')
    this.addMarker('radius')
    this.addCircleRadius()
  }

  private addMarker(type: 'informer' | 'radius'): void {
    let latlng;
    switch (type) {
      case 'informer':
        latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng }
        break;
      case 'radius':
        latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng - this.map.getCenter().lng / 100000 }
        break;
    }

    const informerMarkerConfig = {
      icon: L.icon({
        iconUrl: '../../../assets/decks/fire/location/SelectFireLocation_Highlight.png',
        iconSize: [57.2 / 2, 103.5 / 2],
        iconAnchor: [15, 50],
        popupAnchor: [-3, -76],
      }),
      draggable: true,
    }

    const radiusMarkerConfig = {
      icon: L.divIcon({
        className: 'radius-icon'
      }),
      draggable: true,
    }

    const marker = L.marker(
      [latlng.lat, latlng.lng],
      type === 'informer' ? informerMarkerConfig : radiusMarkerConfig
    )

    switch (type) {
      case 'informer':
        if (this.informerMarker) this.informerMarker.remove(this.map)
        this.informerMarker = marker
        break
      case 'radius':
        if (this.radiusMarker) this.radiusMarker.remove(this.map)
        this.radiusMarker = marker
        break
    }

    marker.addTo(this.map)

    marker.on('move', () => { this.addCircleRadius() })
  }

  private addCircleRadius(): void {
    const circle = L.circle(
      [
        this.informerMarker.getLatLng().lat,
        this.informerMarker.getLatLng().lng,
      ],
      {
        radius: this.map.distance(this.informerMarker.getLatLng(), this.radiusMarker.getLatLng()),
        className: 'radius-circle'
      }
    )

    if (this.circleRadius) this.circleRadius.remove(this.map)
    this.circleRadius = circle

    this.circleRadius.addTo(this.map);
  }
}
