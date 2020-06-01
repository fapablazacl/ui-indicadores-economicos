import { Component, OnInit } from '@angular/core';
import { Indicator as IndicatorStats } from './indicator';
import { IndicatorService } from './indicator.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  public indicatorsStats: IndicatorStats[] = [];
  public loading = false;
  public failed = false;
  public failedMessage = "";

  constructor(private indicatorService : IndicatorService) {}

  ngOnInit() {
    this.refreshIndicators();
  }

  public refreshIndicators() : void {
    this.loading = true;
    this.failed = false;
    this.indicatorsStats = [];

    const indicatorNames = [
      'oro', 'plata', 'cobre', 'dolar', 'euro', 'uf'
    ];

    const promises = indicatorNames.map(name => this.indicatorService.getIndicatorStats(name));

    Promise.all(promises).then( (indicatorsStats: IndicatorStats[]) => {
      this.indicatorsStats = indicatorsStats;
      this.loading = false;
    })
    .catch( (err) => {
      this.loading = false;
      this.failed = true;
      this.failedMessage = `Error al llamar el servicio de indicadores. Verificar que éste se encuentre disponible. Mensaje de error: "${err.message}"`;
    });
  }
}
