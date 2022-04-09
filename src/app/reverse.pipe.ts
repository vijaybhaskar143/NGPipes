import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let newArray=[];
    if(value.length > 0){
      newArray= value.split('');
      return newArray.reverse().join('');
    }
    return value;
  }

}
