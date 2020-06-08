import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
    selector: 'lock-screen',
    templateUrl: './lock-screen.component.html'
})
export class LockScreenComponent implements OnInit {
    @HostBinding('class') classlist = 'dt-login--container dt-lock-screen';

    constructor() { }

    ngOnInit() {
    }

}
