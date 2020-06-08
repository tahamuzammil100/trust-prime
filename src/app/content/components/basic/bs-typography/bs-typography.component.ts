import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Masonry} from 'ng-masonry-grid';

@Component({
  selector: 'app-bs-typography',
  templateUrl: './bs-typography.component.html',
  styleUrls: ['./bs-typography.component.scss']
})
export class BsTypographyComponent implements OnInit, AfterViewInit {
  _masonry: Masonry;

  constructor() {
  }

  // Get ng masonry grid instance first
  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this._masonry) { // Check if Masonry instance exists
      this._masonry.reloadItems();
    }
  }

}
