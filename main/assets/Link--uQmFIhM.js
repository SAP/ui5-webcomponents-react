import{r as y,U as k}from"./UI5Element-_cJDeK03.js";import{a as b,l as a,s as x,p as r,c as g,f as w}from"./withWebComponent--kEkWNJH.js";import{e as T}from"./event-lM5HanI-.js";import{m as L,n as v}from"./Keys-Mzj2D4aO.js";import{g as $}from"./AriaLabelHelper-RbKlVwzD.js";import{d as E}from"./i18nBundle-YDapVb1x.js";import{m as u}from"./MarkedEvents-aYv14vsS.js";import{W as m}from"./WrappingType-avPrqc94.js";import"./HasPopup-9BAMrqbD.js";import{h as A,i as S}from"./i18n-defaults-3YbdkqSs.js";import{s as D}from"./parameters-bundle.css-mPCp9TQx.js";var h;(function(n){n.Default="Default",n.Subtle="Subtle",n.Emphasized="Emphasized"})(h||(h={}));const _=h;function R(n,e,i){return b`<a class="ui5-link-root" role="${a(this.effectiveAccRole)}" href="${a(this.parsedRef)}" target="${a(this.target)}" rel="${a(this._rel)}" tabindex="${a(this.effectiveTabIndex)}" title="${a(this.title)}" ?disabled="${this.disabled}" aria-label="${a(this.ariaLabelText)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-expanded="${a(this.accessibilityAttributes.expanded)}" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}><slot></slot>${this.hasLinkType?B.call(this,n,e,i):void 0}</a>`}function B(n,e,i){return b`<span class="ui5-hidden-text">${a(this.linkTypeText)}</span>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>x);y("@ui5/webcomponents","sap_horizon",async()=>D);const I={packageName:"@ui5/webcomponents",fileName:"themes/Link.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5-v1-22-0-rc-3_link_text_decoration);text-shadow:var(--sapContent_TextShadow);white-space:nowrap;overflow-wrap:normal}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5-v1-22-0-rc-3_link_hover_text_decoration)}:host(:active){color:var(--sapLink_Active_Color);text-decoration:var(--_ui5-v1-22-0-rc-3_link_active_text_decoration)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design="Emphasized"]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design="Subtle"]){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v1-22-0-rc-3_link_subtle_text_decoration)}:host([design="Subtle"]:hover:not(:active)){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v1-22-0-rc-3_link_subtle_text_decoration_hover)}:host([wrapping-type="Normal"]){white-space:normal;overflow-wrap:break-word}.ui5-link-root{max-width:100%;display:inline-block;position:relative;overflow:hidden;text-overflow:ellipsis;outline:none;white-space:inherit;overflow-wrap:inherit;text-decoration:inherit;color:inherit}:host .ui5-link-root{border:var(--_ui5-v1-22-0-rc-3_link_border);border-radius:var(--_ui5-v1-22-0-rc-3_link_focus_border-radius)}:host([focused]) .ui5-link-root,:host([design="Subtle"][focused]) .ui5-link-root{background-color:var(--_ui5-v1-22-0-rc-3_link_focus_background_color);border:var(--_ui5-v1-22-0-rc-3_link_border_focus);border-radius:var(--_ui5-v1-22-0-rc-3_link_focus_border-radius);text-shadow:none}:host([focused]),:host([design="Subtle"][focused]){color:var(--_ui5-v1-22-0-rc-3_link_focus_color);text-decoration:var(--_ui5-v1-22-0-rc-3_link_focus_text_decoration)}:host([focused]:hover:not(:active)){color:var(--_ui5-v1-22-0-rc-3_link_focused_hover_text_color);text-decoration:var(--_ui5-v1-22-0-rc-3_link_focused_hover_text_decoration)}
`};var o=function(n,e,i,l){var c=arguments.length,s=c<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,i,l);else for(var f=n.length-1;f>=0;f--)(d=n[f])&&(s=(c<3?d(s):c>3?d(e,i,s):d(e,i))||s);return c>3&&s&&Object.defineProperty(e,i,s),s},p;let t=p=class extends k{constructor(){super(),this._dummyAnchor=document.createElement("a")}onBeforeRendering(){const e=this.target!=="_self"&&this.href&&this._isCrossOrigin();this._rel=e?"noreferrer noopener":void 0}_isCrossOrigin(){const e=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===e.hostname&&this._dummyAnchor.port===e.port&&this._dummyAnchor.protocol===e.protocol)}get effectiveTabIndex(){var e;return this.forcedTabIndex?this.forcedTabIndex:this.disabled||!((e=this.textContent)!=null&&e.length)?"-1":"0"}get ariaLabelText(){return $(this)}get hasLinkType(){return this.design!==_.Default}static typeTextMappings(){return{Subtle:A,Emphasized:S}}get linkTypeText(){return p.i18nBundle.getText(p.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}static async onDefine(){p.i18nBundle=await E("@ui5/webcomponents")}_onclick(e){const{altKey:i,ctrlKey:l,metaKey:c,shiftKey:s}=e;e.stopImmediatePropagation(),u(e,"link"),this.fireEvent("click",{altKey:i,ctrlKey:l,metaKey:c,shiftKey:s},!0)||e.preventDefault()}_onfocusin(e){u(e,"link"),this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){L(e)&&!this.href?this._onclick(e):v(e)&&e.preventDefault(),u(e,"link")}_onkeyup(e){if(!v(e)){u(e,"link");return}if(this._onclick(e),this.href&&!e.defaultPrevented){const i=new MouseEvent("click");i.stopImmediatePropagation(),this.getDomRef().dispatchEvent(i)}}};o([r({type:Boolean})],t.prototype,"disabled",void 0);o([r()],t.prototype,"title",void 0);o([r()],t.prototype,"href",void 0);o([r()],t.prototype,"target",void 0);o([r({type:_,defaultValue:_.Default})],t.prototype,"design",void 0);o([r({type:m,defaultValue:m.None})],t.prototype,"wrappingType",void 0);o([r()],t.prototype,"accessibleName",void 0);o([r()],t.prototype,"accessibleNameRef",void 0);o([r({defaultValue:"link"})],t.prototype,"accessibleRole",void 0);o([r({type:Object})],t.prototype,"accessibilityAttributes",void 0);o([r({noAttribute:!0})],t.prototype,"_rel",void 0);o([r({noAttribute:!0})],t.prototype,"forcedTabIndex",void 0);o([r({type:Boolean})],t.prototype,"focused",void 0);t=p=o([g({tag:"ui5-link",languageAware:!0,renderer:w,template:R,styles:I}),T("click",{detail:{altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],t);t.define();const C=t,Z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as L,C as a,Z as b};
