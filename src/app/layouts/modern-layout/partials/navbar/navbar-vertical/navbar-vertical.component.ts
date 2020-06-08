import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SettingsService} from '@app/settings/settings.service';
import {DrawerService} from '../../../drawer.service';
import {AuthService} from '@app/layouts/auth-layout/auth.service';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {
  settings: any;
  isNavOpened = false;
  sidebarRef: any;
  activeMenu: string;
  drawer: any;

  currentUser = {
    name: 'Bob Hyden',
    thumb: 'https://via.placeholder.com/150x150',
    position: 'Administrator'
  };

  onSettingChanged: Subscription;
  onDrawerChanged: Subscription;

  constructor(eleRef: ElementRef,
              private settingService: SettingsService,
              private drawerService: DrawerService,
              private authService: AuthService) {
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
      this.isNavOpened = this.settings.navigationStyle === 'folded' || window.innerWidth < 992;
      this.toggleUpdateNavigation();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.toggleUpdateNavigation();
  }

  ngOnInit() {
  }

  toggleUpdateNavigation() {
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
      }
    }
  }

  /**
   * On Toggle navigation
   * @param event
   */
  onToggleNavigation(event) {
    event.preventDefault();

    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    } else if (this.settings.navigationStyle === 'folded') {
      this.settings.navigationStyle = 'default';
    } else {
      this.settings.navigationStyle = 'folded';
    }

    this.settingService.setSettings(this.settings);
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

  /**
   * Logout user
   * @param event
   */
  onLogout(event) {
    event.preventDefault();

    this.authService.logout();
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
  }

}
