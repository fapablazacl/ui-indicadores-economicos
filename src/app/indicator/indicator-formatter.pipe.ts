import { Pipe, PipeTransform } from '@angular/core';
import { Indicator } from './indicator';
import { FormattedIndicator } from './formatted-indicator';

@Pipe({
  name: 'indicatorFormatter'
})
export class IndicatorFormatterPipe implements PipeTransform {
  transform(value: Indicator, ...args: any[]): FormattedIndicator {
    const indicatorNames = {
      'gold': 'Oro',
      'silver': 'Plata',
      'copper': 'Cobre'
    };

    return {
      'name': indicatorNames[value.name],
      'min': `${value.min} US$`,
      'max': `${value.min} US$`,
      'average': `${value.min} US$`,
    };
  }
}
