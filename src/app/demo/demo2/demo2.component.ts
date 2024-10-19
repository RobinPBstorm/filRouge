import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  message: string = "Mon MESSAGE de DeMo!";
  somme: number = 25.456685;
  aujourdhui: Date = new Date();
}
