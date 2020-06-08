import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mail-conversation',
  templateUrl: './mail-conversation.component.html'
})
export class MailConversationComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-module__list-item';
  @HostBinding('class.open') isOpened: boolean;
  @Input() conversation: any;

  constructor() { }

  ngOnInit() {
  }

}
