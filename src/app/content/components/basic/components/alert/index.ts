export * from './alert.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdAlert} from './alert.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdAlert],
  declarations: [NgbdAlert, ...DEMO_DIRECTIVES]
})
export class NgbdAlertModule {}
