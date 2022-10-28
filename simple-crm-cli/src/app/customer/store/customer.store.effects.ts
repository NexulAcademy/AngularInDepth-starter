import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs';
import { CustomerService } from '../customer.service';
import { searchCustomerAction, searchCustomerCompleteAction } from './customer.store';

// ngrx effects that trigger side effects for specific actions.

@Injectable()
export class CustomerStoreEffects {
  constructor(
    private actions$: Actions,
    private custSvc: CustomerService // <-- this is your service to be called for some actions
  ) { }

  searchCustomers$ = createEffect(() => this.actions$.pipe(
    ofType(searchCustomerAction),
    switchMap(({ criteria }) => {// <-- NEW, use rxjs, accept action payload
      console.dir(criteria);
      return this.custSvc.search(criteria.term).pipe(
        tap(data => console.table(data)),
        map(
          // <-- NEW: create action payload with API response data
          data => searchCustomerCompleteAction({ result: data })
        )
      )
    }),
  ));
}
