import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Contact} from './../../contact.model';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-module__header';
  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

}
