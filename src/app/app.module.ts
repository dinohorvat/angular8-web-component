import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MyserviceService} from './myservice.service';
import { ComptwoComponent } from './comptwo/comptwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComptwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
