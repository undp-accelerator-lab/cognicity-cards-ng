import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { WindRoutingModule } from './wind-routing.module';

// Parent component
import { WindComponent } from './wind.component';

// Child components
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    WindRoutingModule,
    TranslateModule
  ],
  declarations: [
    WindComponent,
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
export class WindModule { }
