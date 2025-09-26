import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http-web-communication',
  standalone: false,
  templateUrl: './http-web-communication.component.html',
  styleUrl: './http-web-communication.component.css'
})
export class HttpWebCommunicationComponent implements OnInit {

  users: any;
  url = "https://api.github.com/users";
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.http.get(this.url).subscribe(res => {
      console.log('success');
      console.log(res);
      setTimeout(() => {
        this.isLoading = false;
        this.users = res;
      }, 2000);
    }, error => {
      this.isLoading = true;
      console.log('error');
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

  goToGithub(url:any) {
    window.open(url, '_blank');
  }
}