import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  data: number[] = [];
  count = 0;
  myObservable: any;

  constructor() {}

  //next ,complete,error these are called when we emit values from observable
  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        this.data.push(this.count);
        if (this.count < 5) {
          observer.next(this.data);
        } else {
          // observer.complete();
          observer.error("DB connection is timed out");
        }
      }, 1000);
    });
  }

  //to get data from observable we need to subscribe to it
  getData() {
    this.myObservable.subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        console.log('Completed');
      }
    );
    console.log(this.data);
  }
}