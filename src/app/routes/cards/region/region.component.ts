import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../../services/cards/deck.service';
import { environment as env } from '../../../../environments/environment';

import { TranslateService } from '@ngx-translate/core';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  private fireMarker;
  private radiusMarker;
  private geojson;
  private circleRadius;
  public latlng: { lat: string; lng: string };

  private map;

  constructor(
    private deckService: DeckService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.initMap();
    this.deckService.userCanBack();
    this.deckService.userCanContinue();
  }

  private async initMap() {
    let { lat, lng } = env.default_location;
    if (this.deckService.getFireLocation()) {
      lat = this.deckService.getFireLocation().lat;
      lng = this.deckService.getFireLocation().lng;
    }

    mapboxgl.accessToken =
      'pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ';
    this.map = new mapboxgl.Map({
      container: 'mapid', // container ID
      style: 'mapbox://styles/petabencana/ckq0nc6hp01vw17p9n17yxue2', // style URL
      center: [lng, lat],
      minZoom: 4,
      zoom: 8,
    });

    const self = this;

    const data = await self.getData();
    self.map.on('load', () => {
      self.addMapSource(data);
    });
  }

  private addMapSource(data) {
  
    try {
      if (this.map._loaded) {
        this.map.addSource('cities', {
          type: 'geojson',
          data: data,
        });

        this.map.addLayer({
          id: 'cities-fill',
          type: 'fill',
          source: 'cities',
          paint: {
            'fill-outline-color': 'red',
            'fill-color': 'rgba(0,0,0,0.1)',
          },
        });
        this.map.addLayer({
          id: 'cities-highlighted',
          type: 'fill',
          source: 'cities',
          paint: {
            'fill-outline-color': '#484896',
            'fill-color': '#6e599f',
            'fill-opacity': 0.75,
          },
          filter: ['in', 'region_code', ''],
        });
        this.map.on('click', (e) => {
          // Set `bbox` as 5px reactangle area around clicked point.
          const bbox = [
            [e.point.x - 5, e.point.y - 5],
            [e.point.x + 5, e.point.y + 5],
          ];
          // Find features intersecting the bounding box.
          const selectedFeatures = this.map.queryRenderedFeatures(bbox, {
            layers: ['cities-fill'],
          });
          this.deckService.setSelectedRegion(selectedFeatures[0]);
          const features = selectedFeatures.map(
            (feature) => feature.properties.region_code
          );
          // Set a filter matching selected features by FIPS codes
          // to activate the 'counties-highlighted' layer.
          this.map.setFilter('cities-highlighted', [
            'in',
            'region_code',
            ...features,
          ]);
        });
      }
    } catch (err) {
      console.log('err hre', err);
    }
  }

  private getData() {
    return new Promise((resolve, reject) => {
      this.deckService
        .getCitiesData()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject([]);
        });
    });
  }
}
