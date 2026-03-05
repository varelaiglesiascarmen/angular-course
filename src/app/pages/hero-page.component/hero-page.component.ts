import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page.component',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {

  name = signal ('Ironman');
  age = signal (45);

  getHeroDescription(): string {
    return `${ this.name() } have ${ this.age() } years old.`
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

  capitalizeName() {
    this.name.set(this.name().toUpperCase());
  }
}
