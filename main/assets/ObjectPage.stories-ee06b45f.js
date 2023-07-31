import{j as e}from"./jsx-runtime-d079401a.js";import"./UnableToLoad-7907b0bf.js";import{i as Gt}from"./Person-4ad4078c.js";import{s as ct}from"./general-leave-request-1fc311e1.js";import{c as oe,R as Le,u as Jt,b as $t,D as Ve,a as zt}from"./index-151794f7.js";import{F as ie,a as be,b as Ut,c as wt,d as Wt}from"./index-13bed04c.js";import{b as te,a as d,F as ne}from"./index-4d982db6.js";import{T as u}from"./ThemingParameters-7e2e4e30.js";import{e as ke}from"./index-99d317a4.js";import{c as Y}from"./clsx-1229b3e0.js";import{r as n}from"./index-f1f2c4b1.js";import{c as we}from"./react-jss.esm-c310038c.js";import{a as Xt}from"./addCustomCSSWithScoping-783dc33d.js";import{A as Ot}from"./Avatar-813f92b3.js";import{a as Yt,T as dt}from"./index-7cff6a3b.js";import{u as mt}from"./withWebComponent-99b005ba.js";import{d as Kt}from"./debounce-be6825b8.js";import{G as Qt}from"./GlobalStyleClasses-7209358d.js";import{C as X}from"./CustomVariables-df17d38c.js";import{O as Zt}from"./index-c1b684f5.js";import{T as c}from"./index-47d0a85a.js";import{B as en}from"./index-d88fc290.js";import{B as tn}from"./Bar-e19b5f8b.js";import{B as y}from"./index-4765fcf1.js";import{B as f}from"./Button-0b5fe0db.js";import{B as nn,c as Ae}from"./index-bf3daea9.js";import{V as an}from"./ValueState-ab6838cc.js";import{L as Me}from"./index-4938df71.js";import{L as Ie}from"./index-9bd3f3a9.js";import{I as on}from"./index-f96252fc.js";import{I as rn}from"./IllustratedMessage-b72b98e7.js";import{T as ut}from"./index-7c68735c.js";import{T as qe}from"./index-13825777.js";import{M as ln}from"./index-57660acc.js";import{I as pt}from"./index-4a2ac3fd.js";var R=(i=>(i.Default="Default",i.IconTabBar="IconTabBar",i))(R||{});const B=i=>{const T=[];return n.Children.forEach(i,s=>{n.isValidElement(s)&&T.push(s)}),T},sn={base:{alignSelf:"center",opacity:0,paddingInlineEnd:"1rem"},hidden:{opacity:0},visible:{transition:"opacity 0.5s",opacity:1},imageContainer:{display:"inline-block",verticalAlign:"middle",maxHeight:"3rem",width:"3rem",maxWidth:"3rem"},image:{width:"100%",height:"100%"}},cn=we(sn,{name:"CollapsedAvatar"}),Ge=i=>{const{image:T,imageShapeCircle:s,style:j}=i,C=cn(),[O,D]=n.useState(!1),k=n.useRef(null),q=n.useMemo(()=>{var E,p;return T?typeof T=="string"?e.jsx("span",{className:C.imageContainer,style:{borderRadius:s?"50%":0,overflow:"hidden"},children:e.jsx("img",{className:C.image,src:T,alt:"Object Page Image"})}):n.cloneElement(T,{size:Ot.S,className:(E=T.props)!=null&&E.className?`${C.imageContainer} ${(p=T.props)==null?void 0:p.className}`:C.imageContainer}):null},[T,s]);n.useEffect(()=>{D(!0)},[]);const G=Y(C.base,O?C.visible:C.hidden);return e.jsx("div",{ref:k,className:G,style:j,"data-component-name":"ObjectPageCollapsedAvatar",children:q})};try{Ge.displayName="CollapsedAvatar",Ge.__docgenInfo={description:"",displayName:"CollapsedAvatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},imageShapeCircle:{defaultValue:null,description:"",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ae={anchorFloat:"--_ui5wcr_ObjectPage_actions_float",anchorLeft:"--_ui5wcr_ObjectPage_actions_left",anchorRight:"--_ui5wcr_ObjectPage_actions_right"},dn={objectPage:{[oe.headerDisplay]:"block",container:"objectPage / inline-size",boxSizing:"border-box",width:"100%",height:"100%",maxHeight:"100vh",position:"relative",whiteSpace:"normal",fontFamily:u.sapFontFamily,backgroundColor:u.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[oe.titleFontSize]:u.sapObjectHeader_Title_FontSize,'& section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"none"},'& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"block"}},"@global html":{[ae.anchorFloat]:"right",[ae.anchorRight]:"1.25rem",[ae.anchorLeft]:"unset"},'@global [dir="rtl"]':{[ae.anchorFloat]:"left",[ae.anchorRight]:"unset",[ae.anchorLeft]:"1.25rem"},iconTabBarMode:{'& section[data-component-name="ObjectPageSection"] > div[role="heading"]':{display:"none"}},headerCollapsed:{[oe.headerDisplay]:"none",[oe.titleFontSize]:u.sapObjectHeader_Title_SnappedFontSize},headerContainer:{extend:Le,marginBottom:"0.25rem",backgroundColor:u.sapObjectHeader_Background,display:"grid",gridAutoColumns:"min-content calc(100% - 5rem - 2rem)",'& [data-component-name="ObjectPageHeaderContent"]':{gridColumn:2}},headerHoverStyles:{'&[data-not-clickable="true"]':{cursor:"unset"},'&[data-not-clickable="false"]':{backgroundColor:`${u.sapObjectHeader_Hover_Background}`,'& [data-component-name="DynamicPageTitle"]':{backgroundColor:u.sapObjectHeader_Hover_Background}}},header:{extend:Le,[oe.headerDisplay]:"block",boxSizing:"border-box",backgroundColor:u.sapObjectHeader_Background,position:"sticky",top:0,zIndex:2,'& [data-component-name="DynamicPageTitle"]':{gridColumn:2,paddingLeft:0,paddingRight:0},cursor:"pointer"},headerImage:{minWidth:"5rem",maxWidth:"5rem",maxHeight:"5rem",display:"inline-block",marginInlineEnd:"2rem"},image:{width:"100%",height:"100%"},anchorBar:{position:"sticky",zIndex:2},tabContainer:{position:"sticky",zIndex:1,"@container objectPage (max-width: 599px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":0},"@container objectPage (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1440px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"2rem"}},tabContainerComponent:{"&::part(content)":{display:"none"}},content:{extend:Le},footer:{position:"sticky",bottom:"0.5rem",margin:"0 0.5rem"},subSectionPopover:{"&::part(content)":{padding:0}}},mn=(i,T)=>B(i).find(s=>{var j;return n.isValidElement(s)&&((j=s.props)==null?void 0:j.id)===T}),ht=i=>i?i.replace(/^ObjectPageSection-/,""):null;Xt("ui5-tabcontainer",`
  :host([data-component-name="ObjectPageTabContainer"]) .ui5-tc__header {
    padding: 0;
    padding-inline: var(--_ui5wcr_ObjectPage_tab_bar_inline_padding);
    box-shadow: inset 0 -0.0625rem ${u.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `);const W=48,un=we(dn,{name:"ObjectPage"}),F=n.forwardRef((i,T)=>{var it,rt,lt,st;const{headerTitle:s,image:j,footer:C,mode:O,imageShapeCircle:D,className:k,style:q,slot:G,showHideHeaderButton:E,children:p,selectedSectionId:A,alwaysShowContentHeader:m,showTitleInHeaderContent:J,headerContent:x,headerContentPinnable:Oe,a11yConfig:$,placeholder:_e,onSelectedSectionChange:He,onToggleHeaderContent:Je,onPinnedStateChange:_t,...Ht}=i,h=un(),re=(rt=(it=B(p)[0])==null?void 0:it.props)==null?void 0:rt.id,[K,H]=n.useState(A??re),[M,le]=n.useState(i.selectedSubSectionId),[P,$e]=n.useState(m),_=n.useRef(!1),[Bt,g]=mt(T),fe=n.useRef(null),xe=n.useRef(),[Ft,ze]=mt(x==null?void 0:x.ref),Ue=n.useRef(null),Se=n.useRef(null),[We,Xe]=n.useState(!1),ye=n.useRef(!1),[Dt,Te]=n.useState(void 0),[Q,Ye]=n.useState(!1),Be=n.useRef(0),[Et,Nt]=n.useState("0px"),Ke=n.useRef(K),Fe=(t,a,o,r)=>{typeof He=="function"&&Ke.current!==o&&(He(ke(t,{selectedSectionIndex:parseInt(a,10),selectedSectionId:o,section:r})),Ke.current=o)},z=n.useRef(Kt(Fe,500)).current;n.useEffect(()=>()=>{z.cancel(),clearTimeout(Se.current)},[]);const{topHeaderHeight:I,headerContentHeight:N,anchorBarHeight:je,totalHeaderHeight:se,headerCollapsed:w}=Jt(g,fe,ze,Ue,[Dt,Te],{noHeader:!s&&!x,fixedHeader:P,scrollTimeout:Be});n.useEffect(()=>{typeof Je=="function"&&ye.current&&Je(w!==!0)},[w]);const Qe=n.useMemo(()=>{var t;return j?typeof j=="string"?e.jsx("span",{className:h.headerImage,style:{borderRadius:D?"50%":0,overflow:"hidden"},children:e.jsx("img",{src:j,className:h.image,alt:"Company Logo"})}):n.cloneElement(j,{size:Ot.L,className:Y(h.headerImage,(t=j.props)==null?void 0:t.className)}):null},[j,h.headerImage,h.image,D]),De=n.useRef(0),ve=n.useCallback(t=>{var a,o,r,S;if(t){if(re===t)(a=g.current)==null||a.scrollTo({top:0,behavior:"smooth"});else{const l=(r=(o=g.current)==null?void 0:o.querySelector(`#ObjectPageSection-${t}`))==null?void 0:r.offsetTop;if(!isNaN(l)){const v=I||De.current;I&&(De.current=I),(S=g.current)==null||S.scrollTo({top:l-v-je-W-(P?w===!0?0:N:0),behavior:"smooth"})}}_.current=!1}},[re,g,I,je,P,N,w,De.current]),Ze=()=>{var a;const t=A??re;if(t!==et.current){z.cancel(),_.current=!0,H(t),et.current=t;const o=(a=g.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]'),r=B(p).findIndex(S=>{var l;return n.isValidElement(S)&&((l=S.props)==null?void 0:l.id)===t});Fe({},r,t,o[0])}},et=n.useRef(),[Ee,tt]=n.useState(0),nt=n.useRef();n.useEffect(()=>(A&&(O===R.Default?Ee<750&&Ee!==void 0?nt.current=requestAnimationFrame(t=>{tt(t)}):(tt(void 0),Ze()):Ze()),()=>{cancelAnimationFrame(nt.current)}),[Ee,A,re,z]);const Rt=n.useCallback((t,a,o,r)=>{_.current=!0,z.cancel(),H(S=>(S===a&&ve(a),a)),xe.current=t,Fe(t,o,a,r)},[He,H,_,ve]);n.useEffect(()=>{O===R.Default&&_.current===!0&&!M&&ve(K)},[K,O,_,ve,M]),n.useEffect(()=>{var t,a;if(M&&_.current===!0){const o=(t=g.current)==null?void 0:t.querySelector(`div[id="ObjectPageSubSection-${M}"]`),r=o==null?void 0:o.offsetTop;isNaN(r)||(o.focus({preventScroll:!0}),(a=g.current)==null||a.scrollTo({top:r-I-je-W-(P?N:0)-16,behavior:"smooth"})),_.current=!1}},[M,_.current,I,je,P,N]),n.useEffect(()=>{m!==void 0&&$e(m),m&&ce({detail:{visible:!0}})},[m]);const Ce=n.useRef(P);n.useEffect(()=>{Ce.current&&!P&&g.current.scrollTop>I&&(ce({detail:{visible:!1}}),Ce.current=!1),!Ce.current&&P&&(Ce.current=!0)},[P,I]),n.useEffect(()=>{if(le(i.selectedSubSectionId),i.selectedSubSectionId&&(_.current=!0,O===R.IconTabBar)){let t;B(p).forEach(a=>{n.isValidElement(a)&&a.props&&a.props.children&&B(a.props.children).forEach(o=>{var r;n.isValidElement(o)&&o.props&&o.props.id===i.selectedSubSectionId&&(t=(r=a.props)==null?void 0:r.id)})}),t&&H(t)}},[i.selectedSubSectionId,H,le,p,O]),n.useEffect(()=>{const t=g.current,a=t.querySelectorAll('[id^="ObjectPageSection"]'),o=a[a.length-1],r=new ResizeObserver(([S])=>{let l=0;t.scrollHeight===t.offsetHeight&&(l=Math.max(t.getBoundingClientRect().bottom-S.target.getBoundingClientRect().bottom,0));const v=o.querySelectorAll('[id^="ObjectPageSubSection"]'),b=v[v.length-1];b&&(l+=t.getBoundingClientRect().height-I-W-(w?0:N)-b.getBoundingClientRect().height-32),Nt(C?`calc(${l}px - 1rem - ${W}px)`:`${l}px`)});return t&&o&&r.observe(o,{box:"border-box"}),()=>{r.disconnect()}},[C,w,I,N]);const ce=n.useCallback(t=>{var a,o;ye.current=!0,Be.current=performance.now()+500,t.detail.visible?(Te(!1),Ye(!0),(o=g.current)==null||o.classList.remove(h.headerCollapsed)):(Te(!0),(a=g.current)==null||a.classList.add(h.headerCollapsed))},[]),Lt=n.useCallback(t=>{var o;if(_.current=!0,O===R.IconTabBar){const r=t.detail.sectionId;H(r);const S=(o=g.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]'),l=B(p).findIndex(v=>{var b;return n.isValidElement(v)&&((b=v.props)==null?void 0:b.id)===r});z(t,l,r,S[l])}const a=t.detail.subSectionId;le(a)},[O,H,le,_,p]),kt=Y(h.objectPage,Qt.sapScrollBar,k,O===R.IconTabBar&&h.iconTabBarMode),{onScroll:yn,selectedSubSectionId:Tn,...At}=Ht;n.useEffect(()=>{var l,v;const t=(l=g.current)==null?void 0:l.querySelectorAll('section[data-component-name="ObjectPageSection"]'),o=(((v=g.current)==null?void 0:v.clientHeight)??1e3)-se-W,r=`-${se}px 0px -${o<0?0:o}px 0px`,S=new IntersectionObserver(([b])=>{if(b.isIntersecting&&_.current===!1&&g.current.getBoundingClientRect().top+se+W<=b.target.getBoundingClientRect().bottom){const ee=ht(b.target.id);H(ee);const de=B(p).findIndex(U=>{var me;return n.isValidElement(U)&&((me=U.props)==null?void 0:me.id)===ee});z(xe.current,de,ee,b.target)}},{root:g.current,rootMargin:r,threshold:[0]});if(We){let b=t[t.length-1],ee;for(let U=0;U<=t.length-1;U++){const me=t[U];if(g.current.getBoundingClientRect().top+se+W<=me.getBoundingClientRect().bottom){b=me,ee=U;break}}const de=ht(b==null?void 0:b.id);de!==K&&(H(de),z(xe.current,ee??t.length-1,de,b)),Xe(!1)}return t.forEach(b=>{S.observe(b)}),()=>{S.disconnect()}},[g.current,p,se,H,_,We]);const Z=m&&!Oe||!x||!E&&!Oe,Pe=n.useCallback(t=>{t.stopPropagation(),Z||ce(ke(t,{visible:w}))},[ce,w,Z]),Ne=n.useCallback((t=!1)=>{var o,r;const a={...t?{padding:0}:{},...((o=s==null?void 0:s.props)==null?void 0:o.style)??{}};return s!=null&&s.props&&((r=s.props)==null?void 0:r.showSubHeaderRight)===void 0?n.cloneElement(s,{showSubHeaderRight:!0,style:a,"data-not-clickable":Z,onToggleHeaderContentVisibility:Pe}):n.cloneElement(s,{style:a,"data-not-clickable":Z,onToggleHeaderContentVisibility:Pe})},[s,Z,Pe]),Mt=n.useCallback(()=>{if(x!=null&&x.props)return n.cloneElement(x,{...x.props,topHeaderHeight:I,style:w===!0?{position:"absolute",visibility:"hidden"}:x.props.style,headerPinned:P||Q,ref:Ft,children:e.jsxs("div",{className:h.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Qe,x.props.children&&e.jsxs("div",{"data-component-name":"ObjectPageHeaderContent",children:[s&&J&&Ne(!0),x.props.children]})]})})},[x,I,P,Q,J,Qe,ze,Ne]),Vt=t=>{var l;t.preventDefault();const{sectionId:a,index:o,isSubTab:r,parentId:S}=t.detail.tab.dataset;if(r)Lt(ke(t,{sectionId:S,subSectionId:a}));else{const v=B(p).find(b=>b.props.id==a);Rt(t,(l=v==null?void 0:v.props)==null?void 0:l.id,o,v)}},at=n.useRef(),qt=n.useCallback(t=>{var a;if(ye.current||(ye.current=!0),!(Be.current>=performance.now())&&(xe.current=t,typeof i.onScroll=="function"&&i.onScroll(t),M&&le(void 0),Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>{Xe(!0)},100),(!P||t.target.scrollTop===0)&&((a=g.current)==null||a.classList.remove(h.headerCollapsed)),Q&&t.target.scrollTop!==at.current)){if(t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight)return;at.current=t.target.scrollTop,P||Te(!0),Ye(!1)}},[I,P,i.onScroll,Q,M]),Re=n.useCallback(t=>{var a,o;(t==null?void 0:t.type)==="mouseover"?(a=fe.current)==null||a.classList.add(h.headerHoverStyles):(o=fe.current)==null||o.classList.remove(h.headerHoverStyles)},[h.headerHoverStyles]),ot={...q};return w===!0&&x&&(ot[oe.titleFontSize]=u.sapObjectHeader_Title_SnappedFontSize),e.jsxs("div",{"data-component-name":"ObjectPage",slot:G,className:kt,style:ot,ref:Bt,onScroll:qt,...At,children:[e.jsxs("header",{onMouseOver:Re,onMouseLeave:Re,"data-component-name":"ObjectPageTopHeader",ref:fe,role:(lt=$==null?void 0:$.objectPageTopHeader)==null?void 0:lt.role,"data-not-clickable":Z,"aria-roledescription":((st=$==null?void 0:$.objectPageTopHeader)==null?void 0:st.ariaRoledescription)??"Object Page header",className:h.header,onClick:Pe,style:{gridAutoColumns:`min-content ${s&&j&&w===!0?"calc(100% - 3rem - 1rem)":"100%"}`,display:!J||w===!0?"grid":"none"},children:[s&&j&&w===!0&&e.jsx(Ge,{image:j,imageShapeCircle:D}),s&&Ne()]}),Mt(),x&&s&&e.jsx("div",{"data-component-name":"ObjectPageAnchorBar",ref:Ue,className:h.anchorBar,style:{top:Q||P?`${I+(w===!0?0:N)}px`:`${I+5}px`},children:e.jsx($t,{headerContentVisible:x&&w!==!0,headerContentPinnable:Oe,showHideHeaderButton:E,headerPinned:P,a11yConfig:$,onToggleHeaderContentVisibility:ce,setHeaderPinned:$e,onHoverToggleButton:Re,onPinnedStateChange:_t})}),!_e&&e.jsx("div",{className:h.tabContainer,"data-component-name":"ObjectPageTabContainer",style:{top:P||Q?`${I+(w===!0?0:N)}px`:`${I}px`},children:e.jsx(Yt,{collapsed:!0,fixed:!0,onTabSelect:Vt,"data-component-name":"ObjectPageTabContainer",className:h.tabContainerComponent,children:B(p).map((t,a)=>{var r,S;if(!n.isValidElement(t)||!t.props)return null;const o=B(t.props.children).filter(l=>{var v;return n.isValidElement(l)&&((v=l==null?void 0:l.type)==null?void 0:v.displayName)==="ObjectPageSubSection"});return e.jsx(dt,{"data-index":a,"data-section-id":t.props.id,text:t.props.titleText,selected:K===((r=t.props)==null?void 0:r.id)||void 0,subTabs:o.map(l=>n.isValidElement(l)?e.jsx(dt,{"data-parent-id":t.props.id,"data-is-sub-tab":!0,"data-section-id":l.props.id,text:l.props.titleText,selected:l.props.id===M||void 0,children:e.jsx("span",{style:{display:"none"}})},l.props.id):null),children:e.jsx("span",{style:{display:"none"}})},`Anchor-${(S=t.props)==null?void 0:S.id}`)})})}),e.jsxs("div",{"data-component-name":"ObjectPageContent",className:h.content,children:[e.jsx("div",{style:{height:w?`${N}px`:0},"aria-hidden":"true"}),_e||(O===R.IconTabBar?mn(p,K):p),e.jsx("div",{style:{height:Et},"aria-hidden":"true"})]}),C&&e.jsx("div",{style:{height:"1rem"},"data-component-name":"ObjectPageFooterSpacer"}),C&&e.jsx("footer",{className:h.footer,"data-component-name":"ObjectPageFooter",children:C})]})});F.displayName="ObjectPage";F.defaultProps={image:null,mode:R.Default,imageShapeCircle:!1,showHideHeaderButton:!1};try{F.displayName="ObjectPage",F.__docgenInfo={description:"A component that allows apps to easily display information related to a business object.\n\nThe `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.",displayName:"ObjectPage",props:{headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n__Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},image:{defaultValue:{value:"null"},description:"Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Defines the content area of the `ObjectPage`. It consists of sections and subsections.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ObjectPageSectionPropTypes, string | JSXElementConstructor<any>> | ReactElement<ObjectPageSectionPropTypes, string | JSXElementConstructor<...>>[]"}},selectedSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSection` section.",name:"selectedSectionId",required:!1,type:{name:"string"}},selectedSubSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSubSection` section.",name:"selectedSubSectionId",required:!1,type:{name:"string"}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` is hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showTitleInHeaderContent:{defaultValue:null,description:"Defines whether the title is displayed in the content section of the header or above the image.",name:"showTitleInHeaderContent",required:!1,type:{name:"boolean"}},imageShapeCircle:{defaultValue:{value:"false"},description:"Defines whether the image should be displayed in a circle or in a square.<br />\n__Note:__ If the `image` is not a `string`, this prop has no effect.",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ObjectPageMode.Default"},description:'Defines the `ObjectPage` mode.\n\n- "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.\n- "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"IconTabBar"'},{value:'"IconTabBar"'}]}},showHideHeaderButton:{defaultValue:{value:"false"},description:"Defines whether the pin button of the header is displayed.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Defines whether the `headerContent` is pinnable.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ objectPageTopHeader?: { role?: string; ariaRoledescription?: string; }; dynamicPageAnchorBar?: { role?: string; }; }"}},placeholder:{defaultValue:null,description:"If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.",name:"placeholder",required:!1,type:{name:"ReactNode"}},onSelectedSectionChange:{defaultValue:null,description:"Fired when the selected section changes.",name:"onSelectedSectionChange",required:!1,type:{name:"(event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement; }>) => void"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const pn={section:{'& [data-component-name="ObjectPageSubSection"]:not(:first-child)':{paddingBlockStart:"0.5rem"}},headerContainer:{paddingBlock:"0.5rem",color:u.sapGroup_TitleTextColor,fontFamily:u.sapFontFamily},titleContainer:{borderTop:X.ObjectPageSectionBorderTop,boxSizing:"border-box",height:"2.25rem"},title:{height:X.ObjectPageSectionTitleHeight,lineHeight:X.ObjectPageSectionTitleLineHeight,color:u.sapGroup_TitleTextColor,fontSize:u.sapFontHeader4Size,display:"inline-block",maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:X.ObjectPageSectionTitleFontFamily,textDecoration:X.ObjectPageSectionTitleTextDecoration},uppercase:{textTransform:"uppercase"},wrap:{"& $titleContainer":{height:"unset"},"& $title":{whiteSpace:"normal",height:"unset",lineHeight:"normal"}},sectionContent:{whiteSpace:"normal"},sectionContentInner:{paddingBlock:"0.5rem",fontFamily:u.sapFontFamily}},hn=pn,gn=we(hn,{name:"ObjectPageSection"}),L=n.forwardRef((i,T)=>{const{titleText:s="",id:j,children:C,titleTextUppercase:O=!0,className:D,style:k,hideTitleText:q,titleTextLevel:G="H3",wrapTitleText:E,header:p,...A}=i,m=gn(),J=`ObjectPageSection-${j}`,x=Y(m.title,O&&m.uppercase);return e.jsxs("section",{ref:T,role:"region",className:Y(m.section,E&&m.wrap,D),style:k,...A,id:J,"data-component-name":"ObjectPageSection",children:[!!p&&e.jsx("div",{className:m.headerContainer,children:p}),!q&&e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:m.titleContainer,"data-component-name":"ObjectPageSectionTitleText",children:e.jsx("div",{className:x,children:s})}),e.jsx("div",{className:m.sectionContent,children:e.jsx("div",{className:m.sectionContentInner,"data-component-name":"ObjectPageSectionContent",children:C})})]})});L.displayName="ObjectPageSection";try{L.displayName="ObjectPageSection",L.__docgenInfo={description:"Top-level information container of an `ObjectPage`.",displayName:"ObjectPageSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSection`.<br />\n__Note:__ The `id` is taken into account when the section selection changes.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:{value:"''"},description:"Defines the title of the `ObjectPageSection`.",name:"titleText",required:!1,type:{name:"string"}},titleTextUppercase:{defaultValue:{value:"true"},description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the Section title or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TitleLevel.H3"},description:"Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},wrapTitleText:{defaultValue:null,description:"Determines whether the Section title wraps on multiple lines, when the available space is not enough.",name:"wrapTitleText",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Section header content.

__Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.`,name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const bn={objectPageSubSection:{"&:focus":{outline:`${u.sapContent_FocusWidth} ${u.sapContent_FocusStyle} ${u.sapContent_FocusColor}`,outlineOffset:`calc(-1 * ${u.sapContent_FocusWidth})`}},headerContainer:{marginBlockEnd:"0.5rem","& >:first-child":{marginInline:"0 0.25rem"},"& >:last-child:not(:first-child)":{marginInline:"0.25rem 0"},"& > *:not(:first-child):not(:last-child)":{marginInline:"0.25rem"}},subSectionTitle:{fontSize:u.sapFontHeader5Size,color:u.sapGroup_TitleTextColor,flexGrow:1},subSectionContent:{backgroundColor:X.ObjectPageSubSectionBackgroundColor,borderRadius:X.ObjectPageSubSectionBorderRadius,paddingInline:"0.5rem",paddingBlock:"1rem"},spacer:{flexGrow:1},uppercase:{textTransform:"uppercase"}},fn=we(bn,{name:"ObjectPageSubSection"}),V=n.forwardRef((i,T)=>{const{children:s,id:j,titleText:C,className:O,style:D,actions:k,hideTitleText:q,titleTextLevel:G="H4",titleTextUppercase:E,...p}=i,A=`ObjectPageSubSection-${j}`,m=fn(),J=Y(m.objectPageSubSection,O);return e.jsxs("div",{ref:T,role:"region",style:D,tabIndex:-1,...p,className:J,id:A,"data-component-name":"ObjectPageSubSection",children:[e.jsxs(ie,{direction:be.Row,justifyContent:Ut.SpaceBetween,alignItems:wt.Center,className:m.headerContainer,"data-component-name":"ObjectPageSubSectionHeaderContainer",children:[q?e.jsx("span",{"aria-hidden":"true",className:m.spacer}):e.jsx("div",{role:"heading","aria-level":parseInt(G.slice(1)),className:Y(m.subSectionTitle,E&&m.uppercase),"data-component-name":"ObjectPageSubSectionTitleText",children:C}),k&&k]}),e.jsx("div",{className:m.subSectionContent,"data-component-name":"ObjectPageSubSectionContent",children:s})]})});V.displayName="ObjectPageSubSection";try{V.displayName="ObjectPageSubSection",V.__docgenInfo={description:"Second-level information container of an `ObjectPage`.<br />\n__Note:__ This component should only be used inside an `ObjectPageSection` component.",displayName:"ObjectPageSubSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSubSection`.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSubSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:null,description:"Defines the title of the `ObjectPageSubSection`.",name:"titleText",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Actions available for this subsection.\n\n__Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the SubSection `titleText` or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TittleLevel.H4"},description:"Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTextUppercase:{defaultValue:null,description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const xn={title:"Layouts & Floorplans / ObjectPage",component:F,argTypes:{headerTitle:{control:{disable:!0}},headerContent:{control:{disable:!0}},footer:{control:{disable:!0}},children:{control:{disable:!0}},placeholder:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{mode:R.Default,showHideHeaderButton:!0,selectedSectionId:"goals",headerContentPinnable:!0,imageShapeCircle:!0,image:Gt,style:{height:"700px"},footer:e.jsx(en,{design:tn.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(y,{design:f.Positive,children:"Accept"}),e.jsx(y,{design:f.Negative,children:"Reject"})]})}),headerTitle:e.jsx(Ve,{showSubHeaderRight:!0,header:"Denise Smith",subHeader:"Senior UI Developer",actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{design:f.Emphasized,children:"Primary Action"},"1"),e.jsx(y,{children:"Action"},"2")]}),breadcrumbs:e.jsxs(nn,{children:[e.jsx(Ae,{children:"Manager Cockpit"}),e.jsx(Ae,{children:"My Team"}),e.jsx(Ae,{children:"Employee Details"})]}),children:e.jsx(Zt,{state:an.Success,children:"employed"})}),headerContent:e.jsx(zt,{children:e.jsxs(ie,{wrap:Wt.Wrap,alignItems:wt.Center,children:[e.jsxs(ie,{direction:be.Column,children:[e.jsx(Me,{children:"+33 6 4512 5158"}),e.jsx(Me,{href:"mailto:ui5-webcomponents-react@sap.com",children:"DeniseSmith@sap.com"}),e.jsx(Me,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"https://github.com/SAP/ui5-webcomponents-react"})]}),e.jsxs(ie,{direction:be.Column,style:{padding:"10px"},children:[e.jsx(Ie,{children:"San Jose"}),e.jsx(Ie,{children:"California, USA"})]})]})})}},ue={render(i){return e.jsxs(F,{...i,children:[e.jsx(L,{titleText:"Goals",id:"goals","aria-label":"Goals",children:e.jsxs(te,{columnsL:3,columnsXL:3,labelSpanXL:6,labelSpanL:6,columnsM:2,labelSpanM:6,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Evangelize the UI framework across the company",children:e.jsx(c,{children:"4 days overdue - Cascaded"})}),e.jsx(d,{label:"Get trained in development management direction",children:e.jsx(c,{children:"Due Nov, 21"})}),e.jsx(d,{label:"Mentor junior developers",children:e.jsx(c,{children:"Due Dec, 31 - Cascaded"})})]})}),e.jsxs(L,{titleText:"Personal",id:"personal","aria-label":"Personal",children:[e.jsx(V,{titleText:"Connect",id:"personal-connect","aria-label":"Connect",actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{design:f.Emphasized,style:{minWidth:"120px"},children:"Custom Action"}),e.jsx(y,{design:f.Transparent,icon:"action-settings",tooltip:"settings"}),e.jsx(y,{design:f.Transparent,icon:"download",tooltip:"download"})]}),children:e.jsxs(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsxs(ne,{titleText:"Phone Numbers",children:[e.jsx(d,{label:"Home",children:e.jsx(c,{children:"+1 234-567-8901"})}),e.jsx(d,{label:"",children:e.jsx(c,{children:"+1 234-567-5555"})})]}),e.jsxs(ne,{titleText:"Social Accounts",children:[e.jsx(d,{label:"LinkedIn",children:e.jsx(c,{children:"/DeniseSmith"})}),e.jsx(d,{label:"Twitter",children:e.jsx(c,{children:"@DeniseSmith"})})]}),e.jsxs(ne,{titleText:"Addresses",children:[e.jsx(d,{label:"Home Address",children:e.jsx(c,{children:"2096 Mission Street"})}),e.jsx(d,{label:"Mailing Address",children:e.jsx(c,{children:"PO Box 32114"})})]}),e.jsx(ne,{titleText:"Mailing Address",children:e.jsx(d,{label:"Work",children:e.jsx(c,{children:"DeniseSmith@sap.com"})})})]})}),e.jsx(V,{titleText:"Payment Information",id:"personal-payment-information","aria-label":"Payment Information",children:e.jsxs(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(ne,{titleText:"Salary",children:e.jsx(d,{label:"Bank Transfer",children:e.jsx(c,{children:"Money Bank, Inc."})})}),e.jsx(ne,{titleText:"Payment method for Expenses",children:e.jsx(d,{label:"Extra Travel Expenses",children:e.jsx(c,{children:"Cash 100 USD"})})})]})})]}),e.jsxs(L,{titleText:"Employment",id:"employment","aria-label":"Employment",children:[e.jsx(V,{titleText:"Job Information",id:"employment-job-information","aria-label":"Job Information",children:e.jsxs(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Job Classification",children:e.jsxs(ie,{direction:be.Column,children:[e.jsx(c,{children:"Senior UI Developer"}),e.jsx(Ie,{children:"(UIDEV-SR)"})]})}),e.jsx(d,{label:"Job Title",children:e.jsx(c,{children:"Developer"})}),e.jsx(d,{label:"Employee Class",children:e.jsx(c,{children:"Employee"})}),e.jsx(d,{label:"Manager",children:e.jsxs(ie,{direction:be.Column,children:[e.jsx(c,{children:"Dan Smith"}),e.jsx(Ie,{children:"Development Manager"})]})}),e.jsx(d,{label:"Pay Grade",children:e.jsx(c,{children:"Salary Grade 18 (GR-14)"})}),e.jsx(d,{label:"FTE",children:e.jsx(c,{children:"1"})})]})}),e.jsx(V,{titleText:"Employee Details",id:"employment-employee-details","aria-label":"Employee Details",children:e.jsxs(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"End Date",children:e.jsx(c,{children:"Dec 31, 9999"})}),e.jsx(d,{label:"Payroll Start Date",children:e.jsx(c,{children:"Jan 01, 2018"})}),e.jsx(d,{label:"Benefits Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})}),e.jsx(d,{label:"Company Car Eligibility",children:e.jsx(c,{children:"Jan 01, 2021"})}),e.jsx(d,{label:"Equity Start Date",children:e.jsx(c,{children:"Jul 01, 2018"})})]})}),e.jsx(V,{titleText:"Job Relationship",id:"employment-job-relationship","aria-label":"Job Relationship",children:e.jsxs(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e.jsx(d,{label:"Manager",children:e.jsx(c,{children:"John Doe"})}),e.jsx(d,{label:"Scrum Master",children:e.jsx(c,{children:"Michael Adams"})}),e.jsx(d,{label:"Product Owner",children:e.jsx(c,{children:"John Miller"})})]})})]})]})}},pe={name:"with IllustratedMessage",render(i){return e.jsx(F,{image:i.image,headerTitle:i.headerTitle,headerContent:i.headerContent,imageShapeCircle:!0,placeholder:e.jsx(on,{name:rn.UnableToLoad})})}},he={name:"with custom overflow button",render(){const i={actionsToolbarProps:{overflowButton:e.jsx(ut,{design:f.Transparent,icon:"navigation-down-arrow"})},navigationActionsToolbarProps:{overflowButton:e.jsx(ut,{design:f.Transparent,icon:"menu2"})},actions:e.jsxs(e.Fragment,{children:[e.jsx(y,{design:f.Emphasized,children:"Edit"},"edit"),e.jsx(y,{design:f.Transparent,children:"Delete"},"delete"),e.jsx(y,{design:f.Transparent,children:"Copy"},"copy"),e.jsx(y,{icon:"action",design:f.Transparent,children:"Action"},"action"),e.jsx(y,{design:f.Transparent,children:"Create"}),e.jsx(y,{design:f.Transparent,children:"Loooooooooooooooooooooooooooooooooooong actions Button"})]}),navigationActions:e.jsxs(e.Fragment,{children:[e.jsx(y,{icon:"full-screen",design:f.Transparent},"fullscreen"),e.jsx(y,{icon:"exit-full-screen",design:f.Transparent},"exitFullscreen"),e.jsx(y,{icon:"decline",design:f.Transparent},"decline"),e.jsx(y,{design:f.Transparent,children:"UI5 Web Components For React"}),e.jsx(y,{design:f.Transparent,children:"Navigation Actions Button"}),e.jsx(y,{design:f.Transparent,children:"Loooooooooooooooooooooooooooooooooooong navigation actions Button"})]})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{style:{width:"1000px"},showHideHeaderButton:!1,headerTitle:e.jsx(Ve,{...i,header:e.jsx(qe,{wrappingType:"Normal",children:"Custom overflow buttons for navigationActions and actions (width: 1000px)"})})}),e.jsx(F,{style:{width:"1400px"},showHideHeaderButton:!1,headerTitle:e.jsx(Ve,{...i,header:e.jsx(qe,{children:"Custom overflow buttons for actions (width: 1400px)"})})})]})}},ge={name:"section with custom header",render(i){return e.jsxs(F,{...i,children:[e.jsx(L,{titleText:"Goals",hideTitleText:!0,id:"goals","aria-label":"Goals",header:e.jsx(qe,{children:"Custom Header Section One"}),children:e.jsx("div",{style:{width:"100%",height:"200px",background:"cadetblue"}})}),e.jsx(L,{titleText:"Personal",hideTitleText:!0,id:"personal","aria-label":"Personal",header:e.jsx(ln,{hideCloseButton:!0,children:"Custom Header Section Two"}),children:e.jsx("div",{style:{width:"100%",height:"500px",background:"cadetblue"}})}),e.jsx(L,{titleText:"Employment",hideTitleText:!0,id:"employment","aria-label":"Employment",header:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(pt,{name:ct,style:{marginInlineEnd:"2rem"}}),e.jsx(c,{children:"Custom Header Section Three"}),e.jsx(pt,{name:ct,style:{marginInlineStart:"2rem"}})]}),children:e.jsx("div",{style:{width:"100%",height:"300px",background:"cadetblue"}})})]})}};var gt,bt,ft;ue.parameters={...ue.parameters,docs:{...(gt=ue.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ft=(bt=ue.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var xt,St,yt;pe.parameters={...pe.parameters,docs:{...(xt=pe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  name: 'with IllustratedMessage',
  render(args) {
    return <ObjectPage image={args.image} headerTitle={args.headerTitle} headerContent={args.headerContent} imageShapeCircle placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />} />;
  }
}`,...(yt=(St=pe.parameters)==null?void 0:St.docs)==null?void 0:yt.source}}};var Tt,jt,vt;he.parameters={...he.parameters,docs:{...(Tt=he.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(vt=(jt=he.parameters)==null?void 0:jt.docs)==null?void 0:vt.source}}};var Ct,Pt,It;ge.parameters={...ge.parameters,docs:{...(Ct=ge.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(Pt=ge.parameters)==null?void 0:Pt.docs)==null?void 0:It.source}}};const Sn=["Default","WithIllustratedMessage","WithCustomOverflowButton","SectionWithCustomHeader"],aa=Object.freeze(Object.defineProperty({__proto__:null,Default:ue,SectionWithCustomHeader:ge,WithCustomOverflowButton:he,WithIllustratedMessage:pe,__namedExportsOrder:Sn,default:xn},Symbol.toStringTag,{value:"Module"}));export{aa as C,ue as D,L as O,ge as S,pe as W,he as a,V as b};
//# sourceMappingURL=ObjectPage.stories-ee06b45f.js.map
