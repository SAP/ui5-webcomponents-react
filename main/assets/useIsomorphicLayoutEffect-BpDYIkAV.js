import{r as S}from"./index-DEe9W-hO.js";var y={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function h(e,t,n){var r=null;if(n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),"key"in t){n={};for(var o in t)o!=="key"&&(n[o]=t[o])}else n=t;return t=n.ref,{$$typeof:x,type:e,key:r,ref:t!==void 0?t:null,props:n}}d.Fragment=v;d.jsx=h;d.jsxs=h;y.exports=d;var C=y.exports;const $=(e,t=document.body,n)=>{let r=document.querySelector(e);return r||(r=n?n():document.createElement(e),t.insertBefore(r,t.firstChild))},E=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},_=()=>typeof document>"u"?null:$('meta[name="ui5-shared-resources"]',document.head,E),R=(e,t)=>{const n=e.split(".");let r=_();if(!r)return t;for(let o=0;o<n.length;o++){const s=n[o],i=o===n.length-1;Object.prototype.hasOwnProperty.call(r,s)||(r[s]=i?t:{}),r=r[s]}return r},T={version:"2.0.1",major:2,minor:0,patch:1,suffix:"",isNext:!1,buildTime:1720176760};let a,I="";const m=new Map,c=R("Runtimes",[]),P=()=>{if(a===void 0){a=c.length;const e=T;c.push({...e,alias:I,description:`Runtime ${a} - ver ${e.version}`})}},f=()=>a,j=(e,t)=>{const n=`${e},${t}`;if(m.has(n))return m.get(n);const r=c[e],o=c[t];if(!r||!o)throw new Error("Invalid runtime index supplied");if(r.isNext||o.isNext)return r.buildTime-o.buildTime;const s=r.major-o.major;if(s)return s;const i=r.minor-o.minor;if(i)return i;const u=r.patch-o.patch;if(u)return u;const p=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(r.suffix,o.suffix);return m.set(n,p),p},L=()=>c,k=typeof document>"u",l=(e,t)=>t?`${e}|${t}`:e,w=e=>e===void 0?!0:j(f(),parseInt(e))===1,N=(e,t,n="",r)=>{const o=typeof e=="string"?e:e.content,s=f(),i=new CSSStyleSheet;i.replaceSync(o),i._ui5StyleId=l(t,n),r&&(i._ui5RuntimeIndex=s,i._ui5Theme=r),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i]},b=(e,t,n="",r)=>{const o=typeof e=="string"?e:e.content,s=f(),i=document.adoptedStyleSheets.find(u=>u._ui5StyleId===l(t,n));if(i)if(!r)i.replaceSync(o||"");else{const u=i._ui5RuntimeIndex;(i._ui5Theme!==r||w(u))&&(i.replaceSync(o||""),i._ui5RuntimeIndex=String(s),i._ui5Theme=r)}},g=(e,t="")=>k?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===l(e,t)),M=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==l(e,t))},F=(e,t,n="",r)=>{g(t,n)?b(e,t,n,r):N(e,t,n,r)},O=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},Y=typeof window<"u"?S.useLayoutEffect:S.useEffect;export{O as R,g as S,F as a,N as b,L as c,P as d,T as e,f as g,j as h,C as j,R as m,$ as o,M as p,Y as u};
