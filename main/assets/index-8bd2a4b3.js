import{j as f}from"./jsx-runtime-5926aa06.js";import{c as $}from"./clsx.m-1229b3e0.js";import{r as t}from"./index-ebeaab24.js";import{c as ie}from"./react-jss.esm-022ab528.js";import{u as ue,s as ce}from"./i18n-defaults-54a5f988.js";import{g as de,f as pe}from"./utils-69f7a0e0.js";import{i as fe}from"./overflow-bfdfc9f6.js";import{r as me}from"./index-9c09ad76.js";import{u as oe,h as ve}from"./withWebComponent-d61dcbbc.js";import{s as he}from"./stopPropagation-da74d54e.js";import{P as be}from"./index-828871d8.js";import{c as ge}from"./Device-208919c6.js";import{T as ye}from"./index-4f647dda.js";import{a as we}from"./Button-b124cb06.js";import{P as Ce}from"./Popover-fe68fced.js";import{T as i}from"./ThemingParameters-7e2e4e30.js";import{b as ee}from"./CssSizeVariables-bd372cde.js";import{a as te}from"./CustomVariables-fd831c35.js";import{u as Te,d as H}from"./debounce-37a33ffc.js";import{u as _e}from"./useIsomorphicLayoutEffect-38a48652.js";var k=(r=>(r.Auto="Auto",r.Info="Info",r.Solid="Solid",r.Transparent="Transparent",r))(k||{}),z=(r=>(r.Clear="Clear",r.Standard="Standard",r))(z||{});const Re=t.createContext({inPopover:!1}),xe=ge(),U=r=>{const{lastVisibleIndex:D,classes:m,children:M,portalContainer:x,overflowContentRef:T,numberOfAlwaysVisibleItems:O,showMoreText:V,overflowPopoverRef:N,overflowButton:v}=r,[P,S]=t.useState(!1),l=t.useRef(null),[_,A]=oe(N),q=o=>{o.stopPropagation(),S(p=>p?!1:(A.current&&(A.current.opener=o.target),!0))},j=()=>{l.current&&(l.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},s=()=>{S(!0)},L=o=>{l.current&&(l.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),he(o),S(!1)};t.useEffect(()=>{const o=de("ui5-toggle-button");customElements.whenDefined(o).then(()=>{l.current&&(l.current.accessibilityAttributes={expanded:P,hasPopup:"menu"})})},[]);const h=o=>{var p;typeof((p=v==null?void 0:v.props)==null?void 0:p.onClick)=="function"&&v.props.onClick(o),o.defaultPrevented||q(o)},d=ve();return f.jsxs(Re.Provider,{value:{inPopover:!0},children:[v?t.cloneElement(v,{onClick:h}):f.jsx(ye,{ref:l,design:we.Transparent,icon:fe,onClick:q,pressed:P,accessibleName:V,tooltip:V,"data-component-name":"ToolbarOverflowButton"}),d&&me.createPortal(f.jsx(be,{"data-component-name":"ToolbarOverflowPopover",className:$(m.popover,xe&&m.popoverPhone),placementType:Ce.Bottom,ref:_,open:P,onAfterClose:L,onBeforeOpen:j,onAfterOpen:s,hideArrow:!0,children:f.jsx("div",{className:m.popoverContent,ref:T,children:M.map((o,p)=>{var g,E;return p>D&&p>O-1?(g=o==null?void 0:o.props)!=null&&g.id?t.cloneElement(o,{id:`${o.props.id}-overflow`}):((E=o.type)==null?void 0:E.displayName)==="ToolbarSeparator"?t.cloneElement(o,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"}}):o:null})})}),x??document.body)]})};try{U.displayName="OverflowPopover",U.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}}}}}catch{}const Pe={outerContainer:{boxSizing:"border-box",width:"100%",maxWidth:"100%",height:ee.sapWcrToolbarHeight,position:"relative",overflow:"hidden",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`solid 0.0625rem ${i.sapGroup_TitleBorderColor}`},hasOverflow:{"& $toolbar":{maxWidth:"calc(100% - 44px)"}},clear:{borderBottom:"none"},active:{cursor:"pointer","&:hover":{backgroundColor:i.sapList_Hover_Background},"&:focus":{outline:te.ToolbarFocusOutline,outlineOffset:"-0.1875rem",boxShadow:te.ToolbarFocusShadow},"&:active":{backgroundColor:i.sapActiveColor}},info:{height:"2rem",backgroundColor:i.sapInfobar_NonInteractive_Background,color:i.sapList_TextColor,"&$active":{outlineColor:i.sapContent_ContrastFocusColor,backgroundColor:i.sapInfobar_Background,color:i.sapInfobar_TextColor,"&:hover":{backgroundColor:i.sapInfobar_Hover_Background},"&:active":{backgroundColor:i.sapInfobar_Active_Background}}},solid:{backgroundColor:i.sapBackgroundColor},transparent:{backgroundColor:i.sapToolbar_Background},toolbar:{width:"100%","& >:first-child:not(.spacer)":{marginInline:"0.5rem 0.25rem"},"& >:last-child:not(.spacer)":{marginInline:"0.25rem 0.5rem"},"& > *:not(first-child):not(last-child):not(.spacer)":{marginInline:"0.25rem"},display:"flex",alignItems:"center",maxWidth:"100%"},overflowButtonContainer:{display:"flex",marginInline:"0 0.5rem"},popover:{"&[ui5-popover]::part(content)":{padding:0}},popoverPhone:{width:"calc(100% - 10px)",maxWidth:"calc(100% - 10px)",left:"5px !important"},popoverContent:{padding:ee.sapWcrToolbarPopoverContentPadding,display:"flex",flexDirection:"column","& [ui5-toggle-button], & [ui5-button]":{marginBottom:"0.25rem"},"& [ui5-button]::part(button) ,& [ui5-toggle-button]::part(button)":{justifyContent:"start"},"& [ui5-button][icon-only]::part(button), & [ui5-toggle-button][icon-only]::part(button)":{padding:"revert"},"& :last-child":{marginBottom:0}},childContainer:{display:"flex"}},Se=ie(Pe,{name:"Toolbar"}),R=36+8+8,J=t.forwardRef((r,D)=>{const{children:m,toolbarStyle:M=z.Standard,design:x=k.Auto,active:T=!1,style:O,className:V,onClick:N,slot:v,as:P="div",portalContainer:S,numberOfAlwaysVisibleItems:l=0,onOverflowChange:_,overflowPopoverRef:A,overflowButton:q,...j}=r,s=Se(),[L,h]=oe(D),d=t.useRef([]),[o,p]=t.useState(null),g=t.useRef(null),E=t.useRef(null),ne=t.useRef(null),[X,G]=t.useState("0"),K=Te(h),re=ue("@ui5/webcomponents-react").getText(ce),ae=$(s.outerContainer,M===z.Clear&&s.clear,T&&s.active,x===k.Solid&&s.solid,x===k.Transparent&&s.transparent,x===k.Info&&s.info,V),b=t.useMemo(()=>pe(m,10),[m]),F=t.useMemo(()=>(d.current=[],b.map((e,n)=>{var w;const a=t.createRef(),u=((w=e==null?void 0:e.type)==null?void 0:w.displayName)==="ToolbarSpacer";return d.current.push({ref:a,isSpacer:u}),u?e:f.jsx("div",{ref:a,className:s.childContainer,"data-component-name":"ToolbarChildContainer",children:e},n)})),[b,d,s.childContainer]),y=(o||o===0)&&t.Children.count(F)!==o+1&&l<t.Children.count(b);t.useEffect(()=>{let e;const n=g.current.children[l-1],a=H(()=>{G(K?`${n.offsetParent.offsetWidth-n.offsetLeft+R}px`:`${n.offsetLeft+n.getBoundingClientRect().width+R}px`)},200);return l&&y&&n&&(e=new ResizeObserver(a),e.observe(g.current)),()=>{a.cancel(),e==null||e.disconnect()}},[l,y,K]);const Y=t.useRef(),B=t.useCallback(()=>{Y.current=requestAnimationFrame(()=>{if(!h.current)return;const e=h.current.getBoundingClientRect().width;let n=0,a=null;if(e-R<=0)a=-1;else{let u=!0;d.current.forEach((w,c)=>{const I=d.current[c];if(I&&I.ref&&I.ref.current){let C=I.ref.current.getBoundingClientRect().width;C+=c===0||c===d.current.length-1?4:8,c===d.current.length-1?n+C<=e-8?a=c:(c===0||u)&&(a=c-1):(n+C<=e-R&&(a=c),n<e-R&&n+C>=e-R&&(a=c-1)),u&&!w.isSpacer&&(u=!1),n+=C}})}p(a)})},[y]);t.useEffect(()=>{const e=new ResizeObserver(B);return h.current&&e.observe(h.current),()=>{cancelAnimationFrame(Y.current),e.disconnect()}},[B]),t.useEffect(()=>{t.Children.count(m)>0&&B()},[m]),_e(()=>{B()},[B]);const Q=e=>{if(T&&typeof N=="function"){const n=e.type==="keydown"&&(e.code==="Enter"||e.code==="Space");if(n&&e.target!==e.currentTarget)return;(e.type==="click"||n)&&(e.preventDefault(),N(e))}},Z=t.useRef(b),W=t.useRef(H(_,60));t.useEffect(()=>{W.current=H(_,60)},[_]),t.useEffect(()=>{var n,a;const e=Z.current.length!==b.length;if((o!==null||e)&&typeof _=="function"){Z.current=b;const u=(n=g.current)==null?void 0:n.children;let w=[];const c=(a=E.current)==null?void 0:a.children;(u==null?void 0:u.length)>0&&(w=Array.from(u).filter((I,C)=>C<=o)),W.current({toolbarElements:w,overflowElements:c,target:h.current})}return()=>{W.current.cancel()}},[o,b,W]);const le=P,se=X!=="0"?{minWidth:X,...O}:O;return f.jsxs(le,{style:se,className:$(ae,y&&s.hasOverflow),ref:L,slot:v,onClick:Q,onKeyDown:Q,tabIndex:T?0:void 0,role:T?"button":void 0,"data-sap-ui-fastnavgroup":"true",...j,children:[f.jsxs("div",{className:s.toolbar,"data-component-name":"ToolbarContent",ref:g,children:[y&&t.Children.map(F,(e,n)=>n>=o+1&&n>l-1?t.cloneElement(e,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):e),!y&&F]}),y&&f.jsx("div",{ref:ne,className:s.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:f.jsx(U,{overflowPopoverRef:A,lastVisibleIndex:o,classes:s,portalContainer:S,overflowContentRef:E,numberOfAlwaysVisibleItems:l,showMoreText:re,overflowButton:q,children:b})})]})});J.displayName="Toolbar";try{J.displayName="Toolbar",J.__docgenInfo={description:`Horizontal container most commonly used to display buttons, labels, selects and various other input controls.

The content of the \`Toolbar\` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.
It can be accessed by the user through the overflow button that opens it in a popover.

__Note:__ The overflow popover is mounted only when opened, i.e., any child component of the popover will be remounted, when moved into it.`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the content of the `Toolbar`.\n\n__Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string` or `number` to it.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:'Defines the button shown when the `Toolbar` goes into overflow.\n\n__Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.\n\n__Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.',name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}},toolbarStyle:{defaultValue:null,description:"Defines the visual style of the `Toolbar`.\n\n__Note:__ The visual styles are theme-dependent.",name:"toolbarStyle",required:!1,type:{name:"enum",value:[{value:'"Clear"'},{value:'"Standard"'},{value:'"Clear"'},{value:'"Standard"'}]}},design:{defaultValue:null,description:"Defines the `Toolbar` design.<br />\n<b>Note:</b> Design settings are theme-dependent.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'}]}},active:{defaultValue:null,description:"Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"label"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"Defines the number of items inside the toolbar which should always be visible.\n_E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._\n\n__Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},overflowPopoverRef:{defaultValue:null,description:`Exposes the React Ref of the overflow popover.
This can be useful, for example, when wanting to close the popover on click or selection of a child element.`,name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},onClick:{defaultValue:null,description:"Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onOverflowChange:{defaultValue:null,description:"Fired when the content of the overflow popover has changed.",name:"onOverflowChange",required:!1,type:{name:"(event: { toolbarElements: HTMLElement[]; overflowElements: HTMLCollection; target: HTMLElement; }) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Re as O,J as T,k as a,z as b};
//# sourceMappingURL=index-8bd2a4b3.js.map
