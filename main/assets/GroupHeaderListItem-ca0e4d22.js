import{b as f,l as p,s as h,a as g,p as b,c as _}from"./withWebComponent-7d7e5133.js";import{r as u,l as x}from"./UI5Element-a4bd3d38.js";import{c}from"./ListItemBase-e006c78e.js";import{G as v}from"./i18n-defaults-d675a36d.js";import{o as w}from"./class-map-0ab40ab9.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./ResizeHandler-0af4416f.js";import"./ItemNavigation-0734b7c0.js";import"./Icons-74c917eb.js";import"./Icon-42236945.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1653a4a5.js";import"./Label-34e3bd87.js";import"./WrappingType-b81e595a.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";function y(i,e,o){return f`<ul part="native-li" tabindex="${p(this._tabIndex)}" class="ui5-ghli-root ${w(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	height: var(--_ui5_group_header_list_item_height);
	background: var(--ui5-group-header-listitem-background-color);
	color: var(--sapList_TableGroupHeaderTextColor);
}

:host([has-border]) {
	border-bottom: 1px solid var(--sapList_GroupHeaderBorderColor);
}

.ui5-li-root.ui5-ghli-root {
	padding-top: 0.5rem;
	color: currentColor;
	font-size: var(--sapFontHeader6Size);
	font-weight: normal;
	line-height: 2rem;
	margin: 0;
}

.ui5-ghli-title {
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: bold;
}
`};var d=globalThis&&globalThis.__decorate||function(i,e,o,n){var s=arguments.length,t=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,o,n);else for(var m=i.length-1;m>=0;m--)(a=i[m])&&(t=(s<3?a(t):s>3?a(e,o,t):a(e,o))||t);return s>3&&t&&Object.defineProperty(e,o,t),t},l;let r=l=class extends c{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await x("@ui5/webcomponents")}};d([b()],r.prototype,"accessibleName",void 0);r=l=d([_({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[c.styles,H]})],r);r.define();const Y=r;export{Y as default};
//# sourceMappingURL=GroupHeaderListItem-ca0e4d22.js.map
