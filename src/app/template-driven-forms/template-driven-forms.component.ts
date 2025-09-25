import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: false,
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('myForm', {static: false}) myForm!: NgForm;
  
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('Form submitted:', form.value);
    form.reset();
  }
}