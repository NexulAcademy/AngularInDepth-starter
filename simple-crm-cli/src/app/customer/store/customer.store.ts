import { Action, createAction, createReducer, props, on } from "@ngrx/store";
import { Customer } from "../customer.model";
import { customerSearchCriteria, CustomerState, customerStateAdapter, initialCustomerState } from "./customer.store.model";

export const searchCustomerAction = createAction(
  '[Customer] search customers',
  props<{ criteria: customerSearchCriteria }>()
);

export const searchCustomerCompleteAction = createAction(
  '[Customer] search complete',
  props<{result: Customer[]}>()
);

const rawCustomerReducer = createReducer(
  initialCustomerState,
  on(searchCustomerAction, (state, action) => ({
    ...state,
    criteria: action.criteria,
    searchStatus: 'searching'
  })),
  on(searchCustomerCompleteAction, (state, action) => ({
    ...customerStateAdapter.setAll(action.result, state),
    searchStatus: 'done',
  }))
)

export function customerReducer(state: CustomerState, action: Action) {
  return rawCustomerReducer(state, action);
};
