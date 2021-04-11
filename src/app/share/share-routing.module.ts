import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareComponent} from "./share.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: 'share',
    component: ShareComponent
  }
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule {
}
