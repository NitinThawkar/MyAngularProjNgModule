import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  firstPagevalue:number = 0;
  secondPagevalue:number = 0;
  constructor() { }

  calculate (a: number, b: number): number {
    return a + b;
  }
}
