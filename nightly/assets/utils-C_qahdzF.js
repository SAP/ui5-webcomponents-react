import{p as e,d as g,c as h}from"./CustomElementsScope-Cnxnu_QK.js";import{r as o}from"./index-D23YZj_x.js";function y(r,i=1){const n=[],f=(t,s=0,a=[])=>{var u;if(t){if(Array.isArray(t)){o.Children.toArray(t).forEach((c,p)=>{f(c,s+1,[...a,p])});return}t.type===o.Fragment&&s<=i?o.Children.toArray((u=t.props)==null?void 0:u.children).forEach((c,p)=>{f(c,s+1,[...a,p])}):typeof t=="string"||typeof t=="number"?n.push(t):n.push(o.cloneElement(t,{key:a.join(".")}))}};return f(r),n}function S(r){const i=e(r);return i?`${r}-${i}`:r}function m(r){return r.trim().replace(/\s\s+/g," ")}const A=g("--_ui5_").replace("--_ui5_","");function C(r){const i=h();return i?r.replace(`-${i.toUpperCase()}`,""):r}export{C as a,A as c,y as f,S as g,m as t};
