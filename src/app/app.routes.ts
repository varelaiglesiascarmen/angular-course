import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter.component/counter.component';
import { HeroPageComponent } from './pages/hero-page.component/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  // default route
  { path: '', component: CounterComponent,},

  // hero route
  { path: 'hero', component: HeroPageComponent,},

  // dragon ball route
  { path: 'dragonball', component: DragonballPageComponent,},

  // dragon ball super route
  { path: 'dragonball-super', component: DragonballSuperPageComponent,},

  /*  wildcard route > this route will be used when the user tries
  to access a route that does not exist in the application, it will redirect
  the user to the default route. */
  { path: '**', redirectTo: '',},
];
