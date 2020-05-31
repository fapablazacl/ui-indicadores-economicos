import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indicatorName'
})
export class IndicatorNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    switch (value) {
      case 'gold': return 'Oro';
      case 'silver': return  'Plata';
      case 'copper': return 'Cobre';
      default: return value;
    }
  }
}
