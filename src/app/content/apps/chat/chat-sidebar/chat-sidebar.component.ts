import {Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatService} from './../chat.service';
import {Contact} from './../contact.model';

import {appAnimations} from '@gaxon/mix/animations';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss'],
  animations: appAnimations
})
export class ChatSidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-module__sidebar';
  @HostBinding('class.active') isOpen = false;

  @ViewChild('tabset', {static: false}) tabset: ElementRef;

  contacts: Contact[] = [];
  recentChats: Contact[] = [];
  activeTab = 'recent';

  onContactsChanged: Subscription;
  onRecentChatsChanged: Subscription;
  toggleChatSidebarService: Subscription;
  onChatConversationChanged: Subscription;

  constructor(private chatService: ChatService) {
    // Subscribe to update contacts on changes
    this.onContactsChanged = this.chatService.onContactsChanged.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });

    // Subscribe to update recentChats on changes
    this.onRecentChatsChanged = this.chatService.onRecentChatsChanged.subscribe((recentChats: Contact[]) => {
      this.recentChats = recentChats;
    });

    this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
      this.isOpen = toggleChatSidebar;
    });

    // Subscribe to update conversation on changes
    this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
      this.isOpen = window.innerWidth > 767;
      this.chatService.toggleChatSubject.next(this.isOpen);
    });
  }

  ngOnInit() {
    // display app sidebar
    this.isOpen = window.innerWidth > 767;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isOpen = event.target.innerWidth > 767;

    this.chatService.toggleChatSubject.next(this.isOpen);
  }

  /**
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(event) {
    this.isOpen = event;
    this.chatService.toggleChatSubject.next(this.isOpen);
  }

  ngOnDestroy() {
    this.onContactsChanged.unsubscribe();
    this.onRecentChatsChanged.unsubscribe();
    this.toggleChatSidebarService.unsubscribe();
    this.onChatConversationChanged.unsubscribe();
  }
}
