import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';

import {ContactsService} from './../contacts.service';
import {Contact} from './../contact.model';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-module__content position-relative ps';

  public contacts: Contact[] = [];
  public searchQuery = '';

  onContactsChanged: Subscription;
  onSearchQueryChanged: Subscription;

  @ViewChild(PerfectScrollbarDirective, {static: false}) directiveRef?: PerfectScrollbarDirective;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    // Subscribe to update mails on changes
    this.onContactsChanged = this.contactService.onContactsChanged
      .subscribe(contacts => {
        this.contacts = contacts;

        setTimeout(() => {
          this.scrollToBottom();
        }, 300);
      });

    // Subscribe to update search keywords on changes
    this.onSearchQueryChanged = this.contactService.onSearchQueryChanged
      .subscribe(searchStr => {
        this.searchQuery = searchStr;
      });
  }

  scrollToBottom(): void {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.scrollToBottom();
    }
  }

  ngOnDestroy() {
    this.onContactsChanged.unsubscribe();
    this.onSearchQueryChanged.unsubscribe();
  }

}
