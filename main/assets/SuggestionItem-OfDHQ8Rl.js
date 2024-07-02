import{C as _}from"./UI5Element-B4CRQCUa.js";import{b as o,f as l,m as v,a as h}from"./withWebComponent-DVfwWPVB.js";import{o as m}from"./ValueState-Bg0UWejw.js";import{d as k}from"./slot-_4yKMUwC.js";import{c as g,d as f}from"./List-wOCQxiAM.js";import{l as n}from"./if-defined-BG38O0o4.js";import{o as S}from"./class-map-nHH1vjEv.js";function I(t,i,e){return o`<li part="native-li" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" class="${S(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${n(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${n(this._accInfo.role)}" aria-expanded="${n(this._accInfo.ariaExpanded)}" title="${n(this._accInfo.tooltip)}" aria-level="${n(this._accInfo.ariaLevel)}" aria-haspopup="${n(this._accInfo.ariaHaspopup)}" aria-posinset="${n(this._accInfo.posinset)}" aria-setsize="${n(this._accInfo.setsize)}" aria-describedby="${n(this._id)}-invisibleText-describedby" aria-labelledby="${n(this._accessibleNameRef)}" aria-disabled="${n(this._ariaDisabled)}" aria-selected="${n(this._accInfo.ariaSelected)}" aria-checked="${n(this._accInfo.ariaChecked)}" aria-owns="${n(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?y.call(this,t,i,e):void 0}${this._hasHighlightColor?C.call(this,t,i,e):void 0}<div part="content" id="${n(this._id)}-content" class="ui5-li-content">${this.hasImageContent?L.call(this,t,i,e):P.call(this,t,i,e)}${this.displayIconBegin?w.call(this,t,i,e):void 0}<div class="ui5-li-text-wrapper">${this.hasTitle?O.call(this,t,i,e):void 0}${this.hasDescription?M.call(this,t,i,e):void 0}${this.typeActive?void 0:z.call(this,t,i,e)}</div>${this.hasDescription?void 0:H.call(this,t,i,e)}</div>${this.displayIconEnd?V.call(this,t,i,e):void 0}${this.typeDetail?F.call(this,t,i,e):void 0}${this.typeNavigation?G.call(this,t,i,e):void 0}${this.navigated?J.call(this,t,i,e):void 0}${this.placeSelectionElementAfter?K.call(this,t,i,e):void 0}<span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this._accInfo.listItemAriaLabel)}${n(this.accessibleName)}</span><span id="${n(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(this._accInfo.ariaSelectedText)}</span></li> `}function y(t,i,e){return o`${this.modeSingleSelect?T.call(this,t,i,e):void 0}${this.modeMultiple?D.call(this,t,i,e):void 0}${this.renderDeleteButton?x.call(this,t,i,e):void 0}`}function T(t,i,e){return e?o`<${l("ui5-radio-button",i,e)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${l("ui5-radio-button",i,e)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function D(t,i,e){return e?o`<${l("ui5-checkbox",i,e)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${l("ui5-checkbox",i,e)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function x(t,i,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?E.call(this,t,i,e):B.call(this,t,i,e)}</div>`}function E(t,i,e){return o`<slot name="deleteButton"></slot>`}function B(t,i,e){return e?o`<${l("ui5-button",i,e)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${l("ui5-button",i,e)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}function C(t,i,e){return o`<div class="ui5-li-highlight"></div>`}function L(t,i,e){return o`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function P(t,i,e){return o`${this.displayImage?R.call(this,t,i,e):void 0}`}function R(t,i,e){return e?o`<${l("ui5-avatar",i,e)} shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></${l("ui5-avatar",i,e)}>`:o`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function w(t,i,e){return e?o`<${l("ui5-icon",i,e)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" mode="Decorative"></${l("ui5-icon",i,e)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" mode="Decorative"></ui5-icon>`}function O(t,i,e){return o`<span part="title" class="ui5-li-title"><slot></slot></span>`}function M(t,i,e){return o`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${this.richDescription.length?j.call(this,t,i,e):N.call(this,t,i,e)}</span>${this.additionalText?A.call(this,t,i,e):void 0}</div>`}function j(t,i,e){return o`<slot name="richDescription"></slot>`}function N(t,i,e){return o`${n(this.description)}`}function A(t,i,e){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function z(t,i,e){return o`<span class="ui5-hidden-text">${n(this.type)}</span>`}function H(t,i,e){return o`${this.additionalText?q.call(this,t,i,e):void 0}`}function q(t,i,e){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function V(t,i,e){return e?o`<${l("ui5-icon",i,e)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" mode="Decorative"></${l("ui5-icon",i,e)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" mode="Decorative"></ui5-icon>`}function F(t,i,e){return e?o`<div class="ui5-li-detailbtn"><${l("ui5-button",i,e)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${l("ui5-button",i,e)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function G(t,i,e){return e?o`<${l("ui5-icon",i,e)} name ="slim-arrow-right"></${l("ui5-icon",i,e)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function J(t,i,e){return o`<div class="ui5-li-navigated"></div>`}function K(t,i,e){return o`${this.modeSingleSelect?Q.call(this,t,i,e):void 0}${this.modeMultiple?U.call(this,t,i,e):void 0}${this.renderDeleteButton?W.call(this,t,i,e):void 0}`}function Q(t,i,e){return e?o`<${l("ui5-radio-button",i,e)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${l("ui5-radio-button",i,e)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function U(t,i,e){return e?o`<${l("ui5-checkbox",i,e)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${l("ui5-checkbox",i,e)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function W(t,i,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?X.call(this,t,i,e):Y.call(this,t,i,e)}</div>`}function X(t,i,e){return o`<slot name="deleteButton"></slot>`}function Y(t,i,e){return e?o`<${l("ui5-button",i,e)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${l("ui5-button",i,e)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}var $=function(t,i,e,s){var d=arguments.length,a=d<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,i,e,s);else for(var b=t.length-1;b>=0;b--)(r=t[b])&&(a=(d<3?r(a):d>3?r(i,e,a):r(i,e))||a);return d>3&&a&&Object.defineProperty(i,e,a),a};let p=class extends g{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.titleText.length}get effectiveTitle(){return this.titleText.filter(i=>i.nodeType!==Node.COMMENT_NODE).map(i=>i.textContent).join("")}get hasDescription(){return this.richDescription.length||this.description}get groupItem(){return!1}};$([k({type:HTMLElement})],p.prototype,"richDescription",void 0);$([k({type:Node,default:!0})],p.prototype,"titleText",void 0);p=$([v({tag:"ui5-li-suggestion-item",template:I})],p);p.define();const Z=p;var u=function(t,i,e,s){var d=arguments.length,a=d<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,i,e,s);else for(var b=t.length-1;b>=0;b--)(r=t[b])&&(a=(d<3?r(a):d>3?r(i,e,a):r(i,e))||a);return d>3&&a&&Object.defineProperty(i,e,a),a};let c=class extends _{get groupItem(){return!1}};u([h()],c.prototype,"text",void 0);u([h({type:f,defaultValue:f.Active})],c.prototype,"type",void 0);u([h()],c.prototype,"description",void 0);u([h()],c.prototype,"icon",void 0);u([h({type:Boolean})],c.prototype,"iconEnd",void 0);u([h()],c.prototype,"image",void 0);u([h()],c.prototype,"additionalText",void 0);u([h({type:m,defaultValue:m.None})],c.prototype,"additionalTextState",void 0);c=u([v({tag:"ui5-suggestion-item",dependencies:[Z]})],c);c.define();const ee=c,re=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{ee as S,Z as a,re as b};
