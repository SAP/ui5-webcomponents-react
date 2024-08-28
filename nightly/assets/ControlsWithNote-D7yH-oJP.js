import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{ak as P,ar as C,as as R}from"./index-DmLT14xl.js";import{M as S,a as D}from"./index-BY3GWTH_.js";import"./index-E4vxyXwy.js";import{T as B}from"./TagDesign-Dou_yO3g.js";import{r as h}from"./index-RYns6xqu.js";import{r as I}from"./index-sbqOYYIm.js";import{a as M}from"./utils-DiWcknC8.js";import{T as F}from"./index-BIFp705q.js";import{P as L}from"./index-bSr5Ece3.js";import{L as H}from"./index-B0KcZA3m.js";const E="_container_16cjh_1",w="_strip_16cjh_5",v={container:E,strip:w},A="_parameters_vikdk_1",O="_parameterName_vikdk_5",W="_parameterDetails_vikdk_9",$="_domRefCodeBlock_vikdk_13",z="_domRefCode_vikdk_13",G="_deprecationInfoBadge_vikdk_32",U="_deprecationInfoPopover_vikdk_36",a={parameters:A,parameterName:O,parameterDetails:W,domRefCodeBlock:$,domRefCode:z,deprecationInfoBadge:G,deprecationInfoPopover:U};function N(t){return e.jsx("pre",{className:a.domRefCodeBlock,children:e.jsx("code",{className:a.domRefCode,children:t.children})})}function Y(t){var o;return t.kind==="method"?e.jsxs(N,{children:[e.jsx("span",{style:{color:"rgb(64, 120, 242)"},children:t.name}),e.jsx("span",{style:{color:"rgb(56, 58, 66)"},children:"("}),(o=t.parameters)==null?void 0:o.map((r,l)=>e.jsxs(h.Fragment,{children:[e.jsx("span",{style:{color:"rgb(56, 58, 66)"},children:r.name}),r.optional?e.jsx("span",{style:{color:"rgb(64, 120, 242)"},children:"?"}):null,e.jsx("span",{style:{color:"rgb(64, 120, 242)"},children:": "}),e.jsx("span",{style:{color:"rgb(80, 161, 79)"},children:r.type.text}),l<t.parameters.length-1?e.jsx("span",{style:{color:"rgb(56, 58, 66)"},children:", "}):null]},r.name)),e.jsx("span",{style:{color:"rgb(56, 58, 66)"},children:")"}),e.jsx("span",{style:{color:"rgb(64, 120, 242)"},children:": "}),e.jsx("span",{style:{color:"rgb(80, 161, 79)"},children:t.return.type.text})]}):e.jsxs(N,{children:[t.readonly?e.jsx("span",{style:{color:"rgb(166, 38, 164)"},children:"readonly "}):null,e.jsx("span",{style:{color:"rgb(56, 58, 66)"},children:t.name}),e.jsx("span",{style:{color:"rgb(64, 120, 242)"},children:": "}),e.jsx("span",{style:{color:"rgb(80, 161, 79)"},children:t.type.text})]})}function q(){var j,u,g,f,b,y,_;const t=h.useContext(P),o=(u=(j=t.attachedCSFFile)==null?void 0:j.meta)==null?void 0:u.tags,r=o==null?void 0:o.find(s=>s.startsWith("cem-module:")),l=(f=(g=t.componentStories().at(0))==null?void 0:g.component)==null?void 0:f.displayName,c=h.useRef(null),T=new Set(Object.keys(((b=t.primaryStory)==null?void 0:b.argTypes)??{})),d=M();let m=r?r.split(":")[1]:l;const i=((y=d==null?void 0:d.modules.find(s=>s.path===`dist/${m}.js`))==null?void 0:y.declarations.find(s=>s.customElement===!0&&s.name===m))??[],p=((_=i==null?void 0:i.members)==null?void 0:_.filter(s=>{var n,k;return!(T.has(s.name)&&!((k=(n=s.type)==null?void 0:n.text)!=null&&k.includes("HTMLElement")))}))??[],x=(i==null?void 0:i.cssParts)??[];return e.jsxs(e.Fragment,{children:[p.length>0?e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"Attributes & Methods"}),e.jsx("p",{children:"This component exposes public attributes and methods. You can use them directly on the instance of the component, e.g. by using React Refs."}),e.jsxs(S,{hideCloseButton:!0,style:{marginBlockEnd:"10px"},children:["This table is showing ",e.jsx("b",{children:"additional"})," attributes and methods which are not available as props. ",e.jsx("br",{}),"All props (without event handlers, children, and slots) are available as attributes on the DOM ref as well."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:p.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(Y,{...s}),s.deprecated&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx(F,{className:a.deprecationInfoBadge,design:B.Critical,interactive:typeof s.deprecated=="string",onClick:typeof s.deprecated=="string"?n=>{c.current.innerHTML=s.deprecated,c.current.showAt(n.currentTarget)}:void 0,children:"deprecated"})]})]}),e.jsx("td",{children:s.parameters?s.parameters.map(n=>e.jsxs("div",{className:a.parameters,children:[e.jsx("p",{className:a.parameterName,children:n.name}),n.description?e.jsx("p",{className:a.parameterDetails,dangerouslySetInnerHTML:{__html:n.description}}):null]},n.name)):e.jsx(e.Fragment,{children:"—"})}),e.jsx("td",{dangerouslySetInnerHTML:{__html:s.description}})]},s.name))})]}),I.createPortal(e.jsx(L,{ref:c,className:a.deprecationInfoPopover}),document.body)]}):null,x.length>0?e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"CSS Shadow Parts"}),e.jsxs("p",{children:[e.jsx(H,{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",children:"CSS Shadow Parts"})," ","allow developers to style elements inside the Shadow DOM."]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:l})," exposes the following CSS Shadow Parts:"]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:x.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]}):null]})}function oe(t){const{hideHTMLPropsNote:o,noteText:r,...l}=t;return e.jsxs("div",{className:v.container,children:[!o&&e.jsx(S,{design:D.Information,hideCloseButton:!0,className:v.strip,children:r??"This component supports all HTML attributes."}),e.jsx(R,{...l}),e.jsx(q,{})]})}export{oe as C};
