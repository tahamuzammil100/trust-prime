import {Component, OnInit, VERSION, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GlobalConfig, ToastContainerDirective, ToastNoAnimation, ToastrService} from 'ngx-toastr';
import {cloneDeep, random} from 'lodash-es';

import {NotyfToastComponent} from '@gaxon/components/notifications/notyf.toast';
import {PinkToastComponent} from '@gaxon/components/notifications/pink.toast';

interface Quote {
  title?: string;
  message?: string;
}

const quotes: Quote[] = [
  {
    title: 'Title',
    message: 'Message',
  },
  {
    title: '😃',
    message: 'Supports Emoji',
  },
  {
    message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
  },
  {
    message: 'Titles are not always needed',
  },
  {
    title: 'Title only 👊',
  },
  {
    title: '',
    message: `Supports Angular ${VERSION.full}`,
  },
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  options: GlobalConfig;
  types: string[] = ['success', 'error', 'info', 'warning'];
  type = this.types[0];

  @ViewChild(ToastContainerDirective, {static: false}) inlineContainer: ToastContainerDirective;

  constructor(title: Title, private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    const current = title.getTitle();

    title.setTitle(`${current}: Notifications`);
  }

  ngOnInit() {
  }

  getMessage() {
    const randomMessage = quotes[random(0, quotes.length - 1)];
    const m = randomMessage.message;
    const t = randomMessage.title;

    return {message: m, title: t};
  }

  showSuccess() {
    this.toastr.success('Signed in successfully', 'Success!');
  }

  showError() {
    this.toastr.error('Do not press this button', 'Error!');
  }

  showWarning() {
    this.toastr.warning('You have pressed the button.', 'Warning!');
  }

  showInformation() {
    this.toastr.info('Press this button to go to next step.', 'Information!');
  }

  showProgressBar(progressAnimation) {
    const opt = cloneDeep(this.options);
    opt.progressBar = true;
    opt.progressAnimation = progressAnimation;

    this.type = this.types[random(0, this.types.length - 1)];
    const toastType = this.options.iconClasses[this.type];

    this.toastr.show('You have pressed the Progress Bar button.', 'Progress Bar!', opt, toastType);
  }

  changePosition(positionClass) {
    const opt = cloneDeep(this.options);
    opt.positionClass = positionClass;

    this.type = this.types[random(0, this.types.length - 1)];
    const toastType = this.options.iconClasses[this.type];

    this.toastr.show('You have pressed the Position button.', 'Progress Bar!', opt, toastType);
  }

  openInlinePosition() {
    this.toastr.overlayContainer = this.inlineContainer;

    const {message, title} = this.getMessage();
    const opt = cloneDeep(this.options);
    opt.positionClass = 'toast-inline';

    this.type = this.types[random(0, this.types.length - 1)];
    this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
  }

  openToastNoAnimation() {
    const {message, title} = this.getMessage();
    const opt = cloneDeep(this.options);
    this.type = this.types[random(0, this.types.length - 1)];
    opt.toastComponent = ToastNoAnimation;
    this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
  }

  openPinkToast() {
    const opt = cloneDeep(this.options);
    opt.toastComponent = PinkToastComponent;
    opt.toastClass = 'pinktoast';
    const {message, title} = this.getMessage();
    this.toastr.show(message, title, opt);
  }

  openNotyf() {
    const opt = cloneDeep(this.options);
    opt.toastComponent = NotyfToastComponent;
    opt.toastClass = 'notyf confirm';
    opt.positionClass = 'notyf-container';
    this.options.newestOnTop = false;
    const {message, title} = this.getMessage();
    this.toastr.show(message || 'Success', title, opt);
  }
}
