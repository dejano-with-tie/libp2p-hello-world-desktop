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
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, LayoutComponent, HeaderComponent, ProgressBarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, RouterModule, MaterialModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, LayoutComponent, HeaderComponent, ProgressBarComponent]
})
export class SharedModule {
}
