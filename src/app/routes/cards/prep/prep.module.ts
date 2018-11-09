import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrepRoutingModule } from './prep-routing.module';
import { PrepComponent } from './prep.component';
import { OptionsListComponent } from '../../../components/options-list/options-list.component';
import { OptionsGridComponent } from '../../../components/options-grid/options-grid.component';

@NgModule({
  imports: [
    CommonModule,
    PrepRoutingModule
  ],
  declarations: [PrepComponent, OptionsListComponent, OptionsGridComponent]
})
export class PrepModule { }
