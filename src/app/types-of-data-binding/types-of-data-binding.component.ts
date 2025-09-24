import { Component } from '@angular/core';

@Component({
  selector: 'app-types-of-data-binding',
  templateUrl: './types-of-data-binding.component.html',
  styleUrl: './types-of-data-binding.component.css',
})
export class TypesOfDataBindingComponent {
  firstName: string = 'Nitin';
  lastName: string = 'saavi';
  message = '';
  defaultValue: string = 'John Dow';
  fullName: string = '';
  twoWayDataBinding: string = 'Two Way Data Binding';

  myImageUrl: string =
    'https://angular.io/assets/images/logos/angular/angular.png';
  MyImageAlt: string = 'Angular Logo';

  onClickMe() {
    this.message = 'Button Clicked';
  }
  passValueToComponent(anyEvent: any) {
    this.message = anyEvent.target.value;
  }

  changeDefaultValue(anyEvent: any) {
    this.defaultValue = anyEvent.target.value;
  }
}
