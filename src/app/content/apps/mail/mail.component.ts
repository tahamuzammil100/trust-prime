import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DynamicDomService} from '@gaxon/services/dynamic-dom.service';
import {DrawerService} from './../drawer.service';

import {MailService} from './mail.service';
import {ContactHoverCardComponent} from './helper-widgets/contact-hover-card/contact-hover-card.component';
import {MailComposeComponent} from './mail-compose/mail-compose.component';
import {Mail} from './models/mail.model';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit, OnDestroy {
  currentMail: Mail;
  onCurrentMailChanged: Subscription;

  composeMail: any;
  hoverCard: any;

  drawer: any;
  onDrawerChanged: Subscription;

  constructor(private dynamicDom: DynamicDomService, private mailService: MailService, private drawerService: DrawerService) {
    this.hoverCard = this.dynamicDom.appendComponentToBody(ContactHoverCardComponent);
    this.composeMail = this.dynamicDom.appendComponentToBody(MailComposeComponent);

    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
    });
  }

  ngOnInit() {
    this.onCurrentMailChanged =
      this.mailService.onCurrentMailChanged
        .subscribe(currentMail => {
          if (!currentMail) {
            this.currentMail = null;
          }
          else {
            this.currentMail = currentMail;
          }
        });
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
    this.dynamicDom.destroyCard(this.composeMail);

    this.onCurrentMailChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
  }
}
