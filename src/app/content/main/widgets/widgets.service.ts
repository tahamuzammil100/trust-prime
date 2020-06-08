import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService implements Resolve<any> {
  private widgetsUrl = 'api/widgets-get';  // URL to web api
  private tasksUrl = 'api/tasks-list';  // URL to web api

  widgets: any;
  tasks: any[];

  onTasksChanged: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getWidgets(),
        this.getTasksList()
      ]).then(() => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get widgets
   * @return {Promise<any>}
   */
  getWidgets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.widgetsUrl).subscribe((widgets: any) => {
          this.widgets = widgets;
          resolve(widgets);
        }, reject);
    });
  }

  /**
   * Get all tasks
   * @returns {Promise<Task>}
   */
  getTasksList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.tasksUrl)
        .subscribe((response: any) => {
          this.tasks = response;
          this.onTasksChanged.next(this.tasks);
          resolve(this.tasks);
        }, reject);
    });
  }

  updateTask(task: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.tasksUrl + '/' + task.id, {...task})
        .subscribe(response => {
          this.getTasksList().then(tasks => {
            resolve(tasks);

          }, reject);
        });
    });
  }
}
