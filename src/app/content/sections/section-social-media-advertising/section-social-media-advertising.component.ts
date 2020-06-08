import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-social-media-advertising',
  templateUrl: './section-social-media-advertising.component.html',
  styleUrls: ['./section-social-media-advertising.component.scss']
})
export class SectionSocialMediaAdvertisingComponent implements OnInit {
  @Input() socialMedia: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
