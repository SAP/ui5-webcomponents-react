import{u as Q,j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{F as E}from"./index-Did8UXWE.js";import{T as F}from"./index-DjQHiRhY.js";import"./index-NufmgX6c.js";import{r as l}from"./index-BQ1WsyJB.js";import{c as he}from"./clsx-B-dksMZM.js";import{d as K}from"./withWebComponent-DykTwaBJ.js";import{u as Y}from"./useStylesheet-BB85D3ff.js";import{h as Z}from"./Keys-F_3Gvx0K.js";import{B as ye}from"./Button-gEiq340s.js";import{f as G}from"./Icon-C1aVUqaK.js";import{u as Se,B as ee}from"./i18n-defaults-Cq32WUv5.js";import{u as _e}from"./useIsRTL-CjN8gnsZ.js";import{u as be}from"./useCurrentTheme-BwSsh5fd.js";import{B as m}from"./index-ZyZCof-H.js";import{I as xe}from"./index-C8cxFcc-.js";import{d as ve}from"./debounce-D7W5PopO.js";import{L as ze}from"./index-Ba40aKpr.js";import{a as we,S as te}from"./index-aDvZ2jbV.js";const me=l.createContext({vertical:!0,reset:!1}),Ce={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},Ee={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},r=l.forwardRef((n,u)=>{const{children:o,style:S,className:v,minSize:t=0,size:a="auto",resizable:c,...z}=n,[B,D]=K(u),{vertical:_,reset:C}=l.useContext(me),i=Z()?{width:"min-content",flex:"1 1 auto"}:{},w=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...i},[j,s]=l.useState(w),[V,k]=l.useState(!1);return Y(Ce,r.displayName),l.useEffect(()=>{const L=new ResizeObserver(([R])=>{if(R.target.getBoundingClientRect().width!==0&&!V){const J=Z()?{width:"unset"}:{};s({flex:`0 0 ${R.target.getBoundingClientRect()[_?"height":"width"]}px`,...J}),k(!0)}});return a==="auto"&&D.current?L.observe(D.current):s({flex:`0 1 ${a}`}),()=>{L.disconnect()}},[a,V,_]),Q(()=>{C&&(s(void 0),k(!1))},[C,a]),Q(()=>{j===void 0&&s(w)},[j]),e.jsx("div",{ref:B,className:he(Ee.splitterElement,v),style:{minHeight:_&&t?`${t}px`:void 0,minWidth:!_&&t?`${t}px`:void 0,...j,...S},...z,"data-min-size":t,children:o})});r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Be={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},je={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},ke="horizontal-grip",Le="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ne=!1,qe="SAP-icons-v4",Te="@ui5/webcomponents-icons";G(ke,{pathData:Le,ltr:Ne,collection:qe,packageName:Te});const Ve="horizontal-grip",Ie="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",De=!1,Re="SAP-icons-v5",Ae="@ui5/webcomponents-icons";G(Ve,{pathData:Ie,ltr:De,collection:Re,packageName:Ae});const ne="horizontal-grip",$e="vertical-grip",Fe="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Pe=!1,Oe="SAP-icons-v4",Ue="@ui5/webcomponents-icons";G($e,{pathData:Fe,ltr:Pe,collection:Oe,packageName:Ue});const Me="vertical-grip",He="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",We=!1,Xe="SAP-icons-v5",Ge="@ui5/webcomponents-icons";G(Me,{pathData:He,ltr:We,collection:Xe,packageName:Ge});const ie="vertical-grip",Je={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"},$={splitter:"Splitter_splitter_1e52h_1",icon:"Splitter_icon_1e52h_17",lineBefore:"Splitter_lineBefore_1e52h_32",lineAfter:"Splitter_lineAfter_1e52h_33",gripButton:"Splitter_gripButton_1e52h_91"},Ke={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Ye={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((n,u)=>{const{vertical:o}=n,S=Se("@ui5/webcomponents-react"),[v,t]=K(u),a=_e(t),c=l.useRef(null);Y(Je,I.displayName);const z=l.useRef(null),B=l.useRef(null),D=l.useRef(null),_=l.useRef(null),C=l.useRef(0),i=o?Ke:Ye,[w,j]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),k=p=>{const b=C.current,g=t.current[s[0]],f=t.current[s[1]],h=w==="touch"?p.touches[0][`client${i.position}`]:p[`client${i.position}`],d=h-c.current,N=t.current.getBoundingClientRect()[i.size],x=d<0,q=()=>{g.style.flex=`0 0 ${z.current+d}px`,f.nextSibling&&z.current+d>0&&(f.style.flex=`0 0 ${B.current-d}px`)};z.current+d>0&&h+(N-b)<=_.current&&(parseInt(g.dataset.minSize,10)<=z.current+d&&x&&q(),B.current-d>=parseInt(f.dataset.minSize,10)&&!x&&q()),!f[s[1]]&&!a&&(f.style.flex="1 0 0px")},L=(p,b)=>{var x,q,A,X;if(!t.current)return;const g=t.current[s[0]],f=t.current[s[1]],h=t.current[s[0]].getBoundingClientRect(),d=t.current[s[1]].getBoundingClientRect(),N=b?Math.round(p.changedTouches[0][`client${i.position}`]):p[`client${i.position}`];!t.current.contains(p.target)&&N-t.current[`offset${i.startUppercase}`]+1<0&&(g.style.flex="0 0 0px",(x=g.style)!=null&&x[i.min]?f.style.flex=`0 0 ${(d==null?void 0:d[i.size])+((h==null?void 0:h[i.size])-((q=g.style)==null?void 0:q[i.min].replace("px","")))}px`:f.style.flex=`0 0 ${(d==null?void 0:d[i.size])+(h==null?void 0:h[i.size])}px`),_.current<N&&(f.style.flex="0 0 0px",(A=f.style)!=null&&A[i.min]?g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+((d==null?void 0:d[i.size])-((X=f.style)==null?void 0:X[i.min].replace("px","")))}px`:g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+(d==null?void 0:d[i.size])}px`)},R=p=>{var b,g,f,h;p.type==="pointerdown"&&p.pointerType!=="touch"||(p.currentTarget.focus(),p.preventDefault(),j(p.pointerType??"mouse"),C.current=p.nativeEvent[i.offset],D.current=(b=t.current[s[0]].getBoundingClientRect())==null?void 0:b[i.end],t.current[s[1]][s[1]]?_.current=(g=t.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:g[i.start]:_.current=t.current.parentElement.getBoundingClientRect()[i.end],z.current=(f=t.current[s[0]].getBoundingClientRect())==null?void 0:f[i.size],B.current=(h=t.current[s[1]].getBoundingClientRect())==null?void 0:h[i.size],c.current=p[`client${i.position}`])},J=p=>{var g,f,h,d;const b=p.code??p.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){p.preventDefault();let N=t.current[s[0]],x=t.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=t.current[s[0]],N=t.current[s[1]]);const q=x.style[i.min]?((g=x.getBoundingClientRect())==null?void 0:g[i.size])-Number(x.style[i.min].replace("px","")):(f=x.getBoundingClientRect())==null?void 0:f[i.size];if(document.activeElement===t.current){const A=q>=20?20:q,X=(h=N.getBoundingClientRect())==null?void 0:h[i.size],ge=(d=x.getBoundingClientRect())==null?void 0:d[i.size];x.style.flex=`0 0 ${ge-A}px`,N.style.flex=`0 0 ${X+A}px`}}},H=p=>{L(p,w==="touch"),j(!1)};l.useEffect(()=>{const p=()=>{w==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",H)):(document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",k))};return w?w==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",H)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",H)):p(),()=>{p()}},[w]),l.useEffect(()=>{V(a&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,o]);const W=be(),fe=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:$.splitter,tabIndex:0,onKeyDown:J,onPointerDown:R,onMouseDown:R,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(ee),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(ee),children:[e.jsx("div",{className:$.lineBefore}),fe?e.jsx(m,{className:$.gripButton,tabIndex:-1,icon:o?ne:ie,design:ye.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:$.icon,name:o?ne:ie,"data-component-name":"SplitterLayoutSplitterGrip"}),e.jsx("div",{className:$.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const u=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const S=[];return u.forEach((v,t)=>{const a=u[t+o],c=a.props.hasOwnProperty("minSize")?a.props.minSize:0;if(u.length-o-1>t&&(a.props.resizable||a.props.resizable===void 0)&&c!==void 0)u.splice(t+o+1,0,e.jsx(I,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+o-1),++o;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const z=u.findIndex(B=>B===a)-1;u[z].props.minSize===void 0&&u.splice(z,1),S.pop(),--o}}),S.forEach(v=>{var a,c;const t=(c=(a=u[v])==null?void 0:a.props)==null?void 0:c.size;t&&t!=="auto"&&(u[v]=l.cloneElement(u[v],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),u},[n]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const y=l.forwardRef((n,u)=>{const{vertical:o,children:S,title:v,style:t,className:a,options:c,...z}=n,[B,D]=K(u),[_,C]=l.useState(void 0),i=l.useRef({width:void 0,height:void 0}),w=l.useRef(!0),j=l.useRef(!0),s=M({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return Y(Be,y.displayName),l.useEffect(()=>{!w.current&&(c!=null&&c.resetOnChildrenChange)&&C(!0),w.current=!1},[S,c==null?void 0:c.resetOnChildrenChange]),l.useEffect(()=>{j.current||C(!0),j.current=!1},(c==null?void 0:c.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(c!=null&&c.resetOnSizeChange){const V=new ResizeObserver(ve(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==i.current.width?(i.current.width=L.width,C(!0)):o&&L.height!==i.current.height&&(i.current.height=L.height,C(!0))},60));return V.observe(D.current),()=>{V.disconnect()}}},[o,c==null?void 0:c.resetOnSizeChange]),l.useEffect(()=>{_&&C(!1)},[_]),e.jsx(me.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:v,...z,className:he(je.splitterLayout,a),ref:B,"data-splitter-vertical":o,children:s})})});y.displayName="SplitterLayout";try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const T=({text:n,background:u="transparent"})=>e.jsx(E,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:n})}),Qe={title:"Layouts & Floorplans / SplitterLayout",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},P={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(y,{...n,children:[e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 4"})})})]})}},O={render(n){return e.jsxs(y,{...n,children:[e.jsx(r,{size:"10%",children:e.jsx(T,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(T,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(T,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[u,o]=l.useState(n.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"Column",children:[e.jsx(ze,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(we,{onSelectionChange:S,children:[e.jsx(te,{pressed:!u,children:"Horizontal"}),e.jsx(te,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(y,{style:n.style,vertical:u,children:[e.jsx(r,{size:"40%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(y,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var re,le,oe;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(le=P.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,ae,ce;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,pe,de;U.parameters={...U.parameters,docs:{...(ue=U.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Ze=["Default","LimitedAreas","Nested"],_t=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:O,Nested:U,__namedExportsOrder:Ze,default:Qe},Symbol.toStringTag,{value:"Module"}));export{_t as C,P as D,O as L,U as N,r as S};
