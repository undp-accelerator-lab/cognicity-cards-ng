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
  private fireMarker
  private radiusMarker
  private circleRadius
  public latlng: { lat: string, lng: string }

  private map

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.initMap()

    this.deckService.userCanBack()
    this.isUserAbleToContinue()
  }

  isUserAbleToContinue() {
    if (!this.deckService.getFireRadius()) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  private initMap(): void {
    let { lat, lng } = MONUMEN_NASIONAL_LAT_LNG;

    if (this.deckService.getFireLocation()) {
      lat = this.deckService.getFireLocation().lat
      lng = this.deckService.getFireLocation().lng
    }

    this.map = L.map('mapid', { center: [lat, lng], zoom: 18})

    const accessToken = 'pk.eyJ1IjoiaWxoYW13YWhhYmkiLCJhIjoiY2p5MGllYW96MDNoNjNobnF2cWh2c3dkZyJ9.Vfmf0KAT-gZBA4L2LF7PNg';
    
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.control.zoom({ position: 'bottomleft' })

    this.map.addControl(new L.Control.Compass());

    L.control.locate({ icon: 'locate' }).addTo(this.map);

    this.onLocateFound()
  }

  private onLocateFound(): void {
    this.addFireMarker()
    this.addRadiusMarker()
    this.addCircleRadius()
  }

  private addFireMarker() {
    const latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng }

    const fireMarkerConfig = {
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
    }

    const marker = L.marker(
      [latlng.lat, latlng.lng],
      fireMarkerConfig
    )

    if (this.fireMarker) this.fireMarker.remove(this.map)
    this.fireMarker = marker

    marker.addTo(this.map)
  }

  private addRadiusMarker() {
    let latlng;
    if (!this.deckService.getFireRadius()) {
      latlng = { lat: this.map.getCenter().lat, lng: this.map.getCenter().lng - this.map.getCenter().lng / 1000000 }
    } else {
      latlng = this.deckService.getFireRadius()
    }

    const radiusMarkerConfig = {
      icon: L.divIcon({
        className: 'radius-icon'
      }),
      draggable: true,
    }

    const marker = L.marker(
      [latlng.lat, latlng.lng],
      radiusMarkerConfig
    )

    if (this.radiusMarker) this.radiusMarker.remove(this.map)
    this.radiusMarker = marker

    marker.addTo(this.map)

    marker.on('move', (e) => {
      this.deckService.setFireRadius(e.latlng)
      this.deckService.userCanContinue()
      this.addCircleRadius()
    })
  }

  private addCircleRadius(): void {
    const radius = this.map.distance(
      this.fireMarker.getLatLng(), 
      this.radiusMarker.getLatLng()
    )
    
    const circle = L.circle(
      [
        this.fireMarker.getLatLng().lat,
        this.fireMarker.getLatLng().lng,
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
