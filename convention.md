# SUEC Convention

SUEC stands for SignalsKit Usage Event Convention.

It is a practical convention for naming product analytics events in software and SaaS products.

## Goals

SUEC should make an analytics dashboard answer these questions quickly:

- Did users start using the product?
- Which workflows are active?
- Which objects are being created, edited, saved, exported, shared, or completed?
- Where are users blocked?
- Which actions fail?
- Which events represent activation, output, collaboration, or revenue?

## Non-Goals

SUEC does not attempt to replace:

- Ecommerce funnel events such as `view_item`, `add_to_cart`, `begin_checkout`, `purchase`.
- Technical observability telemetry.
- Backend logs.
- Session replay.
- Fine-grained UI autocapture.

## Naming Grammar

Use lowercase snake_case.

```text
object_action
```

Examples:

```text
project_created
project_opened
document_edited
document_saved
document_exported
integration_connected
workflow_completed
permission_denied
```

Use a vertical prefix only when it improves clarity:

```text
textile_pattern_edited
crm_contact_created
invoice_exported
ai_prompt_completed
```

## Objects

Objects are the stable nouns of the product:

- `account`
- `workspace`
- `project`
- `document`
- `report`
- `dashboard`
- `workflow`
- `integration`
- `invite`
- `member`
- `comment`
- `asset`
- `template`
- `pattern`
- `invoice`
- `contact`

Prefer product language that a user or operator would understand.

## Actions

Use past-tense actions for completed user activity:

- `created`
- `opened`
- `edited`
- `saved`
- `exported`
- `published`
- `shared`
- `generated`
- `completed`
- `connected`
- `disconnected`
- `invited`
- `joined`
- `updated`
- `deleted`

Use explicit friction actions:

- `blocked`
- `failed`
- `denied`
- `limit_reached`

## Good Names

```text
workspace_created
project_opened
document_edited
report_generated
report_exported
link_shared
invite_sent
member_joined
integration_connected
permission_denied
quota_limit_reached
export_failed
```

## Names to Avoid

Avoid dynamic values:

```text
document_123_edited
pdf_report_2026_exported
john_invited_mary
```

Avoid raw UI implementation details unless the UI action is the product behavior:

```text
button_clicked
modal_opened
hover_started
mousemove
input_changed
```

Avoid event names that combine too many facts:

```text
project_created_from_header_on_free_plan
document_exported_as_pdf_after_upgrade_prompt
```

Use properties for these details instead.

## Properties

Properties should explain the event without changing the event name:

```js
signalsKit.track('document_exported', {
  object_id: 'doc_123',
  export_format: 'pdf',
  source: 'editor_toolbar',
  plan: 'pro'
})
```

Recommended property reference: [properties.md](properties.md).

## Privacy Rule

Do not send:

- Email
- Name
- Phone number
- Street address
- Raw IP address
- Full free-text form values
- Access tokens
- Secrets
- Payment card data

Use stable non-PII IDs where object-level analysis is necessary.

## Versioning

SUEC uses semantic versioning:

- Patch: wording, examples, and schema clarifications.
- Minor: new recommended events or properties.
- Major: breaking naming changes.
