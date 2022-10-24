import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { CustomerMockService } from './customer-mock.service';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let injector: TestBed;
  let service: CustomerMockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerMockService]
    });
    injector = getTestBed();
    service = TestBed.inject(CustomerMockService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures there are no outstanding requests between tests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search should work', () => {
    expect(service).toBeTruthy();
  });
});
