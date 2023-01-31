import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationMediumRoutingModule } from './notificationmedium-routing.module';
import { NotificationMediumComponent } from './notificationmedium.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { InputBoxComponent } from '../../../components/input-box/input-box.component';

@NgModule({
  declarations: [
    NotificationMediumComponent,
    InputBoxComponent,
  ],
  imports: [
    CommonModule,
    NotificationMediumRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    TranslatePipe
  ]
})
export class NotificationmediumModule { }
