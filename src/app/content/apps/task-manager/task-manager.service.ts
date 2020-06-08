import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Project} from './project';
import {Section} from './section';
import {Task} from './task';
import {Assignee} from './assignee';

@Injectable()
export class TaskManagerService implements Resolve<any> {
  private tasksUrl = 'api/tasks-list';  // URL to web api
  private taskConversationUrl = 'api/task-conversation';  // URL to web api
  private labelsUrl = 'api/tasks-labels';  // URL to web api
  private assigneesUrl = 'api/tasks-users';  // URL to web api
  private projectsUrl = 'api/tasks-projects';  // URL to web api

  currentUser: Assignee;
  sections: Section[];
  tasks: Task[];
  currentTask: Task;
  conversation: any;
  assignees: Assignee[];
  labels: any[];
  projects: Project[];
  currentProject: Project;
  routeParams: any;

  onSectionsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onTasksChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onTaskConversationChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onCurrentTaskChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onLabelsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onAssigneesChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onProjectsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onCurrentProjectChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient, private location: Location) {
  }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getTasks(),
        this.getLabels(),
        this.getAssignees(),
        this.getProjects()
      ]).then(
        () => {
          this.currentUser = this.assignees[0];

          if (this.routeParams.projectId) {
            this.setCurrentProject(this.routeParams.projectId);
          } else {
            this.setCurrentProject(null);
          }

          if (this.routeParams.taskId) {
            this.setCurrentTask(this.routeParams.taskId);
          } else {
            this.setCurrentTask(null);
          }

          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get tasks
   * @returns {Promise<Task[]>}
   */
  getTasks(): Promise<Task[]> {
    if (this.routeParams.projectId) {
      return this.getTasksByProjectId(this.routeParams.projectId);
    } else if (this.routeParams.userId) {
      if (this.routeParams.userId === 'watchlist') {
        return this.getTasksList();
      } else {
        return this.getTasksByAssigneeId(this.routeParams.userId);
      }
    } else {
      return this.getTasksList();
    }
  }

  /**
   * Get tasks by Project ID
   * @param projectId
   * @returns {Promise<Task[]>}
   */
  getTasksByProjectId(projectId): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.tasksUrl + '?project_id=' + projectId)
        .subscribe((response: any) => {
          this.tasks = response;
          this.onTasksChanged.next(this.tasks);
          resolve(this.tasks);
        }, reject);
    });
  }

  /**
   * Get tasks by Assignee ID
   * @param userId
   * @returns {Promise<Task[]>}
   */
  getTasksByAssigneeId(userId): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.tasksUrl + '?user_id=' + userId)
        .subscribe((response: any) => {
          this.tasks = response;
          this.onTasksChanged.next(this.tasks);
          resolve(this.tasks);
        }, reject);
    });
  }

  /**
   * Get all tasks
   * @returns {Promise<Task>}
   */
  getTasksList(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.tasksUrl)
        .subscribe((response: any) => {
          this.tasks = response;
          this.onTasksChanged.next(this.tasks);
          resolve(this.tasks);
        }, reject);
    });
  }

  /**
   * Get all labels
   * @returns {Promise<any>}
   */
  getLabels(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.labelsUrl)
        .subscribe((response: any) => {
          this.labels = response;
          this.onLabelsChanged.next(this.labels);
          resolve(this.labels);
        }, reject);
    });
  }

  /**
   * Get all assignees
   * @returns {Promise<Assignee>}
   */
  getAssignees(): Promise<Assignee[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.assigneesUrl)
        .subscribe((response: any) => {
          this.assignees = response;
          this.onAssigneesChanged.next(this.assignees);
          resolve(this.assignees);
        }, reject);
    });
  }

  /**
   * Get all projects
   * @returns {Promise<Project>}
   */
  getProjects(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.projectsUrl)
        .subscribe((response: any) => {
          this.projects = response;
          this.onProjectsChanged.next(this.projects);
          resolve(this.projects);
        }, reject);
    });
  }

  /**
   * Set current project by id
   * @param id
   */
  setCurrentProject(id) {
    this.currentProject = this.projects.find(project => {
      if (id) {
        return project.id === id;
      }
      return false;
    });

    this.onCurrentProjectChanged.next(this.currentProject);
  }

  /**
   * Set current task by id
   * @param id
   */
  setCurrentTask(id) {
    this.currentTask = this.tasks.find(task => {
      if (id) {
        return task.id === id;
      }
      return false;
    });

    if (this.currentTask) {
      this.getTaskConversations(this.currentTask.id);
    } else {
      this.onTaskConversationChanged.next({});
    }

    this.onCurrentTaskChanged.next(this.currentTask);

    const taskParam = (this.currentTask) ? '/' + this.currentTask.id : '';
    const projectId = this.routeParams.projectId;
    const userId = this.routeParams.userId;

    const segments = this.location.path().split('/');
    if (projectId) {
      this.location.go(segments[1] + '/apps/task-manager/project/' + projectId + taskParam);
    } else if (userId) {
      this.location.go(segments[1] + '/apps/task-manager/user/' + userId + taskParam);
    } else {
      this.location.go(segments[1] + '/apps/task-manager/dashboard' + taskParam);
    }
  }

  /**
   * Add New Task
   * @param {Task} task
   * @return {Promise<any>}
   */
  addTask(task: Task) {
    return new Promise((resolve, reject) => {
      this.http.post(this.tasksUrl + '/' + task.id, {...task})
        .subscribe(response => {
          this.getTasks().then(tasks => {
            resolve(tasks);

          }, reject);

          const conversation = {
            id: task.id,
            conversations: []
          };

          this.createTaskConversation(conversation);
        });
    });
  }

  /**
   * Toggle label on task
   * @param labelId
   * @param task Task
   */
  toggleLabel(labelId, task) {
    const index = task.labels.indexOf(labelId);

    if (index !== -1) {
      task.labels.splice(index, 1);
    } else {
      task.labels.push(labelId);
    }

    // this.onCurrentTaskChanged.next(task);
    this.updateTask(task);
  }

  hasLabel(labelId, task) {
    if (!task.labels) {
      return false;
    }

    return task.labels.indexOf(labelId) !== -1;
  }

  updateTask(task: Task) {
    return new Promise((resolve, reject) => {
      this.http.post(this.tasksUrl + '/' + task.id, {...task})
        .subscribe(response => {
          this.getTasks().then(tasks => {
            resolve(tasks);

          }, reject);
        });
    });
  }

  /**
   * Create Task conversation entry in data
   * @param conversation
   * @return {Promise<any>}
   */
  createTaskConversation(conversation: any) {
    this.conversation = conversation;

    return new Promise((resolve, reject) => {
      this.http.post(this.taskConversationUrl + '/' + this.conversation.id, {...this.conversation})
        .subscribe(response => {
        });
    });
  }

  /**
   * Get task conversation by Task ID
   * @param taskId
   * @returns {Promise<any>}
   */
  getTaskConversations(taskId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.taskConversationUrl + '/' + taskId)
        .subscribe((conversation: any) => {
          this.conversation = conversation;
          this.onTaskConversationChanged.next(this.conversation);
          resolve(this.conversation);
        }, reject);
    });
  }

  /**
   * Save comment
   * @param conversation
   * @return boolean
   */
  saveComment(commnet: any) {
    if (!this.conversation.conversations) {
      this.conversation.conversations = [];
    }

    this.conversation.conversations.push(commnet);

    return new Promise((resolve, reject) => {
      this.http.post(this.taskConversationUrl + '/' + this.conversation.id, {...this.conversation})
        .subscribe(response => {
          this.getTaskConversations(this.conversation.id).then(conversation => {
            resolve(conversation);
          }, reject);
        });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
