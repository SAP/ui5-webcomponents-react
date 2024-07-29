import{j as v,u as de}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{r as o}from"./index-ClU-Tc1p.js";import{u as fe,b as ve}from"./i18n-defaults-BCbbGYDh.js";import{g as me,f as _e}from"./utils-BHgxP_Sc.js";import{c as Z}from"./clsx-B-dksMZM.js";import{B as be}from"./Button-Bn9nox5u.js";import{P as he}from"./Popover-ueRYOmZP.js";import{P as ge}from"./PopupsCommon.css-T1OzgQOS.js";import{i as Te}from"./overflow-DLe4nNcG.js";import{d as ae,z as we}from"./withWebComponent-Bw_l6Ewh.js";import{s as ye}from"./stopPropagation-BJWsenK5.js";import{r as Ce}from"./index-C3ZJCerc.js";import{d as qe}from"./Keys-F_3Gvx0K.js";import{T as Re}from"./index-8vMk3joV.js";import{P as Pe}from"./index-Di_V9a9c.js";import{u as xe}from"./useStylesheet-waKyCe7Y.js";import{d as ne}from"./debounce-D7W5PopO.js";var E=(t=>(t.Auto="Auto",t.Info="Info",t.Solid="Solid",t.Transparent="Transparent",t))(E||{}),Y=(t=>(t.Clear="Clear",t.Standard="Standard",t))(Y||{});const z=Symbol.for("@ui5/webcomponents-react/OverflowPopoverContext"),Ie=o.createContext({inPopover:!1});function le(){return globalThis[z]??(globalThis[z]=Ie),globalThis[z]}function Ge(){return o.useContext(le())}const V=o.forwardRef((t,h)=>v.jsx("span",{ref:h,style:{flexGrow:1},className:"spacer",...t,"data-component-name":"ToolbarSpacer"}));V.displayName="ToolbarSpacer";try{V.displayName="ToolbarSpacer",V.__docgenInfo={description:"Adds horizontal space between the items used within a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"ToolbarSpacer",props:{}}}catch{}try{V.displayName="ToolbarSpacer",V.__docgenInfo={description:"Adds horizontal space between the items used within a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"ToolbarSpacer",props:{}}}catch{}const Ne=qe(),k=t=>{var H;const{lastVisibleIndex:h,classes:g,children:J,portalContainer:I,overflowContentRef:P,numberOfAlwaysVisibleItems:A,showMoreText:M,overflowButton:p,overflowPopoverRef:X,setIsMounted:D,a11yConfig:u}=t,[d,y]=o.useState(!1),m=o.useRef(null),[U,W]=ae(X);o.useEffect(()=>(D(!0),()=>{D(!1)}),[]);const j=r=>{r.stopPropagation(),y(s=>s?!1:(W.current&&(W.current.opener=r.target),!0))},$=()=>{m.current&&(m.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},G=()=>{y(!0)},T=r=>{m.current&&(m.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),ye(r),y(!1)};o.useEffect(()=>{const r=me("ui5-toggle-button");customElements.whenDefined(r).then(()=>{m.current&&(m.current.accessibilityAttributes={expanded:d,hasPopup:"menu"})})},[]);const _=r=>{var s;typeof((s=p==null?void 0:p.props)==null?void 0:s.onClick)=="function"&&p.props.onClick(r),r.defaultPrevented||j(r)},f=we(),K=(()=>{var r,s;return(r=u==null?void 0:u.overflowPopover)!=null&&r.contentRole?ge.None:(s=u==null?void 0:u.overflowPopover)==null?void 0:s.role})(),F=le().Provider;return v.jsxs(F,{value:{inPopover:!0},children:[p?o.cloneElement(p,{onClick:_}):v.jsx(Re,{ref:m,design:be.Transparent,icon:Te,onClick:j,pressed:d,accessibleName:M,tooltip:M,"data-component-name":"ToolbarOverflowButton"}),f&&Ce.createPortal(v.jsx(Pe,{"data-component-name":"ToolbarOverflowPopover",className:Z(g.popover,Ne&&g.popoverPhone),placement:he.Bottom,ref:U,open:d,onClose:T,onBeforeOpen:$,onOpen:G,hideArrow:!0,accessibleRole:K,children:v.jsx("div",{className:g.popoverContent,ref:P,role:(H=u==null?void 0:u.overflowPopover)==null?void 0:H.contentRole,"data-component-name":"ToolbarOverflowPopoverContent",children:J.map((r,s)=>{var L,N;return s>h&&s>A-1?(L=r==null?void 0:r.props)!=null&&L.id?o.cloneElement(r,{id:`${r.props.id}-overflow`}):((N=r.type)==null?void 0:N.displayName)==="ToolbarSeparator"?o.cloneElement(r,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"}}):r:null})})}),I??document.body)]})};try{k.displayName="OverflowPopover",k.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>>"}},setIsMounted:{defaultValue:null,description:"",name:"setIsMounted",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},a11yConfig:{defaultValue:null,description:"",name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}}}}}catch{}try{k.displayName="OverflowPopover",k.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>>"}},setIsMounted:{defaultValue:null,description:"",name:"setIsMounted",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},a11yConfig:{defaultValue:null,description:"",name:"a11yConfig",required:!1,type:{name:'{ overflowPopover?: { role?: "None" | PopupAccessibleRole | "Dialog" | "AlertDialog"; contentRole?: AriaRole; }; }'}}}}}catch{}const Oe={packageName:"@ui5/webcomponents-react-compat",fileName:"Toolbar.module.css",content:".Toolbar_outerContainer_1dqv0_1{align-items:center;border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;display:flex;height:var(--_ui5wcr-ToolbarHeight);justify-content:space-between;max-width:100%;overflow:hidden;position:relative;width:100%}.Toolbar_hasOverflow_1dqv0_14 .Toolbar_toolbar_1dqv0_15{max-width:calc(100% - 44px)}.Toolbar_clear_1dqv0_20{border-block-end:none}.Toolbar_active_1dqv0_24{cursor:pointer}.Toolbar_active_1dqv0_24:hover{background-color:var(--sapList_Hover_Background)}.Toolbar_active_1dqv0_24:focus{box-shadow:var(--_ui5wcr_Toolbar_FocusShadow);outline:var(--_ui5wcr_Toolbar_FocusOutline);outline-offset:-.1875rem}.Toolbar_active_1dqv0_24:active{background-color:var(--sapActiveColor)}.Toolbar_info_1dqv0_42{background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);height:2rem}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24{background-color:var(--sapInfobar_Background);color:var(--sapInfobar_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:hover{background-color:var(--sapInfobar_Hover_Background)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:active{background-color:var(--sapInfobar_Active_Background)}.Toolbar_solid_1dqv0_62{background-color:var(--sapToolbar_Background)}.Toolbar_transparent_1dqv0_66{background-color:initial}.Toolbar_toolbar_1dqv0_15{align-items:center;display:flex;max-width:100%;width:100%}.Toolbar_toolbar_1dqv0_15>:first-child:not(.spacer){margin-inline:.5rem .25rem}.Toolbar_toolbar_1dqv0_15>:last-child:not(.spacer){margin-inline:.25rem .5rem}.Toolbar_toolbar_1dqv0_15>:not(:first-child):not(:last-child):not(.spacer){margin-inline:.25rem}.Toolbar_overflowButtonContainer_1dqv0_89{display:flex;margin-inline:0 .5rem}.Toolbar_popover_1dqv0_94[ui5-popover]::part(content){padding:0}.Toolbar_popoverPhone_1dqv0_100{inset-inline-start:5px!important;max-width:calc(100% - 10px);width:calc(100% - 10px)}.Toolbar_popoverContent_1dqv0_106{display:flex;flex-direction:column;padding:var(--_ui5wcr-ToolbarPopoverContentPadding)}.Toolbar_popoverContent_1dqv0_106>[ui5-button],.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]{margin-block:.25rem}.Toolbar_popoverContent_1dqv0_106>[ui5-button]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]::part(button){justify-content:flex-start}.Toolbar_popoverContent_1dqv0_106>[ui5-button][icon-only]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button][icon-only]::part(button){padding:revert}.Toolbar_popoverContent_1dqv0_106:last-child{margin-block-end:0}.Toolbar_popoverContent_1dqv0_106:first-child{margin-block-start:0}.Toolbar_childContainer_1dqv0_135{display:flex}"},c={outerContainer:"Toolbar_outerContainer_1dqv0_1",hasOverflow:"Toolbar_hasOverflow_1dqv0_14",toolbar:"Toolbar_toolbar_1dqv0_15",clear:"Toolbar_clear_1dqv0_20",active:"Toolbar_active_1dqv0_24",info:"Toolbar_info_1dqv0_42",solid:"Toolbar_solid_1dqv0_62",transparent:"Toolbar_transparent_1dqv0_66",overflowButtonContainer:"Toolbar_overflowButtonContainer_1dqv0_89",popover:"Toolbar_popover_1dqv0_94",popoverPhone:"Toolbar_popoverPhone_1dqv0_100",popoverContent:"Toolbar_popoverContent_1dqv0_106",childContainer:"Toolbar_childContainer_1dqv0_135"};function ie(t){if(!t)return 0;let h=0;return t.dataset.componentName==="ToolbarSpacer"&&(h+=t.offsetWidth),h+ie(t.previousElementSibling)}const x=52,R=o.forwardRef((t,h)=>{const{children:g,toolbarStyle:J=Y.Standard,design:I=E.Auto,active:P=!1,style:A,className:M,onClick:p,slot:X,as:D="div",portalContainer:u,numberOfAlwaysVisibleItems:d=0,onOverflowChange:y,overflowPopoverRef:m,overflowButton:U,a11yConfig:W,...j}=t,$=t["data-in-object-page-title"];xe(Oe,R.displayName);const[G,T]=ae(h),_=o.useRef([]),[f,K]=o.useState(null),[F,H]=o.useState(!1),r=o.useRef(null),s=o.useRef(null),L=o.useRef(null),[N,ee]=o.useState("0"),se=fe("@ui5/webcomponents-react").getText(ve),ce=Z(c.outerContainer,J===Y.Clear&&c.clear,P&&c.active,I===E.Solid&&c.solid,I===E.Transparent&&c.transparent,I===E.Info&&c.info,M),w=o.useMemo(()=>_e(g,10),[g]),Q=o.useMemo(()=>(_.current=[],w.map((e,n)=>{var b;const a=o.createRef(),i=((b=e==null?void 0:e.type)==null?void 0:b.displayName)==="ToolbarSpacer";return _.current.push({ref:a,isSpacer:i}),i?e:v.jsx("div",{ref:a,className:c.childContainer,"data-component-name":"ToolbarChildContainer",children:e},n)})),[w,_,c.childContainer]),C=(f||f===0)&&o.Children.count(Q)!==f+1&&d<o.Children.count(w);o.useEffect(()=>{let e;const n=r.current.children[d-1],a=ne(()=>{var l;const i=ie(n),b=(l=T.current)==null?void 0:l.matches(":dir(rtl)");ee(b?`${n.offsetParent.offsetWidth-n.offsetLeft+x-i}px`:`${n.offsetLeft+n.getBoundingClientRect().width+x-i}px`)},200);return d&&C&&n&&(e=new ResizeObserver(a),e.observe(r.current)),()=>{a.cancel(),e==null||e.disconnect()}},[d,C]);const oe=o.useRef(void 0),O=o.useCallback(()=>{oe.current=requestAnimationFrame(()=>{if(!T.current)return;const e=T.current.getBoundingClientRect().width;let n=0,a=null;if(e-x<=0)a=-1;else{let i=!0;_.current.forEach((b,l)=>{const B=_.current[l];if(B&&B.ref&&B.ref.current){let q=B.ref.current.getBoundingClientRect().width;q+=l===0||l===_.current.length-1?4:8,l===_.current.length-1?n+q<=e-8?a=l:(l===0||i)&&(a=l-1):(n+q<=e-x&&(a=l),n<e-x&&n+q>=e-x&&(a=l-1)),i&&!b.isSpacer&&(i=!1),n+=q}})}K(a)})},[C]);o.useEffect(()=>{const e=new ResizeObserver(O);return T.current&&e.observe(T.current),()=>{cancelAnimationFrame(oe.current),e.disconnect()}},[O]),o.useEffect(()=>{o.Children.count(g)>0&&O()},[g]),de(()=>{O()},[O]);const te=e=>{if($&&typeof p=="function"&&p(e),P&&typeof p=="function"){const n=e.type==="keydown"&&(e.code==="Enter"||e.code==="Space");if(n&&e.target!==e.currentTarget)return;(e.type==="click"||n)&&(n&&e.preventDefault(),p(e))}},re=o.useRef(w),S=o.useRef(void 0);o.useEffect(()=>{typeof y=="function"&&(S.current=ne(y,60))},[y]),o.useEffect(()=>{var n,a;const e=re.current.length!==w.length;if((f!==null||e)&&typeof S.current=="function"){re.current=w;const i=(n=r.current)==null?void 0:n.children;let b=[],l;F&&(l=(a=s.current)==null?void 0:a.children),(i==null?void 0:i.length)>0&&(b=Array.from(i).filter((B,q)=>q<=f)),S.current({toolbarElements:b,overflowElements:l,target:T.current})}return()=>{S.current&&S.current.cancel()}},[f,w.length,F]);const pe=D,ue=N!=="0"?{minWidth:N,...A}:A;return v.jsxs(pe,{style:ue,className:Z(ce,C&&c.hasOverflow),ref:G,slot:X,onClick:te,onKeyDown:te,tabIndex:P?0:void 0,role:P?"button":void 0,"data-sap-ui-fastnavgroup":"true","data-component-name":"Toolbar",...j,children:[v.jsxs("div",{className:c.toolbar,"data-component-name":"ToolbarContent",ref:r,children:[C&&o.Children.map(Q,(e,n)=>n>=f+1&&n>d-1?o.cloneElement(e,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):e),!C&&Q]}),C&&v.jsx("div",{ref:L,className:c.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:v.jsx(k,{overflowPopoverRef:m,lastVisibleIndex:f,classes:c,portalContainer:u,overflowContentRef:s,numberOfAlwaysVisibleItems:d,showMoreText:se,overflowButton:U,setIsMounted:H,a11yConfig:W,children:w})})]})});R.displayName="Toolbar";R._displayName="UI5WCRToolbar";try{R.displayName="Toolbar",R.__docgenInfo={description:"Horizontal container most commonly used to display buttons, labels, selects and various other input controls.\n\nThe content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.\nIt can be accessed by the user through the overflow button that opens it in a popover.\n\n__Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.\n\n__Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.",displayName:"Toolbar",props:{}}}catch{}try{R.displayName="Toolbar",R.__docgenInfo={description:"Horizontal container most commonly used to display buttons, labels, selects and various other input controls.\n\nThe content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.\nIt can be accessed by the user through the overflow button that opens it in a popover.\n\n__Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.\n\n__Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.",displayName:"Toolbar",props:{}}}catch{}export{V as T,R as a,E as b,Y as c,Ge as u};
