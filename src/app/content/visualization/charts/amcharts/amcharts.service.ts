import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AmchartsService implements Resolve<any> {
  charts: any[];

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getCharts()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getCharts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/am-charts')
        .subscribe((response: any) => {
          this.charts = response;
          resolve(response);
        }, reject);
    });
  }
}

