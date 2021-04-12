import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DownloadRoutingModule} from './download-routing.module';
import {DownloadComponent} from './download.component';
import {SharedModule} from "../shared/shared.module";
import {NgxFilesizeModule} from "ngx-filesize";
import {MaterialModule} from "../shared/material.module";


@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DownloadRoutingModule,
    SharedModule,
    NgxFilesizeModule
  ]
})
export class DownloadModule {
}
