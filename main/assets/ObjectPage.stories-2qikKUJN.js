import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./UnableToLoad-XO7jIU-O.js";import{i as sn}from"./Person-nLahJlpT.js";import{s as St}from"./general-leave-request-59bXkmWr.js";import{c as ne,R as Le,u as ln,a as Mt,b as cn,D as qe}from"./index-oB5j51JQ.js";import{F as ae,b as ge,c as dn,a as Vt,d as mn}from"./index-Qwyc25sK.js";import{b as Z,a as d,F as ee}from"./index-9uc10gEP.js";import{T as f}from"./ThemingParameters-UghqSl-x.js";import{e as we}from"./index-ENBflQbU.js";import{c as k}from"./clsx-Zbgk8kpT.js";import{r as n}from"./index-OjgoNOWw.js";import{c as _e}from"./react-jss.esm-fzYOEaou.js";import{a as un}from"./addCustomCSSWithScoping-tGNiKL_K.js";import{b as qt}from"./Avatar-W7sCbj87.js";import{a as pn,T as yt}from"./index-hAADO6tq.js";import{u as jt}from"./withWebComponent-c-uI2wMj.js";import{d as hn}from"./debounce-F9irgL9Y.js";import{G as gn}from"./GlobalStyleClasses-kWTEndz_.js";import{C as W}from"./CustomVariables-ISwRKzww.js";import{O as bn}from"./index-yGkiTIWg.js";import{T as c}from"./index-SpQb4Cav.js";import{B as fn,a as xn}from"./index-IgXNAIJI.js";import{B as j}from"./index-3rIpJUwf.js";import{B as x}from"./Button-6A8kFSGe.js";import{a as Sn,B as Me}from"./index-6LUFwrO_.js";import{M as Ge}from"./index-ExDtWaFN.js";import{V as yn}from"./ValueState-I_-hGNIb.js";import{L as Ve}from"./index-jVWXid9M.js";import{L as Oe}from"./index-x-7bG_XB.js";import{I as jn}from"./index-WTVN2nXF.js";import{I as Tn}from"./IllustratedMessage-OXKcQk0N.js";import{T as Tt}from"./index-gxb_FGCi.js";import{T as Je}from"./index-Z_i1og7Y.js";import{I as vt}from"./index-jDcqNIxI.js";var B=(i=>(i.Default="Default",i.IconTabBar="IconTabBar",i))(B||{});const D=i=>{const T=[];return n.Children.forEach(i,r=>{n.isValidElement(r)&&T.push(r)}),T},vn={base:{alignSelf:"center",opacity:0,paddingInlineEnd:"1rem"},hidden:{opacity:0},visible:{transition:"opacity 0.5s",opacity:1},imageContainer:{display:"inline-block",verticalAlign:"middle",maxHeight:"3rem",width:"3rem",maxWidth:"3rem"},image:{width:"100%",height:"100%"}},Cn=_e(vn,{name:"CollapsedAvatar"}),$e=i=>{const{image:T,imageShapeCircle:r,style:S}=i,I=Cn(),[v,E]=n.useState(!1),R=n.useRef(null),q=n.useMemo(()=>{var N,h;return T?typeof T=="string"?e.jsx("span",{className:I.imageContainer,style:{borderRadius:r?"50%":0,overflow:"hidden"},children:e.jsx("img",{className:I.image,src:T,alt:"Object Page Image"})}):n.cloneElement(T,{size:qt.S,className:(N=T.props)!=null&&N.className?`${I.imageContainer} ${(h=T.props)==null?void 0:h.className}`:I.imageContainer}):null},[T,r]);n.useEffect(()=>{E(!0)},[]);const G=k(I.base,v?I.visible:I.hidden);return e.jsx("div",{ref:R,className:G,style:S,"data-component-name":"ObjectPageCollapsedAvatar",children:q})};try{$e.displayName="CollapsedAvatar",$e.__docgenInfo={description:"",displayName:"CollapsedAvatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},imageShapeCircle:{defaultValue:null,description:"",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const te={anchorFloat:"--_ui5wcr_ObjectPage_actions_float",anchorLeft:"--_ui5wcr_ObjectPage_actions_left",anchorRight:"--_ui5wcr_ObjectPage_actions_right"},In={objectPage:{[ne.headerDisplay]:"block",[ne.titleFontSize]:f.sapObjectHeader_Title_FontSize,container:"objectPage / inline-size",boxSizing:"border-box",display:"flex",flexDirection:"column",width:"100%",height:"100%",maxHeight:"100vh",position:"relative",whiteSpace:"normal",fontFamily:f.sapFontFamily,backgroundColor:f.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",scrollBehavior:"smooth",'& section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"none"},'& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"block"}},"@global html":{[te.anchorFloat]:"right",[te.anchorRight]:"1.25rem",[te.anchorLeft]:"unset"},'@global [dir="rtl"]':{[te.anchorFloat]:"left",[te.anchorRight]:"unset",[te.anchorLeft]:"1.25rem"},iconTabBarMode:{'& section[data-component-name="ObjectPageSection"] > div[role="heading"]':{display:"none"}},headerCollapsed:{[ne.headerDisplay]:"none",[ne.titleFontSize]:f.sapObjectHeader_Title_SnappedFontSize},headerContainer:{extend:Le,marginBottom:"0.25rem",backgroundColor:f.sapObjectHeader_Background,display:"grid",gridAutoColumns:"min-content calc(100% - 5rem - 2rem)",'& [data-component-name="ObjectPageHeaderContent"]':{gridColumn:2}},headerHoverStyles:{'&[data-not-clickable="true"]':{cursor:"unset"},'&[data-not-clickable="false"]':{backgroundColor:`${f.sapObjectHeader_Hover_Background}`,'& [data-component-name="DynamicPageTitle"]':{backgroundColor:f.sapObjectHeader_Hover_Background}}},header:{extend:Le,[ne.headerDisplay]:"block",boxSizing:"border-box",backgroundColor:f.sapObjectHeader_Background,position:"sticky",top:0,zIndex:2,'& [data-component-name="DynamicPageTitle"]':{gridColumn:2,paddingInline:0},cursor:"pointer"},headerImage:{minWidth:"5rem",maxWidth:"5rem",maxHeight:"5rem",display:"inline-block",marginInlineEnd:"2rem"},image:{width:"100%",height:"100%"},anchorBar:{position:"sticky",zIndex:2},tabContainer:{position:"sticky",zIndex:1,"@container objectPage (max-width: 599px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":0},"@container objectPage (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1440px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"2rem"}},tabContainerComponent:{"&::part(content)":{display:"none"},"&::part(tabstrip)":{padding:0,paddingInline:"var(--_ui5wcr_ObjectPage_tab_bar_inline_padding)",boxShadow:`inset 0 -0.0625rem ${f.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%)`}},content:{extend:Le,flexGrow:1,position:"relative"},footer:{position:"sticky",bottom:"0.5rem",margin:"0 0.5rem"},footerSpacer:{height:"1rem",flexShrink:0},subSectionPopover:{"&::part(content)":{padding:0}},titleInHeader:{padding:0},snappedContent:{gridColumn:"1 / span 2"}},Pn=(i,T)=>D(i).find(r=>{var S;return n.isValidElement(r)&&((S=r.props)==null?void 0:S.id)===T}),Ct=i=>i?i.replace(/^ObjectPageSection-/,""):null;un("ui5-tabcontainer",`
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `);const ce=48,wn=_e(In,{name:"ObjectPage"}),F=n.forwardRef((i,T)=>{var pt,ht,gt,bt;const{headerTitle:r,image:S,footer:I,mode:v,imageShapeCircle:E,className:R,style:q,slot:G,showHideHeaderButton:N,children:h,selectedSectionId:A,alwaysShowContentHeader:g,showTitleInHeaderContent:X,headerContent:b,headerContentPinnable:He,a11yConfig:J,placeholder:Be,onSelectedSectionChange:ze,onToggleHeaderContent:Ue,onPinnedStateChange:Gt,onBeforeNavigate:We,...Jt}=i,p=wn(),be=(ht=(pt=D(h)[0])==null?void 0:pt.props)==null?void 0:ht.id,[$,L]=n.useState(A??be),[M,fe]=n.useState(i.selectedSubSectionId),[P,Xe]=n.useState(g),O=n.useRef(!1),Ye=n.useRef(),[$t,C]=jt(T),xe=n.useRef(null),Se=n.useRef(),zt=n.useRef(0),[Ke,Qe]=jt(b==null?void 0:b.ref),Ze=n.useRef(null),Ut=n.useRef(null),ye=n.useRef(null),[et,tt]=n.useState(!1),je=n.useRef(!1),[Wt,Te]=n.useState(void 0),[z,nt]=n.useState(!1),Y=n.useRef(0),K=r&&X,[ve,at]=n.useState(0),[Fe,Xt]=n.useState(null),Yt=Fe??h;n.useEffect(()=>{const t=v===B.IconTabBar?Pn(h,$):null;Xt(t)},[v,h,$]);const ot=n.useRef($),De=(t,a,o,s)=>{typeof ze=="function"&&ot.current!==o&&(ze(we(t,{selectedSectionIndex:parseInt(a,10),selectedSectionId:o,section:s})),ot.current=o)},U=n.useRef(hn(De,500)).current;n.useEffect(()=>()=>{U.cancel(),clearTimeout(ye.current)},[]);const{topHeaderHeight:_,headerContentHeight:oe,anchorBarHeight:Kt,totalHeaderHeight:ie,headerCollapsed:y}=ln(C,xe,Qe,Ze,[Wt,Te],{noHeader:!r&&!b,fixedHeader:P,scrollTimeout:Y});n.useEffect(()=>{typeof Ue=="function"&&je.current&&Ue(y!==!0)},[y]);const Ee=n.useMemo(()=>{var t;return S?typeof S=="string"?e.jsx("span",{className:p.headerImage,style:{borderRadius:E?"50%":0,overflow:"hidden"},children:e.jsx("img",{src:S,className:p.image,alt:"Company Logo"})}):n.cloneElement(S,{size:qt.L,className:k(p.headerImage,(t=S.props)==null?void 0:t.className)}):null},[S,p.headerImage,p.image,E]),it=(t,a=!1)=>{var s;const o=(s=C.current)==null?void 0:s.querySelector(`#${a?"ObjectPageSubSection":"ObjectPageSection"}-${t}`);if(Y.current=performance.now()+500,o){const u=_||zt.current;o.style.scrollMarginBlockStart=u+Kt+ce+(P?oe:0)+"px",o.focus(),o.scrollIntoView({behavior:"smooth"}),o.style.scrollMarginBlockStart="0px"}},Ne=t=>{var a;t&&(be===t?(a=C.current)==null||a.scrollTo({top:0,behavior:"smooth"}):it(t),O.current=!1)},rt=()=>{var a;const t=A??be;if(t!==Ye.current){U.cancel(),O.current=!0,L(t),Ye.current=t;const o=(a=C.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]'),s=D(h).findIndex(u=>{var l;return n.isValidElement(u)&&((l=u.props)==null?void 0:l.id)===t});De({},s,t,o[0])}},[ke,st]=n.useState(0),lt=n.useRef();n.useEffect(()=>(A&&(v===B.Default?ke<750&&ke!==void 0?lt.current=requestAnimationFrame(t=>{st(t)}):(st(void 0),rt()):rt()),()=>{cancelAnimationFrame(lt.current)}),[ke,A,be,U]);const Qt=(t,a,o,s)=>{O.current=!0,U.cancel(),L(u=>(u===a&&Ne(a),a)),Se.current=t,De(t,o,a,s)};n.useEffect(()=>{v===B.Default&&O.current===!0&&!M&&Ne($)},[$,v,O,Ne,M]),n.useEffect(()=>{M&&O.current===!0&&ve&&(it(M,!0),O.current=!1)},[M,O.current,ve]),n.useEffect(()=>{g!==void 0&&Xe(g),g&&re({detail:{visible:!0}})},[g]);const Ce=n.useRef(P);n.useEffect(()=>{Ce.current&&!P&&C.current.scrollTop>_&&(re({detail:{visible:!1}}),Ce.current=!1),!Ce.current&&P&&(Ce.current=!0)},[P,_]),n.useEffect(()=>{if(fe(i.selectedSubSectionId),i.selectedSubSectionId&&(O.current=!0,v===B.IconTabBar)){let t;D(h).forEach(a=>{n.isValidElement(a)&&a.props&&a.props.children&&D(a.props.children).forEach(o=>{var s;n.isValidElement(o)&&o.props&&o.props.id===i.selectedSubSectionId&&(t=(s=a.props)==null?void 0:s.id)})}),t&&L(t)}},[i.selectedSubSectionId,h,v]);const ct=n.useRef(null);n.useEffect(()=>{const t=C.current,a=t.querySelectorAll('[id^="ObjectPageSection"]'),o=a[a.length-1],s=new ResizeObserver(([u])=>{const l=o.querySelectorAll('[id^="ObjectPageSubSection"]'),m=l[l.length-1],w=m??u.target;Fe&&!m||a.length===1&&!m?at(0):at(t.getBoundingClientRect().bottom-ct.current.getBoundingClientRect().bottom-w.getBoundingClientRect().height-ce)});return t&&o&&s.observe(o,{box:"border-box"}),()=>{s.disconnect()}},[y,_,oe,Fe,h]);const re=n.useCallback(t=>{var a,o;je.current=!0,Y.current=performance.now()+500,t.detail.visible?(Te(!1),nt(!0),(o=C.current)==null||o.classList.remove(p.headerCollapsed)):(Te(!0),(a=C.current)==null||a.classList.add(p.headerCollapsed))},[]),Zt=n.useCallback(t=>{var o;if(O.current=!0,v===B.IconTabBar){const s=t.detail.sectionId;L(s);const u=(o=C.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]'),l=D(h).findIndex(m=>{var w;return n.isValidElement(m)&&((w=m.props)==null?void 0:w.id)===s});U(t,l,s,u[l])}const a=t.detail.subSectionId;Y.current=performance.now()+200,fe(a)},[v,L,fe,O,h]),en=k(p.objectPage,gn.sapScrollBar,R,v===B.IconTabBar&&p.iconTabBarMode),{onScroll:Nn,selectedSubSectionId:kn,...tn}=Jt;n.useEffect(()=>{var l,m;const t=(l=C.current)==null?void 0:l.querySelectorAll('section[data-component-name="ObjectPageSection"]'),o=(((m=C.current)==null?void 0:m.clientHeight)??1e3)-ie-ce,s=`-${ie}px 0px -${o<0?0:o}px 0px`,u=new IntersectionObserver(([w])=>{if(w.isIntersecting&&O.current===!1&&C.current.getBoundingClientRect().top+ie+ce<=w.target.getBoundingClientRect().bottom){const le=Ct(w.target.id);L(le);const Ae=D(h).findIndex(ft=>{var xt;return n.isValidElement(ft)&&((xt=ft.props)==null?void 0:xt.id)===le});U(Se.current,Ae,le,w.target)}},{root:C.current,rootMargin:s,threshold:[0]});return t.forEach(w=>{u.observe(w)}),()=>{u.disconnect()}},[h,ie,L,O]),n.useEffect(()=>{var a;const t=(a=C.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]');if(et){let o=t[t.length-1],s;for(let l=0;l<=t.length-1;l++){const m=t[l];if(C.current.getBoundingClientRect().top+ie+ce<=m.getBoundingClientRect().bottom){o=m,s=l;break}}const u=Ct(o==null?void 0:o.id);u!==$&&(L(u),U(Se.current,s??t.length-1,u,o)),tt(!1)}},[et]);const Q=g&&!He||!b||!N&&!He,Ie=n.useCallback(t=>{t.stopPropagation(),Q||re(we(t,{visible:y}))},[re,y,Q]),se=r&&r.props.snappedContent&&y===!0&&!!S,nn=!!b,Pe=n.useCallback((t=!1)=>{var o,s,u;const a=t?p.titleInHeader:void 0;return r!=null&&r.props&&((o=r.props)==null?void 0:o.showSubHeaderRight)===void 0?n.cloneElement(r,{showSubHeaderRight:!0,className:k(a,(s=r==null?void 0:r.props)==null?void 0:s.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ie,"data-header-content-visible":b&&y!==!0,"data-is-snapped-rendered-outside":se}):n.cloneElement(r,{className:k(a,(u=r==null?void 0:r.props)==null?void 0:u.className),"data-not-clickable":Q,onToggleHeaderContentVisibility:Ie,"data-header-content-visible":b&&y!==!0,"data-is-snapped-rendered-outside":se})},[r,Q,Ie,y,se,nn]),dt=n.useRef(!0);n.useEffect(()=>{dt.current?dt.current=!1:Y.current=performance.now()+200},[se]);const an=n.useCallback(()=>{if(b!=null&&b.props)return n.cloneElement(b,{...b.props,topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden",flexShrink:0}:{...b.props.style,flexShrink:0},headerPinned:P||z,ref:Ke,children:e.jsxs("div",{className:p.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Ee,(b.props.children||K)&&e.jsxs("div",{"data-component-name":"ObjectPageHeaderContent",children:[K&&Pe(!0),b.props.children]})]})});if(K)return e.jsx(Mt,{topHeaderHeight:_,style:y===!0?{position:"absolute",visibility:"hidden"}:void 0,headerPinned:P||z,ref:Ke,children:e.jsxs("div",{className:p.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Ee,e.jsx("div",{"data-component-name":"ObjectPageHeaderContent",children:K&&Pe(!0)})]})})},[b,_,P,z,K,Ee,Qe,Pe]),on=t=>{var l;if(typeof We=="function"){const m=t.detail.tab.dataset,w=parseInt(m.index,10),le=m.parentId??m.sectionId,Ae=m.isSubTab?m.sectionId:void 0;if(We(we(t,{sectionIndex:w,sectionId:le,subSectionId:Ae})),t.defaultPrevented)return}t.preventDefault();const{sectionId:a,index:o,isSubTab:s,parentId:u}=t.detail.tab.dataset;if(s)Zt(we(t,{sectionId:u,subSectionId:a}));else{const m=D(h).find(w=>w.props.id==a);Qt(t,(l=m==null?void 0:m.props)==null?void 0:l.id,o,m)}},mt=n.useRef(),rn=n.useCallback(t=>{var a;if(je.current||(je.current=!0),!(Y.current>=performance.now())&&(Se.current=t,typeof i.onScroll=="function"&&i.onScroll(t),M&&fe(void 0),ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{tt(!0)},100),(!P||t.target.scrollTop===0)&&((a=C.current)==null||a.classList.remove(p.headerCollapsed)),z&&t.target.scrollTop!==mt.current)){if(t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight)return;mt.current=t.target.scrollTop,P||Te(!0),nt(!1)}},[_,P,i.onScroll,z,M]),Re=n.useCallback(t=>{var a,o;(t==null?void 0:t.type)==="mouseover"?(a=xe.current)==null||a.classList.add(p.headerHoverStyles):(o=xe.current)==null||o.classList.remove(p.headerHoverStyles)},[p.headerHoverStyles]),ut={...q};return y===!0&&(b||K)&&(ut[ne.titleFontSize]=f.sapObjectHeader_Title_SnappedFontSize),e.jsxs("div",{"data-component-name":"ObjectPage",slot:G,className:en,style:ut,ref:$t,onScroll:rn,...tn,children:[e.jsxs("header",{onMouseOver:Re,onMouseLeave:Re,"data-component-name":"ObjectPageTopHeader",ref:xe,role:(gt=J==null?void 0:J.objectPageTopHeader)==null?void 0:gt.role,"data-not-clickable":Q,"aria-roledescription":((bt=J==null?void 0:J.objectPageTopHeader)==null?void 0:bt.ariaRoledescription)??"Object Page header",className:p.header,onClick:Ie,style:{gridAutoColumns:`min-content ${r&&S&&y===!0?"calc(100% - 3rem - 1rem)":"100%"}`,display:!X||y===!0?"grid":"none"},children:[r&&S&&y===!0&&e.jsx($e,{image:S,imageShapeCircle:E}),r&&Pe(),se&&e.jsx("div",{className:p.snappedContent,"data-component-name":"ATwithImageSnappedContentContainer",children:r.props.snappedContent})]}),an(),b&&r&&e.jsx("div",{"data-component-name":"ObjectPageAnchorBar",ref:Ze,className:p.anchorBar,style:{top:z||P?`${_+(y===!0?0:oe)}px`:`${_+5}px`},children:e.jsx(cn,{headerContentVisible:b&&y!==!0,headerContentPinnable:He,showHideHeaderButton:N,headerPinned:P,a11yConfig:J,onToggleHeaderContentVisibility:re,setHeaderPinned:Xe,onHoverToggleButton:Re,onPinnedStateChange:Gt})}),!Be&&e.jsx("div",{ref:ct,className:p.tabContainer,"data-component-name":"ObjectPageTabContainer",style:{top:P||z?`${_+(y===!0?0:oe)}px`:`${_}px`},children:e.jsx(pn,{collapsed:!0,fixed:!0,onTabSelect:on,"data-component-name":"ObjectPageTabContainer",className:p.tabContainerComponent,children:D(h).map((t,a)=>{var s,u;if(!n.isValidElement(t)||!t.props)return null;const o=D(t.props.children).filter(l=>{var m;return n.isValidElement(l)&&((m=l==null?void 0:l.type)==null?void 0:m.displayName)==="ObjectPageSubSection"});return e.jsx(yt,{"data-index":a,"data-section-id":t.props.id,text:t.props.titleText,selected:$===((s=t.props)==null?void 0:s.id)||void 0,subTabs:o.map(l=>n.isValidElement(l)?e.jsx(yt,{"data-parent-id":t.props.id,"data-is-sub-tab":!0,"data-section-id":l.props.id,text:l.props.titleText,selected:l.props.id===M||void 0,"data-index":a,children:e.jsx("span",{style:{display:"none"}})},l.props.id):null),children:e.jsx("span",{style:{display:"none"}})},`Anchor-${(u=t.props)==null?void 0:u.id}`)})})}),e.jsxs("div",{"data-component-name":"ObjectPageContent",className:p.content,ref:Ut,children:[e.jsx("div",{style:{height:y?`${oe}px`:0},"aria-hidden":!0}),Be||Yt,e.jsx("div",{style:{height:`${ve}px`},"aria-hidden":!0})]}),I&&v===B.IconTabBar&&!ve&&e.jsx("div",{className:p.footerSpacer,"data-component-name":"ObjectPageFooterSpacer","aria-hidden":!0}),I&&e.jsx("footer",{className:p.footer,"data-component-name":"ObjectPageFooter",children:I})]})});F.displayName="ObjectPage";F.defaultProps={image:null,mode:B.Default,imageShapeCircle:!1,showHideHeaderButton:!1};try{F.displayName="ObjectPage",F.__docgenInfo={description:"A component that allows apps to easily display information related to a business object.\n\nThe `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.",displayName:"ObjectPage",props:{headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n\n__Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.\n\n__Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},image:{defaultValue:{value:"null"},description:"Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Defines the content area of the `ObjectPage`. It consists of sections and subsections.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ObjectPageSectionType | ObjectPageSectionType[]"}},selectedSectionId:{defaultValue:null,description:"Sets the current selected `ObjectPageSection` by `id`.\n\n__Note:__ If a valid `selectedSubSectionId` is set, this prop has no effect.",name:"selectedSectionId",required:!1,type:{name:"string"}},selectedSubSectionId:{defaultValue:null,description:"Sets the current selected `ObjectPageSubSection` by `id`.",name:"selectedSubSectionId",required:!1,type:{name:"string"}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` is hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showTitleInHeaderContent:{defaultValue:null,description:"Defines whether the title is displayed in the content section of the header or above the image.",name:"showTitleInHeaderContent",required:!1,type:{name:"boolean"}},imageShapeCircle:{defaultValue:{value:"false"},description:"Defines whether the image should be displayed in a circle or in a square.<br />\n__Note:__ If the `image` is not a `string`, this prop has no effect.",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ObjectPageMode.Default"},description:'Defines the `ObjectPage` mode.\n\n- "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.\n- "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"IconTabBar"'},{value:'"IconTabBar"'}]}},showHideHeaderButton:{defaultValue:{value:"false"},description:"Defines whether the pin button of the header is displayed.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Defines whether the `headerContent` is pinnable.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ objectPageTopHeader?: { role?: string; ariaRoledescription?: string; }; dynamicPageAnchorBar?: { role?: string; }; }"}},placeholder:{defaultValue:null,description:"If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.",name:"placeholder",required:!1,type:{name:"ReactNode"}},onBeforeNavigate:{defaultValue:null,description:"The event is fired before the selected section is changed using the navigation. It can be aborted by the application with `preventDefault()`, which means that there will be no navigation.\n\n__Note:__ This event is only fired when navigating via tab-bar.",name:"onBeforeNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, ObjectPageTabSelectEventDetail>) => void"}},onSelectedSectionChange:{defaultValue:null,description:"Fired when the selected section changes.",name:"onSelectedSectionChange",required:!1,type:{name:"(event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement; }>) => void"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const On={section:{'& [data-component-name="ObjectPageSubSection"]:not(:first-child)':{paddingBlockStart:"0.5rem"}},headerContainer:{paddingBlock:"0.5rem",color:f.sapGroup_TitleTextColor,fontFamily:f.sapFontFamily},titleContainer:{borderTop:W.ObjectPageSectionBorderTop,boxSizing:"border-box",height:"2.25rem"},title:{height:W.ObjectPageSectionTitleHeight,lineHeight:W.ObjectPageSectionTitleLineHeight,color:f.sapGroup_TitleTextColor,fontSize:f.sapFontHeader4Size,display:"inline-block",maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:W.ObjectPageSectionTitleFontFamily,textDecoration:W.ObjectPageSectionTitleTextDecoration},uppercase:{textTransform:"uppercase"},wrap:{"& $titleContainer":{height:"unset"},"& $title":{whiteSpace:"normal",height:"unset",lineHeight:"normal"}},sectionContent:{whiteSpace:"normal",height:"100%"},sectionContentInner:{paddingBlock:"0.5rem",fontFamily:f.sapFontFamily,height:"100%",boxSizing:"border-box"}},_n=On,Hn=_e(_n,{name:"ObjectPageSection"}),H=n.forwardRef((i,T)=>{const{titleText:r="",id:S,children:I,titleTextUppercase:v=!0,className:E,style:R,hideTitleText:q,titleTextLevel:G="H3",wrapTitleText:N,header:h,...A}=i,g=Hn(),X=`ObjectPageSection-${S}`,b=k(g.title,v&&g.uppercase);return e.jsxs("section",{ref:T,role:"region",className:k(g.section,N&&g.wrap,E),style:R,...A,id:X,"data-component-name":"ObjectPageSection",children:[!!h&&e.jsx("div",{className:g.headerContainer,children:h}),!q&&e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:g.titleContainer,"data-component-name":"ObjectPageSectionTitleText",children:e.jsx("div",{className:b,children:r})}),e.jsx("div",{className:g.sectionContent,children:e.jsx("div",{className:g.sectionContentInner,"data-component-name":"ObjectPageSectionContent",children:I})})]})});H.displayName="ObjectPageSection";try{H.displayName="ObjectPageSection",H.__docgenInfo={description:"Top-level information container of an `ObjectPage`.",displayName:"ObjectPageSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSection`.\n\n__Note:__ The `id` is taken into account when the section selection changes.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:{value:"''"},description:"Defines the title of the `ObjectPageSection`.",name:"titleText",required:!1,type:{name:"string"}},titleTextUppercase:{defaultValue:{value:"true"},description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the Section title or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TitleLevel.H3"},description:"Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},wrapTitleText:{defaultValue:null,description:"Determines whether the Section title wraps on multiple lines, when the available space is not enough.",name:"wrapTitleText",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Section header content.

__Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.`,name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Bn={objectPageSubSection:{"&:focus":{outline:`${f.sapContent_FocusWidth} ${f.sapContent_FocusStyle} ${f.sapContent_FocusColor}`,outlineOffset:`calc(-1 * ${f.sapContent_FocusWidth})`}},headerContainer:{marginBlockEnd:"0.5rem","& >:first-child":{marginInline:"0 0.25rem"},"& >:last-child:not(:first-child)":{marginInline:"0.25rem 0"},"& > *:not(:first-child):not(:last-child)":{marginInline:"0.25rem"}},subSectionTitle:{fontSize:f.sapFontHeader5Size,color:f.sapGroup_TitleTextColor,flexGrow:1},subSectionContent:{backgroundColor:W.ObjectPageSubSectionBackgroundColor,borderRadius:W.ObjectPageSubSectionBorderRadius,paddingInline:"0.5rem",paddingBlock:"1rem"},spacer:{flexGrow:1},uppercase:{textTransform:"uppercase"}},Fn=_e(Bn,{name:"ObjectPageSubSection"}),V=n.forwardRef((i,T)=>{const{children:r,id:S,titleText:I,className:v,style:E,actions:R,hideTitleText:q,titleTextLevel:G="H4",titleTextUppercase:N,...h}=i,A=`ObjectPageSubSection-${S}`,g=Fn(),X=k(g.objectPageSubSection,v);return e.jsxs("div",{ref:T,role:"region",style:E,tabIndex:-1,...h,className:X,id:A,"data-component-name":"ObjectPageSubSection",children:[e.jsxs(ae,{direction:ge.Row,justifyContent:dn.SpaceBetween,alignItems:Vt.Center,className:g.headerContainer,"data-component-name":"ObjectPageSubSectionHeaderContainer",children:[q?e.jsx("span",{"aria-hidden":"true",className:g.spacer}):e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:k(g.subSectionTitle,N&&g.uppercase),"data-component-name":"ObjectPageSubSectionTitleText",children:I}),R&&R]}),e.jsx("div",{className:g.subSectionContent,"data-component-name":"ObjectPageSubSectionContent",children:r})]})});V.displayName="ObjectPageSubSection";try{V.displayName="ObjectPageSubSection",V.__docgenInfo={description:"Second-level information container of an `ObjectPage`.<br />\n__Note:__ This component should only be used inside an `ObjectPageSection` component.",displayName:"ObjectPageSubSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSubSection`.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSubSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:null,description:"Defines the title of the `ObjectPageSubSection`.",name:"titleText",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Actions available for this subsection.\n\n__Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the SubSection `titleText` or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TittleLevel.H4"},description:"Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTextUppercase:{defaultValue:null,description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Dn={title:"Layouts & Floorplans / ObjectPage",component:F,argTypes:{headerTitle:{control:{disable:!0}},headerContent:{control:{disable:!0}},footer:{control:{disable:!0}},children:{control:{disable:!0}},placeholder:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{mode:B.Default,showHideHeaderButton:!0,selectedSectionId:"goals",headerContentPinnable:!0,imageShapeCircle:!0,image:sn,style:{height:"700px"},footer:e.jsx(fn,{design:xn.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Positive,children:"Accept"}),e.jsx(j,{design:x.Negative,children:"Reject"})]})}),headerTitle:e.jsx(qe,{showSubHeaderRight:!0,header:"Denise Smith",subHeader:"Senior UI Developer",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Primary Action"},"1"),e.jsx(j,{children:"Action"},"2")]}),breadcrumbs:e.jsxs(Sn,{children:[e.jsx(Me,{children:"Manager Cockpit"}),e.jsx(Me,{children:"My Team"}),e.jsx(Me,{children:"Employee Details"})]}),expandedContent:e.jsx(Ge,{children:"Information (only visible if header content is expanded)"}),snappedContent:e.jsx(Ge,{children:"Information (only visible if header content is collapsed/snapped)"}),children:e.jsx(bn,{state:yn.Success,children:"employed"})}),headerContent:e.jsx(Mt,{children:e.jsxs(ae,{wrap:mn.Wrap,alignItems:Vt.Center,children:[e.jsxs(ae,{direction:ge.Column,children:[e.jsx(Ve,{children:"+33 6 4512 5158"}),e.jsx(Ve,{href:"mailto:ui5-webcomponents-react@sap.com",children:"DeniseSmith@sap.com"}),e.jsx(Ve,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"https://github.com/SAP/ui5-webcomponents-react"})]}),e.jsxs(ae,{direction:ge.Column,style:{padding:"10px"},children:[e.jsx(Oe,{children:"San Jose"}),e.jsx(Oe,{children:"California, USA"})]})]})})}},de={render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",id:"goals","aria-label":"Goals",children:e.jsxs(Z,{columnsL:3,columnsXL:3,labelSpanXL:6,labelSpanL:6,columnsM:2,labelSpanM:6,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Evangelize the UI framework across the company",children:e.jsx(c,{children:"4 days overdue - Cascaded"})}),e.jsx(d,{label:"Get trained in development management direction",children:e.jsx(c,{children:"Due Nov, 21"})}),e.jsx(d,{label:"Mentor junior developers",children:e.jsx(c,{children:"Due Dec, 31 - Cascaded"})})]})}),e.jsxs(H,{titleText:"Personal",id:"personal","aria-label":"Personal",children:[e.jsx(V,{titleText:"Connect",id:"personal-connect","aria-label":"Connect",actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,style:{minWidth:"120px"},children:"Custom Action"}),e.jsx(j,{design:x.Transparent,icon:"action-settings",tooltip:"settings"}),e.jsx(j,{design:x.Transparent,icon:"download",tooltip:"download"})]}),children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsxs(ee,{titleText:"Phone Numbers",children:[e.jsx(d,{label:"Home",children:e.jsx(c,{children:"+1 234-567-8901"})}),e.jsx(d,{label:"",children:e.jsx(c,{children:"+1 234-567-5555"})})]}),e.jsxs(ee,{titleText:"Social Accounts",children:[e.jsx(d,{label:"LinkedIn",children:e.jsx(c,{children:"/DeniseSmith"})}),e.jsx(d,{label:"Twitter",children:e.jsx(c,{children:"@DeniseSmith"})})]}),e.jsxs(ee,{titleText:"Addresses",children:[e.jsx(d,{label:"Home Address",children:e.jsx(c,{children:"2096 Mission Street"})}),e.jsx(d,{label:"Mailing Address",children:e.jsx(c,{children:"PO Box 32114"})})]}),e.jsx(ee,{titleText:"Mailing Address",children:e.jsx(d,{label:"Work",children:e.jsx(c,{children:"DeniseSmith@sap.com"})})})]})}),e.jsx(V,{titleText:"Payment Information",id:"personal-payment-information","aria-label":"Payment Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(ee,{titleText:"Salary",children:e.jsx(d,{label:"Bank Transfer",children:e.jsx(c,{children:"Money Bank, Inc."})})}),e.jsx(ee,{titleText:"Payment method for Expenses",children:e.jsx(d,{label:"Extra Travel Expenses",children:e.jsx(c,{children:"Cash 100 USD"})})})]})})]}),e.jsxs(H,{titleText:"Employment",id:"employment","aria-label":"Employment",children:[e.jsx(V,{titleText:"Job Information",id:"employment-job-information","aria-label":"Job Information",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Job Classification",children:e.jsxs(ae,{direction:ge.Column,children:[e.jsx(c,{children:"Senior UI Developer"}),e.jsx(Oe,{children:"(UIDEV-SR)"})]})}),e.jsx(d,{label:"Job Title",children:e.jsx(c,{children:"Developer"})}),e.jsx(d,{label:"Employee Class",children:e.jsx(c,{children:"Employee"})}),e.jsx(d,{label:"Manager",children:e.jsxs(ae,{direction:ge.Column,children:[e.jsx(c,{children:"Dan Smith"}),e.jsx(Oe,{children:"Development Manager"})]})}),e.jsx(d,{label:"Pay Grade",children:e.jsx(c,{children:"Salary Grade 18 (GR-14)"})}),e.jsx(d,{label:"FTE",children:e.jsx(c,{children:"1"})})]})}),e.jsx(V,{titleText:"Employee Details",id:"employment-employee-details","aria-label":"Employee Details",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"End Date",children:e.jsx(c,{children:"Dec 31, 9999"})}),e.jsx(d,{label:"Payroll Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"Benefits Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})}),e.jsx(d,{label:"Company Car Eligibility",children:e.jsx(c,{children:"Jan 01, 2021"})}),e.jsx(d,{label:"Equity Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})})]})}),e.jsx(V,{titleText:"Job Relationship",id:"employment-job-relationship","aria-label":"Job Relationship",children:e.jsxs(Z,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Manager",children:e.jsx(c,{children:"John Doe"})}),e.jsx(d,{label:"Scrum Master",children:e.jsx(c,{children:"Michael Adams"})}),e.jsx(d,{label:"Product Owner",children:e.jsx(c,{children:"John Miller"})})]})})]})]})}},me={name:"with IllustratedMessage",render(i){return e.jsx(F,{image:i.image,headerTitle:i.headerTitle,headerContent:i.headerContent,imageShapeCircle:!0,placeholder:e.jsx(jn,{name:Tn.UnableToLoad})})}},ue={name:"with custom overflow button",render(){const i={actionsToolbarProps:{overflowButton:e.jsx(Tt,{design:x.Transparent,icon:"navigation-down-arrow"})},navigationActionsToolbarProps:{overflowButton:e.jsx(Tt,{design:x.Transparent,icon:"menu2"})},actions:e.jsxs(e.Fragment,{children:[e.jsx(j,{design:x.Emphasized,children:"Edit"},"edit"),e.jsx(j,{design:x.Transparent,children:"Delete"},"delete"),e.jsx(j,{design:x.Transparent,children:"Copy"},"copy"),e.jsx(j,{icon:"action",design:x.Transparent,children:"Action"},"action"),e.jsx(j,{design:x.Transparent,children:"Create"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong actions Button"})]}),navigationActions:e.jsxs(e.Fragment,{children:[e.jsx(j,{icon:"full-screen",design:x.Transparent},"fullscreen"),e.jsx(j,{icon:"exit-full-screen",design:x.Transparent},"exitFullscreen"),e.jsx(j,{icon:"decline",design:x.Transparent},"decline"),e.jsx(j,{design:x.Transparent,children:"UI5 Web Components For React"}),e.jsx(j,{design:x.Transparent,children:"Navigation Actions Button"}),e.jsx(j,{design:x.Transparent,children:"Loooooooooooooooooooooooooooooooooooong navigation actions Button"})]})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{style:{width:"1000px"},showHideHeaderButton:!1,headerTitle:e.jsx(qe,{...i,header:e.jsx(Je,{wrappingType:"Normal",children:"Custom overflow buttons for navigationActions and actions (width: 1000px)"})})}),e.jsx(F,{style:{width:"1400px"},showHideHeaderButton:!1,headerTitle:e.jsx(qe,{...i,header:e.jsx(Je,{children:"Custom overflow buttons for actions (width: 1400px)"})})})]})}},pe={name:"section with custom header",render(i){return e.jsxs(F,{...i,children:[e.jsx(H,{titleText:"Goals",hideTitleText:!0,id:"goals","aria-label":"Goals",header:e.jsx(Je,{children:"Custom Header Section One"}),children:e.jsx("div",{style:{width:"100%",height:"200px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Personal",hideTitleText:!0,id:"personal","aria-label":"Personal",header:e.jsx(Ge,{hideCloseButton:!0,children:"Custom Header Section Two"}),children:e.jsx("div",{style:{width:"100%",height:"500px",background:"cadetblue"}})}),e.jsx(H,{titleText:"Employment",hideTitleText:!0,id:"employment","aria-label":"Employment",header:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(vt,{name:St,style:{marginInlineEnd:"2rem"}}),e.jsx(c,{children:"Custom Header Section Three"}),e.jsx(vt,{name:St,style:{marginInlineStart:"2rem"}})]}),children:e.jsx("div",{style:{width:"100%",height:"300px",background:"cadetblue"}})})]})}},he={args:{selectedSectionId:"section1"},name:"with fullscreen section",render(i){return e.jsxs(F,{...i,mode:B.IconTabBar,children:[e.jsx(H,{titleText:"Section 1",id:"section1",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightblue"},children:"It is recommended to only use fullscreen sections in TabBar mode, otherwise your layout will most probably break!"})}),e.jsx(H,{titleText:"Section 2",id:"section2",style:{height:"100%"},children:e.jsx("div",{style:{height:"100%",background:"lightgreen"}})}),e.jsx(H,{titleText:"Section with Overflow",id:"section3",style:{height:"100%",overflow:"auto"},children:e.jsx("div",{style:{height:"300%",background:"lightyellow"}})})]})}};var It,Pt,wt;de.parameters={...de.parameters,docs:{...(It=de.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(wt=(Pt=de.parameters)==null?void 0:Pt.docs)==null?void 0:wt.source}}};var Ot,_t,Ht;me.parameters={...me.parameters,docs:{...(Ot=me.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  name: 'with IllustratedMessage',
  render(args) {
    return <ObjectPage image={args.image} headerTitle={args.headerTitle} headerContent={args.headerContent} imageShapeCircle placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />} />;
  }
}`,...(Ht=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:Ht.source}}};var Bt,Ft,Dt;ue.parameters={...ue.parameters,docs:{...(Bt=ue.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Dt=(Ft=ue.parameters)==null?void 0:Ft.docs)==null?void 0:Dt.source}}};var Et,Nt,kt;pe.parameters={...pe.parameters,docs:{...(Et=pe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(kt=(Nt=pe.parameters)==null?void 0:Nt.docs)==null?void 0:kt.source}}};var Rt,At,Lt;he.parameters={...he.parameters,docs:{...(Rt=he.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Lt=(At=he.parameters)==null?void 0:At.docs)==null?void 0:Lt.source}}};const En=["Default","WithIllustratedMessage","WithCustomOverflowButton","SectionWithCustomHeader","FullScreenSingleSection"],fa=Object.freeze(Object.defineProperty({__proto__:null,Default:de,FullScreenSingleSection:he,SectionWithCustomHeader:pe,WithCustomOverflowButton:ue,WithIllustratedMessage:me,__namedExportsOrder:En,default:Dn},Symbol.toStringTag,{value:"Module"}));export{fa as C,de as D,he as F,H as O,pe as S,me as W,ue as a,V as b};
