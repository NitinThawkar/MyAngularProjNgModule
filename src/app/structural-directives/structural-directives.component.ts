import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  showElement: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  selectedOption: string = 'option1';
  isLoggedIn: boolean = true;
  showContainer: boolean = true;
  itemCount: number = this.items.length;

  toggleContainer() {
    this.showContainer = !this.showContainer;
  }

  toggleElement() {
    this.showElement = !this.showElement;
  }
  
  users: { name: string; age: number }[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];

  addItem() {
    const newItemNumber = this.items.length + 1;
    this.items.push(`Item ${newItemNumber}`);
  }
  removeItem() {
    this.items.pop();
  }
  trackByIndex(index: number, item: string): number {
    return index;
  }
  trackByName(index: number, user: { name: string; age: number }): string {
    return user.name;
  }

  getAgeCategory(age: number): string {
    return age < 30 ? 'Young' : 'Experienced';
  }

  getUserAge(user: { name: string; age: number }): number {
    return user.age;
  }
}
