import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-interceptor-test',
  standalone: false,
  templateUrl: './interceptor-test.component.html',
  styleUrl: './interceptor-test.component.css'
})
export class InterceptorTestComponent{
  constructor(private http: HttpClient) {}

  getUser() {
    this.http.get('http://something.com/api/user').subscribe((res) => {
      console.log(res);
    });
  }

  getProduct() {
    this.http.get('http://something.com/api/product').subscribe((res) => {
      console.log(res);
    });
  }

  getContact() {
    this.http.get('http://something.com/api/contact').subscribe((res) => {
      console.log(res);
    });
  }
}