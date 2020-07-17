import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CalculatorService);
  });

  it('should return a number', async () => {
    return service
      .addNumbers(1, 2)
      .subscribe((result) => expect(result).toEqual(3));
  });

  it('should return the average number', () => {
    return service
      .findAverage([1, 2, 3, 4, 5])
      .subscribe((result) => expect(result).toEqual(3));
  });
});
