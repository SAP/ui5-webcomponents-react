import{j as c,F as b,p as _,d as y,s as d,m as w,y as g,E as T,H as C,w as E}from"./jsx-runtime-CkEx_Gfk.js";import{H as F}from"./Keys-B3oBAe0t.js";import{l as S}from"./event-strict-DgQLNDEV.js";import{d as N}from"./parameters-bundle.css-Dkq9X0yL.js";function D(){return c(b,{children:this.open&&c("div",{class:"ui5-toast-root",role:"alert",tabindex:this._tabindex,children:c("bdi",{children:c("slot",{})})})})}_("@ui5/webcomponents-theming","sap_horizon",async()=>y);_("@ui5/webcomponents","sap_horizon",async()=>N);const x=`:host{font-family:"72override",var(--sapFontFamily);color:var(--sapContent_ContrastTextColor);font-size:var(--sapFontSize);position:fixed;display:none;box-sizing:border-box;max-width:15rem;overflow:hidden;background:var(--_ui5-v2-10-0_toast_background);box-shadow:var(--_ui5-v2-10-0_toast_shadow);border-radius:var(--sapElement_BorderCornerRadius);transition-property:opacity;opacity:1;word-wrap:break-word;text-align:center;text-overflow:ellipsis;white-space:pre-line;padding:1rem;inset:unset;margin:0;border:none}.ui5-toast-root{height:100%;width:100%;padding:0;outline:none;box-sizing:border-box}:host([open]){display:block}:host(:not([placement])){bottom:var(--_ui5-v2-10-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopStart"]){top:var(--_ui5-v2-10-0_toast_vertical_offset);left:var(--_ui5-v2-10-0_toast_horizontal_offset)}:host([placement="MiddleStart"]){left:var(--_ui5-v2-10-0_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomStart"]){left:var(--_ui5-v2-10-0_toast_horizontal_offset);bottom:var(--_ui5-v2-10-0_toast_vertical_offset)}:host([placement="TopCenter"]){top:var(--_ui5-v2-10-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="MiddleCenter"]){left:50%;top:50%;transform:translate(-50%,-50%)}:host([placement="BottomCenter"]){bottom:var(--_ui5-v2-10-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopEnd"]){right:var(--_ui5-v2-10-0_toast_horizontal_offset);top:var(--_ui5-v2-10-0_toast_vertical_offset)}:host([placement="MiddleEnd"]){right:var(--_ui5-v2-10-0_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomEnd"]){right:var(--_ui5-v2-10-0_toast_horizontal_offset);bottom:var(--_ui5-v2-10-0_toast_vertical_offset)}:host([focused]){outline-width:var(--sapContent_FocusWidth);outline-style:var(--sapContent_FocusStyle);outline-color:var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-10-0_toast_offset_width)}
`;var r=function(e,t,s,l){var u=arguments.length,n=u<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,s):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,s,l);else for(var h=e.length-1;h>=0;h--)(p=e[h])&&(n=(u<3?p(n):u>3?p(t,s,n):p(t,s))||n);return u>3&&n&&Object.defineProperty(t,s,n),n};const f=500,B=1e3,a=[];let i,v=!1;const M=e=>{const t=e.metaKey||!C()&&e.ctrlKey,s=e.key&&e.key.toLowerCase()==="m",l=t&&e.shiftKey&&s,u=a.length;l&&(e.preventDefault(),u&&(a[0].focusable=!0,a[0].focused?(a[0].focused=!1,i==null||i.focus()):(i=document.activeElement,a[0].focus())))};let o=class extends T{constructor(){super(),this.duration=3e3,this.placement="BottomCenter",this.open=!1,this.hover=!1,this.focusable=!1,this.focused=!1,this._onfocusinFn=this._onfocusin.bind(this),this._onfocusoutFn=this._onfocusout.bind(this),this._onkeydownFn=this._onkeydown.bind(this),this._onmouseoverFn=this._onmouseover.bind(this),this._onmouseleaveFn=this._onmouseleave.bind(this),this._ontransitionendFn=this._ontransitionend.bind(this)}onBeforeRendering(){this.open&&(a.pop(),a.push(this)),requestAnimationFrame(()=>{const t=Math.min(this.effectiveDuration/3,B);this.style.transitionDuration=this.open?`${t}ms`:"",this.style.transitionDelay=this.open?`${this.effectiveDuration-t}ms`:"",this.style.opacity=this.open&&!this.hover&&!this.focused?"0":""}),v||(document.addEventListener("keydown",M),v=!0)}onAfterRendering(){this.hasAttribute("popover")||this.setAttribute("popover","manual"),this.open&&this.showPopover()}_onfocusin(){this.focusable&&(this.focused=!0)}_onfocusout(){this.focused=!1}get effectiveDuration(){return this.duration<f?f:this.duration}_ontransitionend(){this.hover||this.focused||(this.open=!1,this.focusable=!1,this.focused=!1,this.fireDecoratorEvent("close"),this.hidePopover())}_onmouseover(){this.hover=!0}_onmouseleave(){this.hover=!1}_onkeydown(t){F(t)&&(this.focused=!1,i==null||i.focus())}get _tabindex(){return this.focused?0:-1}onEnterDOM(){this.addEventListener("focusin",this._onfocusinFn),this.addEventListener("focusout",this._onfocusoutFn),this.addEventListener("keydown",this._onkeydownFn),this.addEventListener("mouseover",this._onmouseoverFn),this.addEventListener("mouseleave",this._onmouseleaveFn),this.addEventListener("transitionend",this._ontransitionendFn),this.addEventListener("transitioncancel",this._ontransitionendFn)}onExitDOM(){this.removeEventListener("focusin",this._onfocusinFn),this.removeEventListener("focusout",this._onfocusoutFn),this.removeEventListener("keydown",this._onkeydownFn),this.removeEventListener("mouseover",this._onmouseoverFn),this.removeEventListener("mouseleave",this._onmouseleaveFn),this.removeEventListener("transitionend",this._ontransitionendFn),this.removeEventListener("transitioncancel",this._ontransitionendFn)}};r([d({type:Number})],o.prototype,"duration",void 0);r([d()],o.prototype,"placement",void 0);r([d({type:Boolean})],o.prototype,"open",void 0);r([d({type:Boolean})],o.prototype,"hover",void 0);r([d({type:Boolean})],o.prototype,"focusable",void 0);r([d({type:Boolean})],o.prototype,"focused",void 0);o=r([w({tag:"ui5-toast",renderer:g,styles:x,template:D}),S("close",{bubbles:!0})],o);o.define();const m=E("ui5-toast",["duration","placement"],["open"],[],["close"]);m.displayName="Toast";try{m.displayName="Toast",m.__docgenInfo={description:`The \`Toast\` is a small, non-disruptive popup for success or information messages that
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired after the component is auto closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToastDomRef, never>) => void"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component\nremains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms\nand even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},open:{defaultValue:{value:"false"},description:`Indicates whether the component is open (visible).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:'"BottomCenter"'},description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="Toast",m.__docgenInfo={description:`The \`Toast\` is a small, non-disruptive popup for success or information messages that
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired after the component is auto closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToastDomRef, never>) => void"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component\nremains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms\nand even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},open:{defaultValue:{value:"false"},description:`Indicates whether the component is open (visible).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:'"BottomCenter"'},description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{m as T};
