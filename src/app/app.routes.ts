// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DistanceComponent } from './distance/distance.component';


// Route Configuration
export const ConvertRoutes: Routes = [    
  { path: '', component: CurrencyComponent},  
  { path: 'currency', component: CurrencyComponent },  
  { path: 'distance', component: DistanceComponent } 
];


//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);