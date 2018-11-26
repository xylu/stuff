import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, property: string, order: string): any {
    if (value.length <= 1) {
      return value;
    }
    if (value instanceof Array) {
      const copy = value.slice(0);
      const sortOrder = order === 'desc' ? -1 : 1;
      return copy.sort((s1: Server, s2: Server) => sortOrder * (s1[property] < s2[property] ? -1 : 1));
    }
    return null;
  }

}

interface Server {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}
