import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  //Getter
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //Método
  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( hero: string ):void {
    //Si no lo tenemos implementado poner el TODO y el throw 'Método no implementado';
    this.name = hero;
  }

  changeAge(otherAge: number):void{
    this.age = otherAge;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // } )
  }

}
