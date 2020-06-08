import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ContactsService} from './../../contacts.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'contact-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
  @HostBinding('class') classlist = 'search-box ml-n4';
  searchQuery: FormControl;

  constructor(private contactService: ContactsService) {
    this.searchQuery = new FormControl('');
  }

  ngOnInit() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.contactService.onSearchQueryChanged.next(searchText);
    });
  }

}
