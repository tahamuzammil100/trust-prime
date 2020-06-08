import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'mail-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent implements OnInit, OnDestroy {
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
