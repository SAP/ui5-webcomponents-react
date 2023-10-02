import{M as z,C as N,e as j,b as O}from"./chunk-S4VUQJ4A-494a6b42.js";import{_ as R}from"./iframe-d0043530.js";import{r as C,U as V,n as H}from"./UI5Element-9ae3ac4a.js";import{b as x,l as e,d as v,s as F,a as U,p as a,c as q,f as M,w as L}from"./withWebComponent-70ea33bf.js";import{e as B}from"./Icon-085ae741.js";import{s as K}from"./slot-76e48863.js";import{e as w,d as y,N as k,O as A,P as T,k as g,l as m,i as W,Q as X}from"./Icons-aa504494.js";import{g as $}from"./MarkedEvents-b83081e9.js";import"./slim-arrow-down-98550049.js";import{B as c,b as Y}from"./Button-bda40b74.js";import{am as I,an as S}from"./i18n-defaults-edeeca68.js";import"./employee-bd01b92f.js";import{A as Q}from"./DomRefTable.module-1365df08.js";import{D as G}from"./DocsHeader-b20f9dbe.js";import{F as J}from"./Footer-c6cbac5a.js";import{j as i}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as D}from"./index-59d6410c.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./AriaLabelHelper-43a261ec.js";import"./react-jss.esm-2e5f50f2.js";import"./index-7db0a6f2.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-60c0dd2c.js";import"./Integer-f7f172c9.js";import"./index-335384f5.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./index-95809ba7.js";import"./index-eefe9625.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-65d16a3a.js";import"./TableOfContent-5d39401b.js";import"./index-8ca2e55d.js";import"./Label-2351773c.js";import"./index-4284414c.js";import"./index-70ddcfc1.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";function Z(n,t,o){return o?x`<div class="ui5-split-button-root" role="group" tabindex=${e(this._tabIndex)} aria-labelledby="${e(this._id)}-invisibleTextDefault ${e(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><${v("ui5-button",t,o)} class="ui5-split-text-button" design="${e(this.design)}" dir=${e(this.effectiveDir)} icon="${e(this._textButtonIcon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._fireClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}>${this.isTextButton?E.call(this,n,t,o):void 0}</${v("ui5-button",t,o)}><div class="ui5-split-arrow-button-wrapper" dir=${e(this.effectiveDir)}><${v("ui5-button",t,o)} class="ui5-split-arrow-button" design="${e(this.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._arrowButtonActive}" aria-expanded="${e(this.accessibilityInfo.ariaExpanded)}" aria-haspopup="${e(this.accessibilityInfo.ariaHaspopup)}" @click="${this._fireArrowClick}" @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}></${v("ui5-button",t,o)}></div><span id="${e(this._id)}-invisibleText" class="ui5-hidden-text">${e(this.accessibilityInfo.description)}${e(this.accessibilityInfo.keyboardHint)}${e(this.accessibleName)}</span><span id="${e(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${e(this.textButtonAccText)}</span></div>`:x`<div class="ui5-split-button-root" role="group" tabindex=${e(this._tabIndex)} aria-labelledby="${e(this._id)}-invisibleTextDefault ${e(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><ui5-button class="ui5-split-text-button" design="${e(this.design)}" dir=${e(this.effectiveDir)} icon="${e(this._textButtonIcon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._fireClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}>${this.isTextButton?E.call(this,n,t,o):void 0}</ui5-button><div class="ui5-split-arrow-button-wrapper" dir=${e(this.effectiveDir)}><ui5-button class="ui5-split-arrow-button" design="${e(this.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._arrowButtonActive}" aria-expanded="${e(this.accessibilityInfo.ariaExpanded)}" aria-haspopup="${e(this.accessibilityInfo.ariaHaspopup)}" @click="${this._fireArrowClick}" @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}></ui5-button></div><span id="${e(this._id)}-invisibleText" class="ui5-hidden-text">${e(this.accessibilityInfo.description)}${e(this.accessibilityInfo.keyboardHint)}${e(this.accessibleName)}</span><span id="${e(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${e(this.textButtonAccText)}</span></div>`}function E(n,t,o){return x`<slot></slot>`}C("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);C("@ui5/webcomponents","sap_fiori_3",async()=>U);const tt={packageName:"@ui5/webcomponents",fileName:"themes/SplitButton.css",content:':host{vertical-align:middle}.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){background-color:var(--sapButton_Background);border-radius:var(--_ui5-v1-18-0_button_border_radius);box-shadow:var(--_ui5-v1-18-0_split_button_host_default_box_shadow);display:inline-block;height:100%}:host([disabled]:not([hidden])){pointer-events:none}:host([design=Positive]:not([hidden])){background-color:var(--sapButton_Accept_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_positive_box_shadow)}:host([design=Negative]:not([hidden])){background-color:var(--sapButton_Reject_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_negative_box_shadow)}:host([design=Attention]:not([hidden])){background-color:var(--sapButton_Attention_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_attention_box_shadow)}:host([design=Emphasized]:not([hidden])){background-color:var(--sapButton_Emphasized_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_emphasized_box_shadow)}:host([design=Transparent]:not([hidden])){background-color:var(--sapButton_Lite_Background);box-shadow:var(--_ui5-v1-18-0_split_button_host_transparent_box_shadow)}:host([design=Transparent][disabled]:not([hidden])){background-color:var(--_ui5-v1-18-0_split_button_transparent_disabled_background)}:host([design=Transparent]:not([hidden]):not([disabled]):hover){background-color:var(--_ui5-v1-18-0_split_button_host_transparent_hover_background);box-shadow:var(--_ui5-v1-18-0_split_button_host_transparent_hover_box_shadow)}:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button:not(:hover),:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-text-button:not(:hover){color:var(--_ui5-v1-18-0_split_button_transparent_hover_color)}:host([focused]) .ui5-split-button-root{outline:0}:host([focused]) .ui5-split-button-root:after{border:var(--_ui5-v1-18-0_split_button_focused_border);border-radius:var(--_ui5-v1-18-0_split_button_focused_border_radius);bottom:.125rem;box-sizing:border-box;content:"";left:.125rem;pointer-events:none;position:absolute;right:.125rem;top:.125rem}:host([design=Emphasized][focused]) .ui5-split-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-split-button-root{display:inline-block;position:relative;width:inherit}.ui5-split-text-button{background-color:var(--_ui5-v1-18-0_split_text_button_background_color);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-color:var(--_ui5-v1-18-0_split_text_button_border_color);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-width:.0625rem;border-right-width:var(--_ui5-v1-18-0_split_button_text_button_right_border_width);margin-right:var(--_ui5-v1-18-0_split_button_text_button_width);vertical-align:top;width:inherit}.ui5-split-text-button:hover{background-color:var(--sapButton_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_hover_border);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-left:var(--_ui5-v1-18-0_split_text_button_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_hover_border_right);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);box-shadow:none}.ui5-split-text-button[design=Emphasized]{border:var(--_ui5-v1-18-0_split_text_button_emphasized_border);border-width:var(--_ui5-v1-18-0_split_text_button_emphasized_border_width)}.ui5-split-text-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_right)}.ui5-split-text-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_positive_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_right)}.ui5-split-text-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_negative_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_right)}.ui5-split-text-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v1-18-0_split_text_button_attention_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_right)}.ui5-split-text-button[design=Transparent]:hover{background-color:var(--_ui5-v1-18-0_split_button_transparent_hover_background);border:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border);border-left:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_left);border-right:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_right)}.ui5-split-text-button[active]{outline:0}.ui5-split-text-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor)}.ui5-split-text-button[active][design=Negative]{background-color:var(--sapButton_Reject_Selected_Background);color:var(--sapButton_Reject_Active_TextColor)}.ui5-split-text-button[active][design=Positive]{background-color:var(--sapButton_Accept_Selected_Background);color:var(--sapButton_Accept_Active_TextColor)}.ui5-split-text-button[active][design=Attention]{background-color:var(--sapButton_Attention_Selected_Background);color:var(--sapButton_Attention_Active_TextColor)}.ui5-split-text-button[active][design=Default]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-text-button[active][design=Transparent]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-arrow-button-wrapper{position:absolute;right:0;top:0}.ui5-split-arrow-button{background-color:var(--_ui5-v1-18-0_split_text_button_background_color);border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-color:var(--_ui5-v1-18-0_split_text_button_border_color);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);width:2.25rem}.ui5-split-text-button[dir=rtl]:hover{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-left:var(--_ui5-v1-18-0_split_text_button_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_hover_border_right_rtl);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius)}.ui5-split-text-button[design=Emphasized][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_emphasized_hover_border_right_rtl)}.ui5-split-text-button[design=Positive][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_positive_hover_border_right_rtl)}.ui5-split-text-button[design=Negative][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_negative_hover_border_right_rtl)}.ui5-split-text-button[design=Attention][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_attention_hover_border_right_rtl)}.ui5-split-text-button[design=Transparent][dir=rtl]:hover{border-left:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_left_rtl);border-right:var(--_ui5-v1-18-0_split_text_button_transparent_hover_border_right_rtl)}[dir=rtl] .ui5-split-arrow-button:hover{border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-top-right-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius)}.ui5-split-arrow-button:hover{background-color:var(--sapButton_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_hover_border);border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);border-top-left-radius:var(--_ui5-v1-18-0_split_button_hover_border_radius);box-shadow:none}.ui5-split-arrow-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_emphasized_hover_border);border-left-width:var(--sapButton_BorderWidth)}.ui5-split-arrow-button-wrapper[dir=rtl] .ui5-split-arrow-button[design=Emphasized]:hover{border-left-width:var(--_ui5-v1-18-0_split_arrow_button_wrapper_emphasized_hover_border_left_width_rtl);border-right-width:var(--sapButton_BorderWidth)}.ui5-split-arrow-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_positive_hover_border)}.ui5-split-arrow-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_negative_hover_border)}.ui5-split-arrow-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v1-18-0_split_arrow_button_attention_hover_border)}.ui5-split-arrow-button[design=Transparent]:hover{background-color:var(--_ui5-v1-18-0_split_button_transparent_hover_background);border:var(--_ui5-v1-18-0_split_arrow_button_transparent_hover_border)}.ui5-split-arrow-button:before{border:0 solid var(--sapButton_TextColor);border-left-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:var(--_ui5-v1-18-0_split_button_middle_separator_left);pointer-events:none;position:absolute;right:0;top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}.ui5-split-arrow-button[design=Emphasized]:before{border:0 solid var(--sapButton_TextColor);border-left-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:var(--_ui5-v1-18-0_split_button_middle_separator_left);pointer-events:none;position:absolute;right:0;top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}[dir=rtl] .ui5-split-arrow-button:before{border:0 solid var(--sapButton_TextColor);border-left-width:0;border-right-width:.0625rem;box-sizing:border-box;content:"";height:var(--_ui5-v1-18-0_split_button_middle_separator_height);left:0;pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_split_button_middle_separator_left);top:var(--_ui5-v1-18-0_split_button_middle_separator_top)}.ui5-split-arrow-button:hover:before,.ui5-split-text-button:hover+.ui5-split-arrow-button-wrapper>.ui5-split-arrow-button:before{display:var(--_ui5-v1-18-0_split_button_middle_separator_hover_display)}.ui5-split-arrow-button[design=Transparent]:before{border-color:var(--sapButton_Lite_TextColor)}.ui5-split-arrow-button[design=Emphasized]:before{border-color:var(--sapButton_Emphasized_TextColor)}.ui5-split-arrow-button[design=Positive]:before{border-color:var(--sapButton_Accept_TextColor)}.ui5-split-arrow-button[design=Negative]:before{border-color:var(--sapButton_Reject_TextColor)}.ui5-split-arrow-button[design=Attention]:before{border-color:var(--_ui5-v1-18-0_split_button_attention_separator_color)}.ui5-split-text-button[dir=rtl]{border-radius:0 var(--_ui5-v1-18-0_button_border_radius) var(--_ui5-v1-18-0_button_border_radius) 0;border-width:var(--sapButton_BorderWidth);margin-left:var(--_ui5-v1-18-0_split_button_text_button_width);margin-right:0}.ui5-split-text-button[design=Emphasized][dir=rtl]{border-width:var(--_ui5-v1-18-0_split_text_button_emphasized_border_width_rtl)}.ui5-split-arrow-button-wrapper[dir=rtl]{left:0;right:auto}[dir=rtl] .ui5-split-arrow-button{border-radius:var(--_ui5-v1-18-0_button_border_radius) 0 0 var(--_ui5-v1-18-0_button_border_radius)}.ui5-split-arrow-button[focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[focused]::part(button):after{border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}[dir=rtl] .ui5-split-arrow-button[focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[dir=rtl][focused]::part(button):after{border-bottom-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-bottom-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer);border-top-left-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_inner);border-top-right-radius:var(--_ui5-v1-18-0_split_button_inner_focused_border_radius_outer)}.ui5-split-arrow-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor)}.ui5-split-arrow-button[active][design=Negative]{background-color:var(--sapButton_Reject_Selected_Background);color:var(--sapButton_Reject_Active_TextColor)}.ui5-split-arrow-button[active][design=Positive]{background-color:var(--sapButton_Accept_Selected_Background);color:var(--sapButton_Accept_Active_TextColor)}.ui5-split-arrow-button[active][design=Attention]{background-color:var(--sapButton_Attention_Selected_Background);color:var(--sapButton_Attention_Active_TextColor)}.ui5-split-arrow-button[active][design=Default]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-split-arrow-button[active][design=Transparent]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}'};var s=globalThis&&globalThis.__decorate||function(n,t,o,_){var p=arguments.length,u=p<3?t:_===null?_=Object.getOwnPropertyDescriptor(t,o):_,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(n,t,o,_);else for(var f=n.length-1;f>=0;f--)(b=n[f])&&(u=(p<3?b(u):p>3?b(t,o,u):b(t,o))||u);return p>3&&u&&Object.defineProperty(t,o,u),u},l;let r=l=class extends V{static async onDefine(){l.i18nBundle=await H("@ui5/webcomponents")}constructor(){super();const t=()=>{this._textButtonActive=!0,this.focused=!1,this._setTabIndexValue()};this._textButtonPress={handleEvent:t,passive:!0}}onBeforeRendering(){this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this.disabled&&(this._tabIndex="-1")}_onFocusOut(t){this.disabled||$(t)||(this._shiftOrEscapePressed=!1,this.focused=!1,this._setTabIndexValue())}_onFocusIn(t){this.disabled||$(t)||(this._shiftOrEscapePressed=!1,this.focused=!0)}_onKeyDown(t){w(t)||y(t)||k(t)||A(t)||T(t)?(t.preventDefault(),this._arrowButtonActive=!0,this._fireArrowClick()):(g(t)||m(t))&&(t.preventDefault(),this._textButtonActive=!0,m(t)?this._fireClick():this._spacePressed=!0),this._spacePressed&&(W(t)||X(t))&&(this._shiftOrEscapePressed=!0,this._textButtonActive=!1),this._setTabIndexValue()}_onKeyUp(t){w(t)||y(t)||k(t)||A(t)||T(t)?this._arrowButtonActive=!1:(g(t)||m(t))&&(this._textButtonActive=!1,g(t)&&(t.preventDefault(),t.stopPropagation(),this._fireClick(),this._spacePressed=!1)),this._setTabIndexValue()}_fireClick(t){t==null||t.stopPropagation(),this._shiftOrEscapePressed||this.fireEvent("click"),this._shiftOrEscapePressed=!1}_fireArrowClick(t){t==null||t.stopPropagation(),this.fireEvent("arrow-click")}_textButtonRelease(){this._textButtonActive=!1,this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this._setTabIndexValue()}_setTabIndexValue(){const t=this.textButton,o=this.arrowButton,_=t&&(t.focused||t.active)||o&&(o.focused||o.active);this._tabIndex=this.disabled||_?"-1":"0"}get textButtonAccText(){return this.textContent}get isTextButton(){return!!this.textContent}get textButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-text-button")}get arrowButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-arrow-button")}get accessibilityInfo(){return{ariaExpanded:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaExpanded,ariaHaspopup:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaHaspopup,description:l.i18nBundle.getText(I),keyboardHint:l.i18nBundle.getText(S)}}get ariaLabelText(){return[l.i18nBundle.getText(I),l.i18nBundle.getText(S)].join(" ")}};s([a()],r.prototype,"icon",void 0);s([a()],r.prototype,"activeIcon",void 0);s([a({type:c,defaultValue:c.Default})],r.prototype,"design",void 0);s([a({type:Boolean})],r.prototype,"disabled",void 0);s([a({defaultValue:void 0})],r.prototype,"accessibleName",void 0);s([a({type:Boolean})],r.prototype,"focused",void 0);s([a({type:Object})],r.prototype,"_splitButtonAccInfo",void 0);s([a({defaultValue:"0",noAttribute:!0})],r.prototype,"_tabIndex",void 0);s([a({type:Boolean,noAttribute:!0})],r.prototype,"_spacePressed",void 0);s([a({type:Boolean,noAttribute:!0})],r.prototype,"_shiftOrEscapePressed",void 0);s([a({type:Boolean,noAttribute:!0})],r.prototype,"_textButtonActive",void 0);s([a({noAttribute:!0})],r.prototype,"_textButtonIcon",void 0);s([a({type:Boolean,noAttribute:!0})],r.prototype,"_arrowButtonActive",void 0);s([K({type:Node,default:!0})],r.prototype,"text",void 0);r=l=s([q({tag:"ui5-split-button",renderer:M,styles:tt,template:Z,dependencies:[Y]}),B("click"),B("arrow-click")],r);r.define();const et=r,ot=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),d=L("ui5-split-button",["accessibleName","activeIcon","design","icon"],["disabled"],[],["arrow-click","click"],()=>R(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url));d.displayName="SplitButton";d.defaultProps={design:c.Default};try{d.displayName="SplitButton",d.__docgenInfo={description:"`SplitButton` enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - `Space` or `Enter` for default action, and `Arrow Down` or `Arrow Up` for arrow action.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SplitButton)",displayName:"SplitButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowClick:{defaultValue:null,description:"Fired when the user clicks on the arrow action.",name:"onArrowClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:"Fired when the user clicks on the default action.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},activeIcon:{defaultValue:null,description:"Defines the icon to be displayed in active state as graphical element within the component.",name:"activeIcon",required:!1,type:{name:"string"}},design:{defaultValue:{value:"ButtonDesign.Default"},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const rt="## Usage\n\n`SplitButton` consists two separate buttons:\n\n- for the first one (default action) you can define some `text` or an `icon`, or both. Also, it is possible to define different icon for active state of this button - `activeIcon`.\n- the second one (arrow action) contains only `slim-arrow-down` icon.\n\nYou can choose a `design` from a set of predefined types (the same as for Button) that offer different styling to correspond to the triggered action. Both text and arrow actions have the same design.\n\nYou can set the `SplitButton` as enabled or disabled. Both parts of an enabled `SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes the style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons cannot be pressed.\n\n## Keyboard Handling\n\n- `Space` or `Enter` - triggers the default action\n- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.\n- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action\n  There are separate events that are fired on activating of `SplitButton` parts:\n\n- `onClick` for the first button (default action)\n- `onArrowClick` for the second button (arrow action)\n";function it(n={}){const{wrapper:t}=Object.assign({},D(),n.components);return t?i.jsx(t,{...n,children:i.jsx(o,{})}):o();function o(){const _=Object.assign({h2:"h2"},D(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(z,{title:"Inputs / SplitButton",component:d,argTypes:{children:{control:{type:"text"}}},args:{design:c.Default,icon:"employee",children:"SplitButton"}}),`
`,i.jsx(G,{since:"0.21.0"}),`
`,i.jsx("br",{}),`
`,i.jsx(_.h2,{id:"example",children:"Example"}),`
`,i.jsx(N,{children:i.jsx(j,{name:"Default",children:p=>i.jsx(d,{...p})})}),`
`,i.jsx(_.h2,{id:"properties",children:"Properties"}),`
`,i.jsx(Q,{story:"Default"}),`
`,i.jsx(O,{children:rt}),`
`,i.jsx(J,{})]})}}const P=n=>i.jsx(d,{...n});P.storyName="Default";P.parameters={storySource:{source:`args => {
  return <SplitButton {...args} />;
}`}};const h={title:"Inputs / SplitButton",component:d,args:{design:c.Default,icon:"employee",children:"SplitButton"},argTypes:{children:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["defaultStory"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:it};const ge=["defaultStory"];export{ge as __namedExportsOrder,h as default,P as defaultStory};
//# sourceMappingURL=SplitButton.stories-77aa00ae.js.map
