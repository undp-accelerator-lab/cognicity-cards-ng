import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { DepthRoutingModule } from './depth-routing.module';
import { DepthComponent } from './depth.component';

// Child components
import { DepthSliderComponent } from '../../../components/depth-slider/depth-slider.component';

@NgModule({
  imports: [
    CommonModule,
    DepthRoutingModule
  ],
  declarations: [
    DepthComponent,
    DepthSliderComponent
  ]
})
export class DepthModule { }
