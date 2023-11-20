import{_ as E}from"./iframe-xY66R87u.js";import{r as T,U as I}from"./UI5Element-OBgzz0fv.js";import{b as _,l as s,d as v,s as A,a as V,p as l,c as C,f as $,w as B}from"./withWebComponent-6ZcDnwha.js";import{V as u}from"./ValueState-zUcANXoY.js";import{s as k}from"./slot-HSrR9XJ-.js";import{c as F,a as P,e as f}from"./Icon-2m0rU9av.js";import{R as b}from"./ResizeHandler-jV9qqcaG.js";import{I as g}from"./Integer-kog98579.js";import{g as z,a as R}from"./AriaLabelHelper-RbKlVwzD.js";import{g as M}from"./decline-P9scilyE.js";import{d as N}from"./i18nBundle-Crssojm_.js";import{g as D}from"./VersionInfo-hBCHoyLi.js";import{i as W}from"./Icons-zRUxeAje.js";import{c as L}from"./Popover-SxOPU5wi.js";import"./information-eS-oBj3B.js";import"./alert-SMfrQE5J.js";import{o as x}from"./class-map-dxoND1Lf.js";import{s as y}from"./style-map-oXcF1--7.js";import{W as q,X as O,c as H,b as U,V as j,a as Y,Y as X,Z as G,_ as Z,$ as J}from"./i18n-defaults-RBzcmDt8.js";import{s as K}from"./ValueStateMessage.css-eVPOpCbJ.js";import{s as Q}from"./BrowserScrollbar.css-gfEIeu7r.js";import{V as ee}from"./ValueState-I_-hGNIb.js";function te(r,e,t){return _`<div class="${x(this.classes.root)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-textarea-wrapper">${this.growing?ae.call(this,r,e,t):void 0}<textarea id="${s(this._id)}-inner" class="ui5-textarea-inner" placeholder="${s(this.placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${s(this.ariaLabelText)}" aria-describedby="${s(this.ariaDescribedBy)}" aria-invalid="${s(this.ariaInvalid)}" aria-required="${s(this.required)}" maxlength="${s(this._exceededTextProps.calcedMaxLength)}" .value="${s(this.value)}" @input="${this._oninput}" @change="${this._onchange}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" data-sap-focus-ref part="textarea"></textarea></div>${this.showExceededText?oe.call(this,r,e,t):void 0}${this.hasValueState?ie.call(this,r,e,t):void 0}<slot name="formSupport"></slot></div> `}function ae(r,e,t){return _`<div id="${s(this._id)}-mirror" class="ui5-textarea-mirror" aria-hidden="true">${F(this._mirrorText,(a,n)=>a._id||n,(a,n)=>re.call(this,r,e,t,a,n))}</div>`}function re(r,e,t,a,n){return _`${s(a.text)}<br />`}function oe(r,e,t){return _`<span class="ui5-textarea-exceeded-text">${s(this._exceededTextProps.exceededText)}</span>`}function ie(r,e,t){return _`<span id="${s(this._id)}-valueStateDesc" class="ui5-hidden-text">${s(this.ariaValueStateHiddenText)}</span>`}function ne(r,e,t){return _`${this.displayValueStateMessagePopover?se.call(this,r,e,t):void 0}`}function se(r,e,t){return t?_`<${v("ui5-popover",e,t)} skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${y(this.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${s(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${x(this.classes.valueStateMsg)}"><${v("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></${v("ui5-icon",e,t)}>${this.hasCustomValueState?w.call(this,r,e,t):S.call(this,r,e,t)}</div></${v("ui5-popover",e,t)}>`:_`<ui5-popover skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${y(this.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${s(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${x(this.classes.valueStateMsg)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></ui5-icon>${this.hasCustomValueState?w.call(this,r,e,t):S.call(this,r,e,t)}</div></ui5-popover>`}function w(r,e,t){return _`${F(this.valueStateMessageText,(a,n)=>a._id||n,(a,n)=>le.call(this,r,e,t,a,n))}`}function le(r,e,t,a,n){return _`${s(a)}`}function S(r,e,t){return _`${s(this.valueStateDefaultText)}`}T("@ui5/webcomponents-theming","sap_horizon",async()=>A);T("@ui5/webcomponents","sap_horizon",async()=>V);const de={packageName:"@ui5/webcomponents",fileName:"themes/TextArea.css",content:`:host{vertical-align:middle}.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:inline-block}:host{box-sizing:border-box;color:var(--sapField_TextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-style:normal;line-height:var(--_ui5-v1-19-1_textarea_line_height);margin:var(--_ui5-v1-19-1_textarea_margin);min-height:var(--_ui5-v1-19-1_textarea_min_height);min-width:6rem;width:100%}:host(:not([value-state]):not([readonly]):not([focused])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper,:host([value-state][disabled]) .ui5-textarea-wrapper{background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background)}:host(:not([value-state]):not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper{background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border:var(--_ui5-v1-19-1_textarea_hover_border)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{box-shadow:var(--sapField_Hover_Shadow)}.ui5-textarea-root{border-color:inherit;border-radius:inherit;box-sizing:border-box;display:inline-flex;height:inherit;min-height:var(--_ui5-v1-19-1_textarea_min_height);outline:none;position:relative;vertical-align:top;width:100%}.ui5-textarea-wrapper{background-color:var(--sapField_Background);border-bottom:none;border-color:var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);border-style:var(--sapField_BorderStyle);border-width:var(--sapField_BorderWidth);box-sizing:border-box;display:flex;height:100%;outline:none;position:relative;width:100%}:host([disabled]) .ui5-textarea-wrapper{cursor:default;opacity:var(--_ui5-v1-19-1_textarea_disabled_opacity);pointer-events:none}:host(:not([readonly])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper{box-shadow:var(--sapField_Shadow)}:host([value-state]) .ui5-textarea-wrapper{border-color:inherit}:host([focused]) .ui5-textarea-wrapper{background-color:var(--sapField_Focus_Background);background-image:none;box-shadow:none}:host([focused]) .ui5-textarea-wrapper:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v1-19-1_textarea_focus_outline_color);border-radius:var(--_ui5-v1-19-1_textarea_focus_border_radius);bottom:var(--_ui5-v1-19-1_textarea_focus_offset);content:var(--_ui5-v1-19-1_textarea_focus_pseudo_element_content);left:var(--_ui5-v1-19-1_textarea_focus_offset);pointer-events:none;position:absolute;right:var(--_ui5-v1-19-1_textarea_focus_offset);top:var(--_ui5-v1-19-1_textarea_focus_offset);z-index:2}:host([focused][readonly]) .ui5-textarea-wrapper:after{bottom:var(--_ui5-v1-19-1_textarea_readonly_focus_offset);left:var(--_ui5-v1-19-1_textarea_readonly_focus_offset);right:var(--_ui5-v1-19-1_textarea_readonly_focus_offset);top:var(--_ui5-v1-19-1_textarea_readonly_focus_offset)}:host([focused][value-state=Error]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=Information]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=Warning]:not([disabled])) .ui5-textarea-wrapper:after{bottom:var(--_ui5-v1-19-1_textarea_value_state_focus_offset);left:var(--_ui5-v1-19-1_textarea_value_state_focus_offset);right:var(--_ui5-v1-19-1_textarea_value_state_focus_offset);top:var(--_ui5-v1-19-1_textarea_value_state_focus_offset)}.ui5-textarea-inner{-webkit-appearance:none;-moz-appearance:textfield;background:transparent;border:none;box-sizing:border-box;color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;letter-spacing:inherit;line-height:inherit;margin:0;outline:none;overflow:auto;padding:var(--_ui5-v1-19-1_textarea_padding_top) var(--_ui5-v1-19-1_textarea_padding_right_and_left) var(--_ui5-v1-19-1_textarea_padding_bottom);resize:none;width:100%;word-spacing:inherit}:host([growing]) .ui5-textarea-inner{box-sizing:border-box;height:100%;left:0;position:absolute;top:0}.ui5-textarea-mirror{box-sizing:border-box;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);line-height:var(--_ui5-v1-19-1_textarea_line_height);max-height:94vh;min-height:calc((var(--_textarea_rows)*var(--_ui5-v1-19-1_textarea_line_height))*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom));padding-bottom:var(--_ui5-v1-19-1_textarea_padding_bottom);padding-top:var(--_ui5-v1-19-1_textarea_padding_top);visibility:hidden;white-space:pre-wrap;width:100%;word-break:break-all}:host([growing][style*=height]) .ui5-textarea-wrapper,:host([style*=height]) .ui5-textarea-root{height:inherit;min-height:var(--_ui5-v1-19-1_textarea_min_height)}:host([rows]) .ui5-textarea-inner,:host([rows]) .ui5-textarea-mirror{min-height:calc((var(--_textarea_rows)*var(--_ui5-v1-19-1_textarea_line_height))*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host:not([rows]) .ui5-textarea-inner{min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*2*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host([growing]):not([growing-max-lines]) .ui5-textarea-inner{max-height:100%}:host([growing-max-lines]) .ui5-textarea-mirror{max-height:calc((var(--_textarea_growing_max_lines)*var(--_ui5-v1-19-1_textarea_line_height))*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host([rows="1"]) .ui5-textarea-inner{min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host([growing-max-lines="1"]) .ui5-textarea-inner,:host([growing-max-lines="1"]) .ui5-textarea-mirror{max-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom));min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host([rows="1"][growing-max-lines]) .ui5-textarea-inner,:host([rows="1"][growing-max-lines]) .ui5-textarea-mirror{max-height:calc((var(--_textarea_growing_max_lines)*var(--_ui5-v1-19-1_textarea_line_height))*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom));min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top) + var(--_ui5-v1-19-1_textarea_padding_bottom))}:host([rows="1"][value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([rows="1"][value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning));min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning))}:host([value-state=Error]) .ui5-textarea-mirror,:host([value-state=Warning]) .ui5-textarea-mirror{min-height:calc(var(--_textarea_rows)*var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning));padding-bottom:var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning);padding-top:var(--_ui5-v1-19-1_textarea_padding_top_error_warning)}:host([growing-max-lines="1"][value-state=Error]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Error]) .ui5-textarea-mirror
:host([growing-max-lines="1"][value-state=Warning]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Warning]) .ui5-textarea-mirror{max-height:var(--_ui5-v1-19-1_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning);min-height:var(--_ui5-v1-19-1_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning)}:host([value-state=Information]) .ui5-textarea-mirror{min-height:calc(var(--_textarea_rows)*var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_information) + var(--_ui5-v1-19-1_textarea_padding_bottom_information));padding-bottom:var(--_ui5-v1-19-1_textarea_padding_bottom_information);padding-top:var(--_ui5-v1-19-1_textarea_padding_top_information)}:host([rows="1"][value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_information) + var(--_ui5-v1-19-1_textarea_padding_bottom_information));min-height:calc(var(--_ui5-v1-19-1_textarea_line_height)*var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_information) + var(--_ui5-v1-19-1_textarea_padding_bottom_information))}:host([growing-max-lines="1"][value-state=Information]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Information]) .ui5-textarea-mirror{max-height:var(--_ui5-v1-19-1_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top__ui5_textarea_padding_top_information) + var(--_ui5-v1-19-1_textarea_padding_bottom__ui5_textarea_padding_top_information);min-height:var(--_ui5-v1-19-1_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v1-19-1_textarea_padding_top_error_warning) + var(--_ui5-v1-19-1_textarea_padding_bottom_information)}:host([readonly]:not([disabled])){border-color:var(--sapField_ReadOnly_BorderColor)}:host([readonly]:not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v1-19-1_textarea_padding_top_readonly) var(--_ui5-v1-19-1_textarea_padding_right_and_left_readonly) var(--_ui5-v1-19-1_textarea_padding_bottom_readonly)}:host([readonly]:not([disabled])) .ui5-textarea-root .ui5-textarea-wrapper{background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-style:var(--_ui5-v1-19-1_textarea_readonly_border_style)}:host([show-exceeded-text]) .ui5-textarea-root{flex-direction:column}.ui5-textarea-inner::-webkit-input-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--_ui5-v1-19-1_textarea_placeholder_font_style);font-weight:400}.ui5-textarea-inner::-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--_ui5-v1-19-1_textarea_placeholder_font_style);font-weight:400}.ui5-textarea-inner:-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--_ui5-v1-19-1_textarea_placeholder_font_style);font-weight:400}:host([value-state=Error]) .ui5-textarea-inner::-webkit-input-placeholder{color:var(--_ui5-v1-19-1_textarea_error_placeholder_color);font-style:var(--_ui5-v1-19-1_textarea_error_placeholder_font_style);font-weight:var(--_ui5-v1-19-1_textarea_value_state_error_warning_placeholder_font_weight)}:host([value-state=Error]) .ui5-textarea-inner::-moz-placeholder{color:var(--_ui5-v1-19-1_textarea_error_placeholder_color);font-style:var(--_ui5-v1-19-1_textarea_error_placeholder_font_style);font-weight:var(--_ui5-v1-19-1_textarea_value_state_error_warning_placeholder_font_weight)}:host([value-state=Warning]) .ui5-textarea-inner::-moz-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--_ui5-v1-19-1_textarea_error_placeholder_font_style);font-weight:var(--_ui5-v1-19-1_textarea_value_state_error_warning_placeholder_font_weight)}:host([value-state=Warning]) .ui5-textarea-inner::-webkit-input-placeholder{color:var(--sapField_PlaceholderTextColor);font-style:var(--_ui5-v1-19-1_textarea_error_placeholder_font_style);font-weight:var(--_ui5-v1-19-1_textarea_value_state_error_warning_placeholder_font_weight)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--sapField_InvalidColor);box-shadow:var(--sapField_InvalidShadow)}:host([value-state=Error][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-19-1_textarea_focused_value_state_error_background);border-color:var(--sapField_InvalidColor)}:host([value-state=Error][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-19-1_textarea_focused_value_state_error_focus_outline_color)}:host([value-state=Error]:not([readonly]):not([focused]):not([disabled]):hover) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-19-1_textarea_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{font-style:var(--_ui5-v1-19-1_textarea_error_warning_font_style);font-weight:var(--_ui5-v1-19-1_textarea_error_warning_font_weight);padding:var(--_ui5-v1-19-1_textarea_padding_top_error_warning) var(--_ui5-v1-19-1_textarea_padding_right_and_left_error_warning) var(--_ui5-v1-19-1_textarea_padding_bottom_error_warning)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-wrapper,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-style:var(--_ui5-v1-19-1_textarea_error_warning_border_style);border-width:var(--_ui5-v1-19-1_textarea_state_border_width)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{border-style:none}:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--sapField_WarningColor);box-shadow:var(--sapField_WarningShadow)}:host([value-state=Warning][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-19-1_textarea_focused_value_state_warning_background);border-color:var(--sapField_WarningColor)}:host([value-state=Warning][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-19-1_textarea_focused_value_state_warning_focus_outline_color)}:host([value-state=Warning]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state=Success]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--sapField_SuccessColor);border-width:var(--sapField_BorderWidth);box-shadow:var(--sapField_SuccessShadow)}:host([value-state=Success][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-19-1_textarea_focused_value_state_success_background);border-color:var(--sapField_SuccessColor)}:host([value-state=Success][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v1-19-1_textarea_focused_value_state_success_focus_outline_color)}:host([value-state=Success]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state][value-state=Success]) .ui5-textarea-inner{border-radius:var(--sapField_BorderCornerRadius)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v1-19-1_textarea_padding_top_information) var(--_ui5-v1-19-1_textarea_padding_right_and_left_information) var(--_ui5-v1-19-1_textarea_padding_bottom_information)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--sapField_InformationColor);box-shadow:var(--sapField_InformationShadow)}:host([value-state=Information][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v1-19-1_textarea_focused_value_state_information_background);border-color:var(--sapField_InformationColor)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-style:var(--_ui5-v1-19-1_textarea_error_warning_border_style);border-width:var(--_ui5-v1-19-1_textarea_information_border_width)}:host([value-state=Information]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-textarea-exceeded-text{align-self:flex-end;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);padding:.125rem .125rem .5rem}:host([disabled]) .ui5-textarea-exceeded-text,:host([readonly]) .ui5-textarea-exceeded-text{display:none}:host :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_BackgroundStyle);background-color:var(--sapScrollBar_TrackColor);border-bottom-right-radius:var(--sapField_BorderCornerRadius);border-top-right-radius:var(--sapField_BorderCornerRadius)}:host([value-state=Error]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Warning]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Information]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Success]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([focused]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background-image:none}`};var i=function(r,e,t,a){var n=arguments.length,p=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(r,e,t,a);else for(var m=r.length-1;m>=0;m--)(h=r[m])&&(p=(n<3?h(p):n>3?h(e,t,p):h(e,t))||p);return n>3&&p&&Object.defineProperty(e,t,p),p},d;let o=d=class extends I{static async onDefine(){d.i18nBundle=await N("@ui5/webcomponents")}constructor(){super(),this._firstRendering=!0,this._openValueStateMsgPopover=!1,this._fnOnResize=this._onResize.bind(this),this.previousValue=""}onEnterDOM(){b.register(this,this._fnOnResize)}onExitDOM(){b.deregister(this,this._fnOnResize)}onBeforeRendering(){this.value||(this.value=""),this._exceededTextProps=this._calcExceededText(),this._mirrorText=this._tokenizeText(this.value),this.exceeding=!!this._exceededTextProps.leftCharactersCount&&this._exceededTextProps.leftCharactersCount<0,this._setCSSParams();const e=D("FormSupport");e?e.syncNativeHiddenTextArea(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}onAfterRendering(){const e=this.getInputDomRef();this.rows===1?e.setAttribute("rows","1"):e.removeAttribute("rows"),this.toggleValueStateMessage(this.openValueStateMsgPopover),this._firstRendering=!1}getInputDomRef(){return this.getDomRef().querySelector("textarea")}_onkeydown(e){if(this._keyDown=!0,W(e)){const t=this.getInputDomRef();this.value=this.previousValue,t.value=this.value,this.fireEvent("input")}}_onkeyup(){this._keyDown=!1}_onfocusin(){this.focused=!0,this._openValueStateMsgPopover=!0,this.previousValue=this.getInputDomRef().value}_onfocusout(e){var n;const t=e.relatedTarget,a=(n=t==null?void 0:t.shadowRoot)==null?void 0:n.querySelector(".ui5-valuestatemessage-root");this.focused=!1,a||(this._openValueStateMsgPopover=!1)}_onchange(){this.fireEvent("change",{})}_oninput(e){const t=this.getInputDomRef();e.target===t&&e.stopImmediatePropagation(),this.value=t.value;const a=this.value.length;e.inputType==="insertFromPaste"&&this.maxlength&&a>this.maxlength&&t.setSelectionRange(this.maxlength,a),this.fireEvent("input",{}),this.fireEvent("value-changed")}_onResize(){this.displayValueStateMessagePopover&&(this._width=this.offsetWidth)}_setCSSParams(){this.style.setProperty("--_textarea_rows",this.rows?String(this.rows):"2"),this.style.setProperty("--_textarea_growing_max_lines",String(this.growingMaxLines))}toggleValueStateMessage(e){e?this.openPopover():this.closePopover()}async openPopover(){this.valueStatePopover=await this._getPopover(),this.valueStatePopover&&await this.valueStatePopover.showAt(this.shadowRoot.querySelector(".ui5-textarea-root .ui5-textarea-wrapper"))}async closePopover(){this.valueStatePopover=await this._getPopover(),this.valueStatePopover&&this.valueStatePopover.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}_tokenizeText(e){const t=e.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&apos;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split(`
`);return t.length<this.rows?this._mapTokenizedTextToObject([...t,...Array(this.rows-t.length).fill("")]):this._mapTokenizedTextToObject(t)}_mapTokenizedTextToObject(e){return e.map((t,a)=>({text:t,last:a===e.length-1}))}_calcExceededText(){let e,t,a;if(this.showExceededText){const n=this.maxlength;n!=null&&(a=n-this.value.length,a>=0?t=d.i18nBundle.getText(q,a):t=d.i18nBundle.getText(O,Math.abs(a)))}else e=this.maxlength;return{exceededText:t,leftCharactersCount:a,calcedMaxLength:e}}get classes(){return{root:{"ui5-textarea-root":!0,"ui5-content-native-scrollbars":M()},valueStateMsg:{"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage--error":this.valueState===u.Error,"ui5-valuestatemessage--warning":this.valueState===u.Warning,"ui5-valuestatemessage--information":this.valueState===u.Information}}}get styles(){return{valueStateMsgPopover:{"max-width":`${this._width}px`}}}get tabIndex(){return this.disabled?-1:0}get ariaLabelText(){const e=z(this)||R(this);return this.showExceededText?e?e.concat(" ",this._exceededTextProps.exceededText):this._exceededTextProps.exceededText:e}get ariaDescribedBy(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get ariaValueStateHiddenText(){if(this.hasValueState&&this.valueState!==u.None)return this.hasCustomValueState?`${this.valueStateTypeMappings[this.valueState]}`.concat(" ",this.valueStateMessageText.map(e=>e.textContent).join(" ")):`${this.valueStateTypeMappings[this.valueState]} ${this.valueStateDefaultText}`}get valueStateDefaultText(){return this.valueState!==u.None?this.valueStateTextMappings[this.valueState]:""}get ariaInvalid(){return this.valueState==="Error"?"true":null}get openValueStateMsgPopover(){return!this._firstRendering&&this._openValueStateMsgPopover&&this.displayValueStateMessagePopover}get displayValueStateMessagePopover(){return!this.readonly&&(this.hasCustomValueState||this.hasValueState)}get hasCustomValueState(){return!!this.valueStateMessage.length&&this.hasValueState}get hasValueState(){return this.valueState===u.Error||this.valueState===u.Warning||this.valueState===u.Information}get valueStateMessageText(){return this.valueStateMessage.map(e=>e.cloneNode(!0))}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?"Left":"Right"}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==u.None?e[this.valueState]:""}get valueStateTextMappings(){return{Success:d.i18nBundle.getText(H),Information:d.i18nBundle.getText(U),Error:d.i18nBundle.getText(j),Warning:d.i18nBundle.getText(Y)}}get valueStateTypeMappings(){return{Success:d.i18nBundle.getText(X),Information:d.i18nBundle.getText(G),Error:d.i18nBundle.getText(Z),Warning:d.i18nBundle.getText(J)}}};i([l()],o.prototype,"value",void 0);i([l({type:Boolean})],o.prototype,"disabled",void 0);i([l({type:Boolean})],o.prototype,"readonly",void 0);i([l({type:Boolean})],o.prototype,"required",void 0);i([l()],o.prototype,"placeholder",void 0);i([l({type:u,defaultValue:u.None})],o.prototype,"valueState",void 0);i([l({validator:g,defaultValue:0})],o.prototype,"rows",void 0);i([l({validator:g,defaultValue:null})],o.prototype,"maxlength",void 0);i([l({type:Boolean})],o.prototype,"showExceededText",void 0);i([l({type:Boolean})],o.prototype,"growing",void 0);i([l({validator:g,defaultValue:0})],o.prototype,"growingMaxLines",void 0);i([l()],o.prototype,"name",void 0);i([l()],o.prototype,"accessibleName",void 0);i([l()],o.prototype,"accessibleNameRef",void 0);i([l({type:Boolean})],o.prototype,"focused",void 0);i([l({type:Boolean})],o.prototype,"exceeding",void 0);i([l({type:Object,multiple:!0})],o.prototype,"_mirrorText",void 0);i([l({noAttribute:!0})],o.prototype,"_maxHeight",void 0);i([l({validator:g})],o.prototype,"_width",void 0);i([k()],o.prototype,"valueStateMessage",void 0);i([k()],o.prototype,"formSupport",void 0);o=d=i([C({tag:"ui5-textarea",languageAware:!0,styles:[Q,de],renderer:$,template:te,staticAreaTemplate:ne,staticAreaStyles:K,dependencies:[L,P]}),f("change"),f("input")],o);o.define();const ue=o,_e=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),c=B("ui5-textarea",["accessibleName","accessibleNameRef","growingMaxLines","maxlength","name","placeholder","rows","value","valueState"],["disabled","growing","readonly","required","showExceededText"],["valueStateMessage"],["change","input"],()=>E(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url));c.displayName="TextArea";c.defaultProps={growingMaxLines:0,maxlength:null,rows:0,valueState:ee.None};try{c.displayName="TextArea",c.__docgenInfo={description:"The `TextArea` component is used to enter multiple lines of text.\n\nWhen empty, it can hold a placeholder similar to a `Input`. You can define the rows of the `TextArea` and also determine specific behavior when handling long texts.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-TextArea)",displayName:"TextArea",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has `valueState` of type `Information`, `Warning` or `Error`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the text has changed and the focus leaves the component.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke or when something is pasted.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:null,description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxLines:{defaultValue:{value:"0"},description:"Defines the maximum number of lines that the component can grow.",name:"growingMaxLines",required:!1,type:{name:"number"}},maxlength:{defaultValue:{value:"null"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text lines for the component.\n\n**Notes:**\n\n*   If the `growing` property is enabled, this property defines the minimum rows to be displayed in the textarea.\n*   The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:null,description:"Determines whether the characters exceeding the maximum allowed character count are visible in the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the `maxlength` property. If set to `true` the characters exceeding the `maxlength` value are selected on paste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:'Defines the value state of the component.\n\n**Note:** If `maxlength` property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.',name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{c as T};
//# sourceMappingURL=index-tj6qQv6o.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}