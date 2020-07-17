import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private http: HttpClient) {}

  addNumbers(num1: number, num2: number) {
    const ADD_NUMBERS_URL = `http://localhost:3000/api/v1/add/${num1}/${num2}`;
    return this.http.get(ADD_NUMBERS_URL);
  }
}
