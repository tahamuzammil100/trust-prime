import {Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '@app/settings/settings.service';
import {DrawerService} from '../../../drawer.service';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {
  settings: any;
  sidebarRef: any;
  activeMenu: string;
  drawer: any;

  onSettingChanged: Subscription;
  onDrawerChanged: Subscription;

  constructor(eleRef: ElementRef,
              private settingService: SettingsService,
              private drawerService: DrawerService,
              @Inject(DOCUMENT) private document: any) {
    this.sidebarRef = eleRef.nativeElement;
    this.sidebarRef.classList.add('dt-sidebar');

    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
      this.toggleNavigation();
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.settings.navigationStyle === 'folded') {
      this.document.body.classList.add('dt-sidebar--expended');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.settings.navigationStyle === 'folded') {
      this.document.body.classList.remove('dt-sidebar--expended');
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.toggleNavigation();
  }

  ngOnInit() {
  }

  toggleNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.sidebarRef.classList.add('dt-drawer');
      this.sidebarRef.classList.add('position-left');

      if (this.settings.activeNavDrawer) {
        this.sidebarRef.classList.add('open');
      } else {
        this.sidebarRef.classList.remove('open');
      }
    } else {
      this.sidebarRef.classList.remove('dt-drawer');
      this.sidebarRef.classList.remove('position-left');

      if (window.innerWidth >= 992 && this.settings.activeNavDrawer) {
        this.settings.activeNavDrawer = false;
        this.settingService.setSettings(this.settings);
        this.settingService.setSettings(this.settings);
      }
    }
  }

  /**
   * On Click Menu
   */
  onClickMenu(event, activeMenu) {
    event.preventDefault();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawer.isOpen = true;
    this.drawerService.update(this.drawer);
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
  }

}
