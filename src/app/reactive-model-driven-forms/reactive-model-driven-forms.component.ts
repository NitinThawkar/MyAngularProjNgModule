import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-model-driven-forms',
  standalone: false,
  templateUrl: './reactive-model-driven-forms.component.html',
  styleUrl: './reactive-model-driven-forms.component.css'
})
export class ReactiveModelDrivenFormsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      uname: new FormControl('Surender', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      readTerms: new FormControl(false)
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form data:', this.myForm.value);
      this.myForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  accept() {
    // Fix: Use patchValue to update only the readTerms control
    this.myForm.patchValue({
      readTerms: true
    });
  }

  // Helper methods for template validation
  get usernameControl() {
    return this.myForm.get('uname');
  }

  get emailControl() {
    return this.myForm.get('email');
  }
}