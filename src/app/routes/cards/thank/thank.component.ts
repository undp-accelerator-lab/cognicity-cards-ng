import { Component } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service'
import { NavigationService } from '../../../services/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ThankComponent {
  isShowReportAgain = false
  reportAgainText = ''

  constructor(
    public deckService: DeckService,
    public navController: NavigationService,
    public translate: TranslateService,
    private http: HttpClient,
    private router: Router
  ) {
    const deckType = this.deckService.getDeckType()
    if (deckType === 'earthquake' || 'flood' && this.deckService.finishedSubType.length === 0) {
      this.isShowReportAgain = true

      switch(this.deckService.getDeckSubType()) {
        case 'road':
          this.reportAgainText = 'card.reportAgainStructure'
          break;
        case 'structure':
          this.reportAgainText = 'card.reportAgainAccess'
          break;
        case 'flood':
          this.reportAgainText = 'card.reportAgainFlood'
          break;
      }
    }

    this.deckService.reset()
  }

  get typeImage(): string {
    switch (this.deckService.getDeckSubType()) {
      case 'fire': return '../../../assets/decks/fire/thanks/SuccessFireReport.png';
      case 'haze': return '../../../assets/decks/fire/thanks/SuccessHazeReport.png';
      case 'flood': return '../../../assets/decks/flood/thanks/SuccessFloodReport.svg';

      case 'road': return '../../../../assets/decks/earthquake/thanks/AddAccessReportIcon_Success.png'
      case 'structure': return '../../../../assets/decks/earthquake/thanks/AddStructureFailureIcon_Success.png'

      case 'wind': return '../../../../assets/decks/wind/thank/success_wind.png'

      case 'volcano': return '../../../../assets/decks/volcano/thank/success.png'
    }
  }

  reportAnotherCard() {
    this.deckService.setSubSubmission();
    let newDeckSubType: any
    if(this.deckService.getDeckType() === 'earthquake' || 'flood' ){
      if(this.deckService.getDeckType() === 'flood'){
        newDeckSubType = 'flood'
        this.reportDisaster('flood');
      } else{
        newDeckSubType = this.deckService.getDeckSubType() === 'road' ? 'structure' : 'road';
      }
      this.deckService.setDeckSubType(newDeckSubType);
      this.navController.filterRoutes(newDeckSubType);
      this.navController.resetEqDeckToLocation(this.deckService.getRoute());
    }else{
      this.navController.reset(this.deckService.getRoute());
    }

    // console.log('deckType',this.deckService.getDeckType());
    // console.log('deckSubType',this.deckService.getDeckSubType());
  }
  initiateReport(type: any): Promise<Boolean> { 
    return new Promise((resolve, reject) => {
      if(type){
        const headers = new HttpHeaders().set('x-api-key', env.data_server_key);
        const url = env.data_server + "cards/";
        const body = {
          username: "web_guest",
          language: window.navigator.language,
          network: "website",
        };
        this.http.post(url, body, {headers: headers})
        .subscribe((result: any) => {
          if (result.statusCode && result.statusCode === 200) {
            resolve(true); 
          } else {
            reject(result); 
          }
        },
        (error) => {
          reject(error);
        }
        )
      } else{
        reject("Error with report id");
      }
    })
  }

  reportDisaster(type: any) {
    this.initiateReport(type).then((cardId) => {
      this.router.navigate([env.cards_server + cardId + "/" + type]);
    })
    .catch((err) => {
      console.log("Report not initiated");
    });
  }
}