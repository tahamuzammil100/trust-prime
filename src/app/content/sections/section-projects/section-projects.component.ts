import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {
  @Input() projects: any[];
  isScrollable = false;

  constructor() { }

  @Input()
  set scrollable(scrollable: boolean) {

    if (scrollable !== false) {
      this.isScrollable = true;
    }
  }

}
