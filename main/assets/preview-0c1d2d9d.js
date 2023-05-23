import{s as a}from"./iframe-59f9763c.js";import"../sb-preview/runtime.js";var n="storybook/highlight",d="storybookHighlight",_=`${n}/add`,g=`${n}/reset`;const{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:h}=a,H=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,T=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),l=p.getChannel(),O=e=>{let t=d;i();let r=Array.from(new Set(e.elements)),o=h.createElement("style");o.setAttribute("id",t),o.innerHTML=r.map(s=>`${s}{
          ${H(e.color,e.style)}
         }`).join(" "),h.head.appendChild(o)},i=()=>{let e=d,t=h.getElementById(e);t&&t.parentNode.removeChild(t)};l.on(E,i);l.on(g,i);l.on(_,O);export{T as highlightObject,H as highlightStyle};
//# sourceMappingURL=preview-0c1d2d9d.js.map
