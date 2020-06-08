import {Component, OnInit} from '@angular/core';
import {ListViewsService} from './../list-views.service';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
  usersList: any;

  constructor(private listService: ListViewsService) {
    this.usersList = this.listService.usersList;
  }

  ngOnInit() {
  }

}
