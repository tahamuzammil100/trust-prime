import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService implements Resolve<any> {
  private contactsUrl = 'api/contacts';  // URL to web api
  contacts: Contact[];
  selectedContacts: Contact[] = [];
  routeParams: any;

  onContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSelectedContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSearchQueryChanged: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private http: HttpClient, private location: Location) {
  }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getContacts(),
      ]).then(() => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get contacts
   * @returns {Promise<Contact[]>}
   */
  getContacts(): Promise<Contact[]> {
    if (this.routeParams.handle) {
      return this.getContactsByParams(this.routeParams.handle);
    } else {
      return this.getAllContacts();
    }
  }

  /**
   * Get all contacts
   * @returns {Promise<Contact[]>}
   */
  getAllContacts(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.contactsUrl)
        .subscribe((response: any) => {
          this.contacts = response;
          this.onContactsChanged.next(this.contacts);
          resolve(this.contacts);
        }, reject);
    });
  }

  /**
   * Get contacts by param
   * @param param
   * @return {Promise<Contact[]>}
   */
  getContactsByParams(param: any): Promise<Contact[]> {
    const params = '?' + param + '=true';
    return new Promise((resolve, reject) => {
      this.http.get(this.contactsUrl + params)
        .subscribe((response: any) => {
          this.contacts = response;
          this.onContactsChanged.next(this.contacts);
          resolve(this.contacts);
        }, reject);
    });
  }

  /**
   * Toggle selected contact by id
   * @param id
   */
  toggleSelectedContact(id) {
    // First, check if we already have that contact as selected
    if (this.selectedContacts.length > 0) {
      for (const contact of this.selectedContacts) {
        // delete the selected contact
        if (contact.id === id) {
          const index = this.selectedContacts.indexOf(contact);

          if (index !== -1) {
            this.selectedContacts.splice(index, 1);

            // Trigger the next event
            this.onSelectedContactsChanged.next(this.selectedContacts);

            // Return
            return;
          }
        }
      }
    }

    // If we don't have it, push in selected list
    this.selectedContacts.push(
      this.contacts.find(contact => {
        return contact.id === id;
      })
    );

    // Trigger the next event
    this.onSelectedContactsChanged.next(this.selectedContacts);
  }

  /**
   * Toggle select all
   */
  toggleSelectAll() {
    if (this.selectedContacts.length > 0) {
      this.deselectContacts();
    } else {
      this.selectContacts();
    }

  }

  /**
   * Add contact in selectedContacts list
   * @param filterParameter
   * @param filterValue
   */
  selectContacts(filterParameter?, filterValue?) {
    this.selectedContacts = [];

    // If there is no filter, select all mails
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedContacts = this.contacts.map(x => Object.assign({}, x));
    } else {
      this.selectedContacts.push(...
        this.contacts.filter(contact => {
          return contact[filterParameter] === filterValue;
        })
      );
    }

    // Trigger the next event
    this.onSelectedContactsChanged.next(this.selectedContacts);
  }

  /**
   * Deselect all contacts
   */
  deselectContacts() {
    this.selectedContacts = [];

    // Trigger the next event
    this.onSelectedContactsChanged.next(this.selectedContacts);
  }

  /**
   * Set property on selected contacts
   * @param property
   * @param value
   */
  setPropertyOnSelectedContacts(property, value) {
    this.selectedContacts.map(contact => {
      contact[property] = value;

      this.saveContact(contact);
    });

    this.deselectContacts();
  }

  /**
   * Save a contact
   * @param {Contact} contact
   * @return {Promise<any>}
   */
  saveContact(contact: Contact) {
    return new Promise((resolve, reject) => {
      this.http.post(this.contactsUrl + '/' + contact.id, {...contact})
        .subscribe(response => {
          this.getContacts().then(contacts => {
            resolve(contacts);

          }, reject);
        });
    });
  }

  /**
   * Delete a contact from data
   * @param contactId
   * @return {Promise<any>}
   */
  deleteContact(contactId) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.contactsUrl + '/' + contactId)
        .subscribe(response => {
          this.getContacts().then(contacts => {
            resolve(contacts);

          }, reject);
        });
    });
  }
}
