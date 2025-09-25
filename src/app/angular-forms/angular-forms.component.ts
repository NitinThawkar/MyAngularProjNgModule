import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-forms',
  standalone: false,
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.css'
})
export class AngularFormsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTemplateDriven() {
    this.router.navigate(['template-driven']);
  }

  goToModelDriven() {
    this.router.navigate(['model-driven']);
  }
}