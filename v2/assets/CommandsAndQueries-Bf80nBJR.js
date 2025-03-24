import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./preview-DM0o_rDm.js";import"./DocsRenderer-CFRXHY34-Boyb1u06.js";import{j as Y,H as G,a as f}from"./index-DM-PQeCZ.js";import{r as m}from"./index-Bi_W_Jd4.js";import"./index-BKAx7q_3.js";import{B as U}from"./Button-CVhFbCad.js";import{P as I}from"./Popover-BgaZr5c3.js";import{W as Q}from"./WrappingType-BBpR8qCJ.js";import{r as q}from"./index-C1S0AQHK.js";import{F as j,b as A,c as b,d as W}from"./index-DkLUlqZo.js";import{L as g}from"./index-CTl4EJPq.js";import{B as H}from"./index-q_xBifsn.js";import{L as d}from"./index-V8njyB6i.js";import{P as z}from"./index-V9E_9yBg.js";import{T as w}from"./index-D1NZoOym.js";import{L as P}from"./Link-7OPDvJp0.js";import{M as O,a as _}from"./index-CB2NJyj5.js";import{a as K}from"./addCustomCSSWithScoping-CRaJDqw6.js";import{c as B}from"./clsx-B-dksMZM.js";import{C as J}from"./index-sxpf8z2p.js";import{C as V}from"./index-D-QlfT-1.js";import{A as Z}from"./index-BBw2fVoz.js";import{T as $}from"./index-1x_xMzNI.js";const{definePreview:Qe}=__STORYBOOK_MODULE_PREVIEW_API__;function y({packageName:t,deepPath:r}){return e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"from"}),e.jsx("span",{children:" "}),e.jsxs("span",{style:{color:"rgb(0, 136, 0)",fontSize:"14px"},children:[r?t.slice(0,-1):t,r&&r.path,r&&"'"]}),e.jsx("span",{style:{fontSize:"14px"},children:";"}),r&&e.jsx("br",{})]})}y.displayName="FromPath";const k=({moduleNames:t,packageName:r})=>{if(!t)return null;const n=r.includes("compat")?t.map(o=>({path:`/dist/components/${o}/index.js`,moduleName:o})):[null];return e.jsx("pre",{"data-import":!0,style:{display:"contents",overflowX:"auto",padding:"0px",background:"white",color:"black",whiteSpace:"pre-wrap",fontSize:"14px",margin:"0px"},children:e.jsxs("code",{style:{whiteSpace:"pre"},children:[!n[0]&&e.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"import"}),n.map(o=>o?e.jsxs(m.Fragment,{children:[e.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"import"}),e.jsxs("span",{style:{fontSize:"14px"},children:[" ","{"," ",o.moduleName," ","}"," "]}),e.jsx(y,{packageName:r,deepPath:o})]},o.path):e.jsxs("span",{style:{fontSize:"14px"},children:[" ","{",t.length>2?e.jsxs(e.Fragment,{children:[t.map(l=>e.jsxs(m.Fragment,{children:[e.jsx("br",{}),"  ",l,","]},l)),e.jsx("br",{})]}):e.jsxs(e.Fragment,{children:[" ",t.join(", ")," "]}),"}"," "]},"0")),!n[0]&&e.jsx(y,{packageName:r})]})})};k.displayName="ImportStatement";const X=t=>{const r=m.useContext(Y),s=r.componentStories().at(0).id.startsWith("charts-"),n=r.componentStories().at(0).id.startsWith("legacy-"),o=r.componentStories().at(0).kind.split("/"),l=o[o.length-1].replace("(experimental)","").trim(),i=t.moduleNames??[l];return e.jsx(k,{moduleNames:i,packageName:`'@ui5/webcomponents-react${s?"-charts":n?"-compat":""}'`})};X.displayName="Import";const ee=""+new URL("SAP_Best_R_grad_blk_scrn-ClR0baKc.png",import.meta.url).href,te="_footer_1xqg2_1",re="_content_1xqg2_9",L={footer:te,content:re},qe=({style:t})=>{const r=m.useRef(null),s=m.useRef(null),[n,o]=m.useState(!1),l=i=>{r.current.opener=i.target,o(u=>!u)};return q.createPortal(e.jsxs("footer",{className:L.footer,style:t,children:[e.jsx("div",{ref:s,className:L.content,children:e.jsxs(j,{justifyContent:W.SpaceBetween,alignItems:b.Center,wrap:A.Wrap,style:{width:"100%"},children:[e.jsxs(j,{alignItems:b.Center,wrap:A.Wrap,children:[e.jsx("img",{src:ee,alt:"SAP Logo with Text 'The Best Run'",style:{height:"1.5rem"}}),e.jsxs(g,{wrappingType:Q.Normal,children:["© Copyright ",new Date().getFullYear(),", SAP SE and UI5 Web Components for React Contributors"]})]}),e.jsxs(j,{alignItems:b.Center,wrap:A.Wrap,children:[e.jsx(H,{design:U.Transparent,onClick:l,accessibilityAttributes:{hasPopup:"dialog",expanded:n},children:"Privacy"})," ",e.jsx(g,{children:"|"})," ",e.jsx(d,{href:"https://www.sap.com/corporate/en/legal/terms-of-use.html",children:"Terms of Use"})," ",e.jsx(g,{children:"|"})," ",e.jsx(d,{href:"https://www.sap.com/corporate/en/legal/impressum.html",children:"Legal Disclosure"})," ",e.jsx(g,{children:"|"})," ",e.jsx(d,{href:"https://www.sap.com/corporate/en/legal/trademark.html",children:"Trademarks"})]})]})}),e.jsx(z,{open:n,headerText:"Privacy Statement",ref:r,placement:I.Top,"data-ui5-compact-size":!0,style:{width:"360px",maxWidth:"100%"},onClose:()=>o(!1),children:e.jsxs(w,{children:["This site is hosted by"," ",e.jsx(d,{href:"https://pages.github.com/",target:"_blank",children:"GitHub Pages"}),". Please see the"," ",e.jsx(d,{href:"https://docs.github.com/en/github/site-policy/github-privacy-statement",target:"_blank",children:"GitHub Privacy Statement"})," ","for any information how GitHub processes your personal data."]})})]}),document.getElementById("storybook-docs"))},ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAAAxeMYwd8UwcM8weMUwd8cweccweMQwd78yeMcxecUwd8Uxd8UxecYxeMUwcL9+q9t+qtxXktDm7veYu+PY5fWyzOlxothlmdRYkdBLiM2+1e1yodjZ5vS/1ezL3fHM3fCYu+Ll7vjy9/vY5vRkmtSlw+ayzOpyothKic2lxOZLic2Ls9+/1e3Z5fSlw+c+gMqLs96YvOKxzOr///8xeMYqO335AAAAEHRSTlMA34AQvyBfYCB/z8/Pz78Qi8soFQAAAk5JREFUeF7szsENgDAQBLE5HhCkkFSz/beGKALdZ1yBgX2vtHhOPqPSpgZQaVSbK60OZlot0oz8xYABAwYMGDBgwIABAwYMGDBgwIABAwYMGDDwtm8nO1LDQACGQ8OABNLQ2XpdnJTHA8YGTLr8/q/GcsJTJmkO5br0f26pP1k+VEVy2Pvvxx40/kpDr47jaX8bAP8/Ajh0SmMmNe5LAD6rGSxYbsAOcDbDCwgKURLQAIoCGo2iAKdRFOAAZQGfUBbgUBhAD0APfttYa83WX843A0YSJAAYSfkD0FOIf+XWlzxgOZUAhphvi2m9JT9xa2AEfMEkCFnmGtgAity1bM5yAdoEoONMPABMAmGA/AmgKQ5oMakvDnjCtGtpwIZMoLYs4Ae+DOqigIA02LECqJOm6nIAg9mgDpwACqXpq2UGLM+kV8sNoCMBJfADoseZusALWBZAwwxY3s06fkB0m1kBA4C0hrm7yAxYJnTMgGWCYQHQzAbzARuAXkfAXDUngG5CtCdGAG3SSDIlAdEpAvCsANqEL/paFkAFUBZAJxVdHGAwrTgg6hKAuQm8LQFQ3a0nAEwABBvz7TBpYAL8e/IETLqyAfKEcMS0mhOAqOrEEDzZFiz7V7L+6E+7w+GwP3lFl5UhsgKWq4UB36IsQFthgI+ygCnKAnwUBYCJjIARF9JT4N2O3QRLf8++njd+0JipfTbl3hc023EznNs/EN2eL8/ehPv7ghnAHXAHPMoC3lcrWcDb6qPs0++qqh4EBa8eqt+9+yADeLN6XVU/AZaNDaYVEGRKAAAAAElFTkSuQmCC",se="_cardContainer_wbrgz_1",oe="_cardContent_wbrgz_8",ie="_deprecationNotice_wbrgz_12",ae="_template_wbrgz_16",ce="_unssupportedMessage_wbrgz_19",le="_overlay_wbrgz_24",pe="_popover_wbrgz_37",de="_verticalLine_wbrgz_41",h={cardContainer:se,cardContent:oe,deprecationNotice:ie,template:ae,unssupportedMessage:ce,overlay:le,popover:pe,verticalLine:de};K("ui5-card-header",":host([data-project-template]) .ui5-card-header .ui5-card-header-avatar { pointer-events: auto; }");function We(t){const{title:r,subtitle:s,logo:n,logoAttribution:o,isTypeScript:l,children:i,href:u,deprecationNotice:p,isTemplate:c,stackBlitzHref:a,showUnsupportedMessage:x,note:C}=t,[R,v]=m.useState(!1),S=m.useRef(null);return e.jsx($,{children:e.jsxs("div",{className:B(h.cardContainer,c&&h.template),children:[x&&e.jsxs(e.Fragment,{children:[e.jsxs(O,{hideCloseButton:!0,design:_.Critical,className:h.unssupportedMessage,children:["Currently not supported by V2."," ",e.jsx(d,{ref:S,accessibleRole:"Button",onClick:()=>{v(!0)},children:"Show More."})]}),e.jsx(z,{className:h.popover,opener:S.current,open:R,onClose:()=>{v(!1)},children:e.jsxs(w,{children:["Currently, the ",e.jsx("code",{children:"BarcodeScannerDialog"})," web component isn't compatible with SSR environments. For the Next.js Pages Router and Remix, this bug crashes the entire build process, even if the component isn't imported.",e.jsx("br",{}),"This is ",e.jsx("b",{children:"not"})," the case for the Next.js App Router; there, the build only crashes if the component is used.",e.jsx("br",{}),e.jsx("br",{}),"You can find the corresponding GitHub issue"," ",e.jsx(d,{href:"https://github.com/SAP/ui5-webcomponents/issues/9771",target:"_blank",children:"here"}),"."]})})]}),e.jsx(J,{className:B(x&&h.overlay),header:e.jsx(V,{"data-project-template":"",titleText:r,subtitleText:s,action:l&&e.jsx("img",{src:ne,height:24,width:24,alt:"TypeScript Logo",title:"TypeScript Logo. Original Source: https://www.typescriptlang.org/branding/"}),avatar:e.jsx(Z,{title:o,children:e.jsx("img",{src:n,alt:`Logo of ${r}`})})}),children:e.jsxs("div",{className:h.cardContent,children:[p&&e.jsx(O,{hideCloseButton:!0,design:_.Critical,className:h.deprecationNotice,children:p}),e.jsxs(d,{design:P.Emphasized,href:u,children:["View",c?" Template":" Example"]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:h.verticalLine,children:"|"}),e.jsx(d,{design:P.Emphasized,href:a,children:"View in StackBlitz"})]}),!!C&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("span",{children:[e.jsx(g,{showColon:!0,children:"Note"}),C]})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx(w,{children:"What's included:"}),i]})]})})]})})}function T(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),s.push.apply(s,n)}return s}function M(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?T(Object(s),!0).forEach(function(n){me(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function me(t,r,s){return r=he(r),r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function he(t){var r=ue(t,"string");return typeof r=="symbol"?r:String(r)}function ue(t,r){if(typeof t!="object"||t===null)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}const xe=E({});function E(t){return r.withOptions=s=>E(M(M({},t),s)),r;function r(s,...n){const o=typeof s=="string"?[s]:s.raw,{escapeSpecialCharacters:l=Array.isArray(s)}=t;let i="";for(let c=0;c<o.length;c++){let a=o[c];l&&(a=a.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),i+=a,c<n.length&&(i+=n[c])}const u=i.split(`
`);let p=null;for(const c of u){const a=c.match(/^(\s+)\S+/);if(a){const x=a[1].length;p?p=Math.min(p,x):p=x}}if(p!==null){const c=p;i=u.map(a=>a[0]===" "||a[0]==="	"?a.slice(c):a).join(`
`)}return i=i.trim(),l&&(i=i.replace(/\\n/g,`
`)),i}}function ge(t){return xe`
\`\`\`ts
${t}
\`\`\`
    
`}function N(t){if(t){const{expression:r,applications:s}=t;return typeof(t==null?void 0:t.name)=="string"?t.name:`${r.name}<${s==null?void 0:s.map(n=>n.name).join(", ")}>`}return""}function D(t){return t!=null&&t.name?t.name:N(t.expression)}function fe(t){const r=t.find(s=>s.title==="example");return r&&typeof r.description=="string"?e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"### Example"}),e.jsx(f,{children:ge(r.description)})]}):null}function je(t){switch(t.type){case"text":return t.value;case"strong":return`**${t.children.reduce((r,s)=>(r+=s.value,r),"")}**`;case"inlineCode":return`\`${t.value}\``;default:return typeof t.value=="string"?t.value:(console.warn("Unknown text type!"),"")}}function F(t){return t.children.reduce((r,s)=>{if(s.type==="paragraph")return r+=s.children.reduce((n,o)=>(n+=je(o),n),""),r+=`

`,r},"")}const Ae=({api:t})=>t.sort((r,s)=>r.name.localeCompare(s.name)).map(r=>{var s;return e.jsxs(m.Fragment,{children:[e.jsx(G,{children:r.name}),e.jsxs("code",{children:[r.name,"(",(s=r.params)==null?void 0:s.map(n=>`${n.name}${n.type.type==="OptionalType"?"?":""}:${D(n.type)}`).join(", "),"):",r.returns.map(({type:n})=>N(n))]}),e.jsx(f,{children:F(r.description)}),fe(r.tags),!!r.params.length&&e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"### Parameters"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Name"})}),e.jsx("td",{children:e.jsx("b",{children:"Type"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsx("tbody",{children:r.params.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:n.type.type==="OptionalType"?e.jsxs("i",{children:[n.name,"?"]}):n.name}),e.jsx("td",{children:D(n.type)}),e.jsx("td",{children:n!=null&&n.description?F(n.description):"-"})]},n.name))})]})]})]},r.name)});Ae.displayName="CommandsAndQueries";export{Ae as C,qe as F,k as I,We as P,X as a};
