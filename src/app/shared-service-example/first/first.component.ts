import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  firstNumber: number = 0;
  secondNumber: number = 0
  result: number = 0;

  constructor(private sharedService: SharedServiceService) { }
  
  calculate() {  
   // let sharedService = new SharedServiceService();

    this.result = this.sharedService.calculate(this.firstNumber, this.secondNumber);

    this.sharedService.firstPagevalue = this.result;

  }

}
