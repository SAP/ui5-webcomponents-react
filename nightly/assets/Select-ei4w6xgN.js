import{h as r,j as d,f as b,s as E,a as p,m as D,k as V,I as F}from"./withWebComponent-6t4MTiZ-.js";import{s as g}from"./event-Dq0fpeHi.js";import{d as y}from"./slot-_4yKMUwC.js";import{H as A,B as M,k as R,a as S,n as z,p as L,F as H,b as x,c as W,D as I,d as U}from"./Keys-F_3Gvx0K.js";import{p as j,e as q}from"./InvisibleMessage-2y9W537l.js";import{v as K}from"./AriaLabelHelper-C5uDZewF.js";import{o as l}from"./ValueState-Bg0UWejw.js";import"./useIsomorphicLayoutEffect-dLBi2t77.js";import"./slim-arrow-down-DIQCuvKX.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import{f as G}from"./i18nBundle-BwSTHZvs.js";import"./decline-Chobtb_o.js";import{d as Y}from"./utils-DNCbgL6O.js";import{f as Q}from"./List-D2BeqGtY.js";import{q as J,c as X,b as Z,V as ee,a as te,r as oe,s as ie,t as ne,u as se,I as re,v as ae,w as le}from"./i18n-defaults-sl2p4TZC.js";import{L as ue}from"./Label-tm0HKFXd.js";import{R as de}from"./ResponsivePopover-BM7LS6-J.js";import{c as ce}from"./Popover-BEVRlME1.js";import{c as w,I as _e}from"./Icon-CX51DRZ7.js";import{b as pe}from"./Button-ein9a_YJ.js";import{l as n}from"./if-defined-B1auRMLy.js";import{o as h}from"./class-map-D9jLILSY.js";import{s as v}from"./style-map-CAZGB3vF.js";import{s as B}from"./parameters-bundle.css-P4kwt3kq.js";import{s as he}from"./ResponsivePopoverCommon.css-CTnWiAY0.js";import{s as ve}from"./ValueStateMessage.css-DSPelY4A.js";function fe(o,e,t){return r`<div class="ui5-select-root ui5-input-focusable-element" id="${n(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?ge.call(this,o,e,t):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${n(this.ariaLabelText)}" aria-describedby="${n(this.valueStateTextId)}" aria-disabled="${n(this.isDisabled)}" aria-required="${n(this.required)}" aria-readonly="${n(this.readonly)}" aria-expanded="${n(this._isPickerOpen)}" aria-roledescription="${n(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.hasCustomLabel?be.call(this,o,e,t):me.call(this,o,e,t)}</div>${this.readonly?void 0:ye.call(this,o,e,t)}${this.hasValueState?we.call(this,o,e,t):void 0}</div>${this.options?Se.call(this,o,e,t):void 0}${this.shouldOpenValueStateMessagePopover?Te.call(this,o,e,t):void 0} `}function ge(o,e,t){return t?r`<${d("ui5-icon",e,t)} mode="Decorative" class="ui5-select-option-icon" name="${n(this.selectedOptionIcon)}"></${d("ui5-icon",e,t)}>`:r`<ui5-icon mode="Decorative" class="ui5-select-option-icon" name="${n(this.selectedOptionIcon)}"></ui5-icon>`}function be(o,e,t){return r`<slot name="label"></slot>`}function me(o,e,t){return r`${n(this.text)}`}function ye(o,e,t){return t?r`<${d("ui5-icon",e,t)} name="slim-arrow-down" class="inputIcon" ?pressed="${this._iconPressed}"></${d("ui5-icon",e,t)}>`:r`<ui5-icon name="slim-arrow-down" class="inputIcon" ?pressed="${this._iconPressed}"></ui5-icon>`}function we(o,e,t){return r`<span id="${n(this._id)}-valueStateDesc" class="ui5-hidden-text">${n(this.valueStateText)}</span>`}function Se(o,e,t){return t?r`<${d("ui5-responsive-popover",e,t)} hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${h(this.classes.popover)}" horizontal-align="Start" @ui5-open="${n(this._afterOpen)}" @ui5-before-open="${n(this._beforeOpen)}" @ui5-close="${n(this._afterClose)}" @keydown="${this._onkeydown}" style=${v(this.styles.responsivePopover)}>${this._isPhone?k.call(this,o,e,t):void 0}${this._isPhone?void 0:P.call(this,o,e,t)}<${d("ui5-list",e,t)} mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${n(this._handleItemPress)}"><slot></slot></${d("ui5-list",e,t)}></${d("ui5-responsive-popover",e,t)}>`:r`<ui5-responsive-popover hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${h(this.classes.popover)}" horizontal-align="Start" @ui5-open="${n(this._afterOpen)}" @ui5-before-open="${n(this._beforeOpen)}" @ui5-close="${n(this._afterClose)}" @keydown="${this._onkeydown}" style=${v(this.styles.responsivePopover)}>${this._isPhone?k.call(this,o,e,t):void 0}${this._isPhone?void 0:P.call(this,o,e,t)}<ui5-list mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${n(this._handleItemPress)}"><slot></slot></ui5-list></ui5-responsive-popover>`}function k(o,e,t){return t?r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${n(this._headerTitleText)}</span><${d("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${d("ui5-button",e,t)}></div>${this.hasValueStateText?$.call(this,o,e,t):void 0}</div>`:r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${n(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText?$.call(this,o,e,t):void 0}</div>`}function $(o,e,t){return r`<div class="${h(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage?xe.call(this,o,e,t):Ie.call(this,o,e,t)}</div>`}function xe(o,e,t){return r`${n(this.valueStateText)}`}function Ie(o,e,t){return r`${w(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>ke.call(this,o,e,t,i,s))}`}function ke(o,e,t,i,s){return r`${n(i)}`}function P(o,e,t){return r`${this.hasValueStateText?$e.call(this,o,e,t):void 0}`}function $e(o,e,t){return t?r`<div class="${h(this.classes.popoverValueState)}" style=${v(this.styles.responsivePopoverHeader)}><${d("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${n(this._valueStateMessageInputIcon)}"></${d("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?T.call(this,o,e,t):O.call(this,o,e,t)}</div>`:r`<div class="${h(this.classes.popoverValueState)}" style=${v(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${n(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?T.call(this,o,e,t):O.call(this,o,e,t)}</div>`}function T(o,e,t){return r`${n(this.valueStateText)}`}function O(o,e,t){return r`${w(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>Pe.call(this,o,e,t,i,s))}`}function Pe(o,e,t,i,s){return r`${n(i)}`}function Te(o,e,t){return t?r`<${d("ui5-popover",e,t)} part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${h(this.classes.popoverValueState)}" style="${v(this.styles.popoverHeader)}"><${d("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${n(this._valueStateMessageInputIcon)}"></${d("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?C.call(this,o,e,t):N.call(this,o,e,t)}</div></${d("ui5-popover",e,t)}>`:r`<ui5-popover part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${h(this.classes.popoverValueState)}" style="${v(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${n(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?C.call(this,o,e,t):N.call(this,o,e,t)}</div></ui5-popover>`}function C(o,e,t){return r`${n(this.valueStateText)}`}function N(o,e,t){return r`${w(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>Oe.call(this,o,e,t,i,s))}`}function Oe(o,e,t,i,s){return r`${n(i)}`}b("@ui5/webcomponents-theming","sap_horizon",async()=>E);b("@ui5/webcomponents","sap_horizon",async()=>B);const Ce={packageName:"@ui5/webcomponents",fileName:"themes/Select.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-1-2_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-1-2_input_icon_padding);border-inline-start:var(--_ui5-v2-1-2_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-1-2_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-1-2_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-1-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-1-2_select_hover_icon_left_border);color:var(--_ui5-v2-1-2_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-1-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-1-2_select_hover_icon_left_border);color:var(--_ui5-v2-1-2_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-1-2_input_icon_hover_bg);box-shadow:var(--_ui5-v2-1-2_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-1-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-1-2_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v2-1-2_input_width);min-width:calc(var(--_ui5-v2-1-2_input_min_width) + (var(--_ui5-v2-1-2-input-icons-count)*var(--_ui5-v2-1-2_input_icon_width)));margin:var(--_ui5-v2-1-2_input_margin_top_bottom) 0;height:var(--_ui5-v2-1-2_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v2-1-2-input-border);border-radius:var(--_ui5-v2-1-2_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v2-1-2_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-1-2_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v2-1-2_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v2-1-2_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-1-2_input_focus_outline_color);border-radius:var(--_ui5-v2-1-2_input_focus_border_radius);top:var(--_ui5-v2-1-2_input_focus_offset);bottom:var(--_ui5-v2-1-2_input_focus_offset);left:var(--_ui5-v2-1-2_input_focus_offset);right:var(--_ui5-v2-1-2_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v2-1-2_input_readonly_focus_offset);bottom:var(--_ui5-v2-1-2_input_readonly_focus_offset);left:var(--_ui5-v2-1-2_input_readonly_focus_offset);right:var(--_ui5-v2-1-2_input_readonly_focus_offset);border-radius:var(--_ui5-v2-1-2_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v2-1-2_input_bottom_border_height);transition:var(--_ui5-v2-1-2_input_transition);background-color:var(--_ui5-v2-1-2_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-1-2_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v2-1-2_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-1-2-input_disabled_background);border-color:var(--_ui5-v2-1-2_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v2-1-2_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v2-1-2_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-1-2_input_inner_padding_with_icon)}[inner-input][type=search]::-webkit-search-decoration,[inner-input][type=search]::-webkit-search-cancel-button,[inner-input][type=search]::-webkit-search-results-button,[inner-input][type=search]::-webkit-search-results-decoration{display:none}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v2-1-2-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-1-2_input_placeholder_style);color:var(--_ui5-v2-1-2_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-1-2_input_placeholder_style);color:var(--_ui5-v2-1-2_input_placeholder_color);padding-right:.125rem}:host([value-state="Negative"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-1-2-input_error_placeholder_color);font-weight:var(--_ui5-v2-1-2_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Negative"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-1-2-input_error_placeholder_color);font-weight:var(--_ui5-v2-1-2_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v2-1-2_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v2-1-2_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Positive"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-1-2_input_placeholder_color)}:host([value-state="Positive"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-1-2_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-1-2_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-1-2_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v2-1-2_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-1-2_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-1-2_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v2-1-2_input_hover_border);border-color:var(--_ui5-v2-1-2_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v2-1-2_input_state_border_width)}:host([value-state="Negative"]) [inner-input],:host([value-state="Critical"]) [inner-input]{font-style:var(--_ui5-v2-1-2_input_error_warning_font_style);text-indent:var(--_ui5-v2-1-2_input_error_warning_text_indent)}:host([value-state="Negative"]) [inner-input]{font-weight:var(--_ui5-v2-1-2_input_error_font_weight)}:host([value-state="Critical"]) [inner-input]{font-weight:var(--_ui5-v2-1-2_input_warning_font_weight)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-1-2_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-1-2_input_focused_value_state_error_background);border-color:var(--_ui5-v2-1-2_input_focused_value_state_error_border_color)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-1-2_input_focused_value_state_error_focus_outline_color)}:host([value-state="Negative"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-1-2-input-value-state-error-border-botom-color)}:host([value-state="Negative"]:not([readonly]):not([focused]):hover),:host([value-state="Negative"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v2-1-2_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])),:host([value-state="Critical"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v2-1-2_input_error_warning_border_style)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-1-2_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-1-2_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-1-2_input_focused_value_state_warning_border_color)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-1-2_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Critical"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-1-2_input_value_state_warning_border_botom_color)}:host([value-state="Critical"]:not([readonly]):not([focused]):hover),:host([value-state="Critical"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-1-2_input_value_state_success_border_color);border-width:var(--_ui5-v2-1-2_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-1-2_input_focused_value_state_success_background);border-color:var(--_ui5-v2-1-2_input_focused_value_state_success_border_color)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-1-2_input_focused_value_state_success_focus_outline_color)}:host([value-state="Positive"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-1-2_input_value_state_success_border_botom_color)}:host([value-state="Positive"]:not([readonly]):not([focused]):hover),:host([value-state="Positive"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-1-2_input_value_state_information_border_color);border-width:var(--_ui5-v2-1-2_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-1-2_input_focused_value_state_information_background);border-color:var(--_ui5-v2-1-2_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-1-2_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v2-1-2_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v2-1-2_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-1-2_input_error_warning_icon_padding)}:host([value-state="Negative"][focused]) .inputIcon,:host([value-state="Critical"][focused]) .inputIcon{padding:var(--_ui5-v2-1-2_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-1-2_input_information_icon_padding)}:host([value-state="Information"][focused]) .inputIcon{padding:var(--_ui5-v2-1-2_input_information_focused_icon_padding)}:host([value-state="Negative"]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-1-2_input_error_warning_custom_icon_padding)}:host([value-state="Negative"][focused]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-1-2_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-1-2_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-1-2_input_information_custom_focused_icon_padding)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-1-2_input_error_icon_box_shadow);color:var(--_ui5-v2-1-2_input_icon_error_pressed_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-1-2_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-1-2_input_warning_icon_box_shadow);color:var(--_ui5-v2-1-2_input_icon_warning_pressed_color)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-1-2_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-1-2_input_information_icon_box_shadow);color:var(--_ui5-v2-1-2_input_icon_information_pressed_color)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-1-2_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-1-2_input_success_icon_box_shadow);color:var(--_ui5-v2-1-2_input_icon_success_pressed_color)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-1-2_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-1-2_input_icon_wrapper_height);padding:0;width:var(--_ui5-v2-1-2_input_icon_width);min-width:var(--_ui5-v2-1-2_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Positive"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-1-2_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Positive"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-1-2_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}.ui5-select-root{min-width:calc(var(--_ui5-v2-1-2_input_min_width) + (var(--_ui5-v2-1-2-input-icons-count)*var(--_ui5-v2-1-2_input_icon_width)));width:100%;height:100%;display:flex;outline:none;cursor:pointer;overflow:hidden;border-radius:var(--_ui5-v2-1-2_input_border_radius)}.ui5-select-label-root{flex-shrink:1;flex-grow:1;align-self:center;min-width:1rem;padding-inline-start:.5rem;cursor:pointer;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--_ui5-v2-1-2_select_label_color);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400}.ui5-select-option-icon{padding-inline-start:.5rem;color:var(--sapField_TextColor);align-self:center}:host(:not([disabled])){cursor:pointer}
`};b("@ui5/webcomponents-theming","sap_horizon",async()=>E);b("@ui5/webcomponents","sap_horizon",async()=>B);const Ne={packageName:"@ui5/webcomponents",fileName:"themes/SelectPopover.css.ts",content:`.ui5-select-popover::part(content),.ui5-select-popover::part(header){padding:0}
`};var c=function(o,e,t,i){var s=arguments.length,u=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,e,t,i);else for(var m=o.length-1;m>=0;m--)(f=o[m])&&(u=(s<3?f(u):s>3?f(e,t,u):f(e,t))||u);return s>3&&u&&Object.defineProperty(e,t,u),u},_;let a=_=class extends F{constructor(){super(...arguments),this.disabled=!1,this.valueState="None",this.required=!1,this.readonly=!1,this._iconPressed=!1,this.opened=!1,this._listWidth=0,this.focused=!1,this._selectedIndexBeforeOpen=-1,this._escapePressed=!1,this._lastSelectedOption=null,this._typedChars=""}get formValidityMessage(){return _.i18nBundle.getText(J)}get formValidity(){const e=this.selectedOption;return{valueMissing:this.required&&e&&e.getAttribute("value")===""}}async formElementAnchor(){return this.getFocusDomRefAsync()}get formFormattedValue(){const e=this.selectedOption;return e?e.hasAttribute("value")?e.value:e.textContent:""}onBeforeRendering(){this._ensureSingleSelection(),this.style.setProperty(Y("--_ui5-input-icons-count"),`${this.iconsCount}`)}onAfterRendering(){this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this._isPickerOpen&&(this._listWidth||(this._listWidth=this.responsivePopover.offsetWidth))}_ensureSingleSelection(){let e=this.options.findLastIndex(t=>t.selected);e=e===-1?0:e;for(let t=0;t<this.options.length&&(this.options[t].selected=e===t,e!==t);t++);}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.open}_respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}set value(e){Array.from(this.children).forEach(i=>{i.selected=(i.getAttribute("value")||i.textContent)===e})}get value(){var e,t;return((e=this.selectedOption)==null?void 0:e.value)||((t=this.selectedOption)==null?void 0:t.textContent)||""}get _selectedIndex(){return this.options.findIndex(e=>e.selected)}get selectedOption(){return this.options.find(e=>e.selected)}get text(){var e;return(e=this.selectedOption)==null?void 0:e.effectiveDisplayText}_toggleRespPopover(){this.disabled||this.readonly||(this._iconPressed=!0,this.responsivePopover=this._respPopover(),this._isPickerOpen?this.responsivePopover.open=!1:(this.responsivePopover.opener=this,this.responsivePopover.open=!0))}_onkeydown(e){(A(e)||M(e))&&this._isPickerOpen?this.responsivePopover.open=!1:R(e)?(e.preventDefault(),this._toggleRespPopover()):S(e)?e.preventDefault():z(e)&&this._isPickerOpen?this._escapePressed=!0:L(e)?this._handleHomeKey(e):H(e)?this._handleEndKey(e):x(e)?this._handleSelectionChange():(W(e)||I(e))&&this._handleArrowNavigation(e)}_handleKeyboardNavigation(e){if(x(e)||this.readonly)return;const t=e.key.toLowerCase();this._typedChars+=t;const i=/^(.)\1+$/i.test(this._typedChars)?t:this._typedChars;clearTimeout(this._typingTimeoutID),this._typingTimeoutID=setTimeout(()=>{this._typedChars="",this._typingTimeoutID=-1},1e3),this._selectTypedItem(i)}_selectTypedItem(e){const t=this._selectedIndex,i=this._searchNextItemByText(e);if(i){const s=this.options.indexOf(i);this._changeSelectedItem(this._selectedIndex,s),t!==this._selectedIndex&&(this.itemSelectionAnnounce(),this._scrollSelectedItem())}}_searchNextItemByText(e){let t=this.options.slice(0);const i=t.splice(this._selectedIndex+1,t.length-this._selectedIndex),s=t.splice(0,t.length-1);return t=i.concat(s),t.find(u=>u.effectiveDisplayText.toLowerCase().startsWith(e))}_handleHomeKey(e){e.preventDefault(),!this.readonly&&this._changeSelectedItem(this._selectedIndex,0)}_handleEndKey(e){if(e.preventDefault(),this.readonly)return;const t=this.options.length-1;this._changeSelectedItem(this._selectedIndex,t)}_onkeyup(e){S(e)&&(this._isPickerOpen?this._handleSelectionChange():this._toggleRespPopover())}_getItemIndex(e){return this.options.indexOf(e)}_select(e){const t=this._selectedIndex;e<0||e>=this.options.length||this.options.length===0||(this.options[t]&&(this.options[t].selected=!1),t!==e&&this.fireEvent("live-change",{selectedOption:this.options[e]}),this.options[e].selected=!0)}_handleItemPress(e){const t=e.detail.item,i=this._getItemIndex(t);this._handleSelectionChange(i)}_itemMousedown(e){e.preventDefault()}_onclick(){this.getFocusDomRef().focus(),this._toggleRespPopover()}_handleSelectionChange(e=this._selectedIndex){this._select(e),this._toggleRespPopover()}_scrollSelectedItem(){var e;if(this._isPickerOpen){const t=(e=this._currentlySelectedOption)==null?void 0:e.getDomRef();t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}}_handleArrowNavigation(e){if(e.preventDefault(),this.readonly)return;let t=-1;const i=this._selectedIndex;I(e)?t=this._getNextOptionIndex():t=this._getPreviousOptionIndex(),this._changeSelectedItem(this._selectedIndex,t),i!==this._selectedIndex&&(this.itemSelectionAnnounce(),this._scrollSelectedItem())}_changeSelectedItem(e,t){const i=this.options,s=i[e],u=i[t];s!==u&&(s.selected=!1,s.focused=!1,u.selected=!0,u.focused=!0,this.fireEvent("live-change",{selectedOption:u}),this._isPickerOpen||this._fireChangeEvent(u))}_getNextOptionIndex(){return this._selectedIndex===this.options.length-1?this._selectedIndex:this._selectedIndex+1}_getPreviousOptionIndex(){return this._selectedIndex===0?this._selectedIndex:this._selectedIndex-1}_beforeOpen(){this._selectedIndexBeforeOpen=this._selectedIndex,this._lastSelectedOption=this.options[this._selectedIndex]}_afterOpen(){this.opened=!0,this.fireEvent("open"),this.itemSelectionAnnounce(),this._scrollSelectedItem(),this._applyFocusToSelectedItem()}_applyFocusToSelectedItem(){this.options.forEach(e=>{e.focused=e.selected})}_afterClose(){this.opened=!1,this._iconPressed=!1,this._listWidth=0,this._escapePressed?(this._select(this._selectedIndexBeforeOpen),this._escapePressed=!1):this._lastSelectedOption!==this.options[this._selectedIndex]&&(this._fireChangeEvent(this.options[this._selectedIndex]),this._lastSelectedOption=this.options[this._selectedIndex]),this.fireEvent("close")}get hasCustomLabel(){return!!this.label.length}_fireChangeEvent(e){const t=!this.fireEvent("change",{selectedOption:e},!0);this.fireEvent("selected-item-changed"),t&&this._select(this._selectedIndexBeforeOpen)}get valueStateTextMappings(){return{[l.Positive]:_.i18nBundle.getText(X),[l.Information]:_.i18nBundle.getText(Z),[l.Negative]:_.i18nBundle.getText(ee),[l.Critical]:_.i18nBundle.getText(te)}}get valueStateTypeMappings(){return{[l.Positive]:_.i18nBundle.getText(oe),[l.Information]:_.i18nBundle.getText(ie),[l.Negative]:_.i18nBundle.getText(ne),[l.Critical]:_.i18nBundle.getText(se)}}get valueStateText(){let e;return this.shouldDisplayDefaultValueStateMessage?e=this.valueStateDefaultText:e=this.valueStateMessageText.map(t=>t.textContent).join(" "),`${this.valueStateTypeText} ${e}`}get valueStateDefaultText(){return this.valueState!==l.None?this.valueStateTextMappings[this.valueState]:""}get valueStateTypeText(){return this.valueState!==l.None?this.valueStateTypeMappings[this.valueState]:""}get hasValueState(){return this.valueState!==l.None}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get isDisabled(){return this.disabled||void 0}get _headerTitleText(){return _.i18nBundle.getText(re)}get _currentlySelectedOption(){return this.options[this._selectedIndex]}get _effectiveTabIndex(){return this.disabled||this.responsivePopover&&this.responsivePopover.open?"-1":"0"}get _valueStateMessageInputIcon(){const e={Negative:"error",Critical:"alert",Positive:"sys-enter-2",Information:"information"};return this.valueState!==l.None?e[this.valueState]:""}get iconsCount(){return this.selectedOptionIcon?2:1}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===l.Positive,"ui5-valuestatemessage--error":this.valueState===l.Negative,"ui5-valuestatemessage--warning":this.valueState===l.Critical,"ui5-valuestatemessage--information":this.valueState===l.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){return{popoverHeader:{"max-width":`${this.offsetWidth}px`},responsivePopoverHeader:{display:this.options.length&&this._listWidth===0?"none":"inline-block",width:`${this.options.length?this._listWidth:this.offsetWidth}px`},responsivePopover:{"min-width":`${this.offsetWidth}px`}}}get ariaLabelText(){return K(this)}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessageText.length&&this.hasValueStateText}get hasValueStateText(){return this.hasValueState&&this.valueState!==l.Positive}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this._iconPressed&&!this._isPickerOpen&&!this._isPhone}get _ariaRoleDescription(){return _.i18nBundle.getText(ae)}get _isPhone(){return U()}itemSelectionAnnounce(){let e;const t=this.options.length,i=_.i18nBundle.getText(le,this._selectedIndex+1,t);this.focused&&this._currentlySelectedOption&&(e=`${this._currentlySelectedOption.textContent} ${this._isPickerOpen?i:""}`,j(e,q.Polite))}openValueStatePopover(){this.valueStatePopover=this._getPopover(),this.valueStatePopover&&(this.valueStatePopover.opener=this,this.valueStatePopover.open=!0)}closeValueStatePopover(){this.valueStatePopover&&(this.valueStatePopover.open=!1)}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}get selectedOptionIcon(){return this.selectedOption&&this.selectedOption.icon}_getPopover(){return this.shadowRoot.querySelector("[ui5-popover]")}static async onDefine(){_.i18nBundle=await G("@ui5/webcomponents")}};c([p({type:Boolean})],a.prototype,"disabled",void 0);c([p()],a.prototype,"name",void 0);c([p()],a.prototype,"valueState",void 0);c([p({type:Boolean})],a.prototype,"required",void 0);c([p({type:Boolean})],a.prototype,"readonly",void 0);c([p()],a.prototype,"accessibleName",void 0);c([p()],a.prototype,"accessibleNameRef",void 0);c([p({type:Boolean,noAttribute:!0})],a.prototype,"_iconPressed",void 0);c([p({type:Boolean})],a.prototype,"opened",void 0);c([p({type:Number,noAttribute:!0})],a.prototype,"_listWidth",void 0);c([p({type:Boolean})],a.prototype,"focused",void 0);c([y({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],a.prototype,"options",void 0);c([y()],a.prototype,"valueStateMessage",void 0);c([y()],a.prototype,"label",void 0);c([p({noAttribute:!0})],a.prototype,"value",null);a=_=c([D({tag:"ui5-select",languageAware:!0,formAssociated:!0,renderer:V,template:fe,styles:[Ce,he,ve,Ne],dependencies:[ue,de,ce,Q,_e,pe]}),g("change",{detail:{selectedOption:{type:HTMLElement}}}),g("live-change",{detail:{selectedOption:{type:HTMLElement}}}),g("open"),g("close")],a);a.define();const rt=a;export{rt as S};
