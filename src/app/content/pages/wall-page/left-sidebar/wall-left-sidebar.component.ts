import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'wall-left-sidebar',
    templateUrl: './wall-left-sidebar.component.html'
})
export class WallLeftSidebarComponent implements OnInit {
    @Input('leftSidebarData') data: any;
    @HostBinding('class') classList = 'col-xl-3 col-md-4 col-sm-5';
    friendListCardTitle = 'Friends - 530 <span class="f-12 text-light-gray">(27 Mutual)';

    constructor() {
    }

    follow = true;

    ngOnInit() {
    }

    toggleFollow() {
        this.follow = !this.follow;
    }

}
