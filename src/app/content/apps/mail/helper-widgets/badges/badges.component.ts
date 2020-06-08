import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'task-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent implements OnInit {
  @Input() ids: number[];
  @Input() labels: any[];
  @Input() showAll = true;

  items: number[];

  ngOnInit() {
    if(this.showAll) {
      this.items = this.ids;
    } else {
      this.items = this.ids.slice(0, 2);
    }
  }
}
