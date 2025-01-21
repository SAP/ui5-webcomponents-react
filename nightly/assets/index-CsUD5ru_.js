import{j as m}from"./jsx-runtime-CLpGMVip.js";import{r as e}from"./index-D23YZj_x.js";import{g as ie,c as ue}from"./utils-C9_9ShpY.js";import{c as ee}from"./clsx-B-dksMZM.js";import{B as de}from"./Button-Bn6Q5CAy.js";import{P as fe}from"./Popover-D2H5tr2x.js";import{P as pe}from"./PopupsCommon.css-BjjP0aIP.js";import{i as ve}from"./overflow-C57CDQ5m.js";import{u as _e,l as me,X as be,m as he}from"./i18n-defaults-CoZOvFer.js";import{s as ge}from"./stopPropagation-BJWsenK5.js";import{P as Ce}from"./index-DgTgpO-4.js";import{T as we}from"./index-MHemzhYS.js";import{r as qe}from"./index-DJ2M8xrO.js";import{k as xe,h as ne}from"./withWebComponent-DfVDXLfc.js";import{u as Pe}from"./useStylesheet-DNyxTWaC.js";import{d as re}from"./debounce-D7W5PopO.js";import{u as ye}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";var V=(n=>(n.Auto="Auto",n.Info="Info",n.Solid="Solid",n.Transparent="Transparent",n))(V||{}),oe=(n=>(n.Clear="Clear",n.Standard="Standard",n))(oe||{});const G=Symbol.for("@ui5/webcomponents-react/OverflowPopoverContext"),Te=e.createContext({inPopover:!1});function ae(){return globalThis[G]??(globalThis[G]=Te),globalThis[G]}function Ge(){return e.useContext(ae())}const Re=e.forwardRef((n,g)=>m.jsx("span",{ref:g,style:{flexGrow:1},className:"spacer",...n,"data-component-name":"ToolbarSpacer"}));Re.displayName="ToolbarSpacer";const Oe=xe(),ke=n=>{var W;const{lastVisibleIndex:g,classes:C,children:K,portalContainer:I,overflowContentRef:O,numberOfAlwaysVisibleItems:D,overflowButton:w,overflowPopoverRef:k,setIsMounted:H,a11yConfig:u}=n,[N,f]=e.useState(!1),d=e.useRef(null),[J,L]=ne(k),A=_e("@ui5/webcomponents-react"),U=A.getText(me);e.useEffect(()=>(H(!0),()=>{H(!1)}),[]);const X=t=>{t.stopPropagation(),f(l=>l?!1:(L.current&&(L.current.opener=t.target),!0))},Q=()=>{d.current&&(d.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},q=()=>{f(!0)},b=t=>{d.current&&(d.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),ge(t),f(!1)};e.useEffect(()=>{const t=ie("ui5-toggle-button");customElements.whenDefined(t).then(()=>{d.current&&(d.current.accessibilityAttributes={expanded:N,hasPopup:"menu"})})},[]);const p=t=>{var l;typeof((l=w==null?void 0:w.props)==null?void 0:l.onClick)=="function"&&w.props.onClick(t),t.defaultPrevented||X(t)},[Y,$]=e.useState(!1);e.useEffect(()=>{$(!0)},[]);const Z=(()=>{var t,l;return(t=u==null?void 0:u.overflowPopover)!=null&&t.contentRole?pe.None:(l=u==null?void 0:u.overflowPopover)==null?void 0:l.role})(),S=ae().Provider;let P=null;const z=K.map((t,l,v)=>{var B,_,j,x;if(l>g&&l>D-1&&e.isValidElement(t)){P===null&&(P=l);const y=(B=t==null?void 0:t.props)!=null&&B["data-accessible-name"]?"accessibleName":"aria-label";let T=A.getText(be,l+1-P,v.length-P);return(_=t==null?void 0:t.props)!=null&&_[y]&&(T+=" "+t.props[y]),(j=t==null?void 0:t.props)!=null&&j.id?e.cloneElement(t,{id:`${t.props.id}-overflow`,[y]:T}):((x=t.type)==null?void 0:x.displayName)==="ToolbarSeparator"?e.cloneElement(t,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"},"aria-label":T}):e.cloneElement(t,{[y]:T})}return null}).filter(Boolean);return m.jsxs(S,{value:{inPopover:!0},children:[w?e.cloneElement(w,{onClick:p}):m.jsx(we,{ref:d,design:de.Transparent,icon:ve,onClick:X,pressed:N,accessibleName:U,tooltip:U,"data-component-name":"ToolbarOverflowButton"}),Y&&qe.createPortal(m.jsx(Ce,{"data-component-name":"ToolbarOverflowPopover",className:ee(C.popover,Oe&&C.popoverPhone),placement:fe.Bottom,ref:J,open:N,onClose:b,onBeforeOpen:Q,onOpen:q,hideArrow:!0,accessibleRole:Z,accessibleName:A.getText(he,z.length),children:m.jsx("div",{className:C.popoverContent,ref:O,role:(W=u==null?void 0:u.overflowPopover)==null?void 0:W.contentRole,"data-component-name":"ToolbarOverflowPopoverContent",children:z})}),I??document.body)]})},Se="@layer ui5-webcomponents-react{._outerContainer_1dqv0_1{align-items:center;border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;display:flex;height:var(--_ui5wcr-ToolbarHeight);justify-content:space-between;max-width:100%;overflow:hidden;position:relative;width:100%}._hasOverflow_1dqv0_14 ._toolbar_1dqv0_15{max-width:calc(100% - 44px)}._clear_1dqv0_20{border-block-end:none}._active_1dqv0_24{cursor:pointer}._active_1dqv0_24:hover{background-color:var(--sapList_Hover_Background)}._active_1dqv0_24:focus{box-shadow:var(--_ui5wcr_Toolbar_FocusShadow);outline:var(--_ui5wcr_Toolbar_FocusOutline);outline-offset:-.1875rem}._active_1dqv0_24:active{background-color:var(--sapActiveColor)}._info_1dqv0_42{background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);height:2rem}._info_1dqv0_42._active_1dqv0_24{background-color:var(--sapInfobar_Background);color:var(--sapInfobar_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}._info_1dqv0_42._active_1dqv0_24:hover{background-color:var(--sapInfobar_Hover_Background)}._info_1dqv0_42._active_1dqv0_24:active{background-color:var(--sapInfobar_Active_Background)}._solid_1dqv0_62{background-color:var(--sapToolbar_Background)}._transparent_1dqv0_66{background-color:initial}._toolbar_1dqv0_15{align-items:center;display:flex;max-width:100%;width:100%}._toolbar_1dqv0_15>:first-child:not(.spacer){margin-inline:.5rem .25rem}._toolbar_1dqv0_15>:last-child:not(.spacer){margin-inline:.25rem .5rem}._toolbar_1dqv0_15>:not(:first-child):not(:last-child):not(.spacer){margin-inline:.25rem}._overflowButtonContainer_1dqv0_89{display:flex;margin-inline:0 .5rem}._popover_1dqv0_94[ui5-popover]::part(content){padding:0}._popoverPhone_1dqv0_100{inset-inline-start:5px!important;max-width:calc(100% - 10px);width:calc(100% - 10px)}._popoverContent_1dqv0_106{display:flex;flex-direction:column;padding:var(--_ui5wcr-ToolbarPopoverContentPadding)}._popoverContent_1dqv0_106>[ui5-button],._popoverContent_1dqv0_106>[ui5-toggle-button]{margin-block:.25rem}._popoverContent_1dqv0_106>[ui5-button]::part(button),._popoverContent_1dqv0_106>[ui5-toggle-button]::part(button){justify-content:flex-start}._popoverContent_1dqv0_106>[ui5-button][icon-only]::part(button),._popoverContent_1dqv0_106>[ui5-toggle-button][icon-only]::part(button){padding:revert}._popoverContent_1dqv0_106:last-child{margin-block-end:0}._popoverContent_1dqv0_106:first-child{margin-block-start:0}._childContainer_1dqv0_135{display:flex}}",i={outerContainer:"_outerContainer_1dqv0_1",hasOverflow:"_hasOverflow_1dqv0_14",toolbar:"_toolbar_1dqv0_15",clear:"_clear_1dqv0_20",active:"_active_1dqv0_24",info:"_info_1dqv0_42",solid:"_solid_1dqv0_62",transparent:"_transparent_1dqv0_66",overflowButtonContainer:"_overflowButtonContainer_1dqv0_89",popover:"_popover_1dqv0_94",popoverPhone:"_popoverPhone_1dqv0_100",popoverContent:"_popoverContent_1dqv0_106",childContainer:"_childContainer_1dqv0_135"};function se(n){if(!n)return 0;let g=0;return n.dataset.componentName==="ToolbarSpacer"&&(g+=n.offsetWidth),g+se(n.previousElementSibling)}const E=52,te=e.forwardRef((n,g)=>{const{children:C,toolbarStyle:K=oe.Standard,design:I=V.Auto,active:O=!1,style:D,className:w,onClick:k,slot:H,as:u="div",portalContainer:N,numberOfAlwaysVisibleItems:f=0,onOverflowChange:d,overflowPopoverRef:J,overflowButton:L,a11yConfig:A,...U}=n,X=n["data-in-object-page-title"];Pe(Se,te.displayName);const[Q,q]=ne(g),b=e.useRef([]),[p,Y]=e.useState(null),[$,Z]=e.useState(!1),S=e.useRef(null),P=e.useRef(null),z=e.useRef(null),[W,t]=e.useState("0"),l=ee(i.outerContainer,K===oe.Clear&&i.clear,O&&i.active,I===V.Solid&&i.solid,I===V.Transparent&&i.transparent,I===V.Info&&i.info,w),v=e.useMemo(()=>ue(C,10),[C]),B=e.useMemo(()=>(b.current=[],v.map((o,r)=>{var h;const a=e.createRef(),c=((h=o==null?void 0:o.type)==null?void 0:h.displayName)==="ToolbarSpacer";return b.current.push({ref:a,isSpacer:c}),c?o:m.jsx("div",{ref:a,className:i.childContainer,"data-component-name":"ToolbarChildContainer",children:o},r)})),[v,b,i.childContainer]),_=(p||p===0)&&e.Children.count(B)!==p+1&&f<e.Children.count(v);e.useEffect(()=>{let o;const r=S.current.children[f-1],a=re(()=>{var s;const c=se(r),h=(s=q.current)==null?void 0:s.matches(":dir(rtl)");t(h?`${r.offsetParent.offsetWidth-r.offsetLeft+E-c}px`:`${r.offsetLeft+r.getBoundingClientRect().width+E-c}px`)},200);return f&&_&&r&&(o=new ResizeObserver(a),o.observe(S.current)),()=>{a.cancel(),o==null||o.disconnect()}},[f,_]);const j=e.useRef(void 0),x=e.useCallback(()=>{j.current=requestAnimationFrame(()=>{if(!q.current)return;const o=q.current.getBoundingClientRect().width;let r=0,a=null;if(o-E<=0)a=-1;else{let c=!0;b.current.forEach((h,s)=>{const F=b.current[s];if(F&&F.ref&&F.ref.current){let R=F.ref.current.getBoundingClientRect().width;R+=s===0||s===b.current.length-1?4:8,s===b.current.length-1?r+R<=o-8?a=s:(s===0||c)&&(a=s-1):(r+R<=o-E&&(a=s),r<o-E&&r+R>=o-E&&(a=s-1)),c&&!h.isSpacer&&(c=!1),r+=R}})}Y(a)})},[_]);e.useEffect(()=>{const o=new ResizeObserver(x);return q.current&&o.observe(q.current),()=>{cancelAnimationFrame(j.current),o.disconnect()}},[x]),e.useEffect(()=>{e.Children.count(C)>0&&x()},[C]),ye(()=>{x()},[x]);const y=o=>{if(X&&typeof k=="function"&&k(o),O&&typeof k=="function"){const r=o.type==="keydown"&&(o.code==="Enter"||o.code==="Space");if(r&&o.target!==o.currentTarget)return;(o.type==="click"||r)&&(r&&o.preventDefault(),k(o))}},T=e.useRef(v),M=e.useRef(void 0);e.useEffect(()=>{typeof d=="function"&&(M.current=re(d,60))},[d]),e.useEffect(()=>{var r,a;const o=T.current.length!==v.length;if((p!==null||o)&&typeof M.current=="function"){T.current=v;const c=(r=S.current)==null?void 0:r.children;let h=[],s;$&&(s=(a=P.current)==null?void 0:a.children),(c==null?void 0:c.length)>0&&(h=Array.from(c).filter((F,R)=>R<=p)),M.current({toolbarElements:h,overflowElements:s,target:q.current})}return()=>{M.current&&M.current.cancel()}},[p,v.length,$]);const le=u,ce=W!=="0"?{minWidth:W,...D}:D;return m.jsxs(le,{style:ce,className:ee(l,_&&i.hasOverflow),ref:Q,slot:H,onClick:y,onKeyDown:y,tabIndex:O?0:void 0,role:O?"button":void 0,"data-sap-ui-fastnavgroup":"true","data-component-name":"Toolbar",...U,children:[m.jsxs("div",{className:i.toolbar,"data-component-name":"ToolbarContent",ref:S,children:[_&&e.Children.map(B,(o,r)=>r>=p+1&&r>f-1?e.cloneElement(o,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):o),!_&&B]}),_&&m.jsx("div",{ref:z,className:i.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:m.jsx(ke,{overflowPopoverRef:J,lastVisibleIndex:p,classes:i,portalContainer:N,overflowContentRef:P,numberOfAlwaysVisibleItems:f,overflowButton:L,setIsMounted:Z,a11yConfig:A,children:v})})]})});te.displayName="Toolbar";te._displayName="UI5WCRToolbar";export{Re as T,te as a,V as b,oe as c,Ge as u};
