import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'todo-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-notification';
  notifications: any[] = [];
  onNotificationsChanged: Subscription;

  constructor(private appService: AppService) {
    this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications: any[]) => {
      this.notifications = notifications;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onNotificationsChanged.unsubscribe();
  }

}
