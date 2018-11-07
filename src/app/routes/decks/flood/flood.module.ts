import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module for deck
import { FloodRoutingModule } from './flood-routing.module';

// Parent deck component
import { FloodComponent } from './flood.component';

// Child card components
import { LocationComponent } from '../../cards/location/location.component';
import { PhotoComponent } from '../../cards/photo/photo.component';
import { DescriptionComponent } from '../../cards/description/description.component';
import { DepthComponent } from '../../cards/depth/depth.component';
import { ReviewComponent } from '../../cards/review/review.component';

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
import { DepthSliderComponent } from '../../../components/depth-slider/depth-slider.component';

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
    PhotoComponent,
    DescriptionComponent,
    DepthComponent,
    ReviewComponent,
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
    SubmitSwipeComponent,
    DepthSliderComponent
  ]
})
export class FloodModule { }
