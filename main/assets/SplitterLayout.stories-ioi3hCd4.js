import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{F as B}from"./index-loc45roa.js";import{T as F}from"./index-5Dv5HHo1.js";import"./index-CfIgU9d5.js";import{r as l}from"./index-Dl6G-zuu.js";import{c as he}from"./clsx-B-dksMZM.js";import{u as Y}from"./withWebComponent-WdPEUVG_.js";import{u as Q}from"./useStylesheet-Cs3TLZWO.js";import{u as Z}from"./useIsomorphicLayoutEffect-gsbYElqV.js";import{m as ee,k as fe}from"./Boot-CiW9Yqx0.js";import{r as J}from"./Icons-Bz_R9SHk.js";import{u as ve,ae as te}from"./i18n-defaults-ftfSvdLi.js";import{u as ze}from"./useIsRTL-CMXegYV-.js";import{u as Ce}from"./useCurrentTheme-Aw7cm3mN.js";import{B as h}from"./index-oklidKSr.js";import{B as we}from"./Button-D5VmNntQ.js";import{I as Ee}from"./index-DfweyP2f.js";import{d as Be}from"./debounce-D7W5PopO.js";import{L as je}from"./index-Bf1Az-5Y.js";import{a as ke,S as ne}from"./index-CE1qv14H.js";const ge=l.createContext({vertical:!0,reset:!1}),Le={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},Ne={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},i=l.forwardRef((t,c)=>{const{children:o,style:S,className:v,minSize:n,size:u,resizable:a,...w}=t,[T,D]=Y(c),{vertical:_,reset:E}=l.useContext(ge),r=ee()?{width:"min-content",flex:"1 1 auto"}:{},z=u!=="auto"?{flex:`0 1 ${u}`}:{flex:"1 0 min-content",...r},[j,s]=l.useState(z),[V,k]=l.useState(!1);return Q(Le,i.displayName),l.useEffect(()=>{const L=new ResizeObserver(([R])=>{if(R.target.getBoundingClientRect().width!==0&&!V){const K=ee()?{width:"unset"}:{};s({flex:`0 0 ${R.target.getBoundingClientRect()[_?"height":"width"]}px`,...K}),k(!0)}});return u==="auto"&&D.current?L.observe(D.current):s({flex:`0 1 ${u}`}),()=>{L.disconnect()}},[u,V,_]),Z(()=>{E&&(s(void 0),k(!1))},[E,u]),Z(()=>{j===void 0&&s(z)},[j]),e.jsx("div",{ref:T,className:he(Ne.splitterElement,v),style:{minHeight:_&&n?`${n}px`:void 0,minWidth:!_&&n?`${n}px`:void 0,...j,...S},...w,"data-min-size":n,children:o})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const qe={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},Te={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},Ve="horizontal-grip",ye="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ie=!1,De="SAP-icons-v4",Re="@ui5/webcomponents-icons";J(Ve,{pathData:ye,ltr:Ie,collection:De,packageName:Re});const Ae="horizontal-grip",Se="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",$e=!1,Fe="SAP-icons-v5",Pe="@ui5/webcomponents-icons";J(Ae,{pathData:Se,ltr:$e,collection:Fe,packageName:Pe});fe();const re="horizontal-grip",Oe="vertical-grip",_e="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Ue=!1,Me="SAP-icons-v4",He="@ui5/webcomponents-icons";J(Oe,{pathData:_e,ltr:Ue,collection:Me,packageName:He});const We="vertical-grip",be="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Xe=!1,Ge="SAP-icons-v5",Je="@ui5/webcomponents-icons";J(We,{pathData:be,ltr:Xe,collection:Ge,packageName:Je});fe();const ie="vertical-grip",Ke={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"},$={splitter:"Splitter_splitter_1e52h_1",icon:"Splitter_icon_1e52h_17",lineBefore:"Splitter_lineBefore_1e52h_32",lineAfter:"Splitter_lineAfter_1e52h_33",gripButton:"Splitter_gripButton_1e52h_91"},Ye={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Qe={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((t,c)=>{const{vertical:o}=t,S=ve("@ui5/webcomponents-react"),[v,n]=Y(c),u=ze(n),a=l.useRef(null);Q(Ke,I.displayName);const w=l.useRef(null),T=l.useRef(null),D=l.useRef(null),_=l.useRef(null),E=l.useRef(0),r=o?Ye:Qe,[z,j]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),k=p=>{const b=E.current,g=n.current[s[0]],f=n.current[s[1]],m=z==="touch"?p.touches[0][`client${r.position}`]:p[`client${r.position}`],d=m-a.current,N=n.current.getBoundingClientRect()[r.size],x=d<0,q=()=>{g.style.flex=`0 0 ${w.current+d}px`,f.nextSibling&&w.current+d>0&&(f.style.flex=`0 0 ${T.current-d}px`)};w.current+d>0&&m+(N-b)<=_.current&&(parseInt(g.dataset.minSize,10)<=w.current+d&&x&&q(),T.current-d>=parseInt(f.dataset.minSize,10)&&!x&&q()),!f[s[1]]&&!u&&(f.style.flex="1 0 0px")},L=(p,b)=>{var x,q,A,X,G;const g=n.current[s[0]],f=n.current[s[1]],m=n.current[s[0]].getBoundingClientRect(),d=n.current[s[1]].getBoundingClientRect(),N=b?Math.round(p.changedTouches[0][`client${r.position}`]):p[`client${r.position}`];N-((x=n.current)==null?void 0:x[`offset${r.startUppercase}`])<0&&(g.style.flex="0 0 0px",(q=g.style)!=null&&q[r.min]?f.style.flex=`0 0 ${(d==null?void 0:d[r.size])+((m==null?void 0:m[r.size])-((A=g.style)==null?void 0:A[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(d==null?void 0:d[r.size])+(m==null?void 0:m[r.size])}px`),_.current<N&&(f.style.flex="0 0 0px",(X=f.style)!=null&&X[r.min]?g.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((d==null?void 0:d[r.size])-((G=f.style)==null?void 0:G[r.min].replace("px","")))}px`:g.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(d==null?void 0:d[r.size])}px`)},R=p=>{var b,g,f,m;p.type==="pointerdown"&&p.pointerType!=="touch"||(p.currentTarget.focus(),p.preventDefault(),j(p.pointerType??"mouse"),E.current=p.nativeEvent[r.offset],D.current=(b=n.current[s[0]].getBoundingClientRect())==null?void 0:b[r.end],n.current[s[1]][s[1]]?_.current=(g=n.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:g[r.start]:_.current=n.current.parentElement.getBoundingClientRect()[r.end],w.current=(f=n.current[s[0]].getBoundingClientRect())==null?void 0:f[r.size],T.current=(m=n.current[s[1]].getBoundingClientRect())==null?void 0:m[r.size],a.current=p[`client${r.position}`])},K=p=>{var g,f,m,d;const b=p.code??p.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){p.preventDefault();let N=n.current[s[0]],x=n.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=n.current[s[0]],N=n.current[s[1]]);const q=x.style[r.min]?((g=x.getBoundingClientRect())==null?void 0:g[r.size])-Number(x.style[r.min].replace("px","")):(f=x.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===n.current){const A=q>=20?20:q,X=(m=N.getBoundingClientRect())==null?void 0:m[r.size],G=(d=x.getBoundingClientRect())==null?void 0:d[r.size];x.style.flex=`0 0 ${G-A}px`,N.style.flex=`0 0 ${X+A}px`}}},H=p=>{L(p,z==="touch"),j(!1)};l.useEffect(()=>{const p=()=>{z==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",H)):(document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",k))};return z?z==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",H)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",H)):p(),()=>{p()}},[z]),l.useEffect(()=>{V(u&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[u,o]);const W=Ce(),xe=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:$.splitter,tabIndex:0,onKeyDown:K,onPointerDown:R,onMouseDown:R,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(te),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(te),children:[e.jsx("div",{className:$.lineBefore}),xe?e.jsx(h,{className:$.gripButton,tabIndex:-1,icon:o?re:ie,design:we.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(Ee,{className:$.icon,name:o?re:ie,"data-component-name":"SplitterLayoutSplitterGrip"}),e.jsx("div",{className:$.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=t=>l.useMemo(()=>{if(l.isValidElement(t==null?void 0:t.children))return t==null?void 0:t.children;const c=l.Children.toArray(t==null?void 0:t.children).filter(l.isValidElement);let o=0;const S=[];return c.forEach((v,n)=>{const u=c[n+o];if(c.length-o-1>n&&(u.props.resizable||u.props.resizable===void 0)&&u.props.minSize!==void 0)c.splice(n+o+1,0,e.jsx(I,{height:t==null?void 0:t.height,width:t==null?void 0:t.width,vertical:t==null?void 0:t.vertical},`splitter${n}`)),S.push(n+1+o-1),++o;else if(n>0&&(u==null?void 0:u.props.resizable)===!1){const a=c.findIndex(w=>w===u)-1;c[a].props.minSize===void 0&&c.splice(a,1),S.pop(),--o}}),S.forEach(v=>{var u,a;const n=(a=(u=c[v])==null?void 0:u.props)==null?void 0:a.size;n&&n!=="auto"&&(c[v]=l.cloneElement(c[v],{size:`calc(${n} - var(--_ui5wcr-SplitterSize))`}))}),c},[t]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const y=l.forwardRef((t,c)=>{const{vertical:o,children:S,title:v,style:n,className:u,options:a,...w}=t,[T,D]=Y(c),[_,E]=l.useState(void 0),r=l.useRef({width:void 0,height:void 0}),z=l.useRef(!0),j=l.useRef(!0),s=M({children:S??[],width:n==null?void 0:n.width,height:n==null?void 0:n.height,vertical:o});return Q(qe,y.displayName),l.useEffect(()=>{!z.current&&(a!=null&&a.resetOnChildrenChange)&&E(!0),z.current=!1},[S,a==null?void 0:a.resetOnChildrenChange]),l.useEffect(()=>{j.current||E(!0),j.current=!1},(a==null?void 0:a.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(a!=null&&a.resetOnSizeChange){const V=new ResizeObserver(Be(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==r.current.width?(r.current.width=L.width,E(!0)):o&&L.height!==r.current.height&&(r.current.height=L.height,E(!0))},60));return V.observe(D.current),()=>{V.disconnect()}}},[o,a==null?void 0:a.resetOnSizeChange]),l.useEffect(()=>{_&&E(!1)},[_]),e.jsx(ge.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...n},title:v,...w,className:he(Te.splitterLayout,u),ref:T,"data-splitter-vertical":o,children:s})})});y.displayName="SplitterLayout";try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({text:t,background:c="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:t})});try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const Ze={title:"Layouts & Floorplans / SplitterLayout",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},P={parameters:{chromatic:{diffThreshold:.6}},render(t){return e.jsxs(y,{...t,children:[e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 4"})})})]})}},O={render(t){return e.jsxs(y,{...t,children:[e.jsx(i,{size:"10%",children:e.jsx(C,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(C,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(C,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(t){const[c,o]=l.useState(t.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(t.vertical)},[t.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(je,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(ke,{onSelectionChange:S,children:[e.jsx(ne,{pressed:!c,children:"Horizontal"}),e.jsx(ne,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(y,{style:t.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 1"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(h,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(h,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(h,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 5"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(h,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 7"}),e.jsxs(y,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(h,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(h,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(h,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(h,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 12"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(h,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(h,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(h,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(h,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(h,{children:"Content 17"})})]})]})})]})]})}};var le,oe,ae;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ae=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ce,ue;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const et=["Default","LimitedAreas","Nested"],xt=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:O,Nested:U,__namedExportsOrder:et,default:Ze},Symbol.toStringTag,{value:"Module"}));export{xt as C,P as D,O as L,U as N,i as S};
