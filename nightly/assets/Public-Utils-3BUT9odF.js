import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as v,aj as s}from"./index-wxpwV4_x.js";import{M as y,a as C}from"./index-DRfkeUYX.js";import"./TagDesign-Dou_yO3g.js";import{r as d}from"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-HLWAVYOI-WZja7LCw.js";import{b as S,u as D}from"./withWebComponent-6t4MTiZ-.js";import"./copy-CiUq4Sby.js";import"./Button-ein9a_YJ.js";import{F as T}from"./CommandsAndQueries-9497-eDu.js";import{T as k}from"./TableOfContent-CGtrISih.js";import"./WrappingType-CW8URInd.js";import"./Title-VVPV2V2E.js";import{M as P}from"./utils-B_jIHR5e.js";import{F as R,a as F}from"./index-DXbGRngL.js";import{T as M}from"./index-C1XvEUkL.js";import{T as o}from"./ThemingParameters-DOkJX3Ed.js";import{S as B}from"./index-DpykeD1L.js";import{O as E}from"./index-rttF5ILi.js";import{P as l}from"./index-BfmTzNAq.js";import{T as O}from"./index-F_io_HrK.js";import{L as V}from"./index-DW76Co1x.js";import"./iframe-Cz2GmiiJ.js";import"../sb-preview/runtime.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BwSTHZvs.js";import"./utils-DNCbgL6O.js";import"./decline-Chobtb_o.js";import"./Icon-CX51DRZ7.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import"./class-map-D9jLILSY.js";import"./i18n-defaults-sl2p4TZC.js";import"./client-BZNFO7bv.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Popover-BEVRlME1.js";import"./PopupsCommon.css-C8RAKo8-.js";import"./getEffectiveScrollbarStyle-CnOG9ZT1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BL_t98Y7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CAZGB3vF.js";import"./BrowserScrollbar.css-BVuR1u6R.js";import"./index-Byuai5Dz.js";import"./index-B0scv0mR.js";import"./Link-CUceCK4r.js";import"./index-BYhsI_93.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-Cr3Tnfsf.js";import"./index-DJqlzZjw.js";import"./BusyIndicator-DZWv4Y44.js";import"./Label-tm0HKFXd.js";import"./index-C73Y2rlh.js";import"./index-v2bCH09b.js";import"./Avatar-Dqp3bR5c.js";import"./employee-B_Kids1O.js";import"./main-BPTHlokf.js";import"./useStylesheet-DKtOrKyD.js";import"./I18nStore-BIJrl7SC.js";import"./Select-ei4w6xgN.js";import"./InvisibleMessage-2y9W537l.js";import"./ValueState-Bg0UWejw.js";import"./slim-arrow-down-DIQCuvKX.js";import"./List-D2BeqGtY.js";import"./ItemNavigation-C_v-ZRVk.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CNo07ETU.js";import"./CheckBox-DbyMg4AH.js";import"./accept-C_bZLOp6.js";import"./slim-arrow-right-BMq-ffCT.js";import"./ResponsivePopover-BM7LS6-J.js";import"./Dialog-C5TDi6Jx.js";import"./ResponsivePopoverCommon.css-CTnWiAY0.js";import"./ValueStateMessage.css-DSPelY4A.js";import"./Option-Di42xZP1.js";import"./slideUp-By1UZlL6.js";import"./animate-DF-0g--S.js";import"./AnimationMode-CWyS8RQi.js";const a={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},x=[],u=[],I=Object.entries(o).filter(([r,n])=>r.includes("Font")?r.includes("FontUrl")?!0:(x.push([r,n]),!1):r.includes("Color")||r.includes("Shadow")||r.includes("Background")||r.includes("Chart")?(u.push([r,n]),!1):!0),z=r=>{const n={};return r.includes("Family")||r.includes("FontUrl")?n.fontFamily=r:r.includes("Size")?n.fontSize=r:r.includes("Weight"),n},L=r=>{const n={};return r.includes("Shadow")?n.boxShadow=r:n.backgroundColor=r,n},j=({value:r,varKey:n,theme:i,style:t={}})=>{const[c,b]=d.useReducer(w=>!w,!1),[g,f]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`));return d.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`))},200)},[i]),e.jsxs(R,{direction:F.Column,style:{width:"85%"},children:[e.jsx(O,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:b,children:c?r:n}),e.jsx(V,{children:g})]},n)},H=r=>{const{varKey:n,value:i,theme:t}=r;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:i,varKey:n,theme:t}),e.jsx("div",{style:{...L(i),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=r=>{const{varKey:n,value:i,theme:t,style:c={}}=r;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:i,varKey:n,style:c,them:t})})},A=()=>{const[r,n]=d.useState(S());return e.jsx(M,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(B,{onChange:i=>{const t=i.detail.selectedOption.dataset.value;n(t),D(t)},children:P.map(({title:i,value:t})=>e.jsx(E,{"data-value":t,selected:t===r,children:i},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:a,children:u.map(([i,t])=>e.jsx(H,{varKey:i,value:t,theme:r},i))})}),e.jsx(l,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...a,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:x.map(([i,t])=>e.jsx(h,{varKey:i,value:t,style:{...z(t)},theme:r},i))})}),e.jsx(l,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:a,children:I.map(([i,t])=>e.jsx(h,{varKey:i,value:t,theme:r},i))})})]})})};function m(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(y,{design:C.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(k,{}),`
`,e.jsx(n.h2,{id:"device",children:"Device"}),`
`,e.jsx(s,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
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
`,e.jsx(s,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["By using the global ",e.jsx(n.code,{children:"--sap..."}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,e.jsx(n.code,{children:"ThemingParameters"})," is an JS object containing all available CSS variables mapped to their name."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,e.jsx(n.p,{children:"Is equivalent to:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We don't recommend excessive use of inline-style!"]}),`
`,e.jsx(A,{}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/knowledge-base-internationalization--docs",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(T,{})]})}function Rn(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(m,{...r})}):m(r)}export{Rn as default};
