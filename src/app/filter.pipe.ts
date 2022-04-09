import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, filterType: string ): any {
    if(value.length === 0 || filterString===''){
      return value;
    }
    let newArray= [];
    for(let item of value){
      if(item[filterType].match(filterString)){
        newArray.push(item);
      }
    }
    return newArray;
  }

}
