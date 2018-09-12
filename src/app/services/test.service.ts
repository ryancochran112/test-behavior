import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TestService {

  constructor() { }

  doWork1 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber);
  }

  doWork2 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber + 1);
  }

  doWork3 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber + 1);
  }

  doWork4 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber + 1);
  }

}
