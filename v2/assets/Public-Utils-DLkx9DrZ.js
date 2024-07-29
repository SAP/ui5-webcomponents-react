import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as p}from"./index-D3szj05g.js";import{M as v,e as s}from"./index-BUc40Rkf.js";import{M as y,a as C}from"./index-aXNDQIP-.js";import"./TagDesign-Dou_yO3g.js";import{r as c}from"./index-ClU-Tc1p.js";import"./index-C3ZJCerc.js";import"./chunk-HLWAVYOI-BpLbg0YS.js";import{b as D,u as S}from"./withWebComponent-Bw_l6Ewh.js";import"./copy-D_DpjAH5.js";import"./Button-Bn9nox5u.js";import{F as T}from"./CommandsAndQueries-DX67nFy5.js";import{T as k}from"./TableOfContent-BKq6i8LE.js";import"./WrappingType-CW8URInd.js";import{M as P}from"./utils-CantLTAT.js";import{F as R,a as M}from"./index-PGreZEtb.js";import{T as F}from"./index-6v2Oy41S.js";import{T as o}from"./ThemingParameters-DOkJX3Ed.js";import{S as B}from"./index-rJLRZVmD.js";import{O as E}from"./index-KkC9f98X.js";import{P as l}from"./index-D3pauMKY.js";import{T as O}from"./index-50ZoU7VT.js";import{L as V}from"./index-C3bSxdrg.js";import"./iframe-ocS5gnjC.js";import"../sb-preview/runtime.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./utils-BHgxP_Sc.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./i18n-defaults-BuF9xM0k.js";import"./client-B23sEKGq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-BNjPUlYK.js";import"./index-DoDNjErc.js";import"./Link-DaxkRKad.js";import"./index-Di_V9a9c.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-_WUtPQIN.js";import"./index-C5Ri76cu.js";import"./index-B3SeZbdu.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./main-CzLLrZqh.js";import"./useStylesheet-waKyCe7Y.js";import"./I18nStore-CqpKwI0j.js";import"./Select-CfDandfA.js";import"./InvisibleMessage-C4Ubldyy.js";import"./ValueState-Bg0UWejw.js";import"./slim-arrow-down-BXJfL7eA.js";import"./List-B4HlHID8.js";import"./ItemNavigation-J0QfqElW.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-Cb_VVcAx.js";import"./Label-C8Y7h3Z-.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B8Nc4uiK.js";import"./CheckBox-CXVjyirz.js";import"./accept-vjFjO2tl.js";import"./slim-arrow-right-pLsYwuE7.js";import"./ResponsivePopover-BPe6UEFQ.js";import"./Dialog-C0sQq9aS.js";import"./Title-DlbwpOq2.js";import"./ResponsivePopoverCommon.css-sHOieQOv.js";import"./ValueStateMessage.css-r2u7SuVO.js";import"./Option-HXdJKE_y.js";import"./slideUp-By1UZlL6.js";import"./animate-DF-0g--S.js";import"./AnimationMode-C75NJghZ.js";const a={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},u=[],x=[],z=Object.entries(o).filter(([i,r])=>i.includes("Font")?i.includes("FontUrl")?!0:(u.push([i,r]),!1):i.includes("Color")||i.includes("Shadow")||i.includes("Background")||i.includes("Chart")?(x.push([i,r]),!1):!0),I=i=>{const r={};return i.includes("Family")||i.includes("FontUrl")?r.fontFamily=i:i.includes("Size")?r.fontSize=i:i.includes("Weight"),r},L=i=>{const r={};return i.includes("Shadow")?r.boxShadow=i:r.backgroundColor=i,r},j=({value:i,varKey:r,theme:n,style:t={}})=>{const[d,b]=c.useReducer(w=>!w,!1),[g,f]=c.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`));return c.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`))},200)},[n]),e.jsxs(R,{direction:M.Column,style:{width:"85%"},children:[e.jsx(O,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:b,children:d?i:r}),e.jsx(V,{children:g})]},r)},H=i=>{const{varKey:r,value:n,theme:t}=i;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:n,varKey:r,theme:t}),e.jsx("div",{style:{...L(n),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=i=>{const{varKey:r,value:n,theme:t,style:d={}}=i;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:n,varKey:r,style:d,them:t})})},A=()=>{const[i,r]=c.useState(D());return e.jsx(F,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(B,{onChange:n=>{const t=n.detail.selectedOption.dataset.value;r(t),S(t)},children:P.map(({title:n,value:t})=>e.jsx(E,{"data-value":t,selected:t===i,children:n},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:a,children:x.map(([n,t])=>e.jsx(H,{varKey:n,value:t,theme:i},n))})}),e.jsx(l,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...a,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:u.map(([n,t])=>e.jsx(h,{varKey:n,value:t,style:{...I(t)},theme:i},n))})}),e.jsx(l,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:a,children:z.map(([n,t])=>e.jsx(h,{varKey:n,value:t,theme:i},n))})})]})})};function m(i){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
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
`,e.jsxs(r.p,{children:["By using our ",e.jsx(r.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,e.jsx(r.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",e.jsx(r.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
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
`,e.jsx(T,{})]})}function Rr(i={}){const{wrapper:r}={...p(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(m,{...i})}):m(i)}export{Rr as default};
