import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
  images = [
    'assets/images/carousel/bull.jpg',
    'assets/images/carousel/cheetah.jpg',
    'assets/images/carousel/dog.jpg',
    'assets/images/carousel/fox.jpg',
    'assets/images/carousel/night.jpg',
    'assets/images/carousel/wolf.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
