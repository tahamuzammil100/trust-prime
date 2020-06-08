import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Contact} from './models/contact.model';
import {Mail} from './models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService implements Resolve<any> {
  private mailsUrl = 'api/mail-list';  // URL to web api
  private contactsUrl = 'api/mail-contacts';  // URL to web api
  private labelsUrl = 'api/mail-labels';  // URL to web api
  private filtersUrl = 'api/mail-filters';  // URL to web api
  private foldersUrl = 'api/mail-folders';  // URL to web api

  mails: Mail[];
  selectedMails: Mail[] = [];
  currentMail: Mail;
  currentUser = {
    name: 'Alex Dolgove',
    email: 'alex-dolgove@example.com',
    avatar: ''
  };

  contacts: Contact[];
  labels: any[];
  filters: any[];
  folders: any[];
  routeParams: any;

  onMailsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSelectedMailsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onCurrentMailChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onComposeMailClicked: Subject<any> = new Subject();
  onContactHovered: BehaviorSubject<any> = new BehaviorSubject({});

  onContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onLabelsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onFiltersChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onFoldersChanged: BehaviorSubject<any> = new BehaviorSubject([]);
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
        this.getMails(),
        this.getContacts(),
        this.getLabels(),
        this.getFilters(),
        this.getFolders()
      ]).then(
        () => {
          if (this.routeParams.mailId) {
            this.setCurrentMail(this.routeParams.mailId);
          } else {
            this.setCurrentMail(null);
          }

          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get mails
   * @returns {Promise<Mail[]>}
   */
  getMails(): Promise<Mail[]> {
    if (this.routeParams.folderHandle) {
      return this.getMailsByFolder(this.routeParams.folderHandle);
    } else if (this.routeParams.filterHandle) {
      return this.getMailsByFilter(this.routeParams.filterHandle);
    } else if (this.routeParams.labelHandle) {
      return this.getMailsByLabel(this.routeParams.labelHandle);
    } else {
      return this.getMailsList();
    }
  }

  /**
   * Get mails list
   * @returns {Promise<Mail[]>}
   */
  getMailsList(): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.mailsUrl)
        .subscribe((response: any) => {
          this.mails = response;
          this.onMailsChanged.next(this.mails);
          resolve(this.mails);
        }, reject);
    });
  }

  /**
   * Get mails by folder
   * @param folder
   * @returns {Promise<Mail[]>}
   */
  getMailsByFolder(folder): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.mailsUrl + '?folder=' + folder)
        .subscribe((response: any) => {
          this.mails = response;
          this.onMailsChanged.next(this.mails);
          resolve(this.mails);
        }, reject);
    });
  }

  /**
   * Get mails by filter
   * @param filter
   * @returns {Promise<Mail[]>}
   */
  getMailsByFilter(filter): Promise<Mail[]> {
    return new Promise((resolve, reject) => {

      this.http.get(this.mailsUrl + '?' + filter + '=true')
        .subscribe((mails: any) => {
          this.mails = mails;
          this.onMailsChanged.next(this.mails);
          resolve(this.mails);
        }, reject);
    });
  }

  /**
   * Get mails by label
   * @param handle
   * @returns {Promise<Mail[]>}
   */
  getMailsByLabel(handle): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.labelsUrl + '?handle=' + handle)
        .subscribe((labels: any) => {

          const labelId = labels[0].id;

          this.http.get(this.mailsUrl + '?labels=' + labelId)
            .subscribe((mails: any) => {
              this.mails = mails;
              this.onMailsChanged.next(this.mails);
              resolve(this.mails);
            }, reject);
        });
    });
  }

  /**
   * Get all labels
   * @returns {Promise<any[]>}
   */
  getLabels(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.labelsUrl)
        .subscribe((response: any) => {
          this.labels = response;
          this.onLabelsChanged.next(this.labels);
          resolve(this.labels);
        }, reject);
    });
  }

  /**
   * Get all filters
   * @returns {Promise<any[]>}
   */
  getFilters(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.filtersUrl)
        .subscribe((response: any) => {
          this.filters = response;
          this.onFiltersChanged.next(this.filters);
          resolve(this.filters);
        }, reject);
    });
  }

  /**
   * Get all folders
   * @returns {Promise<any[]>}
   */
  getFolders(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.foldersUrl)
        .subscribe((response: any) => {
          this.folders = response;
          this.onFoldersChanged.next(this.folders);
          resolve(this.folders);
        }, reject);
    });
  }

  /**
   * Get all contacts
   * @returns {Promise<Contact[]>}
   */
  getContacts(): Promise<Contact[]> {
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
   * Toggle selected mail by id
   * @param id
   */
  toggleSelectedMail(id) {
    // First, check if we already have that mail as selected...
    if (this.selectedMails.length > 0) {
      for (const mail of this.selectedMails) {
        // ...delete the selected mail
        if (mail.id === id) {
          const index = this.selectedMails.indexOf(mail);

          if (index !== -1) {
            this.selectedMails.splice(index, 1);

            // Trigger the next event
            this.onSelectedMailsChanged.next(this.selectedMails);

            // Return
            return;
          }
        }
      }
    }

    // If we don't have it, push as selected
    this.selectedMails.push(
      this.mails.find(mail => {
        return mail.id === id;
      })
    );

    // Trigger the next event
    this.onSelectedMailsChanged.next(this.selectedMails);
  }

  /**
   * Toggle select all
   */
  toggleSelectAll() {
    if (this.selectedMails.length > 0) {
      this.deselectMails();
    } else {
      this.selectMails();
    }

  }

  selectMails(filterParameter?, filterValue?) {
    this.selectedMails = [];

    // If there is no filter, select all mails
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedMails = this.mails.map(x => Object.assign({}, x));
    } else {
      this.selectedMails.push(...
        this.mails.filter(mail => {
          return mail[filterParameter] === filterValue;
        })
      );
    }

    // Trigger the next event
    this.onSelectedMailsChanged.next(this.selectedMails);
  }

  deselectMails() {
    this.selectedMails = [];

    // Trigger the next event
    this.onSelectedMailsChanged.next(this.selectedMails);
  }

  /**
   * Toggle label on selected mails
   * @param labelId
   */
  toggleLabelOnSelectedMails(labelId) {
    this.selectedMails.map(mail => {

      const index = mail.labels.indexOf(labelId);

      if (index !== -1) {
        mail.labels.splice(index, 1);
      } else {
        mail.labels.push(labelId);
      }

      this.saveMail(mail);
    });
  }

  /**
   * Set folder on selected mails
   * @param folderHandle
   */
  setFolderOnSelectedMails(folderHandle) {
    this.selectedMails.map(mail => {
      mail.folder = folderHandle;

      this.saveMail(mail);
    });

    this.deselectMails();
  }

  /**
   * Set current mail by id
   * @param id
   */
  setCurrentMail(id) {
    this.currentMail = this.mails.find(mail => {
      if (id) {
        return mail.id === id;
      }
      return false;
    });

    this.onCurrentMailChanged.next(this.currentMail);

    const taskParam = (this.currentMail) ? '/' + this.currentMail.id : '';
    const labelHandle = this.routeParams.labelHandle;
    const folderHandle = this.routeParams.folderHandle;
    const filterHandle = this.routeParams.filterHandle;

    const segments = this.location.path().split('/');
    if (labelHandle) {
      this.location.go(segments[1] + '/apps/mail/label/' + labelHandle + taskParam);
    } else if (filterHandle) {
      this.location.go(segments[1] + '/apps/mail/filter/' + filterHandle + taskParam);
    } else if (filterHandle) {
      this.location.go(segments[1] + '/apps/mail/' + folderHandle + taskParam);
    } else {
      this.location.go(segments[1] + '/apps/mail/inbox' + taskParam);
    }
  }

  /**
   * Toggle label on task
   * @param labelId
   * @param mail
   */
  toggleLabel(labelId, mail) {
    const index = mail.labels.indexOf(labelId);

    if (index !== -1) {
      mail.labels.splice(index, 1);
    } else {
      mail.labels.push(labelId);
    }

    this.saveMail(mail);
  }

  /**
   * Check mail has given label
   * @param labelId
   * @param mail
   * @return {boolean}
   */
  hasLabel(labelId, mail) {
    if (!mail.labels) {
      return false;
    }

    return mail.labels.indexOf(labelId) !== -1;
  }

  /**
   * Save a mail
   * @param {Mail} mail
   * @return {Promise<any>}
   */
  saveMail(mail: Mail) {
    return new Promise((resolve, reject) => {
      this.http.post(this.mailsUrl + '/' + mail.id, {...mail})
        .subscribe(response => {
          this.getMails().then(mails => {
            resolve(mails);

          }, reject);
        });
    });
  }
}
