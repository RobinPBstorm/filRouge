import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[sound]'
})
export class SoundDirective {
  @Input() sound : string = '';
  // La propriété sound, va recevoir ce qui est fourni derrière les = lors de l'appel de notre directive

  audio : HTMLAudioElement | undefined;

  constructor(private element : ElementRef) { 
    /* Injecte l'élément sur lequel se trouve notre directive pour pouvoir le manipuler par la suite (changer son style, rajouter du html dedans, etc...) */
  }
  
  // Quand on va cliquer sur l'élément
  @HostListener('click') onClick(){    
    this.audio = new Audio(this.sound);
    this.audio.play();
  }

  // Quand la souris va quitter l'élément
  @HostListener('mouseleave') onMouseLeave(){
    this.audio?.pause();
    this.audio = undefined;
  }
}
