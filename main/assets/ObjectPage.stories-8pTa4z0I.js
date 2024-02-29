import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./UnableToLoad-XO7jIU-O.js";import{i as an}from"./Person-nLahJlpT.js";import{s as ft}from"./general-leave-request-59bXkmWr.js";import{c as ne,R as Re,u as rn,a as At,b as sn,D as Ve}from"./index-jAqDIJBR.js";import{F as oe,b as he,c as ln,a as Lt,d as cn}from"./index-pmORB0Fb.js";import{b as Z,a as d,F as ee}from"./index-qWspJPld.js";import{T as b}from"./ThemingParameters-UghqSl-x.js";import{e as Ae}from"./index-ENBflQbU.js";import{c as k}from"./clsx-Zbgk8kpT.js";import{r as n}from"./index-OjgoNOWw.js";import{c as we}from"./react-jss.esm-fzYOEaou.js";import{a as dn}from"./addCustomCSSWithScoping-tGNiKL_K.js";import{b as Mt}from"./Avatar-W7sCbj87.js";import{a as mn,T as xt}from"./index-C2sjlDIx.js";import{u as St}from"./withWebComponent-c-uI2wMj.js";import{d as un}from"./debounce-F9irgL9Y.js";import{G as pn}from"./GlobalStyleClasses-kWTEndz_.js";import{C as W}from"./CustomVariables-ISwRKzww.js";import{O as hn}from"./index-UwVNu_Hc.js";import{T as c}from"./index-SpQb4Cav.js";import{B as gn,a as bn}from"./index-IRfj6noM.js";import{B as j}from"./index-gRf168Go.js";import{B as x}from"./Button-6A8kFSGe.js";import{a as fn,B as Le}from"./index-facM4Mva.js";import{M as qe}from"./index-k_H4XbHc.js";import{V as xn}from"./ValueState-I_-hGNIb.js";import{L as Me}from"./index-f6bluueW.js";import{L as Pe}from"./index-AdeU9dSa.js";import{I as Sn}from"./index-G59o-LE0.js";import{I as yn}from"./IllustratedMessage-OXKcQk0N.js";import{T as yt}from"./index-OguNYECG.js";import{T as Ge}from"./index-OyOVNIPb.js";import{I as jt}from"./index-2d9v8_Tk.js";var B=(i=>(i.Default="Default",i.IconTabBar="IconTabBar",i))(B||{});const D=i=>{const T=[];return n.Children.forEach(i,r=>{n.isValidElement(r)&&T.push(r)}),T},jn={base:{alignSelf:"center",opacity:0,paddingInlineEnd:"1rem"},hidden:{opacity:0},visible:{transition:"opacity 0.5s",opacity:1},imageContainer:{display:"inline-block",verticalAlign:"middle",maxHeight:"3rem",width:"3rem",maxWidth:"3rem"},image:{width:"100%",height:"100%"}},Tn=we(jn,{name:"CollapsedAvatar"}),Je=i=>{const{image:T,imageShapeCircle:r,style:S}=i,I=Tn(),[v,E]=n.useState(!1),R=n.useRef(null),q=n.useMemo(()=>{var N,p;return T?typeof T=="string"?e.jsx("span",{className:I.imageContainer,style:{borderRadius:r?"50%":0,overflow:"hidden"},children:e.jsx("img",{className:I.image,src:T,alt:"Object Page Image"})}):n.cloneElement(T,{size:Mt.S,className:(N=T.props)!=null&&N.className?`${I.imageContainer} ${(p=T.props)==null?void 0:p.className}`:I.imageContainer}):null},[T,r]);n.useEffect(()=>{E(!0)},[]);const G=k(I.base,v?I.visible:I.hidden);return e.jsx("div",{ref:R,className:G,style:S,"data-component-name":"ObjectPageCollapsedAvatar",children:q})};try{Je.displayName="CollapsedAvatar",Je.__docgenInfo={description:"",displayName:"CollapsedAvatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},imageShapeCircle:{defaultValue:null,description:"",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const te={anchorFloat:"--_ui5wcr_ObjectPage_actions_float",anchorLeft:"--_ui5wcr_ObjectPage_actions_left",anchorRight:"--_ui5wcr_ObjectPage_actions_right"},vn={objectPage:{[ne.headerDisplay]:"block",[ne.titleFontSize]:b.sapObjectHeader_Title_FontSize,container:"objectPage / inline-size",boxSizing:"border-box",display:"flex",flexDirection:"column",width:"100%",height:"100%",maxHeight:"100vh",position:"relative",whiteSpace:"normal",fontFamily:b.sapFontFamily,backgroundColor:b.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth",'& section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"none"},'& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"block"}},"@global html":{[te.anchorFloat]:"right",[te.anchorRight]:"1.25rem",[te.anchorLeft]:"unset"},'@global [dir="rtl"]':{[te.anchorFloat]:"left",[te.anchorRight]:"unset",[te.anchorLeft]:"1.25rem"},iconTabBarMode:{'& section[data-component-name="ObjectPageSection"] > div[role="heading"]':{display:"none"}},headerCollapsed:{[ne.headerDisplay]:"none",[ne.titleFontSize]:b.sapObjectHeader_Title_SnappedFontSize},headerContainer:{extend:Re,marginBottom:"0.25rem",backgroundColor:b.sapObjectHeader_Background,display:"grid",gridAutoColumns:"min-content calc(100% - 5rem - 2rem)",'& [data-component-name="ObjectPageHeaderContent"]':{gridColumn:2}},headerHoverStyles:{'&[data-not-clickable="true"]':{cursor:"unset"},'&[data-not-clickable="false"]':{backgroundColor:`${b.sapObjectHeader_Hover_Background}`,'& [data-component-name="DynamicPageTitle"]':{backgroundColor:b.sapObjectHeader_Hover_Background}}},header:{extend:Re,[ne.headerDisplay]:"block",boxSizing:"border-box",backgroundColor:b.sapObjectHeader_Background,position:"sticky",top:0,zIndex:2,'& [data-component-name="DynamicPageTitle"]':{gridColumn:2,paddingInline:0},cursor:"pointer"},headerImage:{minWidth:"5rem",maxWidth:"5rem",maxHeight:"5rem",display:"inline-block",marginInlineEnd:"2rem"},image:{width:"100%",height:"100%"},anchorBar:{position:"sticky",zIndex:2},tabContainer:{position:"sticky",zIndex:1,"@container objectPage (max-width: 599px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":0},"@container objectPage (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1440px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"2rem"}},tabContainerComponent:{"&::part(content)":{display:"none"},"&::part(tabstrip)":{padding:0,paddingInline:"var(--_ui5wcr_ObjectPage_tab_bar_inline_padding)",boxShadow:`inset 0 -0.0625rem ${b.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%)`}},content:{extend:Re,flexGrow:1,position:"relative"},footer:{position:"sticky",bottom:"0.5rem",margin:"0 0.5rem"},footerSpacer:{height:"1rem",flexShrink:0},subSectionPopover:{"&::part(content)":{padding:0}},titleInHeader:{padding:0},snappedContent:{gridColumn:"1 / span 2"}},Cn=(i,T)=>D(i).find(r=>{var S;return n.isValidElement(r)&&((S=r.props)==null?void 0:S.id)===T}),Tt=i=>i?i.replace(/^ObjectPageSection-/,""):null;dn("ui5-tabcontainer",`
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `);const le=48,In=we(vn,{name:"ObjectPage"}),F=n.forwardRef((i,T)=>{var mt,ut,pt,ht;const{headerTitle:r,image:S,footer:I,mode:v,imageShapeCircle:E,className:R,style:q,slot:G,showHideHeaderButton:N,children:p,selectedSectionId:A,alwaysShowContentHeader:h,showTitleInHeaderContent:X,headerContent:g,headerContentPinnable:Oe,a11yConfig:J,placeholder:_e,onSelectedSectionChange:$e,onToggleHeaderContent:ze,onPinnedStateChange:Vt,...qt}=i,u=In(),ge=(ut=(mt=D(p)[0])==null?void 0:mt.props)==null?void 0:ut.id,[$,L]=n.useState(A??ge),[M,be]=n.useState(i.selectedSubSectionId),[P,Ue]=n.useState(h),w=n.useRef(!1),We=n.useRef(),[Gt,C]=St(T),fe=n.useRef(null),xe=n.useRef(),Jt=n.useRef(0),[Xe,Ye]=St(g==null?void 0:g.ref),Ke=n.useRef(null),$t=n.useRef(null),Se=n.useRef(null),[Qe,Ze]=n.useState(!1),ye=n.useRef(!1),[zt,je]=n.useState(void 0),[z,et]=n.useState(!1),Y=n.useRef(0),K=r&&X,[Te,tt]=n.useState(0),[He,Ut]=n.useState(null),Wt=He??p;n.useEffect(()=>{const t=v===B.IconTabBar?Cn(p,$):null;Ut(t)},[v,p,$]);const nt=n.useRef($),Be=(t,o,a,s)=>{typeof $e=="function"&&nt.current!==a&&($e(Ae(t,{selectedSectionIndex:parseInt(o,10),selectedSectionId:a,section:s})),nt.current=a)},U=n.useRef(un(Be,500)).current;n.useEffect(()=>()=>{U.cancel(),clearTimeout(Se.current)},[]);const{topHeaderHeight:_,headerContentHeight:ae,anchorBarHeight:Xt,totalHeaderHeight:ie,headerCollapsed:y}=rn(C,fe,Ye,Ke,[zt,je],{noHeader:!r&&!g,fixedHeader:P,scrollTimeout:Y});n.useEffect(()=>{typeof ze=="function"&&ye.current&&ze(y!==!0)},[y]);const Fe=n.useMemo(()=>{var t;return S?typeof S=="string"?e.jsx("span",{className:u.headerImage,style:{borderRadius:E?"50%":0,overflow:"hidden"},children:e.jsx("img",{src:S,className:u.image,alt:"Company Logo"})}):n.cloneElement(S,{size:Mt.L,className:k(u.headerImage,(t=S.props)==null?void 0:t.className)}):null},[S,u.headerImage,u.image,E]),ot=(t,o=!1)=>{var s;const a=(s=C.current)==null?void 0:s.querySelector(`#${o?"ObjectPageSubSection":"ObjectPageSection"}-${t}`);if(Y.current=performance.now()+500,a){const m=_||Jt.current;a.style.scrollMarginBlockStart=m+Xt+le+(P?ae:0)+"px",a.focus(),a.scrollIntoView({behavior:"smooth"}),a.style.scrollMarginBlockStart="0px"}},De=t=>{var o;t&&(ge===t?(o=C.current)==null||o.scrollTo({top:0,behavior:"smooth"}):ot(t),w.current=!1)},at=()=>{var o;const t=A??ge;if(t!==We.current){U.cancel(),w.current=!0,L(t),We.current=t;const a=(o=C.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]'),s=D(p).findIndex(m=>{var l;return n.isValidElement(m)&&((l=m.props)==null?void 0:l.id)===t});Be({},s,t,a[0])}},[Ee,it]=n.useState(0),rt=n.useRef();n.useEffect(()=>(A&&(v===B.Default?Ee<750&&Ee!==void 0?rt.current=requestAnimationFrame(t=>{it(t)}):(it(void 0),at()):at()),()=>{cancelAnimationFrame(rt.current)}),[Ee,A,ge,U]);const Yt=(t,o,a,s)=>{w.current=!0,U.cancel(),L(m=>(m===o&&De(o),o)),xe.current=t,Be(t,a,o,s)};n.useEffect(()=>{v===B.Default&&w.current===!0&&!M&&De($)},[$,v,w,De,M]),n.useEffect(()=>{M&&w.current===!0&&Te&&(ot(M,!0),w.current=!1)},[M,w.current,Te]),n.useEffect(()=>{h!==void 0&&Ue(h),h&&re({detail:{visible:!0}})},[h]);const ve=n.useRef(P);n.useEffect(()=>{ve.current&&!P&&C.current.scrollTop>_&&(re({detail:{visible:!1}}),ve.current=!1),!ve.current&&P&&(ve.current=!0)},[P,_]),n.useEffect(()=>{if(be(i.selectedSubSectionId),i.selectedSubSectionId&&(w.current=!0,v===B.IconTabBar)){let t;D(p).forEach(o=>{n.isValidElement(o)&&o.props&&o.props.children&&D(o.props.children).forEach(a=>{var s;n.isValidElement(a)&&a.props&&a.props.id===i.selectedSubSectionId&&(t=(s=o.props)==null?void 0:s.id)})}),t&&L(t)}},[i.selectedSubSectionId,p,v]);const st=n.useRef(null);n.useEffect(()=>{const t=C.current,o=t.querySelectorAll('[id^="ObjectPageSection"]'),a=o[o.length-1],s=new ResizeObserver(([m])=>{const l=a.querySelectorAll('[id^="ObjectPageSubSection"]'),f=l[l.length-1],O=f??m.target;He&&!f||o.length===1&&!f?tt(0):tt(t.getBoundingClientRect().bottom-st.current.getBoundingClientRect().bottom-O.getBoundingClientRect().height-le)});return t&&a&&s.observe(a,{box:"border-box"}),()=>{s.disconnect()}},[y,_,ae,He,p]);const re=n.useCallback(t=>{var o,a;ye.current=!0,Y.current=performance.now()+500,t.detail.visible?(je(!1),et(!0),(a=C.current)==null||a.classList.remove(u.headerCollapsed)):(je(!0),(o=C.current)==null||o.classList.add(u.headerCollapsed))},[]),Kt=n.useCallback(t=>{var a;if(w.current=!0,v===B.IconTabBar){const s=t.detail.sectionId;L(s);const m=(a=C.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]'),l=D(p).findIndex(f=>{var O;return n.isValidElement(f)&&((O=f.props)==null?void 0:O.id)===s});U(t,l,s,m[l])}const o=t.detail.subSectionId;Y.current=performance.now()+200,be(o)},[v,L,be,w,p]),Qt=k(u.objectPage,pn.sapScrollBar,R,v===B.IconTabBar&&u.iconTabBarMode),{onScroll:Dn,selectedSubSectionId:En,...Zt}=qt;n.useEffect(()=>{var l,f;const t=(l=C.current)==null?void 0:l.querySelectorAll('section[data-component-name="ObjectPageSection"]'),a=(((f=C.current)==null?void 0:f.clientHeight)??1e3)-ie-le,s=`-${ie}px 0px -${a<0?0:a}px 0px`,m=new IntersectionObserver(([O])=>{if(O.isIntersecting&&w.current===!1&&C.current.getBoundingClientRect().top+ie+le<=O.target.getBoundingClientRect().bottom){const ke=Tt(O.target.id);L(ke);const on=D(p).findIndex(gt=>{var bt;return n.isValidElement(gt)&&((bt=gt.props)==null?void 0:bt.id)===ke});U(xe.current,on,ke,O.target)}},{root:C.current,rootMargin:s,threshold:[0]});return t.forEach(O=>{m.observe(O)}),()=>{m.disconnect()}},[p,ie,L,w]),n.useEffect(()=>{var o;const t=(o=C.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]');if(Qe){let a=t[t.length-1],s;for(let l=0;l<=t.length-1;l++){const f=t[l];if(C.current.getBoundingClientRect().top+ie+le<=f.getBoundingClientRect().bottom){a=f,s=l;break}}const m=Tt(a==null?void 0:a.id);m!==$&&(L(m),U(xe.current,s??t.length-1,m,a)),Ze(!1)}},[Qe]);const Q=h&&!Oe||!g||!N&&!Oe,Ce=n.useCallback(t=>{t.stopPropagation(),Q||re(Ae(t,{visible:y}))},[re,y,Q]),se=r&&r.props.snappedContent&&y===!0&&!!S,Ie=n.useCallback((t=!1)=>{var a,s,m;const o=t?u.titleInHeader:void 0;return r!=null&&r.props&&((a=r.props)==null?void 0:a.showSubHeaderRight)===void 0?n.cloneElement(r,{showSubHeaderRight:!0,className:k(o,(s=r==null?void 0:r.props)==null?void 0:s.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ce,"data-header-content-visible":g&&y!==!0,"data-is-snapped-rendered-outside":se}):n.cloneElement(r,{className:k(o,(m=r==null?void 0:r.props)==null?void 0:m.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ce,"data-header-content-visible":g&&y!==!0,"data-is-snapped-rendered-outside":se})},[r,Q,Ce,y,se,!!g]),lt=n.useRef(!0);n.useEffect(()=>{lt.current?lt.current=!1:Y.current=performance.now()+200},[se]);const en=n.useCallback(()=>{if(g!=null&&g.props)return n.cloneElement(g,{...g.props,topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden",flexShrink:0}:{...g.props.style,flexShrink:0},headerPinned:P||z,ref:Xe,children:e.jsxs("div",{className:u.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Fe,(g.props.children||K)&&e.jsxs("div",{"data-component-name":"ObjectPageHeaderContent",children:[K&&Ie(!0),g.props.children]})]})});if(K)return e.jsx(At,{topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden"}:void 0,headerPinned:P||z,ref:Xe,children:e.jsxs("div",{className:u.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Fe,e.jsx("div",{"data-component-name":"ObjectPageHeaderContent",children:K&&Ie(!0)})]})})},[g,_,P,z,K,Fe,Ye,Ie]),tn=t=>{var l;t.preventDefault();const{sectionId:o,index:a,isSubTab:s,parentId:m}=t.detail.tab.dataset;if(s)Kt(Ae(t,{sectionId:m,subSectionId:o}));else{const f=D(p).find(O=>O.props.id==o);Yt(t,(l=f==null?void 0:f.props)==null?void 0:l.id,a,f)}},ct=n.useRef(),nn=n.useCallback(t=>{var o;if(ye.current||(ye.current=!0),!(Y.current>=performance.now())&&(xe.current=t,typeof i.onScroll=="function"&&i.onScroll(t),M&&be(void 0),Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>{Ze(!0)},100),(!P||t.target.scrollTop===0)&&((o=C.current)==null||o.classList.remove(u.headerCollapsed)),z&&t.target.scrollTop!==ct.current)){if(t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight)return;ct.current=t.target.scrollTop,P||je(!0),et(!1)}},[_,P,i.onScroll,z,M]),Ne=n.useCallback(t=>{var o,a;(t==null?void 0:t.type)==="mouseover"?(o=fe.current)==null||o.classList.add(u.headerHoverStyles):(a=fe.current)==null||a.classList.remove(u.headerHoverStyles)},[u.headerHoverStyles]),dt={...q};return y===!0&&(g||K)&&(dt[ne.titleFontSize]=b.sapObjectHeader_Title_SnappedFontSize),e.jsxs("div",{"data-component-name":"ObjectPage",slot:G,className:Qt,style:dt,ref:Gt,onScroll:nn,...Zt,children:[e.jsxs("header",{onMouseOver:Ne,onMouseLeave:Ne,"data-component-name":"ObjectPageTopHeader",ref:fe,role:(pt=J==null?void 0:J.objectPageTopHeader)==null?void 0:pt.role,"data-not-clickable":Q,"aria-roledescription":((ht=J==null?void 0:J.objectPageTopHeader)==null?void 0:ht.ariaRoledescription)??"Object Page header",className:u.header,onClick:Ce,style:{gridAutoColumns:`min-content ${r&&S&&y===!0?"calc(100% - 3rem - 1rem)":"100%"}`,display:!X||y===!0?"grid":"none"},children:[r&&S&&y===!0&&e.jsx(Je,{image:S,imageShapeCircle:E}),r&&Ie(),se&&e.jsx("div",{className:u.snappedContent,"data-component-name":"ATwithImageSnappedContentContainer",children:r.props.snappedContent})]}),en(),g&&r&&e.jsx("div",{"data-component-name":"ObjectPageAnchorBar",ref:Ke,className:u.anchorBar,style:{top:z||P?`${_+(y===!0?0:ae)}px`:`${_+5}px`},children:e.jsx(sn,{headerContentVisible:g&&y!==!0,headerContentPinnable:Oe,showHideHeaderButton:N,headerPinned:P,a11yConfig:J,onToggleHeaderContentVisibility:re,setHeaderPinned:Ue,onHoverToggleButton:Ne,onPinnedStateChange:Vt})}),!_e&&e.jsx("div",{ref:st,className:u.tabContainer,"data-component-name":"ObjectPageTabContainer",style:{top:P||z?`${_+(y===!0?0:ae)}px`:`${_}px`},children:e.jsx(mn,{collapsed:!0,fixed:!0,onTabSelect:tn,"data-component-name":"ObjectPageTabContainer",className:u.tabContainerComponent,children:D(p).map((t,o)=>{var s,m;if(!n.isValidElement(t)||!t.props)return null;const a=D(t.props.children).filter(l=>{var f;return n.isValidElement(l)&&((f=l==null?void 0:l.type)==null?void 0:f.displayName)==="ObjectPageSubSection"});return e.jsx(xt,{"data-index":o,"data-section-id":t.props.id,text:t.props.titleText,selected:$===((s=t.props)==null?void 0:s.id)||void 0,subTabs:a.map(l=>n.isValidElement(l)?e.jsx(xt,{"data-parent-id":t.props.id,"data-is-sub-tab":!0,"data-section-id":l.props.id,text:l.props.titleText,selected:l.props.id===M||void 0,children:e.jsx("span",{style:{display:"none"}})},l.props.id):null),children:e.jsx("span",{style:{display:"none"}})},`Anchor-${(m=t.props)==null?void 0:m.id}`)})})}),e.jsxs("div",{"data-component-name":"ObjectPageContent",className:u.content,ref:$t,children:[e.jsx("div",{style:{height:y?`${ae}px`:0},"aria-hidden":!0}),_e||Wt,e.jsx("div",{style:{height:`${Te}px`},"aria-hidden":!0})]}),I&&v===B.IconTabBar&&!Te&&e.jsx("div",{className:u.footerSpacer,"data-component-name":"ObjectPageFooterSpacer","aria-hidden":!0}),I&&e.jsx("footer",{className:u.footer,"data-component-name":"ObjectPageFooter",children:I})]})});F.displayName="ObjectPage";F.defaultProps={image:null,mode:B.Default,imageShapeCircle:!1,showHideHeaderButton:!1};try{F.displayName="ObjectPage",F.__docgenInfo={description:"A component that allows apps to easily display information related to a business object.\n\nThe `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.",displayName:"ObjectPage",props:{headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n\n__Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.\n\n__Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},image:{defaultValue:{value:"null"},description:"Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Defines the content area of the `ObjectPage`. It consists of sections and subsections.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ObjectPageSectionType | ObjectPageSectionType[]"}},selectedSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSection` section.",name:"selectedSectionId",required:!1,type:{name:"string"}},selectedSubSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSubSection` section.",name:"selectedSubSectionId",required:!1,type:{name:"string"}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` is hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showTitleInHeaderContent:{defaultValue:null,description:"Defines whether the title is displayed in the content section of the header or above the image.",name:"showTitleInHeaderContent",required:!1,type:{name:"boolean"}},imageShapeCircle:{defaultValue:{value:"false"},description:"Defines whether the image should be displayed in a circle or in a square.<br />\n__Note:__ If the `image` is not a `string`, this prop has no effect.",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ObjectPageMode.Default"},description:'Defines the `ObjectPage` mode.\n\n- "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.\n- "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"IconTabBar"'},{value:'"IconTabBar"'}]}},showHideHeaderButton:{defaultValue:{value:"false"},description:"Defines whether the pin button of the header is displayed.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Defines whether the `headerContent` is pinnable.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ objectPageTopHeader?: { role?: string; ariaRoledescription?: string; }; dynamicPageAnchorBar?: { role?: string; }; }"}},placeholder:{defaultValue:null,description:"If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.",name:"placeholder",required:!1,type:{name:"ReactNode"}},onSelectedSectionChange:{defaultValue:null,description:"Fired when the selected section changes.",name:"onSelectedSectionChange",required:!1,type:{name:"(event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement; }>) => void"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Pn={section:{'& [data-component-name="ObjectPageSubSection"]:not(:first-child)':{paddingBlockStart:"0.5rem"}},headerContainer:{paddingBlock:"0.5rem",color:b.sapGroup_TitleTextColor,fontFamily:b.sapFontFamily},titleContainer:{borderTop:W.ObjectPageSectionBorderTop,boxSizing:"border-box",height:"2.25rem"},title:{height:W.ObjectPageSectionTitleHeight,lineHeight:W.ObjectPageSectionTitleLineHeight,color:b.sapGroup_TitleTextColor,fontSize:b.sapFontHeader4Size,display:"inline-block",maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:W.ObjectPageSectionTitleFontFamily,textDecoration:W.ObjectPageSectionTitleTextDecoration},uppercase:{textTransform:"uppercase"},wrap:{"& $titleContainer":{height:"unset"},"& $title":{whiteSpace:"normal",height:"unset",lineHeight:"normal"}},sectionContent:{whiteSpace:"normal",height:"100%"},sectionContentInner:{paddingBlock:"0.5rem",fontFamily:b.sapFontFamily,height:"100%",boxSizing:"border-box"}},wn=Pn,On=we(wn,{name:"ObjectPageSection"}),H=n.forwardRef((i,T)=>{const{titleText:r="",id:S,children:I,titleTextUppercase:v=!0,className:E,style:R,hideTitleText:q,titleTextLevel:G="H3",wrapTitleText:N,header:p,...A}=i,h=On(),X=`ObjectPageSection-${S}`,g=k(h.title,v&&h.uppercase);return e.jsxs("section",{ref:T,role:"region",className:k(h.section,N&&h.wrap,E),style:R,...A,id:X,"data-component-name":"ObjectPageSection",children:[!!p&&e.jsx("div",{className:h.headerContainer,children:p}),!q&&e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:h.titleContainer,"data-component-name":"ObjectPageSectionTitleText",children:e.jsx("div",{className:g,children:r})}),e.jsx("div",{className:h.sectionContent,children:e.jsx("div",{className:h.sectionContentInner,"data-component-name":"ObjectPageSectionContent",children:I})})]})});H.displayName="ObjectPageSection";try{H.displayName="ObjectPageSection",H.__docgenInfo={description:"Top-level information container of an `ObjectPage`.",displayName:"ObjectPageSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSection`.\n\n__Note:__ The `id` is taken into account when the section selection changes.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:{value:"''"},description:"Defines the title of the `ObjectPageSection`.",name:"titleText",required:!1,type:{name:"string"}},titleTextUppercase:{defaultValue:{value:"true"},description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the Section title or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TitleLevel.H3"},description:"Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},wrapTitleText:{defaultValue:null,description:"Determines whether the Section title wraps on multiple lines, when the available space is not enough.",name:"wrapTitleText",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Section header content.

__Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.`,name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _n={objectPageSubSection:{"&:focus":{outline:`${b.sapContent_FocusWidth} ${b.sapContent_FocusStyle} ${b.sapContent_FocusColor}`,outlineOffset:`calc(-1 * ${b.sapContent_FocusWidth})`}},headerContainer:{marginBlockEnd:"0.5rem","& >:first-child":{marginInline:"0 0.25rem"},"& >:last-child:not(:first-child)":{marginInline:"0.25rem 0"},"& > *:not(:first-child):not(:last-child)":{marginInline:"0.25rem"}},subSectionTitle:{fontSize:b.sapFontHeader5Size,color:b.sapGroup_TitleTextColor,flexGrow:1},subSectionContent:{backgroundColor:W.ObjectPageSubSectionBackgroundColor,borderRadius:W.ObjectPageSubSectionBorderRadius,paddingInline:"0.5rem",paddingBlock:"1rem"},spacer:{flexGrow:1},uppercase:{textTransform:"uppercase"}},Hn=we(_n,{name:"ObjectPageSubSection"}),V=n.forwardRef((i,T)=>{const{children:r,id:S,titleText:I,className:v,style:E,actions:R,hideTitleText:q,titleTextLevel:G="H4",titleTextUppercase:N,...p}=i,A=`ObjectPageSubSection-${S}`,h=Hn(),X=k(h.objectPageSubSection,v);return e.jsxs("div",{ref:T,role:"region",style:E,tabIndex:-1,...p,className:X,id:A,"data-component-name":"ObjectPageSubSection",children:[e.jsxs(oe,{direction:he.Row,justifyContent:ln.SpaceBetween,alignItems:Lt.Center,className:h.headerContainer,"data-component-name":"ObjectPageSubSectionHeaderContainer",children:[q?e.jsx("span",{"aria-hidden":"true",className:h.spacer}):e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:k(h.subSectionTitle,N&&h.uppercase),"data-component-name":"ObjectPageSubSectionTitleText",children:I}),R&&R]}),e.jsx("div",{className:h.subSectionContent,"data-component-name":"ObjectPageSubSectionContent",children:r})]})});V.displayName="ObjectPageSubSection";try{V.displayName="ObjectPageSubSection",V.__docgenInfo={description:"Second-level information container of an `ObjectPage`.<br />\n__Note:__ This component should only be used inside an `ObjectPageSection` component.",displayName:"ObjectPageSubSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSubSection`.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSubSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:null,description:"Defines the title of the `ObjectPageSubSection`.",name:"titleText",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Actions available for this subsection.\n\n__Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the SubSection `titleText` or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TittleLevel.H4"},description:"Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTextUppercase:{defaultValue:null,description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Bn={title:"Layouts & Floorplans / ObjectPage",component:F,argTypes:{headerTitle:{control:{disable:!0}},headerContent:{control:{disable:!0}},footer:{control:{disable:!0}},children:{control:{disable:!0}},placeholder:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{mode:B.Default,showHideHeaderButton:!0,selectedSectionId:"goals",headerContentPinnable:!0,imageShapeCircle:!0,image:an,style:{height:"700px"},footer:e.jsx(gn,{design:bn.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Positive,children:"Accept"}),e.jsx(j,{design:x.Negative,children:"Reject"})]})}),headerTitle:e.jsx(Ve,{showSubHeaderRight:!0,header:"Denise Smith",subHeader:"Senior UI Developer",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Primary Action"},"1"),e.jsx(j,{children:"Action"},"2")]}),breadcrumbs:e.jsxs(fn,{children:[e.jsx(Le,{children:"Manager Cockpit"}),e.jsx(Le,{children:"My Team"}),e.jsx(Le,{children:"Employee Details"})]}),expandedContent:e.jsx(qe,{children:"Information (only visible if header content is expanded)"}),snappedContent:e.jsx(qe,{children:"Information (only visible if header content is collapsed/snapped)"}),children:e.jsx(hn,{state:xn.Success,children:"employed"})}),headerContent:e.jsx(At,{children:e.jsxs(oe,{wrap:cn.Wrap,alignItems:Lt.Center,children:[e.jsxs(oe,{direction:he.Column,children:[e.jsx(Me,{children:"+33 6 4512 5158"}),e.jsx(Me,{href:"mailto:ui5-webcomponents-react@sap.com",children:"DeniseSmith@sap.com"}),e.jsx(Me,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"https://github.com/SAP/ui5-webcomponents-react"})]}),e.jsxs(oe,{direction:he.Column,style:{padding:"10px"},children:[e.jsx(Pe,{children:"San Jose"}),e.jsx(Pe,{children:"California, USA"})]})]})})}},ce={render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",id:"goals","aria-label":"Goals",children:e.jsxs(Z,{columnsL:3,columnsXL:3,labelSpanXL:6,labelSpanL:6,columnsM:2,labelSpanM:6,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Evangelize the UI framework across the company",children:e.jsx(c,{children:"4 days overdue - Cascaded"})}),e.jsx(d,{label:"Get trained in development management direction",children:e.jsx(c,{children:"Due Nov, 21"})}),e.jsx(d,{label:"Mentor junior developers",children:e.jsx(c,{children:"Due Dec, 31 - Cascaded"})})]})}),e.jsxs(H,{titleText:"Personal",id:"personal","aria-label":"Personal",children:[e.jsx(V,{titleText:"Connect",id:"personal-connect","aria-label":"Connect",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,style:{minWidth:"120px"},children:"Custom Action"}),e.jsx(j,{design:x.Transparent,icon:"action-settings",tooltip:"settings"}),e.jsx(j,{design:x.Transparent,icon:"download",tooltip:"download"})]}),children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsxs(ee,{titleText:"Phone Numbers",children:[e.jsx(d,{label:"Home",children:e.jsx(c,{children:"+1 234-567-8901"})}),e.jsx(d,{label:"",children:e.jsx(c,{children:"+1 234-567-5555"})})]}),e.jsxs(ee,{titleText:"Social Accounts",children:[e.jsx(d,{label:"LinkedIn",children:e.jsx(c,{children:"/DeniseSmith"})}),e.jsx(d,{label:"Twitter",children:e.jsx(c,{children:"@DeniseSmith"})})]}),e.jsxs(ee,{titleText:"Addresses",children:[e.jsx(d,{label:"Home Address",children:e.jsx(c,{children:"2096 Mission Street"})}),e.jsx(d,{label:"Mailing Address",children:e.jsx(c,{children:"PO Box 32114"})})]}),e.jsx(ee,{titleText:"Mailing Address",children:e.jsx(d,{label:"Work",children:e.jsx(c,{children:"DeniseSmith@sap.com"})})})]})}),e.jsx(V,{titleText:"Payment Information",id:"personal-payment-information","aria-label":"Payment Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(ee,{titleText:"Salary",children:e.jsx(d,{label:"Bank Transfer",children:e.jsx(c,{children:"Money Bank, Inc."})})}),e.jsx(ee,{titleText:"Payment method for Expenses",children:e.jsx(d,{label:"Extra Travel Expenses",children:e.jsx(c,{children:"Cash 100 USD"})})})]})})]}),e.jsxs(H,{titleText:"Employment",id:"employment","aria-label":"Employment",children:[e.jsx(V,{titleText:"Job Information",id:"employment-job-information","aria-label":"Job Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Job Classification",children:e.jsxs(oe,{direction:he.Column,children:[e.jsx(c,{children:"Senior UI Developer"}),e.jsx(Pe,{children:"(UIDEV-SR)"})]})}),e.jsx(d,{label:"Job Title",children:e.jsx(c,{children:"Developer"})}),e.jsx(d,{label:"Employee Class",children:e.jsx(c,{children:"Employee"})}),e.jsx(d,{label:"Manager",children:e.jsxs(oe,{direction:he.Column,children:[e.jsx(c,{children:"Dan Smith"}),e.jsx(Pe,{children:"Development Manager"})]})}),e.jsx(d,{label:"Pay Grade",children:e.jsx(c,{children:"Salary Grade 18 (GR-14)"})}),e.jsx(d,{label:"FTE",children:e.jsx(c,{children:"1"})})]})}),e.jsx(V,{titleText:"Employee Details",id:"employment-employee-details","aria-label":"Employee Details",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"End Date",children:e.jsx(c,{children:"Dec 31, 9999"})}),e.jsx(d,{label:"Payroll Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"Benefits Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})}),e.jsx(d,{label:"Company Car Eligibility",children:e.jsx(c,{children:"Jan 01, 2021"})}),e.jsx(d,{label:"Equity Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})})]})}),e.jsx(V,{titleText:"Job Relationship",id:"employment-job-relationship","aria-label":"Job Relationship",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Manager",children:e.jsx(c,{children:"John Doe"})}),e.jsx(d,{label:"Scrum Master",children:e.jsx(c,{children:"Michael Adams"})}),e.jsx(d,{label:"Product Owner",children:e.jsx(c,{children:"John Miller"})})]})})]})]})}},de={name:"with IllustratedMessage",render(i){return e.jsx(F,{image:i.image,headerTitle:i.headerTitle,headerContent:i.headerContent,imageShapeCircle:!0,placeholder:e.jsx(Sn,{name:yn.UnableToLoad})})}},me={name:"with custom overflow button",render(){const i={actionsToolbarProps:{overflowButton:e.jsx(yt,{design:x.Transparent,icon:"navigation-down-arrow"})},navigationActionsToolbarProps:{overflowButton:e.jsx(yt,{design:x.Transparent,icon:"menu2"})},actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Edit"},"edit"),e.jsx(j,{design:x.Transparent,children:"Delete"},"delete"),e.jsx(j,{design:x.Transparent,children:"Copy"},"copy"),e.jsx(j,{icon:"action",design:x.Transparent,children:"Action"},"action"),e.jsx(j,{design:x.Transparent,children:"Create"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong actions Button"})]}),navigationActions:e.jsxs(e.Fragment,{children:[e.jsx(j,{icon:"full-screen",design:x.Transparent},"fullscreen"),e.jsx(j,{icon:"exit-full-screen",design:x.Transparent},"exitFullscreen"),e.jsx(j,{icon:"decline",design:x.Transparent},"decline"),e.jsx(j,{design:x.Transparent,children:"UI5 Web Components For React"}),e.jsx(j,{design:x.Transparent,children:"Navigation Actions Button"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong navigation actions Button"})]})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{style:{width:"1000px"},showHideHeaderButton:!1,headerTitle:e.jsx(Ve,{...i,header:e.jsx(Ge,{wrappingType:"Normal",children:"Custom overflow buttons for navigationActions and actions (width: 1000px)"})})}),e.jsx(F,{style:{width:"1400px"},showHideHeaderButton:!1,headerTitle:e.jsx(Ve,{...i,header:e.jsx(Ge,{children:"Custom overflow buttons for actions (width: 1400px)"})})})]})}},ue={name:"section with custom header",render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",hideTitleText:!0,id:"goals","aria-label":"Goals",header:e.jsx(Ge,{children:"Custom Header Section One"}),children:e.jsx("div",{style:{width:"100%",height:"200px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Personal",hideTitleText:!0,id:"personal","aria-label":"Personal",header:e.jsx(qe,{hideCloseButton:!0,children:"Custom Header Section Two"}),children:e.jsx("div",{style:{width:"100%",height:"500px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Employment",hideTitleText:!0,id:"employment","aria-label":"Employment",header:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(jt,{name:ft,style:{marginInlineEnd:"2rem"}}),e.jsx(c,{children:"Custom Header Section Three"}),e.jsx(jt,{name:ft,style:{marginInlineStart:"2rem"}})]}),children:e.jsx("div",{style:{width:"100%",height:"300px",background:"cadetblue"}})})]})}},pe={args:{selectedSectionId:"section1"},name:"with fullscreen section",render(i){return e.jsxs(F,{...i,mode:B.IconTabBar,children:[e.jsx(H,{titleText:"Section 1",id:"section1",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightblue"},children:"It is recommended to only use fullscreen sections in TabBar mode, otherwise your layout will most probably break!"})}),e.jsx(H,{titleText:"Section 2",id:"section2",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightgreen"}})}),e.jsx(H,{titleText:"Section with Overflow",id:"section3",style:{height:"100%",overflow:"auto"},children:e.jsx("div",{style:{height:"300%",background:"lightyellow"}})})]})}};var vt,Ct,It;ce.parameters={...ce.parameters,docs:{...(vt=ce.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(It=(Ct=ce.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var Pt,wt,Ot;de.parameters={...de.parameters,docs:{...(Pt=de.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  name: 'with IllustratedMessage',
  render(args) {
    return <ObjectPage image={args.image} headerTitle={args.headerTitle} headerContent={args.headerContent} imageShapeCircle placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />} />;
  }
}`,...(Ot=(wt=de.parameters)==null?void 0:wt.docs)==null?void 0:Ot.source}}};var _t,Ht,Bt;me.parameters={...me.parameters,docs:{...(_t=me.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Bt=(Ht=me.parameters)==null?void 0:Ht.docs)==null?void 0:Bt.source}}};var Ft,Dt,Et;ue.parameters={...ue.parameters,docs:{...(Ft=ue.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Et=(Dt=ue.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var Nt,kt,Rt;pe.parameters={...pe.parameters,docs:{...(Nt=pe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Rt=(kt=pe.parameters)==null?void 0:kt.docs)==null?void 0:Rt.source}}};const Fn=["Default","WithIllustratedMessage","WithCustomOverflowButton","SectionWithCustomHeader","FullScreenSingleSection"],bo=Object.freeze(Object.defineProperty({__proto__:null,Default:ce,FullScreenSingleSection:pe,SectionWithCustomHeader:ue,WithCustomOverflowButton:me,WithIllustratedMessage:de,__namedExportsOrder:Fn,default:Bn},Symbol.toStringTag,{value:"Module"}));export{bo as C,ce as D,pe as F,H as O,ue as S,de as W,me as a,V as b};
