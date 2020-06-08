import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ContactsService} from './../../contacts.service';

@Component({
  selector: 'app-contact-list-header',
  templateUrl: './contact-list-header.component.html',
  styleUrls: ['./contact-list-header.component.scss']
})
export class ContactListHeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'px-1 pb-4 border-bottom border-w-2 mb-1 mt-n1';
  hasSelectedContacts: boolean;
  isIndeterminate: boolean;
  onSelectedContactsChanged: Subscription;
  selected = 'None';

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    // Subscribe to update SelectedMails on changes
    this.onSelectedContactsChanged =
      this.contactService.onSelectedContactsChanged
        .subscribe(selectedContacts => {

          setTimeout(() => {
            this.hasSelectedContacts = selectedContacts.length > 0;
            this.isIndeterminate = (selectedContacts.length !== this.contactService.contacts.length && selectedContacts.length > 0);

            if (selectedContacts.length === 0) {
              this.selected = 'None';
            } else if (selectedContacts.length === this.contactService.contacts.length) {
              this.selected = 'All';
            }
          }, 0);
        });
  }

  /**
   * Toggle select all contacts
   */
  toggleSelectAll() {
    this.contactService.toggleSelectAll();
  }

  /**
   * Select contacts by filter
   * @param selected
   * @param filterParameter
   * @param filterValue
   */
  selectContacts(selected?, filterParameter?, filterValue?) {
    this.selected = (selected) ? selected : this.selected;
    this.contactService.selectContacts(filterParameter, filterValue);
  }

  /**
   * Deselect all contacts
   */
  deselectContacts() {
    this.contactService.deselectContacts();
  }

  /**
   * Change folder to selected contacts
   * @param property
   * @param value
   */
  setPropertyOnSelectedContacts(property, value) {
    this.contactService.setPropertyOnSelectedContacts(property, value);
  }

  ngOnDestroy() {
    this.onSelectedContactsChanged.unsubscribe();
  }

}
