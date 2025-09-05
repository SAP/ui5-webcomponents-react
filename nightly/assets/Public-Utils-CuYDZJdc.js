import{r as l,j as e,_ as S,$ as C,v as y}from"./iframe-BGSq42U4.js";import{useMDXComponents as u}from"./index-DdgODfaa.js";import{M as D,S as o}from"./blocks-DinJR8BJ.js";import{M as T,a as k}from"./index-4G2XFF8s.js";import"./Tag-DFLgZ7W6.js";import{F as P}from"./CommandsAndQueries-DmG8Z04y.js";import{r as R,u as M}from"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{T as B}from"./TableOfContent-CeNmhJSM.js";import{T as s}from"./ThemingParameters-pyhX3s39.js";import{S as F}from"./index-Bd7g7Uhh.js";import{O as E}from"./index-CuzQn-ym.js";import{P as d}from"./index-UuFKFM1s.js";import{F as I,a as O}from"./index-CFLPIYxg.js";import{L as V}from"./index-DeoM-MQY.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./Select-s6cC4PfQ.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./slim-arrow-down-DLcfp9eI.js";import"./ResponsivePopoverCommon.css-C97v6xTI.js";import"./ValueStateMessage.css-c8cGQ3y8.js";import"./Option-De9cvay_.js";import"./ListItemBaseTemplate-DPLSdGuC.js";import"./Panel-D8-a_lcL.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";const c={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},m=[],p=[],j=[],z=Object.entries(s).filter(([i,n])=>i.includes("Font")?i.includes("FontUrl")?!0:(m.push([i,n]),!1):i.includes("Color")||i.includes("Shadow")||i.includes("Background")||i.includes("Chart")?(p.push([i,n]),!1):i.includes("Space")||i.includes("Margin")||i.includes("Padding")||i.includes("Gap")||i.includes("Breakpoint")?(j.push([i,n]),!1):!0),L=i=>{const n={};return i.includes("Family")||i.includes("FontUrl")?n.fontFamily=i:i.includes("Size")?n.fontSize=i:i.includes("Weight")&&(n.fontWeight=i),n},H=i=>{const n={};return i.includes("Shadow")?n.boxShadow=i:n.backgroundColor=i,n},b=({value:i,varKey:n,theme:r,style:t={}})=>{const[a,g]=l.useReducer(v=>!v,!1),[f,w]=l.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`));return l.useEffect(()=>{setTimeout(()=>{w(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`))},200)},[r]),e.jsxs(I,{direction:O.Column,style:{width:"85%"},children:[e.jsx(y,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:g,children:a?i:n}),e.jsx(V,{children:f})]},n)},A=i=>{const{varKey:n,value:r,theme:t}=i;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(b,{value:r,varKey:n,theme:t}),e.jsx("div",{style:{...H(r),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${s.sapField_BorderColor}`}})]})},h=i=>{const{varKey:n,value:r,theme:t,style:a={}}=i;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(b,{value:r,varKey:n,style:a,them:t})})},_=()=>{const[i,n]=l.useState(R());return e.jsx(S,{children:e.jsxs("div",{style:{backgroundColor:s.sapBackgroundColor,padding:"1rem",borderRadius:s.sapElement_BorderCornerRadius,boxShadow:s.sapContent_Shadow0},children:[e.jsx(F,{onChange:r=>{const t=r.detail.selectedOption.dataset.value;n(t),M(t)},children:C.map(({title:r,value:t})=>e.jsx(E,{"data-value":t,selected:t===i,children:r},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:c,children:p.map(([r,t])=>e.jsx(A,{varKey:r,value:t,theme:i},r))})}),e.jsx(d,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...c,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:m.map(([r,t])=>e.jsx(h,{varKey:r,value:t,style:{...L(t)},theme:i},r))})}),e.jsx(d,{headerText:"Spacing",collapsed:!0,children:e.jsx("div",{style:c,children:j.map(([r,t])=>e.jsx(h,{varKey:r,value:t,theme:i},r))})}),e.jsx(d,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:c,children:z.map(([r,t])=>e.jsx(h,{varKey:r,value:t,theme:i},r))})})]})})};function x(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...u(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(T,{design:k.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(B,{}),`
`,e.jsx(n.h2,{id:"device",children:"Device"}),`
`,e.jsx(o,{code:"import * as Device from '@ui5/webcomponents-react-base/Device';"}),`
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
`,e.jsx(o,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';"}),`
`,e.jsxs(n.p,{children:["By using the global ",e.jsx(n.code,{children:"--sap..."}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,e.jsx(n.code,{children:"ThemingParameters"})," is an JS object containing all available CSS variables mapped to their name."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,e.jsx(n.p,{children:"Is equivalent to:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We don't recommend excessive use of inline-style!"]}),`
`,e.jsx(_,{}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(o,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/knowledge-base-internationalization--docs",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(o,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(P,{})]})}function Pe(i={}){const{wrapper:n}={...u(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(x,{...i})}):x(i)}export{Pe as default};
