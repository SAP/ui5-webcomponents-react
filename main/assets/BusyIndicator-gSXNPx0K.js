import{r as p,U as _}from"./UI5Element-66_7Xn_3.js";import{b as a,l as s,d as b,s as v,a as g,p as u,c as w,f as x}from"./withWebComponent-2sjwM42G.js";import{d as z}from"./i18nBundle-Q0g0h3jg.js";import{m as I}from"./Icons-nm0Q71Sx.js";import{I as B}from"./Integer-kog98579.js";import T from"./Label-h0RP0plm.js";import{o as $}from"./class-map--IQ_mtyb.js";import{B as k}from"./i18n-defaults-RBzcmDt8.js";var y;(function(e){e.Small="Small",e.Medium="Medium",e.Large="Large"})(y||(y={}));const f=y;function E(e,i,t){return a`<div class="${$(this.classes.root)}">${this._isBusy?L.call(this,e,i,t):void 0}<slot></slot>${this._isBusy?S.call(this,e,i,t):void 0}</div>`}function L(e,i,t){return a`<div class="ui5-busy-indicator-busy-area" title="${s(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${s(this.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.text?M.call(this,e,i,t):void 0}</div>`}function M(e,i,t){return t?a`<${b("ui5-label",i,t)} id="${s(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${s(this.text)}</${b("ui5-label",i,t)}>`:a`<ui5-label id="${s(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${s(this.text)}</ui5-label>`}function S(e,i,t){return a`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}p("@ui5/webcomponents-theming","sap_horizon",async()=>v);p("@ui5/webcomponents","sap_horizon",async()=>g);const D={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css",content:':host(:not([hidden])){display:inline-block}:host([_is-busy]){color:var(--_ui5-v1-19-0_busy_indicator_color)}:host([size=Small]) .ui5-busy-indicator-root{min-height:.5rem;min-width:1.625rem}:host([size=Small][text]:not([text=""])) .ui5-busy-indicator-root{min-height:1.75rem}:host([size=Small]) .ui5-busy-indicator-circle{height:.5rem;width:.5rem}:host([size=Small]) .ui5-busy-indicator-circle:first-child,:host([size=Small]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.0625rem}:host(:not([size])) .ui5-busy-indicator-root,:host([size=Medium]) .ui5-busy-indicator-root{min-height:1rem;min-width:3.375rem}:host([size=Medium]) .ui5-busy-indicator-circle:first-child,:host([size=Medium]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.1875rem}:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,:host([size=Medium][text]:not([text=""])) .ui5-busy-indicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busy-indicator-circle,:host([size=Medium]) .ui5-busy-indicator-circle{height:1rem;width:1rem}:host([size=Large]) .ui5-busy-indicator-root{min-height:2rem;min-width:6.5rem}:host([size=Large]) .ui5-busy-indicator-circle:first-child,:host([size=Large]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.25rem}:host([size=Large][text]:not([text=""])) .ui5-busy-indicator-root{min-height:3.25rem}:host([size=Large]) .ui5-busy-indicator-circle{height:2rem;width:2rem}.ui5-busy-indicator-root{align-items:center;background-color:inherit;display:flex;height:inherit;justify-content:center;position:relative}.ui5-busy-indicator-busy-area{align-items:center;background-color:inherit;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:99}.ui5-busy-indicator-busy-area:focus{border-radius:var(--_ui5-v1-19-0_busy_indicator_focus_border_radius);outline:var(--_ui5-v1-19-0_busy_indicator_focus_outline);outline-offset:-2px}.ui5-busy-indicator-circles-wrapper{line-height:0}.ui5-busy-indicator-circle{background-color:currentColor;border-radius:50%;display:inline-block}.ui5-busy-indicator-circle:before{border-radius:100%;content:"";height:100%;width:100%}.circle-animation-0{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite}.circle-animation-1{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.2s}.circle-animation-2{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.4s}.ui5-busy-indicator-text{margin-top:.25rem;text-align:center;width:100%}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}'};var n=function(e,i,t,c){var d=arguments.length,o=d<3?i:c===null?c=Object.getOwnPropertyDescriptor(i,t):c,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,i,t,c);else for(var m=e.length-1;m>=0;m--)(l=e[m])&&(o=(d<3?l(o):d>3?l(i,t,o):l(i,t))||o);return d>3&&o&&Object.defineProperty(i,t,o),o},h;let r=h=class extends _{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){h.i18nBundle=await z("@ui5/webcomponents")}get ariaTitle(){return h.i18nBundle.getText(k)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(i){this._isBusy&&(i.stopImmediatePropagation(),I(i)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(i){this._isBusy&&i.stopImmediatePropagation()}_redirectFocus(i){this.focusForward||(i.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};n([u()],r.prototype,"text",void 0);n([u({type:f,defaultValue:f.Medium})],r.prototype,"size",void 0);n([u({type:Boolean})],r.prototype,"active",void 0);n([u({validator:B,defaultValue:1e3})],r.prototype,"delay",void 0);n([u({type:Boolean})],r.prototype,"_isBusy",void 0);r=h=n([w({tag:"ui5-busy-indicator",languageAware:!0,styles:D,renderer:x,template:E,dependencies:[T]})],r);r.define();const O=r,C=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{f as B,O as a,C as b};
//# sourceMappingURL=BusyIndicator-gSXNPx0K.js.map
