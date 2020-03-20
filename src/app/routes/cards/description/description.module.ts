import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';

// Child components
import { TextBoxComponent } from '../../../components/text-box/text-box.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    TranslateModule
  ],
  declarations: [
    DescriptionComponent,
    TextBoxComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class DescriptionModule { }
