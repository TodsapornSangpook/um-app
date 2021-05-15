import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(param1: number, param2: string): string {
    return `${param1} $ ${param2}`;
  }
}
