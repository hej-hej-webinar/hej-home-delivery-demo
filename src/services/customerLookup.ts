import { syntheticCustomers } from "../fixtures/customers.synthetic";
import type { CustomerRecord } from "../types";

const customers: CustomerRecord[] = syntheticCustomers;

export function findCustomerById(customerId: string): CustomerRecord | undefined {
  return customers.find((customer) => customer.customerId.toLowerCase() === customerId.toLowerCase());
}

export function findCustomerByEmail(email: string): CustomerRecord | undefined {
  return customers.find((customer) => customer.email.toLowerCase() === email.toLowerCase());
}
