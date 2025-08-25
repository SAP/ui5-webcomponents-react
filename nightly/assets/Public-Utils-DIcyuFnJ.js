import{r as l,E as S,j as e,aa as C,ab as y,ac as D,J as T}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as u}from"./index-CniPTHSz.js";import{M as P,S as o}from"./blocks-CNZWeGQ1.js";import{M as k,a as R}from"./index-DxnggiYi.js";import"./Tag-BxyquP8A.js";import"./copy-BNU1F6ls.js";import{F as M}from"./CommandsAndQueries-CtCNZgsU.js";import{T as B}from"./TableOfContent-HhhNHGfL.js";import{T as s}from"./ThemingParameters-pyhX3s39.js";import{S as E}from"./index-BRkEXvtH.js";import{O as F}from"./index-DfNHlgXD.js";import{P as d}from"./index-DXlLXtjE.js";import{F as I,a as O}from"./index-C-1ECvAU.js";import{L as V}from"./index-Czg7RjtG.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./slim-arrow-down-BTcmIAZo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Option-BkfkZtHI.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Panel-qqmmAREN.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CWHb9_GM.js";const c={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},m=[],p=[],j=[],z=Object.entries(s).filter(([i,n])=>i.includes("Font")?i.includes("FontUrl")?!0:(m.push([i,n]),!1):i.includes("Color")||i.includes("Shadow")||i.includes("Background")||i.includes("Chart")?(p.push([i,n]),!1):i.includes("Space")||i.includes("Margin")||i.includes("Padding")||i.includes("Gap")||i.includes("Breakpoint")?(j.push([i,n]),!1):!0),L=i=>{const n={};return i.includes("Family")||i.includes("FontUrl")?n.fontFamily=i:i.includes("Size")?n.fontSize=i:i.includes("Weight")&&(n.fontWeight=i),n},H=i=>{const n={};return i.includes("Shadow")?n.boxShadow=i:n.backgroundColor=i,n},b=({value:i,varKey:n,theme:r,style:t={}})=>{const[a,g]=l.useReducer(v=>!v,!1),[f,w]=l.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`));return l.useEffect(()=>{setTimeout(()=>{w(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`))},200)},[r]),e.jsxs(I,{direction:O.Column,style:{width:"85%"},children:[e.jsx(T,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:g,children:a?i:n}),e.jsx(V,{children:f})]},n)},A=i=>{const{varKey:n,value:r,theme:t}=i;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(b,{value:r,varKey:n,theme:t}),e.jsx("div",{style:{...H(r),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${s.sapField_BorderColor}`}})]})},h=i=>{const{varKey:n,value:r,theme:t,style:a={}}=i;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(b,{value:r,varKey:n,style:a,them:t})})},G=()=>{const[i,n]=l.useState(S());return e.jsx(C,{children:e.jsxs("div",{style:{backgroundColor:s.sapBackgroundColor,padding:"1rem",borderRadius:s.sapElement_BorderCornerRadius,boxShadow:s.sapContent_Shadow0},children:[e.jsx(E,{onChange:r=>{const t=r.detail.selectedOption.dataset.value;n(t),D(t)},children:y.map(({title:r,value:t})=>e.jsx(F,{"data-value":t,selected:t===i,children:r},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:c,children:p.map(([r,t])=>e.jsx(A,{varKey:r,value:t,theme:i},r))})}),e.jsx(d,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...c,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:m.map(([r,t])=>e.jsx(h,{varKey:r,value:t,style:{...L(t)},theme:i},r))})}),e.jsx(d,{headerText:"Spacing",collapsed:!0,children:e.jsx("div",{style:c,children:j.map(([r,t])=>e.jsx(h,{varKey:r,value:t,theme:i},r))})}),e.jsx(d,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:c,children:z.map(([r,t])=>e.jsx(h,{varKey:r,value:t,theme:i},r))})})]})})};function x(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...u(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(k,{design:R.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(B,{}),`
`,e.jsx(n.h2,{id:"device",children:"Device"}),`
`,e.jsx(o,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,e.jsx(n.h3,{id:"general-device-information",children:"General Device Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isIE()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Internet Explorer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isSafari()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Safari"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isDesktop()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on desktop devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isTablet()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on tablet devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isPhone()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on mobile phone devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.supportsTouch()"})," - returns ",e.jsx(n.code,{children:"true"})," if device supports touch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getCurrentRange(width?: number)"})," ",e.jsx("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,e.jsx("br",{}),`
Returns: `,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getOrientation()"})," ",e.jsx("br",{}),`
Returns the current orientation of the device, `,e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"event-listeners",children:"Event Listeners"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ height: number, width: number }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached resize handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,e.jsx("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Media Query"}),e.jsx(n.th,{children:"Name"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(max-width:599px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Phone"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:600px) and (max-width:1023px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Tablet"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Desktop"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1440px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"LargeDesktop"})})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"callback"}),` is a function which will be called with
`,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-parameters",children:"Theming Parameters"}),`
`,e.jsx(o,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["By using the global ",e.jsx(n.code,{children:"--sap..."}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,e.jsx(n.code,{children:"ThemingParameters"})," is an JS object containing all available CSS variables mapped to their name."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,e.jsx(n.p,{children:"Is equivalent to:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We don't recommend excessive use of inline-style!"]}),`
`,e.jsx(G,{}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(o,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/knowledge-base-internationalization--docs",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(o,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(M,{})]})}function Pe(i={}){const{wrapper:n}={...u(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(x,{...i})}):x(i)}export{Pe as default};
