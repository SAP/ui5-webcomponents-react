import{u as Q,j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{F as B}from"./index-CBgVz2ct.js";import{T as F}from"./index-DymV_ww8.js";import"./index-BPV5VOMo.js";import{r as l}from"./index-CP2MHerv.js";import{c as he}from"./clsx-B-dksMZM.js";import{u as K}from"./withWebComponent-BqYi3caL.js";import{u as Y}from"./useStylesheet-BYE0j0VN.js";import{h as Z}from"./Device-RcFucVeJ.js";import{B as ye}from"./Button-DOCBygoe.js";import"./Boot-CUKJMqeB.js";import{f as G}from"./Icons-DKhvPm64.js";import{u as Se,a9 as ee}from"./i18n-defaults-DO_muapi.js";import{u as _e}from"./useIsRTL-CK_J1tIg.js";import{u as be}from"./useCurrentTheme-Do_mYedZ.js";import{B as m}from"./index-CfeQC8c4.js";import{I as xe}from"./index-DjWubaCh.js";import{d as ve}from"./debounce-D7W5PopO.js";import{L as ze}from"./index-CA0BVAa0.js";import{a as Ce,S as te}from"./index-DogT6LIE.js";const me=l.createContext({vertical:!0,reset:!1}),we={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},Ee={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},i=l.forwardRef((n,u)=>{const{children:o,style:S,className:v,minSize:t=0,size:s="auto",resizable:c,...z}=n,[j,D]=K(u),{vertical:_,reset:E}=l.useContext(me),r=Z()?{width:"min-content",flex:"1 1 auto"}:{},C=s!=="auto"?{flex:`0 1 ${s}`}:{flex:"1 0 min-content",...r},[k,a]=l.useState(C),[V,L]=l.useState(!1);return Y(we,i.displayName),l.useEffect(()=>{const N=new ResizeObserver(([R])=>{if(R.target.getBoundingClientRect().width!==0&&!V){const J=Z()?{width:"unset"}:{};a({flex:`0 0 ${R.target.getBoundingClientRect()[_?"height":"width"]}px`,...J}),L(!0)}});return s==="auto"&&D.current?N.observe(D.current):a({flex:`0 1 ${s}`}),()=>{N.disconnect()}},[s,V,_]),Q(()=>{E&&(a(void 0),L(!1))},[E,s]),Q(()=>{k===void 0&&a(C)},[k]),e.jsx("div",{ref:j,className:he(Ee.splitterElement,v),style:{minHeight:_&&t?`${t}px`:void 0,minWidth:!_&&t?`${t}px`:void 0,...k,...S},...z,"data-min-size":t,children:o})});i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Be={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},je={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},ke="horizontal-grip",Le="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ne=!1,qe="SAP-icons-v4",Te="@ui5/webcomponents-icons";G(ke,{pathData:Le,ltr:Ne,collection:qe,packageName:Te});const Ve="horizontal-grip",Ie="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",De=!1,Re="SAP-icons-v5",Ae="@ui5/webcomponents-icons";G(Ve,{pathData:Ie,ltr:De,collection:Re,packageName:Ae});const ne="horizontal-grip",$e="vertical-grip",Fe="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Pe=!1,Oe="SAP-icons-v4",Ue="@ui5/webcomponents-icons";G($e,{pathData:Fe,ltr:Pe,collection:Oe,packageName:Ue});const Me="vertical-grip",He="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",We=!1,Xe="SAP-icons-v5",Ge="@ui5/webcomponents-icons";G(Me,{pathData:He,ltr:We,collection:Xe,packageName:Ge});const re="vertical-grip",Je={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"},$={splitter:"Splitter_splitter_1e52h_1",icon:"Splitter_icon_1e52h_17",lineBefore:"Splitter_lineBefore_1e52h_32",lineAfter:"Splitter_lineAfter_1e52h_33",gripButton:"Splitter_gripButton_1e52h_91"},Ke={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Ye={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((n,u)=>{const{vertical:o}=n,S=Se("@ui5/webcomponents-react"),[v,t]=K(u),s=_e(t),c=l.useRef(null);Y(Je,I.displayName);const z=l.useRef(null),j=l.useRef(null),D=l.useRef(null),_=l.useRef(null),E=l.useRef(0),r=o?Ke:Ye,[C,k]=l.useState(!1),[a,V]=l.useState(["previousSibling","nextSibling"]),L=p=>{const b=E.current,g=t.current[a[0]],f=t.current[a[1]],h=C==="touch"?p.touches[0][`client${r.position}`]:p[`client${r.position}`],d=h-c.current,q=t.current.getBoundingClientRect()[r.size],x=d<0,T=()=>{g.style.flex=`0 0 ${z.current+d}px`,f.nextSibling&&z.current+d>0&&(f.style.flex=`0 0 ${j.current-d}px`)};z.current+d>0&&h+(q-b)<=_.current&&(parseInt(g.dataset.minSize,10)<=z.current+d&&x&&T(),j.current-d>=parseInt(f.dataset.minSize,10)&&!x&&T()),!f[a[1]]&&!s&&(f.style.flex="1 0 0px")},N=(p,b)=>{var x,T,A,X;if(!t.current)return;const g=t.current[a[0]],f=t.current[a[1]],h=t.current[a[0]].getBoundingClientRect(),d=t.current[a[1]].getBoundingClientRect(),q=b?Math.round(p.changedTouches[0][`client${r.position}`]):p[`client${r.position}`];!t.current.contains(p.target)&&q-t.current[`offset${r.startUppercase}`]+1<0&&(g.style.flex="0 0 0px",(x=g.style)!=null&&x[r.min]?f.style.flex=`0 0 ${(d==null?void 0:d[r.size])+((h==null?void 0:h[r.size])-((T=g.style)==null?void 0:T[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(d==null?void 0:d[r.size])+(h==null?void 0:h[r.size])}px`),_.current<q&&(f.style.flex="0 0 0px",(A=f.style)!=null&&A[r.min]?g.style.flex=`0 0 ${(h==null?void 0:h[r.size])+((d==null?void 0:d[r.size])-((X=f.style)==null?void 0:X[r.min].replace("px","")))}px`:g.style.flex=`0 0 ${(h==null?void 0:h[r.size])+(d==null?void 0:d[r.size])}px`)},R=p=>{var b,g,f,h;p.type==="pointerdown"&&p.pointerType!=="touch"||(p.currentTarget.focus(),p.preventDefault(),k(p.pointerType??"mouse"),E.current=p.nativeEvent[r.offset],D.current=(b=t.current[a[0]].getBoundingClientRect())==null?void 0:b[r.end],t.current[a[1]][a[1]]?_.current=(g=t.current[a[1]][a[1]].getBoundingClientRect())==null?void 0:g[r.start]:_.current=t.current.parentElement.getBoundingClientRect()[r.end],z.current=(f=t.current[a[0]].getBoundingClientRect())==null?void 0:f[r.size],j.current=(h=t.current[a[1]].getBoundingClientRect())==null?void 0:h[r.size],c.current=p[`client${r.position}`])},J=p=>{var g,f,h,d;const b=p.code??p.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){p.preventDefault();let q=t.current[a[0]],x=t.current[a[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=t.current[a[0]],q=t.current[a[1]]);const T=x.style[r.min]?((g=x.getBoundingClientRect())==null?void 0:g[r.size])-Number(x.style[r.min].replace("px","")):(f=x.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===t.current){const A=T>=20?20:T,X=(h=q.getBoundingClientRect())==null?void 0:h[r.size],ge=(d=x.getBoundingClientRect())==null?void 0:d[r.size];x.style.flex=`0 0 ${ge-A}px`,q.style.flex=`0 0 ${X+A}px`}}},H=p=>{N(p,C==="touch"),k(!1)};l.useEffect(()=>{const p=()=>{C==="touch"?(document.removeEventListener("touchmove",L),document.removeEventListener("touchend",H)):(document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",L))};return C?C==="touch"?(document.addEventListener("touchmove",L),document.addEventListener("touchend",H)):(document.addEventListener("mousemove",L),document.addEventListener("mouseup",H)):p(),()=>{p()}},[C]),l.useEffect(()=>{V(s&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[s,o]);const W=be(),fe=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:$.splitter,tabIndex:0,onKeyDown:J,onPointerDown:R,onMouseDown:R,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(ee),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(ee),children:[e.jsx("div",{className:$.lineBefore}),fe?e.jsx(m,{className:$.gripButton,tabIndex:-1,icon:o?ne:re,design:ye.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:$.icon,name:o?ne:re,"data-component-name":"SplitterLayoutSplitterGrip"}),e.jsx("div",{className:$.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const u=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const S=[];return u.forEach((v,t)=>{const s=u[t+o],c=s.props.hasOwnProperty("minSize")?s.props.minSize:0;if(u.length-o-1>t&&(s.props.resizable||s.props.resizable===void 0)&&c!==void 0)u.splice(t+o+1,0,e.jsx(I,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+o-1),++o;else if(t>0&&(s==null?void 0:s.props.resizable)===!1){const z=u.findIndex(j=>j===s)-1;u[z].props.minSize===void 0&&u.splice(z,1),S.pop(),--o}}),S.forEach(v=>{var s,c;const t=(c=(s=u[v])==null?void 0:s.props)==null?void 0:c.size;t&&t!=="auto"&&(u[v]=l.cloneElement(u[v],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),u},[n]);try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{M.displayName="useConcatSplitterElements",M.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const y=l.forwardRef((n,u)=>{const{vertical:o,children:S,title:v,style:t,className:s,options:c,...z}=n,[j,D]=K(u),[_,E]=l.useState(void 0),r=l.useRef({width:void 0,height:void 0}),C=l.useRef(!0),k=l.useRef(!0),a=M({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return Y(Be,y.displayName),l.useEffect(()=>{!C.current&&(c!=null&&c.resetOnChildrenChange)&&E(!0),C.current=!1},[S,c==null?void 0:c.resetOnChildrenChange]),l.useEffect(()=>{k.current||E(!0),k.current=!1},(c==null?void 0:c.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(c!=null&&c.resetOnSizeChange){const V=new ResizeObserver(ve(([L])=>{const N=L.target.getBoundingClientRect();!o&&N.width!==r.current.width?(r.current.width=N.width,E(!0)):o&&N.height!==r.current.height&&(r.current.height=N.height,E(!0))},60));return V.observe(D.current),()=>{V.disconnect()}}},[o,c==null?void 0:c.resetOnSizeChange]),l.useEffect(()=>{_&&E(!1)},[_]),e.jsx(me.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:v,...z,className:he(je.splitterLayout,s),ref:j,"data-splitter-vertical":o,children:a})})});y.displayName="SplitterLayout";try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const w=({text:n,background:u="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:n})});try{w.displayName="SplitterElementContent",w.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}try{w.displayName="SplitterElementContent",w.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const Qe={title:"Layouts & Floorplans / SplitterLayout",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},P={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(y,{...n,children:[e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 4"})})})]})}},O={render(n){return e.jsxs(y,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(w,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(w,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(w,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(w,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(w,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(w,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(w,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(w,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[u,o]=l.useState(n.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(ze,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Ce,{onSelectionChange:S,children:[e.jsx(te,{pressed:!u,children:"Horizontal"}),e.jsx(te,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(y,{style:n.style,vertical:u,children:[e.jsx(i,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(y,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var ie,le,oe;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,pe,de;U.parameters={...U.parameters,docs:{...(ue=U.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Ze=["Default","LimitedAreas","Nested"],bt=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:O,Nested:U,__namedExportsOrder:Ze,default:Qe},Symbol.toStringTag,{value:"Module"}));export{bt as C,P as D,O as L,U as N,i as S};
