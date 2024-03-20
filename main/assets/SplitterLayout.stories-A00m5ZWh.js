import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{F as B}from"./index-OhLc20eu.js";import{T as $}from"./index-60zCs_zk.js";import"./index-x2v36-vL.js";import{r as l}from"./index-OjgoNOWw.js";import{c as me}from"./clsx-Zbgk8kpT.js";import{u as G}from"./withWebComponent-LTFbYRvs.js";import{u as Q}from"./useStylesheet-MWHnOiB7.js";import{u as Z}from"./useIsomorphicLayoutEffect-s31TYDr7.js";import{m as ee,k as fe}from"./Boot-vTaFuwdG.js";import{r as Y}from"./Icons-Vbmmw7bO.js";import{u as ze,ae as te}from"./i18n-defaults-Ph_9MK3s.js";import{u as Ce}from"./useIsRTL-v9TqQ2ve.js";import{u as we}from"./useCurrentTheme-ymwiCprU.js";import{B as m}from"./index-JAZ0uJEc.js";import{B as Ee}from"./Button-DcwyQdV9.js";import{I as Be}from"./index-5s156EZI.js";import{d as ke}from"./debounce-F9irgL9Y.js";import{L as je}from"./index-rKouAXFQ.js";import{a as Le,S as ne}from"./index-N-luCbfG.js";const ge=l.createContext({vertical:!0,reset:!1}),Ne={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},qe={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},r=l.forwardRef((t,c)=>{const{children:o,style:S,className:v,minSize:n,size:u,resizable:a,...w}=t,[T,R]=G(c),{vertical:_,reset:E}=l.useContext(ge),i=ee()?{width:"min-content",flex:"1 1 auto"}:{},z=u!=="auto"?{flex:`0 1 ${u}`}:{flex:"1 0 min-content",...i},[k,s]=l.useState(z),[V,j]=l.useState(!1);return Q(Ne,r.displayName),l.useEffect(()=>{const L=new ResizeObserver(([M])=>{if(M.target.getBoundingClientRect().width!==0&&!V){const H=ee()?{width:"unset"}:{};s({flex:`0 0 ${M.target.getBoundingClientRect()[_?"height":"width"]}px`,...H}),j(!0)}});return u==="auto"&&R.current?L.observe(R.current):s({flex:`0 1 ${u}`}),()=>{L.disconnect()}},[u,V,_]),Z(()=>{E&&(s(void 0),j(!1))},[E,u]),Z(()=>{k===void 0&&s(z)},[k]),e.jsx("div",{ref:T,className:me(qe.splitterElement,v),style:{minHeight:_&&n?`${n}px`:void 0,minWidth:!_&&n?`${n}px`:void 0,...k,...S},...w,"data-min-size":n,children:o})});r.defaultProps={minSize:0,size:"auto"};r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},Ve={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},Ie="horizontal-grip",ye="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Re=!1,De="SAP-icons-v4",Ae="@ui5/webcomponents-icons";Y(Ie,{pathData:ye,ltr:Re,collection:De,packageName:Ae});const $e="horizontal-grip",Se="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Fe=!1,Pe="SAP-icons-v5",Oe="@ui5/webcomponents-icons";Y($e,{pathData:Se,ltr:Fe,collection:Pe,packageName:Oe});fe();const ie="horizontal-grip",Ue="vertical-grip",_e="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Me=!1,He="SAP-icons-v4",We="@ui5/webcomponents-icons";Y(Ue,{pathData:_e,ltr:Me,collection:He,packageName:We});const Xe="vertical-grip",be="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Je=!1,Ke="SAP-icons-v5",Ye="@ui5/webcomponents-icons";Y(Xe,{pathData:be,ltr:Je,collection:Ke,packageName:Ye});fe();const re="vertical-grip",Ge={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"},A={splitter:"Splitter_splitter_1e52h_1",icon:"Splitter_icon_1e52h_17",lineBefore:"Splitter_lineBefore_1e52h_32",lineAfter:"Splitter_lineAfter_1e52h_33",gripButton:"Splitter_gripButton_1e52h_91"},Qe={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Ze={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((t,c)=>{const{vertical:o}=t,S=ze("@ui5/webcomponents-react"),[v,n]=G(c),u=Ce(n),a=l.useRef(null);Q(Ge,I.displayName);const w=l.useRef(null),T=l.useRef(null),R=l.useRef(null),_=l.useRef(null),E=l.useRef(0),i=o?Qe:Ze,[z,k]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),j=d=>{const b=E.current,g=n.current[s[0]],f=n.current[s[1]],h=z==="touch"?d.touches[0][`client${i.position}`]:d[`client${i.position}`],p=h-a.current,N=n.current.getBoundingClientRect()[i.size],x=p<0,q=()=>{g.style.flex=`0 0 ${w.current+p}px`,f.nextSibling&&w.current+p>0&&(f.style.flex=`0 0 ${T.current-p}px`)};w.current+p>0&&h+(N-b)<=_.current&&(parseInt(g.dataset.minSize,10)<=w.current+p&&x&&q(),T.current-p>=parseInt(f.dataset.minSize,10)&&!x&&q()),!f[s[1]]&&!u&&(f.style.flex="1 0 0px")},L=(d,b)=>{var x,q,D,J,K;const g=n.current[s[0]],f=n.current[s[1]],h=n.current[s[0]].getBoundingClientRect(),p=n.current[s[1]].getBoundingClientRect(),N=b?Math.round(d.changedTouches[0][`client${i.position}`]):d[`client${i.position}`];N-((x=n.current.getBoundingClientRect())==null?void 0:x[i.positionRect])<0&&(g.style.flex="0 0 0px",(q=g.style)!=null&&q[i.min]?f.style.flex=`0 0 ${(p==null?void 0:p[i.size])+((h==null?void 0:h[i.size])-((D=g.style)==null?void 0:D[i.min].replace("px","")))}px`:f.style.flex=`0 0 ${(p==null?void 0:p[i.size])+(h==null?void 0:h[i.size])}px`),_.current<N&&(f.style.flex="0 0 0px",(J=f.style)!=null&&J[i.min]?g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+((p==null?void 0:p[i.size])-((K=f.style)==null?void 0:K[i.min].replace("px","")))}px`:g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+(p==null?void 0:p[i.size])}px`)},M=d=>{d.currentTarget.focus()},H=d=>{var b,g,f,h;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),k(d.pointerType??"mouse"),E.current=d.nativeEvent[i.offset],R.current=(b=n.current[s[0]].getBoundingClientRect())==null?void 0:b[i.end],n.current[s[1]][s[1]]?_.current=(g=n.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:g[i.start]:_.current=n.current.parentElement.getBoundingClientRect()[i.end],w.current=(f=n.current[s[0]].getBoundingClientRect())==null?void 0:f[i.size],T.current=(h=n.current[s[1]].getBoundingClientRect())==null?void 0:h[i.size],a.current=d[`client${i.position}`])},xe=d=>{var g,f,h,p;const b=d.code??d.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){d.preventDefault();let N=n.current[s[0]],x=n.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=n.current[s[0]],N=n.current[s[1]]);const q=x.style[i.min]?((g=x.getBoundingClientRect())==null?void 0:g[i.size])-Number(x.style[i.min].replace("px","")):(f=x.getBoundingClientRect())==null?void 0:f[i.size];if(document.activeElement===n.current){const D=q>=20?20:q,J=(h=N.getBoundingClientRect())==null?void 0:h[i.size],K=(p=x.getBoundingClientRect())==null?void 0:p[i.size];x.style.flex=`0 0 ${K-D}px`,N.style.flex=`0 0 ${J+D}px`}}},W=d=>{L(d,z==="touch"),k(!1)};l.useEffect(()=>{const d=()=>{z==="touch"?(document.removeEventListener("touchmove",j),document.removeEventListener("touchend",W)):(document.removeEventListener("mouseup",W),document.removeEventListener("mousemove",j))};return z?z==="touch"?(document.addEventListener("touchmove",j),document.addEventListener("touchend",W)):(document.addEventListener("mousemove",j),document.addEventListener("mouseup",W)):d(),()=>{d()}},[z]),l.useEffect(()=>{V(u&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[u,o]);const X=we(),ve=X==="sap_fiori_3_hcb"||X==="sap_fiori_3_hcw"||X==="sap_horizon_hcb"||X==="sap_horizon_hcw";return e.jsxs("div",{className:A.splitter,tabIndex:0,onClick:M,onKeyDown:xe,onPointerDown:H,onMouseDown:H,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(te),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(te),children:[e.jsx("div",{className:A.lineBefore}),ve?e.jsx(m,{className:A.gripButton,tabIndex:-1,icon:o?ie:re,design:Ee.Transparent}):e.jsx(Be,{className:A.icon,name:o?ie:re}),e.jsx("div",{className:A.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const U=t=>l.useMemo(()=>{if(l.isValidElement(t==null?void 0:t.children))return t==null?void 0:t.children;const c=l.Children.toArray(t==null?void 0:t.children).filter(l.isValidElement);let o=0;const S=[];return c.forEach((v,n)=>{const u=c[n+o];if(c.length-o-1>n&&(u.props.resizable||u.props.resizable===void 0)&&u.props.minSize!==void 0)c.splice(n+o+1,0,e.jsx(I,{height:t==null?void 0:t.height,width:t==null?void 0:t.width,vertical:t==null?void 0:t.vertical},`splitter${n}`)),S.push(n+1+o-1),++o;else if(n>0&&(u==null?void 0:u.props.resizable)===!1){const a=c.findIndex(w=>w===u)-1;c[a].props.minSize===void 0&&c.splice(a,1),S.pop(),--o}}),S.forEach(v=>{var u,a;const n=(a=(u=c[v])==null?void 0:u.props)==null?void 0:a.size;n&&n!=="auto"&&(c[v]=l.cloneElement(c[v],{size:`calc(${n} - var(--_ui5wcr-SplitterSize))`}))}),c},[t]);try{U.displayName="useConcatSplitterElements",U.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{U.displayName="useConcatSplitterElements",U.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const y=l.forwardRef((t,c)=>{const{vertical:o,children:S,title:v,style:n,className:u,options:a,...w}=t,[T,R]=G(c),[_,E]=l.useState(void 0),i=l.useRef({width:void 0,height:void 0}),z=l.useRef(!0),k=l.useRef(!0),s=U({children:S??[],width:n==null?void 0:n.width,height:n==null?void 0:n.height,vertical:o});return Q(Te,y.displayName),l.useEffect(()=>{!z.current&&(a!=null&&a.resetOnChildrenChange)&&E(!0),z.current=!1},[S,a==null?void 0:a.resetOnChildrenChange]),l.useEffect(()=>{k.current||E(!0),k.current=!1},(a==null?void 0:a.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(a!=null&&a.resetOnSizeChange){const V=new ResizeObserver(ke(([j])=>{const L=j.target.getBoundingClientRect();!o&&L.width!==i.current.width?(i.current.width=L.width,E(!0)):o&&L.height!==i.current.height&&(i.current.height=L.height,E(!0))},60));return V.observe(R.current),()=>{V.disconnect()}}},[o,a==null?void 0:a.resetOnSizeChange]),l.useEffect(()=>{_&&E(!1)},[_]),e.jsx(ge.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...n},title:v,...w,className:me(Ve.splitterLayout,u),ref:T,"data-splitter-vertical":o,children:s})})});y.displayName="SplitterLayout";try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({text:t,background:c="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:t})});try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const et={title:"Layouts & Floorplans / SplitterLayout",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},F={parameters:{chromatic:{diffThreshold:.6}},render(t){return e.jsxs(y,{...t,children:[e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 4"})})})]})}},P={render(t){return e.jsxs(y,{...t,children:[e.jsx(r,{size:"10%",children:e.jsx(C,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(C,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(C,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(C,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(C,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(C,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(C,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(C,{text:"Content 8",background:"lightsteelblue"})})]})}},O={parameters:{chromatic:{disableSnapshot:!0}},render(t){const[c,o]=l.useState(t.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(t.vertical)},[t.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(je,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Le,{onSelectionChange:S,children:[e.jsx(ne,{pressed:!c,children:"Horizontal"}),e.jsx(ne,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(y,{style:t.style,vertical:c,children:[e.jsx(r,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(y,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var le,oe,ae;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
            <Text>{\`Content 2
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
}`,...(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ce,ue;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,he;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const tt=["Default","LimitedAreas","Nested"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:F,LimitedAreas:P,Nested:O,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{vt as C,F as D,P as L,O as N,r as S};
