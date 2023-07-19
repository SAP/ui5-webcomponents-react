import{b as f,l as p,s as h,a as g,p as b,c as _}from"./withWebComponent-03662f7f.js";import{r as u,l as x}from"./UI5Element-11982a12.js";import{c}from"./ListItemBase-f65eaa12.js";import{G as v}from"./i18n-defaults-1a83921e.js";import{o as w}from"./class-map-341004db.js";import"./utils-f515de3e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ccf6a75d.js";import"./jsx-runtime-6b79a019.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./ResizeHandler-9ebe913c.js";import"./ItemNavigation-a882fb90.js";import"./Icons-234bf59e.js";import"./Icon-3498e12d.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0bd7794e.js";import"./Label-f867a533.js";import"./WrappingType-b81e595a.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";function y(i,e,o){return f`<ul part="native-li" tabindex="${p(this._tabIndex)}" class="ui5-ghli-root ${w(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:`.ui5-hidden-text {
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
//# sourceMappingURL=GroupHeaderListItem-0c0a31bd.js.map
