import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-second',
  standalone: false,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  
  firstNumber: number = 0;
  secondNumber: number = 0
  result: number = 0;
  
  constructor(private sharedService: SharedServiceService) { }

  previousPageValue: number = 0;
  calculate() {  
    this.result = this.sharedService.calculate(this.firstNumber, this.secondNumber);
    this.previousPageValue = this.sharedService.firstPagevalue;
  }

}
