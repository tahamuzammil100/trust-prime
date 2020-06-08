import {AfterViewInit, Component} from '@angular/core';
import {Masonry} from 'ng-masonry-grid';
import {ColorEvent} from 'ngx-color';
import {appAnimations} from '@gaxon/mix/animations';

@Component({
  selector: 'app-color-picker-advanced',
  templateUrl: './color-picker-advanced.component.html',
  styleUrls: ['./color-picker-advanced.component.scss'],
  animations: appAnimations
})
export class ColorPickerAdvancedComponent implements AfterViewInit {
  _masonry: Masonry;
  showMasonry = false;

  primaryColor = '#194D33';
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  };

  constructor() {
  }

  // Get ng masonry grid instance first
  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  ngAfterViewInit() {
    // Check if Masonry instance exists
    if (this._masonry) {
      this._masonry.reloadItems();

      setTimeout(() => {
        this.showMasonry = true;
      }, 0);
    }
  }

  changeComplete($event: ColorEvent) {
    this.state = $event.color.hsl;
    this.primaryColor = $event.color.hex;
  }

}
