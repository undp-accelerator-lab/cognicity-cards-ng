import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { TypeComponent } from './type.component';
import { TypeButtonComponent } from '../../../components/type-button/type-button.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TypeComponent,
    TypeButtonComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    TypeRoutingModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class TypeModule { }
