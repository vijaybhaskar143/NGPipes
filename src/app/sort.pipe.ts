import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort', pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: string): any {
    return value.sort((a,b)=>{
      const lastCodeIn = b[type].toLowerCase().charCodeAt();
      const lastCode = b[type].charCodeAt();
      const firstCodeIn = a[type].toLowerCase().charCodeAt();
      const firstCode = a[type].charCodeAt();

      if(lastCodeIn - firstCodeIn === 0){
        return lastCode - firstCode;
      }
      return lastCodeIn - firstCodeIn;
    })
  }

}
