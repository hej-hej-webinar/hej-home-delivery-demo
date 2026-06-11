import type { CustomerRecord } from "../types";

function makeSyntheticCustomer(index: number, loyaltyTier: CustomerRecord["loyaltyTier"]): CustomerRecord {
  const id = String(index).padStart(3, "0");

  return {
    customerId: `SYNTH-CUSTOMER-${id}`,
    fullName: `Synthetic Customer ${id}`,
    email: `customer-${id}@example.invalid`,
    phone: "+00 0000 000000",
    nationalIdentifier: "PERSON-NOT-REAL-0000",
    address: {
      line1: `Synthetic Street ${index}`,
      city: "Example City",
      postcode: "ZZ0 0ZZ"
    },
    loyaltyTier
  };
}

export const syntheticCustomers: CustomerRecord[] = [
  makeSyntheticCustomer(1, "Gold"),
  makeSyntheticCustomer(2, "Silver"),
  makeSyntheticCustomer(3, "Bronze")
];
