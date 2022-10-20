import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerId: number;
  customer: Customer | undefined;
  detailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private sb: MatSnackBar,
  ) {
    this.detailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      preferredContactMethod: ['email']
    });
    this.customerId = +this.route.snapshot.params['id'];
    this.custSvc.get(this.customerId).subscribe({
      next: c => {
        if (c) {
          this.customer = c;
          this.detailForm.patchValue(c);
        }
      },
      error: () => {}
    });
  }

  ngOnInit(): void {
  }

  save() {
    if (!this.detailForm.valid) {
      this.detailForm.markAllAsTouched();
      return;
    }

    this.custSvc.update({
      ...this.customer,
      ...this.detailForm.value,
    }).subscribe({
      next: x => {
        this.sb.open('customer saved');
      }
    });
  }

}
