# SUEC Properties

Event names should remain stable. Properties describe what changed.

## Recommended Properties

| Property | Type | Use |
| --- | --- | --- |
| `object_id` | string | Stable non-PII ID for the object acted on. |
| `object_type` | string | Object family when one event covers multiple types. |
| `source` | string | Where the action started: toolbar, modal, shortcut, api, import. |
| `method` | string | How the action happened: email, oauth, csv, drag, click. |
| `status` | string | State such as draft, active, completed, failed, blocked. |
| `reason` | string | Machine-readable reason for blocked or failed actions. |
| `plan` | string | Current plan tier when plan explains behavior. |
| `value` | number | Numeric value when the event has business weight. |
| `currency` | string | ISO currency code for money events. |
| `count` | number | Quantity such as selected items, rows, invited users. |
| `duration_ms` | number | Duration of an operation when useful. |
| `error_code` | string | Stable error code for failed actions. |
| `export_format` | string | Output format such as pdf, csv, png. |
| `import_format` | string | Input format such as csv, json, xlsx. |

## Example

```js
signalsKit.track('document_exported', {
  object_id: 'doc_123',
  object_type: 'proposal',
  source: 'editor_toolbar',
  export_format: 'pdf',
  plan: 'pro'
})
```

## Friction Example

```js
signalsKit.track('export_failed', {
  object_id: 'report_123',
  export_format: 'pdf',
  reason: 'render_timeout',
  error_code: 'EXPORT_TIMEOUT'
})
```

## Privacy Guardrails

Do not send:

- Email addresses
- Names
- Phone numbers
- Street addresses
- Raw IP addresses
- Payment card data
- Access tokens or secrets
- Full free-text form values
- Sensitive document contents

Prefer stable internal IDs and small machine-readable values.

## Property Naming

Use lowercase snake_case.

```text
object_id
export_format
error_code
duration_ms
```

Avoid nested data unless your analytics backend explicitly supports it well. Flat properties are easier to filter, aggregate, and inspect.
