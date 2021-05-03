import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';

// NG Translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShareFileModule} from "./share-file/share-file.module";
import {DownloadModule} from "./download/download.module";
import {SearchModule} from "./search/search.module";
import {SettingsModule} from "./settings/settings.module";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NetworkModule} from "./network/network.module";
import {NgProgressModule} from "ngx-progressbar";
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import {AppConfig} from "../environments/environment";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const config: SocketIoConfig = {url: AppConfig.socketUrl, options: {path: AppConfig.socketPath}};

@NgModule({
  declarations: [AppComponent],
  imports: [
    SocketIoModule.forRoot(config) ,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NgProgressModule.withConfig({
      color: "green",
      thick: true
    }),
    NgProgressHttpModule,

    ShareFileModule,
    DownloadModule,
    SearchModule,
    SettingsModule,
    NetworkModule,

    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
