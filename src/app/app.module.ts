import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CurrencyComponent }   from './currency/currency.component';
import { DistanceComponent }   from './distance/distance.component';
import {ConvertRoutes} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ConvertRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
