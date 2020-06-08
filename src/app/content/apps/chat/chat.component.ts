import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicDomService} from '@gaxon/services/dynamic-dom.service';

import {ContactHoverCardComponent} from './helper-widgets/contact-hover-card/contact-hover-card.component';

import {Subscription} from 'rxjs';
import {DrawerService} from './../drawer.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  hoverCard: any;
  drawer: any;
  onDrawerChanged: Subscription;

  constructor(private dynamicDom: DynamicDomService, private drawerService: DrawerService) {
    this.hoverCard = this.dynamicDom.appendComponentToBody(ContactHoverCardComponent);

    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
    });
  }

  ngOnInit() {
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

  ngOnDestroy() {
    this.dynamicDom.destroyCard(this.hoverCard);
    this.onDrawerChanged.unsubscribe();
  }

}
