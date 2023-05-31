import{j as e}from"./jsx-runtime-5926aa06.js";import{r as n}from"./index-ebeaab24.js";import{D as Ba}from"./index-d8fdd889.js";import{D as Fa,a as wa}from"./index-e9e9619c.js";import{k as Lt}from"./UI5Element-784c80b7.js";import{h as qe}from"./Icons-e56d104a.js";import{c as $e}from"./clsx.m-1229b3e0.js";import{c as Ye}from"./react-jss.esm-022ab528.js";import{a as Wt}from"./addCustomCSSWithScoping-0ab55180.js";import{B as Sa}from"./index-22917797.js";import{L as Q}from"./index-9f48c346.js";import{F as k,b as ja,a as Je}from"./index-4c0ab015.js";import{T as Z}from"./ThemingParameters-7e2e4e30.js";import{T as Tt,d as Bt,a as Ft,b as Da,c as wt}from"./index-92331404.js";import{I as Ut}from"./index-53a02167.js";import{a as _a}from"./BusyIndicator-9f101f31.js";import{T as oe}from"./index-562e1433.js";import{V as Ra,a as St}from"./VariantItem-7cfcd7d8.js";import{e as U}from"./index-99d317a4.js";import{u as Ht,a3 as ka,C as Ea,a4 as Oa,a5 as qa,a6 as zt,a7 as Aa,a8 as Na,a9 as Ga,aa as Va,ab as Ma,ac as Pa,ad as La,ae as Wa,af as Ua,ag as Ha,ah as za,ai as $a,aj as Ka,ak as Ya,al as Ja,am as Xa,an as Qa,ao as Za}from"./i18n-defaults-b56a0b3b.js";import{T as $t,b as Kt}from"./index-bee28da6.js";import{T as en}from"./index-20ee0a83.js";import{T as Yt}from"./index-d512ac31.js";import{g as tn}from"./group-2-fb813065.js";import{s as an}from"./search-5ac7b830.js";import{r as nn}from"./index-9c09ad76.js";import{h as rn}from"./withWebComponent-d61dcbbc.js";import{s as ln}from"./stopPropagation-da74d54e.js";import{b as on}from"./CssSizeVariables-bd372cde.js";import{c as Jt,d as sn}from"./Device-208919c6.js";import{D as dn}from"./index-d3654a75.js";import{B as jt}from"./index-18978799.js";import{T as Xt}from"./index-d139d44d.js";import{S as se}from"./index-2ad76afe.js";import{O as c}from"./index-8676336d.js";import{S as cn,a as Dt}from"./index-1c3bacc3.js";import{I as Ae}from"./index-52b9249d.js";import{P as un}from"./index-b3d9fa9b.js";import{B as _t}from"./Bar-5072b9d6.js";import{T as mn}from"./Title-693a182d.js";import{B as M}from"./index-e4f8684b.js";import{a as P}from"./Button-0cdf0df4.js";import{d as ze}from"./debounce-ab129990.js";import{S as Xe}from"./index-cfaaab7a.js";import{R as pn}from"./index-27827a2c.js";import{M as Qt}from"./index-72df337c.js";import{T as H}from"./index-f1d75302.js";import{S as Zt}from"./index-a5c2e0b7.js";import{C as ea,a as z}from"./index-b3deb0f2.js";import{D as Qe}from"./index-e17942b6.js";import{D as hn}from"./index-60a0fb4c.js";import{M as Ze,a as B}from"./index-0f91d6bf.js";const fn={outerContainer:{background:Z.sapObjectHeader_Background,"--_ui5_input_width":"100%"},outerContainerWithToolbar:{paddingBlock:"0.5rem 1px",paddingInline:"2rem",boxShadow:Z.sapContent_HeaderShadow},filterBarHeader:{alignItems:"center",display:"flex",background:Z.sapObjectHeader_Background,minHeight:"3rem",paddingBlockEnd:"0.5rem",boxShadow:"none",flexWrap:"wrap",'& [data-component-name="ToolbarContent"] > *:first-child':{marginInlineStart:0}},filterArea:{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBlockStart:"1rem",marginBlockEnd:"1rem",background:Z.sapObjectHeader_Background,transition:"max-height 0.2s ease-out, opacity 0.2s ease-in"},filterAreaClosed:{maxHeight:"0",opacity:0,padding:0,margin:0,overflowY:"auto"},filterAreaOpen:{opacity:1},showFiltersBtn:{minWidth:"108px"},loadingContainer:{marginBlockEnd:"0.5rem",display:"flex",width:"100%",justifyContent:"center"},filterBarButtons:{display:"flex",alignItems:"center",position:"absolute",insetInline:"auto 0",marginInlineEnd:"1rem",marginBlockEnd:"1rem","& > *:not(:first-child)":{marginInlineStart:"0.25rem"},"& > *:not(:last-child)":{marginInlineEnd:"0.25rem"}},spacer:{height:0,marginBlockStart:0,marginInlineEnd:"1rem",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))"},lastSpacer:{height:"var(--_ui5_input_height)",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",marginInlineEnd:"1rem"}},gn=fn,xn="list",ta="M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z",bn=!1,vn="SAP-icons-v4",Cn="@ui5/webcomponents-icons";qe(xn,{pathData:ta,ltr:bn,collection:vn,packageName:Cn});const yn="list",aa="M479.5 290q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-287-192q-14 0-23-8.5t-9-22.5q0-15 9-23.5t23-8.5h287q32 0 32 32 0 31-32 31h-287zm-144 176q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm431 144q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-431-16q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-256q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-127q20 0 34 14t14 34-14 33.5-34 13.5-34-13.5T.5 67t14-34 34-14zm431 143q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287z",In=!1,Tn="SAP-icons-v5",Bn="@ui5/webcomponents-icons";qe(yn,{pathData:aa,ltr:In,collection:Tn,packageName:Bn});Lt();const Fn="list",wn=Jt()?{maxWidth:"100%",maxHeight:"100%",height:"100%",width:"100%",borderRadius:0,top:0,left:0}:{},Sn={tHactive:{width:"25%","&::part(column)":{textAlign:"center"}},table:{"--_ui5_input_width":"100%"},groupPanel:{"&::part(content)":{padding:0}},searchInputContainer:{height:on.sapWcrToolbarHeight,paddingBottom:"0.25rem"},searchInput:{width:"100%"},dialogComponent:{width:"40rem","&::part(content), &::part(footer), &::part(header)":{padding:0},...wn},header:{width:"100%",paddingInline:"1rem",paddingBlock:"0.25rem 0","& *":{marginBlock:"0.25rem",marginInline:0},"& ui5-input":{width:"100%"}},subheaderContainer:{paddingBlock:0,paddingInline:"1rem",boxShadow:Z.sapContent_HeaderShadow},subheader:{paddingBlockEnd:"0.25rem",'& [data-component-name="ToolbarContent"] >:last-child':{margin:0},'& [data-component-name="ToolbarContent"] >:first-child':{marginInline:"0 0.25rem "}},footer:{"& :not(:last-child)":{marginInlineEnd:"0.25rem"}}},jn=Sn,Dn=new Set(["UI5-COMBOBOX","UI5-DATE-PICKER","UI5-DATERANGE-PICKER","UI5-DATETIME-PICKER","UI5-DURATION-PICKER","UI5-INPUT","UI5-MULTI-INPUT","UI5-RATING-INDICATOR","UI5-STEP-INPUT","UI5-TIME-PICKER"]),na=(l,s)=>{var m;const i=l.tagName;let o={};if(Dn.has(i)&&(o={value:l.value??""}),i==="UI5-SELECT"||i==="UI5-MULTI-COMBOBOX"){const b=Array.from(l.children).map((C,S)=>C.selected?S:!1).filter(C=>C!==!1),v=new Set(b);o={children:(m=s.props.children.props.children)==null?void 0:m.map((C,S)=>v.has(S)?n.cloneElement(C,{selected:!0}):n.cloneElement(C,{selected:!1}))}}return(i==="UI5-SWITCH"||i==="UI5-CHECKBOX")&&(o={checked:l.checked}),o},_n=(l,s)=>{var i;return n.cloneElement(l,{value:s??((i=l==null?void 0:l.props)==null?void 0:i.value),"data-component-name":"FilterBarSearch"})},ra=(l,s)=>{l&&(typeof l=="function"?l(s):l.hasOwnProperty("current")&&(l.current=s))};Wt("ui5-table",`
/* hide table header of panel table */
:host([data-component-name="FilterBarDialogPanelTable"]) thead {
  visibility: collapse;
}
/* don't display border of panel table */
:host([data-component-name="FilterBarDialogPanelTable"]) table {
  border-collapse: unset;
}

/* don't allow table cells to grow
todo: FilterBarDialogPanelTable
*/
:host([data-component-name="FilterBarDialogTable"]) table{
  table-layout: fixed;
}

:host([data-component-name="FilterBarDialogPanelTable"]) .ui5-table-root {
  border-bottom: none;
}
/* don't display select all checkbox */
:host([data-component-name="FilterBarDialogTable"]) thead th.ui5-table-select-all-column [ui5-checkbox] {
 visibility: hidden;
}

:host([data-component-name="FilterBarDialogPanelTable"]) thead th.ui5-table-select-all-column {
 display: none;
}
 `);const Rn=(l,s)=>{var i,o,m,b,v;switch(l){case"all":return!0;case"visible":return(i=s.props)==null?void 0:i.visibleInFilterBar;case"active":return(o=s.props)==null?void 0:o.active;case"visibleAndActive":return((m=s.props)==null?void 0:m.visibleInFilterBar)&&((b=s.props)==null?void 0:b.active);case"mandatory":return(v=s.props)==null?void 0:v.required;default:return!0}},Rt=(l,s)=>Object.keys(l).find(i=>Object.keys(s).every(o=>l[o]!==s[i])),kn=Ye(jn,{name:"FilterBarDialog"}),Ke=l=>{const{filterBarRefs:s,open:i,handleDialogClose:o,children:m,showRestoreButton:b,handleRestoreFilters:v,handleDialogSave:w,handleSelectionChange:C,handleDialogSearch:S,handleDialogCancel:j,onAfterFiltersDialogOpen:$,portalContainer:K,dialogRef:L,isListView:_,setIsListView:y,filteredAttribute:F,setFilteredAttribute:u}=l,T=kn(),[Te,Ne]=n.useState(""),[te,ae]=n.useState({}),Be=n.useRef({}),Ge=n.useRef(null),[ne,Fe]=n.useReducer(a=>!a,!1),[re,we]=n.useState(),h=Ht("@ui5/webcomponents-react"),le=h.getText(ka),Se=h.getText(Ea),Ve=h.getText(Oa),Me=h.getText(qa),Y=h.getText(zt),de=h.getText(Aa),ce=h.getText(Na),ue=h.getText(Ga),me=h.getText(Va),pe=h.getText(Ma),Pe=h.getText(Pa),je=h.getText(La),De=h.getText(Wa),q=h.getText(Ua),Le=h.getText(Ha),he=h.getText(za),fe=h.getText($a),W=a=>{S&&S(U(a,{value:a.target.value,element:a.target})),Ne(a.target.value)},ge=a=>{w(a,Be.current,te)},We=a=>{ae({}),ln(a),j&&j(a),o(a)},_e=a=>{j&&j(a),o(a)},ie=a=>{ae({}),v(a,"dialog",{filters:Array.from(L.current.querySelectorAll("ui5-table-row"))})},A=a=>{y(a.detail.selectedItem.dataset.id==="list")},xe=()=>m.filter(a=>{var D,p,f;return!!(a!=null&&a.props)&&((D=a.props)==null?void 0:D.visible)&&(((f=(p=a.props)==null?void 0:p.label)==null?void 0:f.toLowerCase().includes(Te.toLowerCase()))||Te.length===0)&&Rn(F,a)}).map(a=>{const D=s.current[a.key];let p={};if(D&&(p=na(D,a)),!a.props.children)return a;let f=a.props.visibleInFilterBar||a.props.required||a.type.displayName!=="FilterGroupItem";return Object.hasOwn(te,a.key)&&(f=te[a.key]),n.cloneElement(a,{"data-with-values":ne,"data-selected":f,"data-react-key":a.key,children:{...a.props.children,props:{...a.props.children.props,...p},ref:R=>{R&&(Be.current[a.key]=R,ra(a.props.children.ref,R))}}})}),N=a=>{u(a.detail.selectedOption.dataset.id)},Re=a=>{var ke;if(a.preventDefault(),!a.target.hasAttribute("ui5-table"))return;const D=a.detail.previouslySelectedRows.reduce((J,I)=>({...J,[I.dataset.reactKey]:I}),{}),p=a.detail.selectedRows.reduce((J,I)=>({...J,[I.dataset.reactKey]:I}),{}),f=a.detail.previouslySelectedRows>a.detail.selectedRows?Rt(D,p):Rt(p,D),R=p[f]||D[f];if(((ke=R.dataset)==null?void 0:ke.required)==="true"){we(R);return}typeof C=="function"&&C(U(a,{element:R,checked:R.selected})),ae(J=>({...J,[f]:R.selected}))};if(n.useEffect(()=>{re&&(re.setAttribute("selected","true"),we(void 0))},[re]),!rn())return null;const Ue=()=>{const a={};return n.Children.forEach(xe(),p=>{const f=p.props.groupName??"default";a[f]?a[f].push(p):a[f]=[p]}),Object.keys(a).sort((p,f)=>p==="default"?-1:f==="role"?1:0).map((p,f)=>e.jsx(un,{headerText:p==="default"?le:p,className:T.groupPanel,children:e.jsx(Tt,{className:T.table,mode:Bt.MultiSelect,"data-component-name":"FilterBarDialogPanelTable",onSelectionChange:Re,children:a[p]})},`${p==="default"?le:p}${f}`))};return nn.createPortal(e.jsxs(dn,{open:i,ref:L,"data-component-name":"FilterBarDialog",onAfterClose:We,onAfterOpen:$,resizable:!0,draggable:!0,className:T.dialogComponent,preventFocusRestore:!0,header:e.jsx(jt,{design:_t.Header,startContent:e.jsx(Xt,{level:mn.H4,title:Y,children:Y}),endContent:b&&e.jsx(M,{design:P.Transparent,onClick:ie,children:de})}),footer:e.jsx(jt,{design:_t.Footer,endContent:e.jsxs(k,{justifyContent:ja.End,className:T.footer,children:[e.jsx(M,{onClick:ge,"data-component-name":"FilterBarDialogSaveBtn",design:P.Emphasized,children:Ve}),e.jsx(M,{design:P.Transparent,onClick:_e,"data-component-name":"FilterBarDialogCancelBtn",children:Se})]})}),children:[e.jsxs(k,{direction:Je.Column,className:T.subheaderContainer,children:[e.jsxs($t,{className:T.subheader,toolbarStyle:Kt.Clear,children:[e.jsxs(se,{onChange:N,title:fe,accessibleName:fe,children:[e.jsx(c,{selected:F==="all","data-id":"all",children:ce}),e.jsx(c,{selected:F==="visible","data-id":"visible",children:me}),e.jsx(c,{selected:F==="active","data-id":"active",children:ue}),e.jsx(c,{selected:F==="visibleAndActive","data-id":"visibleAndActive",children:pe}),e.jsx(c,{selected:F==="mandatory","data-id":"mandatory",children:Pe})]}),e.jsx(Yt,{}),e.jsx(M,{design:P.Transparent,onClick:Fe,"aria-live":"polite",children:ne?Le:q}),e.jsxs(cn,{onSelectionChange:A,children:[e.jsx(Dt,{icon:Fn,"data-id":"list",pressed:_,accessibleName:je}),e.jsx(Dt,{icon:tn,"data-id":"group",pressed:!_,accessibleName:De})]})]}),e.jsx(k,{className:T.searchInputContainer,children:e.jsx(Ae,{noTypeahead:!0,placeholder:Me,onInput:W,showClearIcon:!0,icon:e.jsx(Ut,{name:an}),ref:Ge,className:T.searchInput,"data-component-name":"FilterBarDialogSearchInput"})})]}),e.jsx(Tt,{"data-component-name":"FilterBarDialogTable",hideNoData:!_,className:T.table,mode:Bt.MultiSelect,onSelectionChange:Re,columns:e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:he}),!ne&&e.jsx(Ft,{className:T.tHactive,children:ue})]}),children:_&&xe()}),!_&&Ue()]}),K??document.body)};try{Ke.displayName="FilterDialog",Ke.__docgenInfo={description:"",displayName:"FilterDialog",props:{filterBarRefs:{defaultValue:null,description:"",name:"filterBarRefs",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleDialogClose:{defaultValue:null,description:"",name:"handleDialogClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},showRestoreButton:{defaultValue:null,description:"",name:"showRestoreButton",required:!0,type:{name:"boolean"}},handleRestoreFilters:{defaultValue:null,description:"",name:"handleRestoreFilters",required:!0,type:{name:"(e: any, source: any, filterElements: any) => void"}},handleDialogSave:{defaultValue:null,description:"",name:"handleDialogSave",required:!0,type:{name:"(e: any, newRefs: any, updatedToggledFilters: any) => void"}},handleSearchValueChange:{defaultValue:null,description:"",name:"handleSearchValueChange",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},handleSelectionChange:{defaultValue:null,description:"",name:"handleSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},handleDialogSearch:{defaultValue:null,description:"",name:"handleDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},handleDialogCancel:{defaultValue:null,description:"",name:"handleDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},dialogRef:{defaultValue:null,description:"",name:"dialogRef",required:!0,type:{name:"MutableRefObject<DialogDomRef>"}},isListView:{defaultValue:null,description:"",name:"isListView",required:!0,type:{name:"boolean"}},setIsListView:{defaultValue:null,description:"",name:"setIsListView",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},filteredAttribute:{defaultValue:null,description:"",name:"filteredAttribute",required:!0,type:{name:"string"}},setFilteredAttribute:{defaultValue:null,description:"",name:"setFilteredAttribute",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"",name:"onAfterFiltersDialogOpen",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}const Oe=Jt(),En=sn(),kt=l=>{var s,i;return l.borderBoxSize?Array.isArray(l.borderBoxSize)?(s=l.borderBoxSize[0])==null?void 0:s.inlineSize:(i=l.borderBoxSize)==null?void 0:i.inlineSize:l.target.getBoundingClientRect().width},On=Ye(gn,{name:"FilterBar"}),ee=n.forwardRef((l,s)=>{var ot,st;const{children:i,hideToolbar:o,filterBarCollapsed:m,considerGroupName:b,filterContainerWidth:v="13.125rem",activeFiltersCount:w,showClearOnFB:C,showGoOnFB:S,hideFilterConfiguration:j,showRestoreOnFB:$,showResetButton:K,hideToggleFiltersButton:L,style:_,className:y,slot:F,search:u,header:T,as:Te="div",portalContainer:Ne,onToggleFilters:te,onFiltersDialogOpen:ae,onAfterFiltersDialogOpen:Be,onFiltersDialogCancel:Ge,onFiltersDialogClose:ne,onFiltersDialogSave:Fe,onClear:re,onFiltersDialogSelectionChange:we,onFiltersDialogSearch:h,onGo:le,onRestore:Se,...Ve}=l,Me=(()=>o?!0:m!==void 0?m:!En)(),[Y,de]=n.useState(Me),[ce,ue]=n.useState(!0),[me,pe]=n.useState(!1),[Pe,je]=n.useState(void 0),De=n.useRef(null),q=n.useRef({}),Le=n.useRef(null),[he,fe]=n.useState({}),[W,ge]=n.useState({}),We=n.useRef({}),_e=n.useRef(),ie=n.useRef(null),A=n.useRef(null),xe=n.useRef(null),N=Ht("@ui5/webcomponents-react"),Re=N.getText(Ka),et=N.getText(Ya),Ue=N.getText(Ja),a=N.getText(Xa),D=N.getText(Qa),p=o?N.getText(Za):N.getText(zt),[f,R]=n.useState(!0),[ke,J]=n.useState("all");n.useEffect(()=>{n.Children.toArray(i).forEach(r=>{n.isValidElement(r)&&ge(t=>!r.props.hasOwnProperty("visibleInFilterBar")&&(t==null?void 0:t[r.key])===void 0?{...t,[r.key]:!0}:r.props.hasOwnProperty("visibleInFilterBar")?{...t,[r.key]:r.props.visibleInFilterBar}:t)})},[i,ge]),n.useEffect(()=>{m!==void 0&&de(o?!0:!m)},[de,o,m]);const I=On(),oa=$e(I.filterArea,Y&&(!Oe||Oe&&o)?I.filterAreaOpen:I.filterAreaClosed),be=()=>{var t;const r=(t=De.current)==null?void 0:t.querySelector('[data-component-name="FilterBarSearch"]');return{filters:q!=null&&q.current?Object.values(q.current).filter(Boolean):[],search:r}},sa=r=>{te&&te(U(r,{visible:!Y,...be()})),de(!Y)},[tt,da]=n.useState(!1),ca=(r,t,x)=>{fe(t);const g={elements:t,toggledElements:{...W,...x},...be()};ge(G=>({...G,...x})),Fe&&Fe(U(r,g)),at(r)},ua=r=>{typeof ae=="function"&&ae(r),r.defaultPrevented?pe(!1):pe(!0)},at=r=>{var t;ne&&ne(U(r)),pe(!1),(t=xe.current)==null||t.focus()},ma=r=>{typeof le=="function"&&le(U(r,{elements:q.current,...be()}))},nt=()=>Object.keys(W).length>0?n.Children.toArray(i).map(r=>n.isValidElement(r)&&(W==null?void 0:W[r.key])!==void 0?n.cloneElement(r,{visibleInFilterBar:W[r.key]}):r):n.Children.toArray(i),X=n.useRef({}),pa=()=>{const r={considerGroupName:b,["data-in-fb"]:!0,["data-with-toolbar"]:!o};return nt().filter(t=>{var x,g;return n.isValidElement(t)?((x=t==null?void 0:t.props)==null?void 0:x.visible)&&((g=t.props)==null?void 0:g.visibleInFilterBar):!1}).map(t=>{var g,G,V,dt,ct,ut,mt,pt,ht,ft,gt,xt,bt,vt,Ct,yt,It;if(v&&(r.style={width:v,...t.props.style}),j)return n.cloneElement(t,{...r});We.current[t.key]=t.props.visibleInFilterBar;let x={};if(Object.keys(he).length>0){const O=he[t.key];O&&(x=na(O,t))}if(!t.props.children)return n.cloneElement(t,{...r});if((g=X.current)!=null&&g[t.key]&&(((V=(G=t.props.children)==null?void 0:G.props)==null?void 0:V.value)!==((ct=(dt=X.current)==null?void 0:dt[t.key])==null?void 0:ct.value)||((mt=(ut=t.props.children)==null?void 0:ut.props)==null?void 0:mt.checked)!==((ht=(pt=X.current)==null?void 0:pt[t.key])==null?void 0:ht.checked)||Array.isArray((gt=(ft=t.props.children)==null?void 0:ft.props)==null?void 0:gt.children)&&((vt=(bt=(xt=t.props.children)==null?void 0:xt.props)==null?void 0:bt.children)==null?void 0:vt.map(O=>O.props.selected).join(","))!==((It=(yt=(Ct=X==null?void 0:X.current)==null?void 0:Ct[t.key])==null?void 0:yt.children)==null?void 0:It.map(O=>O.props.selected).join(",")))){const{[t.key]:O,...Ta}=he;fe(Ta)}return X.current[t.key]=t.props.children.props,n.cloneElement(t,{...r,children:{...t.props.children,props:{...t.props.children.props,...x},ref:O=>{q.current[t.key]=O,me||ra(t.props.children.ref,O)}}})})},rt=(r,t,x)=>{t==="filterBar"&&S&&ue(!1),Se&&Se(U(r,{source:t,...x}))};n.useEffect(()=>{ce||ue(!0)},[ce]);const ha=r=>{rt(r,"filterBar",be())},fa=r=>{typeof re=="function"&&re(U(r,be()))},ga=$e(I.outerContainer,y,!o&&I.outerContainerWithToolbar);n.useEffect(()=>{var r;_e.current=(r=u==null?void 0:u.props)==null?void 0:r.value},[(ot=u==null?void 0:u.props)==null?void 0:ot.value]);const lt=_e.current;n.useEffect(()=>{var r,t;lt!==((r=u==null?void 0:u.props)==null?void 0:r.value)&&je((t=u==null?void 0:u.props)==null?void 0:t.value)},[lt,(st=u==null?void 0:u.props)==null?void 0:st.value]);const He=e.jsxs(e.Fragment,{children:[S&&e.jsx(M,{onClick:ma,design:P.Emphasized,children:D}),!L&&!o&&!Oe&&e.jsx(M,{onClick:sa,design:P.Transparent,className:I.showFiltersBtn,"aria-live":"polite",children:Y?a:Ue}),C&&e.jsx(M,{onClick:fa,design:P.Transparent,children:Re}),$&&e.jsx(M,{onClick:ha,design:P.Transparent,children:et}),!j&&e.jsx(M,{onClick:ua,"aria-haspopup":"dialog",design:P.Transparent,ref:xe,children:`${p}${w&&parseInt(w,10)>0?` (${w})`:""}`})]}),xa=He.props.children.some(Boolean),[E,ba]=n.useState(void 0),[ve,va]=n.useState(void 0),[Ee,Ca]=n.useState(void 0);n.useEffect(()=>{const r=ze(([x])=>{var G,V;const g=(V=(G=x.target)==null?void 0:G.children)==null?void 0:V[0];g&&g.offsetWidth!==Ee&&Ca(g.offsetWidth+16)},100),t=new ResizeObserver(r);return o&&A.current&&t.observe(A.current),()=>{r.cancel(),t.disconnect()}},[A.current,o]),n.useEffect(()=>{const r=ze(([x])=>{const g=kt(x);g!==E&&va(g)},100),t=new ResizeObserver(r);return o&&A.current&&t.observe(A.current),()=>{r.cancel(),t.disconnect()}},[ve,A.current,o]),n.useEffect(()=>{const r=ze(([x])=>{const g=kt(x);g!==E&&ba(g)},100),t=new ResizeObserver(r);return o&&ie.current&&t.observe(ie.current),()=>{r.cancel(),t.disconnect()}},[ie.current,o,E]);const it=pa();n.useEffect(()=>{tt&&da(r=>(le(r),!1))},[tt]);const ya=()=>{if(Ee&&ve&&E){const r=[],t=it.length*Ee;if(ve-E>t)return null;const x=t%ve,g=ve-x,G=Math.floor((g-E)/Ee);for(let V=0;V<G;V++)r.push(e.jsx("div",{className:I.spacer},`filter-spacer-${V}`));return r}return null},Ia=Te;return e.jsxs(e.Fragment,{children:[me&&!j&&e.jsx(Ke,{filterBarRefs:q,open:me,handleDialogClose:at,handleRestoreFilters:rt,handleSearchValueChange:je,showRestoreButton:K,handleSelectionChange:we,handleDialogSave:ca,handleDialogSearch:h,handleDialogCancel:Ge,onAfterFiltersDialogOpen:Be,portalContainer:Ne,dialogRef:Le,isListView:f,setIsListView:R,filteredAttribute:ke,setFilteredAttribute:J,children:nt()}),e.jsxs(Ia,{ref:s,className:ga,style:{["--_ui5wcr_filter_group_item_flex_basis"]:v,..._},slot:F,...Ve,children:[!o&&e.jsxs($t,{className:I.filterBarHeader,toolbarStyle:Kt.Clear,children:[T,T&&u&&e.jsx(en,{}),u&&!Oe&&e.jsx("div",{ref:De,children:_n(u,Pe)}),xa&&e.jsx(Yt,{}),He]}),ce&&e.jsxs("div",{className:oa,style:{position:"relative"},ref:A,children:[it,o&&e.jsxs(e.Fragment,{children:[ya(),e.jsx("div",{style:{width:E?`${E}px`:"120px",minWidth:E?`${E}px`:"120px"},className:I.lastSpacer,children:e.jsx("div",{className:I.filterBarButtons,ref:ie,children:He})})]})]})]})]})});ee.displayName="FilterBar";try{ee.displayName="FilterBar",ee.__docgenInfo={description:'The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.\nIn this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".',displayName:"FilterBar",props:{children:{defaultValue:null,description:"Defines the filters of the `FilterBar`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},search:{defaultValue:null,description:"Defines the search field next to the header of the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"search",required:!1,type:{name:"ReactElement<InputPropTypes, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"Specifies header text or variant management that is shown in the toolbar on the first position\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"header",required:!1,type:{name:"ReactNode"}},hideToolbar:{defaultValue:null,description:'Defines whether the toolbar on top of the filter items is displayed.\n\n__Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.',name:"hideToolbar",required:!1,type:{name:"boolean"}},filterBarCollapsed:{defaultValue:null,description:"Defines whether the `FilterBar` is collapsed.",name:"filterBarCollapsed",required:!1,type:{name:"boolean"}},filterContainerWidth:{defaultValue:null,description:"Defines the width of the `FilterGroupItems`.\n\n__Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.",name:"filterContainerWidth",required:!1,type:{name:"Width<string | number>"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed.",name:"considerGroupName",required:!1,type:{name:"boolean"}},showClearOnFB:{defaultValue:null,description:'Defines whether the "Clear" button is displayed in the `FilterBar`.',name:"showClearOnFB",required:!1,type:{name:"boolean"}},showGoOnFB:{defaultValue:null,description:'Defines whether the "Go" button is displayed in the `FilterBar`.',name:"showGoOnFB",required:!1,type:{name:"boolean"}},hideFilterConfiguration:{defaultValue:null,description:'Defines whether the "Filter" button is displayed in the `FilterBar`.\n\n__Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.',name:"hideFilterConfiguration",required:!1,type:{name:"boolean"}},showResetButton:{defaultValue:null,description:'Defines whether the "Reset" button is displayed in the filter configuration dialog.',name:"showResetButton",required:!1,type:{name:"boolean"}},hideToggleFiltersButton:{defaultValue:null,description:'Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.',name:"hideToggleFiltersButton",required:!1,type:{name:"boolean"}},activeFiltersCount:{defaultValue:null,description:'Defines the number of active filters displayed in the "Filter" button.\n\n__Note__: If `hideFilterConfiguration` is `true` this prop has no effect.',name:"activeFiltersCount",required:!1,type:{name:"string | number"}},showRestoreOnFB:{defaultValue:null,description:'Defines whether the "Restore" button is displayed in the `FilterBar`.',name:"showRestoreOnFB",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onToggleFilters:{defaultValue:null,description:"The event is fired when the `FilterBar` is collapsed/expanded.",name:"onToggleFilters",required:!1,type:{name:"(event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogSave:{defaultValue:null,description:'The event is fired when the "Go" button of the filter configuration dialog is clicked.',name:"onFiltersDialogSave",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.',name:"onFiltersDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogOpen:{defaultValue:null,description:"The event is fired when the filter configuration dialog is opened.\n\n__Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.",name:"onFiltersDialogOpen",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"The event is fired after the filter configuration dialog has been opened.",name:"onAfterFiltersDialogOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onFiltersDialogClose:{defaultValue:null,description:"The event is fired when the filter configuration dialog is closed.",name:"onFiltersDialogClose",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogSelectionChange:{defaultValue:null,description:"The event is fired when a filter is selected/unselected in the filter configuration dialog.",name:"onFiltersDialogSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},onFiltersDialogSearch:{defaultValue:null,description:"The event is fired on input in the filter configuration dialog search field.",name:"onFiltersDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},onClear:{defaultValue:null,description:'The event is fired when the "Clear" button is clicked.',name:"onClear",required:!1,type:{name:"(event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onGo:{defaultValue:null,description:'The event is fired when the "Go" button is clicked.',name:"onGo",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onRestore:{defaultValue:null,description:'The event is fired when the "Restore" button is clicked.',name:"onRestore",required:!1,type:{name:"(event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const qn="circle-task-2",la="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-54 0-100-20t-81-55-55-81.5T0 256t20-99.5T75 75t81-55T256 0z",An=!1,Nn="SAP-icons-v4",Gn="@ui5/webcomponents-icons";qe(qn,{pathData:la,ltr:An,collection:Nn,packageName:Gn});const Vn="circle-task-2",ia="M256 1q53 0 99.5 20T437 76t55 81 20 99-20 99.5-55 81.5-81.5 55-99.5 20q-52 0-98.5-20T76 437t-55-81.5T1 256t20-99 55-81 81.5-55T256 1z",Mn=!1,Pn="SAP-icons-v5",Ln="@ui5/webcomponents-icons";qe(Vn,{pathData:ia,ltr:Mn,collection:Pn,packageName:Ln});Lt();const Wn="circle-task-2",Un={filterItem:{marginBlockEnd:"1rem",marginInlineEnd:"1rem",flexBasis:"var(--_ui5wcr_filter_group_item_flex_basis)",maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",flexGrow:1,flexShrink:0,"&[data-with-toolbar=false]":{maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)"}},innerFilterItemContainer:{display:"flex",flexDirection:"column",justifyContent:"start"},innerFilterItemContainerDialog:{display:"grid",gridTemplateColumns:"20% calc(80% - 1rem)","@media(max-width:700px)":{gridTemplateColumns:"100%"},gridTemplateRows:"auto",gridRowGap:"0px",gridColumnGap:"1rem","& :first-child":{maxWidth:"100%",placeSelf:"center end","@media(max-width:700px)":{placeSelf:"center start"}},"& :last-child":{placeSelf:"center auto",width:"100%"}},loadingContainer:{display:"flex",width:"100%",height:"1.625rem",justifyContent:"center"},dialogCellLabel:{marginBottom:"0.25rem",color:Z.sapTextColor},dialogActiveCell:{width:"25%",textAlign:"center"},dialogActiveIcon:{flexGrow:1,color:Z.sapNeutralColor,transform:"scale(-50%)"}},Hn=Un;Wt("ui5-table-row",`
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`);const zn=Ye(Hn,{name:"FilterGroupItem"}),d=n.forwardRef((l,s)=>{const i=zn(),{groupName:o="default",considerGroupName:m,label:b="",labelTooltip:v,required:w=!1,visible:C=!0,visibleInFilterBar:S,children:j,loading:$,className:K,slot:L,active:_,...y}=l,F=l["data-in-fb"],u=l["data-with-values"],T=l["data-selected"];return!w&&(!C||F&&!S)?null:F?e.jsx("div",{ref:s,slot:L,...y,className:$e(i.filterItem,K),children:e.jsxs("div",{className:F?i.innerFilterItemContainer:i.innerFilterItemContainerDialog,children:[e.jsx(k,{children:e.jsx(Q,{title:v??b,required:w,showColon:!!b,children:`${m&&o!=="default"?`${o}: `:""}
          ${b}`})}),$?e.jsx(Sa,{className:i.loadingContainer,active:!0,size:_a.Small}):j]})}):e.jsxs(Da,{"data-react-key":l["data-react-key"],selected:T,"data-required":w,"data-component-name":"FilterBarDialogTableRow",children:[e.jsx(wt,{children:e.jsxs(k,{direction:Je.Column,children:[e.jsx(Q,{className:i.dialogCellLabel,title:v??b,required:w,showColon:!!b&&u,children:b}),u&&j]})}),!u&&e.jsx(wt,{className:i.dialogActiveCell,children:_&&e.jsx(Ut,{name:Wn,className:i.dialogActiveIcon})})]})});d.displayName="FilterGroupItem";d.defaultProps={groupName:"default",visible:!0,required:!1,label:""};try{d.displayName="FilterGroupItem",d.__docgenInfo={description:"Represents a filter belonging to the `FilterBar`.",displayName:"FilterGroupItem",props:{children:{defaultValue:null,description:"Content of the `FilterGroupItem`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:""},description:"Defines the label of the `FilterGroupItem`.<br />\n__Note:__ This label is used for the search in the filter configuration dialog.",name:"label",required:!1,type:{name:"string"}},groupName:{defaultValue:{value:"default"},description:'Defines the group name of the filter.<br />\n__Note:__ If no `groupName` is set, the name defaults to "Basic".',name:"groupName",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Defines the tooltip of the label.<br />\n__Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.",name:"labelTooltip",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Defines whether a loading indicator should be shown in the `FilterGroupItem`.",name:"loading",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the filter is required.<br />\n__Note:__ Required filters cannot be removed from the `FilterBar`.",name:"required",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"Defines whether the filter is visible.",name:"visible",required:!1,type:{name:"boolean"}},visibleInFilterBar:{defaultValue:null,description:"Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.",name:"visibleInFilterBar",required:!1,type:{name:"boolean"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.",name:"considerGroupName",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const $n={title:"Layouts & Floorplans / FilterBar",component:ee,args:{search:e.jsx(Ae,{placeholder:"Search"}),header:e.jsx(Xt,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},Ce={render:l=>e.jsxs(ee,{...l,children:[e.jsx(d,{label:"StepInput",required:!0,children:e.jsx(Xe,{required:!0})}),e.jsx(d,{label:"RatingIndicator",children:e.jsx(pn,{})}),e.jsx(d,{label:"MultiInput",active:!0,children:e.jsx(Qt,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(H,{text:"Argentina",selected:!0}),e.jsx(H,{text:"Bulgaria"}),e.jsx(H,{text:"England"}),e.jsx(H,{text:"Finland"})]})})}),e.jsx(d,{label:"Input",children:e.jsx(Ae,{placeholder:"Placeholder"})}),e.jsx(d,{label:"Switch",children:e.jsx(Zt,{})}),e.jsx(d,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{children:"Option 1"}),e.jsx(c,{selected:!0,children:"Option 2"}),e.jsx(c,{children:"Option 3"}),e.jsx(c,{children:"Option 4"})]})}),e.jsx(d,{label:"SELECT w/o initial selected",children:e.jsxs(se,{children:[e.jsx(c,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(c,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(c,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(c,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(c,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(d,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(Ze,{children:[e.jsx(B,{text:"MultiComboBoxItem 1"}),e.jsx(B,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(B,{text:"MultiComboBoxItem 3"}),e.jsx(B,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(d,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(ea,{children:[e.jsx(z,{text:"ComboBoxItem 1"}),e.jsx(z,{text:"ComboBoxItem 2"}),e.jsx(z,{text:"ComboBoxItem 3"}),e.jsx(z,{text:"ComboBoxItem 4"})]})}),e.jsx(d,{label:"Date Picker",groupName:"Group 2",children:e.jsx(Qe,{style:{minWidth:"auto"}})})]})},ye={render:()=>{const[l,s]=n.useState(37),[i,o]=n.useState({}),[m,b]=n.useState("USD"),[v,w]=n.useState(""),[C,S]=n.useState(""),j=y=>{s(y.target.value)},$=y=>{o(y.detail.items.reduce((F,u)=>({...F,[u.getAttribute("text").toLowerCase()]:!0}),{}))},K=y=>{b(y.detail.selectedOption.textContent)},L=y=>{y.detail.valid&&w(y.detail.value)},_=y=>{y.detail.valid&&S(y.detail.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:[e.jsx(d,{label:"Age",active:!!l,required:!0,children:e.jsx(Xe,{value:l,onChange:j,required:!0})}),e.jsx(d,{label:"Countries",active:Object.keys(i).length>0,children:e.jsxs(Ze,{onSelectionChange:$,children:[e.jsx(B,{text:"Argentina",selected:i.argentina}),e.jsx(B,{text:"Bulgaria",selected:i.bulgaria}),e.jsx(B,{text:"Finland",selected:i.finland}),e.jsx(B,{text:"Germany",selected:i.germany}),e.jsx(B,{text:"Ireland",selected:i.ireland}),e.jsx(B,{text:"Ukraine",selected:i.ukraine}),e.jsx(B,{text:"USA",selected:i.usa})]})}),e.jsx(d,{label:"Currency",active:!!m,children:e.jsxs(se,{onChange:K,children:[e.jsx(c,{additionalText:"€",selected:m==="EUR",children:"EUR"}),e.jsx(c,{additionalText:"$",selected:m==="USD",children:"USD"}),e.jsx(c,{additionalText:"£",selected:m==="GBP",children:"GBP"}),e.jsx(c,{additionalText:"₺",selected:m==="TRY",children:"TRY"}),e.jsx(c,{additionalText:"¥",selected:m==="JPY",children:"JPY"})]})}),e.jsx(d,{label:"Date",active:!!v,children:e.jsx(hn,{value:v,onChange:L,style:{minWidth:"auto"},on:!0})}),e.jsx(d,{label:"Date Range",active:!!C,visibleInFilterBar:!1,children:e.jsx(Qe,{value:C,onChange:_,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(k,{direction:Je.Column,children:[e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Age"}),e.jsx(oe,{children:l})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Countries"}),e.jsx(oe,{children:JSON.stringify(i)})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Currency"}),e.jsx(oe,{children:m})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Date"}),e.jsx(oe,{children:v})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Date Range"}),e.jsx(oe,{children:C})]})]})]})}},Ie={name:"In DynamicPage",render:l=>e.jsx(Ba,{headerTitle:e.jsx(Fa,{header:e.jsxs(Ra,{onClick:s=>{s.stopPropagation()},children:[e.jsx(St,{children:"Variant 1"}),e.jsx(St,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(wa,{children:e.jsxs(ee,{...l,hideToolbar:!0,children:[e.jsx(d,{label:"StepInput",children:e.jsx(Xe,{})}),e.jsx(d,{label:"MultiInput",active:!0,required:!0,children:e.jsx(Qt,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(H,{text:"Argentina",selected:!0}),e.jsx(H,{text:"Bulgaria"}),e.jsx(H,{text:"England"}),e.jsx(H,{text:"Finland"})]})})}),e.jsx(d,{label:"Input",children:e.jsx(Ae,{placeholder:"Placeholder"})}),e.jsx(d,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(Zt,{})}),e.jsx(d,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{children:"Option 1"}),e.jsx(c,{selected:!0,children:"Option 2"}),e.jsx(c,{children:"Option 3"}),e.jsx(c,{children:"Option 4"})]})}),e.jsx(d,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(c,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(c,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(c,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(c,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(d,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(Ze,{children:[e.jsx(B,{text:"MultiComboBoxItem 1"}),e.jsx(B,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(B,{text:"MultiComboBoxItem 3"}),e.jsx(B,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(d,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(ea,{children:[e.jsx(z,{text:"ComboBoxItem 1"}),e.jsx(z,{text:"ComboBoxItem 2"}),e.jsx(z,{text:"ComboBoxItem 3"}),e.jsx(z,{text:"ComboBoxItem 4"})]})}),e.jsx(d,{label:"Date Picker",groupName:"Group 2",children:e.jsx(Qe,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(oe,{style:{color:"white"},children:"Content"})})})};var Et,Ot,qt;Ce.parameters={...Ce.parameters,docs:{...(Et=Ce.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: args => {
    return <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required>
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active>
          <MultiInput tokens={<>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>} />
        </FilterGroupItem>
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" visibleInFilterBar={false}>
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2">
          <DateRangePicker style={{
          minWidth: 'auto'
        }} />
        </FilterGroupItem>
      </FilterBar>;
  }
}`,...(qt=(Ot=Ce.parameters)==null?void 0:Ot.docs)==null?void 0:qt.source}}};var At,Nt,Gt;ye.parameters={...ye.parameters,docs:{...(At=ye.parameters)==null?void 0:At.docs,source:{originalSource:`{
  render: () => {
    const [age, setAge] = useState(37);
    const [countries, setCountries] = useState<Record<string, boolean>>({});
    const [currency, setCurrency] = useState('USD');
    const [date, setDate] = useState('');
    const [dateRange, setDateRange] = useState('');
    const handleAgeChange = e => {
      setAge(e.target.value);
    };
    const handleCountriesChange = e => {
      setCountries(e.detail.items.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.getAttribute('text').toLowerCase()]: true
        };
      }, {}));
    };
    const handleCurrencyChange = e => {
      setCurrency(e.detail.selectedOption.textContent);
    };
    const handleDateChange = e => {
      if (e.detail.valid) {
        setDate(e.detail.value);
      }
    };
    const handleDateRangeChange = e => {
      if (e.detail.valid) {
        setDateRange(e.detail.value);
      }
    };
    return <>
        <FilterBar>
          <FilterGroupItem label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem label="Countries" active={Object.keys(countries).length > 0}>
            <MultiComboBox onSelectionChange={handleCountriesChange}>
              <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
              <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
              <MultiComboBoxItem text="Finland" selected={countries.finland} />
              <MultiComboBoxItem text="Germany" selected={countries.germany} />
              <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
              <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
              <MultiComboBoxItem text="USA" selected={countries.usa} />
            </MultiComboBox>
          </FilterGroupItem>
          <FilterGroupItem label="Currency" active={!!currency}>
            <Select onChange={handleCurrencyChange}>
              <Option additionalText="€" selected={currency === 'EUR'}>
                EUR
              </Option>
              <Option additionalText="$" selected={currency === 'USD'}>
                USD
              </Option>
              <Option additionalText="£" selected={currency === 'GBP'}>
                GBP
              </Option>
              <Option additionalText="₺" selected={currency === 'TRY'}>
                TRY
              </Option>
              <Option additionalText="¥" selected={currency === 'JPY'}>
                JPY
              </Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem label="Date" active={!!date}>
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} on />
          </FilterGroupItem>
          <FilterGroupItem label="Date Range" active={!!dateRange} visibleInFilterBar={false}>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{
            minWidth: 'auto'
          }} on />
          </FilterGroupItem>
        </FilterBar>
        <FlexBox direction={FlexBoxDirection.Column}>
          <FlexBox>
            <Label showColon>Age</Label>
            <Text>{age}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Countries</Label>
            <Text>{JSON.stringify(countries)}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Currency</Label>
            <Text>{currency}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date</Label>
            <Text>{date}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date Range</Label>
            <Text>{dateRange}</Text>
          </FlexBox>
        </FlexBox>
      </>;
  }
}`,...(Gt=(Nt=ye.parameters)==null?void 0:Nt.docs)==null?void 0:Gt.source}}};var Vt,Mt,Pt;Ie.parameters={...Ie.parameters,docs:{...(Vt=Ie.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  name: 'In DynamicPage',
  render: args => {
    return <DynamicPage headerTitle={<DynamicPageTitle header={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} />} headerContent={<DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem label="MultiInput" active required>
                <MultiInput required tokens={<>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>} />
              </FilterGroupItem>
              <FilterGroupItem label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem label="Switch" visibleInFilterBar={false}>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/ initial selected" visibleInFilterBar={false}>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/o initial selected" visibleInFilterBar={false}>
                <Select>
                  <Option data-key="Test 1" selected icon="add">
                    Test 1
                  </Option>
                  <Option data-key="Test 2" icon="add">
                    Test 2
                  </Option>
                  <Option data-key="Test 3" icon="add">
                    Test 3
                  </Option>
                  <Option data-key="Test 4" icon="add">
                    Test 4
                  </Option>
                  <Option data-key="Test 5" icon="add">
                    Test 5
                  </Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1" visibleInFilterBar={false}>
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2" visibleInFilterBar={false}>
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="Date Picker" groupName="Group 2">
                <DateRangePicker style={{
            minWidth: 'auto'
          }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>}>
        <div style={{
        background: 'cadetblue',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text style={{
          color: 'white'
        }}>Content</Text>
        </div>
      </DynamicPage>;
  }
}`,...(Pt=(Mt=Ie.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};const Kn=["Default","WithLogic","InDynamicPage"],$r=Object.freeze(Object.defineProperty({__proto__:null,Default:Ce,InDynamicPage:Ie,WithLogic:ye,__namedExportsOrder:Kn,default:$n},Symbol.toStringTag,{value:"Module"}));export{$r as C,Ce as D,d as F,Ie as I,ye as W};
//# sourceMappingURL=FilterBar.stories-0b7aea72.js.map
