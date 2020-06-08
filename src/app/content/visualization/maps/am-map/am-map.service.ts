import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AmMapService implements Resolve<any> {
  mapsList: any[];

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getMapsData()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getMapsData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/am-maps-list')
        .subscribe((response: any) => {
          this.mapsList = response;
          resolve(response);
        }, reject);
    });
  }
}
