# Segment C runbook, supply chain and code security full flow

## Goal
Walk through an end-to-end security flow covering dependency review, package policy, code scanning, and action hygiene.

## Presenter flow
1. Start with dependency review of `ci-owned-parser` and its `postinstall` behaviour.
2. Open `pnpm-workspace.yaml` and explain cooldown policy, strict age, and allowed build tooling.
3. Explain install script risk in CI and why strict dependency build controls matter.
4. Open `.github/dependabot.yml` and discuss Dependabot cooldown alignment with package age policy.
5. Show code security flow, CodeQL findings, Autofix options, and Campaigns for scaled remediation.
6. Signpost GitHub Actions hygiene, pinned actions, least privilege permissions, and trusted workflow boundaries.

## Talking points
- Dependency updates are code execution events, not admin chores.
- Cooldown and strict build approvals reduce surprise behaviour at install time.
- Dependabot policy should reinforce, not bypass, release age controls.
- CodeQL, Autofix, and Campaigns help teams move from alert noise to managed remediation.
- Actions hygiene closes the loop by protecting the automation layer itself.
