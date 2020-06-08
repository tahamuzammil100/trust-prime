import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-flying-bird',
  templateUrl: './widget-flying-bird.component.html'
})
export class WidgetFlyingBirdComponent implements OnInit {
  mediaImg = {
    url: 'assets/images/widget/icon-project-3.png',
    alt: 'Bob Bush',
    classlist: 'img-fluid mr-4'
  };

  constructor() { }

  ngOnInit() {
  }

}
