import {Component, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MailService} from './../mail.service';
import {Subscription} from 'rxjs';
import {Mail} from './../models/mail.model';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__content position-relative ps';

  public mails: Mail[] = [];
  public searchQuery = '';

  onMailsChanged: Subscription;
  onSearchQueryChanged: Subscription;

  @ViewChild(PerfectScrollbarDirective, {static: false}) directiveRef?: PerfectScrollbarDirective;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    // Subscribe to update mails on changes
    this.onMailsChanged = this.mailService.onMailsChanged
      .subscribe(mails => {
        this.mails = mails;

        setTimeout(() => {
          this.scrollToBottom();
        }, 300);
      });

    // Subscribe to update search keywords on changes
    this.onSearchQueryChanged = this.mailService.onSearchQueryChanged
      .subscribe(searchStr => {
        this.searchQuery = searchStr;
        if (searchStr) {
          this.mailService.setCurrentMail(null);
        }
      });
  }

  /**
   * On click mail
   * @param mailId
   */
  omMailClick(mailId) {
    this.mailService.setCurrentMail(mailId);
  }

  scrollToBottom(): void {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.scrollToBottom();
    }
  }

  ngOnDestroy() {
    this.onMailsChanged.unsubscribe();
    this.onSearchQueryChanged.unsubscribe();
  }

}
