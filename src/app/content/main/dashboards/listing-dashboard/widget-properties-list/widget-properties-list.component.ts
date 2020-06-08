import {Component, Input, OnInit} from '@angular/core';
import {getCurrencySymbol} from '@angular/common';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'widget-properties-list',
  templateUrl: './widget-properties-list.component.html',
  styleUrls: ['./widget-properties-list.component.scss']
})
export class WidgetPropertiesListComponent implements OnInit {
  @Input() categories: string[];
  @Input() maxVisibleItems = 3;
  searchQuery: FormControl = new FormControl('');
  searchText: string = '';

  symbol: string;
  currentCategory = 'All';
  private _properties: any[];
  visibleList: any[];

  @Input() set properties(items: any[]) {
    this._properties = items;
    this.visibleList = this._properties;
  }

  constructor() {
    this.symbol = getCurrencySymbol('USD', 'narrow');
    // this.searchQuery = new FormControl('');
  }

  ngOnInit() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
    console.log('searchText:',  searchText);
      this.searchText = searchText;
    });
  }

  onChangeCategory(category: string) {
    this.currentCategory = category;

    if (this.currentCategory === 'All') {
      this.visibleList = this._properties;
    } else {
      this.visibleList = this._properties.filter((item) => {
        return item.category === this.currentCategory;
      });
    }
  }

}
