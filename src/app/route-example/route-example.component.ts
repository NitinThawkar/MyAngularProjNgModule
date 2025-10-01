import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-example',
  standalone: false,
  templateUrl: './route-example.component.html',
  styleUrl: './route-example.component.css'
})
export class RouteExampleComponent {
  constructor(private router: Router) {}
  
  navigateToDataBinding() {
    setTimeout(() => {
      console.log("navigating to data binding");
      this.router.navigate(['/databinding']);
    }, 200);
  }
}