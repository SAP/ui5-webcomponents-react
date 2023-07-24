import{m as g,r as k,U as y,e as w,l as x}from"./UI5Element-11982a12.js";import{b as c,l,d as h,s as B,a as T,p as s,c as q,f as $}from"./withWebComponent-99b005ba.js";import{s as D}from"./slot-76e48863.js";import{a as S,e as f}from"./Icon-31253496.js";import{r as v,L as z,M as I,k as C,x as R}from"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import{a7 as E}from"./i18n-defaults-1a83921e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./i18n-defaults-837f5aed.js";const A="sys-cancel",b="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88zm-186-7q-5 3-1 9l89 89q9 8 0 17l-16 17q-8 4-9 4t-9-4l-89-89q-1-2-4-2-4 0-5 2l-88 89q-6 4-9 4-1 0-9-4l-16-17q-8-9 0-17l88-89q5-5 0-9l-88-89q-8-9 0-17l16-17q4-4 9-4t9 4l88 89q2 2 5 2 2 0 4-2l89-89q4-4 9-4t9 4l16 17q9 8 0 17z",P=!1,F="SAP-icons-v4",N="@ui5/webcomponents-icons";v(A,{pathData:b,ltr:P,collection:F,packageName:N});const L="sys-cancel",m="M256.5 0q53 0 99 20t81 55 55 81.5 20 99.5q0 52-20 98.5t-55 81.5-81 55-99 20-99.5-20-81.5-55-55-81.5T.5 256q0-53 20-99.5t55-81.5T157 20t99.5-20zm0 460q42 0 79-16t65-44 44-65 16-79-16-79.5-44-65.5-65-44-79-16T177 67t-65.5 44-44 65.5-16 79.5 16 79 44 65 65.5 44 79.5 16zm94-146q8 8 8 18t-8 18-18 8-18-8l-58-59-59 59q-8 8-18 8t-18-8-8-18 8-18l59-58-59-59q-8-8-8-18t8-18 18-8 18 8l59 59 58-59q8-8 18-8t18 8 8 18-8 18l-59 59z",M=!1,U="SAP-icons-v5",O="@ui5/webcomponents-icons";v(L,{pathData:m,ltr:M,collection:U,packageName:O});g();function W(n,e,t){return c`<div tabindex="${l(this._tabIndex)}" @click="${this._handleSelect}" @focusin="${this._focusin}" @focusout="${this._focusout}" @keydown="${this._keydown}" class="ui5-token--wrapper" role="option" aria-selected="${l(this.selected)}"><span class="ui5-token--text">${l(this.text)}</span>${this.readonly?void 0:j.call(this,n,e,t)}</div>`}function j(n,e,t){return c`<div class="ui5-token--icon">${this.closeIcon.length?H.call(this,n,e,t):K.call(this,n,e,t)}</div>`}function H(n,e,t){return c`<slot name="closeIcon" @click="${this._delete}"></slot>`}function K(n,e,t){return t?c`<${h("ui5-icon",e,t)} name="${l(this.iconURI)}" accessible-name="${l(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></${h("ui5-icon",e,t)}>`:c`<ui5-icon name="${l(this.iconURI)}" accessible-name="${l(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></ui5-icon>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>B);k("@ui5/webcomponents","sap_fiori_3",async()=>T);const V={packageName:"@ui5/webcomponents",fileName:"themes/Token.css",content:`:host {
	display: inline-block;
	background: var(--_ui5_token_background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);
	border-radius: var(--_ui5_token_border_radius);
	color: var(--_ui5_token_text_color);
	height: var(--_ui5_token_height);
	box-sizing: border-box;
}

:host(:not([single-token])) {
	margin-inline-end: var(--_ui5_token_right_margin);
}

:host([overflows]) {
	display: none;
}

:host(:not([readonly]):hover) {
	background: var(--sapButton_Hover_Background);
	border-color: var(--_ui5_token_hover_border_color);
}

:host([selected]:not([readonly])) {
	color: var(--sapButton_Selected_TextColor);
}

:host([selected]:not([readonly])) {
	background: var(--sapButton_Selected_Background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor);
	box-shadow: var(--_ui5_token_selected_box_shadow);
}

:host([selected]:not([readonly])) .ui5-token--wrapper {
	border-bottom: var(--_ui5_token_selected_internal_border_bottom);
	border-bottom-left-radius: var(--_ui5_token_selected_internal_border_bottom_radius);
	border-bottom-right-radius: var(--_ui5_token_selected_internal_border_bottom_radius);
}

:host([selected]:not([readonly]):hover) {
	background: var(--_ui5_token_selected_hover_background);
	border-color: var(--_ui5_token_selected_hover_border_color);
	box-shadow: var(--_ui5_token_selected_box_shadow);
}

:host([readonly]) {
	background: var(--_ui5_token_readonly_background);
	color: var(--_ui5_token_readonly_color);
}

:host([readonly]) .ui5-token--wrapper {
	padding: 0 var(--_ui5_token_readonly_padding);
}

:host([selected]) .ui5-token--wrapper:focus {
	outline: var(--_ui5_token_selected_focus_outline);
}

:host([selected]) .ui5-token--text,
:host([selected]) .ui5-token--icon {
	top: var(--_ui5_token_text_icon_top);
	position: relative;
}

:host([focused][selected]:not([readonly]):not(:hover)) {
	background: var(--sapButton_Selected_Background);
	color: var(--sapButton_Selected_TextColor);
	border: var(--_ui5_token_focused_selected_border);
}

.ui5-token--wrapper {
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	cursor: default;
	padding-inline-start: var(--_ui5_token_left_padding);
	box-sizing: border-box;
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	user-select: none;
}

.ui5-token--wrapper {
	position: relative;
}

:host([selected]) .ui5-token--wrapper {
	font-family: var(--_ui5_token_selected_text_font_family);
}

.ui5-token--wrapper:focus {
	outline-offset: var(--_ui5_token_outline_offset);
	outline: var(--_ui5_token_focus_outline);
}

.ui5-token--wrapper:focus::after {
	content: var(--ui5_token_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_token_focus_outline_border_radius);
	top: var(--_ui5_token_focus_offset);
	bottom: var(--_ui5_token_focus_offset);
	left: var(--_ui5_token_focus_offset);
	right: var(--_ui5_token_focus_offset);
}

:host([focused][selected]) .ui5-token--wrapper:focus::after {
	bottom: var(--_ui5_token_selected_focused_offset_bottom)
}

.ui5-token--text {
	white-space: nowrap;
}

.ui5-token--icon {
	display: flex;
}

:host([selected]) .ui5-token--icon > [ui5-icon],
:host([selected]) ::slotted([ui5-icon]) {
	color: var(--sapButton_Selected_TextColor);
}

.ui5-token--icon > [ui5-icon],
::slotted([ui5-icon]) {
	color: inherit;
	cursor: pointer;
	width: var(--_ui5_token_icon_size);
	height: var(--_ui5_token_icon_size);
	padding: var(--_ui5_token_icon_padding);
	color: var(--sapContent_IconColor);
}

:host([single-token]) {
	max-width: 100%;
}

:host([single-token]) .ui5-token--wrapper {
	max-width: 100%;
}

:host([single-token]) .ui5-token--text {
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
}
`};var i=globalThis&&globalThis.__decorate||function(n,e,t,a){var _=arguments.length,r=_<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,a);else for(var p=n.length-1;p>=0;p--)(d=n[p])&&(r=(_<3?d(r):_>3?d(e,t,r):d(e,t))||r);return _>3&&r&&Object.defineProperty(e,t,r),r},u;let o=u=class extends y{_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireEvent("delete")}_keydown(e){const t=z(e),a=I(e);!this.readonly&&(t||a)&&(e.preventDefault(),this.fireEvent("delete",{backSpace:t,delete:a})),(C(e)||R(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return u.i18nBundle.getText(E)}get iconURI(){return w().includes("sap_belize")?"sys-cancel":"decline"}get textDom(){return this.getDomRef().querySelector(".ui5-token--text")}get isTruncatable(){return Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth)}static async onDefine(){u.i18nBundle=await x("@ui5/webcomponents")}};i([s()],o.prototype,"text",void 0);i([s({type:Boolean})],o.prototype,"readonly",void 0);i([s({type:Boolean})],o.prototype,"selected",void 0);i([s({type:Boolean})],o.prototype,"overflows",void 0);i([s({type:Boolean})],o.prototype,"singleToken",void 0);i([s({type:Boolean})],o.prototype,"focused",void 0);i([s({type:Boolean})],o.prototype,"toBeDeleted",void 0);i([s({defaultValue:"-1",noAttribute:!0})],o.prototype,"_tabIndex",void 0);i([D()],o.prototype,"closeIcon",void 0);o=u=i([q({tag:"ui5-token",languageAware:!0,renderer:$,template:W,styles:V,dependencies:[S]}),f("select"),f("delete",{detail:{backSpace:{type:Boolean},delete:{type:Boolean}}})],o);o.define();const le=o;export{le as default};
//# sourceMappingURL=Token-18f5a5bd.js.map
