import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'calculator-client';

  sum$: Object;

  constructor(private calculatorService: CalculatorService) {}

  addNumbers(num1: number, num2: number) {
    this.calculatorService
      .addNumbers(num1, num2)
      .subscribe((res) => (this.sum$ = res));
  }
}
