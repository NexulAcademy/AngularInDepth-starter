import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState, customerStateAdapter, customerFeatureKey } from "./customer.store.model";


const {
  selectAll,
} = customerStateAdapter.getSelectors();

const getCustomerFeature = createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectCustomers = createSelector(
  getCustomerFeature,
  selectAll
);

