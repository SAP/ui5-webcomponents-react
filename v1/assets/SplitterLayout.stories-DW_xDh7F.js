import{u as Q,j as e,b as Z}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{F as B}from"./index-DBtBcav3.js";import{T as F}from"./index-Cyo93O8-.js";import"./index-y53uacrZ.js";import{r as l}from"./index-BP8_t0zE.js";import{c as me}from"./clsx-B-dksMZM.js";import{u as K}from"./withWebComponent-D63zXRZq.js";import{u as Y}from"./useStylesheet-DfMTMFhn.js";import{i as he}from"./Boot-C8BaHzi_.js";import{r as G}from"./Icons-YiE9tW4T.js";import{u as ve,ai as ee}from"./i18n-defaults-B3GLB-7B.js";import{u as ze}from"./useIsRTL-85inLxow.js";import{u as Ce}from"./useCurrentTheme-DFCsOvz0.js";import{B as h}from"./index-TQA7guYE.js";import{B as we}from"./Button-Bt2u8cP6.js";import{I as Ee}from"./index-BhbY59gM.js";import{d as Be}from"./debounce-D7W5PopO.js";import{L as je}from"./index-Cj1pZIKL.js";import{a as ke,S as te}from"./index-CuiXHlsj.js";const ye=l.createContext({vertical:!0,reset:!1}),Le={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},Ne={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},i=l.forwardRef((n,c)=>{const{children:o,style:S,className:v,minSize:t,size:p,resizable:a,...w}=n,[T,D]=K(c),{vertical:_,reset:E}=l.useContext(ye),r=Z()?{width:"min-content",flex:"1 1 auto"}:{},z=p!=="auto"?{flex:`0 1 ${p}`}:{flex:"1 0 min-content",...r},[j,s]=l.useState(z),[V,k]=l.useState(!1);return Y(Le,i.displayName),l.useEffect(()=>{const L=new ResizeObserver(([A])=>{if(A.target.getBoundingClientRect().width!==0&&!V){const J=Z()?{width:"unset"}:{};s({flex:`0 0 ${A.target.getBoundingClientRect()[_?"height":"width"]}px`,...J}),k(!0)}});return p==="auto"&&D.current?L.observe(D.current):s({flex:`0 1 ${p}`}),()=>{L.disconnect()}},[p,V,_]),Q(()=>{E&&(s(void 0),k(!1))},[E,p]),Q(()=>{j===void 0&&s(z)},[j]),e.jsx("div",{ref:T,className:me(Ne.splitterElement,v),style:{minHeight:_&&t?`${t}px`:void 0,minWidth:!_&&t?`${t}px`:void 0,...j,...S},...w,"data-min-size":t,children:o})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const qe={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},Te={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},Ve="horizontal-grip",fe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ie=!1,De="SAP-icons-v4",Re="@ui5/webcomponents-icons";G(Ve,{pathData:fe,ltr:Ie,collection:De,packageName:Re});const Ae="horizontal-grip",ge="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",$e=!1,Fe="SAP-icons-v5",Pe="@ui5/webcomponents-icons";G(Ae,{pathData:ge,ltr:$e,collection:Fe,packageName:Pe});he();const ne="horizontal-grip",Oe="vertical-grip",Se="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Ue=!1,Me="SAP-icons-v4",He="@ui5/webcomponents-icons";G(Oe,{pathData:Se,ltr:Ue,collection:Me,packageName:He});const We="vertical-grip",_e="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Xe=!1,Ge="SAP-icons-v5",Je="@ui5/webcomponents-icons";G(We,{pathData:_e,ltr:Xe,collection:Ge,packageName:Je});he();const re="vertical-grip",Ke={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_ce1yt_30,.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_icon_ce1yt_38{padding:.5rem 0}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_gripContainer_ce1yt_44{height:2rem;width:1.5rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=horizontal] .Splitter_gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineAfter_ce1yt_30,.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_icon_ce1yt_38{padding:0 .5rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_gripContainer_ce1yt_44{height:1.5rem;width:2rem}.Splitter_splitter_ce1yt_1[data-splitter-vertical=vertical] .Splitter_gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}.Splitter_splitter_ce1yt_1:hover .Splitter_lineAfter_ce1yt_30,.Splitter_splitter_ce1yt_1:hover .Splitter_lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}.Splitter_gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}.Splitter_gripButton_ce1yt_48{cursor:inherit}.Splitter_gripButton_ce1yt_48:active{z-index:2}.Splitter_icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_ce1yt_30,.Splitter_lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}"},R={splitter:"Splitter_splitter_ce1yt_1",lineBefore:"Splitter_lineBefore_ce1yt_29",lineAfter:"Splitter_lineAfter_ce1yt_30",icon:"Splitter_icon_ce1yt_38",gripContainer:"Splitter_gripContainer_ce1yt_44",gripButton:"Splitter_gripButton_ce1yt_48"},Ye={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Qe={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((n,c)=>{const{vertical:o}=n,S=ve("@ui5/webcomponents-react"),[v,t]=K(c),p=ze(t),a=l.useRef(null);Y(Ke,I.displayName);const w=l.useRef(null),T=l.useRef(null),D=l.useRef(null),_=l.useRef(null),E=l.useRef(0),r=o?Ye:Qe,[z,j]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),k=u=>{const b=E.current,f=t.current[s[0]],y=t.current[s[1]],m=z==="touch"?u.touches[0][`client${r.position}`]:u[`client${r.position}`],d=m-a.current,N=t.current.getBoundingClientRect()[r.size],x=d<0,q=()=>{f.style.flex=`0 0 ${w.current+d}px`,y.nextSibling&&w.current+d>0&&(y.style.flex=`0 0 ${T.current-d}px`)};w.current+d>0&&m+(N-b)<=_.current&&(parseInt(f.dataset.minSize,10)<=w.current+d&&x&&q(),T.current-d>=parseInt(y.dataset.minSize,10)&&!x&&q()),!y[s[1]]&&!p&&(y.style.flex="1 0 0px")},L=(u,b)=>{var x,q,$,X;if(!t.current)return;const f=t.current[s[0]],y=t.current[s[1]],m=t.current[s[0]].getBoundingClientRect(),d=t.current[s[1]].getBoundingClientRect(),N=b?Math.round(u.changedTouches[0][`client${r.position}`]):u[`client${r.position}`];!t.current.contains(u.target)&&N-t.current[`offset${r.startUppercase}`]+1<0&&(f.style.flex="0 0 0px",(x=f.style)!=null&&x[r.min]?y.style.flex=`0 0 ${(d==null?void 0:d[r.size])+((m==null?void 0:m[r.size])-((q=f.style)==null?void 0:q[r.min].replace("px","")))}px`:y.style.flex=`0 0 ${(d==null?void 0:d[r.size])+(m==null?void 0:m[r.size])}px`),_.current<N&&(y.style.flex="0 0 0px",($=y.style)!=null&&$[r.min]?f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((d==null?void 0:d[r.size])-((X=y.style)==null?void 0:X[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(d==null?void 0:d[r.size])}px`)},A=u=>{var b,f,y,m;u.type==="pointerdown"&&u.pointerType!=="touch"||(u.currentTarget.focus(),u.preventDefault(),j(u.pointerType??"mouse"),E.current=u.nativeEvent[r.offset],D.current=(b=t.current[s[0]].getBoundingClientRect())==null?void 0:b[r.end],t.current[s[1]][s[1]]?_.current=(f=t.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:f[r.start]:_.current=t.current.parentElement.getBoundingClientRect()[r.end],w.current=(y=t.current[s[0]].getBoundingClientRect())==null?void 0:y[r.size],T.current=(m=t.current[s[1]].getBoundingClientRect())==null?void 0:m[r.size],a.current=u[`client${r.position}`])},J=u=>{var f,y,m,d;const b=u.code??u.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){u.preventDefault();let N=t.current[s[0]],x=t.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=t.current[s[0]],N=t.current[s[1]]);const q=x.style[r.min]?((f=x.getBoundingClientRect())==null?void 0:f[r.size])-Number(x.style[r.min].replace("px","")):(y=x.getBoundingClientRect())==null?void 0:y[r.size];if(document.activeElement===t.current){const $=q>=20?20:q,X=(m=N.getBoundingClientRect())==null?void 0:m[r.size],xe=(d=x.getBoundingClientRect())==null?void 0:d[r.size];x.style.flex=`0 0 ${xe-$}px`,N.style.flex=`0 0 ${X+$}px`}}},H=u=>{L(u,z==="touch"),j(!1)};l.useEffect(()=>{const u=()=>{z==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",H)):(document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",k))};return z?z==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",H)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",H)):u(),()=>{u()}},[z]),l.useEffect(()=>{V(p&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[p,o]);const W=Ce(),be=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:R.splitter,tabIndex:0,onKeyDown:J,onPointerDown:A,onMouseDown:A,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(ee),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(ee),children:[e.jsx("div",{className:R.lineBefore}),e.jsx("div",{className:R.gripContainer,children:be?e.jsx(h,{className:R.gripButton,tabIndex:-1,icon:o?ne:re,design:we.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(Ee,{className:R.icon,name:o?ne:re,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:R.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const S=[];return c.forEach((v,t)=>{const p=c[t+o];if(c.length-o-1>t&&(p.props.resizable||p.props.resizable===void 0)&&p.props.minSize!==void 0)c.splice(t+o+1,0,e.jsx(I,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+o-1),++o;else if(t>0&&(p==null?void 0:p.props.resizable)===!1){const a=c.findIndex(w=>w===p)-1;c[a].props.minSize===void 0&&c.splice(a,1),S.pop(),--o}}),S.forEach(v=>{var p,a;const t=(a=(p=c[v])==null?void 0:p.props)==null?void 0:a.size;t&&t!=="auto"&&(c[v]=l.cloneElement(c[v],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),c},[n]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const g=l.forwardRef((n,c)=>{const{vertical:o,children:S,title:v,style:t,className:p,options:a,...w}=n,[T,D]=K(c),[_,E]=l.useState(void 0),r=l.useRef({width:void 0,height:void 0}),z=l.useRef(!0),j=l.useRef(!0),s=M({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return Y(qe,g.displayName),l.useEffect(()=>{!z.current&&(a!=null&&a.resetOnChildrenChange)&&E(!0),z.current=!1},[S,a==null?void 0:a.resetOnChildrenChange]),l.useEffect(()=>{j.current||E(!0),j.current=!1},(a==null?void 0:a.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(a!=null&&a.resetOnSizeChange){const V=new ResizeObserver(Be(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==r.current.width?(r.current.width=L.width,E(!0)):o&&L.height!==r.current.height&&(r.current.height=L.height,E(!0))},60));return V.observe(D.current),()=>{V.disconnect()}}},[o,a==null?void 0:a.resetOnSizeChange]),l.useEffect(()=>{_&&E(!1)},[_]),e.jsx(ye.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:v,...w,className:me(Te.splitterLayout,p),ref:T,"data-splitter-vertical":o,children:s})})});g.displayName="SplitterLayout";try{g.displayName="SplitterLayout",g.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="SplitterLayout",g.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({text:n,background:c="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:n})});try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="SplitterElementContent",C.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const Ze={title:"Layouts & Floorplans / SplitterLayout",component:g,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},P={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(g,{...n,children:[e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 4"})})})]})}},O={render(n){return e.jsxs(g,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(C,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(C,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(C,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(C,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,o]=l.useState(n.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(je,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(ke,{onSelectionChange:S,children:[e.jsx(te,{pressed:!c,children:"Horizontal"}),e.jsx(te,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(g,{style:n.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 1"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(h,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(h,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(h,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 5"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(h,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 7"}),e.jsxs(g,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(h,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(h,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(h,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(h,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 12"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(h,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(h,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(h,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(h,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(h,{children:"Content 17"})})]})]})})]})]})}};var ie,le,oe;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(le=P.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,se,ce;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var pe,ue,de;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const et=["Default","LimitedAreas","Nested"],bt=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:O,Nested:U,__namedExportsOrder:et,default:Ze},Symbol.toStringTag,{value:"Module"}));export{bt as C,P as D,O as L,U as N,i as S};
