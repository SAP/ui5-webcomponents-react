import{x as c,b as u,a as l,Z as h,y as p}from"./utils-5ouIlTbN.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},f=s=>(...t)=>({_$litDirective$:s,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends d{constructor(t){var e;if(super(t),t.type!==a.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return""}update(t,[e]){const{style:i}=t.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const r in e)this._previousStyleProperties.add(r)}this._previousStyleProperties.forEach(r=>{e[r]==null&&(this._previousStyleProperties.delete(r),r.includes("-")?i.removeProperty(r):i[r]="")});for(const r in e){const n=e[r];n!=null&&(this._previousStyleProperties.add(r),r.includes("-")?i.setProperty(r,n):i[r]=n)}return c}}const v=f(y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=s=>s??u;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends d{constructor(t){if(super(t),this.it=u,t.type!==a.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===c)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const _=(s,...t)=>{const e=l("LitStatic");return(e?e.html:p)(s,...t)},$=(s,t)=>{let e=s.render();const i=l("OpenUI5Enablement");i&&(e=i.wrapTemplateResultInBusyMarkup(_,s,e)),h(e,t,{host:s})},m=(s,t,e)=>{const i=l("LitStatic");if(i)return i.unsafeStatic((t||[]).includes(s)?`${s}-${e}`:s)};export{_ as a,v as b,$ as c,f as e,d as i,E as l,m as s,a as t};
