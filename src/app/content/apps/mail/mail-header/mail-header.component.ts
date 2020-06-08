import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {MailService} from './../mail.service';

@Component({
  selector: 'mail-header',
  templateUrl: './mail-header.component.html',
  styleUrls: ['./mail-header.component.scss']
})
export class MailHeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'px-1 pb-4 border-bottom border-w-2 mb-1 mt-n1';
  hasSelectedMails: boolean;
  isIndeterminate: boolean;
  selected = 'None';

  labels: any[] = [];
  folders: any[] = [];

  onSelectedMailsChanged: Subscription;
  onLabelsChanged: Subscription;
  onFoldersChanged: Subscription;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    // Subscribe to update SelectedMails on changes
    this.onSelectedMailsChanged =
      this.mailService.onSelectedMailsChanged
        .subscribe(selectedMails => {

          setTimeout(() => {
            this.hasSelectedMails = selectedMails.length > 0;
            this.isIndeterminate = (selectedMails.length !== this.mailService.mails.length && selectedMails.length > 0);

            if (selectedMails.length === 0) {
              this.selected = 'None';
            } else if (selectedMails.length === this.mailService.mails.length) {
              this.selected = 'All';
            }
          }, 0);
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
   * Toggle select all mails
   */
  toggleSelectAll() {
    this.mailService.toggleSelectAll();
  }

  /**
   * Select mails by filter
   * @param selected
   * @param filterParameter
   * @param filterValue
   */
  selectMails(selected?, filterParameter?, filterValue?) {
    this.selected = (selected) ? selected : this.selected;
    this.mailService.selectMails(filterParameter, filterValue);
  }

  /**
   * Deselect all mails
   */
  deselectMails() {
    this.mailService.deselectMails();
  }

  /**
   * Change folder to selected emails
   * @param folderHandle
   */
  setFolderOnSelectedMails(folderHandle) {
    this.mailService.setFolderOnSelectedMails(folderHandle);
  }

  /**
   * Change lables to selectd emails
   * @param labelId
   */
  toggleLabelOnSelectedMails(labelId) {
    this.mailService.toggleLabelOnSelectedMails(labelId);
  }

  ngOnDestroy() {
    this.onLabelsChanged.unsubscribe();
    this.onFoldersChanged.unsubscribe();
    this.onSelectedMailsChanged.unsubscribe();
  }

}
