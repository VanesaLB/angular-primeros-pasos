import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  //Si quiero que una variable viva a lo largo de toda mi clase necesito una propiedad de clase
  public deletedHero?: string;

  removeLastHero():void {
    //Esta variable solo existe para este método
    //const deletedHero = this.heroNames.pop();
    //console.log(deletedHero);
    this.deletedHero = this.heroNames.pop();
  }

}
