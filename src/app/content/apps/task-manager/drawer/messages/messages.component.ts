import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'todo-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-notification';
  messages: any[] = [];
  onMessagesChanged: Subscription;

  constructor(private appService: AppService) {
    this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages: any[]) => {
      this.messages = messages;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onMessagesChanged.unsubscribe();
  }

}
