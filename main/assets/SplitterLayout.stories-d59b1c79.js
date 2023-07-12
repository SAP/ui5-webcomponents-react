import{j as e}from"./jsx-runtime-5926aa06.js";import{F as A}from"./index-ea625d40.js";import{T as Be}from"./index-562e1433.js";import{r as o}from"./index-ebeaab24.js";import{c as fe}from"./clsx.m-1229b3e0.js";import{c as Y}from"./react-jss.esm-022ab528.js";import{u as J}from"./withWebComponent-d4224c1c.js";import{u as te}from"./useIsomorphicLayoutEffect-38a48652.js";import{c as ne}from"./Device-99b8bbf4.js";import{b as L}from"./CssSizeVariables-cd649ef5.js";import{k as ye}from"./UI5Element-78be0f3d.js";import{j as X}from"./Icons-26e87c01.js";import{T as Ee}from"./ThemingParameters-7e2e4e30.js";import{u as ke,aE as re}from"./i18n-defaults-ec343d3a.js";import{a as h}from"./CustomVariables-d3e297a0.js";import{u as je,d as Le}from"./debounce-bd3193d4.js";import{u as qe}from"./useCurrentTheme-f86b0210.js";import{B as g}from"./index-3021d8c3.js";import{B as _e}from"./Button-427cd4bb.js";import{I as $e}from"./index-654a8136.js";import{L as Re}from"./index-f99ece88.js";import{S as Ie,a as ie}from"./index-2183b3d4.js";const Se=o.createContext({vertical:!0,reset:!1}),Ne=Y({splitterElement:{display:"flex",overflow:"hidden",position:"relative",willChange:"flex-basis",minWidth:"0px",minHeight:"0px"}},{name:"SplitterElement"}),i=o.forwardRef((n,c)=>{const{children:l,style:x,className:w,minSize:t,size:a,resizable:s,...B}=n,[q,R]=J(c),{vertical:E,reset:b}=o.useContext(Se),T=ne()?{width:"min-content",flex:"1 1 auto"}:{},r=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...T},[z,j]=o.useState(r),[u,D]=o.useState(!1),_=Ne();return o.useEffect(()=>{const $=new ResizeObserver(([W])=>{if(W.target.getBoundingClientRect().width!==0&&!u){const H=ne()?{width:"unset"}:{};j({flex:`0 0 ${W.target.getBoundingClientRect()[E?"height":"width"]}px`,...H}),D(!0)}});return a==="auto"&&R.current?$.observe(R.current):j({flex:`0 1 ${a}`}),()=>{$.disconnect()}},[a,u,E]),te(()=>{b&&(j(void 0),D(!1))},[b,a]),te(()=>{z===void 0&&j(r)},[z]),e.jsx("div",{ref:q,className:fe(_.splitterElement,_[E?"vertical":"horizontal"],w),style:{minHeight:E&&t?`${t}px`:void 0,minWidth:!E&&t?`${t}px`:void 0,...z,...x},...B,"data-min-size":t,children:l})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const De={splitterLayout:{display:"flex",overflow:"hidden",position:"relative",'&[data-splitter-orientation="horizontal"]':{flexDirection:"row",width:"100%","& > *":{height:"100%"}},'&[data-splitter-orientation="vertical"]':{flexDirection:"column",height:"100%","& > *":{width:"100%"}}}},Te="horizontal-grip",xe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ae=!1,Ve="SAP-icons-v4",Fe="@ui5/webcomponents-icons";X(Te,{pathData:xe,ltr:Ae,collection:Ve,packageName:Fe});const Oe="horizontal-grip",be="M460.5 138q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm-137 0q22 0 36.5 15t14.5 36T88 225t-36.5 15q-21 0-36-15t-15-36 15-36 36-15zm409 136q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q22 0 36.5 15t14.5 37q0 21-14.5 36t-36.5 15q-21 0-36-15t-15-36q0-22 15-37t36-15z",Pe=!1,We="SAP-icons-v5",He="@ui5/webcomponents-icons";X(Oe,{pathData:be,ltr:Pe,collection:We,packageName:He});ye();const oe="horizontal-grip",Me="vertical-grip",ze="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Ue=!1,Ke="SAP-icons-v4",Xe="@ui5/webcomponents-icons";X(Me,{pathData:ze,ltr:Ue,collection:Ke,packageName:Xe});const Ge="vertical-grip",Ce="M324.5 1q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0 136q21 0 36 15t15 36q0 22-15 36.5t-36 14.5q-22 0-37-14.5t-15-36.5q0-21 15-36t37-15zm-137 0q21 0 36 15t15 36q0 22-15 36.5t-36 14.5-36-14.5-15-36.5q0-21 15-36t36-15zm0-136q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm137 409q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0-137q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm0 137q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15z",Ye=!1,Je="SAP-icons-v5",Qe="@ui5/webcomponents-icons";X(Ge,{pathData:Ce,ltr:Ye,collection:Je,packageName:Qe});ye();const le="vertical-grip",Ze=Y({splitter:{touchAction:"none",position:"relative",display:"flex",willChange:"flex",backgroundColor:Ee.sapShell_Background,alignItems:"center",justifyContent:"center",boxSizing:"border-box","&[data-splitter-vertical=horizontal]":{cursor:"col-resize",borderLeft:h.SplitterBarBorderStyle,borderRight:h.SplitterBarBorderStyle,minWidth:L.ui5WcrSplitterSize,width:L.ui5WcrSplitterSize,height:"100%",flexDirection:"column","&:focus":{borderTop:h.SplitterBarBorderFix,borderRight:h.SplitterBarBorderFocus,borderBottom:h.SplitterBarBorderFix,borderLeft:h.SplitterBarBorderFocus,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"0.0625rem 100%",width:L.ui5WcrSplitterSize,height:"4rem"},"& $lineBefore":{backgroundImage:`linear-gradient(to top, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0.5rem 0",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to bottom, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=vertical]":{borderTop:h.SplitterBarBorderStyle,borderBottom:h.SplitterBarBorderStyle,cursor:"row-resize",minHeight:L.ui5WcrSplitterSize,height:L.ui5WcrSplitterSize,width:"100%",flexDirection:"row","&:focus":{borderTop:h.SplitterBarBorderFocus,borderRight:h.SplitterBarBorderFix,borderBottom:h.SplitterBarBorderFocus,borderLeft:h.SplitterBarBorderFix,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:L.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=verticalRtl]":{cursor:"row-resize",minHeight:L.ui5WcrSplitterSize,height:L.ui5WcrSplitterSize,width:"100%",flexDirection:"row","& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:L.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`}},"&:hover":{"& $lineBefore, & $lineAfter":{flexGrow:1,transition:"all 0.1s ease-in"}}},gripButton:{minWidth:"1.5rem !important",height:"1.625rem",zIndex:"1","&:active":{zIndex:"2"}},icon:{color:h.SplitterIconColor},lineBefore:{backgroundPosition:"center",backgroundRepeat:"no-repeat"},lineAfter:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{name:"Splitter"}),et={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},tt={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},K=o.forwardRef((n,c)=>{var Q;const{vertical:l}=n,x=ke("@ui5/webcomponents-react"),[w,t]=J(c),a=je({current:(Q=t.current)==null?void 0:Q.parentElement}),s=o.useRef(null),B=Ze(),q=o.useRef(null),R=o.useRef(null),E=o.useRef(null),b=o.useRef(null),T=o.useRef(0),r=l?et:tt,[z,j]=o.useState(!1),[u,D]=o.useState(["previousSibling","nextSibling"]),_=d=>{const C=T.current,y=t.current[u[0]],f=t.current[u[1]],p=z==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],m=p-s.current,I=t.current.getBoundingClientRect()[r.size],v=m<0,N=()=>{y.style.flex=`0 0 ${q.current+m}px`,f.nextSibling&&q.current+m>0&&(f.style.flex=`0 0 ${R.current-m}px`)};q.current+m>0&&p+(I-C)<=b.current&&(parseInt(y.dataset.minSize,10)<=q.current+m&&v&&N(),R.current-m>=parseInt(f.dataset.minSize,10)&&!v&&N()),!f[u[1]]&&!a&&(f.style.flex="1 0 0px")},$=(d,C)=>{var v,N,V,Z,ee;const y=t.current[u[0]],f=t.current[u[1]],p=t.current[u[0]].getBoundingClientRect(),m=t.current[u[1]].getBoundingClientRect(),I=C?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];I-((v=t.current.getBoundingClientRect())==null?void 0:v[r.positionRect])<0&&(y.style.flex="0 0 0px",(N=y.style)!=null&&N[r.min]?f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((p==null?void 0:p[r.size])-((V=y.style)==null?void 0:V[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(p==null?void 0:p[r.size])}px`),b.current<I&&(f.style.flex="0 0 0px",(Z=f.style)!=null&&Z[r.min]?y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((m==null?void 0:m[r.size])-((ee=f.style)==null?void 0:ee[r.min].replace("px","")))}px`:y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(m==null?void 0:m[r.size])}px`)},W=d=>{d.currentTarget.focus()},H=d=>{var C,y,f,p;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),j(d.pointerType??"mouse"),T.current=d.nativeEvent[r.offset],E.current=(C=t.current[u[0]].getBoundingClientRect())==null?void 0:C[r.end],t.current[u[1]][u[1]]?b.current=(y=t.current[u[1]][u[1]].getBoundingClientRect())==null?void 0:y[r.start]:b.current=t.current.parentElement.getBoundingClientRect()[r.end],q.current=(f=t.current[u[0]].getBoundingClientRect())==null?void 0:f[r.size],R.current=(p=t.current[u[1]].getBoundingClientRect())==null?void 0:p[r.size],s.current=d[`client${r.position}`])},ve=d=>{var y,f,p,m;const C=d.code??d.key;if(C==="ArrowRight"||C==="ArrowLeft"||C==="ArrowUp"||C==="ArrowDown"){d.preventDefault();let I=t.current[u[0]],v=t.current[u[1]];(C==="ArrowLeft"||C==="ArrowUp")&&(v=t.current[u[0]],I=t.current[u[1]]);const N=v.style[r.min]?((y=v.getBoundingClientRect())==null?void 0:y[r.size])-Number(v.style[r.min].replace("px","")):(f=v.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===t.current){const V=N>=20?20:N;v.style.flex=`0 0 ${((p=v.getBoundingClientRect())==null?void 0:p[r.size])-V}px`,I.style.flex=`0 0 ${((m=I.getBoundingClientRect())==null?void 0:m[r.size])+V}px`}}},M=d=>{$(d,z==="touch"),j(!1)};o.useEffect(()=>{const d=()=>{z==="touch"?(document.removeEventListener("touchmove",_),document.removeEventListener("touchend",M)):(document.removeEventListener("mouseup",M),document.removeEventListener("mousemove",_))};return z?z==="touch"?(document.addEventListener("touchmove",_),document.addEventListener("touchend",M)):(document.addEventListener("mousemove",_),document.addEventListener("mouseup",M)):d(),()=>{d()}},[z]),o.useEffect(()=>{D(a&&!l?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,l]);const U=qe(),we=U==="sap_fiori_3_hcb"||U==="sap_fiori_3_hcw"||U==="sap_horizon_hcb"||U==="sap_horizon_hcw";return e.jsxs("div",{className:B.splitter,tabIndex:0,onClick:W,onKeyDown:ve,onPointerDown:H,onMouseDown:H,ref:w,role:"separator","data-splitter-vertical":a&&l?"verticalRtl":l?"vertical":"horizontal",title:x.getText(re),"aria-orientation":l?"vertical":"horizontal","aria-label":x.getText(re),children:[e.jsx("div",{className:B.lineBefore}),we?e.jsx(g,{className:B.gripButton,tabIndex:-1,icon:l?oe:le,design:_e.Transparent}):e.jsx($e,{className:B.icon,name:l?oe:le}),e.jsx("div",{className:B.lineAfter})]})});K.displayName="Splitter";try{K.displayName="Splitter",K.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const G=n=>o.useMemo(()=>{if(o.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=o.Children.toArray(n==null?void 0:n.children).filter(o.isValidElement);let l=0;const x=[];return c.forEach((w,t)=>{const a=c[t+l];if(c.length-l-1>t&&(a.props.resizable||a.props.resizable===void 0)&&a.props.minSize!==void 0)c.splice(t+l+1,0,e.jsx(K,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),x.push(t+1+l-1),++l;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const s=c.findIndex(B=>B===a)-1;c[s].props.minSize===void 0&&c.splice(s,1),x.pop(),--l}}),x.forEach(w=>{var a,s;const t=(s=(a=c[w])==null?void 0:a.props)==null?void 0:s.size;t&&t!=="auto"&&(c[w]=o.cloneElement(c[w],{size:`calc(${t} - ${L.ui5WcrSplitterSize})`}))}),c},[n]);try{G.displayName="useConcatSplitterElements",G.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const nt=Y(De,{name:"SplitterLayout"}),k=o.forwardRef((n,c)=>{const{vertical:l,children:x,title:w,style:t,className:a,options:s,...B}=n,[q,R]=J(c),[E,b]=o.useState(void 0),T=nt(),r=o.useRef({width:void 0,height:void 0}),z=o.useRef(!0),j=o.useRef(!0),u=G({children:x??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:l});return o.useEffect(()=>{!z.current&&(s!=null&&s.resetOnChildrenChange)&&b(!0),z.current=!1},[x,s==null?void 0:s.resetOnChildrenChange]),o.useEffect(()=>{j.current||b(!0),j.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),o.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const D=new ResizeObserver(Le(([_])=>{const $=_.target.getBoundingClientRect();!l&&$.width!==r.current.width?(r.current.width=$.width,b(!0)):l&&$.height!==r.current.height&&(r.current.height=$.height,b(!0))},60));return D.observe(R.current),()=>{D.disconnect()}}},[l,s==null?void 0:s.resetOnSizeChange]),o.useEffect(()=>{E&&b(!1)},[E]),e.jsx(Se.Provider,{value:{vertical:l,reset:E},children:e.jsx("div",{style:{flexDirection:l?"column":"row",...t},title:w,...B,className:fe(T.splitterLayout,a),ref:q,"data-splitter-vertical":l,children:u})})});k.displayName="SplitterLayout";try{k.displayName="SplitterLayout",k.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const S=({text:n,background:c="transparent"})=>e.jsx(A,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(Be,{children:n})});try{S.displayName="SplitterElementContent",S.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const rt={title:"Layouts & Floorplans / SplitterLayout",component:k,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},F={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(k,{...n,children:[e.jsx(i,{children:e.jsx(S,{text:"Content 1"})}),e.jsx(i,{children:e.jsx(S,{text:`Content 2
            with
            multi
            lines
            `})}),e.jsx(i,{children:e.jsx(S,{text:"Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),e.jsx(i,{children:e.jsx(S,{text:"Content 4"})})]})}},O={render(n){return e.jsxs(k,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(S,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(S,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(S,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(S,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(S,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(S,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(S,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(S,{text:"Content 8",background:"lightsteelblue"})})]})}},P={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,l]=o.useState(n.vertical),x=w=>{l(w.detail.selectedItem.textContent==="Vertical")};return o.useEffect(()=>{l(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(A,{direction:"Column",children:[e.jsx(Re,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Ie,{onSelectionChange:x,children:[e.jsx(ie,{pressed:!c,children:"Horizontal"}),e.jsx(ie,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(k,{style:n.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(A,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 1"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(g,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(g,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(g,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(A,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 5"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(g,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(A,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 7"}),e.jsxs(k,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(g,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(g,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(g,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(g,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(A,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 12"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(g,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(g,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(g,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(g,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(g,{children:"Content 17"})})]})]})})]})]})}};var se,ae,ce;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      diffThreshold: 0.6
    }
  },
  render(args) {
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
  }
}`,...(ce=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,de,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=O.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,he,ge;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const it=["Default","LimitedAreas","Nested"],kt=Object.freeze(Object.defineProperty({__proto__:null,Default:F,LimitedAreas:O,Nested:P,__namedExportsOrder:it,default:rt},Symbol.toStringTag,{value:"Module"}));export{kt as C,F as D,O as L,P as N,i as S};
//# sourceMappingURL=SplitterLayout.stories-d59b1c79.js.map
