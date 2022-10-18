import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from '../customer.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit, OnChanges {

  customers: Customer[] = [];
  dataSource!: MatTableDataSource<Customer>; // The ! tells Angular you know it may be used before it is set.  Try it without to see the error
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status'];

  constructor() {
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
    ]
    this.dataSource = new MatTableDataSource(this.customers);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
