import{j as e}from"./jsx-runtime-d079401a.js";import{F as A}from"./index-12e0da73.js";import{T as Be}from"./index-743fc8f1.js";import{r as o}from"./index-f1f2c4b1.js";import{c as fe}from"./clsx-1229b3e0.js";import{c as Q}from"./react-jss.esm-2e5f50f2.js";import{u as Z}from"./withWebComponent-70ea33bf.js";import{u as te}from"./useIsomorphicLayoutEffect-c49de97d.js";import{q as ne,o as Se}from"./UI5Element-9ae3ac4a.js";import{C as L}from"./CssSizeVariables-596b7aba.js";import{r as Y}from"./Icons-aa504494.js";import{T as Ee}from"./ThemingParameters-7e2e4e30.js";import{u as ke,as as re}from"./i18n-defaults-f9eebbcc.js";import{C as h}from"./CustomVariables-f4d4caba.js";import{u as je}from"./useIsRTL-fd85e99a.js";import{u as Le}from"./useCurrentTheme-87e0e271.js";import{B as g}from"./index-53a69d9e.js";import{B as _e}from"./Button-bda40b74.js";import{I as $e}from"./index-f84a0652.js";import{d as qe}from"./debounce-5c77766a.js";import{L as Re}from"./index-596aea41.js";import{S as Ie,a as ie}from"./index-ea8179dd.js";const ye=o.createContext({vertical:!0,reset:!1}),Ne=Q({splitterElement:{display:"flex",overflow:"hidden",position:"relative",willChange:"flex-basis",minWidth:"0px",minHeight:"0px"}},{name:"SplitterElement"}),i=o.forwardRef((n,c)=>{const{children:l,style:x,className:w,minSize:t,size:a,resizable:s,...B}=n,[_,R]=Z(c),{vertical:E,reset:b}=o.useContext(ye),D=ne()?{width:"min-content",flex:"1 1 auto"}:{},r=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...D},[z,j]=o.useState(r),[u,T]=o.useState(!1),$=Ne();return o.useEffect(()=>{const q=new ResizeObserver(([W])=>{if(W.target.getBoundingClientRect().width!==0&&!u){const M=ne()?{width:"unset"}:{};j({flex:`0 0 ${W.target.getBoundingClientRect()[E?"height":"width"]}px`,...M}),T(!0)}});return a==="auto"&&R.current?q.observe(R.current):j({flex:`0 1 ${a}`}),()=>{q.disconnect()}},[a,u,E]),te(()=>{b&&(j(void 0),T(!1))},[b,a]),te(()=>{z===void 0&&j(r)},[z]),e.jsx("div",{ref:_,className:fe($.splitterElement,$[E?"vertical":"horizontal"],w),style:{minHeight:E&&t?`${t}px`:void 0,minWidth:!E&&t?`${t}px`:void 0,...z,...x},...B,"data-min-size":t,children:l})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={splitterLayout:{display:"flex",overflow:"hidden",position:"relative",'&[data-splitter-orientation="horizontal"]':{flexDirection:"row",width:"100%","& > *":{height:"100%"}},'&[data-splitter-orientation="vertical"]':{flexDirection:"column",height:"100%","& > *":{width:"100%"}}}},De="horizontal-grip",xe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ae=!1,Ve="SAP-icons-v4",Fe="@ui5/webcomponents-icons";Y(De,{pathData:xe,ltr:Ae,collection:Ve,packageName:Fe});const Oe="horizontal-grip",be="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Pe=!1,We="SAP-icons-v5",Me="@ui5/webcomponents-icons";Y(Oe,{pathData:be,ltr:Pe,collection:We,packageName:Me});Se();const oe="horizontal-grip",He="vertical-grip",ze="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Ue=!1,Ke="SAP-icons-v4",Xe="@ui5/webcomponents-icons";Y(He,{pathData:ze,ltr:Ue,collection:Ke,packageName:Xe});const Ge="vertical-grip",Ce="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Ye=!1,Je="SAP-icons-v5",Qe="@ui5/webcomponents-icons";Y(Ge,{pathData:Ce,ltr:Ye,collection:Je,packageName:Qe});Se();const le="vertical-grip",Ze=Q({splitter:{touchAction:"none",position:"relative",display:"flex",willChange:"flex",backgroundColor:Ee.sapShell_Background,alignItems:"center",justifyContent:"center",boxSizing:"border-box","&[data-splitter-vertical=horizontal]":{cursor:"col-resize",borderLeft:h.SplitterBarBorderStyle,borderRight:h.SplitterBarBorderStyle,minWidth:L.ui5WcrSplitterSize,width:L.ui5WcrSplitterSize,height:"100%",flexDirection:"column","&:focus":{borderTop:h.SplitterBarBorderFix,borderRight:h.SplitterBarBorderFocus,borderBottom:h.SplitterBarBorderFix,borderLeft:h.SplitterBarBorderFocus,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"0.0625rem 100%",width:L.ui5WcrSplitterSize,height:"4rem"},"& $lineBefore":{backgroundImage:`linear-gradient(to top, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0.5rem 0",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to bottom, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=vertical]":{borderTop:h.SplitterBarBorderStyle,borderBottom:h.SplitterBarBorderStyle,cursor:"row-resize",minHeight:L.ui5WcrSplitterSize,height:L.ui5WcrSplitterSize,width:"100%",flexDirection:"row","&:focus":{borderTop:h.SplitterBarBorderFocus,borderRight:h.SplitterBarBorderFix,borderBottom:h.SplitterBarBorderFocus,borderLeft:h.SplitterBarBorderFix,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:L.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=verticalRtl]":{cursor:"row-resize",minHeight:L.ui5WcrSplitterSize,height:L.ui5WcrSplitterSize,width:"100%",flexDirection:"row","& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:L.ui5WcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`}},"&:hover":{"& $lineBefore, & $lineAfter":{flexGrow:1,transition:"all 0.1s ease-in"}}},gripButton:{minWidth:"1.5rem !important",height:"1.625rem",zIndex:"1","&:active":{zIndex:"2"}},icon:{color:h.SplitterIconColor},lineBefore:{backgroundPosition:"center",backgroundRepeat:"no-repeat"},lineAfter:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{name:"Splitter"}),et={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},tt={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},G=o.forwardRef((n,c)=>{var ee;const{vertical:l}=n,x=ke("@ui5/webcomponents-react"),[w,t]=Z(c),a=je({current:(ee=t.current)==null?void 0:ee.parentElement}),s=o.useRef(null),B=Ze(),_=o.useRef(null),R=o.useRef(null),E=o.useRef(null),b=o.useRef(null),D=o.useRef(0),r=l?et:tt,[z,j]=o.useState(!1),[u,T]=o.useState(["previousSibling","nextSibling"]),$=d=>{const C=D.current,S=t.current[u[0]],f=t.current[u[1]],p=z==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],m=p-s.current,I=t.current.getBoundingClientRect()[r.size],v=m<0,N=()=>{S.style.flex=`0 0 ${_.current+m}px`,f.nextSibling&&_.current+m>0&&(f.style.flex=`0 0 ${R.current-m}px`)};_.current+m>0&&p+(I-C)<=b.current&&(parseInt(S.dataset.minSize,10)<=_.current+m&&v&&N(),R.current-m>=parseInt(f.dataset.minSize,10)&&!v&&N()),!f[u[1]]&&!a&&(f.style.flex="1 0 0px")},q=(d,C)=>{var v,N,V,K,X;const S=t.current[u[0]],f=t.current[u[1]],p=t.current[u[0]].getBoundingClientRect(),m=t.current[u[1]].getBoundingClientRect(),I=C?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];I-((v=t.current.getBoundingClientRect())==null?void 0:v[r.positionRect])<0&&(S.style.flex="0 0 0px",(N=S.style)!=null&&N[r.min]?f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((p==null?void 0:p[r.size])-((V=S.style)==null?void 0:V[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(p==null?void 0:p[r.size])}px`),b.current<I&&(f.style.flex="0 0 0px",(K=f.style)!=null&&K[r.min]?S.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((m==null?void 0:m[r.size])-((X=f.style)==null?void 0:X[r.min].replace("px","")))}px`:S.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(m==null?void 0:m[r.size])}px`)},W=d=>{d.currentTarget.focus()},M=d=>{var C,S,f,p;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),j(d.pointerType??"mouse"),D.current=d.nativeEvent[r.offset],E.current=(C=t.current[u[0]].getBoundingClientRect())==null?void 0:C[r.end],t.current[u[1]][u[1]]?b.current=(S=t.current[u[1]][u[1]].getBoundingClientRect())==null?void 0:S[r.start]:b.current=t.current.parentElement.getBoundingClientRect()[r.end],_.current=(f=t.current[u[0]].getBoundingClientRect())==null?void 0:f[r.size],R.current=(p=t.current[u[1]].getBoundingClientRect())==null?void 0:p[r.size],s.current=d[`client${r.position}`])},ve=d=>{var S,f,p,m;const C=d.code??d.key;if(C==="ArrowRight"||C==="ArrowLeft"||C==="ArrowUp"||C==="ArrowDown"){d.preventDefault();let I=t.current[u[0]],v=t.current[u[1]];(C==="ArrowLeft"||C==="ArrowUp")&&(v=t.current[u[0]],I=t.current[u[1]]);const N=v.style[r.min]?((S=v.getBoundingClientRect())==null?void 0:S[r.size])-Number(v.style[r.min].replace("px","")):(f=v.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===t.current){const V=N>=20?20:N,K=(p=I.getBoundingClientRect())==null?void 0:p[r.size],X=(m=v.getBoundingClientRect())==null?void 0:m[r.size];v.style.flex=`0 0 ${X-V}px`,I.style.flex=`0 0 ${K+V}px`}}},H=d=>{q(d,z==="touch"),j(!1)};o.useEffect(()=>{const d=()=>{z==="touch"?(document.removeEventListener("touchmove",$),document.removeEventListener("touchend",H)):(document.removeEventListener("mouseup",H),document.removeEventListener("mousemove",$))};return z?z==="touch"?(document.addEventListener("touchmove",$),document.addEventListener("touchend",H)):(document.addEventListener("mousemove",$),document.addEventListener("mouseup",H)):d(),()=>{d()}},[z]),o.useEffect(()=>{T(a&&!l?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,l]);const U=Le(),we=U==="sap_fiori_3_hcb"||U==="sap_fiori_3_hcw"||U==="sap_horizon_hcb"||U==="sap_horizon_hcw";return e.jsxs("div",{className:B.splitter,tabIndex:0,onClick:W,onKeyDown:ve,onPointerDown:M,onMouseDown:M,ref:w,role:"separator","data-splitter-vertical":a&&l?"verticalRtl":l?"vertical":"horizontal",title:x.getText(re),"aria-orientation":l?"vertical":"horizontal","aria-label":x.getText(re),children:[e.jsx("div",{className:B.lineBefore}),we?e.jsx(g,{className:B.gripButton,tabIndex:-1,icon:l?oe:le,design:_e.Transparent}):e.jsx($e,{className:B.icon,name:l?oe:le}),e.jsx("div",{className:B.lineAfter})]})});G.displayName="Splitter";try{G.displayName="Splitter",G.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const J=n=>o.useMemo(()=>{if(o.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=o.Children.toArray(n==null?void 0:n.children).filter(o.isValidElement);let l=0;const x=[];return c.forEach((w,t)=>{const a=c[t+l];if(c.length-l-1>t&&(a.props.resizable||a.props.resizable===void 0)&&a.props.minSize!==void 0)c.splice(t+l+1,0,e.jsx(G,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),x.push(t+1+l-1),++l;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const s=c.findIndex(B=>B===a)-1;c[s].props.minSize===void 0&&c.splice(s,1),x.pop(),--l}}),x.forEach(w=>{var a,s;const t=(s=(a=c[w])==null?void 0:a.props)==null?void 0:s.size;t&&t!=="auto"&&(c[w]=o.cloneElement(c[w],{size:`calc(${t} - ${L.ui5WcrSplitterSize})`}))}),c},[n]);try{J.displayName="useConcatSplitterElements",J.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const nt=Q(Te,{name:"SplitterLayout"}),k=o.forwardRef((n,c)=>{const{vertical:l,children:x,title:w,style:t,className:a,options:s,...B}=n,[_,R]=Z(c),[E,b]=o.useState(void 0),D=nt(),r=o.useRef({width:void 0,height:void 0}),z=o.useRef(!0),j=o.useRef(!0),u=J({children:x??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:l});return o.useEffect(()=>{!z.current&&(s!=null&&s.resetOnChildrenChange)&&b(!0),z.current=!1},[x,s==null?void 0:s.resetOnChildrenChange]),o.useEffect(()=>{j.current||b(!0),j.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),o.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const T=new ResizeObserver(qe(([$])=>{const q=$.target.getBoundingClientRect();!l&&q.width!==r.current.width?(r.current.width=q.width,b(!0)):l&&q.height!==r.current.height&&(r.current.height=q.height,b(!0))},60));return T.observe(R.current),()=>{T.disconnect()}}},[l,s==null?void 0:s.resetOnSizeChange]),o.useEffect(()=>{E&&b(!1)},[E]),e.jsx(ye.Provider,{value:{vertical:l,reset:E},children:e.jsx("div",{style:{flexDirection:l?"column":"row",...t},title:w,...B,className:fe(D.splitterLayout,a),ref:_,"data-splitter-vertical":l,children:u})})});k.displayName="SplitterLayout";try{k.displayName="SplitterLayout",k.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const y=({text:n,background:c="transparent"})=>e.jsx(A,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(Be,{children:n})});try{y.displayName="SplitterElementContent",y.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const rt={title:"Layouts & Floorplans / SplitterLayout",component:k,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},F={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(k,{...n,children:[e.jsx(i,{children:e.jsx(y,{text:"Content 1"})}),e.jsx(i,{children:e.jsx(y,{text:`Content 2
            with
            multi
            lines
            `})}),e.jsx(i,{children:e.jsx(y,{text:"Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),e.jsx(i,{children:e.jsx(y,{text:"Content 4"})})]})}},O={render(n){return e.jsxs(k,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(y,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(y,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(y,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(y,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(y,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(y,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(y,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(y,{text:"Content 8",background:"lightsteelblue"})})]})}},P={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,l]=o.useState(n.vertical),x=w=>{l(w.detail.selectedItem.textContent==="Vertical")};return o.useEffect(()=>{l(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(A,{direction:"Column",children:[e.jsx(Re,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Ie,{onSelectionChange:x,children:[e.jsx(ie,{pressed:!c,children:"Horizontal"}),e.jsx(ie,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(k,{style:n.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(A,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 1"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(g,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(g,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(g,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(A,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 5"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(g,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(A,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 7"}),e.jsxs(k,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(g,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(g,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(g,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(g,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(A,{direction:"Column",style:{width:"100%"},children:[e.jsx(g,{style:{width:"100%"},children:"Content 12"}),e.jsxs(k,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(g,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(g,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(g,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(g,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(g,{children:"Content 17"})})]})]})})]})]})}};var se,ae,ce;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
//# sourceMappingURL=SplitterLayout.stories-b3f16a01.js.map
