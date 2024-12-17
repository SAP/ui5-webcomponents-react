import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as p}from"./index-BxVt_j7t.js";import{ae as v,ap as s}from"./index-UBRkkpXl.js";import{M as y,a as C}from"./index-BirWx2Ta.js";import"./index-DXOOLOQb.js";import"./TagDesign-Dou_yO3g.js";import{r as d}from"./index-B7gF9TUu.js";import"./index-CE_NGgsP.js";import"./chunk-NUUEMKO5-3oFdRnTJ.js";import"./Button-BBQGaetD.js";import{r as S,c as D}from"./withWebComponent-CEvNJu7C.js";import"./copy-C7Fphd8b.js";import{F as T}from"./CommandsAndQueries-DMonXJ-C.js";import{T as k}from"./TableOfContent-DCqtbPc-.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import{M as P}from"./utils-CU_7gSfg.js";import{T as o}from"./ThemingParameters-B358vlzA.js";import{T as R}from"./index-DF15tj6Y.js";import{S as F}from"./index-DzTQs6Hw.js";import{O as M}from"./index-i6s9Gp6L.js";import{P as l}from"./index-D5AGyWrd.js";import{F as B,a as E}from"./index-vaKWw58t.js";import{T as O}from"./index-CGNOavxc.js";import{L as V}from"./index-D87yHkJZ.js";import"./iframe-BpqSco-j.js";import"../sb-preview/runtime.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./Keys-CAuuEE_3.js";import"./utils-BPMdnTU-.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./i18n-defaults-B_32hVC3.js";import"./client-DPlujwLe.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CdlG1iEF.js";import"./index-Dn_R1yFr.js";import"./Link-D1X4tUVM.js";import"./index-BIKVfRm5.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-B6mTyuQV.js";import"./BusyIndicator-B8hbdNmF.js";import"./Label-VY9fyDaj.js";import"./index-C-4O2gce.js";import"./index-WfJCmgcc.js";import"./Avatar-pB0pR3L5.js";import"./employee-B31iqtd8.js";import"./main-BwlHOnYP.js";import"./I18nStore-DnWKAes0.js";import"./useStylesheet-DVp2Y5Uf.js";import"./Select-B9ZdXVoE.js";import"./InvisibleMessage-B2Ebl_Ws.js";import"./ValueState-Bg0UWejw.js";import"./slim-arrow-down-BTWcGT7M.js";import"./List-DZCgvSCU.js";import"./ItemNavigation-DWbUprUI.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Dfd5aYD9.js";import"./CheckBox-CDtSoek2.js";import"./accept-W9Dxcudv.js";import"./slim-arrow-right-BHycGIJI.js";import"./ResponsivePopover-B5n9d-7n.js";import"./Dialog-DB-xi5-R.js";import"./ResponsivePopoverCommon.css-BKVe1mOp.js";import"./ValueStateMessage.css-C_FQVeG2.js";import"./Option-0ZkWBs16.js";import"./Panel-BNCgb67f.js";import"./slideUp-By1UZlL6.js";import"./animate-DF-0g--S.js";import"./AnimationMode-CoOlqW6c.js";import"./Text-jguppuUa.js";const a={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},x=[],u=[],I=Object.entries(o).filter(([n,r])=>n.includes("Font")?n.includes("FontUrl")?!0:(x.push([n,r]),!1):n.includes("Color")||n.includes("Shadow")||n.includes("Background")||n.includes("Chart")?(u.push([n,r]),!1):!0),z=n=>{const r={};return n.includes("Family")||n.includes("FontUrl")?r.fontFamily=n:n.includes("Size")?r.fontSize=n:n.includes("Weight"),r},L=n=>{const r={};return n.includes("Shadow")?r.boxShadow=n:r.backgroundColor=n,r},j=({value:n,varKey:r,theme:i,style:t={}})=>{const[c,b]=d.useReducer(w=>!w,!1),[g,f]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`));return d.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`))},200)},[i]),e.jsxs(B,{direction:E.Column,style:{width:"85%"},children:[e.jsx(O,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:b,children:c?n:r}),e.jsx(V,{children:g})]},r)},H=n=>{const{varKey:r,value:i,theme:t}=n;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:i,varKey:r,theme:t}),e.jsx("div",{style:{...L(i),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=n=>{const{varKey:r,value:i,theme:t,style:c={}}=n;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:i,varKey:r,style:c,them:t})})},A=()=>{const[n,r]=d.useState(S());return e.jsx(R,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(F,{onChange:i=>{const t=i.detail.selectedOption.dataset.value;r(t),D(t)},children:P.map(({title:i,value:t})=>e.jsx(M,{"data-value":t,selected:t===n,children:i},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:a,children:u.map(([i,t])=>e.jsx(H,{varKey:i,value:t,theme:n},i))})}),e.jsx(l,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...a,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:x.map(([i,t])=>e.jsx(h,{varKey:i,value:t,style:{...z(t)},theme:n},i))})}),e.jsx(l,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:a,children:I.map(([i,t])=>e.jsx(h,{varKey:i,value:t,theme:n},i))})})]})})};function m(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
`,e.jsx(r.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(y,{design:C.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(k,{}),`
`,e.jsx(r.h2,{id:"device",children:"Device"}),`
`,e.jsx(s,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,e.jsx(r.h3,{id:"general-device-information",children:"General Device Information"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isIE()"})," - returns ",e.jsx(r.code,{children:"true"})," if running in Internet Explorer"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isSafari()"})," - returns ",e.jsx(r.code,{children:"true"})," if running in Safari"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isDesktop()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on desktop devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isTablet()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on tablet devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isPhone()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on mobile phone devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.supportsTouch()"})," - returns ",e.jsx(r.code,{children:"true"})," if device supports touch"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.getCurrentRange(width?: number)"})," ",e.jsx("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,e.jsx("br",{}),`
Returns: `,e.jsx(r.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.getOrientation()"})," ",e.jsx("br",{}),`
Returns the current orientation of the device, `,e.jsx(r.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,e.jsx(r.h3,{id:"event-listeners",children:"Event Listeners"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,e.jsx(r.code,{children:"callback"})," is a function which will be called with ",e.jsx(r.code,{children:"{ height: number, width: number }"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached resize handler`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,e.jsx(r.code,{children:"callback"})," is a function which will be called with ",e.jsx(r.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,e.jsx("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Media Query"}),e.jsx(r.th,{children:"Name"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(max-width:599px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Phone"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:600px) and (max-width:1023px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Tablet"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Desktop"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:1440px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"LargeDesktop"})})]})]})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"callback"}),` is a function which will be called with
`,e.jsx(r.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,e.jsx(r.h2,{id:"theming-parameters",children:"Theming Parameters"}),`
`,e.jsx(s,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["By using the global ",e.jsx(r.code,{children:"--sap..."}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,e.jsx(r.code,{children:"ThemingParameters"})," is an JS object containing all available CSS variables mapped to their name."]}),`
`,e.jsx(r.p,{children:"Example:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,e.jsx(r.p,{children:"Is equivalent to:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note:"})," We don't recommend excessive use of inline-style!"]}),`
`,e.jsx(A,{}),`
`,e.jsx(r.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(r.h3,{id:"usei18nbundle",children:e.jsx(r.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(r.a,{href:"?path=/docs/knowledge-base-internationalization--docs",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(r.h3,{id:"useviewportrange",children:e.jsx(r.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(r.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(r.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(T,{})]})}function Rr(n={}){const{wrapper:r}={...p(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(m,{...n})}):m(n)}export{Rr as default};
