import{r as et}from"./VersionInfo-LCCO4Ig5.js";import{r as M}from"./index-OjgoNOWw.js";import{g as it,a as st}from"./CustomElementsScopeUtils-M7hMRmEH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const E=window,g=E.trustedTypes,B=g?g.createPolicy("lit-html",{createHTML:o=>o}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,U="?"+A,nt=`<${U}>`,m=document,H=(o="")=>m.createComment(o),C=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,D=o=>W(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,F=/"/g,z=/^(?:script|style|textarea|title)$/i,Z=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),ot=Z(1),rt=Z(2),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),O=new WeakMap,f=m.createTreeWalker(m,129,null,!1),K=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=x;for(let l=0;l<e;l++){const h=o[l];let d,a,$=-1,p=0;for(;p<h.length&&(n.lastIndex=p,a=n.exec(h),a!==null);)p=n.lastIndex,n===x?a[1]==="!--"?n=P:a[1]!==void 0?n=R:a[2]!==void 0?(z.test(a[2])&&(i=RegExp("</"+a[2],"g")),n=_):a[3]!==void 0&&(n=_):n===_?a[0]===">"?(n=i??x,$=-1):a[1]===void 0?$=-2:($=n.lastIndex-a[2].length,d=a[1],n=a[3]===void 0?_:a[3]==='"'?F:j):n===F||n===j?n=_:n===P||n===R?n=x:(n=_,i=void 0);const T=n===_&&o[l+1].startsWith("/>")?" ":"";r+=n===x?h+nt:$>=0?(s.push(d),h.slice(0,$)+"$lit$"+h.slice($)+A+T):h+A+($===-2?(s.push(void 0),l):T)}const c=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[B!==void 0?B.createHTML(c):c,s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const c=t.length-1,l=this.parts,[h,d]=K(t,e);if(this.el=N.createElement(h,s),f.currentNode=this.el.content,e===2){const a=this.el.content,$=a.firstChild;$.remove(),a.append(...$.childNodes)}for(;(i=f.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const $ of i.getAttributeNames())if($.endsWith("$lit$")||$.startsWith(A)){const p=d[n++];if(a.push($),p!==void 0){const T=i.getAttribute(p.toLowerCase()+"$lit$").split(A),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:w[2],strings:T,ctor:w[1]==="."?G:w[1]==="?"?J:w[1]==="@"?Q:b})}else l.push({type:6,index:r})}for(const $ of a)i.removeAttribute($)}if(z.test(i.tagName)){const a=i.textContent.split(A),$=a.length-1;if($>0){i.textContent=g?g.emptyScript:"";for(let p=0;p<$;p++)i.append(a[p],H()),f.nextNode(),l.push({type:2,index:++r});i.append(a[$],H())}}}else if(i.nodeType===8)if(i.data===U)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(A,a+1))!==-1;)l.push({type:7,index:r}),a+=A.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function v(o,t,e=o,s){var i,r,n,c;if(t===S)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,s)),s!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=v(o,l._$AS(o,t.values),l,s)),t}class q{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);f.currentNode=r;let n=f.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let d;h.type===2?d=new y(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new X(n,this,t)),this.u.push(d),h=i[++l]}c!==(h==null?void 0:h.index)&&(n=f.nextNode(),c++)}return r}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class y{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=v(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):D(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(s);else{const n=new q(r,this),c=n.v(this.options);n.p(s),this.T(c),this._$AH=n}}_$AC(t){let e=O.get(t.strings);return e===void 0&&O.set(t.strings,e=new N(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new y(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class b{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=v(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=v(this,c[s+l],e,l),h===S&&(h=this._$AH[l]),n||(n=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class G extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const lt=g?g.emptyScript:"";class J extends b{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class Q extends b{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=v(this,t,e,0))!==null&&s!==void 0?s:u)===S)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const At={P:"$lit$",A,M:U,C:1,L:K,R:q,D,V:v,I:y,H:b,N:J,U:Q,B:G,F:X},V=E.litHtmlPolyfillSupport;V==null||V(N,y),((L=E.litHtmlVersions)!==null&&L!==void 0?L:E.litHtmlVersions=[]).push("2.6.1");const _t=(o,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=r._$litPart$;if(n===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new y(t.insertBefore(H(),c),c,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=Symbol.for(""),ht=o=>{if((o==null?void 0:o.r)===Y)return o==null?void 0:o._$litStatic$},at=o=>({_$litStatic$:o,r:Y}),k=new Map,tt=o=>(t,...e)=>{const s=e.length;let i,r;const n=[],c=[];let l,h=0,d=!1;for(;h<s;){for(l=t[h];h<s&&(r=e[h],(i=ht(r))!==void 0);)l+=i+t[++h],d=!0;c.push(r),n.push(l),h++}if(h===s&&n.push(t[s]),d){const a=n.join("$$lit$$");(t=k.get(a))===void 0&&(n.raw=n,k.set(a,t=n)),e=c}return o(t,...e)},ct=tt(ot),$t=tt(rt);class I{}I.html=ct;I.svg=$t;I.unsafeStatic=at;et("LitStatic",I);function vt(o,t=1){const e=[],s=(i,r=0,n=[])=>{var c;if(i){if(Array.isArray(i)){M.Children.toArray(i).forEach((l,h)=>{s(l,r+1,[...n,h])});return}i.type===M.Fragment&&r<=t?M.Children.toArray((c=i.props)==null?void 0:c.children).forEach((l,h)=>{s(l,r+1,[...n,h])}):typeof i=="string"||typeof i=="number"?e.push(i):e.push(M.cloneElement(i,{key:n.join(".")}))}};return s(o),e}const ft=o=>o.charAt(0).toUpperCase()+o.slice(1),gt=o=>o.replace(/([A-Z])/g,(t,e)=>`-${e.toLowerCase()}`),mt=o=>o.replace(/([-_]\w)/g,t=>t[1].toUpperCase());function yt(o){const t=it(o);return t?`${o}-${t}`:o}function xt(o){return o.trim().replace(/\s\s+/g," ")}const Ht=st("--_ui5_").replace("--_ui5_","");export{At as L,_t as Z,gt as a,u as b,Ht as c,ft as d,vt as f,yt as g,mt as k,xt as t,rt as w,S as x,ot as y};
