import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShareFileRoutingModule} from "./share-file/share-file-routing.module";
import {DownloadRoutingModule} from "./download/download-routing.module";
import {SearchRoutingModule} from "./search/search-routing.module";
import {SettingsRoutingModule} from "./settings/settings-routing.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    ShareFileRoutingModule,
    DownloadRoutingModule,
    SearchRoutingModule,
    SettingsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
