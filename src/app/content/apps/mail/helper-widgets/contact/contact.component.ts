import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {MailService} from '../../mail.service';
import {Contact} from './../../models/contact.model';

@Component({
  selector: 'mail-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-contact';
  @Input() contact: Contact;
  contactCardData: any = {show: false};
  private el: HTMLElement;

  constructor(el: ElementRef, private mailService: MailService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.contactCardData.position = this.el.getBoundingClientRect();
    this.contactCardData.show = true;
    this.contactCardData.contact = this.contact;

    this.mailService.onContactHovered.next(this.contactCardData);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.contactCardData.show = false;
    this.mailService.onContactHovered.next(this.contactCardData);
  }

}
