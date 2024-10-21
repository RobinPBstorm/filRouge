import { Component } from '@angular/core';
import { Trainer } from '../../shared/models/trainer';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
    // ngModel
    prenom : string = '';

    // ngStyle
    bgColor : string = 'chartreuse';

    //ngClass
    selectedClass : number = 0;

    //ngIf/@if
    // today : Date = new Date();
    today : Date = new Date('2024-10-26');

    //ngSwitch/@switch
    platDuJour : string = '';

    //ngFor/@for
    trainersLight : string[] = ['Aurélien', 'Aude', 'Seb', 'Khun', 'Robin'];

    trainers : Trainer[] = [
      { 
        id : 1, firstName : 'Aurélien', lastName : 'Strimelle', birthdate : new Date('1989-11-1'), avatar : 'aurelien.png', gender : 'm'
      },
      { 
        id : 2, firstName : 'Aude', lastName : 'Beurive', birthdate : new Date('1989-10-16'), avatar : 'aude.png', gender : 'f'
      },
      { 
        id : 3, firstName : 'Sébastien', lastName : 'Bya', avatar : 'seb.png', gender : 'm'
      },
      { 
        id : 4, firstName : 'Khun', lastName : 'Ly', birthdate : new Date('1982-5-6'), avatar : 'khun.png', gender : 'm'
      },
      {
        id : 5, firstName : 'Robin', lastName : 'Pêcheur', avatar : 'robin.png', gender : 'm'
      },
    ]


    //ngClass
    changeClass(classNb : number) : void {
      this.selectedClass = classNb;
    }
    
}
