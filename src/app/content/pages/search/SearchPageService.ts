import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchPageService implements Resolve<any> {
    private apiUrl = 'api/search-data';  // URL to web api

    searchData: any;

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
                this.fetchSearchData(),
            ]).then(() => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    fetchSearchData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl).subscribe((data: any[]) => {
                this.searchData = data;
                resolve(data);
            }, reject);
        });
    }

    /**
     * filter data
     * @param keyword
     */
    filterData(keyword) {
        console.log(keyword)
        if (!keyword || keyword === '') {
            return this.searchData;
        }
        return this.searchData.filter(function (item) {
            if (item.title.indexOf(keyword) > -1 || item.url.indexOf(keyword) > -1 || item.text.indexOf(keyword) > -1) {
                return item;
            }
        });
    }
}
