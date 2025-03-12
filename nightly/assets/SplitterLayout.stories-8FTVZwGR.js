import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CStvljDn.js";import{F as E}from"./index-B_wuZyfP.js";import{T as $}from"./index-CP0Y_Y_X.js";import"./index-xDys58gn.js";import{r as l}from"./index-C--kS4iy.js";import{u as Y}from"./CustomElementsScope-BUTWMsdD.js";import{x as J,h as Q}from"./jsx-runtime-cXES_1K3.js";import{c as pe}from"./clsx-B-dksMZM.js";import{B as ge}from"./Button-9YaJ65nU.js";import{f as me}from"./Icon-DONP1ba8.js";import{v as Z}from"./vertical-grip-BMWJc9gI.js";import{u as _e,ab as ee}from"./i18n-defaults-D5B7gWwj.js";import{u as Se}from"./useIsRTL-1WKdozp-.js";import{u as K}from"./useStylesheet-D-3zc5-n.js";import{u as be}from"./useCurrentTheme-C7VrarYn.js";import{B as h}from"./index-BfETvGUt.js";import{I as xe}from"./index-Cpk5dCti.js";import{d as ve}from"./debounce-D7W5PopO.js";import{L as ze}from"./index-BRt6fJqY.js";import{a as we,S as te}from"./index-DRxRv-ce.js";const he=l.createContext({vertical:!0,reset:!1}),Ce="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",Ee={splitterElement:"_splitterElement_5jt3n_1"},i=l.forwardRef((n,u)=>{const{children:o,style:_,className:v,minSize:t=0,size:a="auto",resizable:c,...z}=n,[B,R]=J(u),{vertical:S,reset:C}=l.useContext(he),r=Q()?{width:"min-content",flex:"1 1 auto"}:{},w=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...r},[j,s]=l.useState(w),[V,k]=l.useState(!1);return K(Ce,i.displayName),l.useEffect(()=>{const L=new ResizeObserver(([D])=>{if(D.target.getBoundingClientRect().width!==0&&!V){const G=Q()?{width:"unset"}:{};s({flex:`0 0 ${D.target.getBoundingClientRect()[S?"height":"width"]}px`,...G}),k(!0)}});return a==="auto"&&R.current?L.observe(R.current):s({flex:`0 1 ${a}`}),()=>{L.disconnect()}},[a,V,S]),Y(()=>{C&&(s(void 0),k(!1))},[C,a]),Y(()=>{j===void 0&&s(w)},[j]),e.jsx("div",{ref:B,className:pe(Ee.splitterElement,v),style:{minHeight:S&&t?`${t}px`:void 0,minWidth:!S&&t?`${t}px`:void 0,...j,..._},...z,"data-min-size":t,children:o})});i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Be="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",je={splitterLayout:"_splitterLayout_6n3m3_1"},ke="horizontal-grip",Le="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ne=!1,qe="SAP-icons-v4",Te="@ui5/webcomponents-icons";me(ke,{pathData:Le,ltr:Ne,collection:qe,packageName:Te});const Ve="horizontal-grip",Ie="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Re=!1,Ae="SAP-icons-v5",De="@ui5/webcomponents-icons";me(Ve,{pathData:Ie,ltr:Re,collection:Ae,packageName:De});const ne="horizontal-grip",Fe="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",A={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},$e={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},Oe={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((n,u)=>{const{vertical:o}=n,_=_e("@ui5/webcomponents-react"),[v,t]=J(u),a=Se(t),c=l.useRef(null);K(Fe,I.displayName);const z=l.useRef(null),B=l.useRef(null),R=l.useRef(null),S=l.useRef(null),C=l.useRef(0),r=o?$e:Oe,[w,j]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),k=d=>{const b=C.current,f=t.current[s[0]],y=t.current[s[1]],m=w==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],p=m-c.current,N=t.current.getBoundingClientRect()[r.size],x=p<0,q=()=>{f.style.flex=`0 0 ${z.current+p}px`,y.nextSibling&&z.current+p>0&&(y.style.flex=`0 0 ${B.current-p}px`)};z.current+p>0&&m+(N-b)<=S.current&&(parseInt(f.dataset.minSize,10)<=z.current+p&&x&&q(),B.current-p>=parseInt(y.dataset.minSize,10)&&!x&&q()),!y[s[1]]&&!a&&(y.style.flex="1 0 0px")},L=(d,b)=>{var x,q,F,X;if(!t.current)return;const f=t.current[s[0]],y=t.current[s[1]],m=t.current[s[0]].getBoundingClientRect(),p=t.current[s[1]].getBoundingClientRect(),N=b?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];!t.current.contains(d.target)&&N-t.current[`offset${r.startUppercase}`]+1<0&&(f.style.flex="0 0 0px",(x=f.style)!=null&&x[r.min]?y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((m==null?void 0:m[r.size])-((q=f.style)==null?void 0:q[r.min].replace("px","")))}px`:y.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(m==null?void 0:m[r.size])}px`),S.current<N&&(y.style.flex="0 0 0px",(F=y.style)!=null&&F[r.min]?f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+((p==null?void 0:p[r.size])-((X=y.style)==null?void 0:X[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(m==null?void 0:m[r.size])+(p==null?void 0:p[r.size])}px`)},D=d=>{var b,f,y,m;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.currentTarget.focus(),d.preventDefault(),j(d.pointerType??"mouse"),C.current=d.nativeEvent[r.offset],R.current=(b=t.current[s[0]].getBoundingClientRect())==null?void 0:b[r.end],t.current[s[1]][s[1]]?S.current=(f=t.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:f[r.start]:S.current=t.current.parentElement.getBoundingClientRect()[r.end],z.current=(y=t.current[s[0]].getBoundingClientRect())==null?void 0:y[r.size],B.current=(m=t.current[s[1]].getBoundingClientRect())==null?void 0:m[r.size],c.current=d[`client${r.position}`])},G=d=>{var f,y,m,p;const b=d.code??d.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){d.preventDefault();let N=t.current[s[0]],x=t.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=t.current[s[0]],N=t.current[s[1]]);const q=x.style[r.min]?((f=x.getBoundingClientRect())==null?void 0:f[r.size])-Number(x.style[r.min].replace("px","")):(y=x.getBoundingClientRect())==null?void 0:y[r.size];if(document.activeElement===t.current){const F=q>=20?20:q,X=(m=N.getBoundingClientRect())==null?void 0:m[r.size],fe=(p=x.getBoundingClientRect())==null?void 0:p[r.size];x.style.flex=`0 0 ${fe-F}px`,N.style.flex=`0 0 ${X+F}px`}}},M=d=>{L(d,w==="touch"),j(!1)};l.useEffect(()=>{const d=()=>{w==="touch"?(document.removeEventListener("touchmove",k),document.removeEventListener("touchend",M)):(document.removeEventListener("mouseup",M),document.removeEventListener("mousemove",k))};return w?w==="touch"?(document.addEventListener("touchmove",k),document.addEventListener("touchend",M)):(document.addEventListener("mousemove",k),document.addEventListener("mouseup",M)):d(),()=>{d()}},[w]),l.useEffect(()=>{V(a&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,o]);const W=be(),ye=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:A.splitter,tabIndex:0,onKeyDown:G,onPointerDown:D,onMouseDown:D,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:_.getText(ee),"aria-orientation":o?"vertical":"horizontal","aria-label":_.getText(ee),children:[e.jsx("div",{className:A.lineBefore}),e.jsx("div",{className:A.gripContainer,children:ye?e.jsx(h,{className:A.gripButton,tabIndex:-1,icon:o?ne:Z,design:ge.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:A.icon,name:o?ne:Z,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:A.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const H=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const u=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const _=[];return u.forEach((v,t)=>{const a=u[t+o],c=Object.prototype.hasOwnProperty.call(a.props,"minSize")?a.props.minSize:0;if(u.length-o-1>t&&(a.props.resizable||a.props.resizable===void 0)&&c!==void 0)u.splice(t+o+1,0,e.jsx(I,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),_.push(t+1+o-1),++o;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const z=u.findIndex(B=>B===a)-1;u[z].props.minSize===void 0&&u.splice(z,1),_.pop(),--o}}),_.forEach(v=>{var a,c;const t=(c=(a=u[v])==null?void 0:a.props)==null?void 0:c.size;t&&t!=="auto"&&(u[v]=l.cloneElement(u[v],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),u},[n]);try{H.displayName="useConcatSplitterElements",H.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{H.displayName="useConcatSplitterElements",H.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const g=l.forwardRef((n,u)=>{const{vertical:o,children:_,title:v,style:t,className:a,options:c,...z}=n,[B,R]=J(u),[S,C]=l.useState(void 0),r=l.useRef({width:void 0,height:void 0}),w=l.useRef(!0),j=l.useRef(!0),s=H({children:_??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return K(Be,g.displayName),l.useEffect(()=>{!w.current&&(c!=null&&c.resetOnChildrenChange)&&C(!0),w.current=!1},[_,c==null?void 0:c.resetOnChildrenChange]),l.useEffect(()=>{j.current||C(!0),j.current=!1},(c==null?void 0:c.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(c!=null&&c.resetOnSizeChange){const V=new ResizeObserver(ve(([k])=>{const L=k.target.getBoundingClientRect();!o&&L.width!==r.current.width?(r.current.width=L.width,C(!0)):o&&L.height!==r.current.height&&(r.current.height=L.height,C(!0))},60));return V.observe(R.current),()=>{V.disconnect()}}},[o,c==null?void 0:c.resetOnSizeChange]),l.useEffect(()=>{S&&C(!1)},[S]),e.jsx(he.Provider,{value:{vertical:o,reset:S},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:v,...z,className:pe(je.splitterLayout,a),ref:B,"data-splitter-vertical":o,children:s})})});g.displayName="SplitterLayout";try{g.displayName="SplitterLayout",g.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="SplitterLayout",g.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const T=({text:n,background:u="transparent"})=>e.jsx(E,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:n})}),Pe={title:"Layouts & Floorplans / SplitterLayout",component:g,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},O={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(g,{...n,children:[e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 4"})})})]})}},P={render(n){return e.jsxs(g,{...n,children:[e.jsx(i,{size:"10%",children:e.jsx(T,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(T,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(T,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(T,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(T,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(T,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(T,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(T,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[u,o]=l.useState(n.vertical),_=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"Column",children:[e.jsx(ze,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(we,{onSelectionChange:_,children:[e.jsx(te,{pressed:!u,children:"Horizontal"}),e.jsx(te,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(g,{style:n.style,vertical:u,children:[e.jsx(i,{size:"40%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 1"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(h,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(h,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(h,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 5"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(h,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 7"}),e.jsxs(g,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(h,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(h,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(h,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(h,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(h,{style:{width:"100%"},children:"Content 12"}),e.jsxs(g,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(h,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(h,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(h,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(h,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(h,{children:"Content 17"})})]})]})})]})]})}};var re,ie,le;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,se,ae;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,ue,de;U.parameters={...U.parameters,docs:{...(ce=U.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Ue=["Default","LimitedAreas","Nested"],dt=Object.freeze(Object.defineProperty({__proto__:null,Default:O,LimitedAreas:P,Nested:U,__namedExportsOrder:Ue,default:Pe},Symbol.toStringTag,{value:"Module"}));export{dt as C,O as D,P as L,U as N,i as S};
