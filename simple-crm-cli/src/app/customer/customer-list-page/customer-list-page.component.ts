import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import {MatDialog} from '@angular/material/dialog';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, Observable, shareReplay, startWith, switchMap, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit, OnChanges, OnDestroy {

  customers$: Observable<Customer[]>;
  displayColumns = ['type', 'name', 'phoneNumber', 'emailAddress', 'status', 'actions'];
  filterInput = new FormControl('');
  reload$ = new BehaviorSubject<number>(0);
  onDestroy$ = new BehaviorSubject<boolean>(false);

  constructor(
    private custSvc: CustomerService,
    public dialog: MatDialog,
    private router: Router,
  ) {
    const valueChanges = this.filterInput.valueChanges.pipe(startWith(''));
    this.customers$ = combineLatest([valueChanges, this.reload$]).pipe(
      debounceTime(700),
      switchMap(([term, _]) => this.custSvc.search(term || '')),
      shareReplay(),
    );
    this.customers$.pipe(takeUntil(this.onDestroy$)).subscribe({
      next: () => {}
    });
    this.reload$.next(this.reload$.value + 1);
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  search() {
    this.reload$.next(this.reload$.value + 1);
  }

  viewDetail(cust: Customer) {
    this.router.navigate(['/customer', cust.id]);
  }

  addCustomer() {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '250px',
      data: undefined,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.animal = result;
    });
  }
  updateCustomer(cust: Customer) {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '250px',
      data: cust,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.animal = result;
    });
  }

}
