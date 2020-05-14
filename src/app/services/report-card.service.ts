import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportCardService {
  reportMetadata: {
    disasterType: string,
    network: string,
    language: string,
  };

  cardData: {
    location: {
      lat: number,
      long: number,
    },
    text: string,
    depth: number,
    reportType: string,
  };

  constructor() { }
}
