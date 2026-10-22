import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{B as r,F as i,I as a}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{s as o,u as s}from"./Icon-B54hMKwd.js";import{n as c,t as l}from"./useI18nBundle-DuzSA0hs.js";import{n as u,t as d}from"./useStylesheet-BK6LzbXh.js";import{n as f,t as p}from"./useIsomorphicLayoutEffect-Bi4nDl-C.js";import{a as m,o as h}from"./withWebComponent-DhD1x6sB.js";import{n as g,t as _}from"./debounce-BoH4IB-F.js";import{t as v}from"./jsx-runtime-BdxMnOeJ.js";import{n as y,t as b}from"./useCurrentTheme-BwCf5a2_.js";import{n as ee,t as x}from"./useIsRTL-DnB2aPqi.js";import{Mt as S,Rn as C}from"./i18n-defaults-BodNgw-G.js";import{n as w,t as T}from"./FlexBox-DKS6NgmC.js";import{n as te,t as ne}from"./Icon-_-gsE_6K.js";import{l as re,u as E}from"./Button-D_83k3d2.js";import{n as D,t as O}from"./Text-CHVdRnJy.js";import{n as k,t as A}from"./clsx-Qb-WgvrD.js";import{n as ie,t as j}from"./Button-DPTvwmxB.js";import{n as ae,t as oe}from"./Label-CC0T01Qq.js";import{i as se,n as ce,r as le,t as ue}from"./SegmentedButtonItem-D5sdk_H6.js";import{n as de,t as fe}from"./vertical-grip-B24LjUdx.js";import{i as pe}from"./iframe-DWdY1Bnb.js";var me,M;function N(){return(N=e((()=>{me=n(),M=(0,me.createContext)({vertical:!0,reset:!1})})))()}var he,ge;function _e(){return(_e=e((()=>{he=`@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;overflow:hidden;position:relative;will-change:flex-basis;min-width:0;min-height:0}}`,ge={splitterElement:`_splitterElement_5jt3n_1`}})))()}var P,ve,F;function I(){return(I=e((()=>{a(),p(),m(),d(),k(),P=n(),N(),_e(),ve=v(),F=(0,P.forwardRef)((e,t)=>{let{children:n,style:r,className:a,minSize:o=0,size:s=`auto`,resizable:c,...l}=e,[d,p]=h(t),{vertical:m,reset:g}=(0,P.useContext)(M),_=i()?{width:`min-content`,flex:`1 1 auto`}:{},v=typeof s==`number`?`${s}px`:s,[y,b]=(0,P.useState)(!1),[ee,x]=(0,P.useState)(null),S=g?void 0:v===`auto`?ee??{flex:`1 0 min-content`,..._}:{flex:`0 1 ${v}`};return u(he,F.displayName),(0,P.useEffect)(()=>{if(v!==`auto`)return;let e=new ResizeObserver(([e])=>{if(e.target.getBoundingClientRect().width!==0&&!y){let t=i()?{width:`unset`}:{};x({flex:`0 0 ${e.target.getBoundingClientRect()[m?`height`:`width`]}px`,...t}),b(!0)}});return p.current&&e.observe(p.current),()=>{e.disconnect()}},[v,y,p,m]),f(()=>{g&&(x(null),b(!1))},[g]),(0,ve.jsx)(`div`,{ref:d,className:A(ge.splitterElement,a),style:{minHeight:m&&o?`${o}px`:void 0,minWidth:!m&&o?`${o}px`:void 0,...S,...r},...l,"data-min-size":o,children:n})}),F.displayName=`SplitterElement`;try{F.displayName=`SplitterElement`,F.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:`SplitterElement`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,methods:[],props:{resizable:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`}],description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:`resizable`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},size:{defaultValue:{value:'`"auto"`'},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`}],description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:`size`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`},required:!1,tags:{default:'`"auto"`'},type:{name:`enum`,raw:`string | number | (string & {})`,value:[{value:`string`},{value:`number`},{value:`string & {}`}]}},minSize:{defaultValue:{value:"`0`"},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`}],description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:`minSize`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`},required:!1,tags:{default:"`0`"},type:{name:`number`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`}],description:"Defines the content which is shown inside the `SplitterElement`.",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterElement/index.d.ts`,name:`SplitterElementPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ye,be;function xe(){return(xe=e((()=>{ye=`@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative;&[data-splitter-orientation=horizontal]{flex-direction:row;width:100%;&>*{height:100%}}&[data-splitter-orientation=vertical]{flex-direction:column;height:100%;&>*{width:100%}}}}`,be={splitterLayout:`_splitterLayout_6n3m3_1`}})))()}var Se,Ce,we;function Te(){return(Te=e((()=>{o(),Se=`horizontal-grip`,Ce=`M1 7h2v2H1V7Zm12 0h2v2h-2V7ZM9 7h2v2H9V7ZM5 7h2v2H5V7Z`,we=`0 0 16 16`,s(Se,{pathData:Ce,ltr:!1,viewBox:we,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Ee,De,Oe;function ke(){return(ke=e((()=>{o(),Ee=`horizontal-grip`,De=`M1.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM6 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-13-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM6 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z`,Oe=`0 0 16 16`,s(Ee,{pathData:De,ltr:!1,viewBox:Oe,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var L;function Ae(){return(Ae=e((()=>{r(),Te(),ke(),L=`horizontal-grip`})))()}var je,R;function Me(){return(Me=e((()=>{je=`@layer ui5-webcomponents-react{._splitter_ce1yt_1{touch-action:none;position:relative;display:flex;will-change:flex;background-color:var(--sapShell_Background);align-items:center;justify-content:center;box-sizing:border-box;&[data-splitter-vertical]{&:focus{outline-offset:-.2rem;outline:var(--_ui5wcr_Splitter_BarOutline)}}&[data-splitter-vertical=horizontal]{cursor:col-resize;border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize);height:100%;flex-direction:column;&:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-size:.0625rem 100%;width:var(--_ui5wcr-SplitterSize);height:4rem}._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._icon_ce1yt_38{padding:.5rem 0}._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._gripButton_ce1yt_48{min-width:1.5rem;height:1.625rem}}&[data-splitter-vertical=vertical]{cursor:row-resize;border-block:var(--_ui5wcr_Splitter_BarBorderStyle);min-height:var(--_ui5wcr-SplitterSize);height:var(--_ui5wcr-SplitterSize);width:100%;flex-direction:row;&:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-size:100% .0625rem;width:5rem;height:var(--_ui5wcr-SplitterSize)}._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000);&:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}}._icon_ce1yt_38{padding:0 .5rem}._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000);&:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}}._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}}&:hover{._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}}}._gripContainer_ce1yt_44{display:flex;justify-content:center;align-items:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit;&:active{z-index:2}}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}`,R={splitter:`_splitter_ce1yt_1`,lineBefore:`_lineBefore_ce1yt_29`,lineAfter:`_lineAfter_ce1yt_30`,icon:`_icon_ce1yt_38`,gripContainer:`_gripContainer_ce1yt_44`,gripButton:`_gripButton_ce1yt_48`}})))()}var z,B,Ne,Pe,V;function Fe(){return(Fe=e((()=>{E(),Ae(),fe(),b(),l(),x(),m(),d(),z=n(),C(),ie(),te(),Me(),B=v(),Ne={start:`top`,startUppercase:`Top`,end:`bottom`,position:`Y`,positionRect:`y`,size:`height`,min:`minHeight`,offset:`offsetY`},Pe={start:`left`,startUppercase:`Left`,end:`right`,position:`X`,positionRect:`x`,size:`width`,min:`minWidth`,offset:`offsetX`},V=(0,z.forwardRef)((e,t)=>{let{vertical:n,onResize:r}=e,i=c(`@ui5/webcomponents-react`),[a,o]=h(t),s=ee(o),l=(0,z.useRef)(null);u(je,V.displayName);let d=(0,z.useRef)(null),f=(0,z.useRef)(null),p=(0,z.useRef)(null),m=(0,z.useRef)(null),g=(0,z.useRef)(0),_=n?Ne:Pe,[v,b]=(0,z.useState)(!1),x=s&&!n?[`nextSibling`,`previousSibling`]:[`previousSibling`,`nextSibling`],C=(0,z.useRef)(null),w=(e,t)=>{C.current&&cancelAnimationFrame(C.current),typeof r==`function`&&(C.current=requestAnimationFrame(()=>{let n=s?t:e,i=s?e:t,a=o.current.getBoundingClientRect()[_.size];r({areas:[{size:n.getBoundingClientRect()?.[_.size]+a,area:n},{size:i.getBoundingClientRect()?.[_.size]+(i.nextElementSibling===null?0:a),area:i}],splitter:o.current}),C.current=null}))},T=e=>{let t=g.current,n=o.current[x[0]],r=o.current[x[1]],i=v===`touch`?e.touches[0][`client${_.position}`]:e[`client${_.position}`],a=i-l.current,c=o.current.getBoundingClientRect()[_.size],u=a<0,p=()=>{n.style.flex=`0 0 ${d.current+a}px`,r.nextSibling&&d.current+a>0&&(r.style.flex=`0 0 ${f.current-a}px`),w(n,r)};d.current+a>0&&i+(c-t)<=m.current&&(parseInt(n.dataset.minSize,10)<=d.current+a&&u&&p(),f.current-a>=parseInt(r.dataset.minSize,10)&&!u&&p()),!r[x[1]]&&!s&&(r.style.flex=`1 0 0px`)},te=(e,t)=>{if(!o.current)return;let n=o.current[x[0]],r=o.current[x[1]],i=o.current[x[0]].getBoundingClientRect(),a=o.current[x[1]].getBoundingClientRect(),s=t?Math.round(e.changedTouches[0][`client${_.position}`]):e[`client${_.position}`];!o.current.contains(e.target)&&s-o.current[`offset${_.startUppercase}`]+1<0&&(n.style.flex=`0 0 0px`,n.style?.[_.min]?r.style.flex=`0 0 ${a?.[_.size]+(i?.[_.size]-n.style?.[_.min].replace(`px`,``))}px`:r.style.flex=`0 0 ${a?.[_.size]+i?.[_.size]}px`,w(n,r)),m.current<s&&(r.style.flex=`0 0 0px`,r.style?.[_.min]?n.style.flex=`0 0 ${i?.[_.size]+(a?.[_.size]-r.style?.[_.min].replace(`px`,``))}px`:n.style.flex=`0 0 ${i?.[_.size]+a?.[_.size]}px`,w(n,r))},E=e=>{(e.type!==`pointerdown`||e.pointerType===`touch`)&&(e.currentTarget.focus(),e.preventDefault(),b(e.pointerType??`mouse`),g.current=e.nativeEvent[_.offset],p.current=o.current[x[0]].getBoundingClientRect()?.[_.end],o.current[x[1]][x[1]]?m.current=o.current[x[1]][x[1]].getBoundingClientRect()?.[_.start]:m.current=o.current.parentElement.getBoundingClientRect()[_.end],d.current=o.current[x[0]].getBoundingClientRect()?.[_.size],f.current=o.current[x[1]].getBoundingClientRect()?.[_.size],l.current=e[`client${_.position}`])},D=e=>{let t=e.code??e.key;if(t===`ArrowRight`||t===`ArrowLeft`||t===`ArrowUp`||t===`ArrowDown`){e.preventDefault();let n=o.current[x[0]],r=o.current[x[1]];(t===`ArrowLeft`||t===`ArrowUp`)&&(r=o.current[x[0]],n=o.current[x[1]]);let i=r.style[_.min]?r.getBoundingClientRect()?.[_.size]-Number(r.style[_.min].replace(`px`,``)):r.getBoundingClientRect()?.[_.size];if(document.activeElement===o.current){let e=i>=20?20:i,a=n.getBoundingClientRect()?.[_.size],o=r.getBoundingClientRect()?.[_.size];r.style.flex=`0 0 ${o-e}px`,n.style.flex=`0 0 ${a+e}px`,t===`ArrowLeft`||t===`ArrowUp`?w(r,n):w(n,r)}}},O=e=>{te(e,v===`touch`),b(!1)};(0,z.useEffect)(()=>{let e=()=>{v===`touch`?(document.removeEventListener(`touchmove`,T),document.removeEventListener(`touchend`,O)):(document.removeEventListener(`mouseup`,O),document.removeEventListener(`mousemove`,T))};return v?v===`touch`?(document.addEventListener(`touchmove`,T),document.addEventListener(`touchend`,O)):(document.addEventListener(`mousemove`,T),document.addEventListener(`mouseup`,O)):e(),()=>{e()}},[v]);let k=y(),A=k===`sap_fiori_3_hcb`||k===`sap_fiori_3_hcw`||k===`sap_horizon_hcb`||k===`sap_horizon_hcw`||k===`sap_horizon_hc_auto`;return(0,B.jsxs)(`div`,{className:R.splitter,tabIndex:0,onKeyDown:D,onPointerDown:E,onMouseDown:E,ref:a,role:`separator`,"data-splitter-vertical":n?`vertical`:`horizontal`,title:i.getText(S),"aria-orientation":n?`vertical`:`horizontal`,"aria-label":i.getText(S),children:[(0,B.jsx)(`div`,{className:R.lineBefore}),(0,B.jsx)(`div`,{className:R.gripContainer,children:A?(0,B.jsx)(j,{className:R.gripButton,tabIndex:-1,icon:n?L:de,design:re.Transparent,"data-component-name":`SplitterLayoutSplitterGrip`}):(0,B.jsx)(ne,{className:R.icon,name:n?L:de,"data-component-name":`SplitterLayoutSplitterGrip`})}),(0,B.jsx)(`div`,{className:R.lineAfter})]})}),V.displayName=`Splitter`;try{V.displayName=`Splitter`,V.__docgenInfo={description:``,displayName:`Splitter`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,methods:[],props:{height:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`}],description:``,name:`height`,parent:{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`},required:!0,tags:{},type:{name:`enum`,raw:`string | number`,value:[{value:`string`},{value:`number`}]}},width:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`}],description:``,name:`width`,parent:{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`},required:!0,tags:{},type:{name:`enum`,raw:`string | number`,value:[{value:`string`},{value:`number`}]}},vertical:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`}],description:``,name:`vertical`,parent:{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`},required:!0,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onResize:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`}],description:``,name:`onResize`,parent:{fileName:`webcomponents-react/packages/main/dist/components/Splitter/index.d.ts`,name:`SplitterPropTypes`},required:!0,tags:{},type:{name:`(e: OnResizeParam) => void`}}},tags:{}}}catch{}})))()}var H,Ie,U;function Le(){return(Le=e((()=>{H=n(),Fe(),Ie=v(),U=e=>(0,H.useMemo)(()=>{if((0,H.isValidElement)(e?.children))return e?.children;let t=H.Children.toArray(e?.children).filter(H.isValidElement),n=0,r=[];return t.forEach((i,a)=>{let o=t[a+n],s=Object.prototype.hasOwnProperty.call(o.props,`minSize`)?o.props.minSize:0;if(t.length-n-1>a&&(o.props.resizable||o.props.resizable===void 0)&&s!==void 0)t.splice(a+n+1,0,(0,Ie.jsx)(V,{height:e?.height,width:e?.width,vertical:e?.vertical,onResize:e?.onResize},`splitter${a}`)),r.push(a+1+n-1),++n;else if(a>0&&o?.props.resizable===!1){let e=t.findIndex(e=>e===o)-1;t[e].props.minSize===void 0&&t.splice(e,1),r.pop(),--n}}),r.forEach(e=>{let n=t[e]?.props?.size,r=typeof n==`number`?`${n}px`:n;n&&n!==`auto`&&(t[e]=(0,H.cloneElement)(t[e],{size:`calc(${r} - var(--_ui5wcr-SplitterSize))`}))}),t},[e]);try{U.displayName=`useConcatSplitterElements`,U.__docgenInfo={description:``,displayName:`useConcatSplitterElements`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,methods:[],props:{width:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`}],description:``,name:`width`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`},required:!0,tags:{},type:{name:`enum`,raw:`Width<string | number>`,value:[{value:`string`},{value:`number`},{value:`string & {}`}]}},height:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`}],description:``,name:`height`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`},required:!0,tags:{},type:{name:`enum`,raw:`Height<string | number>`,value:[{value:`string`},{value:`number`},{value:`string & {}`}]}},vertical:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`}],description:``,name:`vertical`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`},required:!0,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onResize:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`}],description:``,name:`onResize`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/useConcatSplitterElements.d.ts`,name:`ConcatSplitterElements`},required:!0,tags:{},type:{name:`(e: OnResizeParam) => void`}}},tags:{}}}catch{}})))()}var W,G,K;function Re(){return(Re=e((()=>{g(),d(),m(),k(),W=n(),N(),xe(),Le(),G=v(),K=(0,W.forwardRef)((e,t)=>{let{vertical:n,children:r,title:i,style:a,className:o,options:s,onResize:c,...l}=e,[d,f]=h(t),[p,m]=(0,W.useState)(void 0),g=(0,W.useRef)({width:void 0,height:void 0}),v=(0,W.useRef)(!0),y=(0,W.useRef)(!0),b=U({children:r??[],width:a?.width,height:a?.height,vertical:n,onResize:c});return u(ye,K.displayName),(0,W.useEffect)(()=>{!v.current&&s?.resetOnChildrenChange&&m(!0),v.current=!1},[r,s?.resetOnChildrenChange]),(0,W.useEffect)(()=>{y.current||m(!0),y.current=!1},s?.resetOnCustomDepsChange??[]),(0,W.useEffect)(()=>{if(s?.resetOnSizeChange){let e=new ResizeObserver(_(([e])=>{let t=e.target.getBoundingClientRect();!n&&t.width!==g.current.width?(g.current.width=t.width,m(!0)):n&&t.height!==g.current.height&&(g.current.height=t.height,m(!0))},60));return e.observe(f.current),()=>{e.disconnect()}}},[n,s?.resetOnSizeChange,f]),(0,W.useEffect)(()=>{p&&m(!1)},[p]),(0,G.jsx)(M.Provider,{value:{vertical:n,reset:p},children:(0,G.jsx)(`div`,{style:{flexDirection:n?`column`:`row`,...a},title:i,...l,className:A(be.splitterLayout,o),ref:d,"data-splitter-vertical":n,children:b})})}),K.displayName=`SplitterLayout`;try{K.displayName=`SplitterLayout`,K.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:`SplitterLayout`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/components/SplitterLayout/index.d.ts`,methods:[],props:{vertical:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`}],description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:`vertical`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`}],description:`The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.`,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`SplitterLayoutChild | SplitterLayoutChild[]`,value:[{value:`false`},{value:`ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`SplitterLayoutChild[]`,description:``,fullComment:``,tags:{}}]}},options:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`}],description:`Defines options to customize the behavior of the SplitterLayout.`,name:`options`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`},required:!1,tags:{},type:{name:`SplitterLayoutOptions`}},onResize:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`}],description:`Fired when contents are resized.

__Note:__
- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.
- The \`areas\` array reflects the logical position of the \`SplitterElement\`s relative to the "Splitter".`,name:`onResize`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SplitterLayout/types.d.ts`,name:`SplitterLayoutPropTypes`},required:!1,tags:{},type:{name:`(e: OnResizeParam) => void`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var q,J;function ze(){return(ze=e((()=>{w(),D(),q=v(),J=({text:e,background:t=`transparent`})=>(0,q.jsx)(T,{style:{height:`100%`,width:`100%`,background:t},alignItems:`Center`,justifyContent:`Center`,children:(0,q.jsx)(O,{children:e})})})))()}var Be=t({Default:()=>Z,LimitedAreas:()=>Q,Nested:()=>$,__namedExportsOrder:()=>He,default:()=>Ve}),Y,X,Ve,Z,Q,$,He;function Ue(){return(Ue=e((()=>{ze(),pe(),Y=n(),ie(),w(),ae(),se(),ce(),I(),D(),Re(),X=v(),Ve={title:`Layouts & Floorplans / SplitterLayout`,component:K,argTypes:{children:{control:{disable:!0}}},args:{style:{width:`100%`,height:`800px`}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}},tags:[`package:@ui5/webcomponents-react`]},Z={parameters:{chromatic:{diffThreshold:.6}},render(e){return(0,X.jsxs)(K,{...e,children:[(0,X.jsx)(F,{children:(0,X.jsx)(T,{style:{height:`100%`,width:`100%`},alignItems:`Center`,justifyContent:`Center`,children:(0,X.jsx)(O,{children:`Content 1`})})}),(0,X.jsx)(F,{children:(0,X.jsx)(T,{style:{height:`100%`,width:`100%`},alignItems:`Center`,justifyContent:`Center`,children:(0,X.jsx)(O,{style:{whiteSpace:`pre-line`},children:`Content 2
            with
            multi
            lines
            `})})}),(0,X.jsx)(F,{children:(0,X.jsx)(T,{style:{height:`100%`,width:`100%`},alignItems:`Center`,justifyContent:`Center`,children:(0,X.jsx)(O,{children:`Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."`})})}),(0,X.jsx)(F,{children:(0,X.jsx)(T,{style:{height:`100%`,width:`100%`},alignItems:`Center`,justifyContent:`Center`,children:(0,X.jsx)(O,{children:`Content 4`})})})]})}},Q={render(e){return(0,X.jsxs)(K,{...e,children:[(0,X.jsx)(F,{size:`10%`,children:(0,X.jsx)(J,{text:`Content 1 - (size: 10%)`,background:`cadetblue`})}),(0,X.jsx)(F,{children:(0,X.jsx)(J,{text:`Content 2`,background:`skyblue`})}),(0,X.jsx)(F,{minSize:200,children:(0,X.jsx)(J,{text:`Content 3 (minSize: 200)`,background:`lightblue`})}),(0,X.jsx)(F,{children:(0,X.jsx)(J,{text:`Content 4`,background:`paleturquoise`})}),(0,X.jsx)(F,{children:(0,X.jsx)(J,{text:`Content 5`,background:`lightskyblue`})}),(0,X.jsx)(F,{resizable:!1,size:`150px`,children:(0,X.jsx)(J,{text:`Content 6 (not resizable - size: 150px)`,background:`powderblue`})}),(0,X.jsx)(F,{children:(0,X.jsx)(J,{text:`Content 7`,background:`aliceblue`})}),(0,X.jsx)(F,{children:(0,X.jsx)(J,{text:`Content 8`,background:`lightsteelblue`})})]})}},$={parameters:{chromatic:{disableSnapshot:!0}},render(e){let[t,n]=(0,Y.useState)(e.vertical);return(0,Y.useEffect)(()=>{n(e.vertical)},[e.vertical]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(T,{direction:`Column`,children:[(0,X.jsx)(oe,{showColon:!0,children:`Orientation of outer SplitterLayout`}),(0,X.jsxs)(le,{onSelectionChange:e=>{n(e.detail.selectedItems[0].textContent===`Vertical`)},children:[(0,X.jsx)(ue,{pressed:!t,children:`Horizontal`}),(0,X.jsx)(ue,{pressed:t,children:`Vertical`})]})]}),(0,X.jsx)(`br`,{}),(0,X.jsx)(`br`,{}),(0,X.jsxs)(K,{style:e.style,vertical:t,children:[(0,X.jsx)(F,{size:`40%`,children:(0,X.jsxs)(T,{direction:`Column`,style:{width:`100%`,height:`100%`},children:[(0,X.jsx)(j,{style:{width:`100%`},children:`Content 1`}),(0,X.jsxs)(K,{style:{height:`100%`},children:[(0,X.jsx)(F,{style:{background:`lightblue`},size:`auto`,children:(0,X.jsx)(j,{children:`Content 2`})}),(0,X.jsx)(F,{style:{background:`skyblue`},size:`10%`,children:(0,X.jsx)(j,{"data-auto":!0,children:`Content 3`})}),(0,X.jsx)(F,{style:{background:`cadetblue`},size:`auto`,children:(0,X.jsx)(j,{children:`Content 4`})}),(0,X.jsx)(F,{style:{background:`lightskyblue`},size:`60%`,children:(0,X.jsxs)(T,{direction:`Column`,style:{width:`100%`},children:[(0,X.jsx)(j,{style:{width:`100%`},children:`Content 5`}),(0,X.jsxs)(K,{style:{height:`100%`},children:[(0,X.jsx)(F,{style:{background:`#E29713`},children:(0,X.jsx)(j,{children:`Content 6`})}),(0,X.jsx)(F,{size:`50%`,children:(0,X.jsxs)(T,{direction:`Column`,style:{width:`100%`,height:`100%`},children:[(0,X.jsx)(j,{style:{width:`100%`},children:`Content 7`}),(0,X.jsxs)(K,{vertical:!0,style:{height:`100%`},children:[(0,X.jsx)(F,{style:{background:`lightgrey`},size:`50%`,children:(0,X.jsx)(j,{children:`Content 8`})}),(0,X.jsx)(F,{style:{background:`grey`},size:`50%`,children:(0,X.jsx)(j,{children:`Content 9`})})]})]})}),(0,X.jsx)(F,{style:{background:`#D3A95E`},children:(0,X.jsx)(j,{children:`Content 10`})})]})]})})]})]})}),(0,X.jsx)(F,{size:`20%`,children:(0,X.jsx)(j,{style:{width:`100%`},children:`Content 11`})}),(0,X.jsx)(F,{children:(0,X.jsxs)(T,{direction:`Column`,style:{width:`100%`},children:[(0,X.jsx)(j,{style:{width:`100%`},children:`Content 12`}),(0,X.jsxs)(K,{style:{height:`100%`},children:[(0,X.jsx)(F,{style:{background:`forestgreen`},size:`15%`,children:(0,X.jsx)(j,{children:`Content 13`})}),(0,X.jsx)(F,{style:{background:`darkgreen`},size:`15%`,children:(0,X.jsx)(j,{children:`Content 14`})}),(0,X.jsx)(F,{style:{background:`olive`},resizable:!1,size:`40%`,children:(0,X.jsx)(j,{children:`Content 15`})}),(0,X.jsx)(F,{style:{background:`green`},size:`15%`,children:(0,X.jsx)(j,{children:`Content 16`})}),(0,X.jsx)(F,{style:{background:`seagreen`},size:`15%`,children:(0,X.jsx)(j,{children:`Content 17`})})]})]})})]})]})}},He=[`Default`,`LimitedAreas`,`Nested`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      diffThreshold: 0.6
    }
  },
  render(args) {
    return <SplitterLayout {...args}>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>Content 1</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text style={{
            whiteSpace: 'pre-line'
          }}>{\`Content 2
            with
            multi
            lines
            \`}</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>
              Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            </Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>Content 4</Text>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <SplitterLayout {...args}>
        <SplitterElement size="10%">
          <SplitterElementContent text="Content 1 - (size: 10%)" background="cadetblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 2" background="skyblue" />
        </SplitterElement>
        <SplitterElement minSize={200}>
          <SplitterElementContent text="Content 3 (minSize: 200)" background="lightblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 4" background="paleturquoise" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 5" background="lightskyblue" />
        </SplitterElement>
        <SplitterElement resizable={false} size="150px">
          <SplitterElementContent text="Content 6 (not resizable - size: 150px)" background="powderblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 7" background="aliceblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 8" background="lightsteelblue" />
        </SplitterElement>
      </SplitterLayout>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render(args) {
    const [vertical, setVertical] = useState(args.vertical);
    const handleChange = e => {
      setVertical(e.detail.selectedItems[0].textContent === 'Vertical');
    };
    useEffect(() => {
      setVertical(args.vertical);
    }, [args.vertical]);
    return <>
        {!isChromatic && <FlexBox direction="Column">
            <Label showColon>Orientation of outer SplitterLayout</Label>
            <SegmentedButton onSelectionChange={handleChange}>
              <SegmentedButtonItem pressed={!vertical}>Horizontal</SegmentedButtonItem>
              <SegmentedButtonItem pressed={vertical}>Vertical</SegmentedButtonItem>
            </SegmentedButton>
          </FlexBox>}
        <br />
        <br />
        <SplitterLayout style={args.style} vertical={vertical}>
          <SplitterElement size="40%">
            <FlexBox direction="Column" style={{
            width: '100%',
            height: '100%'
          }}>
              <Button style={{
              width: '100%'
            }}>Content 1</Button>
              <SplitterLayout style={{
              height: '100%'
            }}>
                <SplitterElement style={{
                background: 'lightblue'
              }} size="auto">
                  <Button>Content 2</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'skyblue'
              }} size="10%">
                  <Button data-auto>Content 3</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'cadetblue'
              }} size="auto">
                  <Button>Content 4</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'lightskyblue'
              }} size="60%">
                  <FlexBox direction="Column" style={{
                  width: '100%'
                }}>
                    <Button style={{
                    width: '100%'
                  }}>Content 5</Button>
                    <SplitterLayout style={{
                    height: '100%'
                  }}>
                      <SplitterElement style={{
                      background: '#E29713'
                    }}>
                        <Button>Content 6</Button>
                      </SplitterElement>
                      <SplitterElement size="50%">
                        <FlexBox direction="Column" style={{
                        width: '100%',
                        height: '100%'
                      }}>
                          <Button style={{
                          width: '100%'
                        }}>Content 7</Button>
                          <SplitterLayout vertical={true} style={{
                          height: '100%'
                        }}>
                            <SplitterElement style={{
                            background: 'lightgrey'
                          }} size="50%">
                              <Button>Content 8</Button>
                            </SplitterElement>
                            <SplitterElement style={{
                            background: 'grey'
                          }} size="50%">
                              <Button>Content 9</Button>
                            </SplitterElement>
                          </SplitterLayout>
                        </FlexBox>
                      </SplitterElement>
                      <SplitterElement style={{
                      background: '#D3A95E'
                    }}>
                        <Button>Content 10</Button>
                      </SplitterElement>
                    </SplitterLayout>
                  </FlexBox>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
          <SplitterElement size="20%">
            <Button style={{
            width: '100%'
          }}>Content 11</Button>
          </SplitterElement>
          <SplitterElement>
            <FlexBox direction="Column" style={{
            width: '100%'
          }}>
              <Button style={{
              width: '100%'
            }}>Content 12</Button>
              <SplitterLayout style={{
              height: '100%'
            }}>
                <SplitterElement style={{
                background: 'forestgreen'
              }} size="15%">
                  <Button>Content 13</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'darkgreen'
              }} size="15%">
                  <Button>Content 14</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'olive'
              }} resizable={false} size="40%">
                  <Button>Content 15</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'green'
              }} size="15%">
                  <Button>Content 16</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'seagreen'
              }} size="15%">
                  <Button>Content 17</Button>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
        </SplitterLayout>
      </>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{Ue as a,Be as i,Q as n,F as o,$ as r,I as s,Z as t};