import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';

// Card route components
import { IconButtonComponent } from '../../../components/icon-button/icon-button.component';
import { ImageUploaderComponent } from '../../../components/image-uploader/image-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [
    PhotoComponent,
    IconButtonComponent,
    ImageUploaderComponent
  ]
})
export class PhotoModule { }
