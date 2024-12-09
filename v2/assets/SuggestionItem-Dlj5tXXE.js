import{m,k as c,E as h,a as d,s as g,q as p,v as _,A as b}from"./withWebComponent-D2290JWW.js";import{e as f}from"./List-iVJpcOGI.js";import{o as v}from"./class-map-BHSYgJ9u.js";import{s as x}from"./parameters-bundle.css-DlWxkghp.js";function $(s,t,e){return m`<li part="native-li" data-sap-focus-ref tabindex="${c(this._effectiveTabIndex)}" class="${v(this.classes.main)}" @focusin="${this._onfocusin}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" draggable="${c(this.movable)}" @click="${this._onclick}" ><div part="content" id="content" class="ui5-li-content"><div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title">${h(this.markupText)}</span>${this.additionalText?y.call(this,s,t,e):void 0}</div></div></li>`}function y(s,t,e){return m`<span part="additional-text" class="ui5-li-additional-text">${c(this.additionalText)}</span>`}d("@ui5/webcomponents-theming","sap_horizon",async()=>g);d("@ui5/webcomponents","sap_horizon",async()=>x);const k={packageName:"@ui5/webcomponents",fileName:"themes/SuggestionItem.css.ts",content:`:host([ui5-suggestion-item]){height:auto;min-height:var(--_ui5-v2-5-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-root{min-height:var(--_ui5-v2-5-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}
`};var l=function(s,t,e,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,n);else for(var u=s.length-1;u>=0;u--)(r=s[u])&&(i=(a<3?r(i):a>3?r(t,e,i):r(t,e))||i);return a>3&&i&&Object.defineProperty(t,e,i),i};let o=class extends f{constructor(){super(...arguments),this.markupText=""}onEnterDOM(){b()&&this.setAttribute("desktop","")}};l([p()],o.prototype,"text",void 0);l([p()],o.prototype,"additionalText",void 0);l([p()],o.prototype,"markupText",void 0);o=l([_({tag:"ui5-suggestion-item",template:$,styles:[f.styles,k]})],o);o.define();const O=o;export{O as S};
