import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { DeckRoutingModule } from './deck-routing.module';

// Parent component
import { DeckComponent } from './deck.component';

// Child components
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    DeckRoutingModule,
    TranslateModule
  ],
  declarations: [
    DeckComponent,
    NavButtonComponent,
    DropdownNotificationComponent,
    TitleBoxComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class DeckModule { }
