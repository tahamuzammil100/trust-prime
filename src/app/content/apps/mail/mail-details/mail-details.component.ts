import {Component, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';

import {MailService} from './../mail.service';
import {Mail} from './../models/mail.model';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__content position-relative ps';
  currentMail: Mail;
  isOpened = true;

  onCurrentMailChanged: Subscription;
  @ViewChild(PerfectScrollbarDirective, {static: false}) directiveRef?: PerfectScrollbarDirective;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    // Subscribe to update currentMail on changes
    this.onCurrentMailChanged =
      this.mailService.onCurrentMailChanged
        .subscribe(currentMail => {
          if (!currentMail) {
            this.currentMail = null;
          } else {
            this.currentMail = currentMail;
            this.markAsRead();
          }

          setTimeout(() => {
            this.scrollToBottom();
          }, 300);
        });
  }

  /**
   * Mark as read mail
   */
  markAsRead() {
    this.currentMail.read = true;

    this.mailService.saveMail(this.currentMail);
  }

  /**
   * On toggle starred
   */
  onToggleStarred(event) {
    this.currentMail.starred = event;

    this.mailService.saveMail(this.currentMail);
  }

  scrollToBottom(): void {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.scrollToBottom();
    }
  }

  ngOnDestroy() {
    this.onCurrentMailChanged.unsubscribe();
  }

}
