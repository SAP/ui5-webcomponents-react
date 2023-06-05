import{a as m,U as k,d as x}from"./UI5Element-a8445a25.js";import{e as y,l as a,a as g,b as w,p as n,c as L,d as T}from"./withWebComponent-884f99a7.js";import{e as $}from"./Icon-3e9cb840.js";import{b as E,c as v}from"./Icons-c55d12a5.js";import{g as A}from"./AriaLabelHelper-43a261ec.js";import{m as p}from"./MarkedEvents-b83081e9.js";import{W as b}from"./WrappingType-b81e595a.js";import{f as S,g as D}from"./i18n-defaults-fca59c5d.js";var f;(function(r){r.Default="Default",r.Subtle="Subtle",r.Emphasized="Emphasized"})(f||(f={}));const _=f;function R(r,e,o){return y`<a class="ui5-link-root" role="${a(this.effectiveAccRole)}" href="${a(this.parsedRef)}" target="${a(this.target)}" rel="${a(this._rel)}" tabindex="${a(this.effectiveTabIndex)}" ?disabled="${this.disabled}" aria-label="${a(this.ariaLabelText)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-expanded="${a(this.accessibilityAttributes.expanded)}" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}><slot></slot>${this.hasLinkType?B.call(this,r,e,o):void 0}</a>`}function B(r,e,o){return y`<span class="ui5-hidden-text">${a(this.linkTypeText)}</span>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);m("@ui5/webcomponents","sap_fiori_3",async()=>w);const I={packageName:"@ui5/webcomponents",fileName:"themes/Link.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5_link_text_decoration);text-shadow:var(--sapContent_TextShadow);white-space:nowrap;overflow-wrap:normal}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5_link_hover_text_decoration)}:host(:active){color:var(--sapLink_Active_Color);text-decoration:var(--_ui5_link_active_text_decoration)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design=Emphasized]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design=Subtle]){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5_link_subtle_text_decoration)}:host([design=Subtle]:hover:not(:active)){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5_link_subtle_text_decoration_hover)}:host([wrapping-type=Normal]){white-space:normal;overflow-wrap:break-word}.ui5-link-root{width:100%;display:inline-block;position:relative;overflow:hidden;text-overflow:ellipsis;outline:none;white-space:inherit;overflow-wrap:inherit;text-decoration:inherit;color:inherit}:host .ui5-link-root{border:var(--_ui5_link_border);border-radius:var(--_ui5_link_focus_border-radius)}:host([design=Subtle][focused]) .ui5-link-root,:host([focused]) .ui5-link-root{background-color:var(--_ui5_link_focus_background_color);border:var(--_ui5_link_border_focus);border-radius:var(--_ui5_link_focus_border-radius);text-shadow:none}:host([design=Subtle][focused]),:host([focused]){color:var(--_ui5_link_focus_color);text-decoration:var(--_ui5_link_focus_text_decoration)}:host([focused]:hover:not(:active)){color:var(--_ui5_link_focused_hover_text_color);text-decoration:var(--_ui5_link_focused_hover_text_decoration)}"};var i=globalThis&&globalThis.__decorate||function(r,e,o,l){var c=arguments.length,s=c<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,o):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,o,l);else for(var h=r.length-1;h>=0;h--)(u=r[h])&&(s=(c<3?u(s):c>3?u(e,o,s):u(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s},d;let t=d=class extends k{constructor(){super(),this._dummyAnchor=document.createElement("a")}onBeforeRendering(){const e=this.target!=="_self"&&this.href&&this._isCrossOrigin();this._rel=e?"noreferrer noopener":void 0}_isCrossOrigin(){const e=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===e.hostname&&this._dummyAnchor.port===e.port&&this._dummyAnchor.protocol===e.protocol)}get effectiveTabIndex(){var e;return this._tabIndex?this._tabIndex:this.disabled||!((e=this.textContent)!=null&&e.length)?"-1":"0"}get ariaLabelText(){return A(this)}get hasLinkType(){return this.design!==_.Default}static typeTextMappings(){return{Subtle:S,Emphasized:D}}get linkTypeText(){return d.i18nBundle.getText(d.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}static async onDefine(){d.i18nBundle=await x("@ui5/webcomponents")}_onclick(e){const{altKey:o,ctrlKey:l,metaKey:c,shiftKey:s}=e;e.stopImmediatePropagation(),p(e,"link"),this.fireEvent("click",{altKey:o,ctrlKey:l,metaKey:c,shiftKey:s},!0)||e.preventDefault()}_onfocusin(e){p(e,"link"),this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){E(e)&&!this.href?this._onclick(e):v(e)&&e.preventDefault(),p(e,"link")}_onkeyup(e){if(!v(e)){p(e,"link");return}if(this._onclick(e),this.href&&!e.defaultPrevented){const o=new MouseEvent("click");o.stopImmediatePropagation(),this.getDomRef().dispatchEvent(o)}}};i([n({type:Boolean})],t.prototype,"disabled",void 0);i([n()],t.prototype,"href",void 0);i([n()],t.prototype,"target",void 0);i([n({type:_,defaultValue:_.Default})],t.prototype,"design",void 0);i([n({type:b,defaultValue:b.None})],t.prototype,"wrappingType",void 0);i([n()],t.prototype,"accessibleName",void 0);i([n()],t.prototype,"accessibleNameRef",void 0);i([n({defaultValue:"link"})],t.prototype,"accessibleRole",void 0);i([n({type:Object})],t.prototype,"accessibilityAttributes",void 0);i([n({noAttribute:!0})],t.prototype,"_rel",void 0);i([n({noAttribute:!0})],t.prototype,"_tabIndex",void 0);i([n({type:Boolean})],t.prototype,"focused",void 0);t=d=i([L({tag:"ui5-link",languageAware:!0,renderer:T,template:R,styles:I}),$("click",{detail:{altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],t);t.define();const C=t,U=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as L,C as a,U as b};
//# sourceMappingURL=Link-8b80096c.js.map
