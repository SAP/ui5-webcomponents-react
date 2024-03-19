import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{F as j}from"./index-0grRi0wq.js";import{T as D}from"./index-FxYIONdV.js";import{r as l}from"./index-OjgoNOWw.js";import{c as me}from"./clsx-Zbgk8kpT.js";import{u as J}from"./withWebComponent-LTFbYRvs.js";import{u as Q}from"./useStylesheet-MWHnOiB7.js";import{u as Z}from"./useIsomorphicLayoutEffect-s31TYDr7.js";import{m as ee,k as ge}from"./Boot-vTaFuwdG.js";import{r as Y}from"./Icons-Vbmmw7bO.js";import{u as ze,ae as te}from"./i18n-defaults-Ph_9MK3s.js";import{u as Ce}from"./useIsRTL-v9TqQ2ve.js";import{u as we}from"./useCurrentTheme-ymwiCprU.js";import{B as m}from"./index-jDSyQPhY.js";import{B as Be}from"./Button-DcwyQdV9.js";import{I as je}from"./index-k1xhh_qU.js";import{d as Ee}from"./debounce-F9irgL9Y.js";import{L as ke}from"./index-iSZg5FOa.js";import{a as Le,S as ne}from"./index-_Bz-P6cy.js";const fe=l.createContext({vertical:!0,reset:!1}),Ne={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"},qe={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},i=l.forwardRef((n,c)=>{const{children:o,style:S,className:b,minSize:t,size:u,resizable:s,...C}=n,[T,R]=J(c),{vertical:_,reset:w}=l.useContext(fe),r=ee()?{width:"min-content",flex:"1 1 auto"}:{},v=u!=="auto"?{flex:`0 1 ${u}`}:{flex:"1 0 min-content",...r},[E,a]=l.useState(v),[I,k]=l.useState(!1);return Q(Ne,i.displayName),l.useEffect(()=>{const L=new ResizeObserver(([M])=>{if(M.target.getBoundingClientRect().width!==0&&!I){const H=ee()?{width:"unset"}:{};a({flex:`0 0 ${M.target.getBoundingClientRect()[_?"height":"width"]}px`,...H}),k(!0)}});return u==="auto"&&R.current?L.observe(R.current):a({flex:`0 1 ${u}`}),()=>{L.disconnect()}},[u,I,_]),Z(()=>{w&&(a(void 0),k(!1))},[w,u]),Z(()=>{E===void 0&&a(v)},[E]),e.jsx("div",{ref:T,className:me(qe.splitterElement,b),style:{minHeight:_&&t?`${t}px`:void 0,minWidth:!_&&t?`${t}px`:void 0,...E,...S},...C,"data-min-size":t,children:o})});i.defaultProps={minSize:0,size:"auto"};i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"0"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"},Ie={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},Re="horizontal-grip",Se="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",$e=!1,Ae="SAP-icons-v4",De="@ui5/webcomponents-icons";Y(Re,{pathData:Se,ltr:$e,collection:Ae,packageName:De});const Ve="horizontal-grip",_e="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Fe=!1,Oe="SAP-icons-v5",Pe="@ui5/webcomponents-icons";Y(Ve,{pathData:_e,ltr:Fe,collection:Oe,packageName:Pe});ge();const re="horizontal-grip",Me="vertical-grip",ye="M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z",He=!1,Ue="SAP-icons-v4",We="@ui5/webcomponents-icons";Y(Me,{pathData:ye,ltr:He,collection:Ue,packageName:We});const Ke="vertical-grip",xe="M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Xe=!1,Ye="SAP-icons-v5",Ge="@ui5/webcomponents-icons";Y(Ke,{pathData:xe,ltr:Xe,collection:Ye,packageName:Ge});ge();const ie="vertical-grip",Je={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"},A={splitter:"Splitter_splitter_1e52h_1",icon:"Splitter_icon_1e52h_17",lineBefore:"Splitter_lineBefore_1e52h_32",lineAfter:"Splitter_lineAfter_1e52h_33",gripButton:"Splitter_gripButton_1e52h_91"},Qe={start:"top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Ze={start:"left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},P=l.forwardRef((n,c)=>{const{vertical:o}=n,S=ze("@ui5/webcomponents-react"),[b,t]=J(c),u=Ce(t),s=l.useRef(null);Q(Je,P.displayName);const C=l.useRef(null),T=l.useRef(null),R=l.useRef(null),_=l.useRef(null),w=l.useRef(0),r=o?Qe:Ze,[v,E]=l.useState(!1),[a,I]=l.useState(["previousSibling","nextSibling"]),k=d=>{const y=w.current,f=t.current[a[0]],g=t.current[a[1]],h=v==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],p=h-s.current,N=t.current.getBoundingClientRect()[r.size],x=p<0,q=()=>{f.style.flex=`0 0 ${C.current+p}px`,g.nextSibling&&C.current+p>0&&(g.style.flex=`0 0 ${T.current-p}px`)};C.current+p>0&&h+(N-y)<=_.current&&(parseInt(f.dataset.minSize,10)<=C.current+p&&x&&q(),T.current-p>=parseInt(g.dataset.minSize,10)&&!x&&q()),!g[a[1]]&&!u&&(g.style.flex="1 0 0px")},L=(d,y)=>{var x,q,$,K,X;const f=t.current[a[0]],g=t.current[a[1]],h=t.current[a[0]].getBoundingClientRect(),p=t.current[a[1]].getBoundingClientRect(),N=y?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];N-((x=t.current.getBoundingClientRect())==null?void 0:x[r.positionRect])<0&&(f.style.flex="0 0 0px",(q=f.style)!=null&&q[r.min]?g.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((h==null?void 0:h[r.size])-(($=f.style)==null?void 0:$[r.min].replace("px","")))}px`:g.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(h==null?void 0:h[r.size])}px`),_.current<N&&(g.style.flex="0 0 0px",(K=g.style)!=null&&K[r.min]?f.style.flex=`0 0 ${(h==null?void 0:h[r.size])+((p==null?void 0:p[r.size])-((X=g.style)==null?void 0:X[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(h==null?void 0:h[r.size])+(p==null?void 0:p[r.size])}px`)},M=d=>{d.currentTarget.focus()},H=d=>{var y,f,g,h;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.preventDefault(),E(d.pointerType??"mouse"),w.current=d.nativeEvent[r.offset],R.current=(y=t.current[a[0]].getBoundingClientRect())==null?void 0:y[r.end],t.current[a[1]][a[1]]?_.current=(f=t.current[a[1]][a[1]].getBoundingClientRect())==null?void 0:f[r.start]:_.current=t.current.parentElement.getBoundingClientRect()[r.end],C.current=(g=t.current[a[0]].getBoundingClientRect())==null?void 0:g[r.size],T.current=(h=t.current[a[1]].getBoundingClientRect())==null?void 0:h[r.size],s.current=d[`client${r.position}`])},be=d=>{var f,g,h,p;const y=d.code??d.key;if(y==="ArrowRight"||y==="ArrowLeft"||y==="ArrowUp"||y==="ArrowDown"){d.preventDefault();let N=t.current[a[0]],x=t.current[a[1]];(y==="ArrowLeft"||y==="ArrowUp")&&(x=t.current[a[0]],N=t.current[a[1]]);const q=x.style[r.min]?((f=x.getBoundingClientRect())==null?void 0:f[r.size])-Number(x.style[r.min].replace("px","")):(g=x.getBoundingClientRect())==null?void 0:g[r.size];if(document.activeElement===t.current){const $=q>=20?20:q,K=(h=N.getBoundingClientRect())==null?void 0:h[r.size],X=(p=x.getBoundingClientRect())==null?void 0:p[r.size];x.style.flex=`0 0 ${X-$}px`,N.style.flex=`0 0 ${K+$}px`}}},U=d=>{L(d,v==="touch"),E(!1)};l.useEffect(()=>{const d=()=>{v==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",U)):(document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",k))};return v?v==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",U)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",U)):d(),()=>{d()}},[v]),l.useEffect(()=>{I(u&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[u,o]);const W=we(),ve=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:A.splitter,tabIndex:0,onClick:M,onKeyDown:be,onPointerDown:H,onMouseDown:H,ref:b,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(te),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(te),children:[e.jsx("div",{className:A.lineBefore}),ve?e.jsx(m,{className:A.gripButton,tabIndex:-1,icon:o?re:ie,design:Be.Transparent}):e.jsx(je,{className:A.icon,name:o?re:ie}),e.jsx("div",{className:A.lineAfter})]})});P.displayName="Splitter";try{P.displayName="Splitter",P.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const G=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const c=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const S=[];return c.forEach((b,t)=>{const u=c[t+o];if(c.length-o-1>t&&(u.props.resizable||u.props.resizable===void 0)&&u.props.minSize!==void 0)c.splice(t+o+1,0,e.jsx(P,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+o-1),++o;else if(t>0&&(u==null?void 0:u.props.resizable)===!1){const s=c.findIndex(C=>C===u)-1;c[s].props.minSize===void 0&&c.splice(s,1),S.pop(),--o}}),S.forEach(b=>{var u,s;const t=(s=(u=c[b])==null?void 0:u.props)==null?void 0:s.size;t&&t!=="auto"&&(c[b]=l.cloneElement(c[b],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),c},[n]);try{G.displayName="useConcatSplitterElements",G.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const z=l.forwardRef((n,c)=>{const{vertical:o,children:S,title:b,style:t,className:u,options:s,...C}=n,[T,R]=J(c),[_,w]=l.useState(void 0),r=l.useRef({width:void 0,height:void 0}),v=l.useRef(!0),E=l.useRef(!0),a=G({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return Q(Te,z.displayName),l.useEffect(()=>{!v.current&&(s!=null&&s.resetOnChildrenChange)&&w(!0),v.current=!1},[S,s==null?void 0:s.resetOnChildrenChange]),l.useEffect(()=>{E.current||w(!0),E.current=!1},(s==null?void 0:s.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(s!=null&&s.resetOnSizeChange){const I=new ResizeObserver(Ee(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==r.current.width?(r.current.width=L.width,w(!0)):o&&L.height!==r.current.height&&(r.current.height=L.height,w(!0))},60));return I.observe(R.current),()=>{I.disconnect()}}},[o,s==null?void 0:s.resetOnSizeChange]),l.useEffect(()=>{_&&w(!1)},[_]),e.jsx(fe.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:b,...C,className:me(Ie.splitterLayout,u),ref:T,"data-splitter-vertical":o,children:a})})});z.displayName="SplitterLayout";try{z.displayName="SplitterLayout",z.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const B=({text:n,background:c="transparent"})=>e.jsx(j,{style:{height:"100%",width:"100%",background:c},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:n})});try{B.displayName="SplitterElementContent",B.__docgenInfo={description:"",displayName:"SplitterElementContent",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},background:{defaultValue:{value:"transparent"},description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const et={title:"Layouts & Floorplans / SplitterLayout",component:z,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},V={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(z,{...n,children:[e.jsx(i,{children:e.jsx(j,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(j,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(j,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(j,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(D,{children:"Content 4"})})})]})}},F={render(n){return e.jsxs(z,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(B,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(B,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(B,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(B,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(B,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(B,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(B,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(B,{text:"Content 8",background:"lightsteelblue"})})]})}},O={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[c,o]=l.useState(n.vertical),S=b=>{o(b.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(j,{direction:"Column",children:[e.jsx(ke,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(Le,{onSelectionChange:S,children:[e.jsx(ne,{pressed:!c,children:"Horizontal"}),e.jsx(ne,{pressed:c,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(z,{style:n.style,vertical:c,children:[e.jsx(i,{size:"40%",children:e.jsxs(j,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(j,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(j,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(z,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(j,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var le,oe,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ce,ue;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,he;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const tt=["Default","LimitedAreas","Nested"],bt=Object.freeze(Object.defineProperty({__proto__:null,Default:V,LimitedAreas:F,Nested:O,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{bt as C,V as D,F as L,O as N,i as S};
