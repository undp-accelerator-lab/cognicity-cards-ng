import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { FireRoutingModule } from './fire-routing.module';

// Parent component
import { FireComponent } from './fire.component';

import { UtilsModule } from '../utils.module';

@NgModule({
  imports: [
    CommonModule,
    FireRoutingModule,
    TranslateModule,
    UtilsModule
  ],
  declarations: [
    FireComponent,
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class FireModule { }
