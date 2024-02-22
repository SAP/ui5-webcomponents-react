import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{F as _}from"./index-iYv8HJTi.js";import{T as V}from"./index-YN01GDwL.js";import{r as o}from"./index-OjgoNOWw.js";import{c as fe}from"./clsx-Zbgk8kpT.js";import{c as Z}from"./react-jss.esm-tmBtHfec.js";import{u as ee}from"./withWebComponent--kEkWNJH.js";import{u as te}from"./useIsomorphicLayoutEffect-s31TYDr7.js";import{j as ne,f as ye}from"./UI5Element-oLeGfnU4.js";import{C as k}from"./CssSizeVariables-HFpqBBhk.js";import{r as J}from"./Icons-B0Lm9Xgp.js";import{T as Be}from"./ThemingParameters-UghqSl-x.js";import{u as je,aw as re}from"./i18n-defaults-1NWI3C8K.js";import{C as h}from"./CustomVariables-jcpx1a4M.js";import{u as Ee}from"./useIsRTL-OxgbF-6h.js";import{u as ke}from"./useCurrentTheme-2iRiUvuj.js";import{B as g}from"./index-nVsRNv9T.js";import{B as Le}from"./Button-ui6PL7pJ.js";import{I as _e}from"./index-FWR_y24G.js";import{d as $e}from"./debounce-F9irgL9Y.js";import{L as Ie}from"./index-6rR8BTLv.js";import{a as Te,S as ie}from"./index-5W-26jqf.js";const Se=o.createContext({vertical:!0,reset:!1}),qe=Z({splitterElement:{display:"flex",overflow:"hidden",position:"relative",willChange:"flex-basis",minWidth:"0px",minHeight:"0px"}},{name:"SplitterElement"}),i=o.forwardRef((n,c)=>{const{children:l,style:S,className:v,minSize:t,size:a,resizable:s,...w}=n,[$,q]=ee(c),{vertical:B,reset:x}=o.useContext(Se),A=ne()?{width:"min-content",flex:"1 1 auto"}:{},r=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...A},[b,E]=o.useState(r),[u,D]=o.useState(!1),I=qe();return o.useEffect(()=>{const T=new ResizeObserver(([M])=>{if(M.target.getBoundingClientRect().width!==0&&!u){const H=ne()?{width:"unset"}:{};E({flex:`0 0 ${M.target.getBoundingClientRect()[B?"height":"width"]}px`,...H}),D(!0)}});return a==="auto"&&q.current?T.observe(q.current):E({flex:`0 1 ${a}`}),()=>{T.disconnect()}},[a,u,B]),te(()=>{x&&(E(void 0),D(!1))},[x,a]),te(()=>{b===void 0&&E(r)},[b]),e.jsx("div",{ref:$,className:fe(I.splitterElement,I[B?"vertical":"horizontal"],v),style:{minHeight:B&&t?`${t}px`:void 0,minWidth:!B&&t?`${t}px`:void 0,...b,...S},...w,"data-min-size":t,children:l})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Re={splitterLayout:{display:"flex",overflow:"hidden",position:"relative",'&[data-splitter-orientation="horizontal"]':{flexDirection:"row",width:"100%","& > *":{height:"100%"}},'&[data-splitter-orientation="vertical"]':{flexDirection:"column",height:"100%","& > *":{width:"100%"}}}},Ne="horizontal-grip",xe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",De=!1,Ae="SAP-icons-v4",Fe="@ui5/webcomponents-icons";J(Ne,{pathData:xe,ltr:De,collection:Ae,packageName:Fe});const Ve="horizontal-grip",be="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Oe=!1,Pe="SAP-icons-v5",We="@ui5/webcomponents-icons";J(Ve,{pathData:be,ltr:Oe,collection:Pe,packageName:We});ye();const oe="horizontal-grip",Me="vertical-grip",Ce="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",He=!1,Ue="SAP-icons-v4",Ke="@ui5/webcomponents-icons";J(Me,{pathData:Ce,ltr:He,collection:Ue,packageName:Ke});const Xe="vertical-grip",ze="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Ge=!1,Ye="SAP-icons-v5",Je="@ui5/webcomponents-icons";J(Xe,{pathData:ze,ltr:Ge,collection:Ye,packageName:Je});ye();const le="vertical-grip",Qe=Z({splitter:{touchAction:"none",position:"relative",display:"flex",willChange:"flex",backgroundColor:Be.sapShell_Background,alignItems:"center",justifyContent:"center",boxSizing:"border-box","&[data-splitter-vertical=horizontal]":{cursor:"col-resize",borderLeft:h.SplitterBarBorderStyle,borderRight:h.SplitterBarBorderStyle,minWidth:k.ui5WcrSplitterSize,width:k.ui5WcrSplitterSize,height:"100%",flexDirection:"column","&:focus":{borderTop:h.SplitterBarBorderFix,borderRight:h.SplitterBarBorderFocus,borderBottom:h.SplitterBarBorderFix,borderLeft:h.SplitterBarBorderFocus,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"0.0625rem 100%",width:k.ui5WcrSplitterSize,height:"4rem"},"& $lineBefore":{backgroundImage:`linear-gradient(to top, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0.5rem 0",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to bottom, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=vertical]":{borderTop:h.SplitterBarBorderStyle,borderBottom:h.SplitterBarBorderStyle,cursor:"row-resize",minHeight:k.ui5WcrSplitterSize,height:k.ui5WcrSplitterSize,width:"100%",flexDirection:"row","&:focus":{borderTop:h.SplitterBarBorderFocus,borderRight:h.SplitterBarBorderFix,borderBottom:h.SplitterBarBorderFocus,borderLeft:h.SplitterBarBorderFix,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:k.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=verticalRtl]":{cursor:"row-resize",minHeight:k.ui5WcrSplitterSize,height:k.ui5WcrSplitterSize,width:"100%",flexDirection:"row","& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:k.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`}},"&:hover":{"& $lineBefore, & $lineAfter":{flexGrow:1,transition:"all 0.1s ease-in"}}},gripButton:{minWidth:"1.5rem !important",height:"1.625rem",zIndex:"1","&:active":{zIndex:"2"}},icon:{boxSizing:"initial",color:h.SplitterIconColor},lineBefore:{backgroundPosition:"center",backgroundRepeat:"no-repeat"},lineAfter:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{name:"Splitter"}),Ze={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},et={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},Y=o.forwardRef((n,c)=>{const{vertical:l}=n,S=je("@ui5/webcomponents-react"),[v,t]=ee(c),a=Ee(t),s=o.useRef(null),w=Qe(),$=o.useRef(null),q=o.useRef(null),B=o.useRef(null),x=o.useRef(null),A=o.useRef(0),r=l?Ze:et,[b,E]=o.useState(!1),[u,D]=o.useState(["previousSibling","nextSibling"]),I=d=>{const C=A.current,y=t.current[u[0]],f=t.current[u[1]],p=b==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],m=p-s.current,R=t.current.getBoundingClientRect()[r.size],z=m<0,N=()=>{y.style.flex=`0 0 ${$.current+m}px`,f.nextSibling&&$.current+m>0&&(f.style.flex=`0 0 ${q.current-m}px`)};$.current+m>0&&p+(R-C)<=x.current&&(parseInt(y.dataset.minSize,10)<=$.current+m&&z&&N(),q.current-m>=parseInt(f.dataset.minSize,10)&&!z&&N()),!f[u[1]]&&!a&&(f.style.flex="1 0 0px")},T=(d,C)=>{var z,N,F,X,G;const y=t.current[u[0]],f=t.current[u[1]],p=t.current[u[0]].getBoundingClientRect(),m=t.current[u[1]].getBoundingClientRect(),R=C?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];R-((z=t.current.getBoundingClientRect())==null?void 0:z[r.positionRect])<0&&(y.style.flex="0 0 0px",(N=y.style)!=null&&N[r.min]?f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((p==null?void 0:p[r.size])-((F=y.style)==null?void 0:F[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(p==null?void 0:p[r.size])}px`),x.current<R&&(f.style.flex="0 0 0px",(X=f.style)!=null&&X[r.min]?y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((m==null?void 0:m[r.size])-((G=f.style)==null?void 0:G[r.min].replace("px","")))}px`:y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(m==null?void 0:m[r.size])}px`)},M=d=>{d.currentTarget.focus()},H=d=>{var C,y,f,p;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),E(d.pointerType??"mouse"),A.current=d.nativeEvent[r.offset],B.current=(C=t.current[u[0]].getBoundingClientRect())==null?void 0:C[r.end],t.current[u[1]][u[1]]?x.current=(y=t.current[u[1]][u[1]].getBoundingClientRect())==null?void 0:y[r.start]:x.current=t.current.parentElement.getBoundingClientRect()[r.end],$.current=(f=t.current[u[0]].getBoundingClientRect())==null?void 0:f[r.size],q.current=(p=t.current[u[1]].getBoundingClientRect())==null?void 0:p[r.size],s.current=d[`client${r.position}`])},ve=d=>{var y,f,p,m;const C=d.code??d.key;if(C==="ArrowRight"||C==="ArrowLeft"||C==="ArrowUp"||C==="ArrowDown"){d.preventDefault();let R=t.current[u[0]],z=t.current[u[1]];(C==="ArrowLeft"||C==="ArrowUp")&&(z=t.current[u[0]],R=t.current[u[1]]);const N=z.style[r.min]?((y=z.getBoundingClientRect())==null?void 0:y[r.size])-Number(z.style[r.min].replace("px","")):(f=z.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===t.current){const F=N>=20?20:N,X=(p=R.getBoundingClientRect())==null?void 0:p[r.size],G=(m=z.getBoundingClientRect())==null?void 0:m[r.size];z.style.flex=`0 0 ${G-F}px`,R.style.flex=`0 0 ${X+F}px`}}},U=d=>{T(d,b==="touch"),E(!1)};o.useEffect(()=>{const d=()=>{b==="touch"?(document.removeEventListener("touchmove",I),document.removeEventListener("touchend",U)):(document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",I))};return b?b==="touch"?(document.addEventListener("touchmove",I),document.addEventListener("touchend",U)):(document.addEventListener("mousemove",I),document.addEventListener("mouseup",U)):d(),()=>{d()}},[b]),o.useEffect(()=>{D(a&&!l?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,l]);const K=ke(),we=K==="sap_fiori_3_hcb"||K==="sap_fiori_3_hcw"||K==="sap_horizon_hcb"||K==="sap_horizon_hcw";return e.jsxs("div",{className:w.splitter,tabIndex:0,onClick:M,onKeyDown:ve,onPointerDown:H,onMouseDown:H,ref:v,role:"separator","data-splitter-vertical":a&&l?"verticalRtl":l?"vertical":"horizontal",title:S.getText(re),"aria-orientation":l?"vertical":"horizontal","aria-label":S.getText(re),children:[e.jsx("div",{className:w.lineBefore}),we?e.jsx(g,{className:w.gripButton,tabIndex:-1,icon:l?oe:le,design:Le.Transparent}):e.jsx(_e,{className:w.icon,name:l?oe:le}),e.jsx("div",{className:w.lineAfter})]})});Y.displayName="Splitter";try{Y.displayName="Splitter",Y.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q=n=>o.useMemo(()=>{if(o.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=o.Children.toArray(n==null?void 0:n.children).filter(o.isValidElement);let l=0;const S=[];return c.forEach((v,t)=>{const a=c[t+l];if(c.length-l-1>t&&(a.props.resizable||a.props.resizable===void 0)&&a.props.minSize!==void 0)c.splice(t+l+1,0,e.jsx(Y,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+l-1),++l;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const s=c.findIndex(w=>w===a)-1;c[s].props.minSize===void 0&&c.splice(s,1),S.pop(),--l}}),S.forEach(v=>{var a,s;const t=(s=(a=c[v])==null?void 0:a.props)==null?void 0:s.size;t&&t!=="auto"&&(c[v]=o.cloneElement(c[v],{size:`calc(${t} - ${k.ui5WcrSplitterSize})`}))}),c},[n]);try{Q.displayName="useConcatSplitterElements",Q.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const tt=Z(Re,{name:"SplitterLayout"}),j=o.forwardRef((n,c)=>{const{vertical:l,children:S,title:v,style:t,className:a,options:s,...w}=n,[$,q]=ee(c),[B,x]=o.useState(void 0),A=tt(),r=o.useRef({width:void 0,height:void 0}),b=o.useRef(!0),E=o.useRef(!0),u=Q({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:l});return o.useEffect(()=>{!b.current&&(s!=null&&s.resetOnChildrenChange)&&x(!0),b.current=!1},[S,s==null?void 0:s.resetOnChildrenChange]),o.useEffect(()=>{E.current||x(!0),E.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),o.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const D=new ResizeObserver($e(([I])=>{const T=I.target.getBoundingClientRect();!l&&T.width!==r.current.width?(r.current.width=T.width,x(!0)):l&&T.height!==r.current.height&&(r.current.height=T.height,x(!0))},60));return D.observe(q.current),()=>{D.disconnect()}}},[l,s==null?void 0:s.resetOnSizeChange]),o.useEffect(()=>{B&&x(!1)},[B]),e.jsx(Se.Provider,{value:{vertical:l,reset:B},children:e.jsx("div",{style:{flexDirection:l?"column":"row",...t},title:v,...w,className:fe(A.splitterLayout,a),ref:$,"data-splitter-vertical":l,children:u})})});j.displayName="SplitterLayout";try{j.displayName="SplitterLayout",j.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const L=({text:n,background:c="transparent"})=>e.jsx(_,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(V,{children:n})});try{L.displayName="SplitterElementContent",L.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const nt={title:"Layouts & Floorplans / SplitterLayout",component:j,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4,disableSnapshot:!0}}},O={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(j,{...n,children:[e.jsx(i,{children:e.jsx(_,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(V,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(_,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(V,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(_,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(V,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(_,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(V,{children:"Content 4"})})})]})}},P={render(n){return e.jsxs(j,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(L,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(L,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(L,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(L,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(L,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(L,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(L,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(L,{text:"Content 8",background:"lightsteelblue"})})]})}},W={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,l]=o.useState(n.vertical),S=v=>{l(v.detail.selectedItem.textContent==="Vertical")};return o.useEffect(()=>{l(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{direction:"Column",children:[e.jsx(Ie,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Te,{onSelectionChange:S,children:[e.jsx(ie,{pressed:!c,children:"Horizontal"}),e.jsx(ie,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(j,{style:n.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(_,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 1"}),e.jsxs(j,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(g,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(g,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(g,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(_,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 5"}),e.jsxs(j,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(g,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(_,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 7"}),e.jsxs(j,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(g,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(g,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(g,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(g,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(_,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 12"}),e.jsxs(j,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(g,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(g,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(g,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(g,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(g,{children:"Content 17"})})]})]})})]})]})}};var se,ae,ce;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,de,me;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,he,ge;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(he=W.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const rt=["Default","LimitedAreas","Nested"],jt=Object.freeze(Object.defineProperty({__proto__:null,Default:O,LimitedAreas:P,Nested:W,__namedExportsOrder:rt,default:nt},Symbol.toStringTag,{value:"Module"}));export{jt as C,O as D,P as L,W as N,i as S};
