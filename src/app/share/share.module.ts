import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {MaterialModule} from "../shared/material.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShareRoutingModule,
    SharedModule
  ]
})
export class ShareModule {
}
