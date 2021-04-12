import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareFileComponent} from "./share-file.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: 'share',
    component: ShareFileComponent
  }
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareFileRoutingModule {
}
