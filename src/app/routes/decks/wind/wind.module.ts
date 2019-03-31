import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { WindRoutingModule } from './wind-routing.module';

// Parent component
import { WindComponent } from './wind.component';

import { UtilsModule } from '../utils.module';

@NgModule({
  imports: [
    CommonModule,
    WindRoutingModule,
    TranslateModule,
    UtilsModule
  ],
  declarations: [
    WindComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class WindModule { }
