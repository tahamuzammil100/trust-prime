import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@gaxon/modules';
import {RouterModule, Routes} from '@angular/router';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import {BasicFormComponent} from './basic-form/basic-form.component';
import {AdvancedFormComponent} from './advanced-form/advanced-form.component';
import {FileUploadComponent} from './file-upload/file-upload.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'http://demo.g-axon.com/dropzone/upload.php',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

const routes: Routes = [
  {
    path: 'basic-form',
    component: BasicFormComponent
  },
  {
    path: 'advanced-form',
    component: AdvancedFormComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DropzoneModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  declarations: [
    BasicFormComponent,
    AdvancedFormComponent,
    FileUploadComponent
  ]
})
export class FormsModule {
}
