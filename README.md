# SignalsKit Usage Event Convention (SUEC)

SUEC is an open event naming convention for SaaS and software usage analytics.

It gives product teams a small, readable vocabulary for measuring whether a software platform is alive: what users opened, edited, saved, exported, shared, completed, blocked, failed, or activated.

SUEC is not a replacement for ecommerce conventions such as `add_to_cart`, `begin_checkout`, or `purchase`. It complements them with product-usage events for online tools, dashboards, editors, workflow apps, AI products, CRMs, finance tools, design software, and other SaaS platforms.

## Status

Version: `0.2.0`

This is an early public convention. It is designed to be practical, stable, and easy to implement. Feedback and field examples should refine the vocabulary before a `1.0.0` release.

## Core Rule

Use stable `object_action` names.

```text
document_edited
project_created
integration_connected
report_exported
permission_denied
quota_limit_reached
```

If a vertical prefix adds clarity, use `vertical_object_action`.

```text
textile_pattern_edited
crm_contact_created
invoice_exported
ai_prompt_completed
```

Dynamic values belong in properties, not in event names.

```js
// Good
signalsKit.track('document_edited', {
  object_id: 'doc_123',
  source: 'editor_toolbar'
})

// Avoid
signalsKit.track('document_123_edited_from_toolbar')
```

## Event Categories

SUEC groups product events into operational categories:

- Activation: first setup or first value moment.
- Demo and onboarding: guided demos and setup flows.
- Engagement: repeated product usage.
- Output: exported, published, shared, or generated value.
- Collaboration: team or multiplayer activity.
- Feedback and handoff: satisfaction, NPS, support and contact requests.
- Commercial intent: pricing, plan selection, demo and sales requests.
- Friction: blocked, failed, denied, or limited intent.
- Revenue: checkout, purchase, trial, subscription lifecycle.
- External metrics: server-side snapshots (dotted names such as `platform.account.metrics_snapshot`).

See [events.md](events.md) for canonical event names.

## Properties

Use properties to explain the event:

```js
signalsKit.track('report_exported', {
  object_id: 'report_123',
  export_format: 'pdf',
  source: 'report_toolbar',
  row_count: 1240
})
```

Recommended properties include `object_id`, `object_type`, `source`, `method`, `status`, `reason`, `plan`, `value`, `currency`, and `count`.

Never send PII such as email, name, phone, street address, raw IP, or full free-text form values.

See [properties.md](properties.md), including authenticated user linking, internal/admin visitor markers and external metric snapshots.

## Implementation Prompt

Use [prompts/implementation-prompt.md](prompts/implementation-prompt.md) when asking a developer or coding agent to instrument a product with SUEC.

## JSON Schema

A first JSON Schema is available at [schemas/suec-event.schema.json](schemas/suec-event.schema.json).

## Product Documentation

The readable SignalsKit product reference lives at:

https://signalskit.com/docs/events

## Examples

- [Generic SaaS example](examples/generic-saas.js)
- [TextileWeave product analytics example](examples/textileweave.js)

## License

MIT. Use it, adapt it, and publish implementations freely.
