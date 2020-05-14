import { Component, OnInit } from "@angular/core";
import { OpenStreetMapProvider } from 'leaflet-geosearch';

import { DeckService } from '../../../services/cards/deck.service'
import { MONUMEN_NASIONAL_LAT_LNG } from "../../../../utils/const";

declare let L;

@Component({
  selector: "app-firedistance",
  templateUrl: "./firedistance.component.html",
  styleUrls: ["./firedistance.component.scss"]
})
export class FiredistanceComponent implements OnInit {
  private rootIconDir = "../../../assets/decks/fire/location";

  private informerMarker;
  private fireMarker;
  private map;
  private distanceLine;
  private provider;
  public search;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.initMap();

    this.deckService.userCannotBack()
    this.isUserAbleToContinue()
  }

  isUserAbleToContinue() {
    if (!this.deckService.getLocation() && !this.deckService.getFireLocation()) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  private initMap() {
    let { lat, lng } = MONUMEN_NASIONAL_LAT_LNG

    if (this.deckService.getFireLocation()) {
      lat = this.deckService.getLocation().lat
      lng = this.deckService.getLocation().lng
    }

    this.map = L.map('mapid', { 
      center: [ lat, lng ],
      zoom: 16
    });

    const accessToken = 'pk.eyJ1IjoiaWxoYW13YWhhYmkiLCJhIjoiY2p5MGllYW96MDNoNjNobnF2cWh2c3dkZyJ9.Vfmf0KAT-gZBA4L2LF7PNg';
    
    L.tileLayer(`https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${accessToken}`, {
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Add compass
    this.map.addControl(new L.Control.Compass());

    // Check if there is any error (ex: user turn off geolocation)
    this.checkGeolocation()

    // Add locate
    const locate = L.control.locate({ icon: 'locate', keepCurrentZoomLevel: true }).addTo(this.map);

    if (this.deckService.getLocation()) this.onLocateFound()
    else locate.start() // Locate user current location

    this.map.on("locationfound ", () => this.onLocateFound() );

    this.provider = new OpenStreetMapProvider();
  }

  private checkGeolocation() {    
    const addMarkerAtMonas = () => {
      this.onLocateFound()
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onLocateFound, addMarkerAtMonas);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  private onLocateFound(): void {
    this.addMarker("informer");
    this.addMarker("fire");
    this.addDistanceLine();
  }

  private countDistance(): string {
    const distanceInMeter = this.map.distance(
      this.fireMarker.getLatLng(),
      this.informerMarker.getLatLng()
    );
    const ceiledDistance = Math.ceil(distanceInMeter);

    let distanceInString;
    if (ceiledDistance >= 1000) {
      distanceInString = `${(ceiledDistance / 1000).toString()} km`;
    } else {
      distanceInString = `${ceiledDistance.toString()} m`;
    }

    return distanceInString;
  }

  private addDistanceLine(): void {
    if (this.distanceLine) this.distanceLine.remove(this.map);

    this.distanceLine = L.polyline(
      [this.fireMarker.getLatLng(), this.informerMarker.getLatLng()],
      {
        color: "red"
      }
    ).addTo(this.map);

    this.distanceLine.setText(this.countDistance(), {
      repeat: false,
      offset: 12,
      center: true
    });
  }

  private addMarker(type: "informer" | "fire"): void {
    let latlng;
    switch (type) {
      case "informer":
        latlng = {
          lat: this.map.getCenter().lat,
          lng: this.map.getCenter().lng
        };
        this.deckService.setLocation(latlng);
        break;
      case "fire":
        if (!this.deckService.getFireLocation()) {
          latlng = {
            lat: this.map.getCenter().lat,
            lng: this.map.getCenter().lng - this.map.getCenter().lng / 100000
          };
          this.deckService.setFireLocation(latlng);
        } else {
          latlng = this.deckService.getFireLocation()
        }
        break;
    }

    const marker = L.marker([latlng.lat, latlng.lng], {
      icon: this.getIcon(type),
      draggable: true,
      opacity: 0.5,
    });

    switch (type) {
      case "informer":
        if (this.informerMarker) this.informerMarker.remove(this.map);
        this.informerMarker = marker;
        break;
      case "fire":
        if (this.fireMarker) this.fireMarker.remove(this.map);
        this.fireMarker = marker;
        break;
    }
    marker.addTo(this.map);

    // Adjust distance line between informer and fire
    marker.on("move", (e) => {
      this.deckService.userCanContinue()

      switch (type) {
        case "informer":
          this.deckService.setLocation(e.latlng)
          break;
        case "fire":
          this.deckService.setFireLocation(e.latlng)
          break;
      }
      this.addDistanceLine();
    });

    // Change marker icon when drag and drop
    // change icon directly cause marker is not reactive so change opacity instead
    // not reactive = when doing drag, sometimes marker is left behind
    marker.on("mouseover", () => {
      marker.setOpacity(1)
    });
    marker.on("moveend", () => {
      marker.setOpacity(0.75)
    });
    marker.on("mouseout", () => {
      marker.setOpacity(0.75)
    });
  }

  async onSearch(query: string) {
    const results = await this.provider.search({ query });

    this.map.setView({ lat: results[0].y, lng: results[0].x }, 18)

    this.addMarker("informer");

    this.deckService.setFireLocation(null);
    this.addMarker("fire");
    
    this.addDistanceLine();
  }

  getIcon(type: 'informer' | 'fire') {
    return L.icon({
      iconUrl: `${this.rootIconDir}/Select${
        type === "fire" ? "Fire" : ""
        }Location_Grey.png`,
      iconSize: [57.2 / 2, 103.5 / 2],
      iconAnchor: [15, 50],
    })
  }
}
