import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { CustomerService } from './customer.service';
import { CustomerMockService } from './customer-mock.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    CustomerListPageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: CustomerService,
      useClass: environment.production ? CustomerService : CustomerMockService
    }
  ]
})
export class CustomerModule { }
