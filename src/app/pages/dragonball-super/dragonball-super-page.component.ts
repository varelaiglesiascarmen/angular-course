import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/character-add.component/character-add.component';
import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
