import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ColorPickerService, Cmyk} from 'ngx-color-picker';
import {Masonry} from 'ng-masonry-grid';
import {appAnimations} from '@gaxon/mix/animations';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  animations: appAnimations
})
export class ColorPickerComponent implements OnInit, AfterViewInit {
  _masonry: Masonry;
  showMasonry = false;

  public toggle = false;

  public rgbaText = 'rgba(165, 26, 214, 0.2)';

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: '#fff500',
    color4: '#0a6211',
    color5: '#ec4040',
    color6: '#7e941b',
    color7: '#730de2',
    color8: '#e20dad'
  };

  public selectedColor = 'color1';

  public color1 = '#2889e9';
  public color2 = '#e920e9';
  public color3 = '#fff500';
  public color4 = 'rgb(236,64,64)';
  public color5 = 'rgba(45,208,45,1)';
  public color6 = '#1973c0';
  public color7 = '#f200bd';
  public color8 = '#a8ff00';
  public color9 = '#278ce2';
  public color10 = '#0a6211';
  public color11 = 'rgb(236,64,64)';
  public color12 = '#f200bd';
  public color13 = 'rgba(0, 255, 0, 0.5)';
  public color14 = 'rgb(0, 255, 255)';
  public color15 = '#a51ad633';
  public color16 = '#730de2';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

  constructor(private cpService: ColorPickerService) {
  }

  ngOnInit() {
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

  public onEventLog(event, data: any): void {
    console.log(event, data);
  }

  public onChangeColorCmyk(color): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }
}
