import{r as n}from"./index-f1f749bf.js";import{a as P,j as h}from"./jsx-runtime-670450c2.js";import{k as he}from"./UI5Element-d1d93200.js";import{h as oe}from"./Icons-efeb15d5.js";import{i as ge}from"./slim-arrow-down-d9839a36.js";import{i as fe}from"./slim-arrow-up-07b75129.js";import{T as a}from"./ThemingParameters-f4b4144e.js";import{e as ye}from"./index-99d317a4.js";import{c as H}from"./clsx.m-1229b3e0.js";import{c as M}from"./react-jss.esm-2e28eff7.js";import{u as be,o as Y,p as K,q as Q,r as Z}from"./i18n-defaults-a2281a8e.js";import{T as ve}from"./index-214a7f1e.js";import{B as Se}from"./index-6dcdc4be.js";import{s as E}from"./stopPropagation-da74d54e.js";import{f as _e}from"./utils-ed90fb1b.js";import{F as x,b as we,c as Te}from"./index-2bd17005.js";import{T as ee,a as te,b as ne}from"./index-4341a65f.js";import{T as Ce}from"./index-784f17fa.js";import{u as O}from"./withWebComponent-d280b5c2.js";import{g as ae}from"./Media-6b270b80.js";import{d as Be}from"./debounce-6203652a.js";const ct=(e,u,r,l,[s,c],{noHeader:g,fixedHeader:v=!1,scrollTimeout:f={current:0}})=>{var C;const[y,k]=n.useState(0),[b,t]=n.useState(0),[i,D]=n.useState(!0),d=n.useRef(0),_=n.useCallback(o=>{const p=d.current<=o.target.scrollTop;d.current=o.target.scrollTop,!(f.current>=performance.now())&&(p&&o.target.scrollTop>=b&&!s?(D(!1),c(!0)):!p&&o.target.scrollTop<=y+Math.max(0,b-y)&&s&&(D(!0),c(!1)))},[b,y,s]);n.useEffect(()=>{r.current&&s!==void 0&&t(r.current.getBoundingClientRect().height)},[s]),n.useEffect(()=>{const o=e.current;return v||o.addEventListener("scroll",_),()=>{o.removeEventListener("scroll",_)}},[_,v]),n.useEffect(()=>{const o=new ResizeObserver(([p])=>{const T=Array.isArray(p.borderBoxSize)?p.borderBoxSize[0]:p.borderBoxSize;k((T==null?void 0:T.blockSize)??p.target.getBoundingClientRect().height)});return u!=null&&u.current&&o.observe(u.current),()=>{o.disconnect()}},[]),n.useEffect(()=>{const o=new ResizeObserver(([p])=>{if(i){const T=Array.isArray(p.borderBoxSize)?p.borderBoxSize[0]:p.borderBoxSize;t((T==null?void 0:T.blockSize)??p.target.getBoundingClientRect().height)}});return r!=null&&r.current&&o.observe(r.current),()=>{o.disconnect()}},[i]);const w=((C=l==null?void 0:l.current)==null?void 0:C.offsetHeight)??33,m=(g?0:y+b)+w;return{topHeaderHeight:y,headerContentHeight:b,anchorBarHeight:w,totalHeaderHeight:m,headerCollapsed:s}},ke="pushpin-off",ie="M454 155q10 9 10 22t-10 23q-9 9-23.5 17t-32 15.5-35 14T331 258q12 37 3.5 76.5T296 403l-90-90L75 443q-11 12-23 0-5-5-5-11t5-11l131-131-91-90q30-30 69-38.5t77 3.5q4-15 10.5-32.5t14-35 16-32.5T296 41q10-9 23-9t22 9zM319 64q-11 11-24 40t-26 71l-10 30-31-9q-22-8-44.5-6T141 203l152 152q11-20 13-42.5t-6-45.5l-10-30 31-10q31-10 51.5-18t33-14.5 18.5-11 8-6.5z",Pe=!1,He="SAP-icons-v4",De="@ui5/webcomponents-icons";oe(ke,{pathData:ie,ltr:Pe,collection:He,packageName:De});const xe="pushpin-off",re="M300 58q0-11 7.5-18.5T326 32q9 0 18 7l128 129q8 8 8 18 0 11-7.5 18.5T454 212h-32l-52 52-41 165q-5 19-25 19-10 0-18-8l-89-89L76 472q-8 8-18 8-12 0-19-7.5T32 454q0-10 8-18l121-121-89-89q-8-8-8-18 0-8 5.5-15.5T83 183l165-41 52-52V58zm47 57l-68 68q-6 6-11 7l-128 32 150 150 32-128q1-5 7-11l68-68z",Ne=!1,Ae="SAP-icons-v5",qe="@ui5/webcomponents-icons";oe(xe,{pathData:re,ltr:Ne,collection:Ae,packageName:qe});he();const ze="pushpin-off",Ie={container:{position:"absolute",left:"50%","&:before, &:after":{content:'""',position:"absolute",width:"4rem",top:"50%",height:"0.0625rem"},"&:before":{right:"100%",backgroundImage:`linear-gradient(to left, ${a.sapObjectHeader_BorderColor}, transparent)`},"&:after":{backgroundImage:`linear-gradient(to right, ${a.sapObjectHeader_BorderColor}, transparent)`,left:"100%"}},anchorBarActionButton:{"--_ui5_button_base_min_width":"1.5rem","--_ui5_button_base_height":"1.5rem","--ui5wcr_anchor-btn-center":"calc((var(--_ui5_button_base_min_width) - var(--sapButton_BorderWidth)) / 2)",position:"absolute",insetBlockStart:"calc(-1 * var(--ui5wcr_anchor-btn-center))",insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center))",zIndex:3,"&:not([pressed])":{backgroundColor:a.sapObjectHeader_Background}},anchorBarActionButtonExpandable:{"& + $anchorBarActionButtonPinnable":{insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center) + 1rem)"}},anchorBarActionButtonPinnable:{},anchorBarActionPinnableAndExpandable:{"&$anchorBarActionButtonExpandable":{insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center) - 1rem)"}}},Ee=M(Ie,{name:"DynamicPageAnchorBar"}),F=n.forwardRef((e,u)=>{var C;const{showHideHeaderButton:r,headerContentVisible:l,headerContentPinnable:s,headerPinned:c,style:g,a11yConfig:v,setHeaderPinned:f,onPinnedStateChange:y,onToggleHeaderContentVisibility:k,onHoverToggleButton:b}=e,t=Ee(),i=s&&l,D=i&&r,d=n.useCallback(o=>{f(o.target.pressed)},[f]),_=n.useRef(!0);n.useEffect(()=>{!_.current&&typeof y=="function"&&y(c),_.current&&(_.current=!1)},[c]);const w=o=>{k(ye(o,{visible:!l}))},m=be("@ui5/webcomponents-react");return P("section",{"data-component-name":"DynamicPageAnchorBar",style:g,role:((C=v==null?void 0:v.dynamicPageAnchorBar)==null?void 0:C.role)??"navigation",className:r||s?t.container:null,ref:u,children:[r&&h(Se,{icon:l?fe:ge,"data-ui5wcr-dynamic-page-header-action":"",className:H(t.anchorBarActionButton,t.anchorBarActionButtonExpandable,D&&t.anchorBarActionPinnableAndExpandable),onClick:w,onMouseOver:b,onMouseLeave:b,tooltip:m.getText(l?K:Y),accessibleName:m.getText(l?K:Y),"data-component-name":"DynamicPageAnchorBarExpandBtn"}),i&&h(ve,{icon:ze,"data-ui5wcr-dynamic-page-header-action":"",className:H(t.anchorBarActionButton,t.anchorBarActionButtonPinnable),pressed:c,onClick:d,tooltip:m.getText(c?Q:Z),accessibleName:m.getText(c?Q:Z),"data-component-name":"DynamicPageAnchorBarPinBtn"})]})});F.displayName="DynamicPageAnchorBar";try{F.displayName="DynamicPageAnchorBar",F.__docgenInfo={description:`The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
and pin button (pins the content header).`,displayName:"DynamicPageAnchorBar",props:{headerContentVisible:{defaultValue:null,description:"Determines if the header content is visible.",name:"headerContentVisible",required:!0,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines if the header content is pinnable .",name:"headerContentPinnable",required:!0,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines if the hide header button is shown .",name:"showHideHeaderButton",required:!0,type:{name:"boolean"}},headerPinned:{defaultValue:null,description:"Determines if the header is initially pinned .",name:"headerPinned",required:!1,type:{name:"boolean"}},setHeaderPinned:{defaultValue:null,description:"Set the header to the state pinned.",name:"setHeaderPinned",required:!1,type:{name:"(payload: any) => void"}},onToggleHeaderContentVisibility:{defaultValue:null,description:"Toggles the header content to be hidden or visible .",name:"onToggleHeaderContentVisibility",required:!0,type:{name:"(e: any) => void"}},onHoverToggleButton:{defaultValue:null,description:"Highlight title when hovered.",name:"onHoverToggleButton",required:!1,type:{name:"(e: any) => void"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; }"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={S:"@container (max-width: 599px)",M:"@container (min-width: 600px) and (max-width: 1023px)",L:"@container (min-width: 1024px) and (max-width: 1439px)",XL:"@container (min-width: 1440px)"},V={[A.S]:{paddingInline:"1rem"},[A.M]:{paddingInline:"2rem"},[A.L]:{paddingInline:"2rem"},[A.XL]:{paddingInline:"3rem"}},B={headerDisplay:"--ui5wcr_DynamicPage_header_display",titleFontSize:"--ui5wcr_DynamicPage_title_fontsize"},dt={dynamicPage:{container:"DynamicPage / inline-size",width:"100%",height:"100%",maxHeight:"100%",position:"relative",whiteSpace:"normal",fontFamily:a.sapFontFamily,backgroundColor:a.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[B.headerDisplay]:"block",[B.titleFontSize]:a.sapObjectHeader_Title_FontSize},headerCollapsed:{[B.headerDisplay]:"none",[B.titleFontSize]:a.sapObjectHeader_Title_SnappedFontSize,'& $anchorBar > section[role="navigation"]':{top:"-0.025rem"}},header:{extend:V},title:{extend:V},anchorBar:{position:"sticky",boxShadow:a.sapContent_HeaderShadow,height:"1px",zIndex:2,'& > section[role="navigation"]':{top:0}},contentContainer:{extend:V,paddingTop:"1rem",boxSizing:"border-box",width:"100%",height:"auto",fontFamily:a.sapFontFamily,zIndex:0},backgroundStandard:{background:a.sapBackgroundColor},backgroundSolid:{background:a.sapBackgroundColor},backgroundList:{background:a.sapGroup_ContentBackground},backgroundTransparent:{background:"transparent"},footer:{bottom:"0.5rem",margin:"0 0.5rem",left:0,right:0}},Oe={header:{backgroundColor:a.sapObjectHeader_Background,position:"sticky",zIndex:1,paddingTop:"1rem",paddingBottom:"1rem",display:`var(${B.headerDisplay})`,overflow:"hidden"}},Ve=M(Oe,{name:"DynamicPageHeader"}),j=n.forwardRef((e,u)=>{const{children:r,headerPinned:l,topHeaderHeight:s,className:c,style:g,...v}=e,f=n.useMemo(()=>l?{...g,top:`${s}px`,zIndex:1}:g,[l,s,g]),y=Ve(),k=H(y.header,c);return h("div",{ref:u,...v,className:k,"data-component-name":"DynamicPageHeader",style:f,children:r})});j.displayName="DynamicPageHeader";try{j.displayName="DynamicPageHeader",j.__docgenInfo={description:`The dynamic page header contains the header content of the dynamic page.
This component can be collapsed and pinned by the anchorbar.`,displayName:"DynamicPageHeader",props:{headerPinned:{defaultValue:null,description:"Determines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},topHeaderHeight:{defaultValue:null,description:"Determines the height of the top header (dynamic page title).",name:"topHeaderHeight",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Content of the `DynamicPageHeader`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const L=({onClick:e,noHover:u})=>h("span",{style:{flexGrow:1,height:"100%",cursor:u?"auto":"pointer"},className:"spacer",onClick:e});L.displayName="ToolbarSpacer";try{ToolbarSpacer.displayName="ToolbarSpacer",ToolbarSpacer.__docgenInfo={description:"",displayName:"ToolbarSpacer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}const Re={container:{flex:"1 1 100%",backgroundColor:a.sapObjectHeader_Background,minHeight:"3rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"sticky",top:0,zIndex:2,cursor:"pointer",'&[data-not-clickable="true"]':{cursor:"unset","&:hover":{backgroundColor:a.sapObjectHeader_Background}},"&:hover":{backgroundColor:a.sapObjectHeader_Hover_Background}},phone:{[B.titleFontSize]:a.sapObjectHeader_Title_SnappedFontSize},breadcrumbs:{minWidth:"50%",padding:"0.5rem 0 0.25rem 0"},titleMainSection:{flex:"1 1 100%",alignItems:"baseline"},title:{fontFamily:a.sapObjectHeader_Title_FontFamily,color:a.sapObjectHeader_Title_TextColor,fontSize:`var(${B.titleFontSize})`,paddingTop:"0.3125rem",overflowWrap:"break-word",hyphens:"auto","& > *":{fontFamily:a.sapObjectHeader_Title_FontFamily,color:a.sapObjectHeader_Title_TextColor,fontSize:`var(${B.titleFontSize})`,overflowWrap:"break-word",hyphens:"auto"}},subTitle:{color:a.sapObjectHeader_Subtitle_TextColor,fontSize:a.sapFontSize,overflowWrap:"break-word",hyphens:"auto",paddingInlineStart:"0.5rem","& > *":{color:a.sapObjectHeader_Subtitle_TextColor,fontSize:a.sapFontSize,overflowWrap:"break-word",hyphens:"auto"}},subTitleBottom:{marginTop:"0.25rem",paddingInlineStart:0},content:{display:"flex",flexShrink:1.6,paddingInlineStart:"0.5rem"},toolbar:{flex:"1 1.6 100%",cursor:"auto","&:hover":{backgroundColor:"inherit"},"&>:first-child":{height:"100%"}}},Fe=M(Re,{name:"DynamicPageTitle"}),R=(e,u)=>_e(e,1/0).map(r=>{if(n.isValidElement(r))return n.cloneElement(r,{onClick:l=>{var s,c;typeof((s=r.props)==null?void 0:s.onClick)=="function"&&r.props.onClick(l),(c=u.current)!=null&&c.isOpen()&&!l.defaultPrevented&&u.current.close()}})}),$=n.forwardRef((e,u)=>{var W,X;const{actions:r,breadcrumbs:l,children:s,header:c,subHeader:g,showSubHeaderRight:v,navigationActions:f,className:y,style:k,onToggleHeaderContentVisibility:b,actionsToolbarProps:t,navigationActionsToolbarProps:i,...D}=e,d=Fe(),[_,w]=O(u),[m,C]=n.useState(void 0),o=n.useRef(!1),[p,T]=n.useState(((X=ae((W=w.current)==null?void 0:W.getBoundingClientRect().width))==null?void 0:X.name)==="Phone"),le=H(d.container,p&&d.phone,y),[se,U]=O((t==null?void 0:t.overflowPopoverRef)??null),[ce,de]=O((i==null?void 0:i.overflowPopoverRef)??null);n.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[o]);const{onClick:je,...ue}=D,q=n.useCallback(S=>{typeof(e==null?void 0:e.onClick)=="function"&&e.onClick(S),typeof b=="function"&&!(e!=null&&e["data-not-clickable"])&&b(S)},[e==null?void 0:e.onClick,b,e==null?void 0:e["data-not-clickable"]]);n.useEffect(()=>{const S=Be(([N])=>{var G;const z=Array.isArray(N.borderBoxSize)?N.borderBoxSize[0]:N.borderBoxSize,I=(z==null?void 0:z.inlineSize)??N.target.getBoundingClientRect().width;T(((G=ae(I))==null?void 0:G.name)==="Phone"),I<1280&&!m&&o.current?C(!0):I>=1280&&m&&o.current&&C(!1)},150),J=new ResizeObserver(S);return w.current&&J.observe(w.current),()=>{S.cancel(),J.disconnect()}},[w.current,m,o]);const me=S=>{E(S),typeof(t==null?void 0:t.onClick)=="function"&&t.onClick(S)},pe=S=>{E(S),typeof(i==null?void 0:i.onClick)=="function"&&i.onClick(S)};return P(x,{className:le,style:k,ref:_,"data-component-name":"DynamicPageTitle",onClick:q,...ue,children:[(l||f&&m)&&P(x,{justifyContent:we.SpaceBetween,"data-component-name":"DynamicPageTitleBreadcrumbs",children:[l&&h("div",{className:d.breadcrumbs,onClick:E,children:l}),m&&P(ee,{tabIndex:void 0,role:void 0,...i,overflowButton:i==null?void 0:i.overflowButton,className:H(d.toolbar,i==null?void 0:i.className),onClick:pe,"data-component-name":"DynamicPageTitleNavActions",onOverflowChange:i==null?void 0:i.onOverflowChange,overflowPopoverRef:ce,design:te.Auto,toolbarStyle:ne.Clear,active:!0,children:[h(L,{onClick:q,noHover:e==null?void 0:e["data-not-clickable"]}),R(f,de)]})]}),P(x,{alignItems:Te.Center,style:{flexGrow:1,width:"100%"},children:[P(x,{className:d.titleMainSection,children:[c&&h("div",{className:d.title,"data-component-name":"DynamicPageTitleHeader",children:c}),g&&v&&h("div",{className:d.subTitle,"data-component-name":"DynamicPageTitleSubHeader",children:g}),s&&h("div",{className:d.content,"data-component-name":"DynamicPageTitleContent",children:s})]}),(r||!m&&f)&&P(ee,{tabIndex:void 0,role:void 0,...t,overflowButton:t==null?void 0:t.overflowButton,design:te.Auto,toolbarStyle:ne.Clear,active:!0,className:H(d.toolbar,t==null?void 0:t.className),onClick:me,"data-component-name":"DynamicPageTitleActions",onOverflowChange:t==null?void 0:t.onOverflowChange,overflowPopoverRef:se,children:[h(L,{onClick:q,noHover:e==null?void 0:e["data-not-clickable"]}),R(r,U),!m&&n.Children.count(r)>0&&n.Children.count(f)>0&&h(Ce,{}),!m&&R(f,U)]})]}),g&&!v&&h(x,{children:h("div",{className:H(d.subTitle,d.subTitleBottom),"data-component-name":"DynamicPageTitleSubHeader",children:g})})]})});$.displayName="DynamicPageTitle";try{$.displayName="DynamicPageTitle",$.__docgenInfo={description:"The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.\nIt can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.",displayName:"DynamicPageTitle",props:{actions:{defaultValue:null,description:"The `DynamicPageTitle` actions.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},breadcrumbs:{defaultValue:null,description:"The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.",name:"breadcrumbs",required:!1,type:{name:"ReactNode | ReactNode[]"}},children:{defaultValue:null,description:"The content is positioned in the `DynamicPageTitle` middle area",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:"The `header` is positioned in the `DynamicPageTitle` left area.\nUse this prop to display a `Title` (or any other component that serves as a heading).",name:"header",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"The `subHeader` is positioned in the `DynamicPageTitle` left area below the `header`.\nUse this aggregation to display a component like `Label` or any other component that serves as sub header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},navigationActions:{defaultValue:null,description:"The `DynamicPageTitle` navigation actions.<br />\n*Note*: The `navigationActions` position depends on the control size.\nIf the control size is 1280px or bigger, they are rendered right next to the actions.\nOtherwise, they are rendered in the top-right area, above the actions.\nIf a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"navigationActions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},showSubHeaderRight:{defaultValue:null,description:"Display the `subHeader` on the right instead of below the `header`.",name:"showSubHeaderRight",required:!1,type:{name:"boolean"}},actionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "actions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"actionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},navigationActionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "navigationActions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"navigationActionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{$ as D,V as R,j as a,F as b,B as c,dt as s,ct as u};
//# sourceMappingURL=index-04888a4b.js.map
