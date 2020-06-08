import {Component, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import {appAnimations} from '@gaxon/mix/animations';
import {DrawerService} from './../../drawer.service';

import {SettingsService} from '@app/settings/settings.service';
import {GxHelper} from '@gaxon/helpers';
import {EditContactComponent} from './../edit-contact/edit-contact.component';
import {Contact} from './../contact.model';

@Component({
  selector: 'app-contacts-sidebar',
  templateUrl: './contacts-sidebar.component.html',
  animations: appAnimations
})
export class ContactsSidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-module__sidebar';
  @HostBinding('class.active') isOpen = false;

  activeMenu: string;
  drawer: any;
  settings: any;
  hiddenPageHeader: boolean;
  headerLessLayout = ['modern', 'back-office', 'back-office-mini'];

  onDrawerChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private modalService: NgbModal,
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
    // display app sidebar
    this.isOpen = window.innerWidth > 767;
  }

  onClickNewContact() {
    const modalRef = this.modalService.open(EditContactComponent, {size: 'lg', windowClass: 'contact-modal'});
    modalRef.componentInstance.contact = this.createNewContact();
  }

  createNewContact() {
    const newContact = new Contact();
    newContact.id = GxHelper.generateGUID();

    return newContact;
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
    this.onDrawerChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
