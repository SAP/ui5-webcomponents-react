import{j as b}from"./jsx-runtime-5926aa06.js";import{c as J}from"./clsx.m-1229b3e0.js";import{r as t}from"./index-ebeaab24.js";import{c as pe}from"./react-jss.esm-022ab528.js";import{u as de,s as fe}from"./i18n-defaults-b56a0b3b.js";import{g as ve,f as me}from"./utils-69f7a0e0.js";import{i as he}from"./overflow-ccfa1b27.js";import{r as be}from"./index-9c09ad76.js";import{u as le,h as ge}from"./withWebComponent-d61dcbbc.js";import{s as ye}from"./stopPropagation-da74d54e.js";import{P as we}from"./index-f7a103a5.js";import{c as Ce}from"./Device-208919c6.js";import{P as Te}from"./PopupsCommon.css-a5a6237e.js";import{T as _e}from"./index-20cc07c1.js";import{a as Re}from"./Button-0cdf0df4.js";import{P as Pe}from"./Popover-aaa493d1.js";import{T as u}from"./ThemingParameters-7e2e4e30.js";import{b as ne}from"./CssSizeVariables-bd372cde.js";import{a as re}from"./CustomVariables-fd831c35.js";import{u as xe,d as ae}from"./debounce-ab129990.js";import{u as Ie}from"./useIsomorphicLayoutEffect-38a48652.js";var V=(r=>(r.Auto="Auto",r.Info="Info",r.Solid="Solid",r.Transparent="Transparent",r))(V||{}),X=(r=>(r.Clear="Clear",r.Standard="Standard",r))(X||{});const Se=t.createContext({inPopover:!1}),Ee=Ce(),G=r=>{var S;const{lastVisibleIndex:j,classes:g,children:L,portalContainer:I,overflowContentRef:P,numberOfAlwaysVisibleItems:O,showMoreText:A,overflowButton:v,overflowPopoverRef:F,setIsMounted:q,a11yConfig:c}=r,[d,C]=t.useState(!1),m=t.useRef(null),[H,D]=le(F);t.useEffect(()=>(q(!0),()=>{q(!1)}),[]);const M=o=>{o.stopPropagation(),C(a=>a?!1:(D.current&&(D.current.opener=o.target),!0))},s=()=>{m.current&&(m.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},$=()=>{C(!0)},y=o=>{m.current&&(m.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),ye(o),C(!1)};t.useEffect(()=>{const o=ve("ui5-toggle-button");customElements.whenDefined(o).then(()=>{m.current&&(m.current.accessibilityAttributes={expanded:d,hasPopup:"menu"})})},[]);const h=o=>{var a;typeof((a=v==null?void 0:v.props)==null?void 0:a.onClick)=="function"&&v.props.onClick(o),o.defaultPrevented||M(o)},f=ge(),z=(()=>{var o,a;return(o=c==null?void 0:c.overflowPopover)!=null&&o.contentRole?Te.None:(a=c==null?void 0:c.overflowPopover)==null?void 0:a.role})();return b.jsxs(Se.Provider,{value:{inPopover:!0},children:[v?t.cloneElement(v,{onClick:h}):b.jsx(_e,{ref:m,design:Re.Transparent,icon:he,onClick:M,pressed:d,accessibleName:A,tooltip:A,"data-component-name":"ToolbarOverflowButton"}),f&&be.createPortal(b.jsx(we,{"data-component-name":"ToolbarOverflowPopover",className:J(g.popover,Ee&&g.popoverPhone),placementType:Pe.Bottom,ref:H,open:d,onAfterClose:y,onBeforeOpen:s,onAfterOpen:$,hideArrow:!0,accessibleRole:z,children:b.jsx("div",{className:g.popoverContent,ref:P,role:(S=c==null?void 0:c.overflowPopover)==null?void 0:S.contentRole,"data-component-name":"ToolbarOverflowPopoverContent",children:L.map((o,a)=>{var E,W;return a>j&&a>O-1?(E=o==null?void 0:o.props)!=null&&E.id?t.cloneElement(o,{id:`${o.props.id}-overflow`}):((W=o.type)==null?void 0:W.displayName)==="ToolbarSeparator"?t.cloneElement(o,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"}}):o:null})})}),I??document.body)]})};try{G.displayName="OverflowPopover",G.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}},setIsMounted:{defaultValue:null,description:"",name:"setIsMounted",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},a11yConfig:{defaultValue:null,description:"",name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}}}}}catch{}const Be={outerContainer:{boxSizing:"border-box",width:"100%",maxWidth:"100%",height:ne.sapWcrToolbarHeight,position:"relative",overflow:"hidden",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`solid 0.0625rem ${u.sapGroup_TitleBorderColor}`},hasOverflow:{"& $toolbar":{maxWidth:"calc(100% - 44px)"}},clear:{borderBottom:"none"},active:{cursor:"pointer","&:hover":{backgroundColor:u.sapList_Hover_Background},"&:focus":{outline:re.ToolbarFocusOutline,outlineOffset:"-0.1875rem",boxShadow:re.ToolbarFocusShadow},"&:active":{backgroundColor:u.sapActiveColor}},info:{height:"2rem",backgroundColor:u.sapInfobar_NonInteractive_Background,color:u.sapList_TextColor,"&$active":{outlineColor:u.sapContent_ContrastFocusColor,backgroundColor:u.sapInfobar_Background,color:u.sapInfobar_TextColor,"&:hover":{backgroundColor:u.sapInfobar_Hover_Background},"&:active":{backgroundColor:u.sapInfobar_Active_Background}}},solid:{backgroundColor:u.sapBackgroundColor},transparent:{backgroundColor:u.sapToolbar_Background},toolbar:{width:"100%","& >:first-child:not(.spacer)":{marginInline:"0.5rem 0.25rem"},"& >:last-child:not(.spacer)":{marginInline:"0.25rem 0.5rem"},"& > *:not(first-child):not(last-child):not(.spacer)":{marginInline:"0.25rem"},display:"flex",alignItems:"center",maxWidth:"100%"},overflowButtonContainer:{display:"flex",marginInline:"0 0.5rem"},popover:{"&[ui5-popover]::part(content)":{padding:0}},popoverPhone:{width:"calc(100% - 10px)",maxWidth:"calc(100% - 10px)",left:"5px !important"},popoverContent:{padding:ne.sapWcrToolbarPopoverContentPadding,display:"flex",flexDirection:"column","& [ui5-toggle-button], & [ui5-button]":{marginBottom:"0.25rem"},"& [ui5-button]::part(button) ,& [ui5-toggle-button]::part(button)":{justifyContent:"start"},"& [ui5-button][icon-only]::part(button), & [ui5-toggle-button][icon-only]::part(button)":{padding:"revert"},"& :last-child":{marginBottom:0}},childContainer:{display:"flex"}},ke=pe(Be,{name:"Toolbar"}),x=36+8+8,K=t.forwardRef((r,j)=>{const{children:g,toolbarStyle:L=X.Standard,design:I=V.Auto,active:P=!1,style:O,className:A,onClick:v,slot:F,as:q="div",portalContainer:c,numberOfAlwaysVisibleItems:d=0,onOverflowChange:C,overflowPopoverRef:m,overflowButton:H,a11yConfig:D,...M}=r,s=ke(),[$,y]=le(j),h=t.useRef([]),[f,z]=t.useState(null),[S,o]=t.useState(!1),a=t.useRef(null),E=t.useRef(null),W=t.useRef(null),[Y,Q]=t.useState("0"),Z=xe(y),se=de("@ui5/webcomponents-react").getText(fe),ie=J(s.outerContainer,L===X.Clear&&s.clear,P&&s.active,I===V.Solid&&s.solid,I===V.Transparent&&s.transparent,I===V.Info&&s.info,A),w=t.useMemo(()=>me(g,10),[g]),U=t.useMemo(()=>(h.current=[],w.map((e,n)=>{var _;const l=t.createRef(),p=((_=e==null?void 0:e.type)==null?void 0:_.displayName)==="ToolbarSpacer";return h.current.push({ref:l,isSpacer:p}),p?e:b.jsx("div",{ref:l,className:s.childContainer,"data-component-name":"ToolbarChildContainer",children:e},n)})),[w,h,s.childContainer]),T=(f||f===0)&&t.Children.count(U)!==f+1&&d<t.Children.count(w);t.useEffect(()=>{let e;const n=a.current.children[d-1],l=ae(()=>{Q(Z?`${n.offsetParent.offsetWidth-n.offsetLeft+x}px`:`${n.offsetLeft+n.getBoundingClientRect().width+x}px`)},200);return d&&T&&n&&(e=new ResizeObserver(l),e.observe(a.current)),()=>{l.cancel(),e==null||e.disconnect()}},[d,T,Z]);const ee=t.useRef(),B=t.useCallback(()=>{ee.current=requestAnimationFrame(()=>{if(!y.current)return;const e=y.current.getBoundingClientRect().width;let n=0,l=null;if(e-x<=0)l=-1;else{let p=!0;h.current.forEach((_,i)=>{const N=h.current[i];if(N&&N.ref&&N.ref.current){let R=N.ref.current.getBoundingClientRect().width;R+=i===0||i===h.current.length-1?4:8,i===h.current.length-1?n+R<=e-8?l=i:(i===0||p)&&(l=i-1):(n+R<=e-x&&(l=i),n<e-x&&n+R>=e-x&&(l=i-1)),p&&!_.isSpacer&&(p=!1),n+=R}})}z(l)})},[T]);t.useEffect(()=>{const e=new ResizeObserver(B);return y.current&&e.observe(y.current),()=>{cancelAnimationFrame(ee.current),e.disconnect()}},[B]),t.useEffect(()=>{t.Children.count(g)>0&&B()},[g]),Ie(()=>{B()},[B]);const te=e=>{if(P&&typeof v=="function"){const n=e.type==="keydown"&&(e.code==="Enter"||e.code==="Space");if(n&&e.target!==e.currentTarget)return;(e.type==="click"||n)&&(e.preventDefault(),v(e))}},oe=t.useRef(w),k=t.useRef();t.useEffect(()=>{typeof C=="function"&&(k.current=ae(C,60))},[C]),t.useEffect(()=>{var n,l;const e=oe.current.length!==w.length;if((f!==null||e)&&typeof k.current=="function"){oe.current=w;const p=(n=a.current)==null?void 0:n.children;let _=[],i;S&&(i=(l=E.current)==null?void 0:l.children),(p==null?void 0:p.length)>0&&(_=Array.from(p).filter((N,R)=>R<=f)),k.current({toolbarElements:_,overflowElements:i,target:y.current})}return()=>{k.current&&k.current.cancel()}},[f,w.length,S]);const ue=q,ce=Y!=="0"?{minWidth:Y,...O}:O;return b.jsxs(ue,{style:ce,className:J(ie,T&&s.hasOverflow),ref:$,slot:F,onClick:te,onKeyDown:te,tabIndex:P?0:void 0,role:P?"button":void 0,"data-sap-ui-fastnavgroup":"true",...M,children:[b.jsxs("div",{className:s.toolbar,"data-component-name":"ToolbarContent",ref:a,children:[T&&t.Children.map(U,(e,n)=>n>=f+1&&n>d-1?t.cloneElement(e,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):e),!T&&U]}),T&&b.jsx("div",{ref:W,className:s.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:b.jsx(G,{overflowPopoverRef:m,lastVisibleIndex:f,classes:s,portalContainer:c,overflowContentRef:E,numberOfAlwaysVisibleItems:d,showMoreText:se,overflowButton:H,setIsMounted:o,a11yConfig:D,children:w})})]})});K.displayName="Toolbar";try{K.displayName="Toolbar",K.__docgenInfo={description:"Horizontal container most commonly used to display buttons, labels, selects and various other input controls.\n\nThe content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.\nIt can be accessed by the user through the overflow button that opens it in a popover.\n\n__Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.\n\n__Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.",displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the content of the `Toolbar`.\n\n__Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string` or `number` to it.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:'Defines the button shown when the `Toolbar` goes into overflow.\n\n__Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.\n\n__Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.',name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}},toolbarStyle:{defaultValue:null,description:"Defines the visual style of the `Toolbar`.\n\n__Note:__ The visual styles are theme-dependent.",name:"toolbarStyle",required:!1,type:{name:"enum",value:[{value:'"Clear"'},{value:'"Standard"'},{value:'"Clear"'},{value:'"Standard"'}]}},design:{defaultValue:null,description:"Defines the `Toolbar` design.<br />\n<b>Note:</b> Design settings are theme-dependent.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'}]}},active:{defaultValue:null,description:"Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"label"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"Defines the number of items inside the toolbar which should always be visible.\n_E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._\n\n__Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},overflowPopoverRef:{defaultValue:null,description:`Exposes the React Ref of the overflow popover.
This can be useful, for example, when wanting to close the popover on click or selection of a child element.`,name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},a11yConfig:{defaultValue:null,description:'Defines internally used a11y properties.\n\n__Note:__ When setting `contentRole` of the `overflowPopover`, the `role` is set to `"None"`.',name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}},onClick:{defaultValue:null,description:"Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onOverflowChange:{defaultValue:null,description:"Fired when the content of the overflow popover has changed.",name:"onOverflowChange",required:!1,type:{name:"(event: { toolbarElements: HTMLElement[]; overflowElements: HTMLCollection; target: HTMLElement; }) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Se as O,K as T,V as a,X as b};
//# sourceMappingURL=index-c4569e27.js.map
