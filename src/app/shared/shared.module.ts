import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {PageNotFoundComponent} from './components/';
import {WebviewDirective} from './directives/';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from "./components/layout/layout.component";
import {MaterialModule} from "./material.module";
import {RouterModule} from '@angular/router';
import {DownloadProgressComponent} from "./components/download-progress/download-progress.component";
import {LogMonitorModule} from "ngx-log-monitor";
import {BottomSheetOverviewExampleSheet, LogmonitorComponent} from "./components/logmonitor/logmonitor.component";
import {StatusBarComponent} from "./components/status-bar/status-bar.component";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, LayoutComponent, HeaderComponent, DownloadProgressComponent, LogmonitorComponent, BottomSheetOverviewExampleSheet, StatusBarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, RouterModule, MaterialModule, LogMonitorModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, LayoutComponent, HeaderComponent, DownloadProgressComponent, LogMonitorModule, LogmonitorComponent, StatusBarComponent]
})
export class SharedModule {
}
