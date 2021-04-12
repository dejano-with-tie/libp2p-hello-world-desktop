import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareFileRoutingModule} from './share-file-routing.module';
import {ShareFileComponent} from './share-file.component';
import {MaterialModule} from "../shared/material.module";
import {SharedModule} from "../shared/shared.module";
import {NgxFilesizeModule} from "ngx-filesize";

@NgModule({
  declarations: [ShareFileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShareFileRoutingModule,
    SharedModule,
    NgxFilesizeModule
  ]
})
export class ShareFileModule {
}
