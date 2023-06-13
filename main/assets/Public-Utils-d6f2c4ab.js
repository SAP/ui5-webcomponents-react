import{j as e}from"./jsx-runtime-5926aa06.js";import{M as w,S as s}from"./chunk-PCJTTTQV-063e2a8c.js";import"./DomRefTable.module-001ee1c3.js";import{r as d}from"./index-ebeaab24.js";import{T as v}from"./TableOfContent-291ab24f.js";import{F as y}from"./Footer-f0841fbb.js";import{g as C,c as S}from"./UI5Element-2e105c8a.js";import{M as D}from"./utils-badfc99a.js";import{F as T,a as P}from"./index-b9e92427.js";import{T as R}from"./index-562e1433.js";import{T as k}from"./index-f5ffe3c0.js";import{T as o}from"./ThemingParameters-7e2e4e30.js";import{S as M}from"./index-c863fb20.js";import{O}from"./index-43c0af66.js";import{P as a}from"./index-ec189a96.js";import{L as F}from"./index-c0c4d891.js";import{u as h}from"./index-bda0bad7.js";import{M as I,a as B}from"./index-e33c04d0.js";import"./iframe-403ac14f.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./WrappingType-b81e595a.js";import"./index-b1fb09ae.js";import"./Link-12d36fdb.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-f65ad4fd.js";import"./Icons-1a294222.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-fca59c5d.js";import"./index-7b70a3fd.js";import"./Popover-046c0918.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-41f002e2.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./decline-bfe69317.js";import"./i18n-defaults-80781f7e.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./class-map-6a9bd920.js";import"./clsx.m-1229b3e0.js";import"./I18nContext-cdb50611.js";import"./ModalsContext-1c9f64b4.js";import"./CssSizeVariables-02fb2fd8.js";import"./CustomVariables-fd831c35.js";import"./GlobalStyleClasses-7209358d.js";import"./InvisibleMessage-7cd9352f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-52c79e89.js";import"./information-bd54c92c.js";import"./ListItemBase-80511c88.js";import"./ItemNavigation-897757d1.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-101ae14f.js";import"./Label-54923333.js";import"./ResponsivePopover-785fdc5f.js";import"./Dialog-1441abbc.js";import"./Button-77ada2e8.js";import"./Title-4b970c0e.js";import"./StandardListItem-be6d96ba.js";import"./ListItem-a11c4ab9.js";import"./RadioButton-94f0be9f.js";import"./CheckBox-58c12bd7.js";import"./accept-83a59a78.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-56a3c652.js";import"./Avatar-580de7f7.js";import"./employee-649f60dc.js";import"./ResponsivePopoverCommon.css-67fc1c09.js";import"./ValueStateMessage.css-1932364a.js";import"./ValueState-ab6838cc.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-c3f8be94.js";const l={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},m=[],u=[],E=Object.entries(o).filter(([r,t])=>r.includes("Font")?r.includes("FontUrl")?!0:(m.push([r,t]),!1):r.includes("Color")||r.includes("Shadow")||r.includes("Background")||r.includes("Chart")?(u.push([r,t]),!1):!0),V=r=>{const t={};return r.includes("Family")||r.includes("FontUrl")?t.fontFamily=r:r.includes("Size")?t.fontSize=r:r.includes("Weight"),t},z=r=>{const t={};return r.includes("Shadow")?t.boxShadow=r:t.backgroundColor=r,t},x=({value:r,varKey:t,theme:i,style:n={}})=>{const[c,j]=d.useReducer(f=>!f,!1),[g,b]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`));return d.useEffect(()=>{setTimeout(()=>{b(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`))},200)},[i]),e.jsxs(T,{direction:P.Column,style:{width:"85%"},children:[e.jsx(R,{title:"Click to show CSS Variable",style:{cursor:"pointer",...n},onClick:j,children:c?r:t}),e.jsx(F,{children:g})]},t)},L=r=>{const{varKey:t,value:i,theme:n}=r;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(x,{value:i,varKey:t,theme:n}),e.jsx("div",{style:{...z(i),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},p=r=>{const{varKey:t,value:i,theme:n,style:c={}}=r;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(x,{value:i,varKey:t,style:c,them:n})})},H=()=>{const[r,t]=d.useState(C());return e.jsx(k,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(M,{onChange:i=>{const n=i.detail.selectedOption.dataset.value;t(n),S(n)},children:D.map(({title:i,value:n})=>e.jsx(O,{"data-value":n,selected:n===r,children:i},n))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(a,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:l,children:u.map(([i,n])=>e.jsx(L,{varKey:i,value:n,theme:r},i))})}),e.jsx(a,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...l,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:m.map(([i,n])=>e.jsx(p,{varKey:i,value:n,style:{...V(n)},theme:r},i))})}),e.jsx(a,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:l,children:E.map(([i,n])=>e.jsx(p,{varKey:i,value:n,theme:r},i))})})]})})};function Pn(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(I,{design:B.Warning,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(v,{}),`
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
`,e.jsx(H,{}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsx(s,{code:"import { spacing } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"spacing"}),` file is containing all standard margins and paddings that are used in SAP Applications.
You can explore them via the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.StandardMargins",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Margins Demo Kit"}),`
and the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Paddings Demo Kit"}),"."]}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/internationalization--page",children:"Internationalization Guide"}),"."]}),`
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
`,e.jsx(y,{})]})}}export{Pn as default};
//# sourceMappingURL=Public-Utils-d6f2c4ab.js.map
