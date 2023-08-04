import{m as h,n as b}from"./Icons-74c917eb.js";import{b as o,l as t,d as s,s as _,a as k,p as f,c as v}from"./withWebComponent-7d7e5133.js";import{a as m}from"./ListItem-86bc8c51.js";import{o as S}from"./class-map-0ab40ab9.js";import{r as $}from"./UI5Element-a4bd3d38.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Integer-f7f172c9.js";import"./MarkedEvents-b83081e9.js";import"./Icon-42236945.js";import"./slot-76e48863.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./ListItemBase-472e3755.js";import"./ResizeHandler-0af4416f.js";import"./ItemNavigation-0734b7c0.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./Label-287c3220.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d5d083dd.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./RadioButton-082fd9c9.js";import"./Device-6afa24d0.js";import"./ValueState-2c5e5904.js";import"./CheckBox-355e2cb2.js";import"./accept-aa607c05.js";import"./Button-02dfef34.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";function I(n,i,e){return o`<li part="native-li" data-sap-focus-ref tabindex="${t(this._effectiveTabIndex)}" class="${S(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${t(this._accInfo.role)}" aria-expanded="${t(this._accInfo.ariaExpanded)}" title="${t(this.title)}" aria-level="${t(this._accInfo.ariaLevel)}" aria-haspopup="${t(this._accInfo.ariaHaspopup)}" aria-posinset="${t(this._accInfo.posinset)}" aria-roledescription="${t(this.accessibleRoleDescription)}" aria-setsize="${t(this._accInfo.setsize)}" aria-describedby="${t(this._id)}-invisibleText-describedby" aria-labelledby="${t(this._accessibleNameRef)}" aria-disabled="${t(this._ariaDisabled)}" aria-selected="${t(this._accInfo.ariaSelected)}" aria-checked="${t(this._accInfo.ariaChecked)}" aria-owns="${t(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?g.call(this,n,i,e):void 0}<div id="${t(this._id)}-content" class="ui5-li-content"><slot></slot></div>${this.typeDetail?E.call(this,n,i,e):void 0}${this.typeNavigation?L.call(this,n,i,e):void 0}${this.navigated?B.call(this,n,i,e):void 0}${this.placeSelectionElementAfter?C.call(this,n,i,e):void 0}<span id="${t(this._id)}-invisibleText" class="ui5-hidden-text">${t(this._accInfo.listItemAriaLabel)}${t(this.accessibleName)}</span><span id="${t(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${t(this._accInfo.ariaSelectedText)}</span></li> `}function g(n,i,e){return o`${this.modeSingleSelect?y.call(this,n,i,e):void 0}${this.modeMultiSelect?T.call(this,n,i,e):void 0}${this.renderDeleteButton?D.call(this,n,i,e):void 0}`}function y(n,i,e){return e?o`<${s("ui5-radio-button",i,e)} ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",i,e)}>`:o`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function T(n,i,e){return e?o`<${s("ui5-checkbox",i,e)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",i,e)}>`:o`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function D(n,i,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?x.call(this,n,i,e):w.call(this,n,i,e)}</div>`}function x(n,i,e){return o`<slot name="deleteButton"></slot>`}function w(n,i,e){return e?o`<${s("ui5-button",i,e)} tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",i,e)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}function E(n,i,e){return e?o`<div class="ui5-li-detailbtn"><${s("ui5-button",i,e)} design="Transparent" icon="edit" @click="${this.onDetailClick}"></${s("ui5-button",i,e)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function L(n,i,e){return e?o`<${s("ui5-icon",i,e)} name ="slim-arrow-right"></${s("ui5-icon",i,e)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function B(n,i,e){return o`<div class="ui5-li-navigated"></div>`}function C(n,i,e){return o`${this.modeSingleSelect?P.call(this,n,i,e):void 0}${this.modeMultiSelect?R.call(this,n,i,e):void 0}${this.renderDeleteButton?N.call(this,n,i,e):void 0}`}function P(n,i,e){return e?o`<${s("ui5-radio-button",i,e)} ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",i,e)}>`:o`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function R(n,i,e){return e?o`<${s("ui5-checkbox",i,e)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",i,e)}>`:o`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function N(n,i,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?M.call(this,n,i,e):O.call(this,n,i,e)}</div>`}function M(n,i,e){return o`<slot name="deleteButton"></slot>`}function O(n,i,e){return e?o`<${s("ui5-button",i,e)} tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",i,e)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}$("@ui5/webcomponents-theming","sap_fiori_3",async()=>_);$("@ui5/webcomponents","sap_fiori_3",async()=>k);const j={packageName:"@ui5/webcomponents",fileName:"themes/CustomListItem.css",content:`
:host(:not([hidden])) {
	display: block;
}

:host {
	min-height: var(--_ui5_list_item_base_height);
	height: auto;
	box-sizing: border-box;
}

.ui5-li-root.ui5-custom-li-root {
	pointer-events: inherit;
	min-height: inherit;
}

.ui5-li-root.ui5-custom-li-root .ui5-li-content {
	pointer-events: inherit;
}

[ui5-checkbox].ui5-li-singlesel-radiobtn,
[ui5-radio-button].ui5-li-singlesel-radiobtn {
	display: flex;
	align-items: center;
}

.ui5-li-root.ui5-custom-li-root,
[ui5-checkbox].ui5-li-singlesel-radiobtn,
[ui5-radio-button].ui5-li-singlesel-radiobtn {
	min-width: var(--_ui5_custom_list_item_rb_min_width);
}
`};var p=globalThis&&globalThis.__decorate||function(n,i,e,a){var d=arguments.length,l=d<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,e):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,e,a);else for(var u=n.length-1;u>=0;u--)(r=n[u])&&(l=(d<3?r(l):d>3?r(i,e,l):r(i,e))||l);return d>3&&l&&Object.defineProperty(i,e,l),l};let c=class extends m{_onkeydown(i){!(h(i)||b(i))&&!this.focused||super._onkeydown(i)}_onkeyup(i){!(h(i)||b(i))&&!this.focused||super._onkeyup(i)}get classes(){const i=super.classes;return i.main["ui5-custom-li-root"]=!0,i}};p([f()],c.prototype,"accessibleName",void 0);c=p([v({tag:"ui5-li-custom",template:I,styles:[m.styles,j]})],c);c.define();const gi=c;export{gi as default};
//# sourceMappingURL=CustomListItem-1e7fef1b.js.map
