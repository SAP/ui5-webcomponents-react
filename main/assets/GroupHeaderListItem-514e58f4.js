import{e as f,l as p,a as h,b as g,p as b,c as _}from"./withWebComponent-d4224c1c.js";import{a as u,d as x}from"./UI5Element-78be0f3d.js";import{b as c}from"./ListItemBase-d5e2b9fa.js";import{a3 as v}from"./i18n-defaults-f002f496.js";import{o as w}from"./class-map-18f572ce.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./ResizeHandler-15c77712.js";import"./ItemNavigation-e8f3ce94.js";import"./Icons-26e87c01.js";import"./Icon-70a9e5b9.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-4ada5b66.js";import"./Label-263c93f2.js";import"./WrappingType-b81e595a.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";function y(i,e,o){return f`<ul part="native-li" tabindex="${p(this._tabIndex)}" class="ui5-ghli-root ${w(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:`.ui5-hidden-text {
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
`};var d=globalThis&&globalThis.__decorate||function(i,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,o,n);else for(var m=i.length-1;m>=0;m--)(s=i[m])&&(t=(a<3?s(t):a>3?s(e,o,t):s(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t},l;let r=l=class extends c{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await x("@ui5/webcomponents")}};d([b()],r.prototype,"accessibleName",void 0);r=l=d([_({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[c.styles,H]})],r);r.define();const Y=r;export{Y as default};
//# sourceMappingURL=GroupHeaderListItem-514e58f4.js.map
