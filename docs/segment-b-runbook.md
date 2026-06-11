# Segment B runbook, PII and sensitive data in code

## Goal
Show how sensitive data can enter code paths and fixtures, and how to replace risky patterns with safer defaults.

## Presenter flow
1. Open `src/fixtures/customers.fixture.json` and point out PII-like fields.
2. Explain why fixture realism helps demos but raises handling and sharing risk.
3. Discuss detector coverage limits, especially custom pattern caveats and false confidence.
4. Show replacement strategy, synthetic fixtures, tokenised identifiers, controlled seed generators.
5. Keep the baseline unchanged, this is a teaching example, not a remediation step in this segment.

## Talking points
- Sensitive data in repos spreads quickly through forks, logs, and screenshots.
- Built-in detectors are useful, but custom patterns require tuning and review discipline.
- Replacement should preserve test intent while removing identity risk.
- Define ownership for fixture hygiene so this does not rely on heroics.
