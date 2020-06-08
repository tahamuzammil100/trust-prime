import {Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatService} from '../../chat.service';
import {Contact} from './../../contact.model';

@Component({
  selector: 'chat-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-contact';
  @HostBinding('class.active') isActive = false;
  @Input() contact: Contact;
  contactCardData: any = {show: false};
  private el: HTMLElement;

  onChatConversationChanged: Subscription;

  constructor(el: ElementRef, private chatService: ChatService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    // Subscribe to update conversation on changes
    this.onChatConversationChanged = this.chatService.onChatConversationChanged.subscribe((conversation) => {
      if (conversation.id && conversation.conversationData.length > 0) {
        this.isActive = conversation.id === this.contact.id;
      } else {
        this.isActive = false;
      }
    });
  }

  @HostListener('click')
  onClick() {
    this.chatService.getChatConversation(this.contact.id).then((data) => {
      this.chatService.onCurrentContactChanged.next(this.contact);
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.contactCardData.position = this.el.getBoundingClientRect();
    this.contactCardData.show = true;
    this.contactCardData.contact = this.contact;

    this.chatService.onContactHovered.next(this.contactCardData);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.contactCardData.show = false;
    this.chatService.onContactHovered.next(this.contactCardData);
  }

  ngOnDestroy() {
    this.onChatConversationChanged.unsubscribe();
  }

}
