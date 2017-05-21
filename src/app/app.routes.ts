// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';


// Route Configuration
export const ConvertRoutes: Routes = [    
  { path: '', component: CurrencyComponent},  
  { path: 'currency', component: CurrencyComponent }  
];


//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);