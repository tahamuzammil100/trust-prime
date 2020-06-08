import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ChatService} from './../../chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html'
})
export class ChatBoxComponent implements OnInit {
  @HostBinding('class') classlist = 'd-block add-comment-box';
  @Input() operator: any;

  chatForm: FormGroup;

  constructor(private chatService: ChatService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Create form for Task
   */
  createForm() {
    this.chatForm = this.formBuilder.group({
      senderId: this.operator.id,
      message: '',
      sentAt: new Date()
    });
  }

  /**
   * Call function on keydown
   * @param event
   */
  onKeyDown(event) {
    if (event.keyCode === 13 && this.chatForm.valid) {
      if (!event.shiftKey) {
        this.sendMessage();
        event.preventDefault();
      }
      // rest of your code
    } else if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  /**
   * Send Chat message
   */
  sendMessage() {
    this.chatForm.value.sentAt = new Date();
    if (this.chatService.saveConversation(this.chatForm.value)) {
      this.createForm();
    }
  }

}
