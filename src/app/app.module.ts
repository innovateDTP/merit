import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent }   from './components/home.component';
import { AboutComponent }   from './components/about.component';
import { PartnerComponent }   from './components/partners.component';
import {AppRoutes} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PartnerComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
