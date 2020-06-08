import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';

import {SearchPageService} from '@app/content/pages/search/SearchPageService';
import {PagerService} from '@gaxon/services/pager.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'search-page',
    templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {
    data: Array<Object>;
    filterKeyword = 'Admin Theme';

    searchForm = new FormGroup({
        keyword: new FormControl(null, Validators.required)
    });

    constructor(private searchService: SearchPageService, private pagerService: PagerService) {
    }

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
        this.data = this.searchService.filterData(this.filterKeyword);
        // initialize to page 1
        this.setPage(1);
    }

    /**
     * Set page number to fetch data
     * @param page
     */
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.data.length, page);

        // get current page of items
        this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    /**
     * Search data by keyword in form
     */
    searchData() {
        this.filterKeyword = this.searchForm.value.keyword;
        this.data = this.searchService.filterData(this.filterKeyword);
        this.searchForm.reset();
        this.setPage(1);
    }


}
