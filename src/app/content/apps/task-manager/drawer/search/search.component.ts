import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AppService} from '@app/app.service';
import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'todo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-notification';
  messages: any[] = [];
  searchText = '';
  searchQuery: FormControl;
  onMessagesChanged: Subscription;

  constructor(private appService: AppService) {
    this.searchQuery = new FormControl('');
    this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages: any[]) => {
      this.messages = messages;
    });
  }

  ngOnInit() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.searchText = searchText;
    });
  }

  ngOnDestroy() {
    this.onMessagesChanged.unsubscribe();
  }

}
