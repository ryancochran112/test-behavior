import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TestService {

  doWork1 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber + 1);
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

  doWork5 (jobNumber: number): Observable<number> {
    return Observable.of(jobNumber + 1);
  }

}
