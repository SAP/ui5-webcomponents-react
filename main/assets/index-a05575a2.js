import{_ as v}from"./iframe-d30692fd.js";import{I as y}from"./Integer-f7f172c9.js";import{a as h,U as b}from"./UI5Element-b6f0d493.js";import{e as _,a as g,b as T,p as i,c as w,d as C,w as S}from"./withWebComponent-7b9bd1ee.js";import{b as B}from"./PopupUtils-46fb16e4.js";import{s as E}from"./style-map-0c64293c.js";var m;(function(t){t.TopStart="TopStart",t.TopCenter="TopCenter",t.TopEnd="TopEnd",t.MiddleStart="MiddleStart",t.MiddleCenter="MiddleCenter",t.MiddleEnd="MiddleEnd",t.BottomStart="BottomStart",t.BottomCenter="BottomCenter",t.BottomEnd="BottomEnd"})(m||(m={}));const f=m;function M(t,e,n){return _`${this.domRendered?x.call(this,t,e,n):void 0} `}function x(t,e,n){return _`<div class="ui5-toast-root" role="alert" style="${E(this.styles.root)}" @mouseover="${this._onmouseover}" @mouseleave="${this._onmouseleave}" @transitionend="${this._ontransitionend}"><bdi><slot></slot></bdi></div>`}h("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);h("@ui5/webcomponents","sap_fiori_3",async()=>T);const N={packageName:"@ui5/webcomponents",fileName:"themes/Toast.css",content:`:host {
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapList_TextColor);
	font-size: var(--sapFontSize);
}

:host([open]) .ui5-toast-root {
	display: block;
}

.ui5-toast-root {
	position: fixed;
	display: none;
	box-sizing: border-box;
	max-width: 15rem;
	overflow: hidden;
	padding: 1rem;
	background: var(--_ui5_toast_background);
	box-shadow: var(--_ui5_toast_shadow);
	border-radius: var(--sapElement_BorderCornerRadius);
	transition-property: opacity;
	opacity: 1;
	font-family: inherit;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	word-wrap: break-word;
	text-align: center;
	text-overflow: ellipsis;
	white-space: pre-line;
}

:host(:not([placement])) .ui5-toast-root {
	bottom: var(--_ui5_toast_vertical_offset);
	left: 50%;
	transform: translateX(-50%);
}

:host([placement="TopStart"]) .ui5-toast-root {
	top: var(--_ui5_toast_vertical_offset);
	left: var(--_ui5_toast_horizontal_offset);
}

:host([placement="MiddleStart"]) .ui5-toast-root {
	left: var(--_ui5_toast_horizontal_offset);
	top: 50%;
	transform: translateY(-50%);
}

:host([placement="BottomStart"]) .ui5-toast-root {
	left: var(--_ui5_toast_horizontal_offset);
	bottom: var(--_ui5_toast_vertical_offset);
}

:host([placement="TopCenter"]) .ui5-toast-root {
	top: var(--_ui5_toast_vertical_offset);
	left: 50%;
	transform: translateX(-50%);
}

:host([placement="MiddleCenter"]) .ui5-toast-root {
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

:host([placement="BottomCenter"]) .ui5-toast-root {
	bottom: var(--_ui5_toast_vertical_offset);
	left: 50%;
	transform: translateX(-50%);
}

:host([placement="TopEnd"]) .ui5-toast-root {
	right: var(--_ui5_toast_horizontal_offset);
	top: var(--_ui5_toast_vertical_offset);
}

:host([placement="MiddleEnd"]) .ui5-toast-root {
	right: var(--_ui5_toast_horizontal_offset);
	top: 50%;
	transform: translateY(-50%);
}

:host([placement="BottomEnd"]) .ui5-toast-root {
	right: var(--_ui5_toast_horizontal_offset);
	bottom: var(--_ui5_toast_vertical_offset);
}
`};var r=globalThis&&globalThis.__decorate||function(t,e,n,s){var l=arguments.length,a=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(a=(l<3?d(a):l>3?d(e,n,a):d(e,n))||a);return l>3&&a&&Object.defineProperty(e,n,a),a};const c=500,D=1e3;let o=class extends b{constructor(){super(),this._reopen=!1}onAfterRendering(){this._reopen&&(this._reopen=!1,this._initiateOpening())}show(){this.open?(this._reopen=!0,this.open=!1):this._initiateOpening()}get effectiveDuration(){return this.duration<c?c:this.duration}get styles(){const e=Math.min(this.effectiveDuration/3,D);return{root:{"transition-duration":this.open?`${e}ms`:"","transition-delay":this.open?`${this.effectiveDuration-e}ms`:"",opacity:this.open&&!this.hover?"0":"","z-index":B()}}}_initiateOpening(){this.domRendered=!0,requestAnimationFrame(()=>{this.open=!0})}_ontransitionend(){this.hover||(this.domRendered=!1,this.open=!1)}_onmouseover(){this.hover=!0}_onmouseleave(){this.hover=!1}};r([i({validator:y,defaultValue:3e3})],o.prototype,"duration",void 0);r([i({type:f,defaultValue:f.BottomCenter})],o.prototype,"placement",void 0);r([i({type:Boolean})],o.prototype,"open",void 0);r([i({type:Boolean})],o.prototype,"hover",void 0);r([i({type:Boolean})],o.prototype,"domRendered",void 0);o=r([w({tag:"ui5-toast",renderer:C,styles:N,template:M})],o);o.define();const R=o,$=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),p=S("ui5-toast",["duration","placement"],[],[],[],()=>v(()=>Promise.resolve().then(()=>$),void 0,import.meta.url));p.displayName="Toast";p.defaultProps={duration:3e3,placement:f.BottomCenter};try{p.displayName="Toast",p.__docgenInfo={description:`The \`Toast\` is a small, non-disruptive popup for success or information messages that disappears automatically after a few seconds.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Toast" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"ToastPlacement.BottomCenter"},description:"Defines the placement of the component.\n\nAvailable options are:\n\n*   `TopStart`\n*   `TopCenter`\n*   `TopEnd`\n*   `MiddleStart`\n*   `MiddleCenter`\n*   `MiddleEnd`\n*   `BottomStart`\n*   `BottomCenter`\n*   `BottomEnd`",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as T,f as a};
//# sourceMappingURL=index-a05575a2.js.map
