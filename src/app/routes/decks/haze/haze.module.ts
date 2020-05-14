import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { HazeRoutingModule } from './haze-routing.module';

// Parent component
import { HazeComponent } from './haze.component';
import { UtilsModule } from '../utils.module';



@NgModule({
  imports: [
    CommonModule,
    HazeRoutingModule,
    TranslateModule,
    UtilsModule
  ],
  declarations: [
    HazeComponent,
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class HazeModule { }
