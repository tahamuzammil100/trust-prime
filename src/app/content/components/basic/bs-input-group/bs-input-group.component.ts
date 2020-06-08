import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Masonry} from 'ng-masonry-grid';

@Component({
  selector: 'app-bs-input-group',
  templateUrl: './bs-input-group.component.html',
  styleUrls: ['./bs-input-group.component.scss']
})
export class BsInputGroupComponent implements OnInit, AfterViewInit {
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
