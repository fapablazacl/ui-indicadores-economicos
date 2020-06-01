
import { Injectable } from '@angular/core';
import { Indicator } from './indicator';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  public constructor(private http : HttpClient) {}

  /**
   * 
   * @param keys Arreglo con las claves necesarias para 
   */
  public getIndicatorStats(key : string) : Promise<Indicator[]> {
    const host: string = environment.host;
    const url = host + `/stats/${key}`;



    return new Promise<Indicator[]>( (resolve, reject) => {
      this.http.get(url).toPromise().then((body: any) => {
        console.log(body);

        resolve([
          {
            name: key,
            min: body.payload.min,
            max: body.payload.max,
            average: body.payload.average
          }
        ]);
      });
    });

    /*
    return new Promise<Indicator[]>( (resolve, reject) => {
      resolve([
        { name: 'gold', min: 12.0, max: 123.0, average: 123.3 },
        { name: 'silver', min: 12.0, max: 123.0, average: 123.3 },
        { name: 'copper', min: 12.0, max: 123.0, average: 123.3 },
      ]);
    });
    */
  }
}
