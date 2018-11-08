import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module for deck
import { FloodRoutingModule } from './flood-routing.module';

// Parent deck component
import { FloodComponent } from './flood.component';

// Components used in deck
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    FloodRoutingModule
  ],
  declarations: [
    // Deck
    FloodComponent,
    // Deck components
    NavButtonComponent,
    DropdownNotificationComponent,
    TitleBoxComponent
  ]
})
export class FloodModule { }
