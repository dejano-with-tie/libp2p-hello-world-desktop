import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NetworkComponent} from "./network.component";

const routes: Routes = [{
  path: 'network',
  component: NetworkComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule {
}
