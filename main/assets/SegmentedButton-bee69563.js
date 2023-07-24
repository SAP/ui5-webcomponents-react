import{r as y,U as w,l as x}from"./UI5Element-11982a12.js";import{b as p,l as s,d as v,p as c,c as B,s as E,a as D,f as k}from"./withWebComponent-99b005ba.js";import{a as N,e as O}from"./Icon-31253496.js";import{s as C}from"./slot-76e48863.js";import{I as R}from"./ItemNavigation-a882fb90.js";import{l as P,k as I}from"./Icons-234bf59e.js";import{ah as M,ai as j,aj as z}from"./i18n-defaults-1a83921e.js";import{I as $}from"./Integer-f7f172c9.js";import A from"./ToggleButton-633bafcf.js";import{B as S}from"./Button-0b5fe0db.js";var g;(function(i){i.SingleSelect="SingleSelect",i.MultiSelect="MultiSelect"})(g||(g={}));const h=g;function V(i,e,t){return p`<li role="option" aria-roledescription="${s(this.ariaDescription)}" aria-posinset="${s(this.posInSet)}" aria-setsize="${s(this.sizeOfSet)}" aria-selected="${s(this.pressed)}" class="ui5-button-root" aria-disabled="${s(this.disabled)}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${s(this.tabIndexValue)} aria-label="${s(this.ariaLabelText)}" title="${s(this.tooltip)}">${this.icon?H.call(this,i,e,t):void 0}<span id="${s(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span></li> `}function H(i,e,t){return t?p`<${v("ui5-icon",e,t)} class="ui5-button-icon" name="${s(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",e,t)}>`:p`<ui5-icon class="ui5-button-icon" name="${s(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}var m=globalThis&&globalThis.__decorate||function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(d=i[l])&&(n=(r<3?d(n):r>3?d(e,t,n):d(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},f;let a=f=class extends A{get ariaDescription(){return f.i18nBundle.getText(M)}};m([c({type:S,defaultValue:S.Default})],a.prototype,"design",void 0);m([c({type:Boolean})],a.prototype,"iconEnd",void 0);m([c({type:Boolean})],a.prototype,"submits",void 0);m([c({validator:$,defaultValue:0})],a.prototype,"posInSet",void 0);m([c({validator:$,defaultValue:0})],a.prototype,"sizeOfSet",void 0);a=f=m([B({tag:"ui5-segmented-button-item",template:V,dependencies:[N]})],a);a.define();const T=a,ne=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));function U(i,e,t){return p`<ul @click="${this._onclick}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" class="ui5-segmented-button-root" role="listbox" aria-multiselectable="true" aria-describedby="${s(this._id)}-invisibleText" aria-roledescription=${s(this.ariaDescription)} aria-label=${s(this.accessibleName)}><slot></slot><span id="${s(this._id)}-invisibleText" class="ui5-hidden-text">${s(this.ariaDescribedBy)}</span></ul>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>E);y("@ui5/webcomponents","sap_fiori_3",async()=>D);const F={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css",content:`:host {
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
	min-width: calc(var(--_ui5_segmented_btn_items_count) * 2.5rem);
}
.ui5-segmented-button-root {
	width: inherit;
	display: grid;
	grid-template-columns: repeat(var(--_ui5_segmented_btn_items_count), minmax(2.5rem, 1fr));
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
}`};var b=globalThis&&globalThis.__decorate||function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(d=i[l])&&(n=(r<3?d(n):r>3?d(e,t,n):d(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},_;let u=_=class extends w{static async onDefine(){_.i18nBundle=await x("@ui5/webcomponents")}constructor(){super(),this._itemNavigation=new R(this,{getItemsCallback:()=>this.getSlottedNodes("items")}),this.hasPreviouslyFocusedItem=!1}onBeforeRendering(){const e=this.getSlottedNodes("items");e.forEach((t,o,r)=>{t.posInSet=o+1,t.sizeOfSet=r.length}),this.normalizeSelection(),this.style.setProperty("--_ui5_segmented_btn_items_count",`${e.length}`)}normalizeSelection(){switch(this.mode){case h.SingleSelect:{const e=this.selectedItems,t=this._selectedItem?e.indexOf(this._selectedItem):-1;this._selectedItem&&e.length>1&&e.splice(t,1);const o=e.pop()||this.items[0];this._applySingleSelection(o);break}}}_selectItem(e){const t=e.target,o=t.hasAttribute("ui5-segmented-button-item");if(!(t.disabled||t===this.getDomRef()||!o)){switch(this.mode){case h.MultiSelect:e instanceof KeyboardEvent&&(t.pressed=!t.pressed);break;default:this._applySingleSelection(t)}return this.fireEvent("selection-change",{selectedItem:t,selectedItems:this.selectedItems}),this._itemNavigation.setCurrentItem(t),t.focus(),this}}_applySingleSelection(e){this.items.forEach(t=>{t.pressed=!1}),e.pressed=!0,this._selectedItem=e}_onclick(e){this._selectItem(e)}_onkeydown(e){P(e)?this._selectItem(e):I(e)&&e.preventDefault()}_onkeyup(e){I(e)&&this._selectItem(e)}_onmousedown(e){const t=e.target;t.hasAttribute("ui5-segmented-button-item")&&(t.focus(),this._itemNavigation.setCurrentItem(t),this.hasPreviouslyFocusedItem=!0)}_onfocusin(e){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(e.target);return}this.selectedItems.length&&(this.selectedItems[0].focus(),this._itemNavigation.setCurrentItem(this.selectedItems[0]),this.hasPreviouslyFocusedItem=!0)}get selectedItem(){return this._selectedItem}get selectedItems(){return this.items.filter(e=>e.pressed)}get ariaDescribedBy(){return _.i18nBundle.getText(j)}get ariaDescription(){return _.i18nBundle.getText(z)}};b([c({defaultValue:void 0})],u.prototype,"accessibleName",void 0);b([c({type:h,defaultValue:h.SingleSelect})],u.prototype,"mode",void 0);b([C({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],u.prototype,"items",void 0);u=_=b([B({tag:"ui5-segmented-button",languageAware:!0,renderer:k,template:U,styles:F,dependencies:[T]}),O("selection-change",{detail:{selectedItem:{type:HTMLElement},selectedItems:{type:Array}}})],u);u.define();const L=u,oe=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{h as S,L as a,T as b,ne as c,oe as d};
//# sourceMappingURL=SegmentedButton-bee69563.js.map
