import{s as T,a as L,p as n,c as B}from"./withWebComponent-99b005ba.js";import{I}from"./Integer-f7f172c9.js";import{g}from"./MarkedEvents-b83081e9.js";import{r as b,l as u,k as h,M as w}from"./Icons-234bf59e.js";import{m as D,r as y,l as A}from"./UI5Element-11982a12.js";import{e as _}from"./Icon-31253496.js";import{s as C}from"./slot-76e48863.js";import"./decline-c1cc2557.js";import{a as o,c as x}from"./ListItemBase-6d1fb082.js";import k from"./RadioButton-80f32cef.js";import N from"./CheckBox-6ec8bf24.js";import{b as z}from"./Button-0b5fe0db.js";import{ac as M,ad as P,ae as q,af as R,ag as $}from"./i18n-defaults-1a83921e.js";import{H as O}from"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";var f;(function(l){l.Inactive="Inactive",l.Active="Active",l.Detail="Detail",l.Navigation="Navigation"})(f||(f={}));const a=f,H="edit",S="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z",j=!1,K="SAP-icons-v4",V="@ui5/webcomponents-icons";b(H,{pathData:S,ltr:j,collection:K,packageName:V});const F="edit",E="M501.5 88q8 7 8 19 0 10-8 18l-373 379q-5 4-9 6t-10 2h-80q-12 0-19.5-7.5T2.5 485v-80q0-10 8-18l374-379q8-8 18-8 11 0 19 8zm-136 99l-43-43-256 261 43 43zm80-80l-43-43-42 43 42 42z",U=!1,W="SAP-icons-v5",X="@ui5/webcomponents-icons";b(F,{pathData:E,ltr:U,collection:W,packageName:X});D();const ut="edit";y("@ui5/webcomponents-theming","sap_fiori_3",async()=>T);y("@ui5/webcomponents","sap_fiori_3",async()=>L);const G={packageName:"@ui5/webcomponents",fileName:"themes/ListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

/* actionable (type="Active" + desktop) */

:host([actionable]:not([disabled])) {
	cursor: pointer;
}

/* selected and hovered */

:host([selected][actionable]:not([active]):hover) {
	background : var(--sapList_Hover_SelectionBackground);
}

/* selected and active */

:host([active][actionable]),
:host([selected][active][actionable]) {
	background: var(--sapList_Active_Background);
}

/* hovered */

:host([actionable]:not([active]):not([selected]):hover) {
	background : var(--sapList_Hover_Background);
}

/* focused */

:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus,
:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus {
	outline-color: var(--sapContent_ContrastFocusColor);
}

/* navigated */

:host([navigated]) .ui5-li-root .ui5-li-navigated {
	width: 0.1875rem;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: var(--sapList_SelectionBorderColor);
}

/* active */

:host([active][actionable]) .ui5-li-root .ui5-li-icon {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: title, description, additionalTextState */

:host([active][actionable]) .ui5-li-title,
:host([active][actionable]) .ui5-li-desc,
:host([active][actionable]) .ui5-li-additional-text {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: additionalTextState */

:host([additional-text-state="Warning"]) .ui5-li-additional-text {
	color: var(--sapCriticalTextColor);
}

:host([additional-text-state="Success"]) .ui5-li-additional-text {
	color: var(--sapPositiveTextColor);
}

:host([additional-text-state="Error"]) .ui5-li-additional-text {
	color: var(--sapNegativeTextColor);
}

:host([additional-text-state="Information"]) .ui5-li-additional-text {
	color: var(--sapInformativeTextColor);
}

/* [ui5-li]: item with title and description */

:host([has-title][description]) {
	height: 5rem;
}

:host([has-title][image]) {
	height: 5rem;
}

:host([_has-image-content]) {
	height: 5rem;
}

:host([image]) .ui5-li-content {
	height: 3rem;
}

:host([description]) .ui5-li-root {
	padding: 1rem;
}

:host([description]) .ui5-li-content {
	height: 3rem;
}

:host([has-title][description]) .ui5-li-title {
	padding-bottom: 0.375rem;
}

.ui5-li-text-wrapper {
	display: flex;
	flex-direction: column;
	flex: auto;
	min-width: 1px;
	line-height: normal;
}

:host([description]) .ui5-li-text-wrapper {
	height: 100%;
	justify-content: space-between;
	padding: 0.125rem 0;
}

.ui5-li-description-info-wrapper {
	display: flex;
	justify-content: space-between;
}

.ui5-li-title {
	color: var(--sapTextColor);
	font-size: var(--_ui5_list_item_title_size);
}

.ui5-li-additional-text,
:host(:not([wrapping-type="Normal"])) .ui5-li-title,
.ui5-li-desc {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

:host([wrapping-type="Normal"]) {
	height: auto;
}

:host([wrapping-type="Normal"]) .ui5-li-content {
	margin: var(--_ui5_list_item_content_vertical_offset) 0;
}

.ui5-li-desc {
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSize);
}

.ui5-li-additional-text {
	margin: 0 0.25rem;
	color: var(--sapNeutralTextColor);
	font-size: 0.875rem;
	min-width: 3.75rem;
	text-align: end;
	max-width: 40%;
}

:host([description]) .ui5-li-additional-text {
	align-self: flex-end;
}

.ui5-li-img {
	width: var(--_ui5_list_item_img_size);
	height: var(--_ui5_list_item_img_size);
	border-radius: var(--ui5-avatar-border-radius);
}

.ui5-li-img,
.ui5-li-imgContent {
	min-width: var(--_ui5_list_item_img_size);
	min-height: var(--_ui5_list_item_img_size);
	margin-top: var(--_ui5_list_item_img_top_margin);
	margin-bottom: var(--_ui5_list_item_img_bottom_margin);
	margin-inline-end: var(--_ui5_list_item_img_hn_margin);
}

.ui5-li-img-inner {
	object-fit: contain;
}

.ui5-li-icon {
	min-width: var(--_ui5_list_item_icon_size);
	min-height: var(--_ui5_list_item_icon_size);
	color: var(--sapContent_NonInteractiveIconColor);
	padding-inline-end: var(--_ui5_list_item_icon_padding-inline-end);
}

.ui5-li-content {
	display: flex;
	align-items: center;
	flex: auto;
	overflow: hidden;
}

.ui5-li-detailbtn,
.ui5-li-deletebtn {
	display: flex;
	align-items: center;
	margin-left: var(--_ui5_list_buttons_left_space);
}

.ui5-li-multisel-cb,
.ui5-li-singlesel-radiobtn {
	flex-shrink: 0;
}

:host([description]) .ui5-li-singlesel-radiobtn {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([description]) .ui5-li-multisel-cb {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([_mode="SingleSelectBegin"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="MultiSelect"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="SingleSelectEnd"]) .ui5-li-root {
	padding-inline: 1rem 0;
}

:host [ui5-checkbox].ui5-li-singlesel-radiobtn {
	margin-right: var(--_ui5_list_item_cb_margin_right);
}
`};var i=globalThis&&globalThis.__decorate||function(l,t,s,d){var p=arguments.length,r=p<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,s):d,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,t,s,d);else for(var v=l.length-1;v>=0;v--)(m=l[v])&&(r=(p<3?m(r):p>3?m(t,s,r):m(t,s))||r);return p>3&&r&&Object.defineProperty(t,s,r),r},c;let e=c=class extends x{constructor(){super(),this.deactivateByKey=s=>{u(s)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)};const t=s=>{this._onmousedown(s)};this._ontouchstart={handleEvent:t,passive:!0}}onBeforeRendering(){this.actionable=(this.type===a.Active||this.type===a.Navigation)&&this._mode!==o.Delete}onEnterDOM(){document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}_onkeydown(t){super._onkeydown(t);const s=this.type===a.Active,d=this.typeNavigation;h(t)&&t.preventDefault(),(h(t)||u(t))&&(s||d)&&this.activate(),u(t)&&this.fireItemPress(t)}_onkeyup(t){(h(t)||u(t))&&this.deactivate(),h(t)&&this.fireItemPress(t),this.modeDelete&&w(t)&&this.onDelete()}_onmousedown(t){g(t)!=="button"&&this.activate()}_onmouseup(t){g(t)!=="button"&&this.deactivate()}_ontouchend(t){this._onmouseup(t)}_onfocusout(){super._onfocusout(),this.deactivate()}_onclick(t){g(t)!=="button"&&this.fireItemPress(t)}onMultiSelectionComponentPress(t){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:t.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(t){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:!t.target.checked,selectionComponentPressed:!0})}activate(){(this.type===a.Active||this.type===a.Navigation)&&(this.active=!0)}onDelete(){this.fireEvent("_selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(t){this.isInactive||(u(t)&&t.preventDefault(),this.fireEvent("_press",{item:this,selected:this.selected,key:t.key}))}get isInactive(){return this.type===a.Inactive||this.type===a.Detail}get placeSelectionElementBefore(){return this._mode===o.MultiSelect||this._mode===o.SingleSelectBegin}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._mode===o.SingleSelectEnd||this._mode===o.Delete)}get modeSingleSelect(){return[o.SingleSelectBegin,o.SingleSelectEnd,o.SingleSelect].includes(this._mode)}get modeMultiSelect(){return this._mode===o.MultiSelect}get modeDelete(){return this._mode===o.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===a.Detail}get typeNavigation(){return this.type===a.Navigation}get typeActive(){return this.type===a.Active}get _ariaSelected(){if(this.modeMultiSelect||this.modeSingleSelect)return this.selected}get ariaSelectedText(){let t;return this._ariaSelected!==void 0&&(t=this._ariaSelected?c.i18nBundle.getText(M):c.i18nBundle.getText(P)),t}get deleteText(){return c.i18nBundle.getText(q)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.accessibleRole||this.role,ariaExpanded:void 0,ariaLevel:this._level||void 0,ariaLabel:c.i18nBundle.getText(R),ariaLabelRadioButton:c.i18nBundle.getText($),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.ariaHaspopup||void 0,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset}}get hasConfigurableMode(){return!0}static async onDefine(){c.i18nBundle=await A("@ui5/webcomponents")}};i([n({type:a,defaultValue:a.Active})],e.prototype,"type",void 0);i([n({type:Object})],e.prototype,"accessibilityAttributes",void 0);i([n({type:Boolean})],e.prototype,"navigated",void 0);i([n({type:Boolean})],e.prototype,"active",void 0);i([n()],e.prototype,"title",void 0);i([n({type:Boolean})],e.prototype,"actionable",void 0);i([n({defaultValue:"listitem"})],e.prototype,"role",void 0);i([n({defaultValue:void 0,noAttribute:!0})],e.prototype,"accessibleRoleDescription",void 0);i([n()],e.prototype,"accessibleRole",void 0);i([n({type:o,defaultValue:o.None})],e.prototype,"_mode",void 0);i([n({type:O,noAttribute:!0})],e.prototype,"ariaHaspopup",void 0);i([n({type:I})],e.prototype,"_level",void 0);i([n({type:Boolean,noAttribute:!0})],e.prototype,"disableDeleteButton",void 0);i([C()],e.prototype,"deleteButton",void 0);e=c=i([B({languageAware:!0,styles:[x.styles,G],dependencies:[z,k,N]}),_("detail-click"),_("_press"),_("_focused"),_("_selection-requested")],e);const mt=e;export{a as L,mt as a,ut as e};
//# sourceMappingURL=ListItem-429c71be.js.map
