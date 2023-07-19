import{x as a}from"./utils-f515de3e.js";import{e as d,i as h,t as l}from"./withWebComponent-03662f7f.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=d(class extends h{constructor(s){var e;if(super(s),s.type!==l.ATTRIBUTE||s.name!=="class"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var n,i;if(this.nt===void 0){this.nt=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in e)e[t]&&!(!((n=this.st)===null||n===void 0)&&n.has(t))&&this.nt.add(t);return this.render(e)}const r=s.element.classList;this.nt.forEach(t=>{t in e||(r.remove(t),this.nt.delete(t))});for(const t in e){const o=!!e[t];o===this.nt.has(t)||!((i=this.st)===null||i===void 0)&&i.has(t)||(o?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return a}});export{v as o};
//# sourceMappingURL=class-map-341004db.js.map
