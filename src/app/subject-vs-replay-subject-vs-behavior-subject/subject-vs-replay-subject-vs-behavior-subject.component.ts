import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-replay-subject-vs-behavior-subject',
  standalone: false,
  templateUrl: './subject-vs-replay-subject-vs-behavior-subject.component.html',
  styleUrl: './subject-vs-replay-subject-vs-behavior-subject.component.css',
})
export class SubjectVsReplaySubjectVsBehaviorSubjectComponent {
  myData: number[] = [];

  //-------------------------------------------------------
  subject = new Subject<number>();

  //-------------------------------------------------------
  //subject = new ReplaySubject<number>();
  //subject = new ReplaySubject<number>(3);
  //-------------------------------------------------------
  //subject = new BehaviorSubject<number>();
  //subject = new BehaviorSubject<number>(343432);

  emitData() {
    // this.subject.next(1);
    // console.log(1);
    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 3000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 6000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 9000);
    setTimeout(() => {
      this.subject.next(5);
      console.log(5);
    }, 12000);
  }

  getData() {
    console.log('Subscribed');
    this.subject.subscribe((data: number) => {
      this.myData.push(data);
      console.log('Received data:', data);
    });
  }
}
