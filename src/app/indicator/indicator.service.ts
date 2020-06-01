
import { Injectable } from '@angular/core';
import { Indicator } from './indicator';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  public constructor(private http : HttpClient) {}

  public getIndicatorStats(key : string) : Promise<Indicator> {
    const host: string = environment.host;
    const url = host + `/stats/${key}`;

    return new Promise<Indicator>( (resolve, reject) => {
      this.http.get(url).toPromise()
      .then((body: any) => {
        resolve({
          name: key,
          min: body.payload.min,
          max: body.payload.max,
          average: body.payload.average
        });
      })
      .catch( (err: any) => {
        reject(err);
      });
    });
  }
}
