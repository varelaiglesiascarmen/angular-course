import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/character-add.component/character-add.component';
import { Component, signal,  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(newCharacter: Character) {

    this.characters.update(
      list => [...list, newCharacter]
    );

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  };
}
