import{j as P}from"./useIsomorphicLayoutEffect-Cdhcir-A.js";import{T as M}from"./ThemingParameters-DOkJX3Ed.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as t}from"./index-gJgmXzrm.js";import{u as ce,b as ue,c as he}from"./index-DlZ1Veow.js";import{F as me}from"./index-CZBHbdAV.js";import{P as pe}from"./PageBackgroundDesign-DmvUwD2v.js";import{u as k}from"./withWebComponent-B-q4dpqR.js";import{u as ge}from"./useStylesheet-BapCJMzX.js";import{G as fe}from"./GlobalStyleClasses-CJhxSfAI.js";import{d as ye}from"./debounce-D7W5PopO.js";const _e={packageName:"@ui5/webcomponents-react",fileName:"DynamicPage.module.css",content:".DynamicPage_dynamicPage_i8nn3_1{background-color:var(--sapBackgroundColor);container:DynamicPage/inline-size;font-family:var(--sapFontFamily);height:100%;max-height:100%;overflow-x:hidden;overflow-y:auto;position:relative;white-space:normal;width:100%;--_ui5wcr_DynamicPage_header_display:block;--_ui5wcr_DynamicPage_title_fontsize:var(--sapObjectHeader_Title_FontSize)}.DynamicPage_headerCollapsed_i8nn3_16{--_ui5wcr_DynamicPage_header_display:none;--_ui5wcr_DynamicPage_title_fontsize:var(--sapObjectHeader_Title_SnappedFontSize)}@container (max-width: 599px){.DynamicPage_contentContainer_i8nn3_24,.DynamicPage_header_i8nn3_16,.DynamicPage_title_i8nn3_23{padding-inline:1rem}}@container (min-width: 600px) and (max-width: 1439px){.DynamicPage_contentContainer_i8nn3_24,.DynamicPage_header_i8nn3_16,.DynamicPage_title_i8nn3_23{padding-inline:2rem}}@container (min-width: 1440px){.DynamicPage_contentContainer_i8nn3_24,.DynamicPage_header_i8nn3_16,.DynamicPage_title_i8nn3_23{padding-inline:3rem}}.DynamicPage_anchorBar_i8nn3_45{box-shadow:var(--sapContent_HeaderShadow);height:1px;position:sticky;z-index:2}.DynamicPage_anchorBar_i8nn3_45>section[data-component-name=DynamicPageAnchorBar]{inset-block-start:0}.DynamicPage_contentContainer_i8nn3_24{box-sizing:border-box;font-family:var(--sapFontFamily);height:auto;padding-block-start:1rem;width:100%;z-index:0}.DynamicPage_backgroundStandard_i8nn3_65{background:var(--sapBackgroundColor)}.DynamicPage_backgroundSolid_i8nn3_69{background:var(--sapBackgroundColor)}.DynamicPage_backgroundList_i8nn3_73{background:var(--sapGroup_ContentBackground)}.DynamicPage_backgroundTransparent_i8nn3_77{background:#0000}.DynamicPage_footer_i8nn3_81{bottom:.5rem;inset-inline:0;margin:0 .5rem}"},d={dynamicPage:"DynamicPage_dynamicPage_i8nn3_1",headerCollapsed:"DynamicPage_headerCollapsed_i8nn3_16",header:"DynamicPage_header_i8nn3_16",title:"DynamicPage_title_i8nn3_23",contentContainer:"DynamicPage_contentContainer_i8nn3_24",anchorBar:"DynamicPage_anchorBar_i8nn3_45",backgroundStandard:"DynamicPage_backgroundStandard_i8nn3_65",backgroundSolid:"DynamicPage_backgroundSolid_i8nn3_69",backgroundList:"DynamicPage_backgroundList_i8nn3_73",backgroundTransparent:"DynamicPage_backgroundTransparent_i8nn3_77",footer:"DynamicPage_footer_i8nn3_81"},g=t.forwardRef((c,J)=>{var F,R,O,A,z,j;const{headerTitle:X,headerContent:U,style:W,backgroundDesign:Y=pe.Solid,showHideHeaderButton:T=!0,headerContentPinnable:N=!0,alwaysShowContentHeader:f,children:S,className:G,footer:E,a11yConfig:i,onToggleHeaderContent:V,onPinnedStateChange:$,headerCollapsed:y,preserveHeaderStateOnScroll:u,...K}=c,l=X,o=U,{onScroll:De,...Q}=K,x=t.useRef(null),[Z,_]=k(J),C=t.useRef(null),[ee,a]=k(l==null?void 0:l.ref),[ne,m]=k(o==null?void 0:o.ref),w=t.useRef(0),[n,s]=t.useState(f?"VISIBLE_PINNED":"AUTO"),D=t.useRef(!1),[te,ae]=t.useState(!1),[oe,b]=t.useState(y),{topHeaderHeight:v,headerCollapsed:h}=ce(_,a,m,x,[oe,b],{noHeader:!1,fixedHeader:n==="VISIBLE_PINNED"||n==="HIDDEN_PINNED",scrollTimeout:w,preserveHeaderStateOnScroll:u});t.useEffect(()=>{u&&n==="AUTO"&&(_.current.scrollTop<=((a==null?void 0:a.current.offsetHeight)??0)+Math.max(0,m.current.offsetHeight??0-(a==null?void 0:a.current.offsetHeight)??0)?s("VISIBLE"):s("HIDDEN"))},[u,n]),t.useEffect(()=>{y!=null&&(b(y),I(void 0,y))},[y]),ge(_e,g.displayName);const re=H(d.dynamicPage,fe.sapScrollBar,d[`background${Y}`],G,["HIDDEN","HIDDEN_PINNED"].includes(n)&&d.headerCollapsed);t.useEffect(()=>{const e=ye(([p])=>{ae(!p.isIntersecting)},250),r=new IntersectionObserver(e,{root:_.current,threshold:.98,rootMargin:"0px 0px -60px 0px"});return C.current&&r.observe(C.current),()=>{r.disconnect(),e.cancel()}},[]);const B=t.useRef(void 0);t.useEffect(()=>{const e=_.current,r=p=>{s("AUTO"),p.target.scrollTop>((a==null?void 0:a.current.offsetHeight)??0)+Math.max(0,m.current.offsetHeight??0-(a==null?void 0:a.current.offsetHeight)??0)&&b(!0)};if(!u&&(n==="VISIBLE"||n==="HIDDEN")){const p=w.current-performance.now();clearTimeout(B.current),p>0?B.current=setTimeout(()=>{e==null||e.addEventListener("scroll",r,{once:!0})},p+50):e==null||e.addEventListener("scroll",r,{once:!0})}return()=>{e==null||e.removeEventListener("scroll",r)}},[_,n,u]);const I=(e,r)=>{e==null||e.stopPropagation(),D.current||(D.current=!0),ie(r??!h)},ie=e=>{w.current=performance.now()+500,s(r=>r==="VISIBLE_PINNED"||r==="HIDDEN_PINNED"?e?"HIDDEN_PINNED":"VISIBLE_PINNED":e?"HIDDEN":"VISIBLE")};t.useEffect(()=>{n==="VISIBLE_PINNED"||n==="VISIBLE"?b(!1):(n==="HIDDEN_PINNED"||n==="HIDDEN")&&b(!0)},[n]);const se=e=>{a.current&&(a.current.style.backgroundColor=(e==null?void 0:e.type)==="mouseover"?M.sapObjectHeader_Hover_Background:null)},le=e=>{s(e?"VISIBLE_PINNED":"VISIBLE")};t.useEffect(()=>{f!==void 0&&s(f?"VISIBLE_PINNED":"VISIBLE")},[f]);const de=e=>{u||(D.current||(D.current=!0),typeof(c==null?void 0:c.onScroll)=="function"&&c.onScroll(e),n==="HIDDEN_PINNED"&&e.target.scrollTop===0&&s("VISIBLE_PINNED"))},L={...W};h===!0&&o&&(w.current=performance.now()+200,L[he.titleFontSize]=M.sapObjectHeader_Title_SnappedFontSize),t.useEffect(()=>{typeof V=="function"&&D.current&&V(h!==!0)},[h]);const q=n==="VISIBLE_PINNED"||n==="VISIBLE"?(((F=m==null?void 0:m.current)==null?void 0:F.offsetHeight)??0)+v:v;return P.jsxs("div",{ref:Z,className:re,style:L,onScroll:de,...Q,children:[l&&t.cloneElement(l,{"data-not-clickable":f&&!N||!o||!T&&!N,ref:ee,className:H(d.title,(R=l==null?void 0:l.props)==null?void 0:R.className),onToggleHeaderContentVisibility:I,"data-header-content-visible":o&&h!==!0}),o&&t.cloneElement(o,{ref:ne,style:h===!0?{...o.props.style,position:"relative",visibility:"hidden"}:o.props.style,className:H(d.header,(O=o==null?void 0:o.props)==null?void 0:O.className),headerPinned:u||n==="VISIBLE_PINNED"||n==="VISIBLE",topHeaderHeight:v}),P.jsx(me,{"data-component-name":"DynamicPageAnchorBarContainer",className:d.anchorBar,ref:x,style:{top:q},children:P.jsx(ue,{headerContentPinnable:N,showHideHeaderButton:T,headerContentVisible:o&&h!==!0,headerPinned:n==="VISIBLE_PINNED"||n==="HIDDEN_PINNED",a11yConfig:i,onHoverToggleButton:se,onToggleHeaderContentVisibility:I,onPinnedStateChange:$,setHeaderPinned:le})}),P.jsx("div",{ref:C,"data-component-name":"DynamicPageContent",className:d.contentContainer,style:{paddingBlockEnd:E?"1rem":0},children:typeof S=="function"?S({stickyHeaderHeight:q+1}):S}),E&&P.jsx("div",{className:d.footer,style:{position:te?"sticky":"absolute"},"data-component-name":"DynamicPageFooter",role:((A=i==null?void 0:i.dynamicPageFooter)==null?void 0:A.role)??"contentinfo","aria-label":(z=i==null?void 0:i.dynamicPageFooter)==null?void 0:z["aria-label"],"aria-labelledby":(j=i==null?void 0:i.dynamicPageFooter)==null?void 0:j["aria-labelledby"],children:E})]})});g.displayName="DynamicPage";try{g.displayName="DynamicPage",g.__docgenInfo={description:`The dynamic page is a generic layout control designed to support various floorplans and use cases.
The content of both the header and the page can differ from floorplan to floorplan.

The header of the dynamic page is collapsible, which helps users to focus on the actual page content, but still ensures that important header information
and actions are readily available.`,displayName:"DynamicPage",props:{backgroundDesign:{defaultValue:null,description:"Determines the background color of DynamicPage.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'}]}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` can be hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines whether the expand/collapse `headerContent` button is shown.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines whether the pin button is shown.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerTitle",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerContent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ To preserve the intended design, please use only non-content based `height` values (`px`, `rem`, `vh`, etc.) as height of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"React element or node array which defines the content.\n\n__Note:__ Assigning `children` as function is recommended when implementing sticky sub-headers. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/story/layouts-floorplans-dynamicpage--sticky-sub-headers).",name:"children",required:!1,type:{name:"ReactNode | ReactNode[] | ((payload: { stickyHeaderHeight: number; }) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},headerCollapsed:{defaultValue:null,description:`Determines whether the header is expanded. You can use this to initialize the component with a collapsed header.

__Note:__ Changes through user interaction (scrolling, manually expanding/collapsing the header, etc.) are still applied.
@since 1.23.0`,name:"headerCollapsed",required:!1,type:{name:"boolean"}},preserveHeaderStateOnScroll:{defaultValue:null,description:`Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
@since 1.23.0`,name:"preserveHeaderStateOnScroll",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; dynamicPageFooter?: { role?: string; 'aria-label'?: string; 'aria-labelledby'?: string; }; }"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its `pinned` state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="DynamicPage",g.__docgenInfo={description:`The dynamic page is a generic layout control designed to support various floorplans and use cases.
The content of both the header and the page can differ from floorplan to floorplan.

The header of the dynamic page is collapsible, which helps users to focus on the actual page content, but still ensures that important header information
and actions are readily available.`,displayName:"DynamicPage",props:{backgroundDesign:{defaultValue:null,description:"Determines the background color of DynamicPage.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'}]}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` can be hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines whether the expand/collapse `headerContent` button is shown.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines whether the pin button is shown.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerTitle",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.\n\n__Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!",name:"headerContent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ To preserve the intended design, please use only non-content based `height` values (`px`, `rem`, `vh`, etc.) as height of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"React element or node array which defines the content.\n\n__Note:__ Assigning `children` as function is recommended when implementing sticky sub-headers. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/story/layouts-floorplans-dynamicpage--sticky-sub-headers).",name:"children",required:!1,type:{name:"ReactNode | ReactNode[] | ((payload: { stickyHeaderHeight: number; }) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},headerCollapsed:{defaultValue:null,description:`Determines whether the header is expanded. You can use this to initialize the component with a collapsed header.

__Note:__ Changes through user interaction (scrolling, manually expanding/collapsing the header, etc.) are still applied.
@since 1.23.0`,name:"headerCollapsed",required:!1,type:{name:"boolean"}},preserveHeaderStateOnScroll:{defaultValue:null,description:`Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
@since 1.23.0`,name:"preserveHeaderStateOnScroll",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; dynamicPageFooter?: { role?: string; 'aria-label'?: string; 'aria-labelledby'?: string; }; }"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its `pinned` state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{g as D};
