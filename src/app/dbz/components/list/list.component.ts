import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //Necesitamos enviar esta info a list-component, se hace con @input
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  //Evento que va a emitir el index, onDelete = Index value: number
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    //console.log({index});
    //Si no tengo un id no hago nada, con los cual no llama al evento
    if( !id ) return;
    //console.log({id});
    this.onDelete.emit( id );
  }

}
