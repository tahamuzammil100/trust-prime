import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-our-team',
  templateUrl: './section-our-team.component.html',
  styleUrls: ['./section-our-team.component.scss']
})
export class SectionOurTeamComponent implements OnInit {
  @Input() teamCategories: any[];
  private _members: any[];
  activeCategory = 'marketing';
  teamMembers: any[];

  constructor() {
  }

  @Input()
  set members(members: any[]) {
    this._members = members;

    this.teamMembers = this._members.filter((member) => member.categories.includes(this.activeCategory));
  }

  ngOnInit() {
  }

  getFilteredTeam(category, event) {
    event.preventDefault();
    this.activeCategory = category;
    this.teamMembers = this._members.filter((member) => member.categories.includes(category));
  }

}
