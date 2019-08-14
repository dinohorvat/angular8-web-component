import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public myData: Subject<any> = new Subject();
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://demo9054821.mockable.io/').pipe(map((res) => {
      this.myData.next(res);
    }));
  }
}
