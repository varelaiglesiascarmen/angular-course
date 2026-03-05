import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter.component/counter.component';
import { HeroPageComponent } from './pages/hero-page.component/hero-page.component';

export const routes: Routes = [

  // default route
 { path: '', component: CounterComponent,},

 // hero route
 { path: 'hero', component: HeroPageComponent,}

];
