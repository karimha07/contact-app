import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterString: string): any {
  //   if (value.length === 0) {
  //     return value;
  //   }
  //   const resultArray = [];
  //   for (const item of value) {
  //     if (item[propName].indexOf(filterString) >= 0) {
  //       resultArray.push(item);
  //     }
  //   }
  //   return resultArray;
    return items.filter(item => {
      const name = item.name + ' ' + item.lastName;
      return name.indexOf(filterString) !== -1;
    });
  }


}
