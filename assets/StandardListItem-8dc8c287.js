import{e as o,l as n,s as a,p as c,c as k}from"./withWebComponent-884f99a7.js";import{s as v}from"./slot-76e48863.js";import{V as $}from"./ValueState-2c5e5904.js";import{L as b}from"./ListItem-a92cce8b.js";import{I as _}from"./Icon-3e9cb840.js";import{A as I}from"./Avatar-3e4df27c.js";import{W as m}from"./WrappingType-b81e595a.js";import{o as f}from"./class-map-323a92fb.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Integer-f7f172c9.js";import"./MarkedEvents-b83081e9.js";import"./Icons-c55d12a5.js";import"./UI5Element-a8445a25.js";import"./decline-c4793abd.js";import"./i18n-defaults-80781f7e.js";import"./ListItemBase-124add92.js";import"./ResizeHandler-cea672cf.js";import"./ItemNavigation-cb92b87f.js";import"./getActiveElement-bcae01ed.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8d822d0c.js";import"./Label-6cefa2d2.js";import"./i18n-defaults-fca59c5d.js";import"./style-map-34e6b8f4.js";import"./RadioButton-021a694f.js";import"./Device-208919c6.js";import"./CheckBox-33235970.js";import"./accept-2ae5e2eb.js";import"./Button-f1768a08.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-70b47038.js";import"./employee-d55343ff.js";function S(t,e,i){return o`<li part="native-li" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" class="${f(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${n(this._accInfo.role)}" aria-expanded="${n(this._accInfo.ariaExpanded)}" title="${n(this.title)}" aria-level="${n(this._accInfo.ariaLevel)}" aria-haspopup="${n(this._accInfo.ariaHaspopup)}" aria-posinset="${n(this._accInfo.posinset)}" aria-roledescription="${n(this.accessibleRoleDescription)}" aria-setsize="${n(this._accInfo.setsize)}" aria-describedby="${n(this._id)}-invisibleText-describedby" aria-labelledby="${n(this._accessibleNameRef)}" aria-disabled="${n(this._ariaDisabled)}" aria-selected="${n(this._accInfo.ariaSelected)}" aria-checked="${n(this._accInfo.ariaChecked)}" aria-owns="${n(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?g.call(this,t,e,i):void 0}<div id="${n(this._id)}-content" class="ui5-li-content">${this.hasImageContent?x.call(this,t,e,i):D.call(this,t,e,i)}${this.displayIconBegin?w.call(this,t,e,i):void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description?R.call(this,t,e,i):void 0}${this.typeActive?void 0:M.call(this,t,e,i)}</div>${this.description?void 0:N.call(this,t,e,i)}</div>${this.displayIconEnd?O.call(this,t,e,i):void 0}${this.typeDetail?V.call(this,t,e,i):void 0}${this.typeNavigation?j.call(this,t,e,i):void 0}${this.navigated?q.call(this,t,e,i):void 0}${this.placeSelectionElementAfter?z.call(this,t,e,i):void 0}<span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this._accInfo.listItemAriaLabel)}${n(this.accessibleName)}</span><span id="${n(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(this._accInfo.ariaSelectedText)}</span></li> `}function g(t,e,i){return o`${this.modeSingleSelect?y.call(this,t,e,i):void 0}${this.modeMultiSelect?T.call(this,t,e,i):void 0}${this.renderDeleteButton?B.call(this,t,e,i):void 0}`}function y(t,e,i){return i?o`<${a("ui5-radio-button",e,i)} ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${a("ui5-radio-button",e,i)}>`:o`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function T(t,e,i){return i?o`<${a("ui5-checkbox",e,i)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${a("ui5-checkbox",e,i)}>`:o`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function B(t,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?C.call(this,t,e,i):E.call(this,t,e,i)}</div>`}function C(t,e,i){return o`<slot name="deleteButton"></slot>`}function E(t,e,i){return i?o`<${a("ui5-button",e,i)} tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${a("ui5-button",e,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}function x(t,e,i){return o`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function D(t,e,i){return o`${this.displayImage?L.call(this,t,e,i):void 0}`}function L(t,e,i){return i?o`<${a("ui5-avatar",e,i)} shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></${a("ui5-avatar",e,i)}>`:o`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function w(t,e,i){return i?o`<${a("ui5-icon",e,i)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${a("ui5-icon",e,i)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function R(t,e,i){return o`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${n(this.description)}</span>${this.additionalText?P.call(this,t,e,i):void 0}</div>`}function P(t,e,i){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function M(t,e,i){return o`<span class="ui5-hidden-text">${n(this.type)}</span>`}function N(t,e,i){return o`${this.additionalText?A.call(this,t,e,i):void 0}`}function A(t,e,i){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function O(t,e,i){return i?o`<${a("ui5-icon",e,i)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${a("ui5-icon",e,i)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function V(t,e,i){return i?o`<div class="ui5-li-detailbtn"><${a("ui5-button",e,i)} design="Transparent" icon="edit" @click="${this.onDetailClick}"></${a("ui5-button",e,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function j(t,e,i){return i?o`<${a("ui5-icon",e,i)} name ="slim-arrow-right"></${a("ui5-icon",e,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function q(t,e,i){return o`<div class="ui5-li-navigated"></div>`}function z(t,e,i){return o`${this.modeSingleSelect?H.call(this,t,e,i):void 0}${this.modeMultiSelect?W.call(this,t,e,i):void 0}${this.renderDeleteButton?F.call(this,t,e,i):void 0}`}function H(t,e,i){return i?o`<${a("ui5-radio-button",e,i)} ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${a("ui5-radio-button",e,i)}>`:o`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function W(t,e,i){return i?o`<${a("ui5-checkbox",e,i)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${a("ui5-checkbox",e,i)}>`:o`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function F(t,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?G.call(this,t,e,i):J.call(this,t,e,i)}</div>`}function G(t,e,i){return o`<slot name="deleteButton"></slot>`}function J(t,e,i){return i?o`<${a("ui5-button",e,i)} tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${a("ui5-button",e,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}var s=globalThis&&globalThis.__decorate||function(t,e,i,r){var h=arguments.length,d=h<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(t,e,i,r);else for(var p=t.length-1;p>=0;p--)(u=t[p])&&(d=(h<3?u(d):h>3?u(e,i,d):u(e,i))||d);return h>3&&d&&Object.defineProperty(e,i,d),d};let l=class extends b{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.textContent,this._hasImageContent=this.hasImageContent}get displayImage(){return!!this.image}get displayIconBegin(){return!!(this.icon&&!this.iconEnd)}get displayIconEnd(){return!!(this.icon&&this.iconEnd)}get hasImageContent(){return!!this.imageContent.length}};s([c()],l.prototype,"description",void 0);s([c()],l.prototype,"icon",void 0);s([c({type:Boolean})],l.prototype,"iconEnd",void 0);s([c()],l.prototype,"image",void 0);s([c()],l.prototype,"additionalText",void 0);s([c({type:$,defaultValue:$.None})],l.prototype,"additionalTextState",void 0);s([c()],l.prototype,"accessibleName",void 0);s([c({type:m,defaultValue:m.None})],l.prototype,"wrappingType",void 0);s([c({type:Boolean})],l.prototype,"hasTitle",void 0);s([c({type:Boolean})],l.prototype,"_hasImageContent",void 0);s([v()],l.prototype,"imageContent",void 0);l=s([k({tag:"ui5-li",template:S,dependencies:[...b.dependencies,_,I]})],l);l.define();const Pi=l;export{Pi as default};
//# sourceMappingURL=StandardListItem-8dc8c287.js.map
