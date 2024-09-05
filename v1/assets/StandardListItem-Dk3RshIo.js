import{a as o,l as n,b as a,p as c,c as k}from"./withWebComponent-iwEMLCwM.js";import{s as v}from"./slot-Df15G--e.js";import{V as m}from"./ValueState-Bn-H2OaL.js";import{L as $}from"./ListItem-CwDtccDH.js";import{I as _}from"./Icon-4o6dsg6U.js";import{c as f}from"./Avatar-Cw1GREM9.js";import{W as b}from"./WrappingType-CW8URInd.js";import{o as g}from"./class-map-BOjq1HnK.js";import"./CustomElementsScope-OuufJIgt.js";import"./useIsomorphicLayoutEffect-DxKEogMX.js";import"./index-BP8_t0zE.js";import"./EventProvider-B3ZIXKWe.js";import"./utils-BWz0JEZ6.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Keys-BgUkNma0.js";import"./i18nBundle-DAKTKoOS.js";import"./Boot-HIcYreCJ.js";import"./event-CegLCnR0.js";import"./decline-2wLd8OXz.js";import"./Icons-Cd2oYa75.js";import"./i18n-defaults-BdfZArTM.js";import"./List-ZXEUgi_S.js";import"./UI5Element-CTUeyjn-.js";import"./ResizeHandler-DXT2JxMm.js";import"./ItemNavigation-DRojSLXb.js";import"./getActiveElement-BL9Yqj8a.js";import"./Integer-Dh6YzFpK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./TabbableElements-DyWf3Lav.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./BusyIndicator-3fgnP-Yx.js";import"./Label-CLIt97QH.js";import"./i18n-defaults-bByU6Tgp.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./CheckBox-BF3k8OpH.js";import"./accept-DF8ETwLu.js";import"./RadioButton-DW0_8vJn.js";import"./Button-VSTwXR50.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BagSeUK-.js";import"./HasPopup-Cecjtg2t.js";import"./slim-arrow-right-DAFsLrVd.js";import"./employee-DOMuhFXQ.js";import"./alert-DgMNwF9A.js";function I(t,e,i){return o`<li part="native-li" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" class="${g(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${n(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${n(this._accInfo.role)}" aria-expanded="${n(this._accInfo.ariaExpanded)}" title="${n(this._accInfo.tooltip)}" aria-level="${n(this._accInfo.ariaLevel)}" aria-haspopup="${n(this._accInfo.ariaHaspopup)}" aria-posinset="${n(this._accInfo.posinset)}" aria-roledescription="${n(this.accessibleRoleDescription)}" aria-setsize="${n(this._accInfo.setsize)}" aria-describedby="${n(this._id)}-invisibleText-describedby" aria-labelledby="${n(this._accessibleNameRef)}" aria-disabled="${n(this._ariaDisabled)}" aria-selected="${n(this._accInfo.ariaSelected)}" aria-checked="${n(this._accInfo.ariaChecked)}" aria-owns="${n(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?S.call(this,t,e,i):void 0}${this._hasHighlightColor?E.call(this,t,e,i):void 0}<div part="content" id="${n(this._id)}-content" class="ui5-li-content">${this.hasImageContent?D.call(this,t,e,i):L.call(this,t,e,i)}${this.displayIconBegin?R.call(this,t,e,i):void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description?P.call(this,t,e,i):void 0}${this.typeActive?void 0:N.call(this,t,e,i)}</div>${this.description?void 0:A.call(this,t,e,i)}</div>${this.displayIconEnd?V.call(this,t,e,i):void 0}${this.typeDetail?j.call(this,t,e,i):void 0}${this.typeNavigation?H.call(this,t,e,i):void 0}${this.navigated?q.call(this,t,e,i):void 0}${this.placeSelectionElementAfter?z.call(this,t,e,i):void 0}<span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this._accInfo.listItemAriaLabel)}${n(this.accessibleName)}</span><span id="${n(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(this._accInfo.ariaSelectedText)}</span></li> `}function S(t,e,i){return o`${this.modeSingleSelect?y.call(this,t,e,i):void 0}${this.modeMultiSelect?T.call(this,t,e,i):void 0}${this.renderDeleteButton?x.call(this,t,e,i):void 0}`}function y(t,e,i){return i?o`<${a("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${a("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function T(t,e,i){return i?o`<${a("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${a("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function x(t,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?B.call(this,t,e,i):C.call(this,t,e,i)}</div>`}function B(t,e,i){return o`<slot name="deleteButton"></slot>`}function C(t,e,i){return i?o`<${a("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${a("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}function E(t,e,i){return o`<div class="ui5-li-highlight"></div>`}function D(t,e,i){return o`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function L(t,e,i){return o`${this.displayImage?w.call(this,t,e,i):void 0}`}function w(t,e,i){return i?o`<${a("ui5-avatar",e,i)} shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></${a("ui5-avatar",e,i)}>`:o`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function R(t,e,i){return i?o`<${a("ui5-icon",e,i)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${a("ui5-icon",e,i)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function P(t,e,i){return o`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${n(this.description)}</span>${this.additionalText?M.call(this,t,e,i):void 0}</div>`}function M(t,e,i){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function N(t,e,i){return o`<span class="ui5-hidden-text">${n(this.type)}</span>`}function A(t,e,i){return o`${this.additionalText?O.call(this,t,e,i):void 0}`}function O(t,e,i){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function V(t,e,i){return i?o`<${a("ui5-icon",e,i)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${a("ui5-icon",e,i)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function j(t,e,i){return i?o`<div class="ui5-li-detailbtn"><${a("ui5-button",e,i)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${a("ui5-button",e,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function H(t,e,i){return i?o`<${a("ui5-icon",e,i)} name ="slim-arrow-right"></${a("ui5-icon",e,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function q(t,e,i){return o`<div class="ui5-li-navigated"></div>`}function z(t,e,i){return o`${this.modeSingleSelect?W.call(this,t,e,i):void 0}${this.modeMultiSelect?F.call(this,t,e,i):void 0}${this.renderDeleteButton?G.call(this,t,e,i):void 0}`}function W(t,e,i){return i?o`<${a("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${a("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function F(t,e,i){return i?o`<${a("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${a("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function G(t,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?J.call(this,t,e,i):K.call(this,t,e,i)}</div>`}function J(t,e,i){return o`<slot name="deleteButton"></slot>`}function K(t,e,i){return i?o`<${a("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${a("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}var s=function(t,e,i,r){var h=arguments.length,d=h<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(t,e,i,r);else for(var p=t.length-1;p>=0;p--)(u=t[p])&&(d=(h<3?u(d):h>3?u(e,i,d):u(e,i))||d);return h>3&&d&&Object.defineProperty(e,i,d),d};let l=class extends ${onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.textContent,this._hasImageContent=this.hasImageContent}get displayImage(){return!!this.image}get displayIconBegin(){return!!(this.icon&&!this.iconEnd)}get displayIconEnd(){return!!(this.icon&&this.iconEnd)}get hasImageContent(){return!!this.imageContent.length}};s([c()],l.prototype,"description",void 0);s([c()],l.prototype,"icon",void 0);s([c({type:Boolean})],l.prototype,"iconEnd",void 0);s([c()],l.prototype,"image",void 0);s([c()],l.prototype,"additionalText",void 0);s([c({type:m,defaultValue:m.None})],l.prototype,"additionalTextState",void 0);s([c()],l.prototype,"accessibleName",void 0);s([c({type:b,defaultValue:b.None})],l.prototype,"wrappingType",void 0);s([c({type:Boolean})],l.prototype,"hasTitle",void 0);s([c({type:Boolean})],l.prototype,"_hasImageContent",void 0);s([v()],l.prototype,"imageContent",void 0);l=s([k({tag:"ui5-li",template:I,dependencies:[...$.dependencies,_,f]})],l);l.define();const zi=l;export{zi as default};
