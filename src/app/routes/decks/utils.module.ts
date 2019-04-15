import { NgModule } from '@angular/core';
import { DropdownNotificationComponent } from '../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../components/title-box/title-box.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownNotificationComponent,
    NavButtonComponent,
    TitleBoxComponent,
  ],
  exports: [
    DropdownNotificationComponent,
    NavButtonComponent,
    TitleBoxComponent,
  ]
})
export class UtilsModule {}