import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'wall-right-sidebar',
    templateUrl: './wall-right-sidebar.component.html'
})
export class WallRightSidebarComponent implements OnInit {
    @Input('rightSidebarData') data: any;
    @HostBinding('class') classList = 'col-xl-4 d-none d-xl-block';
    constructor() {}

    ngOnInit() {
    }
}
