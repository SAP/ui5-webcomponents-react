function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as g}from"./iframe-KtFHT45j.js";import{I as w}from"./Integer-kog98579.js";import{U as T}from"./UI5Element-9EXj3atz.js";import{a as y,l as C,s as E,p as l,c as S,f as B,w as M}from"./withWebComponent-LTFbYRvs.js";import{g as N}from"./PopupUtils-kUkkQSCb.js";import{i as x}from"./Keys-ZEuNsqmZ.js";import{r as b,q as D}from"./Boot-vTaFuwdG.js";import{s as R}from"./parameters-bundle.css-EKzfhWK3.js";var h;(function(e){e.TopStart="TopStart",e.TopCenter="TopCenter",e.TopEnd="TopEnd",e.MiddleStart="MiddleStart",e.MiddleCenter="MiddleCenter",e.MiddleEnd="MiddleEnd",e.BottomStart="BottomStart",e.BottomCenter="BottomCenter",e.BottomEnd="BottomEnd"})(h||(h={}));const f=h;function Y(e,t,n){return y`${this.domRendered?k.call(this,e,t,n):void 0} `}function k(e,t,n){return y`<div class="ui5-toast-root" role="alert" tabindex="${C(this._tabindex)}"><bdi><slot></slot></bdi></div>`}b("@ui5/webcomponents-theming","sap_horizon",async()=>E);b("@ui5/webcomponents","sap_horizon",async()=>R);const V={packageName:"@ui5/webcomponents",fileName:"themes/Toast.css.ts",content:`:host{font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor);font-size:var(--sapFontSize);position:fixed;display:none;box-sizing:border-box;max-width:15rem;overflow:hidden;background:var(--_ui5-v1-23-1_toast_background);box-shadow:var(--_ui5-v1-23-1_toast_shadow);border-radius:var(--sapElement_BorderCornerRadius);transition-property:opacity;opacity:1;word-wrap:break-word;text-align:center;text-overflow:ellipsis;white-space:pre-line;padding:1rem}.ui5-toast-root{height:100%;width:100%;padding:0;outline:none;box-sizing:border-box}:host([open]){display:block}:host(:not([placement])){bottom:var(--_ui5-v1-23-1_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopStart"]){top:var(--_ui5-v1-23-1_toast_vertical_offset);left:var(--_ui5-v1-23-1_toast_horizontal_offset)}:host([placement="MiddleStart"]){left:var(--_ui5-v1-23-1_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomStart"]){left:var(--_ui5-v1-23-1_toast_horizontal_offset);bottom:var(--_ui5-v1-23-1_toast_vertical_offset)}:host([placement="TopCenter"]){top:var(--_ui5-v1-23-1_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="MiddleCenter"]){left:50%;top:50%;transform:translate(-50%,-50%)}:host([placement="BottomCenter"]){bottom:var(--_ui5-v1-23-1_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopEnd"]){right:var(--_ui5-v1-23-1_toast_horizontal_offset);top:var(--_ui5-v1-23-1_toast_vertical_offset)}:host([placement="MiddleEnd"]){right:var(--_ui5-v1-23-1_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomEnd"]){right:var(--_ui5-v1-23-1_toast_horizontal_offset);bottom:var(--_ui5-v1-23-1_toast_vertical_offset)}:host([focused]){outline-width:var(--sapContent_FocusWidth);outline-style:var(--sapContent_FocusStyle);outline-color:var(--sapContent_FocusColor);outline-offset:var(--_ui5-v1-23-1_toast_offset_width)}
`};var s=function(e,t,n,u){var d=arguments.length,a=d<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,n):u,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,u);else for(var c=e.length-1;c>=0;c--)(m=e[c])&&(a=(d<3?m(a):d>3?m(t,n,a):m(t,n))||a);return d>3&&a&&Object.defineProperty(t,n,a),a};const v=500,q=1e3,i=[];let r,_=!1;const z=e=>{const t=e.metaKey||!D()&&e.ctrlKey,n=e.key&&e.key.toLowerCase()==="m",u=t&&e.shiftKey&&n,d=i.length;u&&(e.preventDefault(),d&&(i[0].focusable=!0,i[0].focused?(i[0].focused=!1,r==null||r.focus()):(r=document.activeElement,i[0].focus())))};let o=class extends T{constructor(){super(),this._reopen=!1,this.addEventListener("focusin",this._onfocusin.bind(this)),this.addEventListener("focusout",this._onfocusout.bind(this)),this.addEventListener("keydown",this._onkeydown.bind(this)),this.addEventListener("mouseover",this._onmouseover.bind(this)),this.addEventListener("mouseleave",this._onmouseleave.bind(this)),this.addEventListener("transitionend",this._ontransitionend.bind(this))}onBeforeRendering(){const t=Math.min(this.effectiveDuration/3,q);this.style.transitionDuration=this.open?`${t}ms`:"",this.style.transitionDelay=this.open?`${this.effectiveDuration-t}ms`:"",this.style.opacity=this.open&&!this.hover&&!this.focused?"0":"",this.style.zIndex=`${N()}`,_||(document.addEventListener("keydown",z),_=!0)}onAfterRendering(){this._reopen&&(this._reopen=!1,this._initiateOpening())}show(){this.open?(this._reopen=!0,this.open=!1):this._initiateOpening()}_onfocusin(){this.focusable&&(this.focused=!0)}_onfocusout(){this.focused=!1}get effectiveDuration(){return this.duration<v?v:this.duration}_initiateOpening(){this.domRendered=!0,requestAnimationFrame(()=>{this.open=!0,i.pop(),i.push(this)})}_ontransitionend(){this.hover||this.focused||(this.domRendered=!1,this.open=!1,this.focusable=!1,this.focused=!1)}_onmouseover(){this.hover=!0}_onmouseleave(){this.hover=!1}_onkeydown(t){x(t)&&(this.focused=!1,r==null||r.focus())}get _tabindex(){return this.focused?"0":"-1"}};s([l({validator:w,defaultValue:3e3})],o.prototype,"duration",void 0);s([l({type:f,defaultValue:f.BottomCenter})],o.prototype,"placement",void 0);s([l({type:Boolean})],o.prototype,"open",void 0);s([l({type:Boolean})],o.prototype,"hover",void 0);s([l({type:Boolean})],o.prototype,"domRendered",void 0);s([l({type:Boolean})],o.prototype,"focusable",void 0);s([l({type:Boolean})],o.prototype,"focused",void 0);o=s([S({tag:"ui5-toast",renderer:B,styles:V,template:Y})],o);o.define();const L=o,I=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),p=M("ui5-toast",["duration","placement"],[],[],[],()=>g(()=>Promise.resolve().then(()=>I),void 0,import.meta.url));p.displayName="Toast";try{p.displayName="Toast",p.__docgenInfo={description:`The \`Toast\` is a small, non-disruptive popup for success or information messages that
disappears automatically after a few seconds.

### Usage

#### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

#### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component\nremains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms\nand even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:{value:'"BottomCenter"'},description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="Toast",p.__docgenInfo={description:`The \`Toast\` is a small, non-disruptive popup for success or information messages that
disappears automatically after a few seconds.

### Usage

#### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

#### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component\nremains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms\nand even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:{value:'"BottomCenter"'},description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as T,f as a};
