import {Component, HostBinding, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SettingsService} from '@app/settings/settings.service';
import {NavigationService} from '@gaxon/components';
import {Subscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {LayoutConfig} from './layout.config';

import {NavigationModel} from './navigation/navigation.model';

@Component({
  selector: 'app-crm-layout',
  templateUrl: './crm-layout.component.html',
  styleUrls: ['./crm-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrmLayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-root__inner';

  settings: any;
  modes = ['framed', 'full-width', 'boxed'];

  onSettingChanged: Subscription;

  constructor(private navService: NavigationService,
              private settingService: SettingsService,
              @Inject(DOCUMENT) private document: any) {
    this.settingService.setSettings(new LayoutConfig().configs);

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.updateLayout();
          this.document.body.classList.add('dt-layout--' + this.settings.layout);
      }
    );

    // Set the navigation model
    this.navService.setNavigationModel(new NavigationModel());
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLayout();
  }

  ngOnInit() {
  }

  /**
   * On click overlay
   */
  onClickOverlay() {
    this.settings.activeNavDrawer = false;
    this.settingService.setSettings(this.settings);
  }

  /**
   * Update layout
   */
  updateLayout() {
    if (this.settings.navigationFixed && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--fixed');
    } else {
      this.document.body.classList.remove('dt-sidebar--fixed');
    }

    if (this.settings.headerFixed) {
      this.document.body.classList.add('dt-header--fixed');
    } else {
      this.document.body.classList.remove('dt-header--fixed');
    }

    if (this.settings.navigationStyle === 'folded' && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--folded');
    } else {
      this.document.body.classList.remove('dt-sidebar--folded');
    }

    this.applyNewLayoutMode(this.settings.mode);
  }

  /**
   * Apply New Mode
   * @param newLayoutMode
   */
  applyNewLayoutMode(newLayoutMode) {
    this.modes.map((layoutMode) => {
      if (newLayoutMode === layoutMode) {
        this.document.body.classList.add('dt-layout--' + layoutMode);
      } else {
        this.document.body.classList.remove('dt-layout--' + layoutMode);
      }
    });
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }
}


