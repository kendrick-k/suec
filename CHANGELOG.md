# Changelog

## 0.2.0

- Added Demo, Onboarding, Feedback And Handoff, Commercial Intent, Authentication and External Metrics event groups.
- Added dotted namespaces for external/server metric events (`youtube.video.*`, `campaign.external_metric_snapshot`, `platform.account.metrics_snapshot`).
- Documented authenticated user linking (top-level pseudonymous `user_id`), internal/admin visitor markers (`_signalskit`), external metrics and platform account metrics properties.
- Extended recommended properties (`funnel`, `step_id`, `step_index`, `surface`, `demo_id`, `satisfaction_score`, auth and consent fields).
- JSON Schema: added `user_id`, `session_id`, `idempotency_key`, dotted event names and the `_signalskit` object.

## 0.1.0

- Initial public draft of the SignalsKit Usage Event Convention.
- Added naming convention, canonical SaaS event categories, property guidance, implementation prompt, examples, and JSON Schema.
