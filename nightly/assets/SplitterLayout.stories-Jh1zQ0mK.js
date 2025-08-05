import{r as l,ap as X,ay as J,u as Z,j as e,x as me,b1 as ee,ad as ye,az as be,Q as g,_ as ze,I as xe,gk as te,J as O}from"./iframe-CG2rGjbc.js";import{F as k}from"./index-BEeaA3No.js";import{v as ne}from"./vertical-grip-u9KJUAp7.js";import{u as ve}from"./useIsRTL-CMFeNktt.js";import{u as Ce}from"./useCurrentTheme-DRE7X6Nh.js";import{d as we}from"./debounce-D7W5PopO.js";import{L as Be}from"./index-Bm2fVwXT.js";import{a as Ee,S as ie}from"./index-BsAvd2zC.js";const fe=l.createContext({vertical:!0,reset:!1}),je="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",ke={splitterElement:"_splitterElement_5jt3n_1"},r=l.forwardRef((t,m)=>{const{children:s,style:b,className:z,minSize:o=0,size:i="auto",resizable:a,...C}=t,[B,N]=X(m),{vertical:q,reset:E}=l.useContext(fe),j=ee()?{width:"min-content",flex:"1 1 auto"}:{},n=typeof i=="number"?`${i}px`:i,w=n!=="auto"?{flex:`0 1 ${n}`}:{flex:"1 0 min-content",...j},[L,u]=l.useState(w),[T,R]=l.useState(!1);return J(je,r.displayName),l.useEffect(()=>{const x=new ResizeObserver(([A])=>{if(A.target.getBoundingClientRect().width!==0&&!T){const Y=ee()?{width:"unset"}:{};u({flex:`0 0 ${A.target.getBoundingClientRect()[q?"height":"width"]}px`,...Y}),R(!0)}});return n==="auto"&&N.current?x.observe(N.current):u({flex:`0 1 ${n}`}),()=>{x.disconnect()}},[n,T,q]),Z(()=>{E&&(u(void 0),R(!1))},[E,n]),Z(()=>{L===void 0&&u(w)},[L]),e.jsx("div",{ref:B,className:me(ke.splitterElement,z),style:{minHeight:q&&o?`${o}px`:void 0,minWidth:!q&&o?`${o}px`:void 0,...L,...b},...C,"data-min-size":o,children:s})});r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Le="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",Re={splitterLayout:"_splitterLayout_6n3m3_1"},Ne="horizontal-grip",qe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ie=!1,Ve="SAP-icons-v4",Te="@ui5/webcomponents-icons";ye(Ne,{pathData:qe,ltr:Ie,collection:Ve,packageName:Te});const Ae="horizontal-grip",De="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Fe=!1,$e="SAP-icons-v5",Oe="@ui5/webcomponents-icons";ye(Ae,{pathData:De,ltr:Fe,collection:$e,packageName:Oe});const re="horizontal-grip",Pe="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",F={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},Ue={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},He={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},D=l.forwardRef((t,m)=>{const{vertical:s,onResize:b}=t,z=be("@ui5/webcomponents-react"),[o,i]=X(m),a=ve(i),C=l.useRef(null);J(Pe,D.displayName);const B=l.useRef(null),N=l.useRef(null),q=l.useRef(null),E=l.useRef(null),j=l.useRef(0),n=s?Ue:He,[w,L]=l.useState(!1),[u,T]=l.useState(["previousSibling","nextSibling"]),R=l.useRef(null),x=(c,f)=>{R.current&&cancelAnimationFrame(R.current),typeof b=="function"&&(R.current=requestAnimationFrame(()=>{var d,v;const y=a?f:c,p=a?c:f,h=i.current.getBoundingClientRect()[n.size];b({areas:[{size:((d=y.getBoundingClientRect())==null?void 0:d[n.size])+h,area:y},{size:((v=p.getBoundingClientRect())==null?void 0:v[n.size])+(p.nextElementSibling!==null?h:0),area:p}],splitter:i.current}),R.current=null}))},A=c=>{const f=j.current,y=i.current[u[0]],p=i.current[u[1]],h=w==="touch"?c.touches[0][`client${n.position}`]:c[`client${n.position}`],d=h-C.current,v=i.current.getBoundingClientRect()[n.size],_=d<0,I=()=>{y.style.flex=`0 0 ${B.current+d}px`,p.nextSibling&&B.current+d>0&&(p.style.flex=`0 0 ${N.current-d}px`),x(y,p)};B.current+d>0&&h+(v-f)<=E.current&&(parseInt(y.dataset.minSize,10)<=B.current+d&&_&&I(),N.current-d>=parseInt(p.dataset.minSize,10)&&!_&&I()),!p[u[1]]&&!a&&(p.style.flex="1 0 0px")},Y=(c,f)=>{var _,I,$,K;if(!i.current)return;const y=i.current[u[0]],p=i.current[u[1]],h=i.current[u[0]].getBoundingClientRect(),d=i.current[u[1]].getBoundingClientRect(),v=f?Math.round(c.changedTouches[0][`client${n.position}`]):c[`client${n.position}`];!i.current.contains(c.target)&&v-i.current[`offset${n.startUppercase}`]+1<0&&(y.style.flex="0 0 0px",(_=y.style)!=null&&_[n.min]?p.style.flex=`0 0 ${(d==null?void 0:d[n.size])+((h==null?void 0:h[n.size])-((I=y.style)==null?void 0:I[n.min].replace("px","")))}px`:p.style.flex=`0 0 ${(d==null?void 0:d[n.size])+(h==null?void 0:h[n.size])}px`,x(y,p)),E.current<v&&(p.style.flex="0 0 0px",($=p.style)!=null&&$[n.min]?y.style.flex=`0 0 ${(h==null?void 0:h[n.size])+((d==null?void 0:d[n.size])-((K=p.style)==null?void 0:K[n.min].replace("px","")))}px`:y.style.flex=`0 0 ${(h==null?void 0:h[n.size])+(d==null?void 0:d[n.size])}px`,x(y,p))},Q=c=>{var f,y,p,h;c.type==="pointerdown"&&c.pointerType!=="touch"||(c.currentTarget.focus(),c.preventDefault(),L(c.pointerType??"mouse"),j.current=c.nativeEvent[n.offset],q.current=(f=i.current[u[0]].getBoundingClientRect())==null?void 0:f[n.end],i.current[u[1]][u[1]]?E.current=(y=i.current[u[1]][u[1]].getBoundingClientRect())==null?void 0:y[n.start]:E.current=i.current.parentElement.getBoundingClientRect()[n.end],B.current=(p=i.current[u[0]].getBoundingClientRect())==null?void 0:p[n.size],N.current=(h=i.current[u[1]].getBoundingClientRect())==null?void 0:h[n.size],C.current=c[`client${n.position}`])},ge=c=>{var y,p,h,d;const f=c.code??c.key;if(f==="ArrowRight"||f==="ArrowLeft"||f==="ArrowUp"||f==="ArrowDown"){c.preventDefault();let v=i.current[u[0]],_=i.current[u[1]];(f==="ArrowLeft"||f==="ArrowUp")&&(_=i.current[u[0]],v=i.current[u[1]]);const I=_.style[n.min]?((y=_.getBoundingClientRect())==null?void 0:y[n.size])-Number(_.style[n.min].replace("px","")):(p=_.getBoundingClientRect())==null?void 0:p[n.size];if(document.activeElement===i.current){const $=I>=20?20:I,K=(h=v.getBoundingClientRect())==null?void 0:h[n.size],Se=(d=_.getBoundingClientRect())==null?void 0:d[n.size];_.style.flex=`0 0 ${Se-$}px`,v.style.flex=`0 0 ${K+$}px`,f==="ArrowLeft"||f==="ArrowUp"?x(_,v):x(v,_)}}},W=c=>{Y(c,w==="touch"),L(!1)};l.useEffect(()=>{const c=()=>{w==="touch"?(document.removeEventListener("touchmove",A),document.removeEventListener("touchend",W)):(document.removeEventListener("mouseup",W),document.removeEventListener("mousemove",A))};return w?w==="touch"?(document.addEventListener("touchmove",A),document.addEventListener("touchend",W)):(document.addEventListener("mousemove",A),document.addEventListener("mouseup",W)):c(),()=>{c()}},[w]),l.useEffect(()=>{T(a&&!s?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,s]);const G=Ce(),_e=G==="sap_fiori_3_hcb"||G==="sap_fiori_3_hcw"||G==="sap_horizon_hcb"||G==="sap_horizon_hcw";return e.jsxs("div",{className:F.splitter,tabIndex:0,onKeyDown:ge,onPointerDown:Q,onMouseDown:Q,ref:o,role:"separator","data-splitter-vertical":s?"vertical":"horizontal",title:z.getText(te),"aria-orientation":s?"vertical":"horizontal","aria-label":z.getText(te),children:[e.jsx("div",{className:F.lineBefore}),e.jsx("div",{className:F.gripContainer,children:_e?e.jsx(g,{className:F.gripButton,tabIndex:-1,icon:s?re:ne,design:ze.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:F.icon,name:s?re:ne,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:F.lineAfter})]})});D.displayName="Splitter";try{D.displayName="Splitter",D.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}try{D.displayName="Splitter",D.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const M=t=>l.useMemo(()=>{if(l.isValidElement(t==null?void 0:t.children))return t==null?void 0:t.children;const m=l.Children.toArray(t==null?void 0:t.children).filter(l.isValidElement);let s=0;const b=[];return m.forEach((z,o)=>{const i=m[o+s],a=Object.prototype.hasOwnProperty.call(i.props,"minSize")?i.props.minSize:0;if(m.length-s-1>o&&(i.props.resizable||i.props.resizable===void 0)&&a!==void 0)m.splice(o+s+1,0,e.jsx(D,{height:t==null?void 0:t.height,width:t==null?void 0:t.width,vertical:t==null?void 0:t.vertical,onResize:t==null?void 0:t.onResize},`splitter${o}`)),b.push(o+1+s-1),++s;else if(o>0&&(i==null?void 0:i.props.resizable)===!1){const C=m.findIndex(B=>B===i)-1;m[C].props.minSize===void 0&&m.splice(C,1),b.pop(),--s}}),b.forEach(z=>{var a,C;const o=(C=(a=m[z])==null?void 0:a.props)==null?void 0:C.size,i=typeof o=="number"?`${o}px`:o;o&&o!=="auto"&&(m[z]=l.cloneElement(m[z],{size:`calc(${i} - var(--_ui5wcr-SplitterSize))`}))}),m},[t]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const S=l.forwardRef((t,m)=>{const{vertical:s,children:b,title:z,style:o,className:i,options:a,onResize:C,...B}=t,[N,q]=X(m),[E,j]=l.useState(void 0),n=l.useRef({width:void 0,height:void 0}),w=l.useRef(!0),L=l.useRef(!0),u=M({children:b??[],width:o==null?void 0:o.width,height:o==null?void 0:o.height,vertical:s,onResize:C});return J(Le,S.displayName),l.useEffect(()=>{!w.current&&(a!=null&&a.resetOnChildrenChange)&&j(!0),w.current=!1},[b,a==null?void 0:a.resetOnChildrenChange]),l.useEffect(()=>{L.current||j(!0),L.current=!1},(a==null?void 0:a.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(a!=null&&a.resetOnSizeChange){const T=new ResizeObserver(we(([R])=>{const x=R.target.getBoundingClientRect();!s&&x.width!==n.current.width?(n.current.width=x.width,j(!0)):s&&x.height!==n.current.height&&(n.current.height=x.height,j(!0))},60));return T.observe(q.current),()=>{T.disconnect()}}},[s,a==null?void 0:a.resetOnSizeChange]),l.useEffect(()=>{E&&j(!1)},[E]),e.jsx(fe.Provider,{value:{vertical:s,reset:E},children:e.jsx("div",{style:{flexDirection:s?"column":"row",...o},title:z,...B,className:me(Re.splitterLayout,i),ref:N,"data-splitter-vertical":s,children:u})})});S.displayName="SplitterLayout";try{S.displayName="SplitterLayout",S.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{S.displayName="SplitterLayout",S.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const V=({text:t,background:m="transparent"})=>e.jsx(k,{style:{height:"100%",width:"100%",background:m},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:t})}),Me={title:"Layouts & Floorplans / SplitterLayout",component:S,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},P={parameters:{chromatic:{diffThreshold:.6}},render(t){return e.jsxs(S,{...t,children:[e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 4"})})})]})}},U={render(t){return e.jsxs(S,{...t,children:[e.jsx(r,{size:"10%",children:e.jsx(V,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(V,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(V,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(V,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(V,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(V,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(V,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(V,{text:"Content 8",background:"lightsteelblue"})})]})}},H={parameters:{chromatic:{disableSnapshot:!0}},render(t){const[m,s]=l.useState(t.vertical),b=z=>{s(z.detail.selectedItems[0].textContent==="Vertical")};return l.useEffect(()=>{s(t.vertical)},[t.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{direction:"Column",children:[e.jsx(Be,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Ee,{onSelectionChange:b,children:[e.jsx(ie,{pressed:!m,children:"Horizontal"}),e.jsx(ie,{pressed:m,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(S,{style:t.style,vertical:m,children:[e.jsx(r,{size:"40%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 1"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(g,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(g,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(g,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 5"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(g,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 7"}),e.jsxs(S,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(g,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(g,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(g,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(g,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 12"}),e.jsxs(S,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(g,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(g,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(g,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(g,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(g,{children:"Content 17"})})]})]})})]})]})}};var le,oe,se;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ce,de;U.parameters={...U.parameters,docs:{...(ae=U.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(de=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,he;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const We=["Default","LimitedAreas","Nested"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:U,Nested:H,__namedExportsOrder:We,default:Me},Symbol.toStringTag,{value:"Module"}));export{tt as C,P as D,U as L,H as N,r as S};
