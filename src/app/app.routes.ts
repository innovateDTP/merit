// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { PartnerComponent } from './components/partners.component';



// Route Configuration
export const AppRoutes: Routes = [    
  { path: '', component: HomeComponent},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent }    ,
  { path: 'partners', component: PartnerComponent }
];


//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
