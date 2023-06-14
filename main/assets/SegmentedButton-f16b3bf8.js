import{a as B,U as x,d as E,p as D}from"./UI5Element-2e105c8a.js";import{e as _,l as o,s as v,p as c,c as $,a as N,b as O,d as k}from"./withWebComponent-7b9bd1ee.js";import{I as R,e as C}from"./Icon-1927e688.js";import{s as M}from"./slot-76e48863.js";import{I as z}from"./ItemNavigation-e091c48d.js";import{R as S}from"./ResizeHandler-267f9e5d.js";import{b as W,c as I}from"./Icons-fe8ad928.js";import{at as P,au as A,av as j}from"./i18n-defaults-2f9956dc.js";import{I as w}from"./Integer-f7f172c9.js";import H from"./ToggleButton-32ab007a.js";import{a as y}from"./Button-a741ea37.js";var g;(function(s){s.SingleSelect="SingleSelect",s.MultiSelect="MultiSelect"})(g||(g={}));const p=g;function L(s,e,t){return _`<li role="option" aria-roledescription="${o(this.ariaDescription)}" aria-posinset="${o(this.posInSet)}" aria-setsize="${o(this.sizeOfSet)}" aria-selected="${o(this.pressed)}" class="ui5-button-root" aria-disabled="${o(this.disabled)}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${o(this.tabIndexValue)} aria-label="${o(this.ariaLabelText)}" title="${o(this.tooltip)}">${this.icon?V.call(this,s,e,t):void 0}<span id="${o(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span></li> `}function V(s,e,t){return t?_`<${v("ui5-icon",e,t)} class="ui5-button-icon" name="${o(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",e,t)}>`:_`<ui5-icon class="ui5-button-icon" name="${o(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}var m=globalThis&&globalThis.__decorate||function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(d=s[l])&&(n=(r<3?d(n):r>3?d(e,t,n):d(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},f;let a=f=class extends H{get ariaDescription(){return f.i18nBundle.getText(P)}};m([c({type:y,defaultValue:y.Default})],a.prototype,"design",void 0);m([c({type:Boolean})],a.prototype,"iconEnd",void 0);m([c({type:Boolean})],a.prototype,"submits",void 0);m([c({validator:w,defaultValue:0})],a.prototype,"posInSet",void 0);m([c({validator:w,defaultValue:0})],a.prototype,"sizeOfSet",void 0);a=f=m([$({tag:"ui5-segmented-button-item",template:L,dependencies:[R]})],a);a.define();const T=a,oe=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));function F(s,e,t){return _`<ul @click="${this._onclick}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" class="ui5-segmented-button-root" role="listbox" aria-multiselectable="true" aria-describedby="${o(this._id)}-invisibleText" aria-roledescription=${o(this.ariaDescription)} aria-label=${o(this.accessibleName)}><slot></slot><span id="${o(this._id)}-invisibleText" class="ui5-hidden-text">${o(this.ariaDescribedBy)}</span></ul>`}B("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);B("@ui5/webcomponents","sap_fiori_3",async()=>O);const U={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
.ui5-segmented-button-root {
	display: flex;
	margin: 0;
	padding: 0;
	background-color: var(--sapButton_Background);
	border-radius: var(--_ui5_segmented_btn_outer_border_radius);
}
::slotted([ui5-segmented-button-item]) {
	border-radius: var(--_ui5_segmented_btn_inner_border_radius);
	height: var(--_ui5_button_base_height);
	min-width: 2.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	z-index: initial;
}
::slotted([ui5-segmented-button-item]:hover) {
	z-index: 2;
}
::slotted([ui5-segmented-button-item][pressed]),
::slotted([ui5-segmented-button-item][active]) {
	border: 0.0625rem solid var(--sapButton_Selected_BorderColor);
	background-color: var(--sapButton_Selected_Background);
	color: var(--sapButton_Selected_TextColor);
}
::slotted([ui5-segmented-button-item][pressed]:hover) {
	border: 0.0625rem solid var(--sapButton_Selected_Hover_BorderColor);
	background-color: var(--sapButton_Selected_Hover_Background);
	color: var(--sapButton_Selected_TextColor);
}
::slotted([ui5-segmented-button-item]:nth-child(odd)) {
	border-inline-end: var(--_ui5_segmented_btn_inner_border_odd_child);
	border-inline-start: var(--_ui5_segmented_btn_inner_border_odd_child);
}
::slotted([ui5-segmented-button-item][pressed]:nth-child(odd)),
::slotted([ui5-segmented-button-item][active]:nth-child(odd)) {
	border-inline-end: var(--_ui5_segmented_btn_inner_pressed_border_odd_child);
	border-inline-start: var(--_ui5_segmented_btn_inner_pressed_border_odd_child);
}
::slotted([ui5-segmented-button-item]:last-child) {
	border-start-end-radius: var(--_ui5_segmented_btn_border_radius);
	border-end-end-radius: var(--_ui5_segmented_btn_border_radius);
	border-inline-end: var(--_ui5_segmented_btn_inner_border);
}
::slotted([ui5-segmented-button-item][pressed]:last-child),
::slotted([ui5-segmented-button-item][active]:last-child) {
	border-inline-end: 0.0625rem solid var(--sapButton_Selected_BorderColor);
}
::slotted([ui5-segmented-button-item]:first-child) {
	border-start-start-radius: var(--_ui5_segmented_btn_border_radius);
	border-end-start-radius: var(--_ui5_segmented_btn_border_radius);
	border-inline-start: var(--_ui5_segmented_btn_inner_border);
}
::slotted([ui5-segmented-button-item][pressed]:first-child),
::slotted([ui5-segmented-button-item][active]:first-child) {
	border-inline-start: 0.0625rem solid var(--sapButton_Selected_BorderColor);
}
::slotted([ui5-segmented-button-item][active]:not([active]):hover) {
	border-color: var(--sapButton_BorderColor);
}
::slotted([ui5-segmented-button-item][active]:hover) {
	border-color: var(--sapButton_Selected_BorderColor);
}`};var b=globalThis&&globalThis.__decorate||function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(d=s[l])&&(n=(r<3?d(n):r>3?d(e,t,n):d(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},h;let u=h=class extends x{static async onDefine(){h.i18nBundle=await E("@ui5/webcomponents")}constructor(){super(),this._itemNavigation=new z(this,{getItemsCallback:()=>this.getSlottedNodes("items")}),this.absoluteWidthSet=!1,this.percentageWidthSet=!1,this.hasPreviouslyFocusedItem=!1,this._handleResizeBound=this._doLayout.bind(this)}onEnterDOM(){S.register(this.parentNode,this._handleResizeBound)}onExitDOM(){this.parentNode&&S.deregister(this.parentNode,this._handleResizeBound)}onBeforeRendering(){this.getSlottedNodes("items").forEach((t,i,r)=>{t.posInSet=i+1,t.sizeOfSet=r.length}),this.normalizeSelection()}async onAfterRendering(){await this._doLayout()}prepareToMeasureItems(){this.style.width="",this.items.forEach(e=>{e.style.width=""})}async measureItemsWidth(){await D(),this.prepareToMeasureItems(),this.widths=this.items.map(e=>e.offsetWidth+1)}normalizeSelection(){switch(this.mode){case p.SingleSelect:{const e=this.selectedItems,t=this._selectedItem?e.indexOf(this._selectedItem):-1;this._selectedItem&&e.length>1&&e.splice(t,1);const i=e.pop()||this.items[0];this._applySingleSelection(i);break}}}_selectItem(e){const t=e.target,i=t.hasAttribute("ui5-segmented-button-item");if(!(t.disabled||t===this.getDomRef()||!i)){switch(this.mode){case p.MultiSelect:e instanceof KeyboardEvent&&(t.pressed=!t.pressed);break;default:this._applySingleSelection(t)}return this.fireEvent("selection-change",{selectedItem:t,selectedItems:this.selectedItems}),this._itemNavigation.setCurrentItem(t),t.focus(),this}}_applySingleSelection(e){this.items.forEach(t=>{t.pressed=!1}),e.pressed=!0,this._selectedItem=e}_onclick(e){this._selectItem(e)}_onkeydown(e){W(e)?this._selectItem(e):I(e)&&e.preventDefault()}_onkeyup(e){I(e)&&this._selectItem(e)}_onmousedown(e){const t=e.target;t.hasAttribute("ui5-segmented-button-item")&&(t.focus(),this._itemNavigation.setCurrentItem(t),this.hasPreviouslyFocusedItem=!0)}_onfocusin(e){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(e.target);return}this.selectedItems.length&&(this.selectedItems[0].focus(),this._itemNavigation.setCurrentItem(this.selectedItems[0]),this.hasPreviouslyFocusedItem=!0)}async _doLayout(){this.widths&&this.widths.some(i=>i>2)||await this.measureItemsWidth();const t=this.parentNode?this.parentNode.offsetWidth:0;(!this.style.width||this.percentageWidthSet)&&(this.style.width=`${Math.max(...this.widths)*this.items.length}px`,this.absoluteWidthSet=!0),this.items.forEach(i=>{i.style.width="100%"}),t<=this.offsetWidth&&this.absoluteWidthSet&&(this.style.width="100%",this.percentageWidthSet=!0)}get selectedItem(){return this._selectedItem}get selectedItems(){return this.items.filter(e=>e.pressed)}get ariaDescribedBy(){return h.i18nBundle.getText(A)}get ariaDescription(){return h.i18nBundle.getText(j)}};b([c({defaultValue:void 0})],u.prototype,"accessibleName",void 0);b([c({type:p,defaultValue:p.SingleSelect})],u.prototype,"mode",void 0);b([M({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],u.prototype,"items",void 0);u=h=b([$({tag:"ui5-segmented-button",languageAware:!0,renderer:k,template:F,styles:U,dependencies:[T]}),C("selection-change",{detail:{selectedItem:{type:HTMLElement},selectedItems:{type:Array}}})],u);u.define();const G=u,de=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{p as S,G as a,T as b,oe as c,de as d};
//# sourceMappingURL=SegmentedButton-f16b3bf8.js.map
