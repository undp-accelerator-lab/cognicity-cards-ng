import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module for deck
import { FloodRoutingModule } from './flood-routing.module';

// Parent deck component
import { FloodComponent } from './flood.component';

// Child card components
import { LocationComponent } from '../../cards/location/location.component';

// Components used in deck
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

// Components used in cards
import { TextBoxComponent } from '../../../components/text-box/text-box.component';
import { LocationPickerComponent } from '../../../components/location-picker/location-picker.component';
import { OptionsGridComponent } from '../../../components/options-grid/options-grid.component';
import { OptionsListComponent } from '../../../components/options-list/options-list.component';
import { ImageUploaderComponent } from '../../../components/image-uploader/image-uploader.component';
import { SubmitSwipeComponent } from '../../../components/submit-swipe/submit-swipe.component';

@NgModule({
  imports: [
    CommonModule,
    FloodRoutingModule
  ],
  declarations: [
    // Deck
    FloodComponent,
    // Cards
    LocationComponent,
    // Deck components
    NavButtonComponent,
    DropdownNotificationComponent,
    TitleBoxComponent,
    // Card components
    TextBoxComponent,
    LocationPickerComponent,
    OptionsGridComponent,
    OptionsListComponent,
    ImageUploaderComponent,
    SubmitSwipeComponent
  ]
})
export class FloodModule { }
