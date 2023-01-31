import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationMediumComponent } from './notificationmedium.component';

const routes: Routes = [{ path: '', component: NotificationMediumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationMediumRoutingModule {}
