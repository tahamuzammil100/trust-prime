import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

let storedMessages = [];

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html'
})
export class ChatConversationComponent implements OnInit {
  @HostBinding('class.reply') replied = false;
  @Input() chatData: any;
  @Input() index: any;
  @Input() message: any;
  @Input() operator: any;
  @Input() contact: any;

  prevMessage: any;
  nextMessage: any;
  avatar: any;
  renderMessage = true;
  messageList: any[] = [];

  constructor(private eleRef: ElementRef) {

  }

  ngOnInit() {
    if (this.operator.id === this.message.senderId) {
      this.replied = true;
      this.avatar = this.operator;
    } else {
      this.replied = false;
      this.avatar = this.contact;
    }

    if (this.index > 0) {
      this.prevMessage = this.chatData[this.index - 1];
    }

    if (this.index < (this.chatData.length - 1)) {
      this.nextMessage = this.chatData[this.index + 1];
    }

    if (this.nextMessage) {
      if (this.nextMessage && this.nextMessage.senderId === this.message.senderId) {
        storedMessages.push(this.message);
        this.renderMessage = false;
      } else if (this.nextMessage.senderId !== this.message.senderId) {
        storedMessages.push(this.message);

        this.messageList = storedMessages;
        storedMessages = [];
        this.renderMessage = true;
      }
    } else {
      storedMessages.push(this.message);

      this.messageList = storedMessages;
      storedMessages = [];
      this.renderMessage = true;
    }

    if(this.renderMessage) {
      this.eleRef.nativeElement.classList.add('dt-chat__item');
    } else {
      this.eleRef.nativeElement.style.display = 'none';
    }
  }

}
