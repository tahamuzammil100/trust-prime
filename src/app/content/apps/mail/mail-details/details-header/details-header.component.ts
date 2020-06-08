import {Component, ElementRef, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {MailService} from './../../mail.service';
import {Mail} from './../../models/mail.model';

@Component({
  selector: 'mail-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'd-block px-1 pb-4 border-bottom border-w-2';
  currentMail: Mail;
  labels: any[] = [];
  folders: any[] = [];

  onCurrentMailChanged: Subscription;
  onLabelsChanged: Subscription;
  onFoldersChanged: Subscription;

  constructor(private eleRef: ElementRef, private mailService: MailService) {
  }

  ngOnInit() {
    // Subscribe to update currentMail on changes
    this.onCurrentMailChanged =
      this.mailService.onCurrentMailChanged
        .subscribe(currentMail => {
          if (!currentMail) {
            this.currentMail = null;
            this.eleRef.nativeElement.classList.add('mb-1');
            this.eleRef.nativeElement.classList.add('mt-n1');
          } else {
            this.currentMail = currentMail;
          }
        });

    // Subscribe to update labels on changes
    this.onLabelsChanged =
      this.mailService.onLabelsChanged
        .subscribe((labels: any) => {
          this.labels = labels;
        });

    // Subscribe to update folders on changes
    this.onFoldersChanged =
      this.mailService.onFoldersChanged
        .subscribe((folders: any) => {
          this.folders = folders;
        });
  }

  /**
   * Go to back mail listing
   */
  goToBack() {
    this.mailService.setCurrentMail(null);
  }

  /**
   * On toggle starred
   */
  onToggleStarred(event) {
    this.currentMail.starred = event;

    this.mailService.saveMail(this.currentMail);
  }

  /**
   * Mark mail as unread
   */
  markAsUnread() {
    this.currentMail.read = false;
    this.mailService.saveMail(this.currentMail).then((response) => {
      this.goToBack();
    });
  }

  /**
   * Change folder to selected emails
   * @param folderHandle
   */
  setFolder(folderHandle) {
    this.currentMail.folder = folderHandle;
    this.mailService.saveMail(this.currentMail).then((response) => {
      if(folderHandle == 'trash') {
        this.goToBack();
      }
    });
  }

  /**
   * Check Mail has label
   * @param labelId
   * @return {any | boolean}
   */
  hasLabel(labelId) {
    return this.mailService.hasLabel(labelId, this.currentMail);
  }

  /**
   * Change lables to selectd emails
   * @param labelId
   */
  toggleLabel(labelId){
    this.mailService.toggleLabel(labelId, this.currentMail);
  }

  ngOnDestroy() {
    this.onCurrentMailChanged.unsubscribe();
    this.onLabelsChanged.unsubscribe();
    this.onFoldersChanged.unsubscribe();
  }

}

