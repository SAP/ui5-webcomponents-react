import{j as p}from"./jsx-runtime-d079401a.js";import{T as j}from"./ThemingParameters-7e2e4e30.js";import{e as re}from"./index-99d317a4.js";import{c as _}from"./clsx-1229b3e0.js";import{r as t}from"./index-f1f2c4b1.js";import{c as se}from"./react-jss.esm-c310038c.js";import{u as ie,b as le,s as ce,c as de}from"./index-ef8c285f.js";import{F as ue}from"./index-56b3d57c.js";import{u as v}from"./withWebComponent-7d7e5133.js";import{G as me}from"./GlobalStyleClasses-7209358d.js";import{P as pe}from"./PageBackgroundDesign-7e89cd25.js";import{d as he}from"./debounce-afefed63.js";const fe=se(ce,{name:"DynamicPage"}),D=t.forwardRef((c,A)=>{var R,x,k,F,q,O;const{headerTitle:r,headerContent:a,style:U,backgroundDesign:J,showHideHeaderButton:C,headerContentPinnable:E,alwaysShowContentHeader:u,children:I,className:M,footer:N,a11yConfig:o,onToggleHeaderContent:w,onPinnedStateChange:X,...z}=c,{onScroll:ge,...G}=z,B=t.useRef(null),[W,h]=v(A),b=t.useRef(null),[Y,P]=v(r==null?void 0:r.ref),[$,f]=v(a==null?void 0:a.ref),H=t.useRef(0),[n,l]=t.useState(u?"VISIBLE_PINNED":"AUTO"),m=t.useRef(!1),[K,Q]=t.useState(!1),[Z,g]=t.useState(void 0),{topHeaderHeight:S,headerCollapsed:d}=ie(h,P,f,B,[Z,g],{noHeader:!1,fixedHeader:n==="VISIBLE_PINNED"||n==="HIDDEN_PINNED",scrollTimeout:H}),s=fe(),ee=_(s.dynamicPage,me.sapScrollBar,s[`background${J}`],M,["HIDDEN","HIDDEN_PINNED"].includes(n)&&s.headerCollapsed);t.useEffect(()=>{const e=he(([y])=>{Q(!y.isIntersecting)},250),i=new IntersectionObserver(e,{root:h.current,threshold:.98,rootMargin:"0px 0px -60px 0px"});return b.current&&i.observe(b.current),()=>{i.disconnect(),e.cancel()}},[]),t.useEffect(()=>{const e=h.current,i=()=>{l("AUTO"),g(!0)};return(n==="VISIBLE"||n==="HIDDEN")&&(e==null||e.addEventListener("scroll",i,{once:!0})),()=>{e==null||e.removeEventListener("scroll",i)}},[h,n]);const ne=e=>{H.current=performance.now()+500;const i=!e.detail.visible;l(y=>y==="VISIBLE_PINNED"||y==="HIDDEN_PINNED"?i?"HIDDEN_PINNED":"VISIBLE_PINNED":i?"HIDDEN":"VISIBLE")};t.useEffect(()=>{n==="VISIBLE_PINNED"||n==="VISIBLE"?g(!1):(n==="HIDDEN_PINNED"||n==="HIDDEN")&&g(!0)},[n]);const te=e=>{P.current&&(P.current.style.backgroundColor=(e==null?void 0:e.type)==="mouseover"?j.sapObjectHeader_Hover_Background:null)},V=e=>{e.stopPropagation(),m.current||(m.current=!0),ne(re(e,{visible:d}))},ae=e=>{l(e?"VISIBLE_PINNED":"VISIBLE")};t.useEffect(()=>{u!==void 0&&l(u?"VISIBLE_PINNED":"VISIBLE")},[u]);const oe=e=>{m.current||(m.current=!0),typeof(c==null?void 0:c.onScroll)=="function"&&c.onScroll(e),n==="HIDDEN_PINNED"&&e.target.scrollTop===0&&l("VISIBLE_PINNED")},T={...U};d===!0&&a&&(H.current=performance.now()+200,T[de.titleFontSize]=j.sapObjectHeader_Title_SnappedFontSize),t.useEffect(()=>{typeof w=="function"&&m.current&&w(d!==!0)},[d]);const L=n==="VISIBLE_PINNED"||n==="VISIBLE"?(((R=f==null?void 0:f.current)==null?void 0:R.offsetHeight)??0)+S:S;return p.jsxs("div",{ref:W,className:ee,style:T,onScroll:oe,...G,children:[r&&t.cloneElement(r,{"data-not-clickable":u&&!E||!a||!C&&!E,ref:Y,className:_(s.title,(x=r==null?void 0:r.props)==null?void 0:x.className),onToggleHeaderContentVisibility:V}),a&&t.cloneElement(a,{ref:$,style:d===!0?{position:"absolute",visibility:"hidden"}:a.props.style,className:_(s.header,(k=a==null?void 0:a.props)==null?void 0:k.className),headerPinned:n==="VISIBLE_PINNED"||n==="VISIBLE",topHeaderHeight:S}),p.jsx(ue,{"data-component-name":"DynamicPageAnchorBarContainer",className:s.anchorBar,ref:B,style:{top:L},children:p.jsx(le,{headerContentPinnable:E,showHideHeaderButton:C,headerContentVisible:a&&d!==!0,headerPinned:n==="VISIBLE_PINNED"||n==="HIDDEN_PINNED",a11yConfig:o,onHoverToggleButton:te,onToggleHeaderContentVisibility:V,onPinnedStateChange:X,setHeaderPinned:ae})}),p.jsx("div",{ref:b,"data-component-name":"DynamicPageContent",className:s.contentContainer,style:{paddingBlockEnd:N?"1rem":0},children:typeof I=="function"?I({stickyHeaderHeight:L+1}):I}),N&&p.jsx("div",{className:s.footer,style:{position:K?"sticky":"absolute"},"data-component-name":"DynamicPageFooter",role:((F=o==null?void 0:o.dynamicPageFooter)==null?void 0:F.role)??"contentinfo","aria-label":(q=o==null?void 0:o.dynamicPageFooter)==null?void 0:q["aria-label"],"aria-labelledby":(O=o==null?void 0:o.dynamicPageFooter)==null?void 0:O["aria-labelledby"],children:N})]})});D.displayName="DynamicPage";D.defaultProps={backgroundDesign:pe.Solid,showHideHeaderButton:!0,headerContentPinnable:!0};try{D.displayName="DynamicPage",D.__docgenInfo={description:`The dynamic page is a generic layout control designed to support various floorplans and use cases.
The content of both the header and the page can differ from floorplan to floorplan.

The header of the dynamic page is collapsible, which helps users to focus on the actual page content, but still ensures that important header information
and actions are readily available.`,displayName:"DynamicPage",props:{backgroundDesign:{defaultValue:{value:"PageBackgroundDesign.Solid"},description:"Determines the background color of DynamicPage.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"List"'}]}},alwaysShowContentHeader:{defaultValue:null,description:"Defines whether the `headerContent` can be hidden by scrolling down.",name:"alwaysShowContentHeader",required:!1,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:{value:"true"},description:"Determines whether the expand/collapse `headerContent` button is shown.",name:"showHideHeaderButton",required:!1,type:{name:"boolean"}},headerContentPinnable:{defaultValue:{value:"true"},description:"Determines whether the pin button is shown.",name:"headerContentPinnable",required:!1,type:{name:"boolean"}},headerTitle:{defaultValue:null,description:"Defines the upper, always static, title section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.",name:"headerTitle",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headerContent:{defaultValue:null,description:"Defines the dynamic header section of the `DynamicPage`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.",name:"headerContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},footer:{defaultValue:null,description:"React element which defines the footer content.\n\n__Note:__ To preserve the intended design, please use only non-content based `height` values (`px`, `rem`, `vh`, etc.) as height of the `DynamicPage`.\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.",name:"footer",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"React element or node array which defines the content.\n\n__Note:__ Assigning `children` as function is recommended when implementing sticky sub-headers. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/story/layouts-floorplans-dynamicpage--sticky-sub-headers).",name:"children",required:!1,type:{name:"ReactNode | ReactNode[] | ((payload: { stickyHeaderHeight: number; }) => ReactElement<any, string | JSXElementConstructor<any>>)"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; dynamicPageFooter?: { role?: string; 'aria-label'?: string; 'aria-labelledby'?: string; }; }"}},onToggleHeaderContent:{defaultValue:null,description:"Fired when the `headerContent` is expanded or collapsed.",name:"onToggleHeaderContent",required:!1,type:{name:"(visible: boolean) => void"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its `pinned` state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{D};
//# sourceMappingURL=index-e8f16eb4.js.map
