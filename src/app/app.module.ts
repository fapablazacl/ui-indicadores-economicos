import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { IndicatorFormatterPipe } from './indicator/indicator-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    IndicatorFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
