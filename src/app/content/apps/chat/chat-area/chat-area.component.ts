import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatService} from './../chat.service';
import {Contact} from './../contact.model';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit, OnDestroy {
  currentContact: Contact;
  operator: any;
  chatData: any[] = [];
  onChatConversationChanged: Subscription;
  onCurrentContactChanged: Subscription;
  onChatOperatorChanged: Subscription;
  toggleChatSidebarService: Subscription;
  isOpen = false;

  @ViewChild(PerfectScrollbarDirective, {static: false}) directiveRef?: PerfectScrollbarDirective;

  constructor(private eleRef: ElementRef, private chatService: ChatService) {
    this.eleRef.nativeElement.classList.add('dt-module__container');

    // Subscribe to update conversation on changes
    this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
      if (conversation.id && conversation.conversationData.length > 0) {
        this.chatData = conversation.conversationData;

        setTimeout(() => {
          this.scrollToBottom();
        }, 300);
      }
    });

    // Subscribe to update conversation on changes
    this.onCurrentContactChanged = this.chatService.onCurrentContactChanged.subscribe((contact) => {
      this.currentContact = contact;
    });

    // Subscribe to update operator on changes
    this.onChatOperatorChanged = this.chatService.onChatOperatorChanged.subscribe((operator) => {
      this.operator = operator;
    });

    this.toggleChatSidebarService = this.chatService.toggleChatSubject.subscribe(toggleChatSidebar => {
      this.isOpen = toggleChatSidebar;
    });
  }

  ngOnInit() {
  }

  scrollToBottom(): void {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.scrollToBottom();
    }
  }

  ngOnDestroy() {
    this.onChatConversationChanged.unsubscribe();
    this.onCurrentContactChanged.unsubscribe();
    this.toggleChatSidebarService.unsubscribe();
    this.onChatOperatorChanged.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isOpen = event.target.innerWidth > 767;
    this.chatService.toggleChatSubject.next(this.isOpen);
  }

  toggleOpen(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.chatService.toggleChatSubject.next(this.isOpen);
  }
}
