import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {SettingsService} from '@app/settings/settings.service';
import {ChatService} from './../../chat.service';
import {DrawerService} from './../../../drawer.service';

@Component({
  selector: 'app-operator-profile',
  templateUrl: './operator-profile.component.html',
  styleUrls: ['./operator-profile.component.scss']
})
export class OperatorProfileComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__sidebar-header pb-0';

  profile: any;
  activeMenu: string;
  drawer: any;
  isOpen = false;
  settings: any;
  hiddenPageHeader: boolean;
  headerLessLayout = ['modern', 'back-office', 'back-office-mini'];

  onDrawerChanged: Subscription;
  onChatOperatorChanged: Subscription;
  toggleChatSidebarService: Subscription;
  onSettingChanged: Subscription;

  constructor(private chatService: ChatService,
              private drawerService: DrawerService,
              private settingService: SettingsService) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
      this.isOpen = toggleChatSidebar;
    });

    // Subscribe to update operator on changes
    this.onChatOperatorChanged = this.chatService.onChatOperatorChanged.subscribe((operator) => {
      this.profile = operator;
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
      }
    );
  }

  ngOnInit() {

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
    this.chatService.toggleChatSubject.next(this.isOpen);
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
    this.onChatOperatorChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
    this.toggleChatSidebarService.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
