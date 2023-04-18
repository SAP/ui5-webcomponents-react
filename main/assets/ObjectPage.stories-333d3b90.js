import{j as e,a as r,F as ie}from"./jsx-runtime-670450c2.js";import"./UnableToLoad-e5284691.js";import{i as Jt}from"./Person-4ad4078c.js";import{s as dt}from"./general-leave-request-eb2be0aa.js";import{c as oe,R as ke,u as $t,b as zt,D as qe,a as Ut}from"./index-9db594d8.js";import{F as re,a as fe,b as Wt,c as Ot,d as Xt}from"./index-44cc9c22.js";import{b as te,a as m,F as ne}from"./index-6d309a04.js";import{T as p}from"./ThemingParameters-f4b4144e.js";import{e as Ae}from"./index-99d317a4.js";import{c as Y}from"./clsx.m-1229b3e0.js";import{r as n}from"./index-f1f749bf.js";import{c as Oe}from"./react-jss.esm-2e28eff7.js";import{a as Yt}from"./addCustomCSSWithScoping-3a8770ef.js";import{a as _t}from"./Avatar-0d8d2b25.js";import{T as Kt,a as mt}from"./index-3061c85c.js";import{u as ut}from"./withWebComponent-d280b5c2.js";import{d as Qt}from"./debounce-c3e37d29.js";import{G as Zt}from"./GlobalStyleClasses-7209358d.js";import{a as X}from"./CustomVariables-fd831c35.js";import{O as en}from"./index-efe83ac5.js";import{T as d}from"./index-479d8097.js";import{B as tn}from"./index-9fce8ea1.js";import{B as nn}from"./Bar-b186f469.js";import{B as x}from"./index-77230a4e.js";import{a as S}from"./Button-fa05cadd.js";import{B as an,a as Me}from"./index-84afeef6.js";import{V as on}from"./ValueState-ab6838cc.js";import{L as Ve}from"./index-e10646b1.js";import{L as je}from"./index-2f9314bf.js";import{I as rn}from"./index-35f5d7d1.js";import{I as ln}from"./IllustratedMessage-1c6923b4.js";import{T as pt}from"./index-7feebe0c.js";import{T as Ge}from"./index-43c53363.js";import{M as sn}from"./index-fa8f25f3.js";import{I as ht}from"./index-7b56b360.js";var L=(i=>(i.Default="Default",i.IconTabBar="IconTabBar",i))(L||{});const F=i=>{const v=[];return n.Children.forEach(i,c=>{n.isValidElement(c)&&v.push(c)}),v},cn={base:{alignSelf:"center",opacity:0,paddingInlineEnd:"1rem"},hidden:{opacity:0},visible:{transition:"opacity 0.5s",opacity:1},imageContainer:{display:"inline-block",verticalAlign:"middle",maxHeight:"3rem",width:"3rem",maxWidth:"3rem"},image:{width:"100%",height:"100%"}},dn=Oe(cn,{name:"CollapsedAvatar"}),Je=i=>{const{image:v,imageShapeCircle:c,style:C}=i,I=dn(),[_,E]=n.useState(!1),A=n.useRef(null),G=n.useMemo(()=>{var N,h;return v?typeof v=="string"?e("span",{className:I.imageContainer,style:{borderRadius:c?"50%":0,overflow:"hidden"},children:e("img",{className:I.image,src:v,alt:"Object Page Image"})}):n.cloneElement(v,{size:_t.S,className:(N=v.props)!=null&&N.className?`${I.imageContainer} ${(h=v.props)==null?void 0:h.className}`:I.imageContainer}):null},[v,c]);n.useEffect(()=>{E(!0)},[]);const J=Y(I.base,_?I.visible:I.hidden);return e("div",{ref:A,className:J,style:C,"data-component-name":"ObjectPageCollapsedAvatar",children:G})};try{Je.displayName="CollapsedAvatar",Je.__docgenInfo={description:"",displayName:"CollapsedAvatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},imageShapeCircle:{defaultValue:null,description:"",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ae={anchorFloat:"--_ui5wcr_ObjectPage_actions_float",anchorLeft:"--_ui5wcr_ObjectPage_actions_left",anchorRight:"--_ui5wcr_ObjectPage_actions_right"},mn={objectPage:{[oe.headerDisplay]:"block",container:"objectPage / inline-size",boxSizing:"border-box",width:"100%",height:"100%",maxHeight:"100vh",position:"relative",whiteSpace:"normal",fontFamily:p.sapFontFamily,backgroundColor:p.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[oe.titleFontSize]:p.sapObjectHeader_Title_FontSize,'& section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"none"},'& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]':{display:"block"}},"@global html":{[ae.anchorFloat]:"right",[ae.anchorRight]:"1.25rem",[ae.anchorLeft]:"unset"},'@global [dir="rtl"]':{[ae.anchorFloat]:"left",[ae.anchorRight]:"unset",[ae.anchorLeft]:"1.25rem"},iconTabBarMode:{'& section[data-component-name="ObjectPageSection"] > div[role="heading"]':{display:"none"}},headerCollapsed:{[oe.headerDisplay]:"none",[oe.titleFontSize]:p.sapObjectHeader_Title_SnappedFontSize},headerContainer:{extend:ke,marginBottom:"0.25rem",backgroundColor:p.sapObjectHeader_Background,display:"grid",gridAutoColumns:"min-content calc(100% - 5rem - 2rem)",'& [data-component-name="ObjectPageHeaderContent"]':{gridColumn:2}},headerHoverStyles:{'&[data-not-clickable="true"]':{cursor:"unset"},'&[data-not-clickable="false"]':{backgroundColor:`${p.sapObjectHeader_Hover_Background}`,'& [data-component-name="DynamicPageTitle"]':{backgroundColor:p.sapObjectHeader_Hover_Background}}},header:{extend:ke,[oe.headerDisplay]:"block",boxSizing:"border-box",backgroundColor:p.sapObjectHeader_Background,position:"sticky",top:0,zIndex:2,'& [data-component-name="DynamicPageTitle"]':{gridColumn:2,paddingLeft:0,paddingRight:0},cursor:"pointer"},headerImage:{minWidth:"5rem",maxWidth:"5rem",maxHeight:"5rem",display:"inline-block",marginInlineEnd:"2rem"},image:{width:"100%",height:"100%"},anchorBar:{position:"sticky",zIndex:2},tabContainer:{position:"sticky",zIndex:1,"@container objectPage (max-width: 599px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":0},"@container objectPage (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"1rem"},"@container objectPage (min-width: 1440px)":{"--_ui5wcr_ObjectPage_tab_bar_inline_padding":"2rem"}},tabContainerComponent:{"&::part(content)":{display:"none"}},content:{extend:ke},footer:{position:"sticky",bottom:"0.5rem",margin:"0 0.5rem"},subSectionPopover:{"&::part(content)":{padding:0}}},un=(i,v)=>F(i).find(c=>{var C;return n.isValidElement(c)&&((C=c.props)==null?void 0:C.id)===v}),gt=i=>i?i.replace(/^ObjectPageSection-/,""):null;Yt("ui5-tabcontainer",`
  :host([data-component-name="ObjectPageTabContainer"]) .ui5-tc__header {
    padding: 0;
    padding-inline: var(--_ui5wcr_ObjectPage_tab_bar_inline_padding);
    box-shadow: inset 0 -0.0625rem ${p.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  `);const pn=Oe(mn,{name:"ObjectPage"}),D=n.forwardRef((i,v)=>{var rt,lt,st,ct;const{headerTitle:c,image:C,footer:I,mode:_,imageShapeCircle:E,className:A,style:G,slot:J,showHideHeaderButton:N,children:h,selectedSectionId:M,alwaysShowContentHeader:u,showTitleInHeaderContent:$,headerContent:y,headerContentPinnable:_e,a11yConfig:z,placeholder:He,onSelectedSectionChange:Be,onToggleHeaderContent:$e,onPinnedStateChange:Ht,...Bt}=i,g=pn(),le=(lt=(rt=F(h)[0])==null?void 0:rt.props)==null?void 0:lt.id,[K,B]=n.useState(M??le),[V,se]=n.useState(i.selectedSubSectionId),[w,ze]=n.useState(u),H=n.useRef(!1),[Ft,b]=ut(v),Se=n.useRef(null),ye=n.useRef(),[Dt,Ue]=ut(y==null?void 0:y.ref),We=n.useRef(null),Te=n.useRef(null),[Xe,Ye]=n.useState(!1),xe=n.useRef(!1),[Et,ve]=n.useState(void 0),[Q,Ke]=n.useState(!1),Fe=n.useRef(0),[Nt,Rt]=n.useState("0px"),Qe=n.useRef(K),De=(t,a,o,l)=>{typeof Be=="function"&&Qe.current!==o&&(Be(Ae(t,{selectedSectionIndex:parseInt(a,10),selectedSectionId:o,section:l})),Qe.current=o)},U=n.useRef(Qt(De,500)).current;n.useEffect(()=>()=>{U.cancel(),clearTimeout(Te.current)},[]);const{topHeaderHeight:j,headerContentHeight:R,anchorBarHeight:Ce,totalHeaderHeight:ce,headerCollapsed:O}=$t(b,Se,Ue,We,[Et,ve],{noHeader:!c&&!y,fixedHeader:w,scrollTimeout:Fe});n.useEffect(()=>{typeof $e=="function"&&xe.current&&$e(O!==!0)},[O]);const Ze=n.useMemo(()=>{var t;return C?typeof C=="string"?e("span",{className:g.headerImage,style:{borderRadius:E?"50%":0,overflow:"hidden"},children:e("img",{src:C,className:g.image,alt:"Company Logo"})}):n.cloneElement(C,{size:_t.L,className:Y(g.headerImage,(t=C.props)==null?void 0:t.className)}):null},[C,g.headerImage,g.image,E]),Ee=n.useRef(0),Pe=n.useCallback(t=>{var a,o,l,T;if(t){if(le===t)(a=b.current)==null||a.scrollTo({top:0,behavior:"smooth"});else{const s=(l=(o=b.current)==null?void 0:o.querySelector(`#ObjectPageSection-${t}`))==null?void 0:l.offsetTop;if(!isNaN(s)){const P=j||Ee.current;j&&(Ee.current=j),(T=b.current)==null||T.scrollTo({top:s-P-Ce-48-(w?O===!0?0:R:0),behavior:"smooth"})}}H.current=!1}},[le,b,j,Ce,w,R,O,Ee.current]),et=()=>{var a;const t=M??le;if(t!==tt.current){U.cancel(),H.current=!0,B(t),tt.current=t;const o=(a=b.current)==null?void 0:a.querySelectorAll('section[data-component-name="ObjectPageSection"]'),l=F(h).findIndex(T=>{var s;return n.isValidElement(T)&&((s=T.props)==null?void 0:s.id)===t});De({},l,t,o[0])}},tt=n.useRef(),[Ne,nt]=n.useState(0),at=n.useRef();n.useEffect(()=>(M&&(_===L.Default?Ne<750&&Ne!==void 0?at.current=requestAnimationFrame(t=>{nt(t)}):(nt(void 0),et()):et()),()=>{cancelAnimationFrame(at.current)}),[Ne,M,le,U]);const Lt=n.useCallback((t,a,o,l)=>{H.current=!0,U.cancel(),B(T=>(T===a&&Pe(a),a)),ye.current=t,De(t,o,a,l)},[Be,B,H,Pe]);n.useEffect(()=>{_===L.Default&&H.current===!0&&!V&&Pe(K)},[K,_,H,Pe,V]),n.useEffect(()=>{var t,a;if(V&&H.current===!0){const o=(t=b.current)==null?void 0:t.querySelector(`div[id="ObjectPageSubSection-${V}"]`),l=o==null?void 0:o.offsetTop;isNaN(l)||(o.focus({preventScroll:!0}),(a=b.current)==null||a.scrollTo({top:l-j-Ce-48-(w?R:0)-16,behavior:"smooth"})),H.current=!1}},[V,H.current,j,Ce,w,R]),n.useEffect(()=>{u!==void 0&&ze(u),u&&de({detail:{visible:!0}})},[u]);const Ie=n.useRef(w);n.useEffect(()=>{Ie.current&&!w&&b.current.scrollTop>j&&(de({detail:{visible:!1}}),Ie.current=!1),!Ie.current&&w&&(Ie.current=!0)},[w,j]),n.useEffect(()=>{if(se(i.selectedSubSectionId),i.selectedSubSectionId&&(H.current=!0,_===L.IconTabBar)){let t;F(h).forEach(a=>{n.isValidElement(a)&&a.props&&a.props.children&&F(a.props.children).forEach(o=>{var l;n.isValidElement(o)&&o.props&&o.props.id===i.selectedSubSectionId&&(t=(l=a.props)==null?void 0:l.id)})}),t&&B(t)}},[i.selectedSubSectionId,B,se,h,_]),n.useEffect(()=>{const t=b.current,a=t.querySelectorAll('[id^="ObjectPageSection"]'),o=a[a.length-1],l=new ResizeObserver(([T])=>{let s=0;t.scrollHeight===t.offsetHeight&&(s=Math.max(t.getBoundingClientRect().bottom-T.target.getBoundingClientRect().bottom,0));const P=o.querySelectorAll('[id^="ObjectPageSubSection"]'),f=P[P.length-1];f&&(s+=t.getBoundingClientRect().height-j-48-(O?0:R)-f.getBoundingClientRect().height-32),Rt(I?`calc(${s}px - 1rem - 48px)`:`${s}px`)});return t&&o&&l.observe(o,{box:"border-box"}),()=>{l.disconnect()}},[I,O,j,R]);const de=n.useCallback(t=>{var a,o;xe.current=!0,Fe.current=performance.now()+500,t.detail.visible?(ve(!1),Ke(!0),(o=b.current)==null||o.classList.remove(g.headerCollapsed)):(ve(!0),(a=b.current)==null||a.classList.add(g.headerCollapsed))},[]),kt=n.useCallback(t=>{var o;if(H.current=!0,_===L.IconTabBar){const l=t.detail.sectionId;B(l);const T=(o=b.current)==null?void 0:o.querySelectorAll('section[data-component-name="ObjectPageSection"]'),s=F(h).findIndex(P=>{var f;return n.isValidElement(P)&&((f=P.props)==null?void 0:f.id)===l});U(t,s,l,T[s])}const a=t.detail.subSectionId;se(a)},[_,B,se,H,h]),At=Y(g.objectPage,Zt.sapScrollBar,A,_===L.IconTabBar&&g.iconTabBarMode),{onScroll:xn,selectedSubSectionId:vn,...Mt}=Bt;n.useEffect(()=>{var s,P;const t=(s=b.current)==null?void 0:s.querySelectorAll('section[data-component-name="ObjectPageSection"]'),o=(((P=b.current)==null?void 0:P.clientHeight)??1e3)-ce-48,l=`-${ce}px 0px -${o<0?0:o}px 0px`,T=new IntersectionObserver(([f])=>{if(f.isIntersecting&&H.current===!1&&b.current.getBoundingClientRect().top+ce+48<=f.target.getBoundingClientRect().bottom){const ee=gt(f.target.id);B(ee);const me=F(h).findIndex(W=>{var ue;return n.isValidElement(W)&&((ue=W.props)==null?void 0:ue.id)===ee});U(ye.current,me,ee,f.target)}},{root:b.current,rootMargin:l,threshold:[0]});if(Xe){let f=t[t.length-1],ee;for(let W=0;W<=t.length-1;W++){const ue=t[W];if(b.current.getBoundingClientRect().top+ce+48<=ue.getBoundingClientRect().bottom){f=ue,ee=W;break}}const me=gt(f==null?void 0:f.id);me!==K&&(B(me),U(ye.current,ee??t.length-1,me,f)),Ye(!1)}return t.forEach(f=>{T.observe(f)}),()=>{T.disconnect()}},[b.current,h,ce,B,H,Xe]);const Z=u&&!_e||!y||!N&&!_e,we=n.useCallback(t=>{t.stopPropagation(),Z||de(Ae(t,{visible:O}))},[de,O,Z]),Re=n.useCallback((t=!1)=>{var o,l;const a={...t?{padding:0}:{},...((o=c==null?void 0:c.props)==null?void 0:o.style)??{}};return c!=null&&c.props&&((l=c.props)==null?void 0:l.showSubHeaderRight)===void 0?n.cloneElement(c,{showSubHeaderRight:!0,style:a,"data-not-clickable":Z,onToggleHeaderContentVisibility:we}):n.cloneElement(c,{style:a,"data-not-clickable":Z,onToggleHeaderContentVisibility:we})},[c,Z,we]),Vt=n.useCallback(()=>{if(y!=null&&y.props)return n.cloneElement(y,{...y.props,topHeaderHeight:j,style:O===!0?{position:"absolute",visibility:"hidden"}:y.props.style,headerPinned:w||Q,ref:Dt,children:r("div",{className:g.headerContainer,"data-component-name":"ObjectPageHeaderContainer",children:[Ze,y.props.children&&r("div",{"data-component-name":"ObjectPageHeaderContent",children:[c&&$&&Re(!0),y.props.children]})]})})},[y,j,w,Q,$,Ze,Ue,Re]),qt=t=>{var s;t.preventDefault();const{sectionId:a,index:o,isSubTab:l,parentId:T}=t.detail.tab.dataset;if(l)kt(Ae(t,{sectionId:T,subSectionId:a}));else{const P=F(h).find(f=>f.props.id==a);Lt(t,(s=P==null?void 0:P.props)==null?void 0:s.id,o,P)}},ot=n.useRef(),Gt=n.useCallback(t=>{var a;if(xe.current||(xe.current=!0),!(Fe.current>=performance.now())&&(ye.current=t,typeof i.onScroll=="function"&&i.onScroll(t),V&&se(void 0),Te.current&&clearTimeout(Te.current),Te.current=setTimeout(()=>{Ye(!0)},100),(!w||t.target.scrollTop===0)&&((a=b.current)==null||a.classList.remove(g.headerCollapsed)),Q&&t.target.scrollTop!==ot.current)){if(t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight)return;ot.current=t.target.scrollTop,w||ve(!0),Ke(!1)}},[j,w,i.onScroll,Q,V]),Le=n.useCallback(t=>{var a,o;(t==null?void 0:t.type)==="mouseover"?(a=Se.current)==null||a.classList.add(g.headerHoverStyles):(o=Se.current)==null||o.classList.remove(g.headerHoverStyles)},[g.headerHoverStyles]),it={...G};return O===!0&&y&&(it[oe.titleFontSize]=p.sapObjectHeader_Title_SnappedFontSize),r("div",{"data-component-name":"ObjectPage",slot:J,className:At,style:it,ref:Ft,onScroll:Gt,...Mt,children:[r("header",{onMouseOver:Le,onMouseLeave:Le,"data-component-name":"ObjectPageTopHeader",ref:Se,role:((st=z==null?void 0:z.objectPageTopHeader)==null?void 0:st.role)??"banner","data-not-clickable":Z,"aria-roledescription":((ct=z==null?void 0:z.objectPageTopHeader)==null?void 0:ct.ariaRoledescription)??"Object Page header",className:g.header,onClick:we,style:{gridAutoColumns:`min-content ${c&&C&&O===!0?"calc(100% - 3rem - 1rem)":"100%"}`,display:!$||O===!0?"grid":"none"},children:[c&&C&&O===!0&&e(Je,{image:C,imageShapeCircle:E}),c&&Re()]}),Vt(),y&&c&&e("div",{"data-component-name":"ObjectPageAnchorBar",ref:We,className:g.anchorBar,style:{top:Q||w?`${j+(O===!0?0:R)}px`:`${j+5}px`},children:e(zt,{headerContentVisible:y&&O!==!0,headerContentPinnable:_e,showHideHeaderButton:N,headerPinned:w,a11yConfig:z,onToggleHeaderContentVisibility:de,setHeaderPinned:ze,onHoverToggleButton:Le,onPinnedStateChange:Ht})}),!He&&e("div",{className:g.tabContainer,"data-component-name":"ObjectPageTabContainer",style:{top:w||Q?`${j+(O===!0?0:R)}px`:`${j}px`},children:e(Kt,{collapsed:!0,fixed:!0,onTabSelect:qt,"data-component-name":"ObjectPageTabContainer",className:g.tabContainerComponent,children:F(h).map((t,a)=>{var l,T;if(!n.isValidElement(t)||!t.props)return null;const o=F(t.props.children).filter(s=>{var P;return n.isValidElement(s)&&((P=s==null?void 0:s.type)==null?void 0:P.displayName)==="ObjectPageSubSection"});return e(mt,{"data-index":a,"data-section-id":t.props.id,text:t.props.titleText,selected:K===((l=t.props)==null?void 0:l.id)||void 0,subTabs:o.map(s=>n.isValidElement(s)?e(mt,{"data-parent-id":t.props.id,"data-is-sub-tab":!0,"data-section-id":s.props.id,text:s.props.titleText,selected:s.props.id===V||void 0,children:e("span",{style:{display:"none"}})},s.props.id):null),children:e("span",{style:{display:"none"}})},`Anchor-${(T=t.props)==null?void 0:T.id}`)})})}),r("div",{"data-component-name":"ObjectPageContent",className:g.content,children:[e("div",{style:{height:O?`${R}px`:0},"aria-hidden":"true"}),He||(_===L.IconTabBar?un(h,K):h),e("div",{style:{height:Nt},"aria-hidden":"true"})]}),I&&e("div",{style:{height:"1rem"},"data-component-name":"ObjectPageFooterSpacer"}),I&&e("footer",{className:g.footer,"data-component-name":"ObjectPageFooter",children:I})]})});D.displayName="ObjectPage";D.defaultProps={image:null,mode:L.Default,imageShapeCircle:!1,showHideHeaderButton:!1};try{D.displayName="ObjectPage",D.__docgenInfo={description:"A component that allows apps to easily display information related to a business object.\n\nThe `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.",displayName:"ObjectPage",props:{headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n__Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `ObjectPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},image:{defaultValue:{value:"null"},description:"Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.",name:"image",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Defines the content area of the `ObjectPage`. It consists of sections and subsections.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ObjectPageSectionPropTypes, string | JSXElementConstructor<any>> | ReactElement<ObjectPageSectionPropTypes, string | JSXElementConstructor<...>>[]"}},selectedSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSection` section.",name:"selectedSectionId",required:!1,type:{name:"string"}},selectedSubSectionId:{defaultValue:null,description:"Defines the ID of the currently `ObjectPageSubSection` section.",name:"selectedSubSectionId",required:!1,type:{name:"string"}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` is hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showTitleInHeaderContent:{defaultValue:null,description:"Defines whether the title is displayed in the content section of the header or above the image.",name:"showTitleInHeaderContent",required:!1,type:{name:"boolean"}},imageShapeCircle:{defaultValue:{value:"false"},description:"Defines whether the image should be displayed in a circle or in a square.<br />\n__Note:__ If the `image` is not a `string`, this prop has no effect.",name:"imageShapeCircle",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ObjectPageMode.Default"},description:'Defines the `ObjectPage` mode.\n\n- "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.\n- "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.',name:"mode",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"IconTabBar"'},{value:'"IconTabBar"'}]}},showHideHeaderButton:{defaultValue:{value:"false"},description:"Defines whether the pin button of the header is displayed.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Defines whether the `headerContent` is pinnable.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ objectPageTopHeader?: { role?: string; ariaRoledescription?: string; }; dynamicPageAnchorBar?: { role?: string; }; }"}},placeholder:{defaultValue:null,description:"If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.",name:"placeholder",required:!1,type:{name:"ReactNode"}},onSelectedSectionChange:{defaultValue:null,description:"Fired when the selected section changes.",name:"onSelectedSectionChange",required:!1,type:{name:"(event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement; }>) => void"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const hn={section:{'& [data-component-name="ObjectPageSubSection"]:not(:first-child)':{paddingBlockStart:"0.5rem"}},headerContainer:{paddingBlock:"0.5rem",color:p.sapGroup_TitleTextColor,fontFamily:p.sapFontFamily},titleContainer:{borderTop:X.ObjectPageSectionBorderTop,boxSizing:"border-box",height:"2.25rem"},title:{height:X.ObjectPageSectionTitleHeight,lineHeight:X.ObjectPageSectionTitleLineHeight,color:p.sapGroup_TitleTextColor,fontSize:p.sapFontHeader4Size,display:"inline-block",maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:X.ObjectPageSectionTitleFontFamily,textDecoration:X.ObjectPageSectionTitleTextDecoration},uppercase:{textTransform:"uppercase"},wrap:{"& $titleContainer":{height:"unset"},"& $title":{whiteSpace:"normal",height:"unset",lineHeight:"normal"}},sectionContent:{whiteSpace:"normal"},sectionContentInner:{paddingBlock:"0.5rem",fontFamily:p.sapFontFamily}},gn=hn,bn=Oe(gn,{name:"ObjectPageSection"}),k=n.forwardRef((i,v)=>{const{titleText:c="",id:C,children:I,titleTextUppercase:_=!0,className:E,style:A,hideTitleText:G,titleTextLevel:J="H3",wrapTitleText:N,header:h,...M}=i,u=bn(),$=`ObjectPageSection-${C}`,y=Y(u.title,_&&u.uppercase);return r("section",{ref:v,role:"region",className:Y(u.section,N&&u.wrap,E),style:A,...M,id:$,"data-component-name":"ObjectPageSection",children:[!!h&&e("div",{className:u.headerContainer,children:h}),!G&&e("div",{role:"heading","aria-level":parseInt(J.slice(1)),className:u.titleContainer,"data-component-name":"ObjectPageSectionTitleText",children:e("div",{className:y,children:c})}),e("div",{className:u.sectionContent,children:e("div",{className:u.sectionContentInner,"data-component-name":"ObjectPageSectionContent",children:I})})]})});k.displayName="ObjectPageSection";try{k.displayName="ObjectPageSection",k.__docgenInfo={description:"Top-level information container of an `ObjectPage`.",displayName:"ObjectPageSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSection`.<br />\n__Note:__ The `id` is taken into account when the section selection changes.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:{value:"''"},description:"Defines the title of the `ObjectPageSection`.",name:"titleText",required:!1,type:{name:"string"}},titleTextUppercase:{defaultValue:{value:"true"},description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the Section title or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TitleLevel.H3"},description:"Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},wrapTitleText:{defaultValue:null,description:"Determines whether the Section title wraps on multiple lines, when the available space is not enough.",name:"wrapTitleText",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Section header content.

__Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.`,name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const fn={objectPageSubSection:{"&:focus":{outline:`${p.sapContent_FocusWidth} ${p.sapContent_FocusStyle} ${p.sapContent_FocusColor}`,outlineOffset:`calc(-1 * ${p.sapContent_FocusWidth})`}},headerContainer:{marginBlockEnd:"0.5rem","& >:first-child":{marginInline:"0 0.25rem"},"& >:last-child:not(:first-child)":{marginInline:"0.25rem 0"},"& > *:not(:first-child):not(:last-child)":{marginInline:"0.25rem"}},subSectionTitle:{fontSize:p.sapFontHeader5Size,color:p.sapGroup_TitleTextColor,flexGrow:1},subSectionContent:{backgroundColor:X.ObjectPageSubSectionBackgroundColor,borderRadius:X.ObjectPageSubSectionBorderRadius,paddingInline:"0.5rem",paddingBlock:"1rem"},spacer:{flexGrow:1},uppercase:{textTransform:"uppercase"}},Sn=Oe(fn,{name:"ObjectPageSubSection"}),q=n.forwardRef((i,v)=>{const{children:c,id:C,titleText:I,className:_,style:E,actions:A,hideTitleText:G,titleTextLevel:J="H4",titleTextUppercase:N,...h}=i,M=`ObjectPageSubSection-${C}`,u=Sn(),$=Y(u.objectPageSubSection,_);return r("div",{ref:v,role:"region",style:E,tabIndex:-1,...h,className:$,id:M,"data-component-name":"ObjectPageSubSection",children:[r(re,{direction:fe.Row,justifyContent:Wt.SpaceBetween,alignItems:Ot.Center,className:u.headerContainer,"data-component-name":"ObjectPageSubSectionHeaderContainer",children:[G?e("span",{"aria-hidden":"true",className:u.spacer}):e("div",{role:"heading","aria-level":parseInt(J.slice(1)),className:Y(u.subSectionTitle,N&&u.uppercase),"data-component-name":"ObjectPageSubSectionTitleText",children:I}),A&&A]}),e("div",{className:u.subSectionContent,"data-component-name":"ObjectPageSubSectionContent",children:c})]})});q.displayName="ObjectPageSubSection";try{q.displayName="ObjectPageSubSection",q.__docgenInfo={description:"Second-level information container of an `ObjectPage`.<br />\n__Note:__ This component should only be used inside an `ObjectPageSection` component.",displayName:"ObjectPageSubSection",props:{id:{defaultValue:null,description:"Defines the ID of the `ObjectPageSubSection`.",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `ObjectPageSubSection`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},titleText:{defaultValue:null,description:"Defines the title of the `ObjectPageSubSection`.",name:"titleText",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Actions available for this subsection.\n\n__Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},hideTitleText:{defaultValue:null,description:"Determines whether to display the SubSection `titleText` or not.",name:"hideTitleText",required:!1,type:{name:"boolean"}},titleTextLevel:{defaultValue:{value:"TittleLevel.H4"},description:"Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n__Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.\nFor example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.",name:"titleTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTextUppercase:{defaultValue:null,description:"Defines whether the title is always displayed in uppercase.",name:"titleTextUppercase",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const yn={title:"Layouts & Floorplans / ObjectPage",component:D,argTypes:{headerTitle:{control:{disable:!0}},headerContent:{control:{disable:!0}},footer:{control:{disable:!0}},children:{control:{disable:!0}},placeholder:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{mode:L.Default,showHideHeaderButton:!0,selectedSectionId:"goals",headerContentPinnable:!0,imageShapeCircle:!0,image:Jt,style:{height:"700px"},footer:e(tn,{design:nn.FloatingFooter,endContent:r(ie,{children:[e(x,{design:S.Positive,children:"Accept"}),e(x,{design:S.Negative,children:"Reject"})]})}),headerTitle:e(qe,{showSubHeaderRight:!0,header:"Denise Smith",subHeader:"Senior UI Developer",actions:r(ie,{children:[e(x,{design:S.Emphasized,children:"Primary Action"},"1"),e(x,{children:"Action"},"2")]}),breadcrumbs:r(an,{children:[e(Me,{children:"Manager Cockpit"}),e(Me,{children:"My Team"}),e(Me,{children:"Employee Details"})]}),children:e(en,{state:on.Success,children:"employed"})}),headerContent:e(Ut,{children:r(re,{wrap:Xt.Wrap,alignItems:Ot.Center,children:[r(re,{direction:fe.Column,children:[e(Ve,{children:"+33 6 4512 5158"}),e(Ve,{href:"mailto:ui5-webcomponents-react@sap.com",children:"DeniseSmith@sap.com"}),e(Ve,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"https://github.com/SAP/ui5-webcomponents-react"})]}),r(re,{direction:fe.Column,style:{padding:"10px"},children:[e(je,{children:"San Jose"}),e(je,{children:"California, USA"})]})]})})}},pe={render(i){return r(D,{...i,children:[e(k,{titleText:"Goals",id:"goals","aria-label":"Goals",children:r(te,{columnsL:3,columnsXL:3,labelSpanXL:6,labelSpanL:6,columnsM:2,labelSpanM:6,style:{alignItems:"baseline"},children:[e(m,{label:"Evangelize the UI framework across the company",children:e(d,{children:"4 days overdue - Cascaded"})}),e(m,{label:"Get trained in development management direction",children:e(d,{children:"Due Nov, 21"})}),e(m,{label:"Mentor junior developers",children:e(d,{children:"Due Dec, 31 - Cascaded"})})]})}),r(k,{titleText:"Personal",id:"personal","aria-label":"Personal",children:[e(q,{titleText:"Connect",id:"personal-connect","aria-label":"Connect",actions:r(ie,{children:[e(x,{design:S.Emphasized,style:{minWidth:"120px"},children:"Custom Action"}),e(x,{design:S.Transparent,icon:"action-settings",tooltip:"settings"}),e(x,{design:S.Transparent,icon:"download",tooltip:"download"})]}),children:r(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[r(ne,{titleText:"Phone Numbers",children:[e(m,{label:"Home",children:e(d,{children:"+1 234-567-8901"})}),e(m,{label:"",children:e(d,{children:"+1 234-567-5555"})})]}),r(ne,{titleText:"Social Accounts",children:[e(m,{label:"LinkedIn",children:e(d,{children:"/DeniseSmith"})}),e(m,{label:"Twitter",children:e(d,{children:"@DeniseSmith"})})]}),r(ne,{titleText:"Addresses",children:[e(m,{label:"Home Address",children:e(d,{children:"2096 Mission Street"})}),e(m,{label:"Mailing Address",children:e(d,{children:"PO Box 32114"})})]}),e(ne,{titleText:"Mailing Address",children:e(m,{label:"Work",children:e(d,{children:"DeniseSmith@sap.com"})})})]})}),e(q,{titleText:"Payment Information",id:"personal-payment-information","aria-label":"Payment Information",children:r(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e(ne,{titleText:"Salary",children:e(m,{label:"Bank Transfer",children:e(d,{children:"Money Bank, Inc."})})}),e(ne,{titleText:"Payment method for Expenses",children:e(m,{label:"Extra Travel Expenses",children:e(d,{children:"Cash 100 USD"})})})]})})]}),r(k,{titleText:"Employment",id:"employment","aria-label":"Employment",children:[e(q,{titleText:"Job Information",id:"employment-job-information","aria-label":"Job Information",children:r(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e(m,{label:"Job Classification",children:r(re,{direction:fe.Column,children:[e(d,{children:"Senior UI Developer"}),e(je,{children:"(UIDEV-SR)"})]})}),e(m,{label:"Job Title",children:e(d,{children:"Developer"})}),e(m,{label:"Employee Class",children:e(d,{children:"Employee"})}),e(m,{label:"Manager",children:r(re,{direction:fe.Column,children:[e(d,{children:"Dan Smith"}),e(je,{children:"Development Manager"})]})}),e(m,{label:"Pay Grade",children:e(d,{children:"Salary Grade 18 (GR-14)"})}),e(m,{label:"FTE",children:e(d,{children:"1"})})]})}),e(q,{titleText:"Employee Details",id:"employment-employee-details","aria-label":"Employee Details",children:r(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e(m,{label:"Start Date",children:e(d,{children:"Jan 01, 2018"})}),e(m,{label:"End Date",children:e(d,{children:"Dec 31, 9999"})}),e(m,{label:"Payroll Start Date",children:e(d,{children:"Jan 01, 2018"})}),e(m,{label:"Benefits Start Date",children:e(d,{children:"Jul 01, 2018"})}),e(m,{label:"Company Car Eligibility",children:e(d,{children:"Jan 01, 2021"})}),e(m,{label:"Equity Start Date",children:e(d,{children:"Jul 01, 2018"})})]})}),e(q,{titleText:"Job Relationship",id:"employment-job-relationship","aria-label":"Job Relationship",children:r(te,{columnsXL:4,columnsL:4,style:{alignItems:"baseline"},children:[e(m,{label:"Manager",children:e(d,{children:"John Doe"})}),e(m,{label:"Scrum Master",children:e(d,{children:"Michael Adams"})}),e(m,{label:"Product Owner",children:e(d,{children:"John Miller"})})]})})]})]})}},he={name:"with IllustratedMessage",render(i){return e(D,{image:i.image,headerTitle:i.headerTitle,headerContent:i.headerContent,imageShapeCircle:!0,placeholder:e(rn,{name:ln.UnableToLoad})})}},ge={name:"with custom overflow button",render(){const i={actionsToolbarProps:{overflowButton:e(pt,{design:S.Transparent,icon:"navigation-down-arrow"})},navigationActionsToolbarProps:{overflowButton:e(pt,{design:S.Transparent,icon:"menu2"})},actions:r(ie,{children:[e(x,{design:S.Emphasized,children:"Edit"},"edit"),e(x,{design:S.Transparent,children:"Delete"},"delete"),e(x,{design:S.Transparent,children:"Copy"},"copy"),e(x,{icon:"action",design:S.Transparent,children:"Action"},"action"),e(x,{design:S.Transparent,children:"Create"}),e(x,{design:S.Transparent,children:"Loooooooooooooooooooooooooooooooooooong actions Button"})]}),navigationActions:r(ie,{children:[e(x,{icon:"full-screen",design:S.Transparent},"fullscreen"),e(x,{icon:"exit-full-screen",design:S.Transparent},"exitFullscreen"),e(x,{icon:"decline",design:S.Transparent},"decline"),e(x,{design:S.Transparent,children:"UI5 Web Components For React"}),e(x,{design:S.Transparent,children:"Navigation Actions Button"}),e(x,{design:S.Transparent,children:"Loooooooooooooooooooooooooooooooooooong navigation actions Button"})]})};return r(ie,{children:[e(D,{style:{width:"1000px"},showHideHeaderButton:!1,headerTitle:e(qe,{...i,header:e(Ge,{wrappingType:"Normal",children:"Custom overflow buttons for navigationActions and actions (width: 1000px)"})})}),e(D,{style:{width:"1400px"},showHideHeaderButton:!1,headerTitle:e(qe,{...i,header:e(Ge,{children:"Custom overflow buttons for actions (width: 1400px)"})})})]})}},be={name:"section with custom header",render(i){return r(D,{...i,children:[e(k,{titleText:"Goals",hideTitleText:!0,id:"goals","aria-label":"Goals",header:e(Ge,{children:"Custom Header Section One"}),children:e("div",{style:{width:"100%",height:"200px",background:"cadetblue"}})}),e(k,{titleText:"Personal",hideTitleText:!0,id:"personal","aria-label":"Personal",header:e(sn,{hideCloseButton:!0,children:"Custom Header Section Two"}),children:e("div",{style:{width:"100%",height:"500px",background:"cadetblue"}})}),e(k,{titleText:"Employment",hideTitleText:!0,id:"employment","aria-label":"Employment",header:r("div",{style:{display:"flex",alignItems:"center"},children:[e(ht,{name:dt,style:{marginInlineEnd:"2rem"}}),e(d,{children:"Custom Header Section Three"}),e(ht,{name:dt,style:{marginInlineStart:"2rem"}})]}),children:e("div",{style:{width:"100%",height:"300px",background:"cadetblue"}})})]})}};var bt,ft,St;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(St=(ft=pe.parameters)==null?void 0:ft.docs)==null?void 0:St.source}}};var yt,Tt,xt;he.parameters={...he.parameters,docs:{...(yt=he.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  name: 'with IllustratedMessage',
  render(args) {
    return <ObjectPage image={args.image} headerTitle={args.headerTitle} headerContent={args.headerContent} imageShapeCircle placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />} />;
  }
}`,...(xt=(Tt=he.parameters)==null?void 0:Tt.docs)==null?void 0:xt.source}}};var vt,Ct,Pt;ge.parameters={...ge.parameters,docs:{...(vt=ge.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Pt=(Ct=ge.parameters)==null?void 0:Ct.docs)==null?void 0:Pt.source}}};var It,wt,jt;be.parameters={...be.parameters,docs:{...(It=be.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(jt=(wt=be.parameters)==null?void 0:wt.docs)==null?void 0:jt.source}}};const Tn=["Default","WithIllustratedMessage","WithCustomOverflowButton","SectionWithCustomHeader"],oa=Object.freeze(Object.defineProperty({__proto__:null,Default:pe,SectionWithCustomHeader:be,WithCustomOverflowButton:ge,WithIllustratedMessage:he,__namedExportsOrder:Tn,default:yn},Symbol.toStringTag,{value:"Module"}));export{oa as C,pe as D,k as O,be as S,he as W,ge as a,q as b};
//# sourceMappingURL=ObjectPage.stories-333d3b90.js.map
