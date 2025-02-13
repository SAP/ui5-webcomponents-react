import{j as z,p as k,d as H,s as v,m as V,S as x,k as I}from"./jsx-runtime--4q9epG_.js";import{d as j}from"./parameters-bundle.css-Ct2Rzfjz.js";let g=null,M=!1;const D=new Set,w=new Set,T=e=>{!e.dataTransfer||!(e.target instanceof HTMLElement)||w.has(e.target)||(g=e.target)},P=()=>{g=null},L=()=>{g=null},S=e=>{g=e},N=()=>g,F=()=>{document.body.addEventListener("dragstart",T),document.body.addEventListener("dragend",P),document.body.addEventListener("drop",L)},U=e=>{D.add(e),F()},Y=e=>{D.delete(e),D.size},q=e=>(w.add(e),S),G=e=>{w.delete(e)},C={subscribe:U,unsubscribe:Y,addSelfManagedArea:q,removeSelfManagedArea:G,getDraggedElement:N};function X(e,i,a,r,t={}){const n=C.getDraggedElement(),o={targetReference:null,placement:null};if(!n&&!(t!=null&&t.crossDnD))return o;const l=a.placements;return o.targetReference=e.target,l.some(d=>{const p=t.originalEvent?{originalEvent:e}:{};return i.fireDecoratorEvent("move-over",{...p,source:{element:n},destination:{element:r,placement:d}})?!1:(e.preventDefault(),o.targetReference=a.element,o.placement=d,!0)})||(o.targetReference=null),o}function Z(e,i,a,r,t={}){e.preventDefault();const n=C.getDraggedElement();if(!n&&(t!=null&&t.crossDnD))return;const o=t.originalEvent?{originalEvent:e}:{};i.fireDecoratorEvent("move",{...o,source:{element:n},destination:{element:a,placement:r}}),n==null||n.focus()}var m=(e=>(e.Vertical="Vertical",e.Horizontal="Horizontal",e))(m||{}),s=(e=>(e.On="On",e.Before="Before",e.After="After",e))(s||{});const E=(e,i,a,r)=>{const t=Math.abs(e-i),n=Math.abs(e-a),o=Math.abs(e-r),l=Math.min(t,n,o);let d=[];switch(l){case t:d=[s.Before];break;case n:d=[s.On,t<o?s.Before:s.After];break;case o:d=[s.After];break}return d},ee=(e,i,a)=>{let r=Number.POSITIVE_INFINITY,t=null;for(let u=0;u<e.length;u++){const y=e[u],{left:O,width:_,top:B,height:$}=y.getBoundingClientRect();let A;a===m.Vertical?A=B+$/2:A=O+_/2;const R=Math.abs(i-A);R<r&&(r=R,t=y)}if(!t)return null;const{width:n,height:o,left:l,right:d,top:p,bottom:c}=t.getBoundingClientRect();let h;return a===m.Vertical?h=E(i,p,p+o/2,c):h=E(i,l,l+n/2,d),{element:t,placements:h}},te=(e,i,a)=>{let r=e.indexOf(i);const t=[];switch(a.key){case"ArrowLeft":case"ArrowUp":r--,r>=0&&t.push({element:e[r],placement:s.Before});break;case"ArrowRight":case"ArrowDown":r++,r<e.length&&t.push({element:e[r],placement:s.After});break;case"Home":e.forEach(n=>{t.push({element:n,placement:s.Before})});break;case"End":e.reverse().forEach(n=>{t.push({element:n,placement:s.After})});break}return t};function J(){return z("div",{class:{"ui5-di-rect":this.placement===s.On,"ui5-di-needle":this.placement!==s.On}})}k("@ui5/webcomponents-theming","sap_horizon",async()=>H);k("@ui5/webcomponents","sap_horizon",async()=>j);const K=`:host{position:absolute;pointer-events:none;z-index:99}:host([orientation="Vertical"]) .ui5-di-needle{width:.125rem;height:100%;inset-block:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Vertical"]){margin-left:-.0625rem}:host([orientation="Horizontal"]) .ui5-di-needle{height:.125rem;width:100%;inset-inline:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Horizontal"]){margin-top:-.0625rem}:host([orientation="Horizontal"][placement="Before"][first]){margin-top:.3125rem}:host([orientation="Horizontal"][placement="After"][last]){margin-top:-.3125rem}:host([orientation="Vertical"]) .ui5-di-needle:before{left:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host([orientation="Horizontal"]) .ui5-di-needle:before{top:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host .ui5-di-rect{border:.125rem solid var(--sapContent_DragAndDropActiveColor);position:absolute;inset:0}:host .ui5-di-rect:before{content:" ";position:absolute;inset:0;background:var(--sapContent_DragAndDropActiveColor);opacity:.05}
`;var b=function(e,i,a,r){var t=arguments.length,n=t<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,a):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,i,a,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(t<3?o(n):t>3?o(i,a,n):o(i,a))||n);return t>3&&n&&Object.defineProperty(i,a,n),n};let f=class extends x{get _positionProperty(){return this.orientation===m.Vertical?"left":"top"}constructor(){super(),this.targetReference=null,this.ownerReference=null,this.placement="Before",this.orientation="Vertical"}onAfterRendering(){if(!this.targetReference||!this.ownerReference){Object.assign(this.style,{display:"none"});return}const{left:i,width:a,right:r,top:t,bottom:n,height:o}=this.targetReference.getBoundingClientRect(),{top:l,height:d}=this.ownerReference.getBoundingClientRect(),p={display:"",[this._positionProperty]:"",width:"",height:""};let c=0,h=!1,u=!1;if(this.orientation===m.Vertical){switch(this.placement){case s.Before:c=i;break;case s.On:p.width=`${a}px`,c=i;break;case s.After:c=r;break}p.height=`${o}px`}if(this.orientation===m.Horizontal){switch(this.placement){case s.Before:c=t;break;case s.On:p.height=`${o}px`,c=t;break;case s.After:c=n;break}p.width=`${a}px`,c-=l,c<=0&&(u=!0),c>=d&&(h=!0)}p[this._positionProperty]=`${c}px`,this.toggleAttribute("first",u),this.toggleAttribute("last",h),Object.assign(this.style,p)}};b([v({type:Object})],f.prototype,"targetReference",void 0);b([v({type:Object})],f.prototype,"ownerReference",void 0);b([v()],f.prototype,"placement",void 0);b([v()],f.prototype,"orientation",void 0);f=b([V({tag:"ui5-drop-indicator",renderer:I,styles:K,template:J})],f);f.define();const re=f;export{re as D,m as a,X as i,te as k,Z as m,C as p,s as r,ee as w};
