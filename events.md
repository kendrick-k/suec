# SUEC Events

This file lists recommended event names for SaaS and software usage analytics.

Use these names directly when they match your product. When your product has a domain-specific object, adapt the object while keeping the same grammar.

## Activation

First setup or first value moment.

```text
account_created
workspace_created
project_created
onboarding_started
onboarding_completed
integration_connected
first_value_completed
```

Domain examples:

```text
textile_pattern_activated
crm_pipeline_created
ai_assistant_connected
```

## Demo

Public or in-app product demos.

```text
demo_entered
demo_guide_started
demo_coach_started
demo_coach_step_viewed
demo_coach_completed
demo_exited
```

## Onboarding

Guided setup flows. Put the flow in `funnel` and the position in `step_id` / `step_index`.

```text
onboarding_started
onboarding_step_viewed
onboarding_step_completed
onboarding_completed
onboarding_skipped
```

## Engagement

Repeated product usage.

```text
project_opened
document_opened
document_edited
document_saved
dashboard_opened
search_performed
tool_used
template_selected
settings_updated
```

Domain examples:

```text
textile_pattern_edited
invoice_line_edited
crm_contact_updated
```

## Output

Created, generated, exported, published, or shared value.

```text
document_exported
report_generated
asset_downloaded
page_published
link_shared
file_uploaded
file_imported
```

Domain examples:

```text
textile_pattern_exported
invoice_exported
campaign_published
```

## Feedback And Handoff

Qualitative signals and requests for human follow-up.

```text
feedback_submitted
survey_submitted
satisfaction_submitted
nps_submitted
support_need_selected
customer_contact_requested
```

## Commercial Intent

Buying signals before revenue.

```text
pricing_viewed
pricing_plan_selected
checkout_started
demo_requested
sales_contact_started
```

## Authentication

Links anonymous activity to a logged-in user. See [properties.md](properties.md#authenticated-user-linking).

```text
user_authenticated
session_authenticated
account_connected
```

## External Metrics

Server-side snapshots from upstream sources. These are the only SUEC events that use dotted namespaces.

```text
youtube.video.metrics_snapshot
youtube.video.view_delta
campaign.external_metric_snapshot
platform.account.metrics_snapshot
```

## Collaboration

Team and multiplayer activity.

```text
invite_sent
member_joined
comment_created
comment_resolved
approval_requested
approval_completed
role_updated
handoff_completed
```

## Friction

Blocked intent, failure, permissions, or limits.

```text
action_blocked
save_blocked
export_failed
import_failed
permission_denied
quota_limit_reached
payment_failed
integration_failed
```

Domain examples:

```text
textile_pattern_save_blocked
textile_pattern_export_failed
crm_import_failed
```

## Revenue

Commercial lifecycle events.

```text
checkout_started
purchase
trial_started
trial_converted
subscription_started
subscription_upgraded
subscription_downgraded
subscription_cancelled
subscription_reactivated
```

## Ecommerce Compatibility

Keep known ecommerce funnel names when tracking commerce:

```text
view_item
add_to_cart
remove_from_cart
begin_checkout
purchase
refund
```

Use SUEC around the software experience itself:

```text
pricing_page_opened
checkout_started
subscription_started
invoice_exported
```
