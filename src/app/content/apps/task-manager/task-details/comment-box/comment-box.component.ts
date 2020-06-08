import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {TaskManagerService} from './../../task-manager.service';
import {Assignee} from './../../assignee';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html'
})
export class CommentBoxComponent implements OnInit {
  @HostBinding('class') classlist = 'add-comment-box';
  currentUser: Assignee;

  commentForm: FormGroup;

  constructor(private tasksService: TaskManagerService, private formBuilder: FormBuilder) {
    this.currentUser = this.tasksService.currentUser;
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Create form for Task
   */
  createForm() {
    this.commentForm = this.formBuilder.group({
      user_id: this.currentUser.id,
      notes: '',
      createdeAt: new Date()
    });
  }

  /**
   * Call function on keydown
   * @param event
   */
  onKeyDown(event) {
    if (event.keyCode === 13 && this.commentForm.valid) {
      if (!event.shiftKey) {
        this.sendComment();
        event.preventDefault();
      }
      // rest of your code
    } else if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  /**
   * Send new comment
   */
  sendComment() {
    this.commentForm.value.createdeAt = new Date();
    if(this.tasksService.saveComment(this.commentForm.value)) {
      this.createForm();
    }
  }

}
