import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const newCharacter = localStorage.getItem('characters');
  return newCharacter ? JSON.parse(newCharacter) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveInLocalStorage = effect(() => {
    /* console.log(`Characters count ${this.characters().length}`); */
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {

    this.characters.update(
      list => [...list, newCharacter]
    );

  }
}
