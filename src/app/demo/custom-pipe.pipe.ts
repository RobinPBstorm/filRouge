import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    value = value.replaceAll(" ","-").toUpperCase();
    return value;
  }

}
