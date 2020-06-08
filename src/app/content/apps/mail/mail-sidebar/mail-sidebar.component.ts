import {Component, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {SettingsService} from '@app/settings/settings.service';
import {appAnimations} from '@gaxon/mix/animations';
import {DrawerService} from './../../drawer.service';
import {MailService} from './../mail.service';
import {Contact} from './../models/contact.model';

@Component({
  selector: 'mail-sidebar',
  templateUrl: './mail-sidebar.component.html',
  animations: appAnimations
})
export class MailSidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-module__sidebar';
  @HostBinding('class.active') isOpen = false;

  contacts: Contact[] = [];
  labels: any[] = [];
  folders: any[] = [];
  filters: any[] = [];

  activeMenu: string;
  drawer: any;
  settings: any;
  hiddenPageHeader: boolean;
  headerLessLayout = ['modern', 'back-office', 'back-office-mini'];

  onContactsChanged: Subscription;
  onLabelsChanged: Subscription;
  onFiltersChanged: Subscription;
  onFoldersChanged: Subscription;
  onDrawerChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private mailService: MailService,
              private drawerService: DrawerService,
              private settingService: SettingsService,
              private router: Router) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
      }
    );

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOpen = window.innerWidth > 767;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isOpen = event.target.innerWidth > 767;
  }

  ngOnInit() {
    // Subscribe to update lebels on changes
    this.onLabelsChanged = this.mailService.onLabelsChanged
      .subscribe(labels => {
        this.labels = labels;
      });

    // Subscribe to update filters on changes
    this.onFiltersChanged = this.mailService.onFiltersChanged
      .subscribe(filters => {
        this.filters = filters;
      });

    // Subscribe to update folders on changes
    this.onFoldersChanged = this.mailService.onFoldersChanged
      .subscribe(folders => {
        this.folders = folders;
      });

    // Subscribe to update contacts on changes
    this.onContactsChanged = this.mailService.onContactsChanged
      .subscribe(contacts => {
        this.contacts = contacts;
      });

    // display app sidebar
    this.isOpen = window.innerWidth > 767;
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
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(ev) {
    ev.preventDefault();

    this.isOpen = !this.isOpen;
  }

  onComposeMail() {
    this.mailService.onComposeMailClicked.next('');
  }

  /**
   * Toggle main navigation
   * @param event
   */
  toggleNavigation(event) {
    event.preventDefault();

    this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    this.settingService.setSettings(this.settings);
  }

  ngOnDestroy() {
    this.onContactsChanged.unsubscribe();
    this.onLabelsChanged.unsubscribe();
    this.onFiltersChanged.unsubscribe();
    this.onFoldersChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
