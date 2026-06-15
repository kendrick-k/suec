// Generic SaaS product analytics with SUEC.

window.signalsKit?.track?.('workspace_created', {
  object_id: 'wrk_123',
  source: 'onboarding',
  plan: 'free'
})

window.signalsKit?.track?.('project_opened', {
  object_id: 'prj_456',
  source: 'project_list'
})

window.signalsKit?.track?.('document_edited', {
  object_id: 'doc_789',
  object_type: 'proposal',
  source: 'editor_toolbar',
  method: 'click'
})

window.signalsKit?.track?.('report_exported', {
  object_id: 'rpt_321',
  export_format: 'pdf',
  source: 'report_toolbar',
  row_count: 1240
})

window.signalsKit?.track?.('export_failed', {
  object_id: 'rpt_321',
  export_format: 'pdf',
  reason: 'render_timeout',
  error_code: 'EXPORT_TIMEOUT'
})

window.signalsKit?.track?.('invite_sent', {
  object_id: 'wrk_123',
  object_type: 'workspace',
  role: 'editor',
  count: 1
})
