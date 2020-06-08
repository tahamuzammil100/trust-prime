import { Component, OnInit } from '@angular/core';
import {GridViewsService} from '../grid-views.service';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss']
})
export class BasicGridComponent implements OnInit {
  usersList: any;

  constructor(private gridService: GridViewsService) {
    this.usersList = this.gridService.usersList;
  }

  ngOnInit() {
  }

}
