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
| `funnel` | string | Flow the event belongs to (onboarding, demo, checkout). |
| `step_id` | string | Stable step identifier inside a funnel. |
| `step_index` | number | 1-based step position inside a funnel. |
| `surface` | string | Screen or area where the event happened. |
| `demo_id` | string | Stable demo identifier. |
| `satisfaction_score` | number | Score from a satisfaction or NPS prompt. |
| `contact_requested` | boolean | The user asked to be contacted. |
| `campaign_id` | string | Stable campaign identifier. |
| `snapshot_at` | string | ISO 8601 time of an external metric snapshot. |
| `auth_provider` | string | Auth provider family (supabase, auth0, custom). |
| `auth_method` | string | Login method (magic_link, password, oauth). |
| `account_hash` | string | Pseudonymous account hash. |
| `workspace_hash` | string | Pseudonymous workspace hash. |
| `consent_scope` | string | Consent scope that allowed the event. |
| `cmp_status` | string | Consent status (accepted, refused, pending). |

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

## Authenticated User Linking

To link a logged-in user to product analytics, and only when consent allows analytics or identity measurement:

- Emit `user_authenticated` (or `session_authenticated` when restoring a session) at login, signup, OAuth or magic-link callback.
- Send a stable pseudonymous identifier as the top-level `user_id` (for example `app_user_<hash>`), never inside `event_properties`.
- Keep the same `session_id` across the login so pre-login and post-login activity read as one journey.
- Keep sending the same `user_id` on later events while the user stays authenticated and consent is valid.
- Use `account_hash` / `workspace_hash` for grouping.
- Never use email, name, phone, raw database or auth-provider ID, Stripe customer ID, or any externally joinable identifier. Hash with HMAC-SHA-256 or SHA-256 and a source-specific salt before it leaves your system.
- On logout or consent revocation, clear the authenticated ID.

```json
{
  "event_name": "user_authenticated",
  "user_id": "app_user_7f3a9c1d2b88e410",
  "session_id": "widget_1720000000000_abcd12345",
  "event_properties": {
    "auth_provider": "supabase",
    "auth_method": "magic_link",
    "surface": "auth_callback",
    "consent_scope": "analytics",
    "cmp_status": "accepted",
    "account_hash": "acct_91e2d0c5"
  }
}
```

## Internal And Admin Visitor Markers

Do not create an "admin visited" event. Keep the real event name and add the marker under `event_properties._signalskit` (the only allowed nested object):

```json
{
  "event_name": "page_view",
  "event_properties": {
    "_signalskit": {
      "admin_visitor": true,
      "admin_context": "qa",
      "admin_marker_source": "query_flag"
    }
  }
}
```

`admin_context`: `portfolio_admin`, `project_owner`, `support`, `qa`.
`admin_marker_source`: `signalskit_admin_token`, `query_flag`, `cookie`, `local_storage`, `manual_review`.

Marked events must be stored as internal traffic and excluded from public metrics, goals, conversion rates and recommendations. Never put an admin email, user ID or token in the marker.

## External Metrics Properties

Keep OAuth credentials, refresh tokens and raw snapshots in the source product. Send clean server-side events with stable IDs.

`youtube_video_id`, `channel_id`, `campaign_id`, `utm_source`, `utm_medium`, `utm_campaign`, `page_path`, `view_count`, `view_delta`, `snapshot_at`.

## Platform Account Metrics

`platform.account.metrics_snapshot` carries aggregated account lifecycle figures, never raw user rows. Use `idempotency_key` = `platform-account-metrics:<platform_slug>:<snapshot_date>`.

Properties: `source_snapshot_at`, `snapshot_date`, `platform_slug`, `accounts_total`, `accounts_created_1d`, `accounts_created_7d`, `active_accounts_1d`, `active_accounts_7d`, `users_total`, `trial_accounts`, `trial_started_1d`, `trial_expiring_7d`, `trial_age_buckets`, `paid_accounts`, `paid_accounts_new_1d`, `paid_accounts_new_7d`, `cancelled_accounts_7d`, `mrr`, `currency`, `plan_breakdown`, `sync_status`.

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

Avoid nested data (except `_signalskit` and aggregate breakdowns such as `plan_breakdown`). Flat properties are easier to filter, aggregate, and inspect.
