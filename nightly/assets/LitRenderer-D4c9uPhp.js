import{x as a,b as o,f as u,Z as h,y as p}from"./utils-DKbukTmU.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},y=s=>(...t)=>({_$litDirective$:s,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class f extends d{constructor(t){var e;if(super(t),t.type!==c.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return""}update(t,[e]){const{style:i}=t.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const r in e)this._previousStyleProperties.add(r)}this._previousStyleProperties.forEach(r=>{e[r]==null&&(this._previousStyleProperties.delete(r),r.includes("-")?i.removeProperty(r):i[r]="")});for(const r in e){const n=e[r];n!=null&&(this._previousStyleProperties.add(r),r.includes("-")?i.setProperty(r,n):i[r]=n)}return a}}const $=y(f);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=s=>s??o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends d{constructor(t){if(super(t),this.it=o,t.type!==c.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===o||t==null)return this._t=void 0,this.it=t;if(t===a)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;const _=(s,...t)=>{const e=u("LitStatic");return(e?e.html:p)(s,...t)},E=(s,t)=>{let e=s.render();const i=u("OpenUI5Enablement");i&&(e=i.wrapTemplateResultInBusyMarkup(_,s,e)),h(e,t,{host:s})},m=(s,t,e)=>{const i=u("LitStatic");if(i)return i.unsafeStatic((t||[]).includes(s)?`${s}-${e}`:s)};export{E as a,y as e,m as f,d as i,v as l,_ as m,$ as s,c as t};
