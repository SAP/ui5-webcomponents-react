import{j as t}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{r as s}from"./index-ClU-Tc1p.js";import{j as a,k as c}from"./index-DuT2KoE2.js";const i="_header_3q1lz_1",l="_fixedContainer_3q1lz_7",d="_toc_3q1lz_10",e={header:i,fixedContainer:l,toc:d};function x({headingSelector:o="h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)",onlyDisplaySideNav:r=!1}){return s.useEffect(()=>(a({tocSelector:".js-toc",contentSelector:".sbdocs-wrapper",headingSelector:o,orderedList:!1,collapseDepth:6,hasInnerContainers:!0}),document.querySelectorAll(".toc-link").forEach(n=>n.setAttribute("target","_self")),()=>{c()}),[o]),t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:`${e.header} noAnchor`,"data-show-small":!r,children:"Contents"}),t.jsx("div",{className:e.fixedContainer,"data-show-small":!r,children:t.jsx("div",{className:`js-toc ${e.toc}`,id:"toc-container"})})]})}export{x as T};
