
import { Injectable } from '@angular/core';
import { Indicator } from './indicator';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  public getIndicatorOverview() : Promise<Indicator[]> {
    return new Promise<Indicator[]>( (resolve, reject) => {
      resolve([
        { name: 'gold', min: 12.0, max: 123.0, average: 123.3 },
        { name: 'silver', min: 12.0, max: 123.0, average: 123.3 },
        { name: 'copper', min: 12.0, max: 123.0, average: 123.3 },
      ]);
    });
  }
}
