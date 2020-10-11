import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish._id === id))[0]);
  }



  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish._id ));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish._id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  postComment(dishId: string, comment: any) {
    console.log(comment)
    return this.http.post(baseURL + 'dishes/' + dishId + '/comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
