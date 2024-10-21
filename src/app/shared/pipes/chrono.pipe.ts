import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(totalSeconds: number, format : string = 'short'): string {
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    switch(format){
      case 'short' :
        return `${(minutes > 1) ? '' : '0'}${minutes}:${seconds.toString().padStart(2, '0')}`;
        /* padStart(tailleChaine, elementAInserer) va combler la chaine avec elementAInserer jusqu'à atteindre tailleChaine en commençant du début (à gauche) */
        /* padEnd(tailleChaine, elementAInsert) fait pareil mais en commençant de la fin (à droite) */
      case 'long' :
        return `${minutes} minute${ (minutes > 1) ? 's' : '' } ${seconds} seconde${ (seconds > 1) ? 's' : ''}`;
      default :
        return '⚠ format erroné ⚠'
    }

  }

}
