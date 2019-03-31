import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { TypeComponent } from './type.component';
import { TypeButtonComponent } from '../../../components/type-button/type-button.component';

@NgModule({
  declarations: [
    TypeComponent,
    TypeButtonComponent
  ],
  imports: [
    CommonModule,
    TypeRoutingModule
  ]
})
export class TypeModule { }
