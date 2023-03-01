import{A as we}from"./DomRefTable.module-9f9f7efe.js";import{D as ke}from"./DocsHeader-7148c42f.js";import{j as e,a as l,F as J}from"./jsx-runtime-670450c2.js";import{F as L}from"./index-6923d62a.js";import{c as ue}from"./clsx.m-1229b3e0.js";import{r as a}from"./index-f1f749bf.js";import{c as Z}from"./react-jss.esm-e54d2f1d.js";import{u as ee}from"./withWebComponent-63dd52a0.js";import{u as oe,l as he}from"./UI5Element-727d48d7.js";import{a as le}from"./class-map-abcca105.js";import{b as $}from"./CssSizeVariables-bd372cde.js";import{a as K}from"./Icons-5bcf1e3f.js";import{T as Be}from"./ThemingParameters-f4b4144e.js";import{u as Ee,aC as se}from"./i18n-defaults-a62b2e2b.js";import{a as S}from"./CustomVariables-fd831c35.js";import{u as Le}from"./useIsRTL-fcdcb328.js";import{u as qe}from"./useCurrentTheme-cb0d6a4d.js";import{B as s}from"./index-e2545418.js";import{a as $e}from"./Button-2e5054c2.js";import{I as _e}from"./index-ff756d66.js";import{d as De}from"./debounce-5c77766a.js";import{M as Re,C as G,i as Y}from"./index-04df5ba5.js";import"./chunk-4XCFV5WA-a49f6ad5.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{T as Ie}from"./index-2eaff221.js";import{L as me}from"./index-cf991126.js";import{S as pe,a as H}from"./index-5e540151.js";import{u as ae}from"./index-4fb8b842.js";import"./index-be1ef262.js";import"./iframe-8b6974ed.js";import"../sb-preview/runtime.mjs";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./_commonjsHelpers-042e6b4d.js";import"./Import-d0b33c31.js";import"./TableOfContent-a8377ebb.js";import"./index-84dbc4f6.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./inheritsLoose-93e09647.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./I18nContext-bef5b452.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Label-6707bdfc.js";import"./SegmentedButton-cda7822e.js";import"./ItemNavigation-4b509b49.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./ToggleButton-a83fc587.js";const ge=a.createContext({vertical:!0,reset:!1}),Ne=Z({splitterElement:{display:"flex",overflow:"hidden",position:"relative",willChange:"flex-basis",minWidth:"0px",minHeight:"0px"}},{name:"SplitterElement"}),t=a.forwardRef((i,h)=>{const{children:c,style:n,className:y,minSize:r,size:d,resizable:u,...x}=i,[_,N]=ee(h),{vertical:D,reset:w}=a.useContext(ge),F=le()?{width:"min-content",flex:"1 0 auto"}:{},o=d!=="auto"?{flex:`0 0 ${d}`}:{flex:"1 0 min-content",...F},[k,q]=a.useState(o),[p,V]=a.useState(!1),R=Ne();return a.useEffect(()=>{const I=new ResizeObserver(([P])=>{if(P.target.getBoundingClientRect().width!==0&&!p){const W=le()?{width:"unset"}:{};q({flex:`0 0 ${P.target.getBoundingClientRect().width}px`,...W}),V(!0)}});return d==="auto"&&N.current?I.observe(N.current):q({flex:`0 0 ${d}`}),()=>{I.disconnect()}},[d,p]),oe(()=>{w&&(q(void 0),V(!1))},[w,d]),oe(()=>{k===void 0&&q(o)},[k]),e("div",{ref:_,className:ue(R.splitterElement,R[D?"vertical":"horizontal"],y),style:{minHeight:D&&r?`${r}px`:void 0,minWidth:!D&&r?`${r}px`:void 0,...k,...n},...x,"data-min-size":r,children:c})});t.defaultProps={minSize:0,size:"auto"};t.displayName="SplitterElement";try{t.displayName="SplitterElement",t.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ae={splitterLayout:{display:"flex",overflow:"hidden",position:"relative",'&[data-splitter-orientation="horizontal"]':{flexDirection:"row",width:"100%","& > *":{height:"100%"}},'&[data-splitter-orientation="vertical"]':{flexDirection:"column",height:"100%","& > *":{width:"100%"}}}},Te="horizontal-grip",fe="M460.5 138q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm-137 0q22 0 36.5 15t14.5 36T88 225t-36.5 15q-21 0-36-15t-15-36 15-36 36-15zm409 136q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q22 0 36.5 15t14.5 37q0 21-14.5 36t-36.5 15q-21 0-36-15t-15-36q0-22 15-37t36-15z",Ve=!1,Fe="SAP-icons-v5",Oe="@ui5/webcomponents-icons";K(Te,{pathData:fe,ltr:Ve,collection:Fe,packageName:Oe});const Pe="horizontal-grip",ye="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",We=!1,Me="SAP-icons",je="@ui5/webcomponents-icons";K(Pe,{pathData:ye,ltr:We,collection:Me,packageName:je});he("sap_horizon");const ce="horizontal-grip",He="vertical-grip",be="M324.5 1q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0 136q21 0 36 15t15 36q0 22-15 36.5t-36 14.5q-22 0-37-14.5t-15-36.5q0-21 15-36t37-15zm-137 0q21 0 36 15t15 36q0 22-15 36.5t-36 14.5-36-14.5-15-36.5q0-21 15-36t36-15zm0-136q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm137 409q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0-137q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm0 137q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15z",Ue=!1,Xe="SAP-icons-v5",Ke="@ui5/webcomponents-icons";K(He,{pathData:be,ltr:Ue,collection:Xe,packageName:Ke});const Ge="vertical-grip",Se="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Ye=!1,Je="SAP-icons",Qe="@ui5/webcomponents-icons";K(Ge,{pathData:Se,ltr:Ye,collection:Je,packageName:Qe});he("sap_horizon");const de="vertical-grip",Ze=Z({splitter:{touchAction:"none",position:"relative",display:"flex",willChange:"flex",backgroundColor:Be.sapShell_Background,alignItems:"center",justifyContent:"center",boxSizing:"border-box","&[data-splitter-vertical=horizontal]":{cursor:"col-resize",borderLeft:S.SplitterBarBorderStyle,borderRight:S.SplitterBarBorderStyle,minWidth:$.sapWcrSplitterSize,width:$.sapWcrSplitterSize,height:"100%",flexDirection:"column","&:focus":{borderTop:S.SplitterBarBorderFix,borderRight:S.SplitterBarBorderFocus,borderBottom:S.SplitterBarBorderFix,borderLeft:S.SplitterBarBorderFocus,outlineOffset:"-0.20rem",outline:S.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"0.0625rem 100%",width:$.sapWcrSplitterSize,height:"4rem"},"& $lineBefore":{backgroundImage:`linear-gradient(to top, ${S.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0.5rem 0",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to bottom, ${S.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=vertical]":{borderTop:S.SplitterBarBorderStyle,borderBottom:S.SplitterBarBorderStyle,cursor:"row-resize",minHeight:$.sapWcrSplitterSize,height:$.sapWcrSplitterSize,width:"100%",flexDirection:"row","&:focus":{borderTop:S.SplitterBarBorderFocus,borderRight:S.SplitterBarBorderFix,borderBottom:S.SplitterBarBorderFocus,borderLeft:S.SplitterBarBorderFix,outlineOffset:"-0.20rem",outline:S.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:$.sapWcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to left, ${S.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to right, ${S.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=verticalRtl]":{cursor:"row-resize",minHeight:$.sapWcrSplitterSize,height:$.sapWcrSplitterSize,width:"100%",flexDirection:"row","& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:$.sapWcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to right, ${S.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to left, ${S.SplitterContentBorderColor}, transparent)`}},"&:hover":{"& $lineBefore, & $lineAfter":{flexGrow:1,transition:"all 0.1s ease-in"}}},gripButton:{minWidth:"1.5rem !important",height:"1.625rem",zIndex:"1","&:active":{zIndex:"2"}},icon:{color:S.SplitterIconColor},lineBefore:{backgroundPosition:"center",backgroundRepeat:"no-repeat"},lineAfter:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{name:"Splitter"}),et={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},tt={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},U=a.forwardRef((i,h)=>{var ne;const{vertical:c}=i,n=Ee("@ui5/webcomponents-react"),[y,r]=ee(h),d=Le({current:(ne=r.current)==null?void 0:ne.parentElement}),u=a.useRef(null),x=Ze(),_=a.useRef(null),N=a.useRef(null),D=a.useRef(null),w=a.useRef(null),F=a.useRef(0),o=c?et:tt,[k,q]=a.useState(!1),[p,V]=a.useState(["previousSibling","nextSibling"]),R=g=>{const B=F.current,v=r.current[p[0]],z=r.current[p[1]],b=k==="touch"?g.touches[0][`client${o.position}`]:g[`client${o.position}`],f=b-u.current,A=r.current.getBoundingClientRect()[o.size],E=f<0,T=()=>{v.style.flex=`0 0 ${_.current+f}px`,z.nextSibling&&_.current+f>0&&(z.style.flex=`0 0 ${N.current-f}px`)};_.current+f>0&&b+(A-B)<=w.current&&(parseInt(v.dataset.minSize,10)<=_.current+f&&E&&T(),N.current-f>=parseInt(z.dataset.minSize,10)&&!E&&T()),!z[p[1]]&&!d&&(z.style.flex="1 0 0px")},I=(g,B)=>{var E,T,O,re,ie;const v=r.current[p[0]],z=r.current[p[1]],b=r.current[p[0]].getBoundingClientRect(),f=r.current[p[1]].getBoundingClientRect(),A=B?Math.round(g.changedTouches[0][`client${o.position}`]):g[`client${o.position}`];A-((E=r.current.getBoundingClientRect())==null?void 0:E[o.positionRect])<0&&(v.style.flex="0 0 0px",(T=v.style)!=null&&T[o.min]?z.style.flex=`0 0 ${(f==null?void 0:f[o.size])+((b==null?void 0:b[o.size])-((O=v.style)==null?void 0:O[o.min].replace("px","")))}px`:z.style.flex=`0 0 ${(f==null?void 0:f[o.size])+(b==null?void 0:b[o.size])}px`),w.current<A&&(z.style.flex="0 0 0px",(re=z.style)!=null&&re[o.min]?v.style.flex=`0 0 ${(b==null?void 0:b[o.size])+((f==null?void 0:f[o.size])-((ie=z.style)==null?void 0:ie[o.min].replace("px","")))}px`:v.style.flex=`0 0 ${(b==null?void 0:b[o.size])+(f==null?void 0:f[o.size])}px`)},P=g=>{g.currentTarget.focus()},W=g=>{var B,v,z,b;g.type==="pointerdown"&&g.pointerType!=="touch"||(g.preventDefault(),q(g.pointerType??"mouse"),F.current=g.nativeEvent[o.offset],D.current=(B=r.current[p[0]].getBoundingClientRect())==null?void 0:B[o.end],r.current[p[1]][p[1]]?w.current=(v=r.current[p[1]][p[1]].getBoundingClientRect())==null?void 0:v[o.start]:w.current=r.current.parentElement.getBoundingClientRect()[o.end],_.current=(z=r.current[p[0]].getBoundingClientRect())==null?void 0:z[o.size],N.current=(b=r.current[p[1]].getBoundingClientRect())==null?void 0:b[o.size],u.current=g[`client${o.position}`])},ve=g=>{var v,z,b,f;const B=g.code??g.key;if(B==="ArrowRight"||B==="ArrowLeft"||B==="ArrowUp"||B==="ArrowDown"){g.preventDefault();let A=r.current[p[0]],E=r.current[p[1]];(B==="ArrowLeft"||B==="ArrowUp")&&(E=r.current[p[0]],A=r.current[p[1]]);const T=E.style[o.min]?((v=E.getBoundingClientRect())==null?void 0:v[o.size])-Number(E.style[o.min].replace("px","")):(z=E.getBoundingClientRect())==null?void 0:z[o.size];if(document.activeElement===r.current){const O=T>=20?20:T;E.style.flex=`0 0 ${((b=E.getBoundingClientRect())==null?void 0:b[o.size])-O}px`,A.style.flex=`0 0 ${((f=A.getBoundingClientRect())==null?void 0:f[o.size])+O}px`}}},M=g=>{I(g,k==="touch"),q(!1)};a.useEffect(()=>{const g=()=>{k==="touch"?(document.removeEventListener("touchmove",R),document.removeEventListener("touchend",M)):(document.removeEventListener("mouseup",M),document.removeEventListener("mousemove",R))};return k?k==="touch"?(document.addEventListener("touchmove",R),document.addEventListener("touchend",M)):(document.addEventListener("mousemove",R),document.addEventListener("mouseup",M)):g(),()=>{g()}},[k]),a.useEffect(()=>{V(d&&!c?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[d,c]);const j=qe(),xe=j==="sap_fiori_3_hcb"||j==="sap_fiori_3_hcw"||j==="sap_horizon_hcb"||j==="sap_horizon_hcw";return l("div",{className:x.splitter,tabIndex:0,onClick:P,onKeyDown:ve,onPointerDown:W,onMouseDown:W,ref:y,role:"separator","data-splitter-vertical":d&&c?"verticalRtl":c?"vertical":"horizontal",title:n.getText(se),"aria-orientation":c?"vertical":"horizontal","aria-label":n.getText(se),children:[e("div",{className:x.lineBefore}),xe?e(s,{className:x.gripButton,tabIndex:-1,icon:c?ce:de,design:$e.Transparent}):e(_e,{className:x.icon,name:c?ce:de}),e("div",{className:x.lineAfter})]})});U.displayName="Splitter";try{U.displayName="Splitter",U.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q=i=>a.useMemo(()=>{if(a.isValidElement(i==null?void 0:i.children))return i==null?void 0:i.children;const h=a.Children.toArray(i==null?void 0:i.children).filter(a.isValidElement);let c=0;const n=[];return h.forEach((y,r)=>{const d=h[r+c];if(h.length-c-1>r&&(d.props.resizable||d.props.resizable===void 0)&&d.props.minSize!==void 0)h.splice(r+c+1,0,e(U,{height:i==null?void 0:i.height,width:i==null?void 0:i.width,vertical:i==null?void 0:i.vertical},`splitter${r}`)),n.push(r+1+c-1),++c;else if(r>0&&(d==null?void 0:d.props.resizable)===!1){const u=h.findIndex(x=>x===d)-1;h[u].props.minSize===void 0&&h.splice(u,1),n.pop(),--c}}),n.forEach(y=>{var d,u;const r=(u=(d=h[y])==null?void 0:d.props)==null?void 0:u.size;r&&r!=="auto"&&(h[y]=a.cloneElement(h[y],{size:`calc(${r} - ${$.sapWcrSplitterSize})`}))}),h},[i]);try{Q.displayName="useConcatSplitterElements",Q.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const nt=Z(Ae,{name:"SplitterLayout"}),C=a.forwardRef((i,h)=>{const{vertical:c,children:n,title:y,style:r,className:d,options:u,...x}=i,[_,N]=ee(h),[D,w]=a.useState(void 0),F=nt(),o=a.useRef({width:void 0,height:void 0}),k=a.useRef(!0),q=a.useRef(!0),p=Q({children:n??[],width:r==null?void 0:r.width,height:r==null?void 0:r.height,vertical:c});return a.useEffect(()=>{!k.current&&(u!=null&&u.resetOnChildrenChange)&&w(!0),k.current=!1},[n,u==null?void 0:u.resetOnChildrenChange]),a.useEffect(()=>{q.current||w(!0),q.current=!1},(u==null?void 0:u.resetOnCustomDepsChange)??[]),a.useEffect(()=>{if(u!=null&&u.resetOnSizeChange){const V=new ResizeObserver(De(([R])=>{const I=R.target.getBoundingClientRect();!c&&I.width!==o.current.width?(o.current.width=I.width,w(!0)):c&&I.height!==o.current.height&&(o.current.height=I.height,w(!0))},60));return V.observe(N.current),()=>{V.disconnect()}}},[c,u==null?void 0:u.resetOnSizeChange]),a.useEffect(()=>{D&&w(!1)},[D]),e(ge.Provider,{value:{vertical:c,reset:D},children:e("div",{style:{flexDirection:c?"column":"row",...r},title:y,...x,className:ue(F.splitterLayout,d),ref:_,"data-splitter-vertical":c,children:p})})});C.displayName="SplitterLayout";try{C.displayName="SplitterLayout",C.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=({text:i,background:h="transparent"})=>e(L,{style:{height:"100%",width:"100%",background:h},alignItems:"Center",justifyContent:"Center",children:e(Ie,{children:i})});function rt(i={}){const{wrapper:h}=Object.assign({},ae(),i.components);return h?e(h,{...i,children:e(c,{})}):c();function c(){const n=Object.assign({h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",br:"br"},ae(),i.components);return l(J,{children:[e(Re,{title:"Layouts & Floorplans / SplitterLayout",component:C,subcomponents:{SplitterElement:t},argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3}}}),`
`,e(ke,{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(G,{children:e(Y,{name:"Default",children:y=>l(C,{...y,children:[e(t,{children:e(m,{text:"Content 1"})}),e(t,{children:e(m,{text:`Content 2
            with
            multi
            lines
            `})}),e(t,{children:e(m,{text:"Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),e(t,{children:e(m,{text:"Content 4"})})]})})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(we,{story:"Default"}),`
`,e(n.h3,{children:"SplitterLayoutOptions"}),`
`,l(n.table,{children:[e(n.thead,{children:l(n.tr,{children:[e(n.th,{children:"Property"}),e(n.th,{children:"Type"}),e(n.th,{children:"Description"})]})}),l(n.tbody,{children:[l(n.tr,{children:[e(n.td,{children:e(n.code,{children:"resetOnSizeChange"})}),e(n.td,{children:e(n.code,{children:"boolean"})}),l(n.td,{children:["Defines whether the ",e(n.code,{children:"SplitterLayout"})," should be reset when its size changes depending on the orientation."]})]}),l(n.tr,{children:[e(n.td,{children:e(n.code,{children:"resetOnChildrenChange"})}),e(n.td,{children:e(n.code,{children:"boolean"})}),l(n.td,{children:["Defines whether the ",e(n.code,{children:"SplitterLayout"})," should be reset when its ",e(n.code,{children:"children"})," change."]})]}),l(n.tr,{children:[e(n.td,{children:e(n.code,{children:"resetOnCustomDepsChange"})}),e(n.td,{children:e(n.code,{children:"React.DependencyList"})}),l(n.td,{children:["Defines a list of dependencies that trigger a reset of the ",e(n.code,{children:"SplitterLayout"})," when they are changed."]})]})]})]}),`
`,e(n.h2,{children:"SplitterLayout with non-resizable areas & areas with min-width"}),`
`,e(G,{children:e(Y,{name:"Limited areas",children:y=>l(C,{...y,children:[e(t,{size:"10%",children:e(m,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e(t,{children:e(m,{text:"Content 2",background:"skyblue"})}),e(t,{minSize:200,children:e(m,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e(t,{children:e(m,{text:"Content 4",background:"paleturquoise"})}),e(t,{children:e(m,{text:"Content 5",background:"lightskyblue"})}),e(t,{resizable:!1,size:"150px",children:e(m,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e(t,{children:e(m,{text:"Content 7",background:"aliceblue"})}),e(t,{children:e(m,{text:"Content 8",background:"lightsteelblue"})})]})})}),`
`,e(n.h2,{children:"Nested SplitterLayouts"}),`
`,e(G,{children:e(Y,{name:"Nested",args:{vertical:!0},children:y=>{const[r,d]=a.useState(y.vertical),u=x=>{d(x.detail.selectedItem.textContent==="Vertical")};return a.useEffect(()=>{d(y.vertical)},[y.vertical]),l(J,{children:[l(L,{direction:"Column",children:[e(me,{showColon:!0,children:"Orientation of outer SplitterLayout"}),l(pe,{onSelectionChange:u,children:[e(H,{pressed:!r,children:"Horizontal"}),e(H,{pressed:r,children:"Vertical"})]})]}),e(n.br,{}),e(n.br,{}),l(C,{style:y.style,vertical:r,children:[e(t,{size:"40%",children:l(L,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 1"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"lightblue"},size:"auto",children:e(s,{children:"Content 2"})}),e(t,{style:{background:"skyblue"},size:"10%",children:e(s,{"data-auto":!0,children:"Content 3"})}),e(t,{style:{background:"cadetblue"},size:"auto",children:e(s,{children:"Content 4"})}),e(t,{style:{background:"lightskyblue"},size:"60%",children:l(L,{direction:"Column",style:{width:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 5"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"#E29713"},children:e(s,{children:"Content 6"})}),e(t,{size:"50%",children:l(L,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 7"}),l(C,{vertical:!0,style:{height:"100%"},children:[e(t,{style:{background:"lightgrey"},size:"50%",children:e(s,{children:"Content 8"})}),e(t,{style:{background:"grey"},size:"50%",children:e(s,{children:"Content 9"})})]})]})}),e(t,{style:{background:"#D3A95E"},children:e(s,{children:"Content 10"})})]})]})})]})]})}),e(t,{size:"20%",children:e(s,{style:{width:"100%"},children:"Content 11"})}),e(t,{children:l(L,{direction:"Column",style:{width:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 12"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"forestgreen"},size:"15%",children:e(s,{children:"Content 13"})}),e(t,{style:{background:"darkgreen"},size:"15%",children:e(s,{children:"Content 14"})}),e(t,{style:{background:"olive"},resizable:!1,size:"40%",children:e(s,{children:"Content 15"})}),e(t,{style:{background:"green"},size:"15%",children:e(s,{children:"Content 16"})}),e(t,{style:{background:"seagreen"},size:"15%",children:e(s,{children:"Content 17"})})]})]})})]})]})}})})]})}}const Ce=i=>l(C,{...i,children:[e(t,{children:e(m,{text:"Content 1"})}),e(t,{children:e(m,{text:`Content 2
            with
            multi
            lines
            `})}),e(t,{children:e(m,{text:"Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),e(t,{children:e(m,{text:"Content 4"})})]});Ce.storyName="Default";Ce.parameters={storySource:{source:`args => {
  return <SplitterLayout {...args}>
          <SplitterElement>
            <SplitterElementContent text="Content 1" />
          </SplitterElement>
          <SplitterElement>
            <SplitterElementContent text={\`Content 2
            with
            multi
            lines
            \`} />
          </SplitterElement>
          <SplitterElement>
            <SplitterElementContent text="Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
          </SplitterElement>
          <SplitterElement>
            <SplitterElementContent text="Content 4" />
          </SplitterElement>
        </SplitterLayout>;
}`}};const ze=i=>l(C,{...i,children:[e(t,{size:"10%",children:e(m,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e(t,{children:e(m,{text:"Content 2",background:"skyblue"})}),e(t,{minSize:200,children:e(m,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e(t,{children:e(m,{text:"Content 4",background:"paleturquoise"})}),e(t,{children:e(m,{text:"Content 5",background:"lightskyblue"})}),e(t,{resizable:!1,size:"150px",children:e(m,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e(t,{children:e(m,{text:"Content 7",background:"aliceblue"})}),e(t,{children:e(m,{text:"Content 8",background:"lightsteelblue"})})]});ze.storyName="Limited areas";ze.parameters={storySource:{source:`args => {
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
}`}};const te=i=>{const[h,c]=a.useState(i.vertical),n=y=>{c(y.detail.selectedItem.textContent==="Vertical")};return a.useEffect(()=>{c(i.vertical)},[i.vertical]),l(J,{children:[l(L,{direction:"Column",children:[e(me,{showColon:!0,children:"Orientation of outer SplitterLayout"}),l(pe,{onSelectionChange:n,children:[e(H,{pressed:!h,children:"Horizontal"}),e(H,{pressed:h,children:"Vertical"})]})]}),e("br",{}),e("br",{}),l(C,{style:i.style,vertical:h,children:[e(t,{size:"40%",children:l(L,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 1"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"lightblue"},size:"auto",children:e(s,{children:"Content 2"})}),e(t,{style:{background:"skyblue"},size:"10%",children:e(s,{"data-auto":!0,children:"Content 3"})}),e(t,{style:{background:"cadetblue"},size:"auto",children:e(s,{children:"Content 4"})}),e(t,{style:{background:"lightskyblue"},size:"60%",children:l(L,{direction:"Column",style:{width:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 5"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"#E29713"},children:e(s,{children:"Content 6"})}),e(t,{size:"50%",children:l(L,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 7"}),l(C,{vertical:!0,style:{height:"100%"},children:[e(t,{style:{background:"lightgrey"},size:"50%",children:e(s,{children:"Content 8"})}),e(t,{style:{background:"grey"},size:"50%",children:e(s,{children:"Content 9"})})]})]})}),e(t,{style:{background:"#D3A95E"},children:e(s,{children:"Content 10"})})]})]})})]})]})}),e(t,{size:"20%",children:e(s,{style:{width:"100%"},children:"Content 11"})}),e(t,{children:l(L,{direction:"Column",style:{width:"100%"},children:[e(s,{style:{width:"100%"},children:"Content 12"}),l(C,{style:{height:"100%"},children:[e(t,{style:{background:"forestgreen"},size:"15%",children:e(s,{children:"Content 13"})}),e(t,{style:{background:"darkgreen"},size:"15%",children:e(s,{children:"Content 14"})}),e(t,{style:{background:"olive"},resizable:!1,size:"40%",children:e(s,{children:"Content 15"})}),e(t,{style:{background:"green"},size:"15%",children:e(s,{children:"Content 16"})}),e(t,{style:{background:"seagreen"},size:"15%",children:e(s,{children:"Content 17"})})]})]})})]})]})};te.storyName="Nested";te.args={vertical:!0};te.parameters={storySource:{source:`args => {
  const [vertical, setVertical] = useState(args.vertical);

  const handleChange = e => {
    setVertical(e.detail.selectedItem.textContent === "Vertical");
  };

  useEffect(() => {
    setVertical(args.vertical);
  }, [args.vertical]);
  return <>
          <FlexBox direction="Column">
            <Label showColon>Orientation of outer SplitterLayout</Label>
            <SegmentedButton onSelectionChange={handleChange}>
              <SegmentedButtonItem pressed={!vertical}>Horizontal</SegmentedButtonItem>
              <SegmentedButtonItem pressed={vertical}>Vertical</SegmentedButtonItem>
            </SegmentedButton>
          </FlexBox>
          <br />
          <br />
          <SplitterLayout style={args.style} vertical={vertical}>
            <SplitterElement size="40%">
              <FlexBox direction="Column" style={{
          width: "100%",
          height: "100%"
        }}>
                <Button style={{
            width: "100%"
          }}>Content 1</Button>
                <SplitterLayout style={{
            height: "100%"
          }}>
                  <SplitterElement style={{
              background: "lightblue"
            }} size="auto">
                    <Button>Content 2</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "skyblue"
            }} size="10%">
                    <Button data-auto>Content 3</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "cadetblue"
            }} size="auto">
                    <Button>Content 4</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "lightskyblue"
            }} size="60%">
                    <FlexBox direction="Column" style={{
                width: "100%"
              }}>
                      <Button style={{
                  width: "100%"
                }}>Content 5</Button>
                      <SplitterLayout style={{
                  height: "100%"
                }}>
                        <SplitterElement style={{
                    background: "#E29713"
                  }}>
                          <Button>Content 6</Button>
                        </SplitterElement>
                        <SplitterElement size="50%">
                          <FlexBox direction="Column" style={{
                      width: "100%",
                      height: "100%"
                    }}>
                            <Button style={{
                        width: "100%"
                      }}>Content 7</Button>
                            <SplitterLayout vertical={true} style={{
                        height: "100%"
                      }}>
                              <SplitterElement style={{
                          background: "lightgrey"
                        }} size="50%">
                                <Button>Content 8</Button>
                              </SplitterElement>
                              <SplitterElement style={{
                          background: "grey"
                        }} size="50%">
                                <Button>Content 9</Button>
                              </SplitterElement>
                            </SplitterLayout>
                          </FlexBox>
                        </SplitterElement>
                        <SplitterElement style={{
                    background: "#D3A95E"
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
          width: "100%"
        }}>Content 11</Button>
            </SplitterElement>
            <SplitterElement>
              <FlexBox direction="Column" style={{
          width: "100%"
        }}>
                <Button style={{
            width: "100%"
          }}>Content 12</Button>
                <SplitterLayout style={{
            height: "100%"
          }}>
                  <SplitterElement style={{
              background: "forestgreen"
            }} size="15%">
                    <Button>Content 13</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "darkgreen"
            }} size="15%">
                    <Button>Content 14</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "olive"
            }} resizable={false} size="40%">
                    <Button>Content 15</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "green"
            }} size="15%">
                    <Button>Content 16</Button>
                  </SplitterElement>
                  <SplitterElement style={{
              background: "seagreen"
            }} size="15%">
                    <Button>Content 17</Button>
                  </SplitterElement>
                </SplitterLayout>
              </FlexBox>
            </SplitterElement>
          </SplitterLayout>
        </>;
}`}};const X={title:"Layouts & Floorplans / SplitterLayout",parameters:{chromatic:{delay:1e3}},component:C,subcomponents:{SplitterElement:t},args:{style:{width:"100%",height:"800px"}},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","limitedAreas","nested"]};X.parameters=X.parameters||{};X.parameters.docs={...X.parameters.docs||{},page:rt};const dn=["defaultStory","limitedAreas","nested"];export{dn as __namedExportsOrder,X as default,Ce as defaultStory,ze as limitedAreas,te as nested};
//# sourceMappingURL=SplitterLayout.stories-148aa0a1.js.map
