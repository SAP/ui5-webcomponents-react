import{j as n,a as r,F as w}from"./jsx-runtime-670450c2.js";import{M as v,S as c}from"./chunk-PCJTTTQV-36442125.js";import"./DomRefTable.module-ca928068.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{r as p}from"./index-f1f749bf.js";import"./Import-f54a858f.js";import{T as y}from"./TableOfContent-f18e0eb9.js";import{F as C}from"./Footer-ff5ca14c.js";import{g as S,c as D}from"./UI5Element-427ec721.js";import{F as T,a as x}from"./index-da505e61.js";import{T as P}from"./index-2eaff221.js";import{T as R}from"./index-b4ce2046.js";import{T as d}from"./ThemingParameters-f4b4144e.js";import{M as k}from"./utils-badfc99a.js";import{S as M}from"./index-427f31d9.js";import{O as F}from"./index-1164b4ac.js";import{P as a}from"./index-775dbbbb.js";import{L as O}from"./index-cb558416.js";import{u as s}from"./index-4fb8b842.js";import{M as I,a as B}from"./index-eed049fb.js";import"./iframe-cb1c4802.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-e54d2f1d.js";import"./WrappingType-b81e595a.js";import"./index-0d1ff29a.js";import"./Link-018547e8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-76ea8103.js";import"./Popover-224d761a.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./class-map-95320e87.js";import"./clsx.m-1229b3e0.js";import"./I18nContext-bef5b452.js";import"./ModalsContext-131e4070.js";import"./CssSizeVariables-bd372cde.js";import"./GlobalStyleClasses-7209358d.js";import"./CustomVariables-fd831c35.js";import"./InvisibleMessage-4a23efee.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-cfb4a4bd.js";import"./information-b6c8ed8e.js";import"./i18n-defaults-80781f7e.js";import"./decline-6bd98a2e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./Label-ccc234fe.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./Button-bc3a11a1.js";import"./Title-129aeb28.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./ValueState-ab6838cc.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-b8fd41f3.js";const l={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},m=[],u=[],j=Object.entries(d).filter(([i,t])=>i.includes("Font")?i.includes("FontUrl")?!0:(m.push([i,t]),!1):i.includes("Color")||i.includes("Shadow")||i.includes("Background")||i.includes("Chart")?(u.push([i,t]),!1):!0),V=i=>{const t={};return i.includes("Family")||i.includes("FontUrl")?t.fontFamily=i:i.includes("Size")?t.fontSize=i:i.includes("Weight"),t},z=i=>{const t={};return i.includes("Shadow")?t.boxShadow=i:t.backgroundColor=i,t},g=({value:i,varKey:t,style:o={}})=>{const[e,b]=p.useReducer(f=>!f,!1);return r(T,{direction:x.Column,style:{width:"85%"},children:[n(P,{title:"Click to show CSS Variable",style:{cursor:"pointer",...o},onClick:b,children:e?i:t}),n(O,{children:getComputedStyle(document.documentElement).getPropertyValue(`--${t}`)})]},t)},E=i=>{const{varKey:t,value:o}=i;return r("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[n(g,{value:o,varKey:t}),n("div",{style:{...z(o),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${d.sapField_BorderColor}`}})]})},h=i=>{const{varKey:t,value:o,style:e={}}=i;return n("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:n(g,{value:o,varKey:t,style:e})})},H=()=>{const[i,t]=p.useState(S());return n(R,{children:r("div",{style:{backgroundColor:d.sapBackgroundColor,padding:"1rem",borderRadius:d.sapElement_BorderCornerRadius,boxShadow:d.sapContent_Shadow0},children:[n(M,{onChange:o=>{const e=o.detail.selectedOption.dataset.value;t(e),D(e)},children:k.map(({title:o,value:e})=>n(F,{"data-value":e,selected:e===i,children:o},e))}),n("br",{}),n("br",{}),n(a,{headerText:"Colors & Shadows",collapsed:!0,children:n("div",{style:l,children:u.map(([o,e])=>n(E,{varKey:o,value:e},o))})}),n(a,{headerText:"Fonts",collapsed:!0,children:n("div",{style:{...l,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:m.map(([o,e])=>n(h,{varKey:o,value:e,style:{...V(e)}},o))})}),n(a,{headerText:"Others",collapsed:!0,children:n("div",{style:l,children:j.map(([o,e])=>n(h,{varKey:o,value:e},o))})})]})})};function Fn(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?n(t,Object.assign({},i,{children:n(o,{})})):o();function o(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},s(),i.components);return r(w,{children:[n(v,{title:"Public Utils"}),`
`,n(e.h1,{children:"Public Utils"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,n(I,{design:B.Warning,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,n("br",{}),`
`,n("br",{}),`
`,n(y,{}),`
`,n(e.h2,{children:"Device"}),`
`,n(c,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,n(e.h3,{children:"General Device Information"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"Device.isIE()"})," - returns ",n(e.code,{children:"true"})," if running in Internet Explorer"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.isSafari()"})," - returns ",n(e.code,{children:"true"})," if running in Safari"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.isDesktop()"})," - returns ",n(e.code,{children:"true"})," if running on desktop devices"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.isTablet()"})," - returns ",n(e.code,{children:"true"})," if running on tablet devices"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.isPhone()"})," - returns ",n(e.code,{children:"true"})," if running on mobile phone devices"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.supportsTouch()"})," - returns ",n(e.code,{children:"true"})," if device supports touch"]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.getCurrentRange(width?: number)"})," ",n("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,n("br",{}),`
Returns: `,n(e.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.getOrientation()"})," ",n("br",{}),`
Returns the current orientation of the device, `,n(e.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,n(e.h3,{children:"Event Listeners"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"Device.attachResizeHandler(callback)"})," ",n("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,n(e.code,{children:"callback"})," is a function which will be called with ",n(e.code,{children:"{ height: number, width: number }"}),"."]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.detachResizeHandler(callback)"})," ",n("br",{}),`
Detach a previously attached resize handler`]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",n("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,n(e.code,{children:"callback"})," is a function which will be called with ",n(e.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",n("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,r(e.li,{children:[n(e.code,{children:"Device.attachMediaHandler(callback)"})," ",n("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,n("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"Media Query"}),n(e.th,{children:"Name"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"(max-width:599px)"})}),n(e.td,{children:n(e.code,{children:"Phone"})})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"(min-width:600px) and (max-width:1023px)"})}),n(e.td,{children:n(e.code,{children:"Tablet"})})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),n(e.td,{children:n(e.code,{children:"Desktop"})})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"(min-width:1440px)"})}),n(e.td,{children:n(e.code,{children:"LargeDesktop"})})]})]})]}),`
`,r(e.p,{children:[n(e.code,{children:"callback"}),` is a function which will be called with
`,n(e.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"Device.detachMediaHandler(callback)"})," ",n("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,n(e.h2,{children:"Theming Parameters"}),`
`,n(c,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["By using our ",n(e.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,n(e.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",n(e.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
`,n(H,{}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(c,{code:"import { spacing } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"spacing"}),` file is containing all standard margins and paddings that are used in SAP Applications.
You can explore them via the `,n(e.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.StandardMargins",children:"UI5 Standard Margins Demo Kit"}),`
and the `,n(e.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding",children:"UI5 Standard Paddings Demo Kit"}),"."]}),`
`,n(e.h2,{children:"Hooks"}),`
`,n(e.h3,{children:n(e.code,{children:"useI18nBundle"})}),`
`,n(c,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,n(e.a,{href:"?path=/docs/internationalization--page",children:"Internationalization Guide"}),"."]}),`
`,n(e.h3,{children:n(e.code,{children:"useViewportRange"})}),`
`,n(c,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"useViewportRange"})," hook is a utility hook based on the ",n(e.code,{children:"Device.getCurrentRange()"})," and ",n(e.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,n(e.h3,{children:n(e.code,{children:"useResponsiveContentPadding"})}),`
`,n(c,{code:"import { useResponsiveContentPadding } from '@ui5/webcomponents-react-base';"}),`
`,r(e.p,{children:["The ",n(e.code,{children:"useResponsiveContentPadding"})," hook is a hook generating a style class or a tuple containing the style class and the current range if ",n(e.code,{children:"returnRangeString"})," is set to ",n(e.code,{children:"true"}),`.
It adds `,n(e.code,{children:"padding-left"})," and ",n(e.code,{children:"padding-right"})," corresponding to the range (retrieved with ",n(e.code,{children:"Device.getCurrentRange()"}),") of the element."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`const YourComponent = (props) => {
  const elementRef = useRef(null);
  const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
  return (
    <div ref={elementRef} className={responsivePaddingClass}>
      Content
    </div>
  );
};
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// returns the style class as string
const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
// returns a tuple - the first entry is the style class, the second the current range string
const [responsivePaddingClass, currentRange] = useResponsiveContentPadding(elementRef.current, true);
`})}),`
`,n(C,{})]})}}export{Fn as default};
//# sourceMappingURL=Public-Utils-55de65b9.js.map
