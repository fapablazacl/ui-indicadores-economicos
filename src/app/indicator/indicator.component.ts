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
    this.indicatorService.getIndicatorOverview().then( (indicators : Indicator[]) =>{
      this.indicators = indicators;
    });
  }
}
