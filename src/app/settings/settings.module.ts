import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../shared/material.module";


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {
}
