import { UpperCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-hero-page.component',
  imports: [ UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  // computed signals
  heroDescription = computed(() => {
    const description = `${this.name()} have ${this.age()} years old.`;
    return description;
  })

  /* getHeroDescription(): string {
    return `${ this.name() } have ${ this.age() } years old.`
  } */

  changeHero = computed (() => {
    this.name.set('Spiderman');
    this.age.set(22);
  })

  /* changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  } */

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

  // computed signals
  capitalizedName = computed(() => this.name().toUpperCase());

  /* capitalizeName() {
    this.name.set(this.name().toUpperCase());
  } */

}
