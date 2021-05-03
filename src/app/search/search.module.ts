import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {MaterialModule} from "../shared/material.module";
import {SharedModule} from "../shared/shared.module";
import {NgxFilesizeModule} from "ngx-filesize";


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SearchRoutingModule,
    SharedModule,
    NgxFilesizeModule
  ]
})
export class SearchModule {
}
