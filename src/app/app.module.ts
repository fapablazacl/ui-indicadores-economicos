import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { IndicatorNamePipe } from './indicator/indicator-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    IndicatorNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
