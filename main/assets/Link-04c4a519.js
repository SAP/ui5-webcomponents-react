import{a as m,U as k,d as x}from"./UI5Element-78be0f3d.js";import{e as y,l as a,a as g,b as w,p as i,c as L,d as T}from"./withWebComponent-d4224c1c.js";import{e as $}from"./Icon-70a9e5b9.js";import{c as E,b as v}from"./Icons-26e87c01.js";import{g as A}from"./AriaLabelHelper-43a261ec.js";import{m as d}from"./MarkedEvents-b83081e9.js";import{W as b}from"./WrappingType-b81e595a.js";import{L as S,l as D}from"./i18n-defaults-f002f496.js";var f;(function(r){r.Default="Default",r.Subtle="Subtle",r.Emphasized="Emphasized"})(f||(f={}));const _=f;function R(r,t,n){return y`<a class="ui5-link-root" role="${a(this.effectiveAccRole)}" href="${a(this.parsedRef)}" target="${a(this.target)}" rel="${a(this._rel)}" tabindex="${a(this.effectiveTabIndex)}" ?disabled="${this.disabled}" aria-label="${a(this.ariaLabelText)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-expanded="${a(this.accessibilityAttributes.expanded)}" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}><slot></slot>${this.hasLinkType?B.call(this,r,t,n):void 0}</a>`}function B(r,t,n){return y`<span class="ui5-hidden-text">${a(this.linkTypeText)}</span>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);m("@ui5/webcomponents","sap_fiori_3",async()=>w);const I={packageName:"@ui5/webcomponents",fileName:"themes/Link.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-flex;
}

:host {
	max-width: 100%;
	color: var(--sapLinkColor);
	font-family: var(--sapFontFamily);
	font-size: var(--sapFontSize);
	cursor: pointer;
	outline: none;
	text-decoration: var(--_ui5_link_text_decoration);
	text-shadow: var(--sapContent_TextShadow);
	white-space: nowrap;
	overflow-wrap: normal;
}

:host(:hover) {
	color: var(--sapLink_Hover_Color);
	text-decoration: var(--_ui5_link_hover_text_decoration);
}

:host(:active) {
	color: var(--sapLink_Active_Color);
	text-decoration: var(--_ui5_link_active_text_decoration);
}

:host([disabled]) {
	pointer-events: none;
}

:host([disabled]) .ui5-link-root {
	text-shadow: none;
	outline: none;
	cursor: default;
	pointer-events: none;
	opacity: var(--sapContent_DisabledOpacity);
}

:host([design="Emphasized"]) .ui5-link-root {
	font-family: var(--sapFontBoldFamily);
}

:host([design="Subtle"]) {
	color: var(--sapLink_SubtleColor);
	text-decoration: var(--_ui5_link_subtle_text_decoration);
}

:host([design="Subtle"]:hover:not(:active)) {
	color: var(--sapLink_SubtleColor);
	text-decoration: var(--_ui5_link_subtle_text_decoration_hover);
}

:host([wrapping-type="Normal"]) {
	white-space: normal;
	overflow-wrap: break-word;
}

.ui5-link-root {
	max-width: 100%;
	display: inline-block;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	outline: none;
	white-space: inherit;
	overflow-wrap: inherit;
	text-decoration: inherit;
	color: inherit;
}

:host .ui5-link-root {
	border: var(--_ui5_link_border);
	border-radius: var(--_ui5_link_focus_border-radius);
}

:host([focused]) .ui5-link-root,
:host([design="Subtle"][focused]) .ui5-link-root {
	background-color: var(--_ui5_link_focus_background_color);
	border: var(--_ui5_link_border_focus);
	border-radius: var(--_ui5_link_focus_border-radius);
	text-shadow: none;
}

:host([focused]),
:host([design="Subtle"][focused]) {
	color:  var(--_ui5_link_focus_color);
	text-decoration: var(--_ui5_link_focus_text_decoration);
}

:host([focused]:hover:not(:active)) {
	color: var(--_ui5_link_focused_hover_text_color);
	text-decoration: var(--_ui5_link_focused_hover_text_decoration);
}`};var o=globalThis&&globalThis.__decorate||function(r,t,n,l){var c=arguments.length,s=c<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,n):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,t,n,l);else for(var h=r.length-1;h>=0;h--)(u=r[h])&&(s=(c<3?u(s):c>3?u(t,n,s):u(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},p;let e=p=class extends k{constructor(){super(),this._dummyAnchor=document.createElement("a")}onBeforeRendering(){const t=this.target!=="_self"&&this.href&&this._isCrossOrigin();this._rel=t?"noreferrer noopener":void 0}_isCrossOrigin(){const t=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===t.hostname&&this._dummyAnchor.port===t.port&&this._dummyAnchor.protocol===t.protocol)}get effectiveTabIndex(){var t;return this._tabIndex?this._tabIndex:this.disabled||!((t=this.textContent)!=null&&t.length)?"-1":"0"}get ariaLabelText(){return A(this)}get hasLinkType(){return this.design!==_.Default}static typeTextMappings(){return{Subtle:S,Emphasized:D}}get linkTypeText(){return p.i18nBundle.getText(p.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}static async onDefine(){p.i18nBundle=await x("@ui5/webcomponents")}_onclick(t){const{altKey:n,ctrlKey:l,metaKey:c,shiftKey:s}=t;t.stopImmediatePropagation(),d(t,"link"),this.fireEvent("click",{altKey:n,ctrlKey:l,metaKey:c,shiftKey:s},!0)||t.preventDefault()}_onfocusin(t){d(t,"link"),this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(t){E(t)&&!this.href?this._onclick(t):v(t)&&t.preventDefault(),d(t,"link")}_onkeyup(t){if(!v(t)){d(t,"link");return}if(this._onclick(t),this.href&&!t.defaultPrevented){const n=new MouseEvent("click");n.stopImmediatePropagation(),this.getDomRef().dispatchEvent(n)}}};o([i({type:Boolean})],e.prototype,"disabled",void 0);o([i()],e.prototype,"href",void 0);o([i()],e.prototype,"target",void 0);o([i({type:_,defaultValue:_.Default})],e.prototype,"design",void 0);o([i({type:b,defaultValue:b.None})],e.prototype,"wrappingType",void 0);o([i()],e.prototype,"accessibleName",void 0);o([i()],e.prototype,"accessibleNameRef",void 0);o([i({defaultValue:"link"})],e.prototype,"accessibleRole",void 0);o([i({type:Object})],e.prototype,"accessibilityAttributes",void 0);o([i({noAttribute:!0})],e.prototype,"_rel",void 0);o([i({noAttribute:!0})],e.prototype,"_tabIndex",void 0);o([i({type:Boolean})],e.prototype,"focused",void 0);e=p=o([L({tag:"ui5-link",languageAware:!0,renderer:T,template:R,styles:I}),$("click",{detail:{altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],e);e.define();const C=e,U=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as L,C as a,U as b};
//# sourceMappingURL=Link-04c4a519.js.map
