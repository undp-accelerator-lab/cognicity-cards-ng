import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../../services/cards/deck.service'
import { MONUMEN_NASIONAL_LAT_LNG } from '../../../../utils/const';

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

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.initMap()
  }

  private initMap(): void {
    let { lat, lng } = MONUMEN_NASIONAL_LAT_LNG;

    if (this.deckService.getFireLocation()) {
      lat = this.deckService.getFireLocation().lat
      lng = this.deckService.getFireLocation().lng
    }

    this.map = L.map('mapid', { center: [lat, lng], zoom: 18})

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    L.control.zoom({ position: 'bottomleft' })

    this.map.addControl(new L.Control.Compass());

    L.control.locate({ icon: 'locate' }).addTo(this.map);

    this.onLocateFound()
  }

  private onLocateFound(): void {
    this.addMarker('informer')
    this.addMarker('radius')
    this.addCircleRadius()
  }

  private addMarker(type: 'informer' | 'radius'): void {
    let latlng: { lat, lng };
    switch (type) {
      case 'informer':
        latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng }
        break;
      case 'radius':
        if (!this.deckService.getFireRadius()) {
          latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng - this.map.getCenter().lng / 1000000 }
        } else {
          latlng = this.deckService.getFireRadius()
        }
        break;
    }

    const informerMarkerConfig = {
      icon: L.divIcon({
        className: 'informer-icon',
        html: `
          <div style="display: flex; flex-direction: column; align-items: center">
            <img 
              src="../../../assets/decks/fire/location/SelectFireLocation_Highlight.png"
              style="width: 25px;"
            />
            <p style="width: 75px; text-align: center;" id="ha">${this.fireRange} hectares</p>
          </div>
        `,
        iconAnchor: [8, 42.5],
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

    marker.on('move', (e) => {
      switch (type) {
        case 'informer':
          this.deckService.setFireLocation(e.latlng)
          break
        case 'radius':
          this.deckService.setFireRadius(e.latlng)
          break
      }
      this.addCircleRadius()
    })
  }

  private addCircleRadius(): void {
    const radius = this.map.distance(
      this.informerMarker.getLatLng(), 
      this.radiusMarker.getLatLng()
    )
    
    const circle = L.circle(
      [
        this.informerMarker.getLatLng().lat,
        this.informerMarker.getLatLng().lng,
      ],
      {
        radius,
        className: 'radius-circle'
      }
    )

    this.deckService.setFireDistance(radius)

    document.getElementById('ha').innerText = `${this.fireRange} hectares` 

    if (this.circleRadius) this.circleRadius.remove(this.map)
    this.circleRadius = circle

    this.circleRadius.addTo(this.map);
  }

  get fireRange() {
    const radius = this.deckService.getFireDistance()
    const range = Math.PI * Math.pow(radius, 2) / 10000
    
    return range.toFixed(2)
  }
}
