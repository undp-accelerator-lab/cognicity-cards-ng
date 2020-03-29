import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessibilityRoutingModule } from './accessibility-routing.module';
import { AccessibilityComponent } from './accessibility.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [AccessibilityComponent],
  imports: [
    CommonModule,
    AccessibilityRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class AccessibilityModule { }
