import {Component, OnInit} from '@angular/core';
import {ListViewsService} from '../list-views.service';
import {getCurrencySymbol} from '@angular/common';

@Component({
  selector: 'app-advanced-list',
  templateUrl: './advanced-list.component.html',
  styleUrls: ['./advanced-list.component.scss']
})
export class AdvancedListComponent implements OnInit {
  realestates: any;
  symbol: string;

  constructor(private listService: ListViewsService) {
    this.realestates = this.listService.realestates;
    this.symbol = getCurrencySymbol('USD', 'narrow');
  }

  ngOnInit() {
  }
}
