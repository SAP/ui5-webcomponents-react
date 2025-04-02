import{b as h,j as r,F as _,p as f,d as v,s as n,m as x,l as g,A as w,E as B}from"./jsx-runtime-ByLklLy6.js";import{i as z}from"./i18n-CjR4HGlq.js";import{B as T}from"./Keys-B3oBAe0t.js";import{L as I}from"./Label-42unHoL8.js";import{B as k}from"./i18n-defaults-BXUwkpCs.js";import{d as E}from"./parameters-bundle.css-DHLNbl9v.js";var m;(function(s){s.Top="Top",s.Bottom="Bottom"})(m||(m={}));const b=m;function L(){return h("div",{class:"ui5-busy-indicator-root",children:[this._isBusy&&h("div",{class:"ui5-busy-indicator-busy-area",title:this.ariaTitle,tabindex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":"Busy","aria-labelledby":this.labelId,"data-sap-focus-ref":!0,children:[this.textPosition.top&&p.call(this),h("div",{class:"ui5-busy-indicator-circles-wrapper",children:[r("div",{class:"ui5-busy-indicator-circle circle-animation-0"}),r("div",{class:"ui5-busy-indicator-circle circle-animation-1"}),r("div",{class:"ui5-busy-indicator-circle circle-animation-2"})]}),this.textPosition.bottom&&p.call(this)]}),r("slot",{}),this._isBusy&&r("span",{"data-ui5-focus-redirect":!0,tabindex:0,onFocusIn:this._redirectFocus})]})}function p(){return r(_,{children:this.text&&r(I,{id:`${this._id}-label`,class:"ui5-busy-indicator-text",children:this.text})})}f("@ui5/webcomponents-theming","sap_horizon",async()=>v);f("@ui5/webcomponents","sap_horizon",async()=>E);const P=`:host(:not([hidden])){display:inline-block}:host([_is-busy]){color:var(--_ui5-v2-8-0_busy_indicator_color)}:host([size="S"]) .ui5-busy-indicator-root{min-width:1.625rem;min-height:.5rem}:host([size="S"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:1.75rem}:host([size="S"]) .ui5-busy-indicator-circle{width:.5rem;height:.5rem}:host([size="S"]) .ui5-busy-indicator-circle:first-child,:host([size="S"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.0625rem}:host(:not([size])) .ui5-busy-indicator-root,:host([size="M"]) .ui5-busy-indicator-root{min-width:3.375rem;min-height:1rem}:host([size="M"]) .ui5-busy-indicator-circle:first-child,:host([size="M"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.1875rem}:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,:host([size="M"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busy-indicator-circle,:host([size="M"]) .ui5-busy-indicator-circle{width:1rem;height:1rem}:host([size="L"]) .ui5-busy-indicator-root{min-width:6.5rem;min-height:2rem}:host([size="L"]) .ui5-busy-indicator-circle:first-child,:host([size="L"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.25rem}:host([size="L"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:3.25rem}:host([size="L"]) .ui5-busy-indicator-circle{width:2rem;height:2rem}.ui5-busy-indicator-root{display:flex;justify-content:center;align-items:center;position:relative;background-color:inherit;height:inherit;border-radius:inherit}.ui5-busy-indicator-busy-area{position:absolute;z-index:99;inset:0;display:flex;justify-content:center;align-items:center;background-color:inherit;flex-direction:column;border-radius:inherit}:host(:not(:empty)) .ui5-busy-indicator-busy-area{background-color:var(--_ui5-v2-8-0_busy_indicator_block_layer)}:host([desktop]) .ui5-busy-indicator-busy-area:focus,.ui5-busy-indicator-busy-area:focus-visible{outline:var(--_ui5-v2-8-0_busy_indicator_focus_outline);outline-offset:-2px}.ui5-busy-indicator-circles-wrapper{line-height:0}.ui5-busy-indicator-circle{display:inline-block;background-color:currentColor;border-radius:50%}.ui5-busy-indicator-circle:before{content:"";width:100%;height:100%;border-radius:100%}.circle-animation-0{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11)}.circle-animation-1{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.2s}.circle-animation-2{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.4s}.ui5-busy-indicator-text{width:100%;text-align:center}:host([text-placement="Top"]) .ui5-busy-indicator-text{margin-bottom:.5rem}:host(:not([text-placement])) .ui5-busy-indicator-text,:host([text-placement="Bottom"]) .ui5-busy-indicator-text{margin-top:.5rem}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}
`;var o=function(s,i,a,u){var c=arguments.length,e=c<3?i:u===null?u=Object.getOwnPropertyDescriptor(i,a):u,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,i,a,u);else for(var l=s.length-1;l>=0;l--)(d=s[l])&&(e=(c<3?d(e):c>3?d(i,a,e):d(i,a))||e);return c>3&&e&&Object.defineProperty(i,a,e),e},y;let t=y=class extends w{constructor(){super(),this.size="M",this.active=!1,this.delay=1e3,this.textPlacement="Bottom",this._isBusy=!1,this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0}),B()&&this.setAttribute("desktop","")}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}get ariaTitle(){return y.i18nBundle.getText(k)}get labelId(){return this.text?`${this._id}-label`:void 0}get textPosition(){return{top:this.text&&this.textPlacement===b.Top,bottom:this.text&&this.textPlacement===b.Bottom}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(i){this._isBusy&&(i.stopImmediatePropagation(),T(i)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(i){this._isBusy&&i.stopImmediatePropagation()}_redirectFocus(i){this.focusForward||(i.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};o([n()],t.prototype,"text",void 0);o([n()],t.prototype,"size",void 0);o([n({type:Boolean})],t.prototype,"active",void 0);o([n({type:Number})],t.prototype,"delay",void 0);o([n()],t.prototype,"textPlacement",void 0);o([n({type:Boolean})],t.prototype,"_isBusy",void 0);o([z("@ui5/webcomponents")],t,"i18nBundle",void 0);t=y=o([x({tag:"ui5-busy-indicator",languageAware:!0,styles:P,renderer:g,template:L})],t);t.define();const D=t;export{D as B};
