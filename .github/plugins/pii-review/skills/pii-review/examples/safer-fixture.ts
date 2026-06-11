export function makeSyntheticCustomer(seed: string) {
  return {
    customerId: `SYNTH-${seed}`,
    fullName: `Synthetic Customer ${seed}`,
    email: `${seed}@example.invalid`,
    nationalIdentifier: "PERSON-NOT-REAL-0000",
    address: {
      line1: "Synthetic Street 1",
      city: "Example City",
      postcode: "ZZ0 0ZZ"
    }
  };
}
