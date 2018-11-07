import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  checkOTL(stage, otl) {
    if (
      otl === 'error'
      || otl === 'thanks'
    ) {
      return true;
    }

    if (
      stage === 'dev'
      && otl === 'test123'
    ) {
      return true;
    }

    console.log('Unknown OTL');

    // TODO: check against cards server

    return false;
  }
}
