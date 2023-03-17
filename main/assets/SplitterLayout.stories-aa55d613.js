import{j as e,a as S,F as Ee}from"./jsx-runtime-670450c2.js";import{F}from"./index-8ba7ce6e.js";import{T as ke}from"./index-2eaff221.js";import{r as o}from"./index-f1f749bf.js";import{c as Se}from"./clsx.m-1229b3e0.js";import{c as J}from"./react-jss.esm-e54d2f1d.js";import{u as Q}from"./withWebComponent-65cd39a0.js";import{u as ne}from"./useIsomorphicLayoutEffect-a838da4a.js";import{a as re}from"./Device-208919c6.js";import{b as _}from"./CssSizeVariables-bd372cde.js";import{k as ye}from"./UI5Element-427ec721.js";import{h as G}from"./Icons-fe6e657a.js";import{T as Le}from"./ThemingParameters-f4b4144e.js";import{u as qe,aC as ie}from"./i18n-defaults-9da374be.js";import{a as h}from"./CustomVariables-fd831c35.js";import{u as _e,d as $e}from"./debounce-2c3bc435.js";import{u as Ie}from"./useCurrentTheme-7c2a370e.js";import{B as g}from"./index-ff6b689a.js";import{a as Re}from"./Button-bc3a11a1.js";import{I as Ne}from"./index-5f99446a.js";import{L as De}from"./index-3c969d52.js";import{S as Ae,a as oe}from"./index-225fb5c9.js";const be=o.createContext({vertical:!0,reset:!1}),Te=J({splitterElement:{display:"flex",overflow:"hidden",position:"relative",willChange:"flex-basis",minWidth:"0px",minHeight:"0px"}},{name:"SplitterElement"}),i=o.forwardRef((n,c)=>{const{children:l,style:z,className:B,minSize:t,size:a,resizable:s,...E}=n,[$,N]=Q(c),{vertical:k,reset:C}=o.useContext(be),V=re()?{width:"min-content",flex:"1 0 auto"}:{},r=a!=="auto"?{flex:`0 0 ${a}`}:{flex:"1 0 min-content",...V},[v,q]=o.useState(r),[u,T]=o.useState(!1),I=Te();return o.useEffect(()=>{const R=new ResizeObserver(([H])=>{if(H.target.getBoundingClientRect().width!==0&&!u){const M=re()?{width:"unset"}:{};q({flex:`0 0 ${H.target.getBoundingClientRect()[k?"height":"width"]}px`,...M}),T(!0)}});return a==="auto"&&N.current?R.observe(N.current):q({flex:`0 0 ${a}`}),()=>{R.disconnect()}},[a,u,k]),ne(()=>{C&&(q(void 0),T(!1))},[C,a]),ne(()=>{v===void 0&&q(r)},[v]),e("div",{ref:$,className:Se(I.splitterElement,I[k?"vertical":"horizontal"],B),style:{minHeight:k&&t?`${t}px`:void 0,minWidth:!k&&t?`${t}px`:void 0,...v,...z},...E,"data-min-size":t,children:l})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ve={splitterLayout:{display:"flex",overflow:"hidden",position:"relative",'&[data-splitter-orientation="horizontal"]':{flexDirection:"row",width:"100%","& > *":{height:"100%"}},'&[data-splitter-orientation="vertical"]':{flexDirection:"column",height:"100%","& > *":{width:"100%"}}}},Fe="horizontal-grip",ze="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Oe=!1,Pe="SAP-icons-v4",We="@ui5/webcomponents-icons";G(Fe,{pathData:ze,ltr:Oe,collection:Pe,packageName:We});const je="horizontal-grip",Ce="M460.5 138q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm-136 0q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm-137 0q22 0 36.5 15t14.5 36T88 225t-36.5 15q-21 0-36-15t-15-36 15-36 36-15zm409 136q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm-136 0q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q22 0 36.5 15t14.5 37q0 21-14.5 36t-36.5 15q-21 0-36-15t-15-36q0-22 15-37t36-15z",He=!1,Me="SAP-icons-v5",Ue="@ui5/webcomponents-icons";G(je,{pathData:Ce,ltr:He,collection:Me,packageName:Ue});ye("sap_horizon");const le="horizontal-grip",Ke="vertical-grip",ve="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",Xe=!1,Ge="SAP-icons-v4",Ye="@ui5/webcomponents-icons";G(Ke,{pathData:ve,ltr:Xe,collection:Ge,packageName:Ye});const Je="vertical-grip",xe="M324.5 1q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0 136q21 0 36 15t15 36q0 22-15 36.5t-36 14.5q-22 0-37-14.5t-15-36.5q0-21 15-36t37-15zm-137 0q21 0 36 15t15 36q0 22-15 36.5t-36 14.5-36-14.5-15-36.5q0-21 15-36t36-15zm0-136q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15zm137 409q21 0 36 15t15 36-15 36-36 15q-22 0-37-15t-15-36 15-36 37-15zm0-137q21 0 36 15t15 37q0 21-15 36t-36 15q-22 0-37-15t-15-36q0-22 15-37t37-15zm-137 0q21 0 36 15t15 37q0 21-15 36t-36 15-36-15-15-36q0-22 15-37t36-15zm0 137q21 0 36 15t15 36-15 36-36 15-36-15-15-36 15-36 36-15z",Qe=!1,Ze="SAP-icons-v5",et="@ui5/webcomponents-icons";G(Je,{pathData:xe,ltr:Qe,collection:Ze,packageName:et});ye("sap_horizon");const se="vertical-grip",tt=J({splitter:{touchAction:"none",position:"relative",display:"flex",willChange:"flex",backgroundColor:Le.sapShell_Background,alignItems:"center",justifyContent:"center",boxSizing:"border-box","&[data-splitter-vertical=horizontal]":{cursor:"col-resize",borderLeft:h.SplitterBarBorderStyle,borderRight:h.SplitterBarBorderStyle,minWidth:_.sapWcrSplitterSize,width:_.sapWcrSplitterSize,height:"100%",flexDirection:"column","&:focus":{borderTop:h.SplitterBarBorderFix,borderRight:h.SplitterBarBorderFocus,borderBottom:h.SplitterBarBorderFix,borderLeft:h.SplitterBarBorderFocus,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"0.0625rem 100%",width:_.sapWcrSplitterSize,height:"4rem"},"& $lineBefore":{backgroundImage:`linear-gradient(to top, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0.5rem 0",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to bottom, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=vertical]":{borderTop:h.SplitterBarBorderStyle,borderBottom:h.SplitterBarBorderStyle,cursor:"row-resize",minHeight:_.sapWcrSplitterSize,height:_.sapWcrSplitterSize,width:"100%",flexDirection:"row","&:focus":{borderTop:h.SplitterBarBorderFocus,borderRight:h.SplitterBarBorderFix,borderBottom:h.SplitterBarBorderFocus,borderLeft:h.SplitterBarBorderFix,outlineOffset:"-0.20rem",outline:h.SplitterBarOutline},"& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:_.sapWcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`}},"&[data-splitter-vertical=verticalRtl]":{cursor:"row-resize",minHeight:_.sapWcrSplitterSize,height:_.sapWcrSplitterSize,width:"100%",flexDirection:"row","& $lineBefore, & $lineAfter":{backgroundSize:"100% 0.0625rem ",width:"5rem",height:_.sapWcrSplitterSize},"& $lineBefore":{backgroundImage:`linear-gradient(to right, ${h.SplitterContentBorderColor}, transparent)`},"& $icon":{padding:"0 0.5rem",zIndex:1},"& $lineAfter":{backgroundImage:`linear-gradient(to left, ${h.SplitterContentBorderColor}, transparent)`}},"&:hover":{"& $lineBefore, & $lineAfter":{flexGrow:1,transition:"all 0.1s ease-in"}}},gripButton:{minWidth:"1.5rem !important",height:"1.625rem",zIndex:"1","&:active":{zIndex:"2"}},icon:{color:h.SplitterIconColor},lineBefore:{backgroundPosition:"center",backgroundRepeat:"no-repeat"},lineAfter:{backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{name:"Splitter"}),nt={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},rt={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},X=o.forwardRef((n,c)=>{var Z;const{vertical:l}=n,z=qe("@ui5/webcomponents-react"),[B,t]=Q(c),a=_e({current:(Z=t.current)==null?void 0:Z.parentElement}),s=o.useRef(null),E=tt(),$=o.useRef(null),N=o.useRef(null),k=o.useRef(null),C=o.useRef(null),V=o.useRef(0),r=l?nt:rt,[v,q]=o.useState(!1),[u,T]=o.useState(["previousSibling","nextSibling"]),I=d=>{const x=V.current,y=t.current[u[0]],f=t.current[u[1]],m=v==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],p=m-s.current,D=t.current.getBoundingClientRect()[r.size],w=p<0,A=()=>{y.style.flex=`0 0 ${$.current+p}px`,f.nextSibling&&$.current+p>0&&(f.style.flex=`0 0 ${N.current-p}px`)};$.current+p>0&&m+(D-x)<=C.current&&(parseInt(y.dataset.minSize,10)<=$.current+p&&w&&A(),N.current-p>=parseInt(f.dataset.minSize,10)&&!w&&A()),!f[u[1]]&&!a&&(f.style.flex="1 0 0px")},R=(d,x)=>{var w,A,O,ee,te;const y=t.current[u[0]],f=t.current[u[1]],m=t.current[u[0]].getBoundingClientRect(),p=t.current[u[1]].getBoundingClientRect(),D=x?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];D-((w=t.current.getBoundingClientRect())==null?void 0:w[r.positionRect])<0&&(y.style.flex="0 0 0px",(A=y.style)!=null&&A[r.min]?f.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((m==null?void 0:m[r.size])-((O=y.style)==null?void 0:O[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(m==null?void 0:m[r.size])}px`),C.current<D&&(f.style.flex="0 0 0px",(ee=f.style)!=null&&ee[r.min]?y.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((p==null?void 0:p[r.size])-((te=f.style)==null?void 0:te[r.min].replace("px","")))}px`:y.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(p==null?void 0:p[r.size])}px`)},H=d=>{d.currentTarget.focus()},M=d=>{var x,y,f,m;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),q(d.pointerType??"mouse"),V.current=d.nativeEvent[r.offset],k.current=(x=t.current[u[0]].getBoundingClientRect())==null?void 0:x[r.end],t.current[u[1]][u[1]]?C.current=(y=t.current[u[1]][u[1]].getBoundingClientRect())==null?void 0:y[r.start]:C.current=t.current.parentElement.getBoundingClientRect()[r.end],$.current=(f=t.current[u[0]].getBoundingClientRect())==null?void 0:f[r.size],N.current=(m=t.current[u[1]].getBoundingClientRect())==null?void 0:m[r.size],s.current=d[`client${r.position}`])},we=d=>{var y,f,m,p;const x=d.code??d.key;if(x==="ArrowRight"||x==="ArrowLeft"||x==="ArrowUp"||x==="ArrowDown"){d.preventDefault();let D=t.current[u[0]],w=t.current[u[1]];(x==="ArrowLeft"||x==="ArrowUp")&&(w=t.current[u[0]],D=t.current[u[1]]);const A=w.style[r.min]?((y=w.getBoundingClientRect())==null?void 0:y[r.size])-Number(w.style[r.min].replace("px","")):(f=w.getBoundingClientRect())==null?void 0:f[r.size];if(document.activeElement===t.current){const O=A>=20?20:A;w.style.flex=`0 0 ${((m=w.getBoundingClientRect())==null?void 0:m[r.size])-O}px`,D.style.flex=`0 0 ${((p=D.getBoundingClientRect())==null?void 0:p[r.size])+O}px`}}},U=d=>{R(d,v==="touch"),q(!1)};o.useEffect(()=>{const d=()=>{v==="touch"?(document.removeEventListener("touchmove",I),document.removeEventListener("touchend",U)):(document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",I))};return v?v==="touch"?(document.addEventListener("touchmove",I),document.addEventListener("touchend",U)):(document.addEventListener("mousemove",I),document.addEventListener("mouseup",U)):d(),()=>{d()}},[v]),o.useEffect(()=>{T(a&&!l?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,l]);const K=Ie(),Be=K==="sap_fiori_3_hcb"||K==="sap_fiori_3_hcw"||K==="sap_horizon_hcb"||K==="sap_horizon_hcw";return S("div",{className:E.splitter,tabIndex:0,onClick:H,onKeyDown:we,onPointerDown:M,onMouseDown:M,ref:B,role:"separator","data-splitter-vertical":a&&l?"verticalRtl":l?"vertical":"horizontal",title:z.getText(ie),"aria-orientation":l?"vertical":"horizontal","aria-label":z.getText(ie),children:[e("div",{className:E.lineBefore}),Be?e(g,{className:E.gripButton,tabIndex:-1,icon:l?le:se,design:Re.Transparent}):e(Ne,{className:E.icon,name:l?le:se}),e("div",{className:E.lineAfter})]})});X.displayName="Splitter";try{X.displayName="Splitter",X.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Y=n=>o.useMemo(()=>{if(o.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=o.Children.toArray(n==null?void 0:n.children).filter(o.isValidElement);let l=0;const z=[];return c.forEach((B,t)=>{const a=c[t+l];if(c.length-l-1>t&&(a.props.resizable||a.props.resizable===void 0)&&a.props.minSize!==void 0)c.splice(t+l+1,0,e(X,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),z.push(t+1+l-1),++l;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const s=c.findIndex(E=>E===a)-1;c[s].props.minSize===void 0&&c.splice(s,1),z.pop(),--l}}),z.forEach(B=>{var a,s;const t=(s=(a=c[B])==null?void 0:a.props)==null?void 0:s.size;t&&t!=="auto"&&(c[B]=o.cloneElement(c[B],{size:`calc(${t} - ${_.sapWcrSplitterSize})`}))}),c},[n]);try{Y.displayName="useConcatSplitterElements",Y.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const it=J(Ve,{name:"SplitterLayout"}),L=o.forwardRef((n,c)=>{const{vertical:l,children:z,title:B,style:t,className:a,options:s,...E}=n,[$,N]=Q(c),[k,C]=o.useState(void 0),V=it(),r=o.useRef({width:void 0,height:void 0}),v=o.useRef(!0),q=o.useRef(!0),u=Y({children:z??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:l});return o.useEffect(()=>{!v.current&&(s!=null&&s.resetOnChildrenChange)&&C(!0),v.current=!1},[z,s==null?void 0:s.resetOnChildrenChange]),o.useEffect(()=>{q.current||C(!0),q.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),o.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const T=new ResizeObserver($e(([I])=>{const R=I.target.getBoundingClientRect();!l&&R.width!==r.current.width?(r.current.width=R.width,C(!0)):l&&R.height!==r.current.height&&(r.current.height=R.height,C(!0))},60));return T.observe(N.current),()=>{T.disconnect()}}},[l,s==null?void 0:s.resetOnSizeChange]),o.useEffect(()=>{k&&C(!1)},[k]),e(be.Provider,{value:{vertical:l,reset:k},children:e("div",{style:{flexDirection:l?"column":"row",...t},title:B,...E,className:Se(V.splitterLayout,a),ref:$,"data-splitter-vertical":l,children:u})})});L.displayName="SplitterLayout";try{L.displayName="SplitterLayout",L.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const b=({text:n,background:c="transparent"})=>e(F,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e(ke,{children:n})});try{b.displayName="SplitterElementContent",b.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const ot={title:"Layouts & Floorplans / SplitterLayout",component:L,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.3}}},P={render(n){return S(L,{...n,children:[e(i,{children:e(b,{text:"Content 1"})}),e(i,{children:e(b,{text:`Content 2
            with
            multi
            lines
            `})}),e(i,{children:e(b,{text:"Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),e(i,{children:e(b,{text:"Content 4"})})]})}},W={render(n){return S(L,{...n,children:[e(i,{size:"10%",children:e(b,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e(i,{children:e(b,{text:"Content 2",background:"skyblue"})}),e(i,{minSize:200,children:e(b,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e(i,{children:e(b,{text:"Content 4",background:"paleturquoise"})}),e(i,{children:e(b,{text:"Content 5",background:"lightskyblue"})}),e(i,{resizable:!1,size:"150px",children:e(b,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e(i,{children:e(b,{text:"Content 7",background:"aliceblue"})}),e(i,{children:e(b,{text:"Content 8",background:"lightsteelblue"})})]})}},j={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,l]=o.useState(n.vertical),z=B=>{l(B.detail.selectedItem.textContent==="Vertical")};return o.useEffect(()=>{l(n.vertical)},[n.vertical]),S(Ee,{children:[S(F,{direction:"Column",children:[e(De,{showColon:!0,children:"Orientation of outer SplitterLayout"}),S(Ae,{onSelectionChange:z,children:[e(oe,{pressed:!c,children:"Horizontal"}),e(oe,{pressed:c,children:"Vertical"})]})]}),e("br",{}),e("br",{}),S(L,{style:n.style,vertical:c,children:[e(i,{size:"40%",children:S(F,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(g,{style:{width:"100%"},children:"Content 1"}),S(L,{style:{height:"100%"},children:[e(i,{style:{background:"lightblue"},size:"auto",children:e(g,{children:"Content 2"})}),e(i,{style:{background:"skyblue"},size:"10%",children:e(g,{"data-auto":!0,children:"Content 3"})}),e(i,{style:{background:"cadetblue"},size:"auto",children:e(g,{children:"Content 4"})}),e(i,{style:{background:"lightskyblue"},size:"60%",children:S(F,{direction:"Column",style:{width:"100%"},children:[e(g,{style:{width:"100%"},children:"Content 5"}),S(L,{style:{height:"100%"},children:[e(i,{style:{background:"#E29713"},children:e(g,{children:"Content 6"})}),e(i,{size:"50%",children:S(F,{direction:"Column",style:{width:"100%",height:"100%"},children:[e(g,{style:{width:"100%"},children:"Content 7"}),S(L,{vertical:!0,style:{height:"100%"},children:[e(i,{style:{background:"lightgrey"},size:"50%",children:e(g,{children:"Content 8"})}),e(i,{style:{background:"grey"},size:"50%",children:e(g,{children:"Content 9"})})]})]})}),e(i,{style:{background:"#D3A95E"},children:e(g,{children:"Content 10"})})]})]})})]})]})}),e(i,{size:"20%",children:e(g,{style:{width:"100%"},children:"Content 11"})}),e(i,{children:S(F,{direction:"Column",style:{width:"100%"},children:[e(g,{style:{width:"100%"},children:"Content 12"}),S(L,{style:{height:"100%"},children:[e(i,{style:{background:"forestgreen"},size:"15%",children:e(g,{children:"Content 13"})}),e(i,{style:{background:"darkgreen"},size:"15%",children:e(g,{children:"Content 14"})}),e(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e(g,{children:"Content 15"})}),e(i,{style:{background:"green"},size:"15%",children:e(g,{children:"Content 16"})}),e(i,{style:{background:"seagreen"},size:"15%",children:e(g,{children:"Content 17"})})]})]})})]})]})}};var ae,ce,ue;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ge,fe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const lt=["Default","LimitedAreas","Nested"],qt=Object.freeze(Object.defineProperty({__proto__:null,Default:P,LimitedAreas:W,Nested:j,__namedExportsOrder:lt,default:ot},Symbol.toStringTag,{value:"Module"}));export{qt as C,P as D,W as L,j as N,i as S};
//# sourceMappingURL=SplitterLayout.stories-aa55d613.js.map
