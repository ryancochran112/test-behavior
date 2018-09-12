import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Flat Map';

  constructor (private testService: TestService) {
    this.testService.doWork1(0)
      .flatMap(data1 => {
        this.logJobNumber(data1);
        return this.testService.doWork2(data1);
    }).flatMap(data2 => {
        let counter = 0;
        while (counter < data2) {
          console.log(' Loop counter is ' + counter.toString());
          this.testService.doWork3(counter)
            .subscribe(data => counter = data);
        }
        this.logJobNumber(data2);
        return this.testService.doWork4(data2);
    }).flatMap(data3 => {
        this.logJobNumber(data3);
        return this.testService.doWork5(data3);
    })
    .subscribe(data4 => {
      this.logJobNumber(data4);
    });
  }

  private logJobNumber (jobNumber: number) {
    console.log('Job ' +  jobNumber.toString() + ' done.');
  }

}
