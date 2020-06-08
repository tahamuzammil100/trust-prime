import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingDashboardService implements Resolve<any> {
  widgetsUrl = 'api/dashboard-listing-widgets';
  activitiesUrl = 'api/recent-activities';

  widgets: any;
  activities: any[];

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getWidgets(),
        this.getRecentActivities()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getWidgets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.widgetsUrl)
        .subscribe((response: any) => {
          this.widgets = response;
          resolve(response);
        }, reject);
    });
  }

  getRecentActivities(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.activitiesUrl)
        .subscribe((activities: any[]) => {
          this.activities = activities;
          resolve(activities);
        }, reject);
    });
  }
}
