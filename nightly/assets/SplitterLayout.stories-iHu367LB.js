import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-qmG4ve5T.js";import{F as B}from"./index-C2w1dnoB.js";import{T as O}from"./index-Z1IFI4-r.js";import"./index-BM8FV3HB.js";import{r as l}from"./index-U0ga5oGA.js";import{u as J}from"./CustomElementsScope-BZQ-yqK5.js";import{A as Y,q as Q}from"./jsx-runtime-2NO35c9p.js";import{c as pe}from"./clsx-B-dksMZM.js";import{B as ge}from"./Button-DsiN4KEf.js";import{f as he}from"./Icon-Dy5MqRQN.js";import{v as Z}from"./vertical-grip-7HH-iUZ9.js";import{u as _e,ag as ee}from"./i18n-defaults-DHddteo6.js";import{u as Se}from"./useIsRTL-WiH5er_M.js";import{u as X}from"./useStylesheet-DhspXHhi.js";import{u as be}from"./useCurrentTheme-BzmnxB7U.js";import{B as m}from"./index-C2cs6waD.js";import{I as xe}from"./index-cHSlkY-E.js";import{d as ve}from"./debounce-D7W5PopO.js";import{L as ze}from"./index-49bJeJce.js";import{a as we,S as te}from"./index-D2Tisrj8.js";const me=l.createContext({vertical:!0,reset:!1}),Ce="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",Be={splitterElement:"_splitterElement_5jt3n_1"},r=l.forwardRef((n,c)=>{const{children:o,style:b,className:w,minSize:t=0,size:h="auto",resizable:s,...g}=n,[E,A]=Y(c),{vertical:x,reset:C}=l.useContext(me),i=Q()?{width:"min-content",flex:"1 1 auto"}:{},f=typeof h=="number"?`${h}px`:h,N=f!=="auto"?{flex:`0 1 ${f}`}:{flex:"1 0 min-content",...i},[a,j]=l.useState(N),[k,L]=l.useState(!1);return X(Ce,r.displayName),l.useEffect(()=>{const $=new ResizeObserver(([W])=>{if(W.target.getBoundingClientRect().width!==0&&!k){const D=Q()?{width:"unset"}:{};j({flex:`0 0 ${W.target.getBoundingClientRect()[x?"height":"width"]}px`,...D}),L(!0)}});return f==="auto"&&A.current?$.observe(A.current):j({flex:`0 1 ${f}`}),()=>{$.disconnect()}},[f,k,x]),J(()=>{C&&(j(void 0),L(!1))},[C,f]),J(()=>{a===void 0&&j(N)},[a]),e.jsx("div",{ref:E,className:pe(Be.splitterElement,w),style:{minHeight:x&&t?`${t}px`:void 0,minWidth:!x&&t?`${t}px`:void 0,...a,...b},...g,"data-min-size":t,children:o})});r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ee="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",je={splitterLayout:"_splitterLayout_6n3m3_1"},ke="horizontal-grip",Le="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ne=!1,qe="SAP-icons-v4",Ve="@ui5/webcomponents-icons";he(ke,{pathData:Le,ltr:Ne,collection:qe,packageName:Ve});const Ie="horizontal-grip",Te="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Ae=!1,De="SAP-icons-v5",Re="@ui5/webcomponents-icons";he(Ie,{pathData:Te,ltr:Ae,collection:De,packageName:Re});const ne="horizontal-grip",$e="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",R={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},Fe={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},Oe={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},T=l.forwardRef((n,c)=>{const{vertical:o}=n,b=_e("@ui5/webcomponents-react"),[w,t]=Y(c),h=Se(t),s=l.useRef(null);X($e,T.displayName);const g=l.useRef(null),E=l.useRef(null),A=l.useRef(null),x=l.useRef(null),C=l.useRef(0),i=o?Fe:Oe,[f,N]=l.useState(!1),[a,j]=l.useState(["previousSibling","nextSibling"]),k=d=>{const v=C.current,_=t.current[a[0]],y=t.current[a[1]],p=f==="touch"?d.touches[0][`client${i.position}`]:d[`client${i.position}`],u=p-s.current,q=t.current.getBoundingClientRect()[i.size],z=u<0,V=()=>{_.style.flex=`0 0 ${g.current+u}px`,y.nextSibling&&g.current+u>0&&(y.style.flex=`0 0 ${E.current-u}px`)};g.current+u>0&&p+(q-v)<=x.current&&(parseInt(_.dataset.minSize,10)<=g.current+u&&z&&V(),E.current-u>=parseInt(y.dataset.minSize,10)&&!z&&V()),!y[a[1]]&&!h&&(y.style.flex="1 0 0px")},L=(d,v)=>{var z,V,F,K;if(!t.current)return;const _=t.current[a[0]],y=t.current[a[1]],p=t.current[a[0]].getBoundingClientRect(),u=t.current[a[1]].getBoundingClientRect(),q=v?Math.round(d.changedTouches[0][`client${i.position}`]):d[`client${i.position}`];!t.current.contains(d.target)&&q-t.current[`offset${i.startUppercase}`]+1<0&&(_.style.flex="0 0 0px",(z=_.style)!=null&&z[i.min]?y.style.flex=`0 0 ${(u==null?void 0:u[i.size])+((p==null?void 0:p[i.size])-((V=_.style)==null?void 0:V[i.min].replace("px","")))}px`:y.style.flex=`0 0 ${(u==null?void 0:u[i.size])+(p==null?void 0:p[i.size])}px`),x.current<q&&(y.style.flex="0 0 0px",(F=y.style)!=null&&F[i.min]?_.style.flex=`0 0 ${(p==null?void 0:p[i.size])+((u==null?void 0:u[i.size])-((K=y.style)==null?void 0:K[i.min].replace("px","")))}px`:_.style.flex=`0 0 ${(p==null?void 0:p[i.size])+(u==null?void 0:u[i.size])}px`)},$=d=>{var v,_,y,p;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.currentTarget.focus(),d.preventDefault(),N(d.pointerType??"mouse"),C.current=d.nativeEvent[i.offset],A.current=(v=t.current[a[0]].getBoundingClientRect())==null?void 0:v[i.end],t.current[a[1]][a[1]]?x.current=(_=t.current[a[1]][a[1]].getBoundingClientRect())==null?void 0:_[i.start]:x.current=t.current.parentElement.getBoundingClientRect()[i.end],g.current=(y=t.current[a[0]].getBoundingClientRect())==null?void 0:y[i.size],E.current=(p=t.current[a[1]].getBoundingClientRect())==null?void 0:p[i.size],s.current=d[`client${i.position}`])},W=d=>{var _,y,p,u;const v=d.code??d.key;if(v==="ArrowRight"||v==="ArrowLeft"||v==="ArrowUp"||v==="ArrowDown"){d.preventDefault();let q=t.current[a[0]],z=t.current[a[1]];(v==="ArrowLeft"||v==="ArrowUp")&&(z=t.current[a[0]],q=t.current[a[1]]);const V=z.style[i.min]?((_=z.getBoundingClientRect())==null?void 0:_[i.size])-Number(z.style[i.min].replace("px","")):(y=z.getBoundingClientRect())==null?void 0:y[i.size];if(document.activeElement===t.current){const F=V>=20?20:V,K=(p=q.getBoundingClientRect())==null?void 0:p[i.size],fe=(u=z.getBoundingClientRect())==null?void 0:u[i.size];z.style.flex=`0 0 ${fe-F}px`,q.style.flex=`0 0 ${K+F}px`}}},D=d=>{L(d,f==="touch"),N(!1)};l.useEffect(()=>{const d=()=>{f==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",D)):(document.removeEventListener("mouseup",D),document.removeEventListener("mousemove",k))};return f?f==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",D)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",D)):d(),()=>{d()}},[f]),l.useEffect(()=>{j(h&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[h,o]);const G=be(),ye=G==="sap_fiori_3_hcb"||G==="sap_fiori_3_hcw"||G==="sap_horizon_hcb"||G==="sap_horizon_hcw";return e.jsxs("div",{className:R.splitter,tabIndex:0,onKeyDown:W,onPointerDown:$,onMouseDown:$,ref:w,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:b.getText(ee),"aria-orientation":o?"vertical":"horizontal","aria-label":b.getText(ee),children:[e.jsx("div",{className:R.lineBefore}),e.jsx("div",{className:R.gripContainer,children:ye?e.jsx(m,{className:R.gripButton,tabIndex:-1,icon:o?ne:Z,design:ge.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:R.icon,name:o?ne:Z,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:R.lineAfter})]})});T.displayName="Splitter";try{T.displayName="Splitter",T.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="Splitter",T.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const b=[];return c.forEach((w,t)=>{const h=c[t+o],s=Object.prototype.hasOwnProperty.call(h.props,"minSize")?h.props.minSize:0;if(c.length-o-1>t&&(h.props.resizable||h.props.resizable===void 0)&&s!==void 0)c.splice(t+o+1,0,e.jsx(T,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),b.push(t+1+o-1),++o;else if(t>0&&(h==null?void 0:h.props.resizable)===!1){const g=c.findIndex(E=>E===h)-1;c[g].props.minSize===void 0&&c.splice(g,1),b.pop(),--o}}),b.forEach(w=>{var s,g;const t=(g=(s=c[w])==null?void 0:s.props)==null?void 0:g.size,h=typeof t=="number"?`${t}px`:t;t&&t!=="auto"&&(c[w]=l.cloneElement(c[w],{size:`calc(${h} - var(--_ui5wcr-SplitterSize))`}))}),c},[n]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const S=l.forwardRef((n,c)=>{const{vertical:o,children:b,title:w,style:t,className:h,options:s,...g}=n,[E,A]=Y(c),[x,C]=l.useState(void 0),i=l.useRef({width:void 0,height:void 0}),f=l.useRef(!0),N=l.useRef(!0),a=M({children:b??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return X(Ee,S.displayName),l.useEffect(()=>{!f.current&&(s!=null&&s.resetOnChildrenChange)&&C(!0),f.current=!1},[b,s==null?void 0:s.resetOnChildrenChange]),l.useEffect(()=>{N.current||C(!0),N.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const j=new ResizeObserver(ve(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==i.current.width?(i.current.width=L.width,C(!0)):o&&L.height!==i.current.height&&(i.current.height=L.height,C(!0))},60));return j.observe(A.current),()=>{j.disconnect()}}},[o,s==null?void 0:s.resetOnSizeChange]),l.useEffect(()=>{x&&C(!1)},[x]),e.jsx(me.Provider,{value:{vertical:o,reset:x},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:w,...g,className:pe(je.splitterLayout,h),ref:E,"data-splitter-vertical":o,children:a})})});S.displayName="SplitterLayout";try{S.displayName="SplitterLayout",S.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="SplitterLayout",S.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const I=({text:n,background:c="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:n})}),Ue={title:"Layouts & Floorplans / SplitterLayout",component:S,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},U={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(S,{...n,children:[e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 4"})})})]})}},P={render(n){return e.jsxs(S,{...n,children:[e.jsx(r,{size:"10%",children:e.jsx(I,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(I,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(I,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(I,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(I,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(I,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(I,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(I,{text:"Content 8",background:"lightsteelblue"})})]})}},H={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,o]=l.useState(n.vertical),b=w=>{o(w.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(ze,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(we,{onSelectionChange:b,children:[e.jsx(te,{pressed:!c,children:"Horizontal"}),e.jsx(te,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(S,{style:n.style,vertical:c,children:[e.jsx(r,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(S,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var ie,re,le;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=U.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,se,ae;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,de,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render(args) {
    const [vertical, setVertical] = useState(args.vertical);
    const handleChange = e => {
      setVertical(e.detail.selectedItem.textContent === 'Vertical');
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
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Pe=["Default","LimitedAreas","Nested"],ut=Object.freeze(Object.defineProperty({__proto__:null,Default:U,LimitedAreas:P,Nested:H,__namedExportsOrder:Pe,default:Ue},Symbol.toStringTag,{value:"Module"}));export{ut as C,U as D,P as L,H as N,r as S};
