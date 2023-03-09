import{a as o,j as e,F as te}from"./jsx-runtime-670450c2.js";import{r as n}from"./index-f1f749bf.js";import{D as wa}from"./index-ed77b416.js";import{D as Sa,a as Da}from"./index-781aae1b.js";import{k as Ht}from"./UI5Element-427ec721.js";import{a as Ge}from"./Icons-7b82f601.js";import{c as Ye}from"./clsx.m-1229b3e0.js";import{c as Xe}from"./react-jss.esm-fe4dc3ff.js";import{a as _a}from"./BusyIndicator-b3c085b8.js";import{a as zt}from"./addCustomCSSWithScoping-4c0cdfa9.js";import{B as Ra}from"./index-c0e9a8b4.js";import{L as Z}from"./index-eab84561.js";import{F as O,b as ka,a as Qe}from"./index-cbb29537.js";import{T as ee}from"./ThemingParameters-f4b4144e.js";import{T as Ft,d as wt,a as St,b as Ea,c as Dt}from"./index-4d5d66b5.js";import{I as $t}from"./index-7ccdd5f3.js";import{T as de}from"./index-c7ba7a71.js";import{V as Oa,a as _t}from"./VariantItem-8906999a.js";import{e as z}from"./index-99d317a4.js";import{u as jt,a1 as qa,C as Aa,a2 as Na,a3 as Ga,a4 as Kt,a5 as Va,a6 as Ma,a7 as Pa,a8 as La,a9 as Wa,aa as Ua,ab as Ha,ac as za,ad as $a,ae as ja,af as Ka,ag as Ya,ah as Ja,ai as Xa,aj as Qa,ak as Za,al as en,am as tn}from"./i18n-defaults-41f1487d.js";import{T as Yt,b as Jt}from"./index-2cf0cda7.js";import{T as an}from"./index-dd796e80.js";import{T as Xt}from"./index-ff3cb99b.js";import{g as nn}from"./group-2-ba4ad7cd.js";import{s as rn}from"./search-e22246a6.js";import{r as ln}from"./index-96c5f47c.js";import{h as on}from"./withWebComponent-e4481254.js";import{s as sn}from"./stopPropagation-da74d54e.js";import{b as dn}from"./CssSizeVariables-bd372cde.js";import{c as Qt,d as cn}from"./Device-208919c6.js";import{D as un}from"./index-2f252038.js";import{B as Rt}from"./index-f0ae9d9b.js";import{T as Zt}from"./index-45ae5b6c.js";import{S as ce}from"./index-c31639bb.js";import{O as u}from"./index-f5bc70e6.js";import{S as mn,a as kt}from"./index-11cd8b42.js";import{I as Ve}from"./index-3c0d0cf8.js";import{P as pn}from"./index-d9119fe5.js";import{B as Et}from"./Bar-2267974f.js";import{T as hn}from"./Title-b986a4bd.js";import{B as L}from"./index-82ccb188.js";import{a as W}from"./Button-e27d9549.js";import{d as Ke}from"./debounce-5c77766a.js";import{S as Ze}from"./index-973547b9.js";import{R as fn}from"./index-deabd28b.js";import{M as ea}from"./index-bcb78a51.js";import{T as $}from"./index-9bc243fe.js";import{S as ta}from"./index-ed736857.js";import{C as aa,a as j}from"./index-9b544a2a.js";import{D as et}from"./index-99afb77a.js";import{D as gn}from"./index-2e6e9f1d.js";import{M as tt,a as F}from"./index-1af00875.js";const bn={outerContainer:{background:ee.sapObjectHeader_Background,"--_ui5_input_width":"100%"},outerContainerWithToolbar:{paddingBlock:"0.5rem 1px",paddingInline:"2rem",boxShadow:ee.sapContent_HeaderShadow},filterBarHeader:{alignItems:"center",display:"flex",background:ee.sapObjectHeader_Background,minHeight:"3rem",paddingBlockEnd:"0.5rem",boxShadow:"none",flexWrap:"wrap",'& [data-component-name="ToolbarContent"] > *:first-child':{marginInlineStart:0}},filterArea:{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBlockStart:"1rem",marginBlockEnd:"1rem",background:ee.sapObjectHeader_Background,transition:"max-height 0.2s ease-out, opacity 0.2s ease-in"},filterAreaClosed:{maxHeight:"0",opacity:0,padding:0,margin:0,overflowY:"auto"},filterAreaOpen:{opacity:1},showFiltersBtn:{minWidth:"108px"},loadingContainer:{marginBlockEnd:"0.5rem",display:"flex",width:"100%",justifyContent:"center"},filterBarButtons:{display:"flex",alignItems:"center",position:"absolute",insetInline:"auto 0",marginInlineEnd:"1rem",marginBlockEnd:"1rem","& > *:not(:first-child)":{marginInlineStart:"0.25rem"},"& > *:not(:last-child)":{marginInlineEnd:"0.25rem"}},spacer:{height:0,marginBlockStart:0,marginInlineEnd:"1rem",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))"},lastSpacer:{height:"var(--_ui5_input_height)",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",marginInlineEnd:"1rem"}},vn=bn,Cn="list",na="M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z",yn=!1,xn="SAP-icons-v4",In="@ui5/webcomponents-icons";Ge(Cn,{pathData:na,ltr:yn,collection:xn,packageName:In});const Tn="list",ra="M479.5 290q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-287-192q-14 0-23-8.5t-9-22.5q0-15 9-23.5t23-8.5h287q32 0 32 32 0 31-32 31h-287zm-144 176q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm431 144q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-431-16q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-256q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-127q20 0 34 14t14 34-14 33.5-34 13.5-34-13.5T.5 67t14-34 34-14zm431 143q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287z",Bn=!1,Fn="SAP-icons-v5",wn="@ui5/webcomponents-icons";Ge(Tn,{pathData:ra,ltr:Bn,collection:Fn,packageName:wn});Ht("sap_horizon");const Sn="list",Dn=Qt()?{maxWidth:"100%",maxHeight:"100%",height:"100%",width:"100%",borderRadius:0,top:0,left:0}:{},_n={tHactive:{width:"25%","&::part(column)":{textAlign:"center"}},table:{"--_ui5_input_width":"100%"},groupPanel:{"&::part(content)":{padding:0}},searchInputContainer:{height:dn.sapWcrToolbarHeight,paddingBottom:"0.25rem"},searchInput:{width:"100%"},dialogComponent:{width:"40rem","&::part(content), &::part(footer), &::part(header)":{padding:0},...Dn},header:{width:"100%",paddingInline:"1rem",paddingBlock:"0.25rem 0","& *":{marginBlock:"0.25rem",marginInline:0},"& ui5-input":{width:"100%"}},subheaderContainer:{paddingBlock:0,paddingInline:"1rem",boxShadow:ee.sapContent_HeaderShadow},subheader:{paddingBlockEnd:"0.25rem",'& [data-component-name="ToolbarContent"] >:last-child':{margin:0},'& [data-component-name="ToolbarContent"] >:first-child':{marginInline:"0 0.25rem "}},footer:{"& :not(:last-child)":{marginInlineEnd:"0.25rem"}}},Rn=_n,kn=new Set(["UI5-COMBOBOX","UI5-DATE-PICKER","UI5-DATERANGE-PICKER","UI5-DATETIME-PICKER","UI5-DURATION-PICKER","UI5-INPUT","UI5-MULTI-INPUT","UI5-RATING-INDICATOR","UI5-STEP-INPUT","UI5-TIME-PICKER"]),la=(l,d)=>{var p;const i=l.tagName;let s={};if(kn.has(i)&&(s={value:l.value??""}),i==="UI5-SELECT"||i==="UI5-MULTI-COMBOBOX"){const T=Array.from(l.children).map((y,D)=>y.selected?D:!1).filter(y=>y!==!1),C=new Set(T);s={children:(p=d.props.children.props.children)==null?void 0:p.map((y,D)=>C.has(D)?n.cloneElement(y,{selected:!0}):n.cloneElement(y,{selected:!1}))}}return(i==="UI5-SWITCH"||i==="UI5-CHECKBOX")&&(s={checked:l.checked}),s},En=(l,d)=>{var i;return n.cloneElement(l,{value:d??((i=l==null?void 0:l.props)==null?void 0:i.value),"data-component-name":"FilterBarSearch"})},ia=(l,d)=>{l&&(typeof l=="function"?l(d):l.hasOwnProperty("current")&&(l.current=d))};zt("ui5-table",`
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
 `);const On=(l,d)=>{var i,s,p,T,C;switch(l){case"all":return!0;case"visible":return(i=d.props)==null?void 0:i.visibleInFilterBar;case"active":return(s=d.props)==null?void 0:s.active;case"visibleAndActive":return((p=d.props)==null?void 0:p.visibleInFilterBar)&&((T=d.props)==null?void 0:T.active);case"mandatory":return(C=d.props)==null?void 0:C.required;default:return!0}},Ot=(l,d)=>Object.keys(l).find(i=>Object.keys(d).every(s=>l[s]!==d[i])),qn=Xe(Rn,{name:"FilterBarDialog"}),Je=l=>{const{filterBarRefs:d,open:i,handleDialogClose:s,children:p,showRestoreButton:T,handleRestoreFilters:C,handleDialogSave:S,handleSelectionChange:y,handleDialogSearch:D,handleDialogCancel:_,onAfterFiltersDialogOpen:K,portalContainer:Y,dialogRef:U,isListView:k,setIsListView:x,filteredAttribute:w,setFilteredAttribute:m}=l,B=qn(),[Fe,Me]=n.useState(""),[ne,re]=n.useState({}),we=n.useRef({}),Pe=n.useRef(null),[le,Se]=n.useReducer(a=>!a,!1),[ie,De]=n.useState(),f=jt("@ui5/webcomponents-react"),oe=f.getText(qa),_e=f.getText(Aa),Le=f.getText(Na),We=f.getText(Ga),J=f.getText(Kt),ue=f.getText(Va),me=f.getText(Ma),pe=f.getText(Pa),he=f.getText(La),fe=f.getText(Wa),Ue=f.getText(Ua),Re=f.getText(Ha),ke=f.getText(za),N=f.getText($a),He=f.getText(ja),ge=f.getText(Ka),be=f.getText(Ya),H=a=>{D&&D(z(a,{value:a.target.value,element:a.target})),Me(a.target.value)},ve=a=>{S(a,we.current,ne)},ze=a=>{re({}),sn(a),_&&_(a),s(a)},Ee=a=>{_&&_(a),s(a)},se=a=>{re({}),C(a,"dialog",{filters:Array.from(U.current.querySelectorAll("ui5-table-row"))})},G=a=>{x(a.detail.selectedItem.dataset.id==="list")},Ce=()=>p.filter(a=>{var R,h,g;return!!(a!=null&&a.props)&&((R=a.props)==null?void 0:R.visible)&&(((g=(h=a.props)==null?void 0:h.label)==null?void 0:g.toLowerCase().includes(Fe.toLowerCase()))||Fe.length===0)&&On(w,a)}).map(a=>{const R=d.current[a.key];let h={};if(R&&(h=la(R,a)),!a.props.children)return a;let g=a.props.visibleInFilterBar||a.props.required||a.type.displayName!=="FilterGroupItem";return Object.hasOwn(ne,a.key)&&(g=ne[a.key]),n.cloneElement(a,{"data-with-values":le,"data-selected":g,"data-react-key":a.key,children:{...a.props.children,props:{...a.props.children.props,...h},ref:E=>{E&&(we.current[a.key]=E,ia(a.props.children.ref,E))}}})}),V=a=>{m(a.detail.selectedOption.dataset.id)},Oe=a=>{var qe;if(a.preventDefault(),!a.target.hasAttribute("ui5-table"))return;const R=a.detail.previouslySelectedRows.reduce((X,I)=>({...X,[I.dataset.reactKey]:I}),{}),h=a.detail.selectedRows.reduce((X,I)=>({...X,[I.dataset.reactKey]:I}),{}),g=a.detail.previouslySelectedRows>a.detail.selectedRows?Ot(R,h):Ot(h,R),E=h[g]||R[g];if(((qe=E.dataset)==null?void 0:qe.required)==="true"){De(E);return}typeof y=="function"&&y(z(a,{element:E,checked:E.selected})),re(X=>({...X,[g]:E.selected}))};if(n.useEffect(()=>{ie&&(ie.setAttribute("selected","true"),De(void 0))},[ie]),!on())return null;const $e=()=>{const a={};return n.Children.forEach(Ce(),h=>{const g=h.props.groupName??"default";a[g]?a[g].push(h):a[g]=[h]}),Object.keys(a).sort((h,g)=>h==="default"?-1:g==="role"?1:0).map((h,g)=>e(pn,{headerText:h==="default"?oe:h,className:B.groupPanel,children:e(Ft,{className:B.table,mode:wt.MultiSelect,"data-component-name":"FilterBarDialogPanelTable",onSelectionChange:Oe,children:a[h]})},`${h==="default"?oe:h}${g}`))};return ln.createPortal(o(un,{open:i,ref:U,"data-component-name":"FilterBarDialog",onAfterClose:ze,onAfterOpen:K,resizable:!0,draggable:!0,className:B.dialogComponent,preventFocusRestore:!0,header:e(Rt,{design:Et.Header,startContent:e(Zt,{level:hn.H4,title:J,children:J}),endContent:T&&e(L,{design:W.Transparent,onClick:se,children:ue})}),footer:e(Rt,{design:Et.Footer,endContent:o(O,{justifyContent:ka.End,className:B.footer,children:[e(L,{onClick:ve,"data-component-name":"FilterBarDialogSaveBtn",design:W.Emphasized,children:Le}),e(L,{design:W.Transparent,onClick:Ee,"data-component-name":"FilterBarDialogCancelBtn",children:_e})]})}),children:[o(O,{direction:Qe.Column,className:B.subheaderContainer,children:[o(Yt,{className:B.subheader,toolbarStyle:Jt.Clear,children:[o(ce,{onChange:V,title:be,accessibleName:be,children:[e(u,{selected:w==="all","data-id":"all",children:me}),e(u,{selected:w==="visible","data-id":"visible",children:he}),e(u,{selected:w==="active","data-id":"active",children:pe}),e(u,{selected:w==="visibleAndActive","data-id":"visibleAndActive",children:fe}),e(u,{selected:w==="mandatory","data-id":"mandatory",children:Ue})]}),e(Xt,{}),e(L,{design:W.Transparent,onClick:Se,"aria-live":"polite",children:le?He:N}),o(mn,{onSelectionChange:G,children:[e(kt,{icon:Sn,"data-id":"list",pressed:k,accessibleName:Re}),e(kt,{icon:nn,"data-id":"group",pressed:!k,accessibleName:ke})]})]}),e(O,{className:B.searchInputContainer,children:e(Ve,{noTypeahead:!0,placeholder:We,onInput:H,showClearIcon:!0,icon:e($t,{name:rn}),ref:Pe,className:B.searchInput,"data-component-name":"FilterBarDialogSearchInput"})})]}),e(Ft,{"data-component-name":"FilterBarDialogTable",hideNoData:!k,className:B.table,mode:wt.MultiSelect,onSelectionChange:Oe,columns:o(te,{children:[e(St,{children:ge}),!le&&e(St,{className:B.tHactive,children:pe})]}),children:k&&Ce()}),!k&&$e()]}),Y??document.body)};try{Je.displayName="FilterDialog",Je.__docgenInfo={description:"",displayName:"FilterDialog",props:{filterBarRefs:{defaultValue:null,description:"",name:"filterBarRefs",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleDialogClose:{defaultValue:null,description:"",name:"handleDialogClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},showRestoreButton:{defaultValue:null,description:"",name:"showRestoreButton",required:!0,type:{name:"boolean"}},handleRestoreFilters:{defaultValue:null,description:"",name:"handleRestoreFilters",required:!0,type:{name:"(e: any, source: any, filterElements: any) => void"}},handleDialogSave:{defaultValue:null,description:"",name:"handleDialogSave",required:!0,type:{name:"(e: any, newRefs: any, updatedToggledFilters: any) => void"}},handleSearchValueChange:{defaultValue:null,description:"",name:"handleSearchValueChange",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},handleSelectionChange:{defaultValue:null,description:"",name:"handleSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},handleDialogSearch:{defaultValue:null,description:"",name:"handleDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},handleDialogCancel:{defaultValue:null,description:"",name:"handleDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},dialogRef:{defaultValue:null,description:"",name:"dialogRef",required:!0,type:{name:"MutableRefObject<DialogDomRef>"}},isListView:{defaultValue:null,description:"",name:"isListView",required:!0,type:{name:"boolean"}},setIsListView:{defaultValue:null,description:"",name:"setIsListView",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},filteredAttribute:{defaultValue:null,description:"",name:"filteredAttribute",required:!0,type:{name:"string"}},setFilteredAttribute:{defaultValue:null,description:"",name:"setFilteredAttribute",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"",name:"onAfterFiltersDialogOpen",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}const Ne=Qt(),An=cn(),qt=l=>{var d,i;return l.borderBoxSize?Array.isArray(l.borderBoxSize)?(d=l.borderBoxSize[0])==null?void 0:d.inlineSize:(i=l.borderBoxSize)==null?void 0:i.inlineSize:l.target.getBoundingClientRect().width},Nn=Xe(vn,{name:"FilterBar"}),ae=n.forwardRef((l,d)=>{var dt,ct;const{children:i,hideToolbar:s,filterBarCollapsed:p,considerGroupName:T,filterContainerWidth:C="13.125rem",activeFiltersCount:S,showClearOnFB:y,showGoOnFB:D,hideFilterConfiguration:_,showRestoreOnFB:K,showResetButton:Y,hideToggleFiltersButton:U,style:k,className:x,slot:w,search:m,header:B,as:Fe="div",portalContainer:Me,onToggleFilters:ne,onFiltersDialogOpen:re,onAfterFiltersDialogOpen:we,onFiltersDialogCancel:Pe,onFiltersDialogClose:le,onFiltersDialogSave:Se,onClear:ie,onFiltersDialogSelectionChange:De,onFiltersDialogSearch:f,onGo:oe,onRestore:_e,...Le}=l,We=(()=>s?!0:p!==void 0?p:!An)(),[J,ue]=n.useState(We),[me,pe]=n.useState(!0),[he,fe]=n.useState(!1),[Ue,Re]=n.useState(void 0),ke=n.useRef(null),N=n.useRef({}),He=n.useRef(null),[ge,be]=n.useState({}),[H,ve]=n.useState({}),ze=n.useRef({}),Ee=n.useRef(),se=n.useRef(null),G=n.useRef(null),Ce=n.useRef(null),V=jt("@ui5/webcomponents-react"),Oe=V.getText(Ja),at=V.getText(Xa),$e=V.getText(Qa),a=V.getText(Za),R=V.getText(en),h=s?V.getText(tn):V.getText(Kt),[g,E]=n.useState(!0),[qe,X]=n.useState("all");n.useEffect(()=>{n.Children.toArray(i).forEach(r=>{n.isValidElement(r)&&ve(t=>!r.props.hasOwnProperty("visibleInFilterBar")&&(t==null?void 0:t[r.key])===void 0?{...t,[r.key]:!0}:r.props.hasOwnProperty("visibleInFilterBar")?{...t,[r.key]:r.props.visibleInFilterBar}:t)})},[i,ve]),n.useEffect(()=>{p!==void 0&&ue(s?!0:!p)},[ue,s,p]);const I=Nn(),da=Ye(I.filterArea,J&&(!Ne||Ne&&s)?I.filterAreaOpen:I.filterAreaClosed),ye=()=>{var t;const r=(t=ke.current)==null?void 0:t.querySelector('[data-component-name="FilterBarSearch"]');return{filters:N!=null&&N.current?Object.values(N.current).filter(Boolean):[],search:r}},ca=r=>{ne&&ne(z(r,{visible:!J,...ye()})),ue(!J)},[nt,ua]=n.useState(!1),ma=(r,t,v)=>{be(t);const b={elements:t,toggledElements:{...H,...v},...ye()};ve(M=>({...M,...v})),Se&&Se(z(r,b)),rt(r)},pa=r=>{typeof re=="function"&&re(r),r.defaultPrevented?fe(!1):fe(!0)},rt=r=>{var t;le&&le(z(r)),fe(!1),(t=Ce.current)==null||t.focus()},ha=r=>{typeof oe=="function"&&oe(z(r,{elements:N.current,...ye()}))},lt=()=>Object.keys(H).length>0?n.Children.toArray(i).map(r=>n.isValidElement(r)&&(H==null?void 0:H[r.key])!==void 0?n.cloneElement(r,{visibleInFilterBar:H[r.key]}):r):n.Children.toArray(i),Q=n.useRef({}),fa=()=>{const r={considerGroupName:T,["data-in-fb"]:!0,["data-with-toolbar"]:!s};return lt().filter(t=>{var v,b;return n.isValidElement(t)?((v=t==null?void 0:t.props)==null?void 0:v.visible)&&((b=t.props)==null?void 0:b.visibleInFilterBar):!1}).map(t=>{var b,M,P,ut,mt,pt,ht,ft,gt,bt,vt,Ct,yt,xt,It,Tt,Bt;if(C&&(r.style={width:C,...t.props.style}),_)return n.cloneElement(t,{...r});ze.current[t.key]=t.props.visibleInFilterBar;let v={};if(Object.keys(ge).length>0){const A=ge[t.key];A&&(v=la(A,t))}if(!t.props.children)return n.cloneElement(t,{...r});if((b=Q.current)!=null&&b[t.key]&&(((P=(M=t.props.children)==null?void 0:M.props)==null?void 0:P.value)!==((mt=(ut=Q.current)==null?void 0:ut[t.key])==null?void 0:mt.value)||((ht=(pt=t.props.children)==null?void 0:pt.props)==null?void 0:ht.checked)!==((gt=(ft=Q.current)==null?void 0:ft[t.key])==null?void 0:gt.checked)||Array.isArray((vt=(bt=t.props.children)==null?void 0:bt.props)==null?void 0:vt.children)&&((xt=(yt=(Ct=t.props.children)==null?void 0:Ct.props)==null?void 0:yt.children)==null?void 0:xt.map(A=>A.props.selected).join(","))!==((Bt=(Tt=(It=Q==null?void 0:Q.current)==null?void 0:It[t.key])==null?void 0:Tt.children)==null?void 0:Bt.map(A=>A.props.selected).join(",")))){const{[t.key]:A,...Fa}=ge;be(Fa)}return Q.current[t.key]=t.props.children.props,n.cloneElement(t,{...r,children:{...t.props.children,props:{...t.props.children.props,...v},ref:A=>{N.current[t.key]=A,he||ia(t.props.children.ref,A)}}})})},it=(r,t,v)=>{t==="filterBar"&&D&&pe(!1),_e&&_e(z(r,{source:t,...v}))};n.useEffect(()=>{me||pe(!0)},[me]);const ga=r=>{it(r,"filterBar",ye())},ba=r=>{typeof ie=="function"&&ie(z(r,ye()))},va=Ye(I.outerContainer,x,!s&&I.outerContainerWithToolbar);n.useEffect(()=>{var r;Ee.current=(r=m==null?void 0:m.props)==null?void 0:r.value},[(dt=m==null?void 0:m.props)==null?void 0:dt.value]);const ot=Ee.current;n.useEffect(()=>{var r,t;ot!==((r=m==null?void 0:m.props)==null?void 0:r.value)&&Re((t=m==null?void 0:m.props)==null?void 0:t.value)},[ot,(ct=m==null?void 0:m.props)==null?void 0:ct.value]);const je=o(te,{children:[D&&e(L,{onClick:ha,design:W.Emphasized,children:R}),!U&&!s&&!Ne&&e(L,{onClick:ca,design:W.Transparent,className:I.showFiltersBtn,"aria-live":"polite",children:J?a:$e}),y&&e(L,{onClick:ba,design:W.Transparent,children:Oe}),K&&e(L,{onClick:ga,design:W.Transparent,children:at}),!_&&e(L,{onClick:pa,"aria-haspopup":"dialog",design:W.Transparent,ref:Ce,children:`${h}${S&&parseInt(S,10)>0?` (${S})`:""}`})]}),Ca=je.props.children.some(Boolean),[q,ya]=n.useState(void 0),[xe,xa]=n.useState(void 0),[Ae,Ia]=n.useState(void 0);n.useEffect(()=>{const r=Ke(([v])=>{var M,P;const b=(P=(M=v.target)==null?void 0:M.children)==null?void 0:P[0];b&&b.offsetWidth!==Ae&&Ia(b.offsetWidth+16)},100),t=new ResizeObserver(r);return s&&G.current&&t.observe(G.current),()=>{r.cancel(),t.disconnect()}},[G.current,s]),n.useEffect(()=>{const r=Ke(([v])=>{const b=qt(v);b!==q&&xa(b)},100),t=new ResizeObserver(r);return s&&G.current&&t.observe(G.current),()=>{r.cancel(),t.disconnect()}},[xe,G.current,s]),n.useEffect(()=>{const r=Ke(([v])=>{const b=qt(v);b!==q&&ya(b)},100),t=new ResizeObserver(r);return s&&se.current&&t.observe(se.current),()=>{r.cancel(),t.disconnect()}},[se.current,s,q]);const st=fa();n.useEffect(()=>{nt&&ua(r=>(oe(r),!1))},[nt]);const Ta=()=>{if(Ae&&xe&&q){const r=[],t=st.length*Ae;if(xe-q>t)return null;const v=t%xe,b=xe-v,M=Math.floor((b-q)/Ae);for(let P=0;P<M;P++)r.push(e("div",{className:I.spacer},`filter-spacer-${P}`));return r}return null},Ba=Fe;return o(te,{children:[he&&!_&&e(Je,{filterBarRefs:N,open:he,handleDialogClose:rt,handleRestoreFilters:it,handleSearchValueChange:Re,showRestoreButton:Y,handleSelectionChange:De,handleDialogSave:ma,handleDialogSearch:f,handleDialogCancel:Pe,onAfterFiltersDialogOpen:we,portalContainer:Me,dialogRef:He,isListView:g,setIsListView:E,filteredAttribute:qe,setFilteredAttribute:X,children:lt()}),o(Ba,{ref:d,className:va,style:{["--_ui5wcr_filter_group_item_flex_basis"]:C,...k},slot:w,...Le,children:[!s&&o(Yt,{className:I.filterBarHeader,toolbarStyle:Jt.Clear,children:[B,B&&m&&e(an,{}),m&&!Ne&&e("div",{ref:ke,children:En(m,Ue)}),Ca&&e(Xt,{}),je]}),me&&o("div",{className:da,style:{position:"relative"},ref:G,children:[st,s&&o(te,{children:[Ta(),e("div",{style:{width:q?`${q}px`:"120px",minWidth:q?`${q}px`:"120px"},className:I.lastSpacer,children:e("div",{className:I.filterBarButtons,ref:se,children:je})})]})]})]})]})});ae.displayName="FilterBar";try{ae.displayName="FilterBar",ae.__docgenInfo={description:'The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.\nIn this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".',displayName:"FilterBar",props:{children:{defaultValue:null,description:"Defines the filters of the `FilterBar`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},search:{defaultValue:null,description:"Defines the search field next to the header of the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"search",required:!1,type:{name:"ReactElement<InputPropTypes, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"Specifies header text or variant management that is shown in the toolbar on the first position\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"header",required:!1,type:{name:"ReactNode"}},hideToolbar:{defaultValue:null,description:'Defines whether the toolbar on top of the filter items is displayed.\n\n__Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.',name:"hideToolbar",required:!1,type:{name:"boolean"}},filterBarCollapsed:{defaultValue:null,description:"Defines whether the `FilterBar` is collapsed.",name:"filterBarCollapsed",required:!1,type:{name:"boolean"}},filterContainerWidth:{defaultValue:null,description:"Defines the width of the `FilterGroupItems`.\n\n__Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.",name:"filterContainerWidth",required:!1,type:{name:"Width<string | number>"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed.",name:"considerGroupName",required:!1,type:{name:"boolean"}},showClearOnFB:{defaultValue:null,description:'Defines whether the "Clear" button is displayed in the `FilterBar`.',name:"showClearOnFB",required:!1,type:{name:"boolean"}},showGoOnFB:{defaultValue:null,description:'Defines whether the "Go" button is displayed in the `FilterBar`.',name:"showGoOnFB",required:!1,type:{name:"boolean"}},hideFilterConfiguration:{defaultValue:null,description:'Defines whether the "Filter" button is displayed in the `FilterBar`.\n\n__Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.',name:"hideFilterConfiguration",required:!1,type:{name:"boolean"}},showResetButton:{defaultValue:null,description:'Defines whether the "Reset" button is displayed in the filter configuration dialog.',name:"showResetButton",required:!1,type:{name:"boolean"}},hideToggleFiltersButton:{defaultValue:null,description:'Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.',name:"hideToggleFiltersButton",required:!1,type:{name:"boolean"}},activeFiltersCount:{defaultValue:null,description:'Defines the number of active filters displayed in the "Filter" button.\n\n__Note__: If `hideFilterConfiguration` is `true` this prop has no effect.',name:"activeFiltersCount",required:!1,type:{name:"string | number"}},showRestoreOnFB:{defaultValue:null,description:'Defines whether the "Restore" button is displayed in the `FilterBar`.',name:"showRestoreOnFB",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onToggleFilters:{defaultValue:null,description:"The event is fired when the `FilterBar` is collapsed/expanded.",name:"onToggleFilters",required:!1,type:{name:"(event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogSave:{defaultValue:null,description:'The event is fired when the "Go" button of the filter configuration dialog is clicked.',name:"onFiltersDialogSave",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.',name:"onFiltersDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogOpen:{defaultValue:null,description:"The event is fired when the filter configuration dialog is opened.\n\n__Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.",name:"onFiltersDialogOpen",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"The event is fired after the filter configuration dialog has been opened.",name:"onAfterFiltersDialogOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onFiltersDialogClose:{defaultValue:null,description:"The event is fired when the filter configuration dialog is closed.",name:"onFiltersDialogClose",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogSelectionChange:{defaultValue:null,description:"The event is fired when a filter is selected/unselected in the filter configuration dialog.",name:"onFiltersDialogSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},onFiltersDialogSearch:{defaultValue:null,description:"The event is fired on input in the filter configuration dialog search field.",name:"onFiltersDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},onClear:{defaultValue:null,description:'The event is fired when the "Clear" button is clicked.',name:"onClear",required:!1,type:{name:"(event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onGo:{defaultValue:null,description:'The event is fired when the "Go" button is clicked.',name:"onGo",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onRestore:{defaultValue:null,description:'The event is fired when the "Restore" button is clicked.',name:"onRestore",required:!1,type:{name:"(event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Gn="circle-task-2",oa="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-54 0-100-20t-81-55-55-81.5T0 256t20-99.5T75 75t81-55T256 0z",Vn=!1,Mn="SAP-icons-v4",Pn="@ui5/webcomponents-icons";Ge(Gn,{pathData:oa,ltr:Vn,collection:Mn,packageName:Pn});const Ln="circle-task-2",sa="M256 1q53 0 99.5 20T437 76t55 81 20 99-20 99.5-55 81.5-81.5 55-99.5 20q-52 0-98.5-20T76 437t-55-81.5T1 256t20-99 55-81 81.5-55T256 1z",Wn=!1,Un="SAP-icons-v5",Hn="@ui5/webcomponents-icons";Ge(Ln,{pathData:sa,ltr:Wn,collection:Un,packageName:Hn});Ht("sap_horizon");const zn="circle-task-2",$n={filterItem:{marginBlockEnd:"1rem",marginInlineEnd:"1rem",flexBasis:"var(--_ui5wcr_filter_group_item_flex_basis)",maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",flexGrow:1,flexShrink:0,"&[data-with-toolbar=false]":{maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)"}},innerFilterItemContainer:{display:"flex",flexDirection:"column",justifyContent:"start"},innerFilterItemContainerDialog:{display:"grid",gridTemplateColumns:"20% calc(80% - 1rem)","@media(max-width:700px)":{gridTemplateColumns:"100%"},gridTemplateRows:"auto",gridRowGap:"0px",gridColumnGap:"1rem","& :first-child":{maxWidth:"100%",placeSelf:"center end","@media(max-width:700px)":{placeSelf:"center start"}},"& :last-child":{placeSelf:"center auto",width:"100%"}},loadingContainer:{display:"flex",width:"100%",height:"1.625rem",justifyContent:"center"},dialogCellLabel:{marginBottom:"0.25rem",color:ee.sapTextColor},dialogActiveCell:{width:"25%",textAlign:"center"},dialogActiveIcon:{flexGrow:1,color:ee.sapNeutralColor,transform:"scale(-50%)"}},jn=$n;zt("ui5-table-row",`
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 width: 0;
}
`);const Kn=Xe(jn,{name:"FilterGroupItem"}),c=n.forwardRef((l,d)=>{const i=Kn(),{groupName:s="default",considerGroupName:p,label:T="",labelTooltip:C,required:S=!1,visible:y=!0,visibleInFilterBar:D,children:_,loading:K,className:Y,slot:U,active:k,...x}=l,w=l["data-in-fb"],m=l["data-with-values"],B=l["data-selected"];return!S&&(!y||w&&!D)?null:w?e("div",{ref:d,slot:U,...x,className:Ye(i.filterItem,Y),children:o("div",{className:w?i.innerFilterItemContainer:i.innerFilterItemContainerDialog,children:[e(O,{children:e(Z,{title:C??T,required:S,children:`${p&&s!=="default"?`${s}: `:""}
          ${T}`})}),K?e(Ra,{className:i.loadingContainer,active:!0,size:_a.Small}):_]})}):o(Ea,{"data-react-key":l["data-react-key"],selected:B,"data-required":S,"data-component-name":"FilterBarDialogTableRow",children:[e(Dt,{children:o(O,{direction:Qe.Column,children:[e(Z,{className:i.dialogCellLabel,title:C??T,required:S,children:T}),m&&_]})}),!m&&e(Dt,{className:i.dialogActiveCell,children:k&&e($t,{name:zn,className:i.dialogActiveIcon})})]})});c.displayName="FilterGroupItem";c.defaultProps={groupName:"default",visible:!0,required:!1,label:""};try{c.displayName="FilterGroupItem",c.__docgenInfo={description:"Represents a filter belonging to the `FilterBar`.",displayName:"FilterGroupItem",props:{children:{defaultValue:null,description:"Content of the `FilterGroupItem`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:""},description:"Defines the label of the `FilterGroupItem`.<br />\n__Note:__ This label is used for the search in the filter configuration dialog.",name:"label",required:!1,type:{name:"string"}},groupName:{defaultValue:{value:"default"},description:'Defines the group name of the filter.<br />\n__Note:__ If no `groupName` is set, the name defaults to "Basic".',name:"groupName",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Defines the tooltip of the label.<br />\n__Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.",name:"labelTooltip",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Defines whether a loading indicator should be shown in the `FilterGroupItem`.",name:"loading",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the filter is required.<br />\n__Note:__ Required filters cannot be removed from the `FilterBar`.",name:"required",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"Defines whether the filter is visible.",name:"visible",required:!1,type:{name:"boolean"}},visibleInFilterBar:{defaultValue:null,description:"Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.",name:"visibleInFilterBar",required:!1,type:{name:"boolean"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.",name:"considerGroupName",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Yn={title:"Layouts & Floorplans / FilterBar",component:ae,args:{search:e(Ve,{placeholder:"Search"}),header:e(Zt,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},Ie={render:l=>o(ae,{...l,children:[e(c,{label:"StepInput",required:!0,children:e(Ze,{required:!0})}),e(c,{label:"RatingIndicator",children:e(fn,{})}),e(c,{label:"MultiInput",active:!0,children:e(ea,{tokens:o(te,{children:[e($,{text:"Argentina",selected:!0}),e($,{text:"Bulgaria"}),e($,{text:"England"}),e($,{text:"Finland"})]})})}),e(c,{label:"Input",children:e(Ve,{placeholder:"Placeholder"})}),e(c,{label:"Switch",children:e(ta,{})}),e(c,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:o(ce,{children:[e(u,{children:"Option 1"}),e(u,{selected:!0,children:"Option 2"}),e(u,{children:"Option 3"}),e(u,{children:"Option 4"})]})}),e(c,{label:"SELECT w/o initial selected",children:o(ce,{children:[e(u,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e(u,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e(u,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e(u,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e(u,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e(c,{label:"MultBox w/ initial selected",groupName:"Group 1",children:o(tt,{children:[e(F,{text:"MultiComboBoxItem 1"}),e(F,{selected:!0,text:"MultiComboBoxItem 2"}),e(F,{text:"MultiComboBoxItem 3"}),e(F,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e(c,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:o(aa,{children:[e(j,{text:"ComboBoxItem 1"}),e(j,{text:"ComboBoxItem 2"}),e(j,{text:"ComboBoxItem 3"}),e(j,{text:"ComboBoxItem 4"})]})}),e(c,{label:"Date Picker",groupName:"Group 2",children:e(et,{style:{minWidth:"auto"}})})]})},Te={render:()=>{const[l,d]=n.useState(37),[i,s]=n.useState({}),[p,T]=n.useState("USD"),[C,S]=n.useState(""),[y,D]=n.useState(""),_=x=>{d(x.target.value)},K=x=>{s(x.detail.items.reduce((w,m)=>({...w,[m.getAttribute("text").toLowerCase()]:!0}),{}))},Y=x=>{T(x.detail.selectedOption.textContent)},U=x=>{x.detail.valid&&S(x.detail.value)},k=x=>{x.detail.valid&&D(x.detail.value)};return o(te,{children:[o(ae,{children:[e(c,{label:"Age",active:!!l,required:!0,children:e(Ze,{value:l,onChange:_,required:!0})}),e(c,{label:"Countries",active:Object.keys(i).length>0,children:o(tt,{onSelectionChange:K,children:[e(F,{text:"Argentina",selected:i.argentina}),e(F,{text:"Bulgaria",selected:i.bulgaria}),e(F,{text:"Finland",selected:i.finland}),e(F,{text:"Germany",selected:i.germany}),e(F,{text:"Ireland",selected:i.ireland}),e(F,{text:"Ukraine",selected:i.ukraine}),e(F,{text:"USA",selected:i.usa})]})}),e(c,{label:"Currency",active:!!p,children:o(ce,{onChange:Y,children:[e(u,{additionalText:"€",selected:p==="EUR",children:"EUR"}),e(u,{additionalText:"$",selected:p==="USD",children:"USD"}),e(u,{additionalText:"£",selected:p==="GBP",children:"GBP"}),e(u,{additionalText:"₺",selected:p==="TRY",children:"TRY"}),e(u,{additionalText:"¥",selected:p==="JPY",children:"JPY"})]})}),e(c,{label:"Date",active:!!C,children:e(gn,{value:C,onChange:U,style:{minWidth:"auto"},on:!0})}),e(c,{label:"Date Range",active:!!y,visibleInFilterBar:!1,children:e(et,{value:y,onChange:k,style:{minWidth:"auto"},on:!0})})]}),o(O,{direction:Qe.Column,children:[o(O,{children:[e(Z,{showColon:!0,children:"Age"}),e(de,{children:l})]}),o(O,{children:[e(Z,{showColon:!0,children:"Countries"}),e(de,{children:JSON.stringify(i)})]}),o(O,{children:[e(Z,{showColon:!0,children:"Currency"}),e(de,{children:p})]}),o(O,{children:[e(Z,{showColon:!0,children:"Date"}),e(de,{children:C})]}),o(O,{children:[e(Z,{showColon:!0,children:"Date Range"}),e(de,{children:y})]})]})]})}},Be={name:"In DynamicPage",render:l=>e(wa,{headerTitle:e(Sa,{header:o(Oa,{onClick:d=>{d.stopPropagation()},children:[e(_t,{children:"Variant 1"}),e(_t,{selected:!0,children:"Variant 2"})]})}),headerContent:e(Da,{children:o(ae,{...l,hideToolbar:!0,children:[e(c,{label:"StepInput",children:e(Ze,{})}),e(c,{label:"MultiInput",active:!0,required:!0,children:e(ea,{required:!0,tokens:o(te,{children:[e($,{text:"Argentina",selected:!0}),e($,{text:"Bulgaria"}),e($,{text:"England"}),e($,{text:"Finland"})]})})}),e(c,{label:"Input",children:e(Ve,{placeholder:"Placeholder"})}),e(c,{label:"Switch",visibleInFilterBar:!1,children:e(ta,{})}),e(c,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:o(ce,{children:[e(u,{children:"Option 1"}),e(u,{selected:!0,children:"Option 2"}),e(u,{children:"Option 3"}),e(u,{children:"Option 4"})]})}),e(c,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:o(ce,{children:[e(u,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e(u,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e(u,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e(u,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e(u,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e(c,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:o(tt,{children:[e(F,{text:"MultiComboBoxItem 1"}),e(F,{selected:!0,text:"MultiComboBoxItem 2"}),e(F,{text:"MultiComboBoxItem 3"}),e(F,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e(c,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:o(aa,{children:[e(j,{text:"ComboBoxItem 1"}),e(j,{text:"ComboBoxItem 2"}),e(j,{text:"ComboBoxItem 3"}),e(j,{text:"ComboBoxItem 4"})]})}),e(c,{label:"Date Picker",groupName:"Group 2",children:e(et,{style:{minWidth:"auto"}})})]})}),children:e("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e(de,{style:{color:"white"},children:"Content"})})})};var At,Nt,Gt;Ie.parameters={...Ie.parameters,docs:{...(At=Ie.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Gt=(Nt=Ie.parameters)==null?void 0:Nt.docs)==null?void 0:Gt.source}}};var Vt,Mt,Pt;Te.parameters={...Te.parameters,docs:{...(Vt=Te.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Pt=(Mt=Te.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};var Lt,Wt,Ut;Be.parameters={...Be.parameters,docs:{...(Lt=Be.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Ut=(Wt=Be.parameters)==null?void 0:Wt.docs)==null?void 0:Ut.source}}};const Jn=["Default","WithLogic","InDynamicPage"],Yr=Object.freeze(Object.defineProperty({__proto__:null,Default:Ie,InDynamicPage:Be,WithLogic:Te,__namedExportsOrder:Jn,default:Yn},Symbol.toStringTag,{value:"Module"}));export{Yr as C,Ie as D,c as F,Be as I,Te as W};
//# sourceMappingURL=FilterBar.stories-a7647da9.js.map
