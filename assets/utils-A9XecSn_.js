import{g as u,a as g,b as h}from"./CustomElementsScope-muWBOMD2.js";import{r as s}from"./index-BP8_t0zE.js";function m(r,t=1){const o=[],e=(a,i=0,c=[])=>{var p;if(a){if(Array.isArray(a)){s.Children.toArray(a).forEach((n,f)=>{e(n,i+1,[...c,f])});return}a.type===s.Fragment&&i<=t?s.Children.toArray((p=a.props)==null?void 0:p.children).forEach((n,f)=>{e(n,i+1,[...c,f])}):typeof a=="string"||typeof a=="number"?o.push(a):o.push(s.cloneElement(a,{key:c.join(".")}))}};return e(r),o}const x=r=>r.charAt(0).toUpperCase()+r.slice(1),l=r=>r.replace(/([A-Z])/g,(t,o)=>`-${o.toLowerCase()}`),d=r=>r.replace(/([-_]\w)/g,t=>t[1].toUpperCase());function A(r){const t=u(r);return t?`${r}-${t}`:r}function y(r){return r.trim().replace(/\s\s+/g," ")}const E=g("--_ui5_").replace("--_ui5_","");function b(r){const t=h();return t?r.replace(`-${t.toUpperCase()}`,""):r}export{x as a,E as b,l as c,b as d,m as f,A as g,d as k,y as t};
