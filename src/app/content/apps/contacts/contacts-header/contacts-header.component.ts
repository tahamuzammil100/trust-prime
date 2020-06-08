import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.scss']
})
export class ContactsHeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__header d-none d-md-flex';
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
