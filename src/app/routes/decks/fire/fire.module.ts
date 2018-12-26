import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { FireRoutingModule } from './fire-routing.module';

// Parent component
import { FireComponent } from './fire.component';

// Child components
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    FireRoutingModule,
    TranslateModule
  ],
  declarations: [
    FireComponent,
    NavButtonComponent,
    DropdownNotificationComponent,
    TitleBoxComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class FireModule { }
