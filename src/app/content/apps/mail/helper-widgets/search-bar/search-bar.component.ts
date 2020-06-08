import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MailService} from './../../mail.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'mail-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @HostBinding('class') classlist = 'search-box ml-n4';
  searchQuery: FormControl;

  constructor(private mailService: MailService) {
    this.searchQuery = new FormControl('');
  }

  ngOnInit() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.mailService.onSearchQueryChanged.next(searchText);
    });
  }

}
