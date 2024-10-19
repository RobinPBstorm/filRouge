import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  world: string = "world";
  message: string = "Ola que tal";
  noNl: boolean = true;

  salutationFr() {
    this.message = "Salut l'ami";
  }
  salutationEng() {
    this.message = "Hi guys";
  }
  salutationNl() {
    this.message = "Goedemorgen";
  }
}
