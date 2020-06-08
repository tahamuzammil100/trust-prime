import {Component, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {SettingsService} from '@app/settings/settings.service';
import {TaskManagerService} from './../task-manager.service';
import {DrawerService} from './../../drawer.service';
import {Project} from './../project';
import {Assignee} from './../assignee';
import {Task} from './../task';
import {GxHelper} from '@gaxon/helpers';
import {appAnimations} from '@gaxon/mix/animations';

@Component({
  selector: 'app-task-sidebar',
  templateUrl: './task-sidebar.component.html',
  styleUrls: ['./task-sidebar.component.scss'],
  animations: appAnimations
})
export class TaskSidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-module__sidebar';
  @HostBinding('class.active') isOpen = false;

  public projects: Project[] = [];
  public assignees: Assignee[] = [];
  currentUser: Assignee;
  activeMenu: string;
  drawer: any;
  settings: any;
  hiddenPageHeader: boolean;
  headerLessLayout = ['modern', 'back-office', 'back-office-mini'];

  onProjectsChanged: Subscription;
  onAssigneesChanged: Subscription;
  onDrawerChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private tasksService: TaskManagerService,
              private drawerService: DrawerService,
              private settingService: SettingsService,
              private router: Router) {
    this.currentUser = this.tasksService.currentUser;

    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.hiddenPageHeader = this.headerLessLayout.includes(this.settings.layout);
      }
    );

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOpen = window.innerWidth > 767;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isOpen = event.target.innerWidth > 767;
  }

  ngOnInit() {
    // Subscribe to update projects on changes
    this.onProjectsChanged =
      this.tasksService.onProjectsChanged
        .subscribe(projects => {
          this.projects = projects;
        });

    // Subscribe to update assignees on changes
    this.onAssigneesChanged =
      this.tasksService.onAssigneesChanged
        .subscribe(assignees => {
          this.assignees = assignees;
        });

    // display app sidebar
    this.isOpen = window.innerWidth > 767;
  }

  /**
   * Toggle main navigation
   * @param event
   */
  toggleNavigation(event) {
    event.preventDefault();

    this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    this.settingService.setSettings(this.settings);
  }

  ngOnDestroy() {
    this.onProjectsChanged.unsubscribe();
    this.onAssigneesChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

  /**
   * On Click Menu
   */
  onClickMenu(event, activeMenu) {
    event.preventDefault();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawer.isOpen = true;
    this.drawerService.update(this.drawer);
  }

  /**
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(ev) {
    ev.preventDefault();

    this.isOpen = !this.isOpen;
  }


  /**
   * Create new Task
   */
  onCreateTask() {
    const newTask = new Task();
    newTask.id = GxHelper.UUID();
    newTask.created = new Date();
    newTask.labels = [];
    newTask.user_id = '';

    if (this.tasksService.currentProject) {
      newTask.project_id = this.tasksService.currentProject.id;
    }

    this.tasksService.addTask(newTask).then((response) => {
      this.tasksService.setCurrentTask(newTask.id);
    });
  }
}
