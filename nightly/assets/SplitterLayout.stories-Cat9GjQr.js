import{u as Y,j as e}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import"./index-BCG3YKvU.js";import{F as k}from"./index-3WD7if5i.js";import{T as $}from"./index-DIFmT50V.js";import"./index-rxcMZeVl.js";import{r as l}from"./index-RYns6xqu.js";import{c as pe}from"./clsx-B-dksMZM.js";import{B as ye}from"./Button-CkiVa5Iu.js";import{u as J}from"./withWebComponent-YgbOdVTg.js";import{f as he}from"./Icon-DDA-V63S.js";import"./vertical-grip-DtqGcvVF.js";import{u as Se,a9 as Q}from"./i18n-defaults-BYkHhcAX.js";import{u as _e}from"./useIsRTL-BKJHvl9n.js";import{u as K}from"./useStylesheet-DcbwKAeb.js";import{u as be}from"./useCurrentTheme-DiOWTEeH.js";import{B as m}from"./index-gHGG7lEc.js";import{I as xe}from"./index-DSxTbzjB.js";import{d as ve}from"./debounce-D7W5PopO.js";import{h as Z}from"./Keys-D1SxbTOd.js";import{L as ze}from"./index-DYtJKmyC.js";import{a as we,S as ee}from"./index-BW8z20gS.js";const te="vertical-grip",me=l.createContext({vertical:!0,reset:!1}),Ce={packageName:"@ui5/webcomponents-react",fileName:"SplitterElement.module.css",content:"@layer ui5-webcomponents-react{.SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}"},ke={splitterElement:"SplitterElement_splitterElement_5jt3n_1"},r=l.forwardRef((n,u)=>{const{children:o,style:S,className:v,minSize:t=0,size:a="auto",resizable:c,...z}=n,[E,R]=J(u),{vertical:_,reset:C}=l.useContext(me),i=Z()?{width:"min-content",flex:"1 1 auto"}:{},w=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...i},[B,s]=l.useState(w),[V,j]=l.useState(!1);return K(Ce,r.displayName),l.useEffect(()=>{const L=new ResizeObserver(([A])=>{if(A.target.getBoundingClientRect().width!==0&&!V){const G=Z()?{width:"unset"}:{};s({flex:`0 0 ${A.target.getBoundingClientRect()[_?"height":"width"]}px`,...G}),j(!0)}});return a==="auto"&&R.current?L.observe(R.current):s({flex:`0 1 ${a}`}),()=>{L.disconnect()}},[a,V,_]),Y(()=>{C&&(s(void 0),j(!1))},[C,a]),Y(()=>{B===void 0&&s(w)},[B]),e.jsx("div",{ref:E,className:pe(ke.splitterElement,v),style:{minHeight:_&&t?`${t}px`:void 0,minWidth:!_&&t?`${t}px`:void 0,...B,...S},...z,"data-min-size":t,children:o})});r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ee={packageName:"@ui5/webcomponents-react",fileName:"SplitterLayout.module.css",content:"@layer ui5-webcomponents-react{.SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}"},Be={splitterLayout:"SplitterLayout_splitterLayout_6n3m3_1"},je="horizontal-grip",Le="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Ne=!1,qe="SAP-icons-v4",Te="@ui5/webcomponents-icons";he(je,{pathData:Le,ltr:Ne,collection:qe,packageName:Te});const Ve="horizontal-grip",Ie="M0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Re=!1,Ae="SAP-icons-v5",De="@ui5/webcomponents-icons";he(Ve,{pathData:Ie,ltr:Re,collection:Ae,packageName:De});const ne="horizontal-grip",Fe={packageName:"@ui5/webcomponents-react",fileName:"Splitter.module.css",content:"@layer ui5-webcomponents-react{.Splitter_splitter_k1lh6_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_k1lh6_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_k1lh6_1[data-splitter-vertical] .Splitter_icon_k1lh6_16{z-index:1}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_k1lh6_33,.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_k1lh6_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_k1lh6_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal] .Splitter_icon_k1lh6_16{padding:.5rem 0}.Splitter_splitter_k1lh6_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_k1lh6_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineAfter_k1lh6_33,.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineBefore_k1lh6_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineBefore_k1lh6_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineBefore_k1lh6_32):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_icon_k1lh6_16{padding:0 .5rem}.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineAfter_k1lh6_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(.Splitter_splitter_k1lh6_1[data-splitter-vertical=vertical] .Splitter_lineAfter_k1lh6_33):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_k1lh6_1:hover .Splitter_lineAfter_k1lh6_33,.Splitter_splitter_k1lh6_1:hover .Splitter_lineBefore_k1lh6_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_k1lh6_92{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_k1lh6_92:active{z-index:2}.Splitter_icon_k1lh6_16{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_k1lh6_33,.Splitter_lineBefore_k1lh6_32{background-position:50%;background-repeat:no-repeat}}"},F={splitter:"Splitter_splitter_k1lh6_1",icon:"Splitter_icon_k1lh6_16",lineBefore:"Splitter_lineBefore_k1lh6_32",lineAfter:"Splitter_lineAfter_k1lh6_33",gripButton:"Splitter_gripButton_k1lh6_92"},$e={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},Oe={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},I=l.forwardRef((n,u)=>{const{vertical:o}=n,S=Se("@ui5/webcomponents-react"),[v,t]=J(u),a=_e(t),c=l.useRef(null);K(Fe,I.displayName);const z=l.useRef(null),E=l.useRef(null),R=l.useRef(null),_=l.useRef(null),C=l.useRef(0),i=o?$e:Oe,[w,B]=l.useState(!1),[s,V]=l.useState(["previousSibling","nextSibling"]),j=d=>{const b=C.current,g=t.current[s[0]],f=t.current[s[1]],h=w==="touch"?d.touches[0][`client${i.position}`]:d[`client${i.position}`],p=h-c.current,N=t.current.getBoundingClientRect()[i.size],x=p<0,q=()=>{g.style.flex=`0 0 ${z.current+p}px`,f.nextSibling&&z.current+p>0&&(f.style.flex=`0 0 ${E.current-p}px`)};z.current+p>0&&h+(N-b)<=_.current&&(parseInt(g.dataset.minSize,10)<=z.current+p&&x&&q(),E.current-p>=parseInt(f.dataset.minSize,10)&&!x&&q()),!f[s[1]]&&!a&&(f.style.flex="1 0 0px")},L=(d,b)=>{var x,q,D,X;if(!t.current)return;const g=t.current[s[0]],f=t.current[s[1]],h=t.current[s[0]].getBoundingClientRect(),p=t.current[s[1]].getBoundingClientRect(),N=b?Math.round(d.changedTouches[0][`client${i.position}`]):d[`client${i.position}`];!t.current.contains(d.target)&&N-t.current[`offset${i.startUppercase}`]+1<0&&(g.style.flex="0 0 0px",(x=g.style)!=null&&x[i.min]?f.style.flex=`0 0 ${(p==null?void 0:p[i.size])+((h==null?void 0:h[i.size])-((q=g.style)==null?void 0:q[i.min].replace("px","")))}px`:f.style.flex=`0 0 ${(p==null?void 0:p[i.size])+(h==null?void 0:h[i.size])}px`),_.current<N&&(f.style.flex="0 0 0px",(D=f.style)!=null&&D[i.min]?g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+((p==null?void 0:p[i.size])-((X=f.style)==null?void 0:X[i.min].replace("px","")))}px`:g.style.flex=`0 0 ${(h==null?void 0:h[i.size])+(p==null?void 0:p[i.size])}px`)},A=d=>{var b,g,f,h;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.currentTarget.focus(),d.preventDefault(),B(d.pointerType??"mouse"),C.current=d.nativeEvent[i.offset],R.current=(b=t.current[s[0]].getBoundingClientRect())==null?void 0:b[i.end],t.current[s[1]][s[1]]?_.current=(g=t.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:g[i.start]:_.current=t.current.parentElement.getBoundingClientRect()[i.end],z.current=(f=t.current[s[0]].getBoundingClientRect())==null?void 0:f[i.size],E.current=(h=t.current[s[1]].getBoundingClientRect())==null?void 0:h[i.size],c.current=d[`client${i.position}`])},G=d=>{var g,f,h,p;const b=d.code??d.key;if(b==="ArrowRight"||b==="ArrowLeft"||b==="ArrowUp"||b==="ArrowDown"){d.preventDefault();let N=t.current[s[0]],x=t.current[s[1]];(b==="ArrowLeft"||b==="ArrowUp")&&(x=t.current[s[0]],N=t.current[s[1]]);const q=x.style[i.min]?((g=x.getBoundingClientRect())==null?void 0:g[i.size])-Number(x.style[i.min].replace("px","")):(f=x.getBoundingClientRect())==null?void 0:f[i.size];if(document.activeElement===t.current){const D=q>=20?20:q,X=(h=N.getBoundingClientRect())==null?void 0:h[i.size],ge=(p=x.getBoundingClientRect())==null?void 0:p[i.size];x.style.flex=`0 0 ${ge-D}px`,N.style.flex=`0 0 ${X+D}px`}}},M=d=>{L(d,w==="touch"),B(!1)};l.useEffect(()=>{const d=()=>{w==="touch"?(document.removeEventListener("touchmove",j),document.removeEventListener("touchend",M)):(document.removeEventListener("mouseup",M),document.removeEventListener("mousemove",j))};return w?w==="touch"?(document.addEventListener("touchmove",j),document.addEventListener("touchend",M)):(document.addEventListener("mousemove",j),document.addEventListener("mouseup",M)):d(),()=>{d()}},[w]),l.useEffect(()=>{V(a&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,o]);const W=be(),fe=W==="sap_fiori_3_hcb"||W==="sap_fiori_3_hcw"||W==="sap_horizon_hcb"||W==="sap_horizon_hcw";return e.jsxs("div",{className:F.splitter,tabIndex:0,onKeyDown:G,onPointerDown:A,onMouseDown:A,ref:v,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:S.getText(Q),"aria-orientation":o?"vertical":"horizontal","aria-label":S.getText(Q),children:[e.jsx("div",{className:F.lineBefore}),fe?e.jsx(m,{className:F.gripButton,tabIndex:-1,icon:o?ne:te,design:ye.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(xe,{className:F.icon,name:o?ne:te,"data-component-name":"SplitterLayoutSplitterGrip"}),e.jsx("div",{className:F.lineAfter})]})});I.displayName="Splitter";try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="Splitter",I.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const H=n=>l.useMemo(()=>{if(l.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const u=l.Children.toArray(n==null?void 0:n.children).filter(l.isValidElement);let o=0;const S=[];return u.forEach((v,t)=>{const a=u[t+o],c=a.props.hasOwnProperty("minSize")?a.props.minSize:0;if(u.length-o-1>t&&(a.props.resizable||a.props.resizable===void 0)&&c!==void 0)u.splice(t+o+1,0,e.jsx(I,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),S.push(t+1+o-1),++o;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const z=u.findIndex(E=>E===a)-1;u[z].props.minSize===void 0&&u.splice(z,1),S.pop(),--o}}),S.forEach(v=>{var a,c;const t=(c=(a=u[v])==null?void 0:a.props)==null?void 0:c.size;t&&t!=="auto"&&(u[v]=l.cloneElement(u[v],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),u},[n]);try{H.displayName="useConcatSplitterElements",H.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}try{H.displayName="useConcatSplitterElements",H.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}}}catch{}const y=l.forwardRef((n,u)=>{const{vertical:o,children:S,title:v,style:t,className:a,options:c,...z}=n,[E,R]=J(u),[_,C]=l.useState(void 0),i=l.useRef({width:void 0,height:void 0}),w=l.useRef(!0),B=l.useRef(!0),s=H({children:S??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return K(Ee,y.displayName),l.useEffect(()=>{!w.current&&(c!=null&&c.resetOnChildrenChange)&&C(!0),w.current=!1},[S,c==null?void 0:c.resetOnChildrenChange]),l.useEffect(()=>{B.current||C(!0),B.current=!1},(c==null?void 0:c.resetOnCustomDepsChange)??[]),l.useEffect(()=>{if(c!=null&&c.resetOnSizeChange){const V=new ResizeObserver(ve(([j])=>{const L=j.target.getBoundingClientRect();!o&&L.width!==i.current.width?(i.current.width=L.width,C(!0)):o&&L.height!==i.current.height&&(i.current.height=L.height,C(!0))},60));return V.observe(R.current),()=>{V.disconnect()}}},[o,c==null?void 0:c.resetOnSizeChange]),l.useEffect(()=>{_&&C(!1)},[_]),e.jsx(me.Provider,{value:{vertical:o,reset:_},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:v,...z,className:pe(Be.splitterLayout,a),ref:E,"data-splitter-vertical":o,children:s})})});y.displayName="SplitterLayout";try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SplitterLayout",y.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<any>> | ReactElement<SplitterElementPropTypes, string | JSXElementConstructor<...>>[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const T=({text:n,background:u="transparent"})=>e.jsx(k,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:n})}),Pe={title:"Layouts & Floorplans / SplitterLayout",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},O={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(y,{...n,children:[e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx($,{children:"Content 4"})})})]})}},P={render(n){return e.jsxs(y,{...n,children:[e.jsx(r,{size:"10%",children:e.jsx(T,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(T,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(T,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(T,{text:"Content 8",background:"lightsteelblue"})})]})}},U={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[u,o]=l.useState(n.vertical),S=v=>{o(v.detail.selectedItem.textContent==="Vertical")};return l.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{direction:"Column",children:[e.jsx(ze,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(we,{onSelectionChange:S,children:[e.jsx(ee,{pressed:!u,children:"Horizontal"}),e.jsx(ee,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(y,{style:n.style,vertical:u,children:[e.jsx(r,{size:"40%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(y,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(y,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var ie,re,le;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=O.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,se,ae;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Ue=["Default","LimitedAreas","Nested"],dt=Object.freeze(Object.defineProperty({__proto__:null,Default:O,LimitedAreas:P,Nested:U,__namedExportsOrder:Ue,default:Pe},Symbol.toStringTag,{value:"Module"}));export{dt as C,O as D,P as L,U as N,r as S};
