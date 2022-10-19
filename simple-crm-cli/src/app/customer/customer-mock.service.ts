import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerMockService extends CustomerService {
  customers: Customer[] = [];

  constructor(http: HttpClient) {
    super(http);
    console.warn('Warning: You are using the CustomerMockService, not intended for production use.');
    const localCustomers = localStorage.getItem('customers');
    if (localCustomers) {
      this.customers = JSON.parse(localCustomers);
    } else {
      this.customers = [
        {
          id: 1,
          firstName: 'Mike',
          lastName: 'Lang',
          emailAddress: 'michael.lang@nexulacademy.com',
          lastContactDate: '',
          optInNewsletter: true,
          phoneNumber: '573-340-9293',
          status: 'purchased',
          preferredContactMethod: 'email',
          type: 'personal'
        },
        {
          id: 2,
          firstName: 'Bob',
          lastName: 'Jones',
          emailAddress: 'bjones@gmail.com',
          lastContactDate: '',
          optInNewsletter: true,
          phoneNumber: '314-555-1234',
          status: 'prospect',
          preferredContactMethod: 'phone',
          type: 'business'
        }
      ];
    }
  }

  override search(term: string): Observable<Customer[]> {
    const items = this.customers.filter(x =>
      (x.firstName + ' ' + x.lastName).indexOf(term) >= 0
      || x.phoneNumber.indexOf(term) >= 0
      || x.emailAddress.indexOf(term) >= 0);
    // convert the array into an observable of the array to meet the function signature
    return of(items);
  }
  override insert(customer: Customer): Observable<Customer> {
    customer.id = Math.max(...this.customers.map(x => x.id));
    this.customers = [...this.customers, customer];
    localStorage.setItem('customers', JSON.stringify(this.customers));
    // convert a result instance into an observable of the array to meet the function signature
    return of(customer);
  }
  override update(customer: Customer): Observable<Customer> {
    const match = this.customers.find(x => x.id === customer.id);
    if (match) {
      // replace the matched item, keep other items unchanged
      this.customers = this.customers
        .map(x => x.id === customer.id ? customer : x);
    } else { // not in the list yet
      this.customers = [...this.customers, customer];
    }
    localStorage.setItem('customers', JSON.stringify(this.customers));
    // convert a result instance into an observable of the array to meet the function signature
    return of(customer);
  }
}
