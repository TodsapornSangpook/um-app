import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonRoutingModule } from './router/common-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
