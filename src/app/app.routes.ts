import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter.component/counter.component';
import { HeroPageComponent } from './pages/hero-page.component/hero-page.component';

export const routes: Routes = [

  // default route
  { path: '', component: CounterComponent,},

  // hero route
  { path: 'hero', component: HeroPageComponent,},

  /*  wildcard route > this route will be used when the user tries
  to access a route that does not exist in the application, it will redirect
  the user to the default route. */
  { path: '**', redirectTo: '',}

];
