import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value :any ,isAsec = true): string[] {

    if(value === null || value === undefined){
      return value
    }
    if(!Array.isArray(value)){
      throw new Error('error')
    }
    
    return value.sort((a:string,b:string)=>{
      const Uppercased1 = a.toUpperCase();
      const Uppercased2 = b.toUpperCase();
      if(Uppercased1 < Uppercased2){
        return isAsec ? -1 : 1
      }
      if(Uppercased1 > Uppercased2){
        return !isAsec ? -1 : 1
      }
      return 0
    });

  }

}
