import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {MailService} from './../../mail.service';
import {Subscription} from 'rxjs';
import {Mail} from './../../models/mail.model';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__list-item cursor-pointer';
  @HostBinding('class.selected') selected: boolean;
  @Input() mail: Mail;

  labels: any[] = [];
  onLabelsChanged: Subscription;
  onSelectedMailsChanged: Subscription;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    // Subscribe to update labels on changes
    this.onLabelsChanged =
      this.mailService.onLabelsChanged
        .subscribe((labels: any) => {
          this.labels = labels;
        });

    // Subscribe to update SelectedMails on changes
    this.onSelectedMailsChanged =
      this.mailService.onSelectedMailsChanged
        .subscribe(selectedMails => {
          this.selected = selectedMails.find((mail: Mail) => {
            return mail.id === this.mail.id;
          });
        });
  }

  onSelectedChange(event) {
    this.selected = event;
    this.mailService.toggleSelectedMail(this.mail.id);
  }

  /**
   * On toggle starred
   */
  onToggleStarred(event) {
    this.mail.starred = event;

    this.mailService.saveMail(this.mail);
  }

  ngOnDestroy() {
    this.onLabelsChanged.unsubscribe();
    this.onSelectedMailsChanged.unsubscribe();
  }

}
