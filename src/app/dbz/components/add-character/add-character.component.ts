import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {

    //Validacion de si envia el nombre vacío no lo aceptamos
    if ( this.character.name.length === 0 ) return;
    //Si tiene un nombre se emite el character
    this.onNewCharacter.emit(this.character);

    //Resetear
    this.character = { name: '', power: 0 };
  }

}
