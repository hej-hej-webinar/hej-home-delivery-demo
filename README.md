# Hej Home Delivery Demo

Hej Home Delivery is a public-safe TypeScript and pnpm demo service for the webinar **SSDLC in an AI World, Part 2**.

The default branch is intentionally clean. The teachable risks are prepared in separate demo branches and pull requests so presenters can show the policy moment where it belongs: during planning, review, CI, dependency review, CodeQL, or Copilot governance.

## Prepared demos

Use `docs/demo-runbook.md` for the presenter flow. The target PRs are:

1. PII-like fixture data review.
2. Dependency review on a vulnerable direct dependency.
3. pnpm install-script and release-age controls.
4. Dependabot cooldown configuration.
5. CodeQL, Autofix, and prepared remediation.
6. PII review plugin packaging and governance.

## Local validation

```bash
npm exec --yes pnpm@11.5.3 -- install --frozen-lockfile
npm exec --yes pnpm@11.5.3 -- lint
npm exec --yes pnpm@11.5.3 -- test
npm exec --yes pnpm@11.5.3 -- build
```

## API sketch

- `GET /health`

Demo branches add the customer lookup and delivery-preferences import endpoints.

## Safety note

All names, identifiers, addresses, and domains in this repository must remain synthetic. Do not add real Ingka, IKEA, employee, customer, incident, repository, or internal policy data.
