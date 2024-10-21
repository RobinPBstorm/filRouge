import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.scss'
})
export class Exercice1Component {
    seconds : number = 0;
    timer : any; /* NodeJS.Timeout */
 
    start() : void {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000)
    }

    pause() : void {
      clearInterval(this.timer);
      this.timer = undefined;
    }

    reset() : void {
      this.seconds = 0;
      this.pause(); /* Si vous souhaitez en plus arrêter le timer */
    }
}
