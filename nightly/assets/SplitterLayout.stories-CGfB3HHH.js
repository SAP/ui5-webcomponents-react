import{r,ap as G,ay as K,u as J,j as e,x as ie,b1 as Q,ad as re,az as ae,Q as h,_ as ce,I as de,gl as Z,J as D}from"./iframe-BZQDLaud.js";import{F as E}from"./index-8dfRRBIr.js";import{v as ee}from"./vertical-grip-BDRrVDnJ.js";import{u as ue}from"./useIsRTL-DZvFLTA0.js";import{u as pe}from"./useCurrentTheme-5r1dq2J6.js";import{d as he}from"./debounce-D7W5PopO.js";import{L as me}from"./index-D_nwxPuV.js";import{a as ye,S as te}from"./index-C8Fyun0P.js";const le=r.createContext({vertical:!0,reset:!1}),ge="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",fe={splitterElement:"_splitterElement_5jt3n_1"},i=r.forwardRef((l,u)=>{const{children:s,style:_,className:S,minSize:d=0,size:n="auto",resizable:g,...B}=l,[v,L]=G(u),{vertical:R,reset:C}=r.useContext(le),w=Q()?{width:"min-content",flex:"1 1 auto"}:{},t=typeof n=="number"?`${n}px`:n,z=t!=="auto"?{flex:`0 1 ${t}`}:{flex:"1 0 min-content",...w},[j,c]=r.useState(z),[q,k]=r.useState(!1);return K(ge,i.displayName),r.useEffect(()=>{const b=new ResizeObserver(([I])=>{if(I.target.getBoundingClientRect().width!==0&&!q){const W=Q()?{width:"unset"}:{};c({flex:`0 0 ${I.target.getBoundingClientRect()[R?"height":"width"]}px`,...W}),k(!0)}});return t==="auto"&&L.current?b.observe(L.current):c({flex:`0 1 ${t}`}),()=>{b.disconnect()}},[t,q,R]),J(()=>{C&&(c(void 0),k(!1))},[C,t]),J(()=>{j===void 0&&c(z)},[j]),e.jsx("div",{ref:v,className:ie(fe.splitterElement,S),style:{minHeight:R&&d?`${d}px`:void 0,minWidth:!R&&d?`${d}px`:void 0,...j,..._},...B,"data-min-size":d,children:s})});i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",Se={splitterLayout:"_splitterLayout_6n3m3_1"},be="horizontal-grip",xe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",ze=!1,ve="SAP-icons-v4",Ce="@ui5/webcomponents-icons";re(be,{pathData:xe,ltr:ze,collection:ve,packageName:Ce});const we="horizontal-grip",Ee="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Be=!1,je="SAP-icons-v5",ke="@ui5/webcomponents-icons";re(we,{pathData:Ee,ltr:Be,collection:je,packageName:ke});const ne="horizontal-grip",Le="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",A={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},Re={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},Ne={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},V=r.forwardRef((l,u)=>{const{vertical:s,onResize:_}=l,S=ae("@ui5/webcomponents-react"),[d,n]=G(u),g=ue(n),B=r.useRef(null);K(Le,V.displayName);const v=r.useRef(null),L=r.useRef(null),R=r.useRef(null),C=r.useRef(null),w=r.useRef(0),t=s?Re:Ne,[z,j]=r.useState(!1),[c,q]=r.useState(["previousSibling","nextSibling"]),k=r.useRef(null),b=(a,m)=>{k.current&&cancelAnimationFrame(k.current),typeof _=="function"&&(k.current=requestAnimationFrame(()=>{const p=g?m:a,o=g?a:m,x=n.current.getBoundingClientRect()[t.size];_({areas:[{size:p.getBoundingClientRect()?.[t.size]+x,area:p},{size:o.getBoundingClientRect()?.[t.size]+(o.nextElementSibling!==null?x:0),area:o}],splitter:n.current}),k.current=null}))},I=a=>{const m=w.current,p=n.current[c[0]],o=n.current[c[1]],x=z==="touch"?a.touches[0][`client${t.position}`]:a[`client${t.position}`],y=x-B.current,T=n.current.getBoundingClientRect()[t.size],M=y<0,X=()=>{p.style.flex=`0 0 ${v.current+y}px`,o.nextSibling&&v.current+y>0&&(o.style.flex=`0 0 ${L.current-y}px`),b(p,o)};v.current+y>0&&x+(T-m)<=C.current&&(parseInt(p.dataset.minSize,10)<=v.current+y&&M&&X(),L.current-y>=parseInt(o.dataset.minSize,10)&&!M&&X()),!o[c[1]]&&!g&&(o.style.flex="1 0 0px")},W=(a,m)=>{if(!n.current)return;const p=n.current[c[0]],o=n.current[c[1]],x=n.current[c[0]].getBoundingClientRect(),y=n.current[c[1]].getBoundingClientRect(),T=m?Math.round(a.changedTouches[0][`client${t.position}`]):a[`client${t.position}`];!n.current.contains(a.target)&&T-n.current[`offset${t.startUppercase}`]+1<0&&(p.style.flex="0 0 0px",p.style?.[t.min]?o.style.flex=`0 0 ${y?.[t.size]+(x?.[t.size]-p.style?.[t.min].replace("px",""))}px`:o.style.flex=`0 0 ${y?.[t.size]+x?.[t.size]}px`,b(p,o)),C.current<T&&(o.style.flex="0 0 0px",o.style?.[t.min]?p.style.flex=`0 0 ${x?.[t.size]+(y?.[t.size]-o.style?.[t.min].replace("px",""))}px`:p.style.flex=`0 0 ${x?.[t.size]+y?.[t.size]}px`,b(p,o))},Y=a=>{a.type==="pointerdown"&&a.pointerType!=="touch"||(a.currentTarget.focus(),a.preventDefault(),j(a.pointerType??"mouse"),w.current=a.nativeEvent[t.offset],R.current=n.current[c[0]].getBoundingClientRect()?.[t.end],n.current[c[1]][c[1]]?C.current=n.current[c[1]][c[1]].getBoundingClientRect()?.[t.start]:C.current=n.current.parentElement.getBoundingClientRect()[t.end],v.current=n.current[c[0]].getBoundingClientRect()?.[t.size],L.current=n.current[c[1]].getBoundingClientRect()?.[t.size],B.current=a[`client${t.position}`])},oe=a=>{const m=a.code??a.key;if(m==="ArrowRight"||m==="ArrowLeft"||m==="ArrowUp"||m==="ArrowDown"){a.preventDefault();let p=n.current[c[0]],o=n.current[c[1]];(m==="ArrowLeft"||m==="ArrowUp")&&(o=n.current[c[0]],p=n.current[c[1]]);const x=o.style[t.min]?o.getBoundingClientRect()?.[t.size]-Number(o.style[t.min].replace("px","")):o.getBoundingClientRect()?.[t.size];if(document.activeElement===n.current){const y=x>=20?20:x,T=p.getBoundingClientRect()?.[t.size],M=o.getBoundingClientRect()?.[t.size];o.style.flex=`0 0 ${M-y}px`,p.style.flex=`0 0 ${T+y}px`,m==="ArrowLeft"||m==="ArrowUp"?b(o,p):b(p,o)}}},U=a=>{W(a,z==="touch"),j(!1)};r.useEffect(()=>{const a=()=>{z==="touch"?(document.removeEventListener("touchmove",I),document.removeEventListener("touchend",U)):(document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",I))};return z?z==="touch"?(document.addEventListener("touchmove",I),document.addEventListener("touchend",U)):(document.addEventListener("mousemove",I),document.addEventListener("mouseup",U)):a(),()=>{a()}},[z]),r.useEffect(()=>{q(g&&!s?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[g,s]);const H=pe(),se=H==="sap_fiori_3_hcb"||H==="sap_fiori_3_hcw"||H==="sap_horizon_hcb"||H==="sap_horizon_hcw";return e.jsxs("div",{className:A.splitter,tabIndex:0,onKeyDown:oe,onPointerDown:Y,onMouseDown:Y,ref:d,role:"separator","data-splitter-vertical":s?"vertical":"horizontal",title:S.getText(Z),"aria-orientation":s?"vertical":"horizontal","aria-label":S.getText(Z),children:[e.jsx("div",{className:A.lineBefore}),e.jsx("div",{className:A.gripContainer,children:se?e.jsx(h,{className:A.gripButton,tabIndex:-1,icon:s?ne:ee,design:ce.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(de,{className:A.icon,name:s?ne:ee,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:A.lineAfter})]})});V.displayName="Splitter";try{V.displayName="Splitter",V.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}try{V.displayName="Splitter",V.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const P=l=>r.useMemo(()=>{if(r.isValidElement(l?.children))return l?.children;const u=r.Children.toArray(l?.children).filter(r.isValidElement);let s=0;const _=[];return u.forEach((S,d)=>{const n=u[d+s],g=Object.prototype.hasOwnProperty.call(n.props,"minSize")?n.props.minSize:0;if(u.length-s-1>d&&(n.props.resizable||n.props.resizable===void 0)&&g!==void 0)u.splice(d+s+1,0,e.jsx(V,{height:l?.height,width:l?.width,vertical:l?.vertical,onResize:l?.onResize},`splitter${d}`)),_.push(d+1+s-1),++s;else if(d>0&&n?.props.resizable===!1){const B=u.findIndex(v=>v===n)-1;u[B].props.minSize===void 0&&u.splice(B,1),_.pop(),--s}}),_.forEach(S=>{const d=u[S]?.props?.size,n=typeof d=="number"?`${d}px`:d;d&&d!=="auto"&&(u[S]=r.cloneElement(u[S],{size:`calc(${n} - var(--_ui5wcr-SplitterSize))`}))}),u},[l]);try{P.displayName="useConcatSplitterElements",P.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}try{P.displayName="useConcatSplitterElements",P.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const f=r.forwardRef((l,u)=>{const{vertical:s,children:_,title:S,style:d,className:n,options:g,onResize:B,...v}=l,[L,R]=G(u),[C,w]=r.useState(void 0),t=r.useRef({width:void 0,height:void 0}),z=r.useRef(!0),j=r.useRef(!0),c=P({children:_??[],width:d?.width,height:d?.height,vertical:s,onResize:B});return K(_e,f.displayName),r.useEffect(()=>{!z.current&&g?.resetOnChildrenChange&&w(!0),z.current=!1},[_,g?.resetOnChildrenChange]),r.useEffect(()=>{j.current||w(!0),j.current=!1},g?.resetOnCustomDepsChange??[]),r.useEffect(()=>{if(g?.resetOnSizeChange){const q=new ResizeObserver(he(([k])=>{const b=k.target.getBoundingClientRect();!s&&b.width!==t.current.width?(t.current.width=b.width,w(!0)):s&&b.height!==t.current.height&&(t.current.height=b.height,w(!0))},60));return q.observe(R.current),()=>{q.disconnect()}}},[s,g?.resetOnSizeChange]),r.useEffect(()=>{C&&w(!1)},[C]),e.jsx(le.Provider,{value:{vertical:s,reset:C},children:e.jsx("div",{style:{flexDirection:s?"column":"row",...d},title:S,...v,className:ie(Se.splitterLayout,n),ref:L,"data-splitter-vertical":s,children:c})})});f.displayName="SplitterLayout";try{f.displayName="SplitterLayout",f.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{f.displayName="SplitterLayout",f.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const N=({text:l,background:u="transparent"})=>e.jsx(E,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:l})}),qe={title:"Layouts & Floorplans / SplitterLayout",component:f,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},F={parameters:{chromatic:{diffThreshold:.6}},render(l){return e.jsxs(f,{...l,children:[e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:"Content 4"})})})]})}},$={render(l){return e.jsxs(f,{...l,children:[e.jsx(i,{size:"10%",children:e.jsx(N,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(N,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(N,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(N,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(N,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(N,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(N,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(N,{text:"Content 8",background:"lightsteelblue"})})]})}},O={parameters:{chromatic:{disableSnapshot:!0}},render(l){const[u,s]=r.useState(l.vertical),_=S=>{s(S.detail.selectedItems[0].textContent==="Vertical")};return r.useEffect(()=>{s(l.vertical)},[l.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"Column",children:[e.jsx(me,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(ye,{onSelectionChange:_,children:[e.jsx(te,{pressed:!u,children:"Horizontal"}),e.jsx(te,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(f,{style:l.style,vertical:u,children:[e.jsx(i,{size:"40%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 1"}),e.jsxs(f,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(h,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(h,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(h,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 5"}),e.jsxs(f,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(h,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 7"}),e.jsxs(f,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(h,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(h,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(h,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(h,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 12"}),e.jsxs(f,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(h,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(h,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(h,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(h,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(h,{children:"Content 17"})})]})]})})]})]})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Ie=["Default","LimitedAreas","Nested"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Default:F,LimitedAreas:$,Nested:O,__namedExportsOrder:Ie,default:qe},Symbol.toStringTag,{value:"Module"}));export{Ue as C,F as D,$ as L,O as N,i as S};
