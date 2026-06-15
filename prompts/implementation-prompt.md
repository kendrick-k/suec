# SUEC Implementation Prompt

Use this prompt with a developer or coding agent.

```text
Instrument product analytics with the SignalsKit Usage Event Convention (SUEC).

Goal:
- Send readable SaaS/software usage events that show whether the platform is alive and what users actually do.

Naming:
- Use lowercase snake_case.
- Prefer object_action names: document_edited, project_created, integration_connected, report_exported.
- Use vertical prefixes when needed: textile_pattern_edited, crm_contact_created, invoice_exported.
- Keep IDs, titles, paths, campaign names, and user values out of event names. Put them in properties.

Track these categories:
- Activation: account_created, workspace_created, project_created, integration_connected, onboarding_completed.
- Engagement: project_opened, document_opened, document_edited, document_saved, search_performed, tool_used.
- Output: document_exported, report_generated, asset_downloaded, page_published, link_shared.
- Collaboration: invite_sent, member_joined, comment_created, approval_requested, role_updated.
- Friction: action_blocked, export_failed, permission_denied, quota_limit_reached, payment_failed.
- Revenue: checkout_started, purchase, trial_started, subscription_started, subscription_upgraded, subscription_cancelled.

Properties:
- Include safe operational fields such as object_id, object_type, source, method, status, reason, plan, value, currency, count.
- Do not send email, name, phone, street address, raw IP, full free-text form values, or other PII.

Implementation:
- Use window.signalsKit.track(eventName, properties) after the SignalsKit widget has loaded and consent rules are satisfied.
- Keep page_view automatic unless there is a clear reason to track page views manually.
- Verify in SignalsKit that non-page product events appear in the project dashboard and event readout.
```
