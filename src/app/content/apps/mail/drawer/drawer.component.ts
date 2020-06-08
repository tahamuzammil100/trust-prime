import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DrawerService} from './../../drawer.service';

@Component({
  selector: 'mail-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  @HostBinding('class') draverClasses = 'dt-module__drawer dt-drawer position-left';
  @HostBinding('class.open') isOpen = false;
  activeMenu: string;
  showLoader = false;
  drawer: any;
  onDrawerChanged: Subscription;

  constructor(private drawerService: DrawerService) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer: any) => {
      if (!this.activeMenu) {
        this.processLoader();
      }

      this.drawer = drawer;
      this.isOpen = this.isOpen;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });
  }

  ngOnInit() {
  }

  processLoader() {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  /**
   * Close Drawer
   * @param event
   */
  closeDrawer(event) {
    event.preventDefault();

    this.drawer.isOpen = false;
    this.drawerService.update(this.drawer);
  }

  onSelectMenu(event, activeMenu) {
    event.preventDefault();
    this.processLoader();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawerService.update(this.drawer);
  }

  ngOnDestroy() {
    this.onDrawerChanged.unsubscribe();
  }

}
