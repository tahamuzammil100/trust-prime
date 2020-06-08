import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskManagerService} from './../task-manager.service';
import {DrawerService} from './../../drawer.service';
import {Task} from './../task';
import {GxHelper} from '@gaxon/helpers';

@Component({
  selector: 'todo-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  @HostBinding('class') draverClasses = 'dt-module__drawer dt-drawer position-left';
  @HostBinding('class.open') isOpen = false;
  activeMenu: string;
  showLoader = false;
  drawer: any;
  onDrawerChanged: Subscription;

  constructor(private tasksService: TaskManagerService, private drawerService: DrawerService) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer: any) => {
      if (!this.activeMenu) {
        this.processLoader();
      }

      this.drawer = drawer;
      this.isOpen = this.isOpen;
      this.activeMenu = this.drawer.activeMenu;

      if (!this.drawer.isOpen) {
        this.activeMenu = '';
      }
    });
  }

  ngOnInit() {
  }

  processLoader() {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  /**
   * Close Drawer
   * @param event
   */
  closeDrawer(event) {
    event.preventDefault();

    this.drawer.isOpen = false;
    this.drawerService.update(this.drawer);
  }

  onSelectMenu(event, activeMenu) {
    event.preventDefault();
    this.processLoader();

    this.drawer.activeMenu = this.activeMenu = activeMenu;
    this.drawerService.update(this.drawer);
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
      this.drawer.isOpen = false;
      this.drawerService.update(this.drawer);

      this.tasksService.setCurrentTask(newTask.id);
    });
  }

  ngOnDestroy() {
    this.onDrawerChanged.unsubscribe();
  }

}
