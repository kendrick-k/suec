// TextileWeave product analytics with SUEC-style vertical prefixes.

window.signalsKit?.track?.('textile_designer_opened', {
  source: 'direct_navigation',
  weave_structure: 'plain',
  color_count: 5,
  threads_per_centimeter: 4,
  surface_repeat_enabled: false
})

window.signalsKit?.track?.('textile_pattern_edited', {
  edit_type: 'palette_applied',
  palette_id: 'natural-linen',
  palette_name: 'Natural Linen',
  source: 'studio',
  weave_structure: 'plain',
  color_count: 5,
  surface_repeat_enabled: true
})

window.signalsKit?.track?.('textile_pattern_activated', {
  activation_source: 'first_export',
  seconds_since_open: 127,
  had_meaningful_edit: true,
  weave_structure: 'plain'
})

window.signalsKit?.track?.('textile_pattern_exported', {
  export_format: 'png',
  scale_factor: 2,
  weave_structure: 'plain',
  surface_repeat_enabled: true
})

window.signalsKit?.track?.('textile_pattern_export_failed', {
  export_format: 'png',
  reason: 'canvas_not_ready'
})
