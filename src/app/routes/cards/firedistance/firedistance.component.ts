import { Component, OnInit } from "@angular/core";
import { FireService } from "../../../services/cards/fire/fire.service";

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

  constructor(private fireService: FireService) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    this.map = L.map("mapid").setView([-7.5, 110.2], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );

    // Add compass
    this.map.addControl(new L.Control.Compass());

    // Add locate
    const locate = L.control
      .locate({
        icon: "locate"
      })
      .addTo(this.map);

    // Locate user current location
    locate.start();

    this.map.on("locationfound ", () => {
      this.onLocateFound();
    });
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
    const distanceInString = `${ceiledDistance.toString()} m`;

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
        this.fireService.setInformerLocation(latlng);
        break;
      case "fire":
        latlng = {
          lat: this.map.getCenter().lat,
          lng: this.map.getCenter().lng - this.map.getCenter().lng / 100000
        };
        this.fireService.setFireLocation(latlng);
        break;
    }

    const marker = L.marker([latlng.lat, latlng.lng], {
      icon: L.icon({
        iconUrl: `${this.rootIconDir}/Select${
          type === "fire" ? "Fire" : ""
        }Location_Grey.png`,
        iconSize: [57.2 / 2, 103.5 / 2],
        iconAnchor: [15, 50]
      }),
      draggable: true
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
    marker.on("move", () => {
      this.addDistanceLine();
    });

    // Change marker icon when drag and drop
    marker.on("mouseover", () => {
      this.setMarkerIcon(marker, type, true);
    });
    marker.on("moveend", () => {
      this.setMarkerIcon(marker, type);
    });
    marker.on("mouseout", () => {
      this.setMarkerIcon(marker, type);
    });
  }

  private setMarkerIcon(marker, type, highlight = false): void {
    marker.setIcon(
      L.icon({
        iconUrl:
          `${this.rootIconDir}` +
          `/Select${type === "fire" ? "Fire" : ""}` +
          `Location_${highlight ? "Highlight" : "Grey"}.png`
      })
    );
  }
}
