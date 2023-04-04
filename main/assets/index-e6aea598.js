import{_ as E}from"./iframe-1d6fd4e8.js";import{a as T,U as I,d as A}from"./UI5Element-d1d93200.js";import{e as _,l as n,s as c,a as V,b as C,p as s,c as B,d as $,w as R}from"./withWebComponent-d280b5c2.js";import{V as d}from"./ValueState-2c5e5904.js";import{s as k}from"./slot-76e48863.js";import{c as F,I as z,e as x}from"./Icon-c8fd92f0.js";import{R as b}from"./ResizeHandler-f4ca1209.js";import{I as g}from"./Integer-f7f172c9.js";import{g as M,a as P}from"./AriaLabelHelper-43a261ec.js";import{s as N,g as D}from"./BrowserScrollbar.css-ab5bee37.js";import{g as W}from"./CustomElementsScopeUtils-137da8c8.js";import{d as q}from"./Icons-efeb15d5.js";import{c as L}from"./Popover-4088d87a.js";import"./information-859245b4.js";import{o as f}from"./class-map-6d48ebd3.js";import{s as y}from"./style-map-51d6dd91.js";import{aq as O,ar as U,V as H,i as j,j as Y,k as X,l as G,m as J,n as K,o as Q}from"./i18n-defaults-254d6b69.js";import{s as Z}from"./ValueStateMessage.css-194378a0.js";import{V as ee}from"./ValueState-ab6838cc.js";const te=(e,t,a)=>_`<div class="${f(e.classes.root)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}"><div class="ui5-textarea-wrapper">${e.growing?ae(e):void 0}<textarea id="${n(e._id)}-inner" class="ui5-textarea-inner" placeholder="${n(e.placeholder)}" ?disabled="${e.disabled}" ?readonly="${e.readonly}" aria-label="${n(e.ariaLabelText)}" aria-describedby="${n(e.ariaDescribedBy)}" aria-invalid="${n(e.ariaInvalid)}" aria-required="${n(e.required)}" maxlength="${n(e._exceededTextProps.calcedMaxLength)}" .value="${n(e.value)}" @input="${e._oninput}" @change="${e._onchange}" @keyup="${e._onkeyup}" @keydown="${e._onkeydown}" data-sap-focus-ref part="textarea"></textarea></div>${e.showExceededText?oe(e):void 0}${e.hasValueState?ie(e):void 0}<slot name="formSupport"></slot></div> `,ae=(e,t,a)=>_`<div id="${n(e._id)}-mirror" class="ui5-textarea-mirror" aria-hidden="true">${F(e._mirrorText,(o,l)=>o._id||l,(o,l)=>re(o))}</div>`,re=(e,t,a,o,l)=>_`${n(e.text)}<br />`,oe=(e,t,a)=>_`<span class="ui5-textarea-exceeded-text">${n(e._exceededTextProps.exceededText)}</span>`,ie=(e,t,a)=>_`<span id="${n(e._id)}-valueStateDesc" class="ui5-hidden-text">${n(e.ariaValueStateHiddenText)}</span>`,ne=(e,t,a)=>_`${e.displayValueStateMessagePopover?se(e,t,a):void 0}`,se=(e,t,a)=>a?_`<${c("ui5-popover",t,a)} skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${y(e.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${n(e._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${f(e.classes.valueStateMsg)}"><${c("ui5-icon",t,a)} class="ui5-input-value-state-message-icon" name="${n(e._valueStateMessageIcon)}"></${c("ui5-icon",t,a)}>${e.hasCustomValueState?w(e):S(e)}</div></${c("ui5-popover",t,a)}>`:_`<ui5-popover skip-registry-update prevent-focus-restore hide-arrow _disable-initial-focus class="ui5-valuestatemessage-popover" style="${y(e.styles.valueStateMsgPopover)}" placement-type="Bottom" horizontal-align="${n(e._valueStatePopoverHorizontalAlign)}"><div slot="header" class="ui5-valuestatemessage-root ${f(e.classes.valueStateMsg)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${n(e._valueStateMessageIcon)}"></ui5-icon>${e.hasCustomValueState?w(e):S(e)}</div></ui5-popover>`,w=(e,t,a)=>_`${F(e.valueStateMessageText,(o,l)=>o._id||l,(o,l)=>le(o))}`,le=(e,t,a,o,l)=>_`${n(e)}`,S=(e,t,a)=>_`${n(e.valueStateDefaultText)}`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);T("@ui5/webcomponents","sap_fiori_3",async()=>C);const ue={packageName:"@ui5/webcomponents",fileName:"themes/TextArea.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{width:100%;min-width:6rem;color:var(--sapField_TextColor);min-height:var(--__ui5_textarea_min_height);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;box-sizing:border-box;line-height:var(--_ui5_textarea_line_height);margin:var(--_ui5_textarea_margin)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper{background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background)}:host(:not([value-state]):not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper{background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border:var(--_ui5_textarea_hover_border)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper,:host([value-state=None]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{box-shadow:var(--_ui5_textarea_hover_box_shadow)}.ui5-textarea-root{width:100%;height:inherit;min-height:var(--__ui5_textarea_min_height);display:inline-flex;vertical-align:top;box-sizing:border-box;border-radius:inherit;border-color:inherit;position:relative;outline:none}.ui5-textarea-wrapper{position:relative;box-sizing:border-box;width:100%;border-bottom:none;display:flex;height:100%;background-color:var(--sapField_Background);border-color:var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);border-width:var(--sapField_BorderWidth);border-style:var(--sapField_BorderStyle);outline:none}:host([disabled]) .ui5-textarea-wrapper{opacity:var(--_ui5_textarea_disabled_opacity);cursor:default;pointer-events:none}:host([value-state]) .ui5-textarea-wrapper{border-color:inherit}:host([focused]) .ui5-textarea-wrapper{background-color:var(--sapField_Focus_Background);background-image:none;box-shadow:none}:host([focused]) .ui5-textarea-wrapper:after{content:var(--_ui5_textarea_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_textarea_focus_outline_color);border-radius:var(--_ui5_textarea_focus_border_radius);top:var(--_ui5_textarea_focus_offset);bottom:var(--_ui5_textarea_focus_offset);left:var(--_ui5_textarea_focus_offset);right:var(--_ui5_textarea_focus_offset)}:host([focused][readonly]) .ui5-textarea-wrapper:after{top:var(--_ui5_textarea_readonly_focus_offset);bottom:var(--_ui5_textarea_readonly_focus_offset);left:var(--_ui5_textarea_readonly_focus_offset);right:var(--_ui5_textarea_readonly_focus_offset)}:host([focused][value-state=Error]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=Information]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=Warning]:not([disabled])) .ui5-textarea-wrapper:after{top:var(--_ui5_textarea_value_state_focus_offset);bottom:var(--_ui5_textarea_value_state_focus_offset);left:var(--_ui5_textarea_value_state_focus_offset);right:var(--_ui5_textarea_value_state_focus_offset)}.ui5-textarea-inner{border:none;box-sizing:border-box;width:100%;margin:0;padding:var(--_ui5_textarea_padding_top) var(--_ui5_textarea_padding_right_and_left) var(--_ui5_textarea_padding_bottom);color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;overflow:auto;resize:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;background:transparent;outline:none}:host([growing]) .ui5-textarea-inner{box-sizing:border-box;height:100%;position:absolute;top:0;left:0}.ui5-textarea-mirror{box-sizing:border-box;line-height:var(--_ui5_textarea_line_height);visibility:hidden;width:100%;max-height:94vh;min-height:calc(var(--_textarea_rows)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));word-break:break-all;padding-top:var(--_ui5_textarea_padding_top);padding-bottom:var(--_ui5_textarea_padding_bottom);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);white-space:pre-wrap}:host([growing][style*=height]) .ui5-textarea-wrapper,:host([style*=height]) .ui5-textarea-root{height:inherit;min-height:var(--__ui5_textarea_min_height)}:host([rows]) .ui5-textarea-inner,:host([rows]) .ui5-textarea-mirror{min-height:calc(var(--_textarea_rows)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host:not([rows]) .ui5-textarea-inner{min-height:calc(var(--_ui5_textarea_line_height)*2*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host([growing]):not([growing-max-lines]) .ui5-textarea-inner{max-height:100%}:host([growing-max-lines]) .ui5-textarea-mirror{max-height:calc(var(--_textarea_growing_max_lines)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host([rows="1"]) .ui5-textarea-inner{min-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host([growing-max-lines="1"]) .ui5-textarea-inner,:host([growing-max-lines="1"]) .ui5-textarea-mirror{max-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));min-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host([rows="1"][growing-max-lines]) .ui5-textarea-inner,:host([rows="1"][growing-max-lines]) .ui5-textarea-mirror{min-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));max-height:calc(var(--_textarea_growing_max_lines)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom))}:host([rows="1"][value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([rows="1"][value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning));min-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning))}:host([value-state=Error]) .ui5-textarea-mirror,:host([value-state=Warning]) .ui5-textarea-mirror{padding-top:var(--_ui5_textarea_padding_top_error_warning);padding-bottom:var(--_ui5_textarea_padding_bottom_error_warning);min-height:calc(var(--_textarea_rows)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning))}:host([growing-max-lines="1"][value-state=Error]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Error]) .ui5-textarea-mirror :host([growing-max-lines="1"][value-state=Warning]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Warning]) .ui5-textarea-mirror{max-height:var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning);min-height:var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning)}:host([value-state=Information]) .ui5-textarea-mirror{padding-top:var(--_ui5_textarea_padding_top_information);padding-bottom:var(--_ui5_textarea_padding_bottom_information);min-height:calc(var(--_textarea_rows)*var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information))}:host([rows="1"][value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner{height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information));min-height:calc(var(--_ui5_textarea_line_height)*var(--sapFontSize) + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information))}:host([growing-max-lines="1"][value-state=Information]) .ui5-textarea-inner,:host([growing-max-lines="1"][value-state=Information]) .ui5-textarea-mirror{max-height:var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top__ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom__ui5_textarea_padding_top_information);min-height:var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_information)}:host([readonly]){border-color:var(--sapField_ReadOnly_BorderColor)}:host([readonly]) .ui5-textarea-inner{padding:var(--_ui5_textarea_padding_top_readonly) var(--_ui5_textarea_padding_right_and_left_readonly) var(--_ui5_textarea_padding_bottom_readonly)}:host([readonly]) .ui5-textarea-root .ui5-textarea-wrapper{background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-style:var(--_ui5_textarea_readonly_border_style)}:host([show-exceeded-text]) .ui5-textarea-root{flex-direction:column}.ui5-textarea-inner::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner::-moz-placeholder{font-weight:400;font-style:var(--_ui5_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner:-moz-placeholder{font-weight:400;font-style:var(--_ui5_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=Error]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5_textarea_error_placeholder_font_style);color:var(--_ui5_textarea_error_placeholder_color)}:host([value-state=Error]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5_textarea_error_placeholder_font_style);color:var(--_ui5_textarea_error_placeholder_color)}:host([value-state=Warning]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=Warning]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--sapField_InvalidColor)}:host([value-state=Error][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background-color:var(--_ui5_textarea_focused_value_state_error_background);border-color:var(--sapField_InvalidColor)}:host([value-state=Error][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper:after{border-color:var(--_ui5_textarea_focused_value_state_error_focus_outline_color)}:host([value-state=Error]:not([readonly]):not([focused]):not([disabled]):hover) .ui5-textarea-wrapper{background-color:var(--_ui5_textarea_error_hover_background_color);box-shadow:var(--_ui5_textarea_value_state_error_hover_box_shadow)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{font-style:var(--_ui5_textarea_error_warning_font_style);font-weight:var(--_ui5_textarea_error_warning_font_weight);padding:var(--_ui5_textarea_padding_top_error_warning) var(--_ui5_textarea_padding_right_and_left_error_warning) var(--_ui5_textarea_padding_bottom_error_warning)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-wrapper,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-style:var(--_ui5_textarea_error_warning_border_style);border-width:var(--_ui5_textarea_state_border_width)}:host([value-state=Error]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-inner{border-style:none}:host([value-state=Warning]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--sapField_WarningColor)}:host([value-state=Warning][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5_textarea_focused_value_state_warning_background);border-color:var(--sapField_WarningColor)}:host([value-state=Warning][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5_textarea_focused_value_state_warning_focus_outline_color)}:host([value-state=Warning]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_textarea_value_state_warning_hover_box_shadow)}:host([value-state=Success]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--sapField_SuccessColor);border-width:var(--sapField_BorderWidth)}:host([value-state=Success][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5_textarea_focused_value_state_success_background);border-color:var(--sapField_SuccessColor)}:host([value-state=Success][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5_textarea_focused_value_state_success_focus_outline_color)}:host([value-state=Success]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_textarea_value_state_success_hover_box_shadow)}:host([value-state][value-state=Success]) .ui5-textarea-inner{border-radius:var(--sapField_BorderCornerRadius)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-inner{padding:var(--_ui5_textarea_padding_top_information) var(--_ui5_textarea_padding_right_and_left_information) var(--_ui5_textarea_padding_bottom_information)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--sapField_InformationColor)}:host([value-state=Information][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5_textarea_focused_value_state_information_background);border-color:var(--sapField_InformationColor)}:host([value-state=Information]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-width:var(--_ui5_textarea_information_border_width);border-style:var(--_ui5_textarea_error_warning_border_style)}:host([value-state=Information]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_textarea_value_state_information_hover_box_shadow)}.ui5-textarea-exceeded-text{align-self:flex-end;padding:.125rem .125rem .5rem;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize)}:host([disabled]) .ui5-textarea-exceeded-text,:host([readonly]) .ui5-textarea-exceeded-text{display:none}:host(:not([disabled])) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_BackgroundStyle);background-color:var(--sapScrollBar_TrackColor);border-top-right-radius:var(--sapField_BorderCornerRadius);border-bottom-right-radius:var(--sapField_BorderCornerRadius)}:host([value-state=Error]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Warning]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Information]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([value-state=Success]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapScrollBar_TrackColor)}:host([focused]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background-image:none}'};var i=globalThis&&globalThis.__decorate||function(e,t,a,o){var l=arguments.length,p=l<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,a):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(e,t,a,o);else for(var m=e.length-1;m>=0;m--)(h=e[m])&&(p=(l<3?h(p):l>3?h(t,a,p):h(t,a))||p);return l>3&&p&&Object.defineProperty(t,a,p),p},u;let r=u=class extends I{static async onDefine(){u.i18nBundle=await A("@ui5/webcomponents")}constructor(){super(),this._firstRendering=!0,this._openValueStateMsgPopover=!1,this._fnOnResize=this._onResize.bind(this),this.previousValue=""}onEnterDOM(){b.register(this,this._fnOnResize)}onExitDOM(){b.deregister(this,this._fnOnResize)}onBeforeRendering(){this.value||(this.value=""),this._exceededTextProps=this._calcExceededText(),this._mirrorText=this._tokenizeText(this.value),this.exceeding=!!this._exceededTextProps.leftCharactersCount&&this._exceededTextProps.leftCharactersCount<0,this._setCSSParams();const t=W("FormSupport");t?t.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}onAfterRendering(){const t=this.getInputDomRef();this.rows===1?t.setAttribute("rows","1"):t.removeAttribute("rows"),this.toggleValueStateMessage(this.openValueStateMsgPopover),this._firstRendering=!1}getInputDomRef(){return this.getDomRef().querySelector("textarea")}_onkeydown(t){if(this._keyDown=!0,q(t)){const a=this.getInputDomRef();this.value=this.previousValue,a.value=this.value,this.fireEvent("input")}}_onkeyup(){this._keyDown=!1}_onfocusin(){this.focused=!0,this._openValueStateMsgPopover=!0,this.previousValue=this.getInputDomRef().value}_onfocusout(t){const a=t.relatedTarget,o=a==null?void 0:a.shadowRoot.querySelector(".ui5-valuestatemessage-root");this.focused=!1,o||(this._openValueStateMsgPopover=!1)}_onchange(){this.fireEvent("change",{})}_oninput(t){const a=this.getInputDomRef();t.target===a&&t.stopImmediatePropagation(),this.value=a.value,this.fireEvent("input",{}),this.fireEvent("value-changed")}_onResize(){this.displayValueStateMessagePopover&&(this._width=this.offsetWidth)}_setCSSParams(){this.style.setProperty("--_textarea_rows",this.rows?String(this.rows):"2"),this.style.setProperty("--_textarea_growing_max_lines",String(this.growingMaxLines))}toggleValueStateMessage(t){t?this.openPopover():this.closePopover()}async openPopover(){this.popover=await this._getPopover(),this.popover&&await this.popover.showAt(this.shadowRoot.querySelector(".ui5-textarea-root .ui5-textarea-wrapper"))}async closePopover(){this.popover=await this._getPopover(),this.popover&&this.popover.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}_tokenizeText(t){const a=t.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&apos;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split(`
`);return a.length<this.rows?this._mapTokenizedTextToObject([...a,...Array(this.rows-a.length).fill("")]):this._mapTokenizedTextToObject(a)}_mapTokenizedTextToObject(t){return t.map((a,o)=>({text:a,last:o===t.length-1}))}_calcExceededText(){let t,a,o;if(this.showExceededText){const l=this.maxlength;l!=null&&(o=l-this.value.length,o>=0?a=u.i18nBundle.getText(O,o):a=u.i18nBundle.getText(U,Math.abs(o)))}else t=this.maxlength;return{exceededText:a,leftCharactersCount:o,calcedMaxLength:t}}get classes(){return{root:{"ui5-textarea-root":!0,"ui5-content-native-scrollbars":D()},valueStateMsg:{"ui5-valuestatemessage--error":this.valueState===d.Error,"ui5-valuestatemessage--warning":this.valueState===d.Warning,"ui5-valuestatemessage--information":this.valueState===d.Information}}}get styles(){return{valueStateMsgPopover:{"max-width":`${this._width}px`}}}get tabIndex(){return this.disabled?-1:0}get ariaLabelText(){const t=M(this)||P(this);return this.showExceededText?t?t.concat(" ",this._exceededTextProps.exceededText):this._exceededTextProps.exceededText:t}get ariaDescribedBy(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get ariaValueStateHiddenText(){if(this.hasValueState&&this.valueState!==d.None)return this.hasCustomValueState?`${this.valueStateTypeMappings[this.valueState]}`.concat(" ",this.valueStateMessageText.map(t=>t.textContent).join(" ")):`${this.valueStateTypeMappings[this.valueState]} ${this.valueStateDefaultText}`}get valueStateDefaultText(){return this.valueState!==d.None?this.valueStateTextMappings[this.valueState]:""}get ariaInvalid(){return this.valueState==="Error"?"true":null}get openValueStateMsgPopover(){return!this._firstRendering&&this._openValueStateMsgPopover&&this.displayValueStateMessagePopover}get displayValueStateMessagePopover(){return!this.readonly&&(this.hasCustomValueState||this.hasValueState)}get hasCustomValueState(){return!!this.valueStateMessage.length&&this.hasValueState}get hasValueState(){return this.valueState===d.Error||this.valueState===d.Warning||this.valueState===d.Information}get valueStateMessageText(){return this.valueStateMessage.map(t=>t.cloneNode(!0))}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?"Left":"Right"}get _valueStateMessageIcon(){const t={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==d.None?t[this.valueState]:""}get valueStateTextMappings(){return{Success:u.i18nBundle.getText(H),Information:u.i18nBundle.getText(j),Error:u.i18nBundle.getText(Y),Warning:u.i18nBundle.getText(X)}}get valueStateTypeMappings(){return{Success:u.i18nBundle.getText(G),Information:u.i18nBundle.getText(J),Error:u.i18nBundle.getText(K),Warning:u.i18nBundle.getText(Q)}}};i([s()],r.prototype,"value",void 0);i([s({type:Boolean})],r.prototype,"disabled",void 0);i([s({type:Boolean})],r.prototype,"readonly",void 0);i([s({type:Boolean})],r.prototype,"required",void 0);i([s()],r.prototype,"placeholder",void 0);i([s({type:d,defaultValue:d.None})],r.prototype,"valueState",void 0);i([s({validator:g,defaultValue:0})],r.prototype,"rows",void 0);i([s({validator:g,defaultValue:null})],r.prototype,"maxlength",void 0);i([s({type:Boolean})],r.prototype,"showExceededText",void 0);i([s({type:Boolean})],r.prototype,"growing",void 0);i([s({validator:g,defaultValue:0})],r.prototype,"growingMaxLines",void 0);i([s()],r.prototype,"name",void 0);i([s()],r.prototype,"accessibleName",void 0);i([s()],r.prototype,"accessibleNameRef",void 0);i([s({type:Boolean})],r.prototype,"focused",void 0);i([s({type:Boolean})],r.prototype,"exceeding",void 0);i([s({type:Object,multiple:!0})],r.prototype,"_mirrorText",void 0);i([s({noAttribute:!0})],r.prototype,"_maxHeight",void 0);i([s({validator:g})],r.prototype,"_width",void 0);i([k()],r.prototype,"valueStateMessage",void 0);i([k()],r.prototype,"formSupport",void 0);r=u=i([B({tag:"ui5-textarea",languageAware:!0,styles:[N,ue],renderer:$,template:te,staticAreaTemplate:ne,staticAreaStyles:Z,dependencies:[L,z]}),x("change"),x("input")],r);r.define();const de=r,_e=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),v=R("ui5-textarea",["accessibleName","accessibleNameRef","growingMaxLines","maxlength","name","placeholder","rows","value","valueState"],["disabled","growing","readonly","required","showExceededText"],["valueStateMessage"],["change","input"],()=>E(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url));v.displayName="TextArea";v.defaultProps={growingMaxLines:0,maxlength:null,rows:0,valueState:ee.None};try{v.displayName="TextArea",v.__docgenInfo={description:'The `TextArea` component is used to enter multiple lines of text.\n\nWhen empty, it can hold a placeholder similar to a `Input`. You can define the rows of the `TextArea` and also determine specific behavior when handling long texts.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TextArea" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TextArea",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has `valueState` of type `Information`, `Warning` or `Error`.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the text has changed and the focus leaves the component.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke or when something is pasted.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:null,description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxLines:{defaultValue:{value:"0"},description:"Defines the maximum number of lines that the component can grow.",name:"growingMaxLines",required:!1,type:{name:"number"}},maxlength:{defaultValue:{value:"null"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text lines for the component.\n\n**Notes:**\n\n*   If the `growing` property is enabled, this property defines the minimum rows to be displayed in the textarea.\n*   The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:null,description:"Determines whether the characters exceeding the maximum allowed character count are visible in the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the `maxlength` property. If set to `true` the characters exceeding the `maxlength` value are selected on paste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:'Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`\n\n\n\n**Note:** If `maxlength` property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.',name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};
//# sourceMappingURL=index-e6aea598.js.map
