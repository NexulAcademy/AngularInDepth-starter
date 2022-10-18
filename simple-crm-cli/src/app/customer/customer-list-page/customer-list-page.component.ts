import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit {

  customers: Customer[] = [];

  constructor() {
    this.customers = [
      {
        id: 1,
        firstName: 'Mike',
        lastName: 'Lang',
        emailAddress: '',
        lastContactDate: '',
        optInNewsletter: true,
        phoneNumber: '',
        status: 'none',
        preferredContactMethod: 'email',
        type: 'none'
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Jones',
        emailAddress: '',
        lastContactDate: '',
        optInNewsletter: true,
        phoneNumber: '',
        status: 'none',
        preferredContactMethod: 'email',
        type: 'none'
      }
    ]
  }

  ngOnInit(): void {
  }

}
