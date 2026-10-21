import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{B as n,U as r,V as i}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./ThemingParameters-ActMyMz4.js";import{c as ee,n as te,s as c,t as l}from"./FlexBox-BzX879iR.js";import{n as u,t as d}from"./Text-CHVdRnJy.js";import{n as f,t as p}from"./Label-CC0T01Qq.js";import{n as m,t as h}from"./Option-Ddg3VHDr.js";import{n as g,t as _}from"./Panel-DQP8enN0.js";import{n as v,t as y}from"./Select-CH6pBTc8.js";import{i as b,n as x,r as S,t as C}from"./MessageStrip-B0I9QUps.js";import{d as w,f as T,i as E,n as D}from"./iframe-YU-DW5QF.js";import{i as O,r as k}from"./react-fLZJfuRT.js";import{_ as A,d as j,f as M}from"./blocks-D4P5IKNV.js";import{g as N,t as P,u as F}from"./components-BAyU7DX7.js";var I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{n(),te(),ee(),f(),m(),g(),v(),u(),T(),o(),I=t(),E(),L=a(),R={display:`grid`,gridTemplateColumns:`repeat(3, minmax(0, 1fr))`,rowGap:`1rem`,columnGap:`1rem`},z=[],B=[],V=[],H=Object.entries(s).filter(([e,t])=>e.includes(`Font`)?e.includes(`FontUrl`)?!0:(z.push([e,t]),!1):e.includes(`Color`)||e.includes(`Shadow`)||e.includes(`Background`)||e.includes(`Chart`)?(B.push([e,t]),!1):e.includes(`Space`)||e.includes(`Margin`)||e.includes(`Padding`)||e.includes(`Gap`)||e.includes(`Breakpoint`)?(V.push([e,t]),!1):!0),U=e=>{let t={};return e.includes(`Family`)||e.includes(`FontUrl`)?t.fontFamily=e:e.includes(`Size`)?t.fontSize=e:e.includes(`Weight`)&&(t.fontWeight=e),t},W=e=>{let t={};return e.includes(`Shadow`)?t.boxShadow=e:t.backgroundColor=e,t},G=({value:e,varKey:t,theme:n,style:r={}})=>{let[i,a]=(0,I.useReducer)(e=>!e,!1),[o,s]=(0,I.useState)(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`));return(0,I.useEffect)(()=>{setTimeout(()=>{s(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`))},200)},[n]),(0,L.jsxs)(l,{direction:c.Column,style:{width:`85%`},children:[(0,L.jsx)(d,{title:`Click to show CSS Variable`,style:{cursor:`pointer`,...r},onClick:a,children:i?e:t}),(0,L.jsx)(p,{children:o})]},t)},K=e=>{let{varKey:t,value:n,theme:r}=e;return(0,L.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,L.jsx)(G,{value:n,varKey:t,theme:r}),(0,L.jsx)(`div`,{style:{...W(n),borderRadius:`50%`,width:`2rem`,height:`2rem`,minWidth:`2rem`,border:`1px solid ${s.sapField_BorderColor}`}})]})},q=e=>{let{varKey:t,value:n,theme:r,style:i={}}=e;return(0,L.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,L.jsx)(G,{value:n,varKey:t,style:i,them:r})})},J=()=>{let[e,t]=(0,I.useState)(r());return(0,L.jsx)(w,{children:(0,L.jsxs)(`div`,{style:{backgroundColor:s.sapBackgroundColor,padding:`1rem`,borderRadius:s.sapElement_BorderCornerRadius,boxShadow:s.sapContent_Shadow0},children:[(0,L.jsx)(y,{onChange:e=>{let n=e.detail.selectedOption.dataset.value;t(n),i(n)},children:D.map(({title:t,value:n})=>(0,L.jsx)(h,{"data-value":n,selected:n===e,children:t},n))}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`br`,{}),(0,L.jsx)(_,{headerText:`Colors & Shadows`,collapsed:!0,children:(0,L.jsx)(`div`,{style:R,children:B.map(([t,n])=>(0,L.jsx)(K,{varKey:t,value:n,theme:e},t))})}),(0,L.jsx)(_,{headerText:`Fonts`,collapsed:!0,children:(0,L.jsx)(`div`,{style:{...R,gridTemplateColumns:`repeat(1, minmax(0, 1fr))`},children:z.map(([t,n])=>(0,L.jsx)(q,{varKey:t,value:n,style:{...U(n)},theme:e},t))})}),(0,L.jsx)(_,{headerText:`Spacing`,collapsed:!0,children:(0,L.jsx)(`div`,{style:R,children:V.map(([t,n])=>(0,L.jsx)(q,{varKey:t,value:n,theme:e},t))})}),(0,L.jsx)(_,{headerText:`Others`,collapsed:!0,children:(0,L.jsx)(`div`,{style:R,children:H.map(([t,n])=>(0,L.jsx)(q,{varKey:t,value:n,theme:e},t))})})]})})}})))()}function X(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...O(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(j,{title:`Public Utils`}),`
`,(0,Q.jsx)(t.h1,{id:`public-utils`,children:`Public Utils`}),`
`,(0,Q.jsxs)(t.p,{children:[`The `,(0,Q.jsx)(t.code,{children:`@ui5/webcomponents-react-base`}),` package is providing a couple of utils, which can be used in your application as well.`]}),`
`,(0,Q.jsx)(C,{design:S.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
use and are not subject to semantic versioning!`}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(N,{}),`
`,(0,Q.jsx)(t.h2,{id:`device`,children:`Device`}),`
`,(0,Q.jsx)(M,{code:`import * as Device from '@ui5/webcomponents-react-base/Device';`}),`
`,(0,Q.jsxs)(t.p,{children:[`The `,(0,Q.jsx)(t.code,{children:`Device`}),` allows you to detect information about the environment where your app is running:`]}),`
`,(0,Q.jsx)(t.h3,{id:`general-device-information`,children:`General Device Information`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.isIE()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if running in Internet Explorer`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.isSafari()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if running in Safari`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.isDesktop()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if running on desktop devices`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.isTablet()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if running on tablet devices`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.isPhone()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if running on mobile phone devices`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.supportsTouch()`}),` - returns `,(0,Q.jsx)(t.code,{children:`true`}),` if device supports touch`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.getCurrentRange(width?: number)`}),` `,(0,Q.jsx)(`br`,{}),`
Returns the current media range of the window, or the optionally passed width. `,(0,Q.jsx)(`br`,{}),`
Returns: `,(0,Q.jsx)(t.code,{children:`{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }`})]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.getOrientation()`}),` `,(0,Q.jsx)(`br`,{}),`
Returns the current orientation of the device, `,(0,Q.jsx)(t.code,{children:`{ landscape: boolean, portrait: boolean }`}),`.`]}),`
`]}),`
`,(0,Q.jsx)(t.h3,{id:`event-listeners`,children:`Event Listeners`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.attachResizeHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,(0,Q.jsx)(t.code,{children:`callback`}),` is a function which will be called with `,(0,Q.jsx)(t.code,{children:`{ height: number, width: number }`}),`.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.detachResizeHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Detach a previously attached resize handler`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.attachOrientationChangeHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,(0,Q.jsx)(t.code,{children:`callback`}),` is a function which will be called with `,(0,Q.jsx)(t.code,{children:`{ landscape: boolean, portrait: boolean }`}),`.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.detachOrientationChangeHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Detach a previously attached orientation change handler`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.attachMediaHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Attach an event handler whenever the window size is matching another media query. `,(0,Q.jsx)(`br`,{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,(0,Q.jsxs)(t.table,{children:[(0,Q.jsx)(t.thead,{children:(0,Q.jsxs)(t.tr,{children:[(0,Q.jsx)(t.th,{children:`Media Query`}),(0,Q.jsx)(t.th,{children:`Name`})]})}),(0,Q.jsxs)(t.tbody,{children:[(0,Q.jsxs)(t.tr,{children:[(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`(max-width:599px)`})}),(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`Phone`})})]}),(0,Q.jsxs)(t.tr,{children:[(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`(min-width:600px) and (max-width:1023px)`})}),(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`Tablet`})})]}),(0,Q.jsxs)(t.tr,{children:[(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`(min-width:1024px) and (max-width:1439px)`})}),(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`Desktop`})})]}),(0,Q.jsxs)(t.tr,{children:[(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`(min-width:1440px)`})}),(0,Q.jsx)(t.td,{children:(0,Q.jsx)(t.code,{children:`LargeDesktop`})})]})]})]}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`callback`}),` is a function which will be called with
`,(0,Q.jsx)(t.code,{children:`{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }`}),`.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`Device.detachMediaHandler(callback)`}),` `,(0,Q.jsx)(`br`,{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,(0,Q.jsx)(t.h2,{id:`theming-parameters`,children:`Theming Parameters`}),`
`,(0,Q.jsx)(M,{code:`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';`}),`
`,(0,Q.jsxs)(t.p,{children:[`By using the global `,(0,Q.jsx)(t.code,{children:`--sap...`}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,(0,Q.jsx)(t.code,{children:`ThemingParameters`}),` is an JS object containing all available CSS variables mapped to their name.`]}),`
`,(0,Q.jsx)(t.p,{children:`Example:`}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-jsx`,children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,(0,Q.jsx)(t.p,{children:`Is equivalent to:`}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-jsx`,children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Note:`}),` We don't recommend excessive use of inline-style!`]}),`
`,(0,Q.jsx)(J,{}),`
`,(0,Q.jsx)(t.h2,{id:`hooks`,children:`Hooks`}),`
`,(0,Q.jsx)(t.h3,{id:`usei18nbundle`,children:(0,Q.jsx)(t.code,{children:`useI18nBundle`})}),`
`,(0,Q.jsx)(M,{code:`import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';`}),`
`,(0,Q.jsxs)(t.p,{children:[`The `,(0,Q.jsx)(t.code,{children:`useI18nBundle`}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,(0,Q.jsx)(t.a,{href:`?path=/docs/knowledge-base-internationalization--docs`,children:`Internationalization Guide`}),`.`]}),`
`,(0,Q.jsx)(t.h3,{id:`useviewportrange`,children:(0,Q.jsx)(t.code,{children:`useViewportRange`})}),`
`,(0,Q.jsx)(M,{code:`import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';`}),`
`,(0,Q.jsxs)(t.p,{children:[`The `,(0,Q.jsx)(t.code,{children:`useViewportRange`}),` hook is a utility hook based on the `,(0,Q.jsx)(t.code,{children:`Device.getCurrentRange()`}),` and `,(0,Q.jsx)(t.code,{children:`Device.attachMediaHandler`}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,(0,Q.jsx)(F,{})]})}function Z(e={}){let{wrapper:t}={...O(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(X,{...e})}):X(e)}var Q;function $(){return($=e((()=>{Q=a(),k(),A(),b(),x(),P(),Y()})))()}$();export{Z as default};