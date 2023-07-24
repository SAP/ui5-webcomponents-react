import{x as o}from"./utils-626dc1bf.js";import{e as l,i as u,t as n}from"./withWebComponent-99b005ba.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends u{constructor(r){var t;if(super(r),r.type!==n.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return""}update(r,[t]){const{style:i}=r.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const e in t)this._previousStyleProperties.add(e)}this._previousStyleProperties.forEach(e=>{t[e]==null&&(this._previousStyleProperties.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")});for(const e in t){const s=t[e];s!=null&&(this._previousStyleProperties.add(e),e.includes("-")?i.setProperty(e,s):i[e]=s)}return o}}const h=l(p);export{h as s};
//# sourceMappingURL=style-map-56038137.js.map
