import {Component, ElementRef, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {GxHelper} from '@gaxon/helpers';

import {MailService} from './../mail.service';
import {Mail} from './../models/mail.model';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'compose-mail-box';

  composeMail: any;
  minimized = false;
  composeMailForm: FormGroup;
  onComposeMailClicked: Subscription;

  constructor(private mailService: MailService, private componentRef: ElementRef, private formBuilder: FormBuilder) {
    this.componentRef.nativeElement.style.display = 'none';
  }

  ngOnInit() {
    this.composeMailForm = this.createComposeForm();

    // Subscribe to update composedMail on changes
    this.onComposeMailClicked = this.mailService.onComposeMailClicked
      .subscribe((response: any) => {
        this.componentRef.nativeElement.style.display = 'block';
        this.composeMail = this.resetMail();
      });
  }

  /**
   * Reset new mail
   * @return {Mail}
   */
  resetMail() {
    const newMail = new Mail();
    newMail.id = GxHelper.UUID();
    newMail.from = this.mailService.currentUser;
    newMail.read = true;
    newMail.attachments = [];
    newMail.labels = [];
    newMail.conversation = [];

    return newMail;
  }

  /**
   * Create comose reactive form
   */
  createComposeForm() {
    const subject = 'subject';
    const message = 'Hi Mate,\n' +
      'Sorry for the delay in response!\n' +
      'I’m afraid, I won’t be able to join you in the conference call. I have to take my\n' +
      'daughter for her game. I hope that is ok.\n' +
      '\n' +
      'Cheers!\n' +
      'Dom';

    const toUsers = new FormArray([]);

    toUsers.push(
      new FormGroup({
        name: new FormControl(null),
        email: new FormControl(null, Validators.required)
      })
    );

    return this.formBuilder.group({
      subject: new FormControl(subject, Validators.required),
      message: new FormControl(message, Validators.required),
      to: toUsers
    });
  }

  /**
   * On close form
   * @param event
   */
  onCloseClick(event) {
    event.stopPropagation();

    const today = new Date();
    this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
    this.composeMail.folder = 'drafts';

    this.composeMail.subject = this.composeMailForm.get('subject').value;
    this.composeMail.message = this.composeMailForm.get('message').value;
    this.composeMail.to = this.composeMailForm.get('to').value;

    this.saveMail(this.composeMail).then((response) => {
      this.composeMailForm = this.createComposeForm();
      this.composeMail = this.resetMail();

      this.componentRef.nativeElement.style.display = 'none';
    });
  }

  /**
   * On submit form
   */
  onSubmitForm() {
    const today = new Date();
    this.composeMail.time = today.getDate() + ' ' + today.toLocaleString('en', { month: 'short' });
    this.composeMail.folder = 'sent';

    this.composeMail.subject = this.composeMailForm.get('subject').value;
    this.composeMail.message = this.composeMailForm.get('message').value;
    this.composeMail.to = this.composeMailForm.get('to').value;

    this.saveMail(this.composeMail).then((response) => {
      this.composeMailForm = this.createComposeForm();
      this.composeMail = this.resetMail();

      this.componentRef.nativeElement.style.display = 'none';
    });
  }

  /**
   * Save mail in data
   * @param mail
   * @return {Promise<any>}
   */
  saveMail(mail) {
    return this.mailService.saveMail(mail);
  }

  /**
   * On Discard Mail
   */
  onDiscardMail() {
    this.composeMailForm = this.createComposeForm();
    this.composeMail = this.resetMail();

    this.componentRef.nativeElement.style.display = 'none';
  }

  ngOnDestroy() {
    this.onComposeMailClicked.unsubscribe();
  }
}
