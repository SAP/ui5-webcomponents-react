import{r as E}from"./index-ClU-Tc1p.js";import{e as rt}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";const Z=new Map,ot=(n,t)=>{Z.set(n,t)},xt=n=>Z.get(n);let Ht=class{constructor(){this._eventRegistry=new Map}attachEvent(t,e){const s=this._eventRegistry,i=s.get(t);if(!Array.isArray(i)){s.set(t,[e]);return}i.includes(e)||i.push(e)}detachEvent(t,e){const s=this._eventRegistry,i=s.get(t);if(!i)return;const o=i.indexOf(e);o!==-1&&i.splice(o,1),i.length===0&&s.delete(t)}fireEvent(t,e){const s=this._eventRegistry.get(t);return s?s.map(i=>i.call(this,e)):[]}fireEventAsync(t,e){return Promise.all(this.fireEvent(t,e))}isHandlerAttached(t,e){const s=this._eventRegistry.get(t);return s?s.includes(e):!1}hasListeners(t){return!!this._eventRegistry.get(t)}},lt,B={include:[/^ui5-/],exclude:[]};const I=new Map,ht=()=>lt,at=n=>{if(!I.has(n)){const t=B.include.some(e=>n.match(e))&&!B.exclude.some(e=>n.match(e));I.set(n,t)}return I.get(n)},ct=n=>{if(at(n))return ht()},$t=n=>{const t=`v${rt.version.replaceAll(".","-")}`,e=/(--_?ui5)([^,:)\s]+)/g;return n.replaceAll(e,`$1-${t}$2`)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const R=window,g=R.trustedTypes,j=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,P="?"+A,ut=`<${P}>`,m=document,C=(n="")=>m.createComment(n),N=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,q=n=>K(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,W=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,J=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),dt=J(1),pt=J(2),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),D=new WeakMap,f=m.createTreeWalker(m,129,null,!1),Q=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=x;for(let l=0;l<e;l++){const h=n[l];let d,a,$=-1,p=0;for(;p<h.length&&(r.lastIndex=p,a=r.exec(h),a!==null);)p=r.lastIndex,r===x?a[1]==="!--"?r=O:a[1]!==void 0?r=W:a[2]!==void 0?(G.test(a[2])&&(i=RegExp("</"+a[2],"g")),r=v):a[3]!==void 0&&(r=v):r===v?a[0]===">"?(r=i??x,$=-1):a[1]===void 0?$=-2:($=r.lastIndex-a[2].length,d=a[1],r=a[3]===void 0?v:a[3]==='"'?V:k):r===V||r===k?r=v:r===O||r===W?r=x:(r=v,i=void 0);const M=r===v&&n[l+1].startsWith("/>")?" ":"";o+=r===x?h+ut:$>=0?(s.push(d),h.slice(0,$)+"$lit$"+h.slice($)+A+M):h+A+($===-2?(s.push(void 0),l):M)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[j!==void 0?j.createHTML(c):c,s]};class w{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[h,d]=Q(t,e);if(this.el=w.createElement(h,s),f.currentNode=this.el.content,e===2){const a=this.el.content,$=a.firstChild;$.remove(),a.append(...$.childNodes)}for(;(i=f.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const $ of i.getAttributeNames())if($.endsWith("$lit$")||$.startsWith(A)){const p=d[r++];if(a.push($),p!==void 0){const M=i.getAttribute(p.toLowerCase()+"$lit$").split(A),T=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:T[2],strings:M,ctor:T[1]==="."?Y:T[1]==="?"?tt:T[1]==="@"?et:b})}else l.push({type:6,index:o})}for(const $ of a)i.removeAttribute($)}if(G.test(i.tagName)){const a=i.textContent.split(A),$=a.length-1;if($>0){i.textContent=g?g.emptyScript:"";for(let p=0;p<$;p++)i.append(a[p],C()),f.nextNode(),l.push({type:2,index:++o});i.append(a[$],C())}}}else if(i.nodeType===8)if(i.data===P)l.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(A,a+1))!==-1;)l.push({type:7,index:o}),a+=A.length-1}o++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function _(n,t,e=n,s){var i,o,r,c;if(t===S)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=_(n,l._$AS(n,t.values),l,s)),t}class X{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);f.currentNode=o;let r=f.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let d;h.type===2?d=new y(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new it(r,this,t)),this.u.push(d),h=i[++l]}c!==(h==null?void 0:h.index)&&(r=f.nextNode(),c++)}return o}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class y{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):q(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=w.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(s);else{const r=new X(o,this),c=r.v(this.options);r.p(s),this.T(c),this._$AH=r}}_$AC(t){let e=D.get(t.strings);return e===void 0&&D.set(t.strings,e=new w(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new y(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class b{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=_(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const c=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=_(this,c[s+l],e,l),h===S&&(h=this._$AH[l]),r||(r=!N(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const At=g?g.emptyScript:"";class tt extends b{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,At):this.element.removeAttribute(this.name)}}class et extends b{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=_(this,t,e,0))!==null&&s!==void 0?s:u)===S)return;const i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const Nt={P:"$lit$",A,M:P,C:1,L:Q,R:X,D:q,V:_,I:y,H:b,N:tt,U:et,B:Y,F:it},F=R.litHtmlPolyfillSupport;F==null||F(w,y),((L=R.litHtmlVersions)!==null&&L!==void 0?L:R.litHtmlVersions=[]).push("2.6.1");const St=(n,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new y(t.insertBefore(C(),c),c,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=Symbol.for(""),vt=n=>{if((n==null?void 0:n.r)===st)return n==null?void 0:n._$litStatic$},_t=n=>({_$litStatic$:n,r:st}),z=new Map,nt=n=>(t,...e)=>{const s=e.length;let i,o;const r=[],c=[];let l,h=0,d=!1;for(;h<s;){for(l=t[h];h<s&&(o=e[h],(i=vt(o))!==void 0);)l+=i+t[++h],d=!0;c.push(o),r.push(l),h++}if(h===s&&r.push(t[s]),d){const a=r.join("$$lit$$");(t=z.get(a))===void 0&&(r.raw=r,z.set(a,t=r)),e=c}return n(t,...e)},ft=nt(dt),gt=nt(pt),H=class H{};H.html=ft,H.svg=gt,H.unsafeStatic=_t;let U=H;ot("LitStatic",U);function wt(n,t=1){const e=[],s=(i,o=0,r=[])=>{var c;if(i){if(Array.isArray(i)){E.Children.toArray(i).forEach((l,h)=>{s(l,o+1,[...r,h])});return}i.type===E.Fragment&&o<=t?E.Children.toArray((c=i.props)==null?void 0:c.children).forEach((l,h)=>{s(l,o+1,[...r,h])}):typeof i=="string"||typeof i=="number"?e.push(i):e.push(E.cloneElement(i,{key:r.join(".")}))}};return s(n),e}const bt=n=>n.charAt(0).toUpperCase()+n.slice(1),Mt=n=>n.replace(/([A-Z])/g,(t,e)=>`-${e.toLowerCase()}`),Tt=n=>n.replace(/([-_]\w)/g,t=>t[1].toUpperCase());function Et(n){const t=ct(n);return t?`${n}-${t}`:n}function Rt(n){return n.trim().replace(/\s\s+/g," ")}const It=$t("--_ui5_").replace("--_ui5_","");function Lt(n){return n}export{Nt as L,St as Z,Lt as a,u as b,It as c,$t as d,at as e,wt as f,Et as g,ht as h,Ht as i,Mt as j,bt as k,Tt as l,xt as n,ct as p,ot as s,Rt as t,pt as w,S as x,dt as y};
