import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./index-BESI8ERr.js";import{F as k}from"./index-DlWYL6lf.js";import{T as O}from"./index-DgufeG-1.js";import"./index-IdU5vu2Q.js";import{r as i}from"./index-D23YZj_x.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import{c as de}from"./clsx-B-dksMZM.js";import{B as fe}from"./Button-Bn6Q5CAy.js";import{h as G,v as X}from"./withWebComponent-DfVDXLfc.js";import{f as he}from"./Icon-DVzRT9Bg.js";import{v as J}from"./vertical-grip-D9VS-QBa.js";import{u as _e,ab as Q}from"./i18n-defaults-CoZOvFer.js";import{u as xe}from"./useIsRTL-CAvJaecp.js";import{u as K}from"./useStylesheet-DNyxTWaC.js";import{u as ye}from"./useCurrentTheme-B67R9jmt.js";import{B as m}from"./index-DaCk7tY-.js";import{I as Se}from"./index-DFqCSedi.js";import{d as Ce}from"./debounce-D7W5PopO.js";import{u as Z}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";import{L as ve}from"./index-DVZh2p7o.js";import{a as be,S as ee}from"./index-C-QuXNwu.js";const pe=i.createContext({vertical:!0,reset:!1}),ze="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",ke={splitterElement:"_splitterElement_5jt3n_1"},l=i.forwardRef((n,u)=>{const{children:o,style:_,className:C,minSize:t=0,size:a="auto",resizable:c,...v}=n,[w,$]=G(u),{vertical:x,reset:z}=i.useContext(pe),r=X()?{width:"min-content",flex:"1 1 auto"}:{},b=a!=="auto"?{flex:`0 1 ${a}`}:{flex:"1 0 min-content",...r},[j,s]=i.useState(b),[F,E]=i.useState(!1);return K(ze,l.displayName),i.useEffect(()=>{const L=new ResizeObserver(([T])=>{if(T.target.getBoundingClientRect().width!==0&&!F){const W=X()?{width:"unset"}:{};s({flex:`0 0 ${T.target.getBoundingClientRect()[x?"height":"width"]}px`,...W}),E(!0)}});return a==="auto"&&$.current?L.observe($.current):s({flex:`0 1 ${a}`}),()=>{L.disconnect()}},[a,F,x]),Z(()=>{z&&(s(void 0),E(!1))},[z,a]),Z(()=>{j===void 0&&s(b)},[j]),e.jsx("div",{ref:w,className:de(ke.splitterElement,C),style:{minHeight:x&&t?`${t}px`:void 0,minWidth:!x&&t?`${t}px`:void 0,...j,..._},...v,"data-min-size":t,children:o})});l.displayName="SplitterElement";const Be="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",we={splitterLayout:"_splitterLayout_6n3m3_1"},je="horizontal-grip",Ee="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",Le=!1,Ie="SAP-icons-v4",Re="@ui5/webcomponents-icons";he(je,{pathData:Ee,ltr:Le,collection:Ie,packageName:Re});const Ae="horizontal-grip",Fe="M0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",$e=!1,Te="SAP-icons-v5",De="@ui5/webcomponents-icons";he(Ae,{pathData:Fe,ltr:$e,collection:Te,packageName:De});const te="horizontal-grip",Ne="@layer ui5-webcomponents-react{._splitter_k1lh6_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_k1lh6_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_k1lh6_1[data-splitter-vertical] ._icon_k1lh6_16{z-index:1}._splitter_k1lh6_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_k1lh6_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_k1lh6_1[data-splitter-vertical=horizontal] ._lineAfter_k1lh6_33,._splitter_k1lh6_1[data-splitter-vertical=horizontal] ._lineBefore_k1lh6_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_k1lh6_1[data-splitter-vertical=horizontal] ._lineBefore_k1lh6_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_k1lh6_1[data-splitter-vertical=horizontal] ._icon_k1lh6_16{padding:.5rem 0}._splitter_k1lh6_1[data-splitter-vertical=horizontal] ._lineAfter_k1lh6_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_k1lh6_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_k1lh6_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineAfter_k1lh6_33,._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineBefore_k1lh6_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineBefore_k1lh6_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineBefore_k1lh6_32):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_k1lh6_1[data-splitter-vertical=vertical] ._icon_k1lh6_16{padding:0 .5rem}._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineAfter_k1lh6_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_k1lh6_1[data-splitter-vertical=vertical] ._lineAfter_k1lh6_33):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_k1lh6_1:hover ._lineAfter_k1lh6_33,._splitter_k1lh6_1:hover ._lineBefore_k1lh6_32{flex-grow:1;transition:all .1s ease-in}._gripButton_k1lh6_92{height:1.625rem;min-width:1.5rem!important;z-index:1}._gripButton_k1lh6_92:active{z-index:2}._icon_k1lh6_16{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_k1lh6_33,._lineBefore_k1lh6_32{background-position:50%;background-repeat:no-repeat}}",N={splitter:"_splitter_k1lh6_1",icon:"_icon_k1lh6_16",lineBefore:"_lineBefore_k1lh6_32",lineAfter:"_lineAfter_k1lh6_33",gripButton:"_gripButton_k1lh6_92"},Oe={start:"top",startUppercase:"Top",end:"bottom",position:"Y",positionRect:"y",size:"height",min:"minHeight",offset:"offsetY"},qe={start:"left",startUppercase:"Left",end:"right",position:"X",positionRect:"x",size:"width",min:"minWidth",offset:"offsetX"},Y=i.forwardRef((n,u)=>{const{vertical:o}=n,_=_e("@ui5/webcomponents-react"),[C,t]=G(u),a=xe(t),c=i.useRef(null);K(Ne,Y.displayName);const v=i.useRef(null),w=i.useRef(null),$=i.useRef(null),x=i.useRef(null),z=i.useRef(0),r=o?Oe:qe,[b,j]=i.useState(!1),[s,F]=i.useState(["previousSibling","nextSibling"]),E=d=>{const y=z.current,f=t.current[s[0]],g=t.current[s[1]],p=b==="touch"?d.touches[0][`client${r.position}`]:d[`client${r.position}`],h=p-c.current,I=t.current.getBoundingClientRect()[r.size],S=h<0,R=()=>{f.style.flex=`0 0 ${v.current+h}px`,g.nextSibling&&v.current+h>0&&(g.style.flex=`0 0 ${w.current-h}px`)};v.current+h>0&&p+(I-y)<=x.current&&(parseInt(f.dataset.minSize,10)<=v.current+h&&S&&R(),w.current-h>=parseInt(g.dataset.minSize,10)&&!S&&R()),!g[s[1]]&&!a&&(g.style.flex="1 0 0px")},L=(d,y)=>{var S,R,D,U;if(!t.current)return;const f=t.current[s[0]],g=t.current[s[1]],p=t.current[s[0]].getBoundingClientRect(),h=t.current[s[1]].getBoundingClientRect(),I=y?Math.round(d.changedTouches[0][`client${r.position}`]):d[`client${r.position}`];!t.current.contains(d.target)&&I-t.current[`offset${r.startUppercase}`]+1<0&&(f.style.flex="0 0 0px",(S=f.style)!=null&&S[r.min]?g.style.flex=`0 0 ${(h==null?void 0:h[r.size])+((p==null?void 0:p[r.size])-((R=f.style)==null?void 0:R[r.min].replace("px","")))}px`:g.style.flex=`0 0 ${(h==null?void 0:h[r.size])+(p==null?void 0:p[r.size])}px`),x.current<I&&(g.style.flex="0 0 0px",(D=g.style)!=null&&D[r.min]?f.style.flex=`0 0 ${(p==null?void 0:p[r.size])+((h==null?void 0:h[r.size])-((U=g.style)==null?void 0:U[r.min].replace("px","")))}px`:f.style.flex=`0 0 ${(p==null?void 0:p[r.size])+(h==null?void 0:h[r.size])}px`)},T=d=>{var y,f,g,p;d.type==="pointerdown"&&d.pointerType!=="touch"||(d.currentTarget.focus(),d.preventDefault(),j(d.pointerType??"mouse"),z.current=d.nativeEvent[r.offset],$.current=(y=t.current[s[0]].getBoundingClientRect())==null?void 0:y[r.end],t.current[s[1]][s[1]]?x.current=(f=t.current[s[1]][s[1]].getBoundingClientRect())==null?void 0:f[r.start]:x.current=t.current.parentElement.getBoundingClientRect()[r.end],v.current=(g=t.current[s[0]].getBoundingClientRect())==null?void 0:g[r.size],w.current=(p=t.current[s[1]].getBoundingClientRect())==null?void 0:p[r.size],c.current=d[`client${r.position}`])},W=d=>{var f,g,p,h;const y=d.code??d.key;if(y==="ArrowRight"||y==="ArrowLeft"||y==="ArrowUp"||y==="ArrowDown"){d.preventDefault();let I=t.current[s[0]],S=t.current[s[1]];(y==="ArrowLeft"||y==="ArrowUp")&&(S=t.current[s[0]],I=t.current[s[1]]);const R=S.style[r.min]?((f=S.getBoundingClientRect())==null?void 0:f[r.size])-Number(S.style[r.min].replace("px","")):(g=S.getBoundingClientRect())==null?void 0:g[r.size];if(document.activeElement===t.current){const D=R>=20?20:R,U=(p=I.getBoundingClientRect())==null?void 0:p[r.size],ge=(h=S.getBoundingClientRect())==null?void 0:h[r.size];S.style.flex=`0 0 ${ge-D}px`,I.style.flex=`0 0 ${U+D}px`}}},V=d=>{L(d,b==="touch"),j(!1)};i.useEffect(()=>{const d=()=>{b==="touch"?(document.removeEventListener("touchmove",E),document.removeEventListener("touchend",V)):(document.removeEventListener("mouseup",V),document.removeEventListener("mousemove",E))};return b?b==="touch"?(document.addEventListener("touchmove",E),document.addEventListener("touchend",V)):(document.addEventListener("mousemove",E),document.addEventListener("mouseup",V)):d(),()=>{d()}},[b]),i.useEffect(()=>{F(a&&!o?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[a,o]);const H=ye(),me=H==="sap_fiori_3_hcb"||H==="sap_fiori_3_hcw"||H==="sap_horizon_hcb"||H==="sap_horizon_hcw";return e.jsxs("div",{className:N.splitter,tabIndex:0,onKeyDown:W,onPointerDown:T,onMouseDown:T,ref:C,role:"separator","data-splitter-vertical":o?"vertical":"horizontal",title:_.getText(Q),"aria-orientation":o?"vertical":"horizontal","aria-label":_.getText(Q),children:[e.jsx("div",{className:N.lineBefore}),me?e.jsx(m,{className:N.gripButton,tabIndex:-1,icon:o?te:J,design:fe.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(Se,{className:N.icon,name:o?te:J,"data-component-name":"SplitterLayoutSplitterGrip"}),e.jsx("div",{className:N.lineAfter})]})});Y.displayName="Splitter";const Pe=n=>i.useMemo(()=>{if(i.isValidElement(n==null?void 0:n.children))return n==null?void 0:n.children;const u=i.Children.toArray(n==null?void 0:n.children).filter(i.isValidElement);let o=0;const _=[];return u.forEach((C,t)=>{const a=u[t+o],c=Object.prototype.hasOwnProperty.call(a.props,"minSize")?a.props.minSize:0;if(u.length-o-1>t&&(a.props.resizable||a.props.resizable===void 0)&&c!==void 0)u.splice(t+o+1,0,e.jsx(Y,{height:n==null?void 0:n.height,width:n==null?void 0:n.width,vertical:n==null?void 0:n.vertical},`splitter${t}`)),_.push(t+1+o-1),++o;else if(t>0&&(a==null?void 0:a.props.resizable)===!1){const v=u.findIndex(w=>w===a)-1;u[v].props.minSize===void 0&&u.splice(v,1),_.pop(),--o}}),_.forEach(C=>{var a,c;const t=(c=(a=u[C])==null?void 0:a.props)==null?void 0:c.size;t&&t!=="auto"&&(u[C]=i.cloneElement(u[C],{size:`calc(${t} - var(--_ui5wcr-SplitterSize))`}))}),u},[n]),B=i.forwardRef((n,u)=>{const{vertical:o,children:_,title:C,style:t,className:a,options:c,...v}=n,[w,$]=G(u),[x,z]=i.useState(void 0),r=i.useRef({width:void 0,height:void 0}),b=i.useRef(!0),j=i.useRef(!0),s=Pe({children:_??[],width:t==null?void 0:t.width,height:t==null?void 0:t.height,vertical:o});return K(Be,B.displayName),i.useEffect(()=>{!b.current&&(c!=null&&c.resetOnChildrenChange)&&z(!0),b.current=!1},[_,c==null?void 0:c.resetOnChildrenChange]),i.useEffect(()=>{j.current||z(!0),j.current=!1},(c==null?void 0:c.resetOnCustomDepsChange)??[]),i.useEffect(()=>{if(c!=null&&c.resetOnSizeChange){const F=new ResizeObserver(Ce(([E])=>{const L=E.target.getBoundingClientRect();!o&&L.width!==r.current.width?(r.current.width=L.width,z(!0)):o&&L.height!==r.current.height&&(r.current.height=L.height,z(!0))},60));return F.observe($.current),()=>{F.disconnect()}}},[o,c==null?void 0:c.resetOnSizeChange]),i.useEffect(()=>{x&&z(!1)},[x]),e.jsx(pe.Provider,{value:{vertical:o,reset:x},children:e.jsx("div",{style:{flexDirection:o?"column":"row",...t},title:C,...v,className:de(we.splitterLayout,a),ref:w,"data-splitter-vertical":o,children:s})})});B.displayName="SplitterLayout";const A=({text:n,background:u="transparent"})=>e.jsx(k,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:n})}),Me={title:"Layouts & Floorplans / SplitterLayout",component:B,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}}},q={parameters:{chromatic:{diffThreshold:.6}},render(n){return e.jsxs(B,{...n,children:[e.jsx(l,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 1"})})}),e.jsx(l,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(l,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(l,{children:e.jsx(k,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(O,{children:"Content 4"})})})]})}},P={render(n){return e.jsxs(B,{...n,children:[e.jsx(l,{size:"10%",children:e.jsx(A,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(l,{children:e.jsx(A,{text:"Content 2",background:"skyblue"})}),e.jsx(l,{minSize:200,children:e.jsx(A,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(l,{children:e.jsx(A,{text:"Content 4",background:"paleturquoise"})}),e.jsx(l,{children:e.jsx(A,{text:"Content 5",background:"lightskyblue"})}),e.jsx(l,{resizable:!1,size:"150px",children:e.jsx(A,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(l,{children:e.jsx(A,{text:"Content 7",background:"aliceblue"})}),e.jsx(l,{children:e.jsx(A,{text:"Content 8",background:"lightsteelblue"})})]})}},M={parameters:{chromatic:{disableSnapshot:!0}},render(n){const[u,o]=i.useState(n.vertical),_=C=>{o(C.detail.selectedItem.textContent==="Vertical")};return i.useEffect(()=>{o(n.vertical)},[n.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{direction:"Column",children:[e.jsx(ve,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(be,{onSelectionChange:_,children:[e.jsx(ee,{pressed:!u,children:"Horizontal"}),e.jsx(ee,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(B,{style:n.style,vertical:u,children:[e.jsx(l,{size:"40%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(B,{style:{height:"100%"},children:[e.jsx(l,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(l,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(l,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(l,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(B,{style:{height:"100%"},children:[e.jsx(l,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(l,{size:"50%",children:e.jsxs(k,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(B,{vertical:!0,style:{height:"100%"},children:[e.jsx(l,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(l,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(l,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(l,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(l,{children:e.jsxs(k,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(B,{style:{height:"100%"},children:[e.jsx(l,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(l,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(l,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(l,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(l,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};var re,ne,ie;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,oe,se;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ce,ue;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Ve=["Default","LimitedAreas","Nested"],pt=Object.freeze(Object.defineProperty({__proto__:null,Default:q,LimitedAreas:P,Nested:M,__namedExportsOrder:Ve,default:Me},Symbol.toStringTag,{value:"Module"}));export{pt as C,q as D,P as L,M as N,l as S};
