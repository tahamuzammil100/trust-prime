import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskManagerService} from './../../task-manager.service';
import {Assignee} from './../../assignee';

@Component({
  selector: 'app-task-conversation',
  templateUrl: './task-conversation.component.html'
})
export class TaskConversationComponent implements OnInit, OnDestroy {
  itemFrom: number;
  itemTo: number;
  limit = 2;
  private _items: any[] = [];

  comments: any[] = [];
  assignees: Assignee[] = [];

  onTaskConversationChanged: Subscription;
  onAssigneesChanged: Subscription;

  constructor(private tasksService: TaskManagerService) {
  }

  ngOnInit() {
    // Subscribe to update task conversation on changes
    this.onTaskConversationChanged =
      this.tasksService.onTaskConversationChanged
        .subscribe(data => {
          if(data.id) {
            this._items = data.conversations;

            if (this.limit >= this._items.length) {
              this.itemFrom = 0;
              this.comments = this._items;
            } else {
              this.itemFrom = this._items.length - this.limit;
              this.itemTo = this._items.length;
              this.comments = this._items.slice(this.itemFrom, this.itemTo);
            }
          }
        });

    // Subscribe to update assignees on changes
    this.onAssigneesChanged =
      this.tasksService.onAssigneesChanged
        .subscribe(assignees => {
          this.assignees = assignees;
        });
  }

  showOlder() {
    if (this.itemFrom - this.limit >= 0) {
      this.itemFrom -= this.limit;
    } else {
      this.itemFrom = 0;
    }

    this.comments = this._items.slice(this.itemFrom, this.itemTo);
  }

  ngOnDestroy() {
    this.onTaskConversationChanged.unsubscribe();
    this.onAssigneesChanged.unsubscribe();
  }

}
