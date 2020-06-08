import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {CKEditorModule} from 'ngx-ckeditor';
import {QuillModule} from 'ngx-quill'

import {CkeditorComponent} from './ckeditor/ckeditor.component';
import {QuillComponent} from './quill/quill.component';

const routes: Routes = [
  {
    path: 'ckeditor',
    component: CkeditorComponent
  },
  {
    path: 'quill',
    component: QuillComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    QuillModule.forRoot(),
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CkeditorComponent,
    QuillComponent
  ]
})
export class EditorsModule {
}
