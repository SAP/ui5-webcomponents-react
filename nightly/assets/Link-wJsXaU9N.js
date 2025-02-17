import{b,j as d,p as _,d as m,s as o,m as k,k as x,S as y,A as g,G as w,H as T,I as A}from"./jsx-runtime-28PG-PhA.js";import{l as D}from"./event-strict-DgQLNDEV.js";import{b as I,i as f}from"./Keys-BF9NgJbR.js";import{A as L}from"./AccessibilityTextsHelper-4hgGqLyb.js";import{i as S}from"./i18n-oG4QvOAt.js";import{n as E}from"./toLowercaseEnumValue-C_8o5td_.js";import{I as v}from"./Icon-BA-Z5X-C.js";import{n as R,o as C}from"./i18n-defaults-DIUd5-_G.js";import{d as z}from"./parameters-bundle.css-Ct2Rzfjz.js";var h;(function(s){s.Default="Default",s.Subtle="Subtle",s.Emphasized="Emphasized"})(h||(h={}));function N(){return b("a",{part:"root",class:"ui5-link-root",role:this.effectiveAccRole,href:this.parsedRef,target:this.target,rel:this._rel,tabindex:this.effectiveTabIndex,title:this.tooltip,"aria-disabled":this.disabled,"aria-label":this.ariaLabelText,"aria-haspopup":this._hasPopup,"aria-expanded":this.accessibilityAttributes.expanded,"aria-current":this.accessibilityAttributes.current,"aria-description":this.ariaDescriptionText,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:[this.icon&&d(v,{class:"ui5-link-icon",name:this.icon,mode:"Decorative",part:"icon"}),d("span",{class:"ui5-link-text",children:d("slot",{})}),this.hasLinkType&&d("span",{class:"ui5-hidden-text",children:this.linkTypeText}),this.endIcon&&d(v,{class:"ui5-link-end-icon",name:this.endIcon,mode:"Decorative",part:"endIcon"})]})}_("@ui5/webcomponents-theming","sap_horizon",async()=>m);_("@ui5/webcomponents","sap_horizon",async()=>z);const P=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5-v2-7-3_link_text_decoration);text-shadow:var(--sapContent_TextShadow);white-space:normal;overflow-wrap:break-word}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5-v2-7-3_link_hover_text_decoration)}:host(:active){color:var(--sapLink_Active_Color);text-decoration:var(--_ui5-v2-7-3_link_active_text_decoration)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design="Emphasized"]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design="Subtle"]){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v2-7-3_link_subtle_text_decoration)}:host([design="Subtle"]:hover:not(:active)){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v2-7-3_link_subtle_text_decoration_hover)}:host([wrapping-type="None"]){white-space:nowrap;overflow-wrap:normal}.ui5-link-root{max-width:100%;display:inline-block;position:relative;overflow:hidden;text-overflow:ellipsis;outline:none;white-space:inherit;overflow-wrap:inherit;text-decoration:inherit;color:inherit}:host([wrapping-type="None"][end-icon]) .ui5-link-root{display:inline-flex;align-items:end}:host .ui5-link-root{outline-offset:-.0625rem;border-radius:var(--_ui5-v2-7-3_link_focus_border-radius)}.ui5-link-icon,.ui5-link-end-icon{color:inherit;flex-shrink:0}.ui5-link-icon{float:inline-start;margin-inline-end:.125rem}.ui5-link-end-icon{margin-inline-start:.125rem;vertical-align:bottom}.ui5-link-text{overflow:hidden;text-overflow:ellipsis}.ui5-link-root:focus-visible,:host([desktop]) .ui5-link-root:focus-within,:host([design="Subtle"]) .ui5-link-root:focus-visible,:host([design="Subtle"][desktop]) .ui5-link-root:focus-within{background-color:var(--_ui5-v2-7-3_link_focus_background_color);outline:var(--_ui5-v2-7-3_link_outline);border-radius:var(--_ui5-v2-7-3_link_focus_border-radius);text-shadow:none;color:var(--_ui5-v2-7-3_link_focus_color)}:host(:not([desktop])) .ui5-link-root:focus-visible,:host([desktop]:focus-within),:host([design="Subtle"][desktop]:focus-within){text-decoration:var(--_ui5-v2-7-3_link_focus_text_decoration)}:host([desktop]:hover:not(:active):focus-within),:host([design="Subtle"][desktop]:hover:not(:active):focus-within){color:var(--_ui5-v2-7-3_link_focused_hover_text_color);text-decoration:var(--_ui5-v2-7-3_link_focused_hover_text_decoration)}
`;var i=function(s,e,n,a){var l=arguments.length,r=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,n,a);else for(var u=s.length-1;u>=0;u--)(c=s[u])&&(r=(l<3?c(r):l>3?c(e,n,r):c(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},p;let t=p=class extends y{constructor(){super(),this.disabled=!1,this.design="Default",this.wrappingType="Normal",this.accessibleRole="Link",this.accessibilityAttributes={},this._dummyAnchor=document.createElement("a")}onEnterDOM(){g()&&this.setAttribute("desktop","")}onBeforeRendering(){const e=this.target!=="_self"&&this.href&&this._isCrossOrigin(this.href);this._rel=e?"noreferrer noopener":void 0}_isCrossOrigin(e){return this._dummyAnchor.href=e,!(this._dummyAnchor.hostname===w()&&this._dummyAnchor.port===T()&&this._dummyAnchor.protocol===A())}get effectiveTabIndex(){var e;return this.forcedTabIndex?Number.parseInt(this.forcedTabIndex):this.disabled||!((e=this.textContent)!=null&&e.length)?-1:0}get ariaLabelText(){return L(this)}get hasLinkType(){return this.design!==h.Default}static typeTextMappings(){return{Subtle:C,Emphasized:R}}get linkTypeText(){return p.i18nBundle.getText(p.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return E(this.accessibleRole)}get ariaDescriptionText(){return this.accessibleDescription===""?void 0:this.accessibleDescription}get _hasPopup(){return this.accessibilityAttributes.hasPopup}_onclick(e){const{altKey:n,ctrlKey:a,metaKey:l,shiftKey:r}=e;e.stopImmediatePropagation(),this.fireDecoratorEvent("click",{altKey:n,ctrlKey:a,metaKey:l,shiftKey:r})||e.preventDefault()}_onkeydown(e){I(e)&&!this.href?this._onclick(e):f(e)&&e.preventDefault()}_onkeyup(e){if(f(e)&&(this._onclick(e),this.href&&!e.defaultPrevented)){const n=new MouseEvent("click");n.stopImmediatePropagation(),this.getDomRef().dispatchEvent(n)}}};i([o({type:Boolean})],t.prototype,"disabled",void 0);i([o()],t.prototype,"tooltip",void 0);i([o()],t.prototype,"href",void 0);i([o()],t.prototype,"target",void 0);i([o()],t.prototype,"design",void 0);i([o()],t.prototype,"wrappingType",void 0);i([o()],t.prototype,"accessibleName",void 0);i([o()],t.prototype,"accessibleNameRef",void 0);i([o()],t.prototype,"accessibleRole",void 0);i([o({type:Object})],t.prototype,"accessibilityAttributes",void 0);i([o()],t.prototype,"accessibleDescription",void 0);i([o()],t.prototype,"icon",void 0);i([o()],t.prototype,"endIcon",void 0);i([o({noAttribute:!0})],t.prototype,"_rel",void 0);i([o({noAttribute:!0})],t.prototype,"forcedTabIndex",void 0);i([S("@ui5/webcomponents")],t,"i18nBundle",void 0);t=p=i([k({tag:"ui5-link",languageAware:!0,renderer:x,template:N,styles:P}),D("click",{bubbles:!0,cancelable:!0})],t);t.define();const Z=t;export{h as L,Z as a};
