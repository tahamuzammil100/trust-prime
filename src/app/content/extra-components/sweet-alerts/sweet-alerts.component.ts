import {Component, OnInit, ViewChild} from '@angular/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-sweet-alerts',
  templateUrl: './sweet-alerts.component.html',
  styleUrls: ['./sweet-alerts.component.scss']
})
export class SweetAlertsComponent implements OnInit {
  customHtml: any = {
    title: '<i>HTML</i> <u>example</u>',
    type: 'info',
    html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="icon icon-thumbs-up icon-fw"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="icon icon-thumbs-down icon-fw"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  };

  customPosition: any = {
    position: 'top-start',
    type: 'success',
    title: 'Custom Position',
    text: 'Alert message postion Top Start'
  };

  secondsLeft = 2000;
  timerInterval;

  @ViewChild('deleteSwal', {static: true}) private deleteSwal: SwalComponent;
  @ViewChild('autoCloseSwal', {static: true}) private autoCloseSwal: SwalComponent;
  @ViewChild('deleteConfirmSwal', {static: true}) private deleteConfirmSwal: SwalComponent;
  @ViewChild('deleteCancelSwal', {static: true}) private deleteCancelSwal: SwalComponent;

  constructor() {
  }

  ngOnInit() {
  }

  public openAutoClose(event): void {
    this.timerInterval = setInterval(() => {
      this.secondsLeft = this.secondsLeft - 50;
    }, 50);
  }

  public closeAutoClose(event): void {
    this.secondsLeft = 2000;
    clearInterval(this.timerInterval);
  }

  public deleteConfirm() {
    this.deleteConfirmSwal.fire();
  }

  public deleteCancel() {
    this.deleteCancelSwal.fire();
  }

  public saveEmail(email: string): void {
    // ... save user email
  }

  public handleRefusalToSetEmail(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }
}
