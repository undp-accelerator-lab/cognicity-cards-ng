import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckRoutingModule, AuthGuard } from './deck-routing.module';
import { DeckComponent } from './deck.component';

@NgModule({
  imports: [
    CommonModule,
    DeckRoutingModule
  ],
  declarations: [DeckComponent],
  providers: [AuthGuard]
})
export class DeckModule { }
