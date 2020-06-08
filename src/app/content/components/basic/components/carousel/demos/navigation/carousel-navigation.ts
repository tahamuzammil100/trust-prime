import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './carousel-navigation.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselNavigation {
  showNavigationArrows = false;
  showNavigationIndicators = false;
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
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }
}
