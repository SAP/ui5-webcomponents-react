import{j as t}from"./jsx-runtime-5926aa06.js";import{r as a}from"./index-ebeaab24.js";import{j as r,c as e}from"./DomRefTable.module-47e7b1ae.js";function h({headingSelector:o="h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)",onlyDisplaySideNav:s=!1}){return a.useEffect(()=>(r.init({tocSelector:".js-toc",contentSelector:".sbdocs-wrapper",headingSelector:o,orderedList:!1,collapseDepth:6,hasInnerContainers:!0}),document.querySelectorAll(".toc-link").forEach(n=>n.setAttribute("target","_self")),()=>{r.destroy()}),[o]),t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:`${e.header} noAnchor`,"data-show-small":!s,children:"Contents"}),t.jsx("div",{className:e.fixedContainer,"data-show-small":!s,children:t.jsx("div",{className:`js-toc ${e.toc}`,id:"toc-container"})})]})}export{h as T};
//# sourceMappingURL=TableOfContent-5a9559e9.js.map
