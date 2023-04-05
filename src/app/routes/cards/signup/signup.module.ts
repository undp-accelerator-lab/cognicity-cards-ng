import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './signup.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { UtilsModule } from '../../decks/utils.module';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    UtilsModule,
    CommonModule,
    SignUpRoutingModule,
    TranslateModule
  ],
  exports: [
    UtilsModule,
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class SignupModule { }
