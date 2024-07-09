import{j as b,u as de}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{c as Y}from"./clsx-B-dksMZM.js";import{r as o}from"./index-BQ1WsyJB.js";import{u as ce,b as pe}from"./i18n-defaults-C7jtn0Rp.js";import{g as ve,f as fe}from"./utils-BXNPXA0w.js";import{B as me}from"./Button-B86xSW8p.js";import{P as he}from"./Popover-By40N46R.js";import{P as be}from"./PopupsCommon.css-CUeoloLy.js";import{d as ae,B as _e}from"./withWebComponent-BbH_5MIb.js";import"./overflow-BZNaBJbw.js";import{r as ye}from"./index-BLtMylri.js";import{s as ge}from"./stopPropagation-BJWsenK5.js";import{T as we}from"./index-BKbrFBXe.js";import{P as Te}from"./index-DsEONvyE.js";import{d as Ce}from"./Keys-F_3Gvx0K.js";import{u as qe}from"./useStylesheet-BB85D3ff.js";import{d as te}from"./debounce-D7W5PopO.js";var B=(n=>(n.Auto="Auto",n.Info="Info",n.Solid="Solid",n.Transparent="Transparent",n))(B||{}),Q=(n=>(n.Clear="Clear",n.Standard="Standard",n))(Q||{});const Re="overflow",F=Symbol.for("@ui5/webcomponents-react/OverflowPopoverContext"),Pe=o.createContext({inPopover:!1});function ne(){return globalThis[F]??(globalThis[F]=Pe),globalThis[F]}function Ue(){return o.useContext(ne())}const Ve=Ce(),A=n=>{var T;const{lastVisibleIndex:R,classes:_,children:J,portalContainer:S,overflowContentRef:P,numberOfAlwaysVisibleItems:D,showMoreText:M,overflowButton:v,overflowPopoverRef:X,setIsMounted:W,a11yConfig:d}=n,[c,w]=o.useState(!1),f=o.useRef(null),[z,j]=ae(X);o.useEffect(()=>(W(!0),()=>{W(!1)}),[]);const H=t=>{t.stopPropagation(),w(s=>s?!1:(j.current&&(j.current.opener=t.target),!0))},U=()=>{f.current&&(f.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},y=()=>{w(!0)},m=t=>{f.current&&(f.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),ge(t),w(!1)};o.useEffect(()=>{const t=ve("ui5-toggle-button");customElements.whenDefined(t).then(()=>{f.current&&(f.current.accessibilityAttributes={expanded:c,hasPopup:"menu"})})},[]);const p=t=>{var s;typeof((s=v==null?void 0:v.props)==null?void 0:s.onClick)=="function"&&v.props.onClick(t),t.defaultPrevented||H(t)},$=_e(),L=(()=>{var t,s;return(t=d==null?void 0:d.overflowPopover)!=null&&t.contentRole?be.None:(s=d==null?void 0:d.overflowPopover)==null?void 0:s.role})(),G=ne().Provider;return b.jsxs(G,{value:{inPopover:!0},children:[v?o.cloneElement(v,{onClick:p}):b.jsx(we,{ref:f,design:me.Transparent,icon:Re,onClick:H,pressed:c,accessibleName:M,tooltip:M,"data-component-name":"ToolbarOverflowButton"}),$&&ye.createPortal(b.jsx(Te,{"data-component-name":"ToolbarOverflowPopover",className:Y(_.popover,Ve&&_.popoverPhone),placement:he.Bottom,ref:z,open:c,onClose:m,onBeforeOpen:U,onOpen:y,hideArrow:!0,accessibleRole:L,children:b.jsx("div",{className:_.popoverContent,ref:P,role:(T=d==null?void 0:d.overflowPopover)==null?void 0:T.contentRole,"data-component-name":"ToolbarOverflowPopoverContent",children:J.map((t,s)=>{var x,E;return s>R&&s>D-1?(x=t==null?void 0:t.props)!=null&&x.id?o.cloneElement(t,{id:`${t.props.id}-overflow`}):((E=t.type)==null?void 0:E.displayName)==="ToolbarSeparator"?o.cloneElement(t,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"}}):t:null})})}),S??document.body)]})};try{A.displayName="OverflowPopover",A.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<...>>"}},setIsMounted:{defaultValue:null,description:"",name:"setIsMounted",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},a11yConfig:{defaultValue:null,description:"",name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}}}}}catch{}try{A.displayName="OverflowPopover",A.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<...>>"}},setIsMounted:{defaultValue:null,description:"",name:"setIsMounted",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},a11yConfig:{defaultValue:null,description:"",name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}}}}}catch{}const Ne={packageName:"@ui5/webcomponents-react",fileName:"Toolbar.module.css",content:".Toolbar_outerContainer_1dqv0_1{align-items:center;border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;display:flex;height:var(--_ui5wcr-ToolbarHeight);justify-content:space-between;max-width:100%;overflow:hidden;position:relative;width:100%}.Toolbar_hasOverflow_1dqv0_14 .Toolbar_toolbar_1dqv0_15{max-width:calc(100% - 44px)}.Toolbar_clear_1dqv0_20{border-block-end:none}.Toolbar_active_1dqv0_24{cursor:pointer}.Toolbar_active_1dqv0_24:hover{background-color:var(--sapList_Hover_Background)}.Toolbar_active_1dqv0_24:focus{box-shadow:var(--_ui5wcr_Toolbar_FocusShadow);outline:var(--_ui5wcr_Toolbar_FocusOutline);outline-offset:-.1875rem}.Toolbar_active_1dqv0_24:active{background-color:var(--sapActiveColor)}.Toolbar_info_1dqv0_42{background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);height:2rem}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24{background-color:var(--sapInfobar_Background);color:var(--sapInfobar_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:hover{background-color:var(--sapInfobar_Hover_Background)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:active{background-color:var(--sapInfobar_Active_Background)}.Toolbar_solid_1dqv0_62{background-color:var(--sapToolbar_Background)}.Toolbar_transparent_1dqv0_66{background-color:initial}.Toolbar_toolbar_1dqv0_15{align-items:center;display:flex;max-width:100%;width:100%}.Toolbar_toolbar_1dqv0_15>:first-child:not(.spacer){margin-inline:.5rem .25rem}.Toolbar_toolbar_1dqv0_15>:last-child:not(.spacer){margin-inline:.25rem .5rem}.Toolbar_toolbar_1dqv0_15>:not(:first-child):not(:last-child):not(.spacer){margin-inline:.25rem}.Toolbar_overflowButtonContainer_1dqv0_89{display:flex;margin-inline:0 .5rem}.Toolbar_popover_1dqv0_94[ui5-popover]::part(content){padding:0}.Toolbar_popoverPhone_1dqv0_100{inset-inline-start:5px!important;max-width:calc(100% - 10px);width:calc(100% - 10px)}.Toolbar_popoverContent_1dqv0_106{display:flex;flex-direction:column;padding:var(--_ui5wcr-ToolbarPopoverContentPadding)}.Toolbar_popoverContent_1dqv0_106>[ui5-button],.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]{margin-block:.25rem}.Toolbar_popoverContent_1dqv0_106>[ui5-button]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]::part(button){justify-content:flex-start}.Toolbar_popoverContent_1dqv0_106>[ui5-button][icon-only]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button][icon-only]::part(button){padding:revert}.Toolbar_popoverContent_1dqv0_106:last-child{margin-block-end:0}.Toolbar_popoverContent_1dqv0_106:first-child{margin-block-start:0}.Toolbar_childContainer_1dqv0_135{display:flex}"},u={outerContainer:"Toolbar_outerContainer_1dqv0_1",hasOverflow:"Toolbar_hasOverflow_1dqv0_14",toolbar:"Toolbar_toolbar_1dqv0_15",clear:"Toolbar_clear_1dqv0_20",active:"Toolbar_active_1dqv0_24",info:"Toolbar_info_1dqv0_42",solid:"Toolbar_solid_1dqv0_62",transparent:"Toolbar_transparent_1dqv0_66",overflowButtonContainer:"Toolbar_overflowButtonContainer_1dqv0_89",popover:"Toolbar_popover_1dqv0_94",popoverPhone:"Toolbar_popoverPhone_1dqv0_100",popoverContent:"Toolbar_popoverContent_1dqv0_106",childContainer:"Toolbar_childContainer_1dqv0_135"};function le(n){if(!n)return 0;let R=0;return n.dataset.componentName==="ToolbarSpacer"&&(R+=n.offsetWidth),R+le(n.previousElementSibling)}const V=52,N=o.forwardRef((n,R)=>{const{children:_,toolbarStyle:J=Q.Standard,design:S=B.Auto,active:P=!1,style:D,className:M,onClick:v,slot:X,as:W="div",portalContainer:d,numberOfAlwaysVisibleItems:c=0,onOverflowChange:w,overflowPopoverRef:f,overflowButton:z,a11yConfig:j,...H}=n;qe(Ne,N.displayName);const[U,y]=ae(R),m=o.useRef([]),[p,$]=o.useState(null),[L,G]=o.useState(!1),T=o.useRef(null),t=o.useRef(null),s=o.useRef(null),[x,E]=o.useState("0"),re=ce("@ui5/webcomponents-react").getText(pe),ie=Y(u.outerContainer,J===Q.Clear&&u.clear,P&&u.active,S===B.Solid&&u.solid,S===B.Transparent&&u.transparent,S===B.Info&&u.info,M),g=o.useMemo(()=>fe(_,10),[_]),K=o.useMemo(()=>(m.current=[],g.map((e,a)=>{var h;const l=o.createRef(),i=((h=e==null?void 0:e.type)==null?void 0:h.displayName)==="ToolbarSpacer";return m.current.push({ref:l,isSpacer:i}),i?e:b.jsx("div",{ref:l,className:u.childContainer,"data-component-name":"ToolbarChildContainer",children:e},a)})),[g,m,u.childContainer]),C=(p||p===0)&&o.Children.count(K)!==p+1&&c<o.Children.count(g);o.useEffect(()=>{let e;const a=T.current.children[c-1],l=te(()=>{var r;const i=le(a),h=(r=y.current)==null?void 0:r.matches(":dir(rtl)");E(h?`${a.offsetParent.offsetWidth-a.offsetLeft+V-i}px`:`${a.offsetLeft+a.getBoundingClientRect().width+V-i}px`)},200);return c&&C&&a&&(e=new ResizeObserver(l),e.observe(T.current)),()=>{l.cancel(),e==null||e.disconnect()}},[c,C]);const Z=o.useRef(void 0),k=o.useCallback(()=>{Z.current=requestAnimationFrame(()=>{if(!y.current)return;const e=y.current.getBoundingClientRect().width;let a=0,l=null;if(e-V<=0)l=-1;else{let i=!0;m.current.forEach((h,r)=>{const O=m.current[r];if(O&&O.ref&&O.ref.current){let q=O.ref.current.getBoundingClientRect().width;q+=r===0||r===m.current.length-1?4:8,r===m.current.length-1?a+q<=e-8?l=r:(r===0||i)&&(l=r-1):(a+q<=e-V&&(l=r),a<e-V&&a+q>=e-V&&(l=r-1)),i&&!h.isSpacer&&(i=!1),a+=q}})}$(l)})},[C]);o.useEffect(()=>{const e=new ResizeObserver(k);return y.current&&e.observe(y.current),()=>{cancelAnimationFrame(Z.current),e.disconnect()}},[k]),o.useEffect(()=>{o.Children.count(_)>0&&k()},[_]),de(()=>{k()},[k]);const ee=e=>{if(P&&typeof v=="function"){const a=e.type==="keydown"&&(e.code==="Enter"||e.code==="Space");if(a&&e.target!==e.currentTarget)return;(e.type==="click"||a)&&(a&&e.preventDefault(),v(e))}},oe=o.useRef(g),I=o.useRef(void 0);o.useEffect(()=>{typeof w=="function"&&(I.current=te(w,60))},[w]),o.useEffect(()=>{var a,l;const e=oe.current.length!==g.length;if((p!==null||e)&&typeof I.current=="function"){oe.current=g;const i=(a=T.current)==null?void 0:a.children;let h=[],r;L&&(r=(l=t.current)==null?void 0:l.children),(i==null?void 0:i.length)>0&&(h=Array.from(i).filter((O,q)=>q<=p)),I.current({toolbarElements:h,overflowElements:r,target:y.current})}return()=>{I.current&&I.current.cancel()}},[p,g.length,L]);const se=W,ue=x!=="0"?{minWidth:x,...D}:D;return b.jsxs(se,{style:ue,className:Y(ie,C&&u.hasOverflow),ref:U,slot:X,onClick:ee,onKeyDown:ee,tabIndex:P?0:void 0,role:P?"button":void 0,"data-sap-ui-fastnavgroup":"true",...H,children:[b.jsxs("div",{className:u.toolbar,"data-component-name":"ToolbarContent",ref:T,children:[C&&o.Children.map(K,(e,a)=>a>=p+1&&a>c-1?o.cloneElement(e,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):e),!C&&K]}),C&&b.jsx("div",{ref:s,className:u.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:b.jsx(A,{overflowPopoverRef:f,lastVisibleIndex:p,classes:u,portalContainer:d,overflowContentRef:t,numberOfAlwaysVisibleItems:c,showMoreText:re,overflowButton:z,setIsMounted:G,a11yConfig:j,children:g})})]})});N.displayName="Toolbar";try{N.displayName="Toolbar",N.__docgenInfo={description:"\n__Note:__ The `Toolbar` component may be replaced by the `ui5-toolbar` web-component (currently available as `ToolbarV2`) with our next major release. If you only need to pass components supported by `ToolbarV2` then please consider using `ToolbarV2` instead of this component.\n\n___\n\nHorizontal container most commonly used to display buttons, labels, selects and various other input controls.\n\nThe content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.\nIt can be accessed by the user through the overflow button that opens it in a popover.\n\n__Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.\n\n__Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.",displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the content of the `Toolbar`.\n\n__Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string`, `number` or a React Portal to it.\n\n__Note:__ Only components displayed inside the Toolbar are supported as children, i.e. elements positioned outside the normal flow of the document (like dialogs or popovers), can cause undesired behavior.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:'Defines the button shown when the `Toolbar` goes into overflow.\n\n__Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.\n\n__Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.',name:"overflowButton",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<...>>"}},toolbarStyle:{defaultValue:null,description:"Defines the visual style of the `Toolbar`.\n\n__Note:__ The visual styles are theme-dependent.",name:"toolbarStyle",required:!1,type:{name:"enum",value:[{value:'"Clear"'},{value:'"Standard"'},{value:'"Clear"'},{value:'"Standard"'}]}},design:{defaultValue:null,description:"Defines the `Toolbar` design.<br />\n<b>Note:</b> Design settings are theme-dependent.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Info"'},{value:'"Solid"'}]}},active:{defaultValue:null,description:"Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"footer"'},{value:'"header"'},{value:'"label"'},{value:'"progress"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"Defines the number of items inside the toolbar which should always be visible.\n_E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._\n\n__Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},overflowPopoverRef:{defaultValue:null,description:`Exposes the React Ref of the overflow popover.
This can be useful, for example, when wanting to close the popover on click or selection of a child element.`,name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},a11yConfig:{defaultValue:null,description:'Defines internally used a11y properties.\n\n__Note:__ When setting `contentRole` of the `overflowPopover`, the `role` is set to `"None"`.',name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}},onClick:{defaultValue:null,description:"Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onOverflowChange:{defaultValue:null,description:"Fired when the content of the overflow popover has changed.",name:"onOverflowChange",required:!1,type:{name:"(event: { toolbarElements: HTMLElement[]; overflowElements: HTMLCollection; target: HTMLElement; }) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{N.displayName="Toolbar",N.__docgenInfo={description:"\n__Note:__ The `Toolbar` component may be replaced by the `ui5-toolbar` web-component (currently available as `ToolbarV2`) with our next major release. If you only need to pass components supported by `ToolbarV2` then please consider using `ToolbarV2` instead of this component.\n\n___\n\nHorizontal container most commonly used to display buttons, labels, selects and various other input controls.\n\nThe content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.\nIt can be accessed by the user through the overflow button that opens it in a popover.\n\n__Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.\n\n__Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.",displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the content of the `Toolbar`.\n\n__Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string`, `number` or a React Portal to it.\n\n__Note:__ Only components displayed inside the Toolbar are supported as children, i.e. elements positioned outside the normal flow of the document (like dialogs or popovers), can cause undesired behavior.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:'Defines the button shown when the `Toolbar` goes into overflow.\n\n__Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.\n\n__Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.',name:"overflowButton",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<...>>"}},toolbarStyle:{defaultValue:null,description:"Defines the visual style of the `Toolbar`.\n\n__Note:__ The visual styles are theme-dependent.",name:"toolbarStyle",required:!1,type:{name:"enum",value:[{value:'"Clear"'},{value:'"Standard"'},{value:'"Clear"'},{value:'"Standard"'}]}},design:{defaultValue:null,description:"Defines the `Toolbar` design.<br />\n<b>Note:</b> Design settings are theme-dependent.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Info"'},{value:'"Solid"'}]}},active:{defaultValue:null,description:"Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"footer"'},{value:'"header"'},{value:'"label"'},{value:'"progress"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"Defines the number of items inside the toolbar which should always be visible.\n_E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._\n\n__Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},overflowPopoverRef:{defaultValue:null,description:`Exposes the React Ref of the overflow popover.
This can be useful, for example, when wanting to close the popover on click or selection of a child element.`,name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},a11yConfig:{defaultValue:null,description:'Defines internally used a11y properties.\n\n__Note:__ When setting `contentRole` of the `overflowPopover`, the `role` is set to `"None"`.',name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}},onClick:{defaultValue:null,description:"Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onOverflowChange:{defaultValue:null,description:"Fired when the content of the overflow popover has changed.",name:"onOverflowChange",required:!1,type:{name:"(event: { toolbarElements: HTMLElement[]; overflowElements: HTMLCollection; target: HTMLElement; }) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{N as T,B as a,Q as b,Ue as u};
