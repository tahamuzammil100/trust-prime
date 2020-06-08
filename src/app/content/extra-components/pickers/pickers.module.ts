import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {ColorAlphaModule} from 'ngx-color/alpha'; // <color-alpha-picker></color-alpha-picker>
import {ColorBlockModule} from 'ngx-color/block'; // <color-block></color-block>
import {ColorChromeModule} from 'ngx-color/chrome'; // <color-chrome></color-chrome>
import {ColorCircleModule} from 'ngx-color/circle'; // <color-circle></color-circle>
import {ColorCompactModule} from 'ngx-color/compact'; // <color-compact></color-compact>
import {ColorGithubModule} from 'ngx-color/github'; // <color-github></color-github>
import {ColorHueModule} from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>
import {ColorMaterialModule} from 'ngx-color/material'; // <color-material></color-material>
import {ColorPhotoshopModule} from 'ngx-color/photoshop'; // <color-photoshop></color-photoshop>
import {ColorSketchModule} from 'ngx-color/sketch'; // <color-sketch></color-sketch>
import {ColorSliderModule} from 'ngx-color/slider'; // <color-slider></color-slider>
import {ColorSwatchesModule} from 'ngx-color/swatches'; // <color-swatches></color-swatches>
import {ColorTwitterModule} from 'ngx-color/twitter'; // <color-twitter></color-twitter>

import {ColorPickerComponent} from './color-picker/color-picker.component';
import {ColorPickerAdvancedComponent} from './color-picker-advanced/color-picker-advanced.component';
import {LocalizationComponent} from './datetime-pickers/localization/localization.component';
import {DatetimePickersComponent} from './datetime-pickers/datetime-pickers.component';

const routes: Routes = [
  {
    path: 'color-picker',
    component: ColorPickerComponent
  },
  {
    path: 'color-picker-adv',
    component: ColorPickerAdvancedComponent
  },
  {
    path: 'datetime-pickers',
    component: DatetimePickersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgMasonryGridModule,
    ColorPickerModule,
    ColorAlphaModule,
    ColorBlockModule,
    ColorChromeModule,
    ColorCircleModule,
    ColorCompactModule,
    ColorGithubModule,
    ColorHueModule,
    ColorMaterialModule,
    ColorPhotoshopModule,
    ColorSketchModule,
    ColorSliderModule,
    ColorSwatchesModule,
    ColorTwitterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ColorPickerComponent,
    ColorPickerAdvancedComponent,
    LocalizationComponent,
    DatetimePickersComponent
  ]
})
export class PickersModule {
}
