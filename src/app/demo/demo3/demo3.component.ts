import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
    prenom : string = '';
    bgColor : string = 'chartreuse';

    selectedClass : number = 0;

    changeClass(classNb : number) : void {
      this.selectedClass = classNb;
    }
}
