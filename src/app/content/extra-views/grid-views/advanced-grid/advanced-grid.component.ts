import {Component, OnInit} from '@angular/core';
import {GridViewsService} from '../grid-views.service';
import {getCurrencySymbol} from '@angular/common';

@Component({
  selector: 'app-advanced-grid',
  templateUrl: './advanced-grid.component.html',
  styleUrls: ['./advanced-grid.component.scss']
})
export class AdvancedGridComponent implements OnInit {
  realestates: any;
  symbol: string;

  constructor(private gridService: GridViewsService) {
    this.realestates = this.gridService.realestates;
    this.symbol = getCurrencySymbol('USD', 'narrow');
  }

  ngOnInit() {
  }

}
