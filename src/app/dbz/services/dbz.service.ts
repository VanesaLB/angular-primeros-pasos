import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  //Es importante definir el tipo de dato
  //Los objetos pasan por referencia
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Podemos poner cualquier nombre que irá dentro de los paréntesis en main-page.component.html
  //Este método servirá para añadir nuevo personaje a la lista
  addCharacter( character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    //Muy util el operador spread para tener los atributos
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  //Con desestructuración sería así pero si hay muchos atributos sería un rollo
  // onNewCharacter( { name, power }: Character): void {
  //   const newCharacter: Character = {
  //     id: uuid(),
  //     name,
  //     power
  //   }
  //   this.characters.push(newCharacter);
  // }

  // onDeleteCharacter(id: number):void{
  //   this.characters.splice(id, 1);
  // }

  deleteCharacterById( id: string){
    //El filter barre todo el arreglo y devuelve los que cumplan la condición
    //En este caso el que cumpla con esa condición es el que devuelve
    this.characters = this.characters.filter( character => character.id !== id );
  }

  //constructor() { }

}
