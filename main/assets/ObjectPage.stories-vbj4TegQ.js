import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./UnableToLoad-BXY81OGG.js";import{i as ln}from"./Person-nLahJlpT.js";import{s as yt}from"./general-leave-request-hZAFg1EF.js";import{c as ne,R as Le,u as cn,a as Vt,b as dn,D as qe}from"./index-p_K5oc5z.js";import{F as ae,b as ge,c as mn,a as qt,d as un}from"./index-xrvtQWKa.js";import{b as Z,a as d,F as ee}from"./index-FlpUZ7zd.js";import{T as f}from"./ThemingParameters-UghqSl-x.js";import{e as we}from"./index-ENBflQbU.js";import{c as k}from"./clsx-Zbgk8kpT.js";import{r as n}from"./index-OjgoNOWw.js";import{c as _e}from"./react-jss.esm-fzYOEaou.js";import{a as pn}from"./addCustomCSSWithScoping-ZfvsxM11.js";import{b as Gt}from"./Avatar-tUVXUHcz.js";import{a as hn,T as jt}from"./index-_eBwPs96.js";import{u as Tt}from"./withWebComponent-LTFbYRvs.js";import{d as gn}from"./debounce-F9irgL9Y.js";import{G as bn}from"./GlobalStyleClasses-kWTEndz_.js";import{C as X}from"./CustomVariables-ISwRKzww.js";import{O as fn}from"./index-F4Fj_xtB.js";import{T as c}from"./index-z42VFOj5.js";import{B as xn,a as Sn}from"./index-513f_8vd.js";import{B as j}from"./index-mx-cYewB.js";import{B as x}from"./Button-DcwyQdV9.js";import{a as yn,B as Me}from"./index-F5hENCMw.js";import{M as Ge}from"./index-bS1IrREM.js";import{V as jn}from"./ValueState-I_-hGNIb.js";import{L as Ve}from"./index-NwNZIpzj.js";import{L as Oe}from"./index-wIvp3eiy.js";import{I as Tn}from"./index-VflQeg1O.js";import{I as vn}from"./IllustratedMessage-Eojhei9a.js";import{T as vt}from"./index-EoJehb-T.js";import{T as Je}from"./index-e-86G4zo.js";import{I as Ct}from"./index-nDKonPlQ.js";var B=(i=>(i.Default="Default",i.IconTabBar="IconTabBar",i))(B||{});const D=i=>{const T=[];return n.Children.forEach(i,r=>{n.isValidElement(r)&&T.push(r)}),T},Cn={base:{alignSelf:"center",opacity:0,paddingInlineEnd:"1rem"},hidden:{opacity:0},visible:{transition:"opacity 0.5s",opacity:1},imageContainer:{display:"inline-block",verticalAlign:"middle",maxHeight:"3rem",width:"3rem",maxWidth:"3rem"},image:{width:"100%",height:"100%"}},In=_e(Cn,{name:"CollapsedAvatar"}),$e=i=>{const{image:T,imageShapeCircle:r,style:S}=i,I=In(),[v,E]=n.useState(!1),R=n.useRef(null),G=n.useMemo(()=>{var N,h;return T?typeof T=="string"?e.jsx("span",{className:I.imageContainer,style:{borderRadius:r?"50%":0,overflow:"hidden"},children:e.jsx("img",{className:I.image,src:T,alt:"Object Page Image"})}):n.cloneElement(T,{size:Gt.S,className:(N=T.props)!=null&&N.className?`${I.imageContainer} ${(h=T.props)==null?void 0:h.className}`:I.imageContainer}):null},[T,r]);n.useEffect(()=>{E(!0)},[]);const J=k(I.base,v?I.visible:I.hidden);return e.jsx("div",{ref:R,className:J,style:S,"data-component-name":"ObjectPageCollapsedAvatar",children:G})};try{$e.displayName="CollapsedAvatar",$e.__docgenInfo={description:"",displayName:"CollapsedAvatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},imageShapeCircle:{defaultValue:null,description:"",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const te={anchorFloat:"--_ui5wcr_ObjectPage_actions_float",anchorLeft:"--_ui5wcr_ObjectPage_actions_left",anchorRight:"--_ui5wcr_ObjectPage_actions_right"},Pn={objectPage:{[ne.headerDisplay]:"block",[ne.titleFontSize]:f.sapObjectHeader_Title_FontSize,container:"objectPage / inline-size",boxSizing:"border-box",display:"flex",flexDirection:"column",width:"100%",height:"100%",maxHeight:"100vh",position:"relative",whiteSpace:"normal",fontFamily:f.sapFontFamily,backgroundColor:f.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth",'& section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"none"},'& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"block"}},"@global html":{[te.anchorFloat]:"right",[te.anchorRight]:"1.25rem",[te.anchorLeft]:"unset"},'@global [dir="rtl"]':{[te.anchorFloat]:"left",[te.anchorRight]:"unset",[te.anchorLeft]:"1.25rem"},iconTabBarMode:{'& section[data-component-name="ObjectPageSection"] > div[role="heading"]':{display:"none"}},headerCollapsed:{[ne.headerDisplay]:"none",[ne.titleFontSize]:f.sapObjectHeader_Title_SnappedFontSize},headerContainer:{extend:Le,marginBottom:"0.25rem",backgroundColor:f.sapObjectHeader_Background,display:"grid",gridAutoColumns:"min-content calc(100% - 5rem - 2rem)",'& [data-component-name="ObjectPageHeaderContent"]':{gridColumn:2}},headerHoverStyles:{'&[data-not-clickable="true"]':{cursor:"unset"},'&[data-not-clickable="false"]':{backgroundColor:`${f.sapObjectHeader_Hover_Background}`,'& [data-component-name="DynamicPageTitle"]':{backgroundColor:f.sapObjectHeader_Hover_Background}}},header:{extend:Le,[ne.headerDisplay]:"block",boxSizing:"border-box",backgroundColor:f.sapObjectHeader_Background,position:"sticky",top:0,zIndex:2,'& [data-component-name="DynamicPageTitle"]':{gridColumn:2,paddingInline:0},cursor:"pointer"},headerImage:{minWidth:"5rem",maxWidth:"5rem",maxHeight:"5rem",display:"inline-block",marginInlineEnd:"2rem"},image:{width:"100%",height:"100%"},anchorBar:{position:"sticky",zIndex:2},tabContainer:{position:"sticky",zIndex:1,"@container objectPage (max-width: 599px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":0},"@container objectPage (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1440px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"2rem"}},tabContainerComponent:{"&::part(content)":{display:"none"},"&::part(tabstrip)":{padding:0,paddingInline:"var(--_ui5wcr_ObjectPage_tab_bar_inline_padding)",boxShadow:`inset 0 -0.0625rem ${f.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%)`}},content:{extend:Le,flexGrow:1,position:"relative"},footer:{position:"sticky",bottom:"0.5rem",margin:"0 0.5rem"},footerSpacer:{height:"1rem",flexShrink:0},subSectionPopover:{"&::part(content)":{padding:0}},titleInHeader:{padding:0},snappedContent:{gridColumn:"1 / span 2"}},wn=(i,T)=>D(i).find(r=>{var S;return n.isValidElement(r)&&((S=r.props)==null?void 0:S.id)===T}),It=i=>i?i.replace(/^ObjectPageSection-/,""):null;pn("ui5-tabcontainer",`
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `);const ce=48,On=_e(Pn,{name:"ObjectPage"}),F=n.forwardRef((i,T)=>{var ht,gt,bt,ft;const{headerTitle:r,image:S,footer:I,mode:v,imageShapeCircle:E,className:R,style:G,slot:J,showHideHeaderButton:N,children:h,selectedSectionId:A,alwaysShowContentHeader:g,showTitleInHeaderContent:L,headerContent:b,headerContentPinnable:He,a11yConfig:$,placeholder:Be,onSelectedSectionChange:ze,onToggleHeaderContent:Ue,onPinnedStateChange:Jt,onBeforeNavigate:We,...$t}=i,p=On(),be=(gt=(ht=D(h)[0])==null?void 0:ht.props)==null?void 0:gt.id,[z,M]=n.useState(A??be),[V,fe]=n.useState(i.selectedSubSectionId),[P,Xe]=n.useState(g),O=n.useRef(!1),Ye=n.useRef(),[zt,C]=Tt(T),xe=n.useRef(null),Se=n.useRef(),Ut=n.useRef(0),[Ke,Qe]=Tt(b==null?void 0:b.ref),Ze=n.useRef(null),Wt=n.useRef(null),ye=n.useRef(null),[et,tt]=n.useState(!1),je=n.useRef(!1),[Xt,Te]=n.useState(void 0),[U,nt]=n.useState(!1),Y=n.useRef(0),K=r&&L,[ve,at]=n.useState(0),[Fe,Yt]=n.useState(null),Kt=Fe??h,ot=n.useRef(!1);n.useEffect(()=>{L&&!ot.current&&(ot.current=!0)},[L]),n.useEffect(()=>{const t=v===B.IconTabBar?wn(h,z):null;Yt(t)},[v,h,z]);const it=n.useRef(z),De=(t,a,o,s)=>{typeof ze=="function"&&it.current!==o&&(ze(we(t,{selectedSectionIndex:parseInt(a,10),selectedSectionId:o,section:s})),it.current=o)},W=n.useRef(gn(De,500)).current;n.useEffect(()=>()=>{W.cancel(),clearTimeout(ye.current)},[]);const{topHeaderHeight:_,headerContentHeight:oe,anchorBarHeight:Qt,totalHeaderHeight:ie,headerCollapsed:y}=cn(C,xe,Qe,Ze,[Xt,Te],{noHeader:!r&&!b,fixedHeader:P,scrollTimeout:Y});n.useEffect(()=>{typeof Ue=="function"&&je.current&&Ue(y!==!0)},[y]);const Ee=n.useMemo(()=>{var t;return S?typeof S=="string"?e.jsx("span",{className:p.headerImage,style:{borderRadius:E?"50%":0,overflow:"hidden"},children:e.jsx("img",{src:S,className:p.image,alt:"Company Logo"})}):n.cloneElement(S,{size:Gt.L,className:k(p.headerImage,(t=S.props)==null?void 0:t.className)}):null},[S,p.headerImage,p.image,E]),rt=(t,a=!1)=>{var s;const o=(s=C.current)==null?void 0:s.querySelector(`#${a?"ObjectPageSubSection":"ObjectPageSection"}-${t}`);if(Y.current=performance.now()+500,o){const u=_||Ut.current;o.style.scrollMarginBlockStart=u+Qt+ce+(P?oe:0)+"px",o.focus(),o.scrollIntoView({behavior:"smooth"}),o.style.scrollMarginBlockStart="0px"}},Ne=t=>{var a;t&&(be===t?(a=C.current)==null||a.scrollTo({top:0,behavior:"smooth"}):rt(t),O.current=!1)},st=()=>{var a;const t=A??be;if(t!==Ye.current){W.cancel(),O.current=!0,M(t),Ye.current=t;const o=(a=C.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]'),s=D(h).findIndex(u=>{var l;return n.isValidElement(u)&&((l=u.props)==null?void 0:l.id)===t});De({},s,t,o[0])}},[ke,lt]=n.useState(0),ct=n.useRef();n.useEffect(()=>(A&&(v===B.Default?ke<750&&ke!==void 0?ct.current=requestAnimationFrame(t=>{lt(t)}):(lt(void 0),st()):st()),()=>{cancelAnimationFrame(ct.current)}),[ke,A,be,W]);const Zt=(t,a,o,s)=>{O.current=!0,W.cancel(),M(u=>(u===a&&Ne(a),a)),Se.current=t,De(t,o,a,s)};n.useEffect(()=>{v===B.Default&&O.current===!0&&!V&&Ne(z)},[z,v,O,Ne,V]),n.useEffect(()=>{V&&O.current===!0&&ve&&(rt(V,!0),O.current=!1)},[V,O.current,ve]),n.useEffect(()=>{g!==void 0&&Xe(g),g&&re({detail:{visible:!0}})},[g]);const Ce=n.useRef(P);n.useEffect(()=>{Ce.current&&!P&&C.current.scrollTop>_&&(re({detail:{visible:!1}}),Ce.current=!1),!Ce.current&&P&&(Ce.current=!0)},[P,_]),n.useEffect(()=>{if(fe(i.selectedSubSectionId),i.selectedSubSectionId&&(O.current=!0,v===B.IconTabBar)){let t;D(h).forEach(a=>{n.isValidElement(a)&&a.props&&a.props.children&&D(a.props.children).forEach(o=>{var s;n.isValidElement(o)&&o.props&&o.props.id===i.selectedSubSectionId&&(t=(s=a.props)==null?void 0:s.id)})}),t&&M(t)}},[i.selectedSubSectionId,h,v]);const dt=n.useRef(null);n.useEffect(()=>{const t=C.current,a=t.querySelectorAll('[id^="ObjectPageSection"]'),o=a[a.length-1],s=new ResizeObserver(([u])=>{const l=o.querySelectorAll('[id^="ObjectPageSubSection"]'),m=l[l.length-1],w=m??u.target;Fe&&!m||a.length===1&&!m?at(0):at(t.getBoundingClientRect().bottom-dt.current.getBoundingClientRect().bottom-w.getBoundingClientRect().height-ce)});return t&&o&&s.observe(o,{box:"border-box"}),()=>{s.disconnect()}},[y,_,oe,Fe,h]);const re=n.useCallback(t=>{var a,o;je.current=!0,Y.current=performance.now()+500,t.detail.visible?(Te(!1),nt(!0),(o=C.current)==null||o.classList.remove(p.headerCollapsed)):(Te(!0),(a=C.current)==null||a.classList.add(p.headerCollapsed))},[]),en=n.useCallback(t=>{var o;if(O.current=!0,v===B.IconTabBar){const s=t.detail.sectionId;M(s);const u=(o=C.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]'),l=D(h).findIndex(m=>{var w;return n.isValidElement(m)&&((w=m.props)==null?void 0:w.id)===s});W(t,l,s,u[l])}const a=t.detail.subSectionId;Y.current=performance.now()+200,fe(a)},[v,M,fe,O,h]),tn=k(p.objectPage,bn.sapScrollBar,R,v===B.IconTabBar&&p.iconTabBarMode),{onScroll:kn,selectedSubSectionId:Rn,...nn}=$t;n.useEffect(()=>{var l,m;const t=(l=C.current)==null?void 0:l.querySelectorAll('section[data-component-name="ObjectPageSection"]'),o=(((m=C.current)==null?void 0:m.clientHeight)??1e3)-ie-ce,s=`-${ie}px 0px -${o<0?0:o}px 0px`,u=new IntersectionObserver(([w])=>{if(w.isIntersecting&&O.current===!1&&C.current.getBoundingClientRect().top+ie+ce<=w.target.getBoundingClientRect().bottom){const le=It(w.target.id);M(le);const Ae=D(h).findIndex(xt=>{var St;return n.isValidElement(xt)&&((St=xt.props)==null?void 0:St.id)===le});W(Se.current,Ae,le,w.target)}},{root:C.current,rootMargin:s,threshold:[0]});return t.forEach(w=>{u.observe(w)}),()=>{u.disconnect()}},[h,ie,M,O]),n.useEffect(()=>{var a;const t=(a=C.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]');if(et){let o=t[t.length-1],s;for(let l=0;l<=t.length-1;l++){const m=t[l];if(C.current.getBoundingClientRect().top+ie+ce<=m.getBoundingClientRect().bottom){o=m,s=l;break}}const u=It(o==null?void 0:o.id);u!==z&&(M(u),W(Se.current,s??t.length-1,u,o)),tt(!1)}},[et]);const Q=g&&!He||!b||!N&&!He,Ie=n.useCallback(t=>{t.stopPropagation(),Q||re(we(t,{visible:y}))},[re,y,Q]),se=r&&r.props.snappedContent&&y===!0&&!!S,an=!!b,Pe=n.useCallback((t=!1)=>{var o,s,u;const a=t?p.titleInHeader:void 0;return r!=null&&r.props&&((o=r.props)==null?void 0:o.showSubHeaderRight)===void 0?n.cloneElement(r,{showSubHeaderRight:!0,className:k(a,(s=r==null?void 0:r.props)==null?void 0:s.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ie,"data-header-content-visible":b&&y!==!0,"data-is-snapped-rendered-outside":se}):n.cloneElement(r,{className:k(a,(u=r==null?void 0:r.props)==null?void 0:u.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ie,"data-header-content-visible":b&&y!==!0,"data-is-snapped-rendered-outside":se})},[r,Q,Ie,y,se,an]),mt=n.useRef(!0);n.useEffect(()=>{mt.current?mt.current=!1:Y.current=performance.now()+200},[se]);const on=n.useCallback(()=>{if(b!=null&&b.props)return n.cloneElement(b,{...b.props,topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden",flexShrink:0}:{...b.props.style,flexShrink:0},headerPinned:P||U,ref:Ke,children:e.jsxs("div",{className:p.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Ee,(b.props.children||K)&&e.jsxs("div",{"data-component-name":"ObjectPageHeaderContent",children:[K&&Pe(!0),b.props.children]})]})});if(K)return e.jsx(Vt,{topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden"}:void 0,headerPinned:P||U,ref:Ke,children:e.jsxs("div",{className:p.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Ee,e.jsx("div",{"data-component-name":"ObjectPageHeaderContent",children:K&&Pe(!0)})]})})},[b,_,P,U,K,Ee,Qe,Pe]),rn=t=>{var l;if(typeof We=="function"){const m=t.detail.tab.dataset,w=parseInt(m.index,10),le=m.parentId??m.sectionId,Ae=m.isSubTab?m.sectionId:void 0;if(We(we(t,{sectionIndex:w,sectionId:le,subSectionId:Ae})),t.defaultPrevented)return}t.preventDefault();const{sectionId:a,index:o,isSubTab:s,parentId:u}=t.detail.tab.dataset;if(s)en(we(t,{sectionId:u,subSectionId:a}));else{const m=D(h).find(w=>w.props.id==a);Zt(t,(l=m==null?void 0:m.props)==null?void 0:l.id,o,m)}},ut=n.useRef(),sn=n.useCallback(t=>{var a;if(je.current||(je.current=!0),!(Y.current>=performance.now())&&(Se.current=t,typeof i.onScroll=="function"&&i.onScroll(t),V&&fe(void 0),ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{tt(!0)},100),(!P||t.target.scrollTop===0)&&((a=C.current)==null||a.classList.remove(p.headerCollapsed)),U&&t.target.scrollTop!==ut.current)){if(t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight)return;ut.current=t.target.scrollTop,P||Te(!0),nt(!1)}},[_,P,i.onScroll,U,V]),Re=n.useCallback(t=>{var a,o;(t==null?void 0:t.type)==="mouseover"?(a=xe.current)==null||a.classList.add(p.headerHoverStyles):(o=xe.current)==null||o.classList.remove(p.headerHoverStyles)},[p.headerHoverStyles]),pt={...G};return y===!0&&(b||K)&&(pt[ne.titleFontSize]=f.sapObjectHeader_Title_SnappedFontSize),e.jsxs("div",{"data-component-name":"ObjectPage",slot:J,className:tn,style:pt,ref:zt,onScroll:sn,...nn,children:[e.jsxs("header",{onMouseOver:Re,onMouseLeave:Re,"data-component-name":"ObjectPageTopHeader",ref:xe,role:(bt=$==null?void 0:$.objectPageTopHeader)==null?void 0:bt.role,"data-not-clickable":Q,"aria-roledescription":((ft=$==null?void 0:$.objectPageTopHeader)==null?void 0:ft.ariaRoledescription)??"Object Page header",className:p.header,onClick:Ie,style:{gridAutoColumns:`min-content ${r&&S&&y===!0?"calc(100% - 3rem - 1rem)":"100%"}`,display:!L||y===!0?"grid":"none"},children:[r&&S&&y===!0&&e.jsx($e,{image:S,imageShapeCircle:E}),r&&Pe(),se&&e.jsx("div",{className:p.snappedContent,"data-component-name":"ATwithImageSnappedContentContainer",children:r.props.snappedContent})]}),on(),b&&r&&e.jsx("div",{"data-component-name":"ObjectPageAnchorBar",ref:Ze,className:p.anchorBar,style:{top:U||P?`${_+(y===!0?0:oe)}px`:`${_+5}px`},children:e.jsx(dn,{headerContentVisible:b&&y!==!0,headerContentPinnable:He,showHideHeaderButton:N,headerPinned:P,a11yConfig:$,onToggleHeaderContentVisibility:re,setHeaderPinned:Xe,onHoverToggleButton:Re,onPinnedStateChange:Jt})}),!Be&&e.jsx("div",{ref:dt,className:p.tabContainer,"data-component-name":"ObjectPageTabContainer",style:{top:P||U?`${_+(y===!0?0:oe)}px`:`${_}px`},children:e.jsx(hn,{collapsed:!0,fixed:!0,onTabSelect:rn,"data-component-name":"ObjectPageTabContainer",className:p.tabContainerComponent,children:D(h).map((t,a)=>{var s,u;if(!n.isValidElement(t)||!t.props)return null;const o=D(t.props.children).filter(l=>{var m;return n.isValidElement(l)&&((m=l==null?void 0:l.type)==null?void 0:m.displayName)==="ObjectPageSubSection"});return e.jsx(jt,{"data-index":a,"data-section-id":t.props.id,text:t.props.titleText,selected:z===((s=t.props)==null?void 0:s.id)||void 0,subTabs:o.map(l=>n.isValidElement(l)?e.jsx(jt,{"data-parent-id":t.props.id,"data-is-sub-tab":!0,"data-section-id":l.props.id,text:l.props.titleText,selected:l.props.id===V||void 0,"data-index":a,children:e.jsx("span",{style:{display:"none"}})},l.props.id):null),children:e.jsx("span",{style:{display:"none"}})},`Anchor-${(u=t.props)==null?void 0:u.id}`)})})}),e.jsxs("div",{"data-component-name":"ObjectPageContent",className:p.content,ref:Wt,children:[e.jsx("div",{style:{height:y?`${oe}px`:0},"aria-hidden":!0}),Be||Kt,e.jsx("div",{style:{height:`${ve}px`},"aria-hidden":!0})]}),I&&v===B.IconTabBar&&!ve&&e.jsx("div",{className:p.footerSpacer,"data-component-name":"ObjectPageFooterSpacer","aria-hidden":!0}),I&&e.jsx("footer",{className:p.footer,"data-component-name":"ObjectPageFooter",children:I})]})});F.displayName="ObjectPage";F.defaultProps={image:null,mode:B.Default,imageShapeCircle:!1,showHideHeaderButton:!1};try{F.displayName="ObjectPage",F.__docgenInfo={description:"A component that allows apps to easily display information related to a business object.\n\nThe `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.",displayName:"ObjectPage",props:{headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n\n__Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.\n\n__Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},image:{defaultValue:{value:"null"},description:"Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Defines the content area of the `ObjectPage`. It consists of sections and subsections.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ObjectPageSectionType | ObjectPageSectionType[]"}},selectedSectionId:{defaultValue:null,description:"Sets the current selected `ObjectPageSection` by `id`.\n\n__Note:__ If a valid `selectedSubSectionId` is set, this prop has no effect.",name:"selectedSectionId",required:!1,type:{name:"string"}},selectedSubSectionId:{defaultValue:null,description:"Sets the current selected `ObjectPageSubSection` by `id`.",name:"selectedSubSectionId",required:!1,type:{name:"string"}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` is hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showTitleInHeaderContent:{defaultValue:null,description:`Defines whether the title is displayed in the content section of the header or above the image.
@deprecated : This feature will be removed with our next major release.`,name:"showTitleInHeaderContent",required:!1,type:{name:"boolean"}},imageShapeCircle:{defaultValue:{value:"false"},description:"Defines whether the image should be displayed in a circle or in a square.<br />\n__Note:__ If the `image` is not a `string`, this prop has no effect.",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ObjectPageMode.Default"},description:'Defines the `ObjectPage` mode.\n\n- "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.\n- "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"IconTabBar"'},{value:'"IconTabBar"'}]}},showHideHeaderButton:{defaultValue:{value:"false"},description:"Defines whether the pin button of the header is displayed.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Defines whether the `headerContent` is pinnable.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ objectPageTopHeader?: { role?: string; ariaRoledescription?: string; }; dynamicPageAnchorBar?: { role?: string; }; }"}},placeholder:{defaultValue:null,description:"If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.",name:"placeholder",required:!1,type:{name:"ReactNode"}},onBeforeNavigate:{defaultValue:null,description:"The event is fired before the selected section is changed using the navigation. It can be aborted by the application with `preventDefault()`, which means that there will be no navigation.\n\n__Note:__ This event is only fired when navigating via tab-bar.",name:"onBeforeNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, ObjectPageTabSelectEventDetail>) => void"}},onSelectedSectionChange:{defaultValue:null,description:"Fired when the selected section changes.",name:"onSelectedSectionChange",required:!1,type:{name:"(event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement; }>) => void"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _n={section:{'& [data-component-name="ObjectPageSubSection"]:not(:first-child)':{paddingBlockStart:"0.5rem"}},headerContainer:{paddingBlock:"0.5rem",color:f.sapGroup_TitleTextColor,fontFamily:f.sapFontFamily},titleContainer:{borderTop:X.ObjectPageSectionBorderTop,boxSizing:"border-box",height:"2.25rem"},title:{height:X.ObjectPageSectionTitleHeight,lineHeight:X.ObjectPageSectionTitleLineHeight,color:f.sapGroup_TitleTextColor,fontSize:f.sapFontHeader4Size,display:"inline-block",maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:X.ObjectPageSectionTitleFontFamily,textDecoration:X.ObjectPageSectionTitleTextDecoration},uppercase:{textTransform:"uppercase"},wrap:{"& $titleContainer":{height:"unset"},"& $title":{whiteSpace:"normal",height:"unset",lineHeight:"normal"}},sectionContent:{whiteSpace:"normal",height:"100%"},sectionContentInner:{paddingBlock:"0.5rem",fontFamily:f.sapFontFamily,height:"100%",boxSizing:"border-box"}},Hn=_n,Bn=_e(Hn,{name:"ObjectPageSection"}),H=n.forwardRef((i,T)=>{const{titleText:r="",id:S,children:I,titleTextUppercase:v=!0,className:E,style:R,hideTitleText:G,titleTextLevel:J="H3",wrapTitleText:N,header:h,...A}=i,g=Bn(),L=`ObjectPageSection-${S}`,b=k(g.title,v&&g.uppercase);return e.jsxs("section",{ref:T,role:"region",className:k(g.section,N&&g.wrap,E),style:R,...A,id:L,"data-component-name":"ObjectPageSection",children:[!!h&&e.jsx("div",{className:g.headerContainer,children:h}),!G&&e.jsx("div",{role:"heading","aria-level":parseInt(J.slice(1)),className:g.titleContainer,"data-component-name":"ObjectPageSectionTitleText",children:e.jsx("div",{className:b,children:r})}),e.jsx("div",{className:g.sectionContent,children:e.jsx("div",{className:g.sectionContentInner,"data-component-name":"ObjectPageSectionContent",children:I})})]})});H.displayName="ObjectPageSection";try{H.displayName="ObjectPageSection",H.__docgenInfo={description:"Top-level information container of an `ObjectPage`.",displayName:"ObjectPageSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSection`.\n\n__Note:__ The `id` is taken into account when the section selection changes.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:{value:"''"},description:"Defines the title of the `ObjectPageSection`.",name:"titleText",required:!1,type:{name:"string"}},titleTextUppercase:{defaultValue:{value:"true"},description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the Section title or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TitleLevel.H3"},description:"Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},wrapTitleText:{defaultValue:null,description:"Determines whether the Section title wraps on multiple lines, when the available space is not enough.",name:"wrapTitleText",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Section header content.

__Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.`,name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Fn={objectPageSubSection:{"&:focus":{outline:`${f.sapContent_FocusWidth} ${f.sapContent_FocusStyle} ${f.sapContent_FocusColor}`,outlineOffset:`calc(-1 * ${f.sapContent_FocusWidth})`}},headerContainer:{marginBlockEnd:"0.5rem","& >:first-child":{marginInline:"0 0.25rem"},"& >:last-child:not(:first-child)":{marginInline:"0.25rem 0"},"& > *:not(:first-child):not(:last-child)":{marginInline:"0.25rem"}},subSectionTitle:{fontSize:f.sapFontHeader5Size,color:f.sapGroup_TitleTextColor,flexGrow:1},subSectionContent:{backgroundColor:X.ObjectPageSubSectionBackgroundColor,borderRadius:X.ObjectPageSubSectionBorderRadius,paddingInline:"0.5rem",paddingBlock:"1rem"},spacer:{flexGrow:1},uppercase:{textTransform:"uppercase"}},Dn=_e(Fn,{name:"ObjectPageSubSection"}),q=n.forwardRef((i,T)=>{const{children:r,id:S,titleText:I,className:v,style:E,actions:R,hideTitleText:G,titleTextLevel:J="H4",titleTextUppercase:N,...h}=i,A=`ObjectPageSubSection-${S}`,g=Dn(),L=k(g.objectPageSubSection,v);return e.jsxs("div",{ref:T,role:"region",style:E,tabIndex:-1,...h,className:L,id:A,"data-component-name":"ObjectPageSubSection",children:[e.jsxs(ae,{direction:ge.Row,justifyContent:mn.SpaceBetween,alignItems:qt.Center,className:g.headerContainer,"data-component-name":"ObjectPageSubSectionHeaderContainer",children:[G?e.jsx("span",{"aria-hidden":"true",className:g.spacer}):e.jsx("div",{role:"heading","aria-level":parseInt(J.slice(1)),className:k(g.subSectionTitle,N&&g.uppercase),"data-component-name":"ObjectPageSubSectionTitleText",children:I}),R&&R]}),e.jsx("div",{className:g.subSectionContent,"data-component-name":"ObjectPageSubSectionContent",children:r})]})});q.displayName="ObjectPageSubSection";try{q.displayName="ObjectPageSubSection",q.__docgenInfo={description:"Second-level information container of an `ObjectPage`.<br />\n__Note:__ This component should only be used inside an `ObjectPageSection` component.",displayName:"ObjectPageSubSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSubSection`.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSubSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:null,description:"Defines the title of the `ObjectPageSubSection`.",name:"titleText",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Actions available for this subsection.\n\n__Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the SubSection `titleText` or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TittleLevel.H4"},description:"Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTextUppercase:{defaultValue:null,description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const En={title:"Layouts & Floorplans / ObjectPage",component:F,argTypes:{headerTitle:{control:{disable:!0}},headerContent:{control:{disable:!0}},footer:{control:{disable:!0}},children:{control:{disable:!0}},placeholder:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{mode:B.Default,showHideHeaderButton:!0,selectedSectionId:"goals",headerContentPinnable:!0,imageShapeCircle:!0,image:ln,style:{height:"700px"},footer:e.jsx(xn,{design:Sn.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Positive,children:"Accept"}),e.jsx(j,{design:x.Negative,children:"Reject"})]})}),headerTitle:e.jsx(qe,{showSubHeaderRight:!0,header:"Denise Smith",subHeader:"Senior UI Developer",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Primary Action"},"1"),e.jsx(j,{children:"Action"},"2")]}),breadcrumbs:e.jsxs(yn,{children:[e.jsx(Me,{children:"Manager Cockpit"}),e.jsx(Me,{children:"My Team"}),e.jsx(Me,{children:"Employee Details"})]}),expandedContent:e.jsx(Ge,{children:"Information (only visible if header content is expanded)"}),snappedContent:e.jsx(Ge,{children:"Information (only visible if header content is collapsed/snapped)"}),children:e.jsx(fn,{state:jn.Success,children:"employed"})}),headerContent:e.jsx(Vt,{children:e.jsxs(ae,{wrap:un.Wrap,alignItems:qt.Center,children:[e.jsxs(ae,{direction:ge.Column,children:[e.jsx(Ve,{children:"+33 6 4512 5158"}),e.jsx(Ve,{href:"mailto:ui5-webcomponents-react@sap.com",children:"DeniseSmith@sap.com"}),e.jsx(Ve,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"https://github.com/SAP/ui5-webcomponents-react"})]}),e.jsxs(ae,{direction:ge.Column,style:{padding:"10px"},children:[e.jsx(Oe,{children:"San Jose"}),e.jsx(Oe,{children:"California, USA"})]})]})})}},de={render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",id:"goals","aria-label":"Goals",children:e.jsxs(Z,{columnsL:3,columnsXL:3,labelSpanXL:6,labelSpanL:6,columnsM:2,labelSpanM:6,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Evangelize the UI framework across the company",children:e.jsx(c,{children:"4 days overdue - Cascaded"})}),e.jsx(d,{label:"Get trained in development management direction",children:e.jsx(c,{children:"Due Nov, 21"})}),e.jsx(d,{label:"Mentor junior developers",children:e.jsx(c,{children:"Due Dec, 31 - Cascaded"})})]})}),e.jsxs(H,{titleText:"Personal",id:"personal","aria-label":"Personal",children:[e.jsx(q,{titleText:"Connect",id:"personal-connect","aria-label":"Connect",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,style:{minWidth:"120px"},children:"Custom Action"}),e.jsx(j,{design:x.Transparent,icon:"action-settings",tooltip:"settings"}),e.jsx(j,{design:x.Transparent,icon:"download",tooltip:"download"})]}),children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsxs(ee,{titleText:"Phone Numbers",children:[e.jsx(d,{label:"Home",children:e.jsx(c,{children:"+1 234-567-8901"})}),e.jsx(d,{label:"",children:e.jsx(c,{children:"+1 234-567-5555"})})]}),e.jsxs(ee,{titleText:"Social Accounts",children:[e.jsx(d,{label:"LinkedIn",children:e.jsx(c,{children:"/DeniseSmith"})}),e.jsx(d,{label:"Twitter",children:e.jsx(c,{children:"@DeniseSmith"})})]}),e.jsxs(ee,{titleText:"Addresses",children:[e.jsx(d,{label:"Home Address",children:e.jsx(c,{children:"2096 Mission Street"})}),e.jsx(d,{label:"Mailing Address",children:e.jsx(c,{children:"PO Box 32114"})})]}),e.jsx(ee,{titleText:"Mailing Address",children:e.jsx(d,{label:"Work",children:e.jsx(c,{children:"DeniseSmith@sap.com"})})})]})}),e.jsx(q,{titleText:"Payment Information",id:"personal-payment-information","aria-label":"Payment Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(ee,{titleText:"Salary",children:e.jsx(d,{label:"Bank Transfer",children:e.jsx(c,{children:"Money Bank, Inc."})})}),e.jsx(ee,{titleText:"Payment method for Expenses",children:e.jsx(d,{label:"Extra Travel Expenses",children:e.jsx(c,{children:"Cash 100 USD"})})})]})})]}),e.jsxs(H,{titleText:"Employment",id:"employment","aria-label":"Employment",children:[e.jsx(q,{titleText:"Job Information",id:"employment-job-information","aria-label":"Job Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Job Classification",children:e.jsxs(ae,{direction:ge.Column,children:[e.jsx(c,{children:"Senior UI Developer"}),e.jsx(Oe,{children:"(UIDEV-SR)"})]})}),e.jsx(d,{label:"Job Title",children:e.jsx(c,{children:"Developer"})}),e.jsx(d,{label:"Employee Class",children:e.jsx(c,{children:"Employee"})}),e.jsx(d,{label:"Manager",children:e.jsxs(ae,{direction:ge.Column,children:[e.jsx(c,{children:"Dan Smith"}),e.jsx(Oe,{children:"Development Manager"})]})}),e.jsx(d,{label:"Pay Grade",children:e.jsx(c,{children:"Salary Grade 18 (GR-14)"})}),e.jsx(d,{label:"FTE",children:e.jsx(c,{children:"1"})})]})}),e.jsx(q,{titleText:"Employee Details",id:"employment-employee-details","aria-label":"Employee Details",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"End Date",children:e.jsx(c,{children:"Dec 31, 9999"})}),e.jsx(d,{label:"Payroll Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"Benefits Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})}),e.jsx(d,{label:"Company Car Eligibility",children:e.jsx(c,{children:"Jan 01, 2021"})}),e.jsx(d,{label:"Equity Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})})]})}),e.jsx(q,{titleText:"Job Relationship",id:"employment-job-relationship","aria-label":"Job Relationship",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Manager",children:e.jsx(c,{children:"John Doe"})}),e.jsx(d,{label:"Scrum Master",children:e.jsx(c,{children:"Michael Adams"})}),e.jsx(d,{label:"Product Owner",children:e.jsx(c,{children:"John Miller"})})]})})]})]})}},me={name:"with IllustratedMessage",render(i){return e.jsx(F,{image:i.image,headerTitle:i.headerTitle,headerContent:i.headerContent,imageShapeCircle:!0,placeholder:e.jsx(Tn,{name:vn.UnableToLoad})})}},ue={name:"with custom overflow button",render(){const i={actionsToolbarProps:{overflowButton:e.jsx(vt,{design:x.Transparent,icon:"navigation-down-arrow"})},navigationActionsToolbarProps:{overflowButton:e.jsx(vt,{design:x.Transparent,icon:"menu2"})},actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Edit"},"edit"),e.jsx(j,{design:x.Transparent,children:"Delete"},"delete"),e.jsx(j,{design:x.Transparent,children:"Copy"},"copy"),e.jsx(j,{icon:"action",design:x.Transparent,children:"Action"},"action"),e.jsx(j,{design:x.Transparent,children:"Create"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong actions Button"})]}),navigationActions:e.jsxs(e.Fragment,{children:[e.jsx(j,{icon:"full-screen",design:x.Transparent},"fullscreen"),e.jsx(j,{icon:"exit-full-screen",design:x.Transparent},"exitFullscreen"),e.jsx(j,{icon:"decline",design:x.Transparent},"decline"),e.jsx(j,{design:x.Transparent,children:"UI5 Web Components For React"}),e.jsx(j,{design:x.Transparent,children:"Navigation Actions Button"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong navigation actions Button"})]})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{style:{width:"1000px"},showHideHeaderButton:!1,headerTitle:e.jsx(qe,{...i,header:e.jsx(Je,{wrappingType:"Normal",children:"Custom overflow buttons for navigationActions and actions (width: 1000px)"})})}),e.jsx(F,{style:{width:"1400px"},showHideHeaderButton:!1,headerTitle:e.jsx(qe,{...i,header:e.jsx(Je,{children:"Custom overflow buttons for actions (width: 1400px)"})})})]})}},pe={name:"section with custom header",render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",hideTitleText:!0,id:"goals","aria-label":"Goals",header:e.jsx(Je,{children:"Custom Header Section One"}),children:e.jsx("div",{style:{width:"100%",height:"200px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Personal",hideTitleText:!0,id:"personal","aria-label":"Personal",header:e.jsx(Ge,{hideCloseButton:!0,children:"Custom Header Section Two"}),children:e.jsx("div",{style:{width:"100%",height:"500px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Employment",hideTitleText:!0,id:"employment","aria-label":"Employment",header:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(Ct,{name:yt,style:{marginInlineEnd:"2rem"}}),e.jsx(c,{children:"Custom Header Section Three"}),e.jsx(Ct,{name:yt,style:{marginInlineStart:"2rem"}})]}),children:e.jsx("div",{style:{width:"100%",height:"300px",background:"cadetblue"}})})]})}},he={args:{selectedSectionId:"section1"},name:"with fullscreen section",render(i){return e.jsxs(F,{...i,mode:B.IconTabBar,children:[e.jsx(H,{titleText:"Section 1",id:"section1",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightblue"},children:"It is recommended to only use fullscreen sections in TabBar mode, otherwise your layout will most probably break!"})}),e.jsx(H,{titleText:"Section 2",id:"section2",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightgreen"}})}),e.jsx(H,{titleText:"Section with Overflow",id:"section3",style:{height:"100%",overflow:"auto"},children:e.jsx("div",{style:{height:"300%",background:"lightyellow"}})})]})}};var Pt,wt,Ot;de.parameters={...de.parameters,docs:{...(Pt=de.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render(args) {
    return <ObjectPage {...args}>
        <ObjectPageSection titleText="Goals" id="goals" aria-label="Goals">
          <Form columnsL={3} columnsXL={3} labelSpanXL={6} labelSpanL={6} columnsM={2} labelSpanM={6} style={{
          alignItems: 'baseline'
        }}>
            <FormItem label="Evangelize the UI framework across the company">
              <Text>4 days overdue - Cascaded</Text>
            </FormItem>
            <FormItem label="Get trained in development management direction">
              <Text>Due Nov, 21</Text>
            </FormItem>
            <FormItem label="Mentor junior developers">
              <Text>Due Dec, 31 - Cascaded</Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection titleText="Personal" id="personal" aria-label="Personal">
          <ObjectPageSubSection titleText="Connect" id="personal-connect" aria-label="Connect" actions={<>
                <Button design={ButtonDesign.Emphasized} style={{
            minWidth: '120px'
          }}>
                  Custom Action
                </Button>
                <Button design={ButtonDesign.Transparent} icon="action-settings" tooltip="settings" />
                <Button design={ButtonDesign.Transparent} icon="download" tooltip="download" />
              </>}>
            <Form columnsXL={4} columnsL={4} style={{
            alignItems: 'baseline'
          }}>
              <FormGroup titleText="Phone Numbers">
                <FormItem label="Home">
                  <Text>+1 234-567-8901</Text>
                </FormItem>
                <FormItem label="">
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Social Accounts">
                <FormItem label="LinkedIn">
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem label="Twitter">
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Addresses">
                <FormItem label="Home Address">
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem label="Mailing Address">
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Mailing Address">
                <FormItem label="Work">
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Payment Information" id="personal-payment-information" aria-label="Payment Information">
            <Form columnsXL={4} columnsL={4} style={{
            alignItems: 'baseline'
          }}>
              <FormGroup titleText="Salary">
                <FormItem label="Bank Transfer">
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Payment method for Expenses">
                <FormItem label="Extra Travel Expenses">
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection titleText="Employment" id="employment" aria-label="Employment">
          <ObjectPageSubSection titleText="Job Information" id="employment-job-information" aria-label="Job Information">
            <Form columnsXL={4} columnsL={4} style={{
            alignItems: 'baseline'
          }}>
              <FormItem label="Job Classification">
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Senior UI Developer</Text>
                  <Label>(UIDEV-SR)</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Job Title">
                <Text>Developer</Text>
              </FormItem>
              <FormItem label="Employee Class">
                <Text>Employee</Text>
              </FormItem>
              <FormItem label="Manager">
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Dan Smith</Text>
                  <Label>Development Manager</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Pay Grade">
                <Text>Salary Grade 18 (GR-14)</Text>
              </FormItem>
              <FormItem label="FTE">
                <Text>1</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Employee Details" id="employment-employee-details" aria-label="Employee Details">
            <Form columnsXL={4} columnsL={4} style={{
            alignItems: 'baseline'
          }}>
              <FormItem label="Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="End Date">
                <Text>Dec 31, 9999</Text>
              </FormItem>
              <FormItem label="Payroll Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="Benefits Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
              <FormItem label="Company Car Eligibility">
                <Text>Jan 01, 2021</Text>
              </FormItem>
              <FormItem label="Equity Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Job Relationship" id="employment-job-relationship" aria-label="Job Relationship">
            <Form columnsXL={4} columnsL={4} style={{
            alignItems: 'baseline'
          }}>
              <FormItem label="Manager">
                <Text>John Doe</Text>
              </FormItem>
              <FormItem label="Scrum Master">
                <Text>Michael Adams</Text>
              </FormItem>
              <FormItem label="Product Owner">
                <Text>John Miller</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>;
  }
}`,...(Ot=(wt=de.parameters)==null?void 0:wt.docs)==null?void 0:Ot.source}}};var _t,Ht,Bt;me.parameters={...me.parameters,docs:{...(_t=me.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  name: 'with IllustratedMessage',
  render(args) {
    return <ObjectPage image={args.image} headerTitle={args.headerTitle} headerContent={args.headerContent} imageShapeCircle placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />} />;
  }
}`,...(Bt=(Ht=me.parameters)==null?void 0:Ht.docs)==null?void 0:Bt.source}}};var Ft,Dt,Et;ue.parameters={...ue.parameters,docs:{...(Ft=ue.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  name: 'with custom overflow button',
  render() {
    const titleProps = {
      actionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon="navigation-down-arrow" />
      },
      navigationActionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon="menu2" />
      },
      actions: <>
          <Button key={'edit'} design={ButtonDesign.Emphasized}>
            Edit
          </Button>
          <Button key={'delete'} design={ButtonDesign.Transparent}>
            Delete
          </Button>
          <Button key={'copy'} design={ButtonDesign.Transparent}>
            Copy
          </Button>
          <Button key={'action'} icon="action" design={ButtonDesign.Transparent}>
            Action
          </Button>
          <Button design={ButtonDesign.Transparent}>Create</Button>
          <Button design={ButtonDesign.Transparent}>Loooooooooooooooooooooooooooooooooooong actions Button</Button>
        </>,
      navigationActions: <>
          <Button key={'fullscreen'} icon="full-screen" design={ButtonDesign.Transparent} />
          <Button key={'exitFullscreen'} icon="exit-full-screen" design={ButtonDesign.Transparent} />
          <Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />
          <Button design={ButtonDesign.Transparent}>UI5 Web Components For React</Button>
          <Button design={ButtonDesign.Transparent}>Navigation Actions Button</Button>
          <Button design={ButtonDesign.Transparent}>
            Loooooooooooooooooooooooooooooooooooong navigation actions Button
          </Button>
        </>
    };
    return <>
        <ObjectPage style={{
        width: '1000px'
      }} showHideHeaderButton={false} headerTitle={<DynamicPageTitle {...titleProps} header={<Title wrappingType="Normal">
                  Custom overflow buttons for navigationActions and actions (width: 1000px)
                </Title>} />} />
        <ObjectPage style={{
        width: '1400px'
      }} showHideHeaderButton={false} headerTitle={<DynamicPageTitle {...titleProps} header={<Title>Custom overflow buttons for actions (width: 1400px)</Title>} />} />
      </>;
  }
}`,...(Et=(Dt=ue.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var Nt,kt,Rt;pe.parameters={...pe.parameters,docs:{...(Nt=pe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  name: 'section with custom header',
  render(args) {
    return <ObjectPage {...args}>
        <ObjectPageSection titleText="Goals" hideTitleText id="goals" aria-label="Goals" header={<Title>Custom Header Section One</Title>}>
          <div style={{
          width: '100%',
          height: '200px',
          background: 'cadetblue'
        }} />
        </ObjectPageSection>
        <ObjectPageSection titleText="Personal" hideTitleText id="personal" aria-label="Personal" header={<MessageStrip hideCloseButton>Custom Header Section Two</MessageStrip>}>
          <div style={{
          width: '100%',
          height: '500px',
          background: 'cadetblue'
        }} />
        </ObjectPageSection>
        <ObjectPageSection titleText="Employment" hideTitleText id="employment" aria-label="Employment" header={<div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
              <Icon name={sunIcon} style={{
          marginInlineEnd: '2rem'
        }} />
              <Text>Custom Header Section Three</Text>
              <Icon name={sunIcon} style={{
          marginInlineStart: '2rem'
        }} />
            </div>}>
          <div style={{
          width: '100%',
          height: '300px',
          background: 'cadetblue'
        }} />
        </ObjectPageSection>
      </ObjectPage>;
  }
}`,...(Rt=(kt=pe.parameters)==null?void 0:kt.docs)==null?void 0:Rt.source}}};var At,Lt,Mt;he.parameters={...he.parameters,docs:{...(At=he.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    selectedSectionId: 'section1'
  },
  name: 'with fullscreen section',
  render(args) {
    return <ObjectPage {...args} mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection titleText="Section 1" id="section1" style={{
        height: '100%'
      }}>
          <div style={{
          height: '100%',
          background: 'lightblue'
        }}>
            It is recommended to only use fullscreen sections in TabBar mode, otherwise your layout will most probably
            break!
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section 2" id="section2" style={{
        height: '100%'
      }}>
          <div style={{
          height: '100%',
          background: 'lightgreen'
        }} />
        </ObjectPageSection>
        <ObjectPageSection titleText="Section with Overflow" id="section3" style={{
        height: '100%',
        overflow: 'auto'
      }}>
          <div style={{
          height: '300%',
          background: 'lightyellow'
        }} />
        </ObjectPageSection>
      </ObjectPage>;
  }
}`,...(Mt=(Lt=he.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};const Nn=["Default","WithIllustratedMessage","WithCustomOverflowButton","SectionWithCustomHeader","FullScreenSingleSection"],xa=Object.freeze(Object.defineProperty({__proto__:null,Default:de,FullScreenSingleSection:he,SectionWithCustomHeader:pe,WithCustomOverflowButton:ue,WithIllustratedMessage:me,__namedExportsOrder:Nn,default:En},Symbol.toStringTag,{value:"Module"}));export{xa as C,de as D,he as F,H as O,pe as S,me as W,ue as a,q as b};
