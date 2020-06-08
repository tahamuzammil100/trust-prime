import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Contact} from './../../contact.model';
import {ContactsService} from './../../contacts.service';
import {EditContactComponent} from './../../edit-contact/edit-contact.component';
  '';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__list-item';
  @HostBinding('class.selected') selected: boolean;
  @Input() contact: Contact;
  onSelectedContactsChanged: Subscription;

  constructor(private contactService: ContactsService, private modalService: NgbModal) {
  }

  ngOnInit() {
    // Subscribe to update SelectedMails on changes
    this.onSelectedContactsChanged =
      this.contactService.onSelectedContactsChanged
        .subscribe(selectedContacts => {
          this.selected = selectedContacts.find((contact: Contact) => {
            return contact.id === this.contact.id;
          });
        });
  }

  onSelectedChange(event) {
    this.selected = event;
    this.contactService.toggleSelectedContact(this.contact.id);
  }

  /**
   * On toggle starred
   */
  onToggleStarred(event) {
    this.contact.starred = event;

    this.contactService.saveContact(this.contact);
  }

  /**
   * Edit a contact
   * @param {Contact} contact
   */
  editContact(contact: Contact) {
    const modalRef = this.modalService.open(EditContactComponent, { size: 'lg' });
    modalRef.componentInstance.contact = contact;
    modalRef.componentInstance.title = 'Edit Contact';
  }

  /**
   * Delete a contact
   * @param {Contact} contact
   */
  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id);
  }

  /**
   * Add contact in Favourite List
   */
  onFavouriteContact() {
    this.contact.favourite = true;

    this.contactService.saveContact(this.contact);
  }

  ngOnDestroy() {
    this.onSelectedContactsChanged.unsubscribe();
  }

}
