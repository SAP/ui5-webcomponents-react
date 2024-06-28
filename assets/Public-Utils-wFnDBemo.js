import{j as e}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as v,e as s}from"./index-DxuOfQlo.js";import{r as d}from"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import"./copy-CpRxx2mm.js";import{F as y}from"./ProjectTemplate-C8X93s0c.js";import{T as C}from"./TableOfContent-DEwwt8Fx.js";import{b as S,s as D}from"./Boot-CclrjlB_.js";import{M as T}from"./utils-Br2NyzTh.js";import{F as P,a as R}from"./index-BykYlwjP.js";import{T as k}from"./index-DOeO8XXJ.js";import{T as M}from"./index-C2xRLxKL.js";import{T as o}from"./ThemingParameters-DOkJX3Ed.js";import{S as F}from"./index-8vJ28M-d.js";import{O as I}from"./index-B7DUFxJc.js";import{P as a}from"./index-B2g-1V-8.js";import{L as B}from"./index-DLdLI-Lw.js";import{M as E,a as O}from"./index-DqXXZe2g.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./client-Di-4O7We.js";import"./Icons-Bft-hUnu.js";import"./i18nBundle-DaXqDOt3.js";import"./EventProvider-B3ZIXKWe.js";import"./WrappingType-CW8URInd.js";import"./index-BaLzQqsI.js";import"./Button-awfxS-u-.js";import"./UI5Element-SUktJcPg.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-1MXDhRqV.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./class-map-CeKKj88r.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./alert-ClVg17pq.js";import"./index-4leB1AGq.js";import"./main-HWtSBowW.js";import"./useStylesheet-NckrYtSC.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./Select-xaAe0vRI.js";import"./InvisibleMessage-BajGGRjx.js";import"./ValueState-Bn-H2OaL.js";import"./slim-arrow-down-D-WG4ZQQ.js";import"./information-C5yxSOcR.js";import"./i18n-defaults-BdfZArTM.js";import"./decline-ubQgRYfe.js";import"./List-CHQl4GBm.js";import"./ItemNavigation-Cz9xwKaV.js";import"./TabbableElements-Ds_LZU0v.js";import"./debounce-jW346lN3.js";import"./BusyIndicator-Cegcdqvq.js";import"./Label-DmN4xHd_.js";import"./CheckBox-CDI4daLp.js";import"./accept-DNk1siyF.js";import"./RadioButton-DrmJvSKl.js";import"./ResponsivePopover-DENUalpE.js";import"./Dialog-doRJW-7X.js";import"./Title-C9HFD-MY.js";import"./StandardListItem-BOf2h618.js";import"./ListItem-0ByuBh8y.js";import"./slim-arrow-right-DC4MTGg-.js";import"./ResponsivePopoverCommon.css-5yTMIWE5.js";import"./ValueStateMessage.css-Cjvn9deu.js";import"./slideUp-AuU5M28q.js";import"./animate-DFaKyidW.js";import"./AnimationMode-Gnp6yHIH.js";const l={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},u=[],x=[],V=Object.entries(o).filter(([r,n])=>r.includes("Font")?r.includes("FontUrl")?!0:(u.push([r,n]),!1):r.includes("Color")||r.includes("Shadow")||r.includes("Background")||r.includes("Chart")?(x.push([r,n]),!1):!0),z=r=>{const n={};return r.includes("Family")||r.includes("FontUrl")?n.fontFamily=r:r.includes("Size")?n.fontSize=r:r.includes("Weight"),n},L=r=>{const n={};return r.includes("Shadow")?n.boxShadow=r:n.backgroundColor=r,n},j=({value:r,varKey:n,theme:t,style:i={}})=>{const[c,g]=d.useReducer(w=>!w,!1),[b,f]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`));return d.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${n}`))},200)},[t]),e.jsxs(P,{direction:R.Column,style:{width:"85%"},children:[e.jsx(k,{title:"Click to show CSS Variable",style:{cursor:"pointer",...i},onClick:g,children:c?r:n}),e.jsx(B,{children:b})]},n)},H=r=>{const{varKey:n,value:t,theme:i}=r;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:t,varKey:n,theme:i}),e.jsx("div",{style:{...L(t),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=r=>{const{varKey:n,value:t,theme:i,style:c={}}=r;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:t,varKey:n,style:c,them:i})})},A=()=>{const[r,n]=d.useState(S());return e.jsx(M,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(F,{onChange:t=>{const i=t.detail.selectedOption.dataset.value;n(i),D(i)},children:T.map(({title:t,value:i})=>e.jsx(I,{"data-value":i,selected:i===r,children:t},i))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(a,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:l,children:x.map(([t,i])=>e.jsx(H,{varKey:t,value:i,theme:r},t))})}),e.jsx(a,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...l,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:u.map(([t,i])=>e.jsx(h,{varKey:t,value:i,style:{...z(i)},theme:r},t))})}),e.jsx(a,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:l,children:V.map(([t,i])=>e.jsx(h,{varKey:t,value:i,theme:r},t))})})]})})};function p(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(E,{design:O.Warning,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(C,{}),`
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
`,e.jsxs(n.p,{children:["By using our ",e.jsx(n.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,e.jsx(n.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",e.jsx(n.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
`,e.jsx(A,{}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsx(s,{code:"import { spacing } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"spacing"}),` file is containing all standard margins and paddings that are used in SAP Applications.
You can explore them via the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.StandardMargins",rel:"nofollow",children:"UI5 Standard Margins Demo Kit"}),`
and the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding",rel:"nofollow",children:"UI5 Standard Paddings Demo Kit"}),"."]}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-internationalization--docs",rel:"nofollow",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(n.h3,{id:"useresponsivecontentpadding",children:e.jsx(n.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsx(s,{code:"import { useResponsiveContentPadding } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useResponsiveContentPadding"})," hook is a hook generating a style class or a tuple containing the style class and the current range if ",e.jsx(n.code,{children:"returnRangeString"})," is set to ",e.jsx(n.code,{children:"true"}),`.
It adds `,e.jsx(n.code,{children:"padding-left"})," and ",e.jsx(n.code,{children:"padding-right"})," corresponding to the range (retrieved with ",e.jsx(n.code,{children:"Device.getCurrentRange()"}),") of the element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const YourComponent = (props) => {
  const elementRef = useRef(null);
  const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
  return (
    <div ref={elementRef} className={responsivePaddingClass}>
      Content
    </div>
  );
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// returns the style class as string
const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
// returns a tuple - the first entry is the style class, the second the current range string
const [responsivePaddingClass, currentRange] = useResponsiveContentPadding(elementRef.current, true);
`})}),`
`,e.jsx(y,{})]})}function Hn(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(p,{...r})}):p(r)}export{Hn as default};
