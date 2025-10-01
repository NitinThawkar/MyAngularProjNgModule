import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-vs-subject',
  standalone: false,
  templateUrl: './observable-vs-subject.component.html',
  styleUrl: './observable-vs-subject.component.css'
})
export class ObservableVsSubjectComponent {
  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';


  // Observable required extra setup observer variable to hold the subscription
  // Subject does not require any extra setup

  getObservableData() {
    let myObservable = new Observable<number>(observer => {
      // observer.next("Please subscribe to WebTechTalk");
      observer.next(Math.floor(Math.random() * 99) + 1);
    });
    myObservable.subscribe(data => {
      this.observableData1 = data.toString();
    });
    myObservable.subscribe(data => {
      this.observableData2 = data.toString();
    });
  }

  getSubjectData() {
    let mySubject = new Subject<number>();
    mySubject.subscribe((data: number) => {
      this.subjectData1 = data.toString();
    });
    mySubject.subscribe((data: number) => {
      this.subjectData2 = data.toString();
    });
    // mySubject.next("Please subscribe to WebTechTalk");
    mySubject.next(Math.floor(Math.random() * 99) + 1);
  }
}