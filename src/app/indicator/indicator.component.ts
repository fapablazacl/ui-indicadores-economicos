import { Component, OnInit } from '@angular/core';
import { Indicator } from './indicator';
import { IndicatorService } from './indicator.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  public indicators : Indicator[] = [];

  constructor(private indicatorService : IndicatorService) {}

  ngOnInit() {
    this.refreshIndicators();
  }

  public refreshIndicators() : void {
    this.indicators = [];

    const indicatorNames = [
      'oro', 'plata', 'cobre'
    ];

    const promises = indicatorNames.map(name => this.indicatorService.getIndicatorStats(name));

    Promise.all(promises).then( (indicators: Indicator[]) => {
      this.indicators = indicators;
    })
    .catch( (err) => {
      alert("Error al llamar el servicio de indicadores. Favor verificar que se encuentra levantado");
    });
  }
}
