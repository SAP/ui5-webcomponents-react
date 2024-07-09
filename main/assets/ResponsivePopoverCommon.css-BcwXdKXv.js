import{f as o,s as e}from"./withWebComponent-BbH_5MIb.js";import{s as r}from"./parameters-bundle.css-BFbT_feV.js";o("@ui5/webcomponents-theming","sap_horizon",async()=>e);o("@ui5/webcomponents","sap_horizon",async()=>r);const i={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopoverCommon.css.ts",content:`.input-root-phone{flex:1;position:relative;height:var(--_ui5-v2-0-1_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-0-1_input_background_color);border:var(--_ui5-v2-0-1-input-border);border-radius:var(--_ui5-v2-0-1_input_border_radius);box-sizing:border-box}.input-root-phone [inner-input]{padding:0 .5rem;width:100%;height:100%}.input-root-phone [inner-input]:focus{background-color:var(--sapField_Focus_Background)}.input-root-phone:focus-within:before{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-0-1_input_focus_border_radius);top:var(--_ui5-v2-0-1_input_focus_offset);bottom:var(--_ui5-v2-0-1_input_focus_offset);left:var(--_ui5-v2-0-1_input_focus_offset);right:var(--_ui5-v2-0-1_input_focus_offset)}.input-root-phone [value-state=Negative] .inputIcon[data-ui5-compact-size],.input-root-phone [value-state=Positive] .inputIcon[data-ui5-compact-size],.input-root-phone [value-state=Critical] .inputIcon[data-ui5-compact-size]{padding:.1875rem .5rem}[inner-input]{background:transparent;color:inherit;border:none;font-style:normal;-webkit-appearance:none;-moz-appearance:textfield;line-height:normal;padding:var(--_ui5-v2-0-1_input_inner_padding);box-sizing:border-box;min-width:3rem;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;border-radius:var(--_ui5-v2-0-1_input_border_radius)}[inner-input]::selection,[inner-input]::-moz-selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}[inner-input]::-webkit-input-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}[inner-input]::-moz-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor)}.input-root-phone[value-state]:not([value-state=None]){border-width:var(--_ui5-v2-0-1_input_state_border_width)}.input-root-phone[value-state=Negative] [inner-input],.input-root-phone[value-state=Critical] [inner-input]{font-style:var(--_ui5-v2-0-1_input_error_warning_font_style)}.input-root-phone[value-state=Negative] [inner-input]{font-weight:var(--_ui5-v2-0-1_input_error_font_weight)}.input-root-phone[value-state=Negative]:not([readonly]){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-0-1_input_value_state_error_border_color)}.input-root-phone[value-state=Negative]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-0-1_input_focused_value_state_error_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_error_border_color)}.input-root-phone[value-state=Negative]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-0-1_input_focused_value_state_error_focus_outline_color)}.input-root-phone[value-state=Negative]:not([readonly]):not([disabled]),.input-root-phone[value-state=Critical]:not([readonly]):not([disabled]),.input-root-phone[value-state=Information]:not([readonly]):not([disabled]){border-style:var(--_ui5-v2-0-1_input_error_warning_border_style)}.input-root-phone[value-state=Critical]:not([readonly]){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-0-1_input_value_state_warning_border_color)}.input-root-phone[value-state=Critical]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_border_color)}.input-root-phone[value-state=Critical]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_focus_outline_color)}.input-root-phone[value-state=Positive]:not([readonly]){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-0-1_input_value_state_success_border_color);border-width:var(--_ui5-v2-0-1_input_value_state_success_border_width)}.input-root-phone[value-state=Positive]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-0-1_input_focused_value_state_success_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_success_border_color)}.input-root-phone[value-state=Positive]:not([readonly]):focus-within:before{border-color:var(--_ui5-v2-0-1_input_focused_value_state_success_focus_outline_color)}.input-root-phone[value-state=Information]:not([readonly]){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-0-1_input_value_state_information_border_color);border-width:var(--_ui5-v2-0-1_input_information_border_width)}.input-root-phone[value-state=Information]:not([readonly]) [inner-input]:focus{background-color:var(--_ui5-v2-0-1_input_focused_value_state_information_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_information_border_color)}.ui5-multi-combobox-toggle-button{margin-left:.5rem}.ui5-responsive-popover-header{width:100%;min-height:2.5rem;display:flex;flex-direction:column}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v2-0-1_button_base_min_width))}.ui5-responsive-popover-header .row{box-sizing:border-box;padding:.25rem 1rem;min-height:2.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontHeader5Size)}.ui5-responsive-popover-footer{display:flex;justify-content:flex-end;padding:.25rem 0;width:100%}.ui5-responsive-popover-close-btn{position:absolute;right:1rem}
`};export{i as s};
