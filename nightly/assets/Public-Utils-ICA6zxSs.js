import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as v,aj as s}from"./index-Cs-JF4M_.js";import{M as y,a as C}from"./index-D7Nv88Gg.js";import"./index-D0b7yN0N.js";import"./TagDesign-Dou_yO3g.js";import{r as d}from"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-NUUEMKO5-CQMxh7ie.js";import{c as S,h as D}from"./withWebComponent-BS26LpJo.js";import"./copy-B8ijgEE_.js";import"./Button-BoqZ1Nk6.js";import{F as T}from"./CommandsAndQueries-CdLMPYpM.js";import{T as k}from"./TableOfContent-bhM-b_eu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{M as P}from"./utils-C7BWTnfN.js";import{T as o}from"./ThemingParameters-DOkJX3Ed.js";import{T as R}from"./index-CkUxtv2k.js";import{S as F}from"./index-UK0OYeGo.js";import{O as M}from"./index-B2TI7Wjv.js";import{P as l}from"./index-BfQvd1Gd.js";import{F as B,a as E}from"./index-CSDIGC9y.js";import{T as O}from"./index-CHNB8-uH.js";import{L as V}from"./index-D5w6Jnaw.js";import"./iframe-Dw482Z-p.js";import"../sb-preview/runtime.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./i18n-defaults-DyAOnJXW.js";import"./client-BzooOYO_.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DOubndiy.js";import"./index-B8rq_Cwn.js";import"./Link-DWmmrhq6.js";import"./index-Je_4VAbv.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-DYrmYIPb.js";import"./BusyIndicator-DLv3RVXJ.js";import"./Label-DeMESwab.js";import"./index-Z34fJdHI.js";import"./index-BNw2TIlH.js";import"./Avatar-D0wBket6.js";import"./employee-BnxYOghN.js";import"./main-C6oD7XT2.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-fdPvni4l.js";import"./Select-CfJrgJ08.js";import"./InvisibleMessage-DFQ2OWxP.js";import"./ValueState-Bg0UWejw.js";import"./slim-arrow-down-Bkh3JwOV.js";import"./List-BLM_yTQc.js";import"./ItemNavigation-DY9WPMGj.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-roj2v4D7.js";import"./CheckBox-Bh-hd90L.js";import"./accept-DENHAmCe.js";import"./slim-arrow-right-BNXaNlko.js";import"./ResponsivePopover-DRXUZ-Yn.js";import"./Dialog-zzL9k4HV.js";import"./ResponsivePopoverCommon.css-BOr3WOvu.js";import"./ValueStateMessage.css-sKGRcLml.js";import"./Option-DXhYbhH7.js";import"./slideUp-By1UZlL6.js";import"./animate-DF-0g--S.js";import"./AnimationMode-D8mfE6us.js";const a={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},x=[],u=[],I=Object.entries(o).filter(([n,r])=>n.includes("Font")?n.includes("FontUrl")?!0:(x.push([n,r]),!1):n.includes("Color")||n.includes("Shadow")||n.includes("Background")||n.includes("Chart")?(u.push([n,r]),!1):!0),z=n=>{const r={};return n.includes("Family")||n.includes("FontUrl")?r.fontFamily=n:n.includes("Size")?r.fontSize=n:n.includes("Weight"),r},L=n=>{const r={};return n.includes("Shadow")?r.boxShadow=n:r.backgroundColor=n,r},j=({value:n,varKey:r,theme:i,style:t={}})=>{const[c,b]=d.useReducer(w=>!w,!1),[g,f]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`));return d.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`))},200)},[i]),e.jsxs(B,{direction:E.Column,style:{width:"85%"},children:[e.jsx(O,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:b,children:c?n:r}),e.jsx(V,{children:g})]},r)},H=n=>{const{varKey:r,value:i,theme:t}=n;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:i,varKey:r,theme:t}),e.jsx("div",{style:{...L(i),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=n=>{const{varKey:r,value:i,theme:t,style:c={}}=n;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:i,varKey:r,style:c,them:t})})},A=()=>{const[n,r]=d.useState(S());return e.jsx(R,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(F,{onChange:i=>{const t=i.detail.selectedOption.dataset.value;r(t),D(t)},children:P.map(({title:i,value:t})=>e.jsx(M,{"data-value":t,selected:t===n,children:i},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:a,children:u.map(([i,t])=>e.jsx(H,{varKey:i,value:t,theme:n},i))})}),e.jsx(l,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...a,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:x.map(([i,t])=>e.jsx(h,{varKey:i,value:t,style:{...z(t)},theme:n},i))})}),e.jsx(l,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:a,children:I.map(([i,t])=>e.jsx(h,{varKey:i,value:t,theme:n},i))})})]})})};function m(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
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
