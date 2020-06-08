import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Masonry } from 'ng-masonry-grid';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './dropdown.component.html'
})

export class NgbdDropdown implements OnInit, AfterViewInit {
    snippets: string = '';
    _masonry: Masonry;

    constructor() {
    }

    // Get ng masonry grid instance first
    onNgMasonryInit($event: Masonry) {
        this._masonry = $event;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this._masonry) { // Check if Masonry instance exists
            this._masonry.reloadItems();
        }
    }

}
