import{r as a}from"./index-OjgoNOWw.js";import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{h as be}from"./UI5Element-Jt3C0_FN.js";import{r as ie}from"./Icons-Nr5kgAbF.js";import{i as ve}from"./slim-arrow-down-kx4Pw-L8.js";import{i as Se}from"./slim-arrow-up-uXTpXWgb.js";import{T as n}from"./ThemingParameters-UghqSl-x.js";import{e as we}from"./index-Jm2lAFsC.js";import{c as k}from"./clsx-c3LcQGjR.js";import{c as L}from"./react-jss.esm-tmBtHfec.js";import{u as _e,as as Y,at as K,au as Q,av as Z}from"./i18n-defaults-8YolVglE.js";import{c as re,f as Ce}from"./utils-KU8RGjGn.js";import{T as Te}from"./index-DPvGSMhz.js";import{B as xe}from"./index-fIdbs8ag.js";import{s as z}from"./stopPropagation-dV8jBYUw.js";import{F as D,b as Be,c as ke}from"./index-5ETO3hDj.js";import{T as ee,a as te,b as ne}from"./index-NrwYHiPc.js";import{T as Pe}from"./index-qzaz7B5t.js";import{u as V}from"./withWebComponent-I1wSIv4y.js";import{g as ae}from"./Media-tHYorRpS.js";import{d as He}from"./debounce-F9irgL9Y.js";const pt=(e,h,i,l,[c,m],{noHeader:f,fixedHeader:y=!1,scrollTimeout:g={current:0},preserveHeaderStateOnScroll:S})=>{var p;const[b,T]=a.useState(0),[t,o]=a.useState(0),[P,H]=a.useState(!0),x=a.useRef(0),d=a.useCallback(u=>{const s=x.current<=u.target.scrollTop;x.current=u.target.scrollTop,!(g.current>=performance.now())&&(s&&u.target.scrollTop>=t&&!c?(H(!1),m(!0)):!s&&u.target.scrollTop<=b+Math.max(0,t-b)&&c&&(H(!0),m(!1)))},[t,b,c]);a.useEffect(()=>{i.current&&c!==void 0&&o(i.current.getBoundingClientRect().height)},[c]),a.useEffect(()=>{const u=e.current;return!y&&!S&&u.addEventListener("scroll",d),()=>{u.removeEventListener("scroll",d)}},[d,y,S]),a.useEffect(()=>{const u=new ResizeObserver(([s])=>{const C=Array.isArray(s.borderBoxSize)?s.borderBoxSize[0]:s.borderBoxSize;T((C==null?void 0:C.blockSize)??s.target.getBoundingClientRect().height)});return h!=null&&h.current&&u.observe(h.current),()=>{u.disconnect()}},[]),a.useEffect(()=>{const u=new ResizeObserver(([s])=>{if(P){const C=Array.isArray(s.borderBoxSize)?s.borderBoxSize[0]:s.borderBoxSize;o((C==null?void 0:C.blockSize)??s.target.getBoundingClientRect().height)}});return i!=null&&i.current&&u.observe(i.current),()=>{u.disconnect()}},[P]);const w=((p=l==null?void 0:l.current)==null?void 0:p.offsetHeight)??33,_=(f?0:b+t)+w;return{topHeaderHeight:b,headerContentHeight:t,anchorBarHeight:w,totalHeaderHeight:_,headerCollapsed:c}},De="pushpin-off",le="M454 155q10 9 10 22t-10 23q-9 9-23.5 17t-32 15.5-35 14T331 258q12 37 3.5 76.5T296 403l-90-90L75 443q-11 12-23 0-5-5-5-11t5-11l131-131-91-90q30-30 69-38.5t77 3.5q4-15 10.5-32.5t14-35 16-32.5T296 41q10-9 23-9t22 9zM319 64q-11 11-24 40t-26 71l-10 30-31-9q-22-8-44.5-6T141 203l152 152q11-20 13-42.5t-6-45.5l-10-30 31-10q31-10 51.5-18t33-14.5 18.5-11 8-6.5z",Ne=!1,Ae="SAP-icons-v4",qe="@ui5/webcomponents-icons";ie(De,{pathData:le,ltr:Ne,collection:Ae,packageName:qe});const Ee="pushpin-off",se="M473 168q7 9 7 18 0 11-7.5 18.5T454 212h-32l-52 52-41 165q-5 19-25 19-10 0-18-8l-89-89L76 472q-8 8-18 8-11 0-18.5-7.5T32 454q0-10 8-18l121-121-89-89q-8-8-8-18 0-20 19-25l165-41 52-52V58q0-11 7.5-18.5T326 32q9 0 18 7zm-76-3l-50-50-68 68q-6 6-11 7l-128 32 150 150 32-128q1-5 7-11z",Ie=!1,ze="SAP-icons-v5",Ve="@ui5/webcomponents-icons";ie(Ee,{pathData:se,ltr:Ie,collection:ze,packageName:Ve});be();const je="pushpin-off",ce=`${re}button_base_min_width`,Oe=`${re}button_base_height`,oe={[ce]:"1.5rem",[Oe]:"1.5rem"},Re={container:{position:"absolute",left:"50%","&:before, &:after":{content:'""',position:"absolute",width:"4rem",top:"50%",height:"0.0625rem"},"&:before":{right:"100%",backgroundImage:`linear-gradient(to left, ${n.sapObjectHeader_BorderColor}, transparent)`},"&:after":{backgroundImage:`linear-gradient(to right, ${n.sapObjectHeader_BorderColor}, transparent)`,left:"100%"}},anchorBarActionButton:{"--_ui5wcr_anchor-btn-center":`calc((var(${ce}) - ${n.sapButton_BorderWidth}) / 2)`,position:"absolute",insetBlockStart:"calc(-1 * var(--_ui5wcr_anchor-btn-center))",insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center))",zIndex:3,"&:not([pressed])":{backgroundColor:n.sapObjectHeader_Background}},anchorBarActionButtonExpandable:{"& + $anchorBarActionButtonPinnable":{insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center) + 1rem)"}},anchorBarActionButtonPinnable:{},anchorBarActionPinnableAndExpandable:{"&$anchorBarActionButtonExpandable":{insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center) - 1rem)"}}},Fe=L(Re,{name:"DynamicPageAnchorBar"}),R=a.forwardRef((e,h)=>{var _;const{showHideHeaderButton:i,headerContentVisible:l,headerContentPinnable:c,headerPinned:m,style:f,a11yConfig:y,setHeaderPinned:g,onPinnedStateChange:S,onToggleHeaderContentVisibility:b,onHoverToggleButton:T}=e,t=Fe(),o=c&&l,P=o&&i,H=a.useCallback(p=>{g(p.target.pressed)},[g]),x=a.useRef(!0);a.useEffect(()=>{!x.current&&typeof S=="function"&&S(m),x.current&&(x.current=!1)},[m]);const d=p=>{b(we(p,{visible:!l}))},w=_e("@ui5/webcomponents-react");return r.jsxs("section",{"data-component-name":"DynamicPageAnchorBar",style:f,role:((_=y==null?void 0:y.dynamicPageAnchorBar)==null?void 0:_.role)??"navigation",className:i||c?t.container:null,ref:h,children:[i&&r.jsx(xe,{icon:l?Se:ve,"data-ui5wcr-dynamic-page-header-action":"",className:k(t.anchorBarActionButton,t.anchorBarActionButtonExpandable,P&&t.anchorBarActionPinnableAndExpandable),style:oe,onClick:d,onMouseOver:T,onMouseLeave:T,tooltip:w.getText(l?K:Y),accessibleName:w.getText(l?K:Y),"data-component-name":"DynamicPageAnchorBarExpandBtn"}),o&&r.jsx(Te,{icon:je,"data-ui5wcr-dynamic-page-header-action":"",className:k(t.anchorBarActionButton,t.anchorBarActionButtonPinnable),style:oe,pressed:m,onClick:H,tooltip:w.getText(m?Q:Z),accessibleName:w.getText(m?Q:Z),"data-component-name":"DynamicPageAnchorBarPinBtn"})]})});R.displayName="DynamicPageAnchorBar";try{R.displayName="DynamicPageAnchorBar",R.__docgenInfo={description:`The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
and pin button (pins the content header).`,displayName:"DynamicPageAnchorBar",props:{headerContentVisible:{defaultValue:null,description:"Determines if the header content is visible.",name:"headerContentVisible",required:!0,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines if the header content is pinnable .",name:"headerContentPinnable",required:!0,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines if the hide header button is shown .",name:"showHideHeaderButton",required:!0,type:{name:"boolean"}},headerPinned:{defaultValue:null,description:"Determines if the header is initially pinned .",name:"headerPinned",required:!1,type:{name:"boolean"}},setHeaderPinned:{defaultValue:null,description:"Set the header to the state pinned.",name:"setHeaderPinned",required:!1,type:{name:"(payload: any) => void"}},onToggleHeaderContentVisibility:{defaultValue:null,description:"Toggles the header content to be hidden or visible .",name:"onToggleHeaderContentVisibility",required:!0,type:{name:"(e: any) => void"}},onHoverToggleButton:{defaultValue:null,description:"Highlight title when hovered.",name:"onHoverToggleButton",required:!1,type:{name:"(e: any) => void"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; }"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={S:"@container (max-width: 599px)",M:"@container (min-width: 600px) and (max-width: 1023px)",L:"@container (min-width: 1024px) and (max-width: 1439px)",XL:"@container (min-width: 1440px)"},j={[N.S]:{paddingInline:"1rem"},[N.M]:{paddingInline:"2rem"},[N.L]:{paddingInline:"2rem"},[N.XL]:{paddingInline:"3rem"}},B={headerDisplay:"--_ui5wcr_DynamicPage_header_display",titleFontSize:"--_ui5wcr_DynamicPage_title_fontsize"},gt={dynamicPage:{container:"DynamicPage / inline-size",width:"100%",height:"100%",maxHeight:"100%",position:"relative",whiteSpace:"normal",fontFamily:n.sapFontFamily,backgroundColor:n.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[B.headerDisplay]:"block",[B.titleFontSize]:n.sapObjectHeader_Title_FontSize},headerCollapsed:{[B.headerDisplay]:"none",[B.titleFontSize]:n.sapObjectHeader_Title_SnappedFontSize,'& $anchorBar > section[role="navigation"]':{top:"-0.025rem"}},header:{extend:j},title:{extend:j},anchorBar:{position:"sticky",boxShadow:n.sapContent_HeaderShadow,height:"1px",zIndex:2,'& > section[role="navigation"]':{top:0}},contentContainer:{extend:j,paddingBlockStart:"1rem",boxSizing:"border-box",width:"100%",height:"auto",fontFamily:n.sapFontFamily,zIndex:0},backgroundStandard:{background:n.sapBackgroundColor},backgroundSolid:{background:n.sapBackgroundColor},backgroundList:{background:n.sapGroup_ContentBackground},backgroundTransparent:{background:"transparent"},footer:{bottom:"0.5rem",margin:"0 0.5rem",left:0,right:0}},$e={header:{backgroundColor:n.sapObjectHeader_Background,position:"sticky",zIndex:1,paddingBlockStart:"1rem",paddingBlockEnd:"1rem",display:`var(${B.headerDisplay})`,overflow:"hidden"}},Me=L($e,{name:"DynamicPageHeader"}),F=a.forwardRef((e,h)=>{const{children:i,headerPinned:l,topHeaderHeight:c,className:m,style:f,...y}=e,g=a.useMemo(()=>l?{...f,top:`${c}px`,zIndex:1}:f,[l,c,f]),S=Me(),b=k(S.header,m);return r.jsx("div",{ref:h,...y,className:b,"data-component-name":"DynamicPageHeader",style:g,children:i})});F.displayName="DynamicPageHeader";try{F.displayName="DynamicPageHeader",F.__docgenInfo={description:`The dynamic page header contains the header content of the dynamic page.
This component can be collapsed and pinned by the anchorbar.`,displayName:"DynamicPageHeader",props:{headerPinned:{defaultValue:null,description:"Determines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},topHeaderHeight:{defaultValue:null,description:"Determines the height of the top header (dynamic page title).",name:"topHeaderHeight",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Content of the `DynamicPageHeader`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const $=({onClick:e,noHover:h})=>r.jsx("span",{style:{flexGrow:1,height:"100%",cursor:h?"auto":"pointer"},className:"spacer",onClick:e});$.displayName="ToolbarSpacer";try{ToolbarSpacer.displayName="ToolbarSpacer",ToolbarSpacer.__docgenInfo={description:"",displayName:"ToolbarSpacer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}const Le={container:{flex:"1 1 100%",backgroundColor:n.sapObjectHeader_Background,minHeight:"3rem",paddingBlockStart:"0.5rem",paddingBlockEnd:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"sticky",top:0,zIndex:2,cursor:"pointer",'&[data-not-clickable="true"]':{cursor:"unset","&:hover":{backgroundColor:n.sapObjectHeader_Background}},"&:hover":{backgroundColor:n.sapObjectHeader_Hover_Background}},phone:{[B.titleFontSize]:n.sapObjectHeader_Title_SnappedFontSize},breadcrumbs:{minWidth:"50%",padding:"0.5rem 0 0.25rem 0","&:only-child":{width:"100%"}},titleMainSection:{overflowX:"hidden",flex:"1 1 100%",alignItems:"baseline"},middleSection:{flexGrow:1,width:"100%",overflowX:"hidden"},title:{minWidth:"3rem",overflowX:"hidden",fontFamily:n.sapObjectHeader_Title_FontFamily,color:n.sapObjectHeader_Title_TextColor,fontSize:`var(${B.titleFontSize})`,paddingBlockStart:"0.3125rem",[N.M]:{paddingBlockStart:"0.6875rem"},overflowWrap:"break-word",hyphens:"auto","& > *":{fontFamily:n.sapObjectHeader_Title_FontFamily,color:n.sapObjectHeader_Title_TextColor,fontSize:`var(${B.titleFontSize})`,overflowWrap:"break-word",hyphens:"auto"}},subTitle:{color:n.sapObjectHeader_Subtitle_TextColor,fontSize:n.sapFontSize,overflowWrap:"break-word",hyphens:"auto",paddingInlineStart:"0.5rem","& > *":{color:n.sapObjectHeader_Subtitle_TextColor,fontSize:n.sapFontSize,overflowWrap:"break-word",hyphens:"auto"}},subTitleBottom:{marginTop:"0.25rem",paddingInlineStart:0},content:{display:"flex",flexShrink:1.6,paddingInlineStart:"0.5rem"},toolbar:{flex:"1 1.6 100%",cursor:"auto","&:hover":{backgroundColor:"inherit"},"&>:first-child":{height:"100%"},'& > [data-component-name="ToolbarContent"]:first-child:last-child > [data-component-name="ToolbarChildContainer"]:last-child':{marginInlineEnd:0},'& [data-component-name="ToolbarOverflowButtonContainer"]':{marginInlineEnd:0}}},We=L(Le,{name:"DynamicPageTitle"}),O=(e,h)=>Ce(e,1/0).map(i=>{if(a.isValidElement(i))return a.cloneElement(i,{onClick:l=>{var c,m;typeof((c=i.props)==null?void 0:c.onClick)=="function"&&i.props.onClick(l),(m=h.current)!=null&&m.isOpen()&&!l.defaultPrevented&&h.current.close()}})}),M=a.forwardRef((e,h)=>{var U,X;const{actions:i,breadcrumbs:l,children:c,header:m,subHeader:f,showSubHeaderRight:y,navigationActions:g,className:S,style:b,onToggleHeaderContentVisibility:T,actionsToolbarProps:t,navigationActionsToolbarProps:o,expandedContent:P,snappedContent:H,...x}=e,d=We(),[w,_]=V(h),[p,u]=a.useState(void 0),s=a.useRef(!1),[C,de]=a.useState(((X=ae((U=_.current)==null?void 0:U.getBoundingClientRect().width))==null?void 0:X.name)==="Phone"),me=k(d.container,C&&d.phone,S),[ue,W]=V((t==null?void 0:t.overflowPopoverRef)??null),[he,pe]=V((o==null?void 0:o.overflowPopoverRef)??null);a.useEffect(()=>(s.current=!0,()=>{s.current=!1}),[s]);const{onClick:Ue,...ge}=x,q=a.useCallback(v=>{typeof(e==null?void 0:e.onClick)=="function"&&e.onClick(v),typeof T=="function"&&!(e!=null&&e["data-not-clickable"])&&T(v)},[e==null?void 0:e.onClick,T,e==null?void 0:e["data-not-clickable"]]);a.useEffect(()=>{const v=He(([A])=>{var G;const E=Array.isArray(A.borderBoxSize)?A.borderBoxSize[0]:A.borderBoxSize,I=(E==null?void 0:E.inlineSize)??A.target.getBoundingClientRect().width;de(((G=ae(I))==null?void 0:G.name)==="Phone"),I<1280&&!p&&s.current?u(!0):I>=1280&&p&&s.current&&u(!1)},150),J=new ResizeObserver(v);return _.current&&J.observe(_.current),()=>{v.cancel(),J.disconnect()}},[_.current,p,s]);const fe=v=>{z(v),typeof(t==null?void 0:t.onClick)=="function"&&t.onClick(v)},ye=v=>{z(v),typeof(o==null?void 0:o.onClick)=="function"&&o.onClick(v)};return r.jsxs(D,{className:me,style:b,ref:w,"data-component-name":"DynamicPageTitle",onClick:q,...ge,children:[(l||g&&p)&&r.jsxs(D,{justifyContent:Be.SpaceBetween,"data-component-name":"DynamicPageTitleBreadcrumbs",children:[l&&r.jsx("div",{className:d.breadcrumbs,onClick:z,children:l}),g&&p&&r.jsxs(ee,{tabIndex:void 0,role:void 0,...o,overflowButton:o==null?void 0:o.overflowButton,className:k(d.toolbar,o==null?void 0:o.className),onClick:ye,"data-component-name":"DynamicPageTitleNavActions",onOverflowChange:o==null?void 0:o.onOverflowChange,overflowPopoverRef:he,design:te.Auto,toolbarStyle:ne.Clear,active:!0,children:[r.jsx($,{onClick:q,noHover:e==null?void 0:e["data-not-clickable"]}),O(g,pe)]})]}),r.jsxs(D,{alignItems:ke.Center,className:d.middleSection,"data-component-name":"DynamicPageTitleMiddleSection",children:[r.jsxs(D,{className:d.titleMainSection,children:[m&&r.jsx("div",{className:d.title,"data-component-name":"DynamicPageTitleHeader",children:m}),f&&y&&r.jsx("div",{className:d.subTitle,"data-component-name":"DynamicPageTitleSubHeader",children:f}),c&&r.jsx("div",{className:d.content,"data-component-name":"DynamicPageTitleContent",children:c})]}),(i||!p&&g)&&r.jsxs(ee,{tabIndex:void 0,role:void 0,...t,overflowButton:t==null?void 0:t.overflowButton,design:te.Auto,toolbarStyle:ne.Clear,active:!0,className:k(d.toolbar,t==null?void 0:t.className),onClick:fe,"data-component-name":"DynamicPageTitleActions",onOverflowChange:t==null?void 0:t.onOverflowChange,overflowPopoverRef:ue,children:[r.jsx($,{onClick:q,noHover:e==null?void 0:e["data-not-clickable"]}),O(i,W),!p&&a.Children.count(i)>0&&a.Children.count(g)>0&&r.jsx(Pe,{}),!p&&O(g,W)]})]}),f&&!y&&r.jsx(D,{children:r.jsx("div",{className:k(d.subTitle,d.subTitleBottom),"data-component-name":"DynamicPageTitleSubHeader",children:f})}),e!=null&&e["data-header-content-visible"]?P:e["data-is-snapped-rendered-outside"]?void 0:H]})});M.displayName="DynamicPageTitle";try{M.displayName="DynamicPageTitle",M.__docgenInfo={description:"The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.\nIt can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.",displayName:"DynamicPageTitle",props:{actions:{defaultValue:null,description:"The `DynamicPageTitle` actions.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},breadcrumbs:{defaultValue:null,description:"The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.",name:"breadcrumbs",required:!1,type:{name:"ReactNode | ReactNode[]"}},children:{defaultValue:null,description:"The content is positioned in the `DynamicPageTitle` middle area",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:"The `header` is positioned in the `DynamicPageTitle` left area.\nUse this prop to display a `Title` (or any other component that serves as a heading).",name:"header",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"The `subHeader` is positioned in the `DynamicPageTitle` left area below the `header`.\nUse this aggregation to display a component like `Label` or any other component that serves as sub header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},navigationActions:{defaultValue:null,description:"The `DynamicPageTitle` navigation actions.<br />\n*Note*: The `navigationActions` position depends on the control size.\nIf the control size is 1280px or bigger, they are rendered right next to the actions.\nOtherwise, they are rendered in the top-right area, above the actions.\nIf a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"navigationActions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},showSubHeaderRight:{defaultValue:null,description:"Display the `subHeader` on the right instead of below the `header`.",name:"showSubHeaderRight",required:!1,type:{name:"boolean"}},actionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "actions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"actionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},navigationActionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "navigationActions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"navigationActionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},expandedContent:{defaultValue:null,description:"The content displayed in the `DynamicPageTitle` in expanded state.",name:"expandedContent",required:!1,type:{name:"ReactNode | ReactNode[]"}},snappedContent:{defaultValue:null,description:"The content displayed in the `DynamicPageTitle` in collapsed (snapped) state.",name:"snappedContent",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{M as D,j as R,F as a,R as b,B as c,gt as s,pt as u};
