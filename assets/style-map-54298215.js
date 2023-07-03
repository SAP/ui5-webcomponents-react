import{x as o}from"./utils-69f7a0e0.js";import{f as l,i as u,t as n}from"./withWebComponent-d4224c1c.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends u{constructor(r){var t;if(super(r),r.type!==n.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return""}update(r,[t]){const{style:s}=r.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const e in t)this._previousStyleProperties.add(e)}this._previousStyleProperties.forEach(e=>{t[e]==null&&(this._previousStyleProperties.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const i=t[e];i!=null&&(this._previousStyleProperties.add(e),e.includes("-")?s.setProperty(e,i):s[e]=i)}return o}}const c=l(p);export{c as s};
//# sourceMappingURL=style-map-54298215.js.map
