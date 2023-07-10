import{a as S,U as B,z as E,d as H}from"./UI5Element-78be0f3d.js";import{f as P,i as j,t as F,e as L,l as _,g as $,a as M,b as U,p as v,c as V,d as q}from"./withWebComponent-d4224c1c.js";import{c as z,b as D,f as Y,h as G}from"./Icons-26e87c01.js";import{L as J,x as Q}from"./utils-69f7a0e0.js";var I;(function(e){e.Contrast="Contrast",e.Critical="Critical",e.Default="Default",e.Information="Information",e.Negative="Negative",e.Neutral="Neutral",e.NonInteractive="NonInteractive",e.Positive="Positive"})(I||(I={}));const T=I,W=(e,n={})=>t=>{Object.prototype.hasOwnProperty.call(t,"metadata")||(t.metadata={});const o=t.metadata;o.events||(o.events={});const s=o.events;s[e]||(s[e]=n)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:K}=J,k=()=>document.createComment(""),A=(e,n,t)=>{var o;const s=e._$AA.parentNode,i=n===void 0?e._$AB:n._$AA;if(t===void 0){const a=s.insertBefore(k(),i),r=s.insertBefore(k(),i);t=new K(a,r,e,e.options)}else{const a=t._$AB.nextSibling,r=t._$AM,m=r!==e;if(m){let d;(o=t._$AQ)===null||o===void 0||o.call(t,e),t._$AM=e,t._$AP!==void 0&&(d=e._$AU)!==r._$AU&&t._$AP(d)}if(a!==i||m){let d=t._$AA;for(;d!==a;){const y=d.nextSibling;s.insertBefore(d,i),d=y}}}return t},g=(e,n,t=e)=>(e._$AI(n,t),e),X={},Z=(e,n=X)=>e._$AH=n,ee=e=>e._$AH,N=e=>{var n;(n=e._$AP)===null||n===void 0||n.call(e,!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(e,n,t)=>{const o=new Map;for(let s=n;s<=t;s++)o.set(e[s],s);return o},te=P(class extends j{constructor(e){if(super(e),e.type!==F.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,n,t){let o;t===void 0?t=n:n!==void 0&&(o=n);const s=[],i=[];let a=0;for(const r of e)s[a]=o?o(r,a):a,i[a]=t(r,a),a++;return{values:i,keys:s}}render(e,n,t){return this.ht(e,n,t).values}update(e,[n,t,o]){var s;const i=ee(e),{values:a,keys:r}=this.ht(n,t,o);if(!Array.isArray(i))return this.ut=r,a;const m=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],d=[];let y,C,c=0,h=i.length-1,l=0,f=a.length-1;for(;c<=h&&l<=f;)if(i[c]===null)c++;else if(i[h]===null)h--;else if(m[c]===r[l])d[l]=g(i[c],a[l]),c++,l++;else if(m[h]===r[f])d[f]=g(i[h],a[f]),h--,f--;else if(m[c]===r[f])d[f]=g(i[c],a[f]),A(e,d[f+1],i[c]),c++,f--;else if(m[h]===r[l])d[l]=g(i[h],a[l]),A(e,i[c],i[h]),h--,l++;else if(y===void 0&&(y=O(r,l,f),C=O(m,c,h)),y.has(m[c]))if(y.has(m[h])){const b=C.get(r[l]),w=b!==void 0?i[b]:null;if(w===null){const x=A(e,i[c]);g(x,a[l]),d[l]=x}else d[l]=g(w,a[l]),A(e,i[c],w),i[b]=null;l++}else N(i[h]),h--;else N(i[c]),c++;for(;l<=f;){const b=A(e,d[f+1]);g(b,a[l]),d[l++]=b}for(;c<=h;){const b=i[c++];b!==null&&N(b)}return this.ut=r,Z(e,d),Q}});function ne(e,n,t){return L`<svg class="ui5-icon-root" part="root" tabindex="${_(this._tabIndex)}" dir="${_(this._dir)}" viewBox="${_(this.viewBox)}" role="${_(this.effectiveAccessibleRole)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${_(this.effectiveAccessibleName)}" aria-hidden=${_(this.effectiveAriaHidden)} xmlns="http://www.w3.org/2000/svg" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${ae.call(this,e,n,t)}</svg>`}function ie(e,n,t){return $`<title id="${_(this._id)}-tooltip">${_(this.effectiveAccessibleName)}</title>`}function oe(e,n,t){return $`${_(this.customSvg)}`}function se(e,n,t,o,s){return $`<path d="${_(o)}"></path>`}function ae(e,n,t){return $`${this.hasIconTooltip?ie.call(this,e,n,t):void 0}<g role="presentation">${this.customSvg?oe.call(this,e,n,t):void 0}${te(this.pathData,(o,s)=>o._id||s,(o,s)=>se.call(this,e,n,t,o,s))}</g>`}S("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);S("@ui5/webcomponents","sap_fiori_3",async()=>U);const re={packageName:"@ui5/webcomponents",fileName:"themes/Icon.css",content:`:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

:host([hidden]) {
	display: none;
}

:host([invalid]) {
	display:none;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	color: var(--sapContent_NonInteractiveIconColor);
	fill: currentColor;
	outline: none;
}

:host([design="Contrast"]) {
	color: var(--sapContent_ContrastIconColor);
}

:host([design="Critical"]) {
	color: var(--sapCriticalElementColor);
}

:host([design="Default"]) {
	color: var(--sapContent_IconColor);
}

:host([design="Information"]) {
	color: var(--sapInformativeElementColor);
}

:host([design="Negative"]) {
	color: var(--sapNegativeElementColor);
}

:host([design="Neutral"]) {
	color: var(--sapNeutralElementColor);
}

:host([design="NonInteractive"]) {
	color: var(--sapContent_NonInteractiveIconColor);
}

:host([design="Positive"]) {
	color: var(--sapPositiveElementColor);
}

:host([interactive][focused]) .ui5-icon-root {
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--ui5-icon-focus-border-radius);
}

.ui5-icon-root {
	display:flex;
	height: 100%;
	width: 100%;
	outline: none;
	vertical-align: top;
}

:host([interactive]) {
	cursor: pointer;
}

/*
 * The Icon is currently the only component that enforces "LTR" direction inside its ShadowDOM
 * as some icons should not be mirrored in RTL (f.e. checkmark, search, etc.).
 * That means, we can have "RTL" set globally and "LTR" set internally for the Icon ShadowDom
  * html dir=rtl
 * 		[ui5-icon]
 * 			#shadowroot
 * 				svg dir=ltr
 * In this case, we need to explicitly check for it as the global CSS definitions (rtl-parameters.css)
 * is placed in the "head" and won't consider it.
 */

.ui5-icon-root:not([dir="ltr"]) {
	transform: var(--_ui5_icon_transform_scale);
	transform-origin: center;
}`};var p=globalThis&&globalThis.__decorate||function(e,n,t,o){var s=arguments.length,i=s<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(i=(s<3?a(i):s>3?a(n,t,i):a(n,t))||i);return s>3&&i&&Object.defineProperty(n,t,i),i};const ce="ICON_NOT_FOUND",R="presentation";let u=class extends B{_onFocusInHandler(){this.interactive&&(this.focused=!0)}_onFocusOutHandler(){this.focused=!1}_onkeydown(n){this.interactive&&(z(n)&&this.fireEvent("click"),D(n)&&n.preventDefault())}_onkeyup(n){this.interactive&&D(n)&&this.fireEvent("click")}get _dir(){return this.ltr?"ltr":void 0}get effectiveAriaHidden(){return this.ariaHidden===""?this.isDecorative?!0:void 0:this.ariaHidden}get _tabIndex(){return this.interactive?"0":void 0}get isDecorative(){return this.effectiveAccessibleRole===R}get effectiveAccessibleRole(){return this.accessibleRole?this.accessibleRole:this.interactive?"button":this.effectiveAccessibleName?"img":R}async onBeforeRendering(){const n=this.name;if(!n)return console.warn("Icon name property is required",this);let t=Y(n);if(t||(t=await G(n)),!t)return this.invalid=!0,console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);if(t===ce)return this.invalid=!0,console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${n.replace("sap-icon://","")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/AllIcons.js".`);if(this.viewBox=t.viewBox||"0 0 512 512",t.customTemplate&&(t.pathData=[],this.customSvg=E(t.customTemplate,this)),this.invalid=!1,this.pathData=Array.isArray(t.pathData)?t.pathData:[t.pathData],this.accData=t.accData,this.ltr=t.ltr,this.packageName=t.packageName,this._onfocusout=this.interactive?this._onFocusOutHandler.bind(this):void 0,this._onfocusin=this.interactive?this._onFocusInHandler.bind(this):void 0,this.accessibleName)this.effectiveAccessibleName=this.accessibleName;else if(this.accData){const o=await H(this.packageName);this.effectiveAccessibleName=o.getText(this.accData)||void 0}else this.effectiveAccessibleName=void 0}get hasIconTooltip(){return this.showTooltip&&this.effectiveAccessibleName}};p([v({type:T,defaultValue:T.Default})],u.prototype,"design",void 0);p([v({type:Boolean})],u.prototype,"interactive",void 0);p([v()],u.prototype,"name",void 0);p([v()],u.prototype,"accessibleName",void 0);p([v({type:Boolean})],u.prototype,"showTooltip",void 0);p([v()],u.prototype,"accessibleRole",void 0);p([v()],u.prototype,"ariaHidden",void 0);p([v({multiple:!0})],u.prototype,"pathData",void 0);p([v({type:Object,defaultValue:void 0,noAttribute:!0})],u.prototype,"accData",void 0);p([v({type:Boolean})],u.prototype,"focused",void 0);p([v({type:Boolean})],u.prototype,"invalid",void 0);p([v({noAttribute:!0,defaultValue:void 0})],u.prototype,"effectiveAccessibleName",void 0);u=p([V({tag:"ui5-icon",languageAware:!0,themeAware:!0,renderer:q,template:ne,styles:re}),W("click")],u);u.define();const le=u,ve=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{le as I,T as a,ve as b,te as c,W as e};
//# sourceMappingURL=Icon-70a9e5b9.js.map
