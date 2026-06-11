# Demo-only runbook

Use this runbook for the live demo portions only. Slide narration, account context, and non-demo policy material are intentionally excluded.

## Demo 1: PII review agent and Copilot code review

Open PR 1, **Add delivery-preferences import and customer lookup helper**.

1. Show the fixture diff and point out that the values are labelled as tests but look like people, addresses, phone numbers, and delivery preferences.
2. Run or show the `pii-review` agent guidance from `.github/agents/pii-review.agent.md`.
3. Emphasize the agent's reasoning: it does not prove the values are real; it explains why realistic static data is risky in a public or broadly shared repository.
4. Show the safer pattern in the prepared fix branch: generated records, reserved domains, and impossible identifiers.

Fallback: use the prepared PR comment titled `PII review dry-run result`.

## Demo 2: Dependency review gate

Open PR 2, **Add customer import dependency**.

1. Show the `package.json` and `pnpm-lock.yaml` diff that adds a deliberately vulnerable direct dependency.
2. Open the `dependency-review` check and show the advisory, severity, and fixed version guidance.
3. Position this as the PR conversation layer. JFrog or another artifact resolver may block earlier; dependency review makes the risk visible during code review.

Fallback: show the workflow log or the dependency-review PR comment.

## Demo 3: pnpm install-script and cooldown controls

Open PR 3, **Add pnpm supply-chain controls**.

1. Show the safe simulated tarball dependency under `demo-packages/ci-owned-parser/`.
2. In the risk branch, install without strict build controls and show that the package `postinstall` writes `ci-owned.txt`.
3. Switch to the controls PR and show `pnpm-workspace.yaml` with `minimumReleaseAge: 2880`, `minimumReleaseAgeStrict: true`, `strictDepBuilds: true`, and an explicit `allowBuilds` list.
4. Show the blocked install output: pnpm refuses the unapproved build script until the team reviews it.

Fallback: use the saved output in the PR body if the live install is slow.

## Demo 4: Dependabot cooldown

Open PR 4, **Configure Dependabot cooldown**.

1. Show `.github/dependabot.yml`.
2. Explain the two-day cooldown as automated PR creation policy.
3. Contrast it with pnpm controls: Dependabot controls when bot PRs open; pnpm controls what local and CI installs are allowed to execute or resolve.

Fallback: the file diff is sufficient.

## Demo 5: CodeQL, Autofix, and Security Campaigns

Open PR 5, **Add customer lookup helper**.

1. Show the `child_process.exec` implementation in `src/helpers/importPreview.ts`.
2. Open the CodeQL alert for command injection.
3. Show Copilot Autofix if available. If not, switch to the prepared fix branch and show the safe implementation that avoids shell execution.
4. Use the Security Campaign view as the scaling story: focus a small set of alerts, assign ownership, and track remediation.

Fallback: show the prepared fix branch and the CodeQL workflow output.

## Demo 6: Plan mode, adversarial challenge, and governed plugin pattern

Use `docs/segment-c-implementation-plan.md` and PR 6, **Package PII review plugin**.

1. Show the initial plan and ask Copilot to identify missing privacy, dependency, CodeQL, malformed-input, and CI assumptions.
2. Show the adversarial review result and the revised plan.
3. Open the plugin packaging diff under `.github/plugins/pii-review/`.
4. Explain the governance point: agents, skills, and plugin instructions are executable process and need ownership, versioning, review, and managed distribution.

Fallback: use the prepared prompts in `docs/plan-adversarial-prompts.md` and the plugin PR diff.
