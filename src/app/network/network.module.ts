import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';
import {MaterialModule} from "../shared/material.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [NetworkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    NetworkRoutingModule
  ]
})
export class NetworkModule { }
