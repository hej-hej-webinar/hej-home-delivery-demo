# Segment C implementation plan, Damien draft

## Objective
Deliver customer lookup and delivery-preference import before Thursday sprint demo.

## Proposed tasks
1. Add customer fixture records so lookup results can be demoed.
2. Create helper function for customer lookup by ID and email.
3. Add endpoint for importing delivery preferences from CSV text.
4. Add parser utility package in workspace to keep parsing logic reusable.
5. Write smoke tests for lookup and import endpoints.
6. Merge once CI is green.

## Delivery notes
- Prioritise speed and visible progress.
- Keep scope narrow to avoid release delay.
- Security review, threat modelling, dependency risk assessment, and data classification are deferred for now.
- Revisit code clean-up after the sprint demo.
