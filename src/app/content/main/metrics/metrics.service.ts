import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetricsService implements Resolve<any> {
  private simpleWidgetsUrl = 'api/metrics-simple-widgets';  // URL to web api
  private trendingCardsUrl = 'api/metrics-trending-cards';  // URL to web api
  private widgetsUrl = 'api/metrics-widgets';  // URL to web api

  widgets: any;
  simpleWidgets: any[];
  trendingCards: any[];

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
        this.getSimpleWidgets(),
        this.getTrendingCards()
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
   * Get simple widgets
   * @return {Promise<any>}
   */
  getSimpleWidgets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.simpleWidgetsUrl).subscribe((widgets: any[]) => {
          this.simpleWidgets = widgets;
          resolve(widgets);
        }, reject);
    });
  }

  /**
   * Get trending cards
   * @return {Promise<any>}
   */
  getTrendingCards(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.trendingCardsUrl).subscribe((cards: any[]) => {
        this.trendingCards = cards;
        resolve(cards);
      }, reject);
    });
  }
}
