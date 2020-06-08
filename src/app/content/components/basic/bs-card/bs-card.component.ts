import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Masonry } from 'ng-masonry-grid';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.scss']
})
export class BsCardComponent implements OnInit, AfterViewInit {
  _masonry: Masonry;
  cardTab = 1;
  cardPillsTab = 1;

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

  onClickTab(event, tab) {
    event.preventDefault();

    this.cardTab = tab;
  }

  onClickPillosTab(event, tab) {
    event.preventDefault();

    this.cardPillsTab = tab;
  }

}
