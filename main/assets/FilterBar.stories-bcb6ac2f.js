import{j as e}from"./jsx-runtime-5926aa06.js";import{r as n}from"./index-ebeaab24.js";import{D as Fa}from"./index-b0d73ad7.js";import{D as wa,a as Sa}from"./index-b11b11d3.js";import{k as Lt}from"./UI5Element-3b11b083.js";import{j as qe}from"./Icons-f64cf5a7.js";import{c as $e}from"./clsx.m-1229b3e0.js";import{c as Ye}from"./react-jss.esm-022ab528.js";import{a as Wt}from"./addCustomCSSWithScoping-cbae0ba3.js";import{B as ja}from"./index-4b7d21d2.js";import{L as Q}from"./index-d60aa20d.js";import{F as k,b as Da,a as Je}from"./index-2c77de22.js";import{T as Z}from"./ThemingParameters-7e2e4e30.js";import{T as Tt,d as Bt,a as Ft,b as _a,c as wt}from"./index-b4048391.js";import{I as Ht}from"./index-292bb91b.js";import{a as Ra}from"./BusyIndicator-9bf9c132.js";import{T as oe}from"./index-562e1433.js";import{V as ka,a as St}from"./VariantItem-835f4c55.js";import{e as H}from"./index-99d317a4.js";import{u as Ut,a3 as Ea,C as Oa,a4 as qa,a5 as Aa,a6 as zt,a7 as Na,a8 as Va,a9 as Ga,aa as Ma,ab as Pa,ac as La,ad as Wa,ae as Ha,af as Ua,ag as za,ah as $a,ai as Ka,aj as Ya,ak as Ja,al as Xa,am as Qa,an as Za,ao as en}from"./i18n-defaults-ac3ba251.js";import{T as $t,b as Kt}from"./index-def5985f.js";import{T as tn}from"./index-10a44e5e.js";import{T as Yt}from"./index-d512ac31.js";import{b as Jt}from"./CssSizeVariables-cd649ef5.js";import{g as an}from"./group-2-0f07cd23.js";import{s as nn}from"./search-89855739.js";import{r as rn}from"./index-9c09ad76.js";import{h as ln}from"./withWebComponent-d4224c1c.js";import{s as on}from"./stopPropagation-da74d54e.js";import{i as Xt,a as sn}from"./Device-99b8bbf4.js";import{D as dn}from"./index-646124e2.js";import{B as jt}from"./index-c8c8add4.js";import{T as Qt}from"./index-930e8196.js";import{S as se}from"./index-9d1a0b95.js";import{O as c}from"./index-0570a0de.js";import{S as cn,a as Dt}from"./index-d62f18e9.js";import{I as Ae}from"./index-82e16051.js";import{P as un}from"./index-d40c86c2.js";import{B as _t}from"./Bar-ae5ccc94.js";import{T as mn}from"./Title-c6699a53.js";import{B as M}from"./index-bd5c8161.js";import{B as P}from"./Button-86524f67.js";import{d as ze}from"./debounce-925f19e3.js";import{S as Xe}from"./index-dcd7608b.js";import{R as pn}from"./index-e0397d4d.js";import{M as Zt}from"./index-7f83541e.js";import{T as U}from"./index-c6fb7ad6.js";import{S as ea}from"./index-f29194ac.js";import{C as ta,a as z}from"./index-4d129434.js";import{D as Qe}from"./index-a74401ff.js";import{D as hn}from"./index-edff4617.js";import{M as Ze,a as T}from"./index-afc92f56.js";const fn={outerContainer:{background:Z.sapObjectHeader_Background,"--_ui5_input_width":"100%"},outerContainerWithToolbar:{paddingBlock:"0.5rem 1px",paddingInline:"2rem",boxShadow:Z.sapContent_HeaderShadow},filterBarHeader:{alignItems:"center",display:"flex",background:Z.sapObjectHeader_Background,minHeight:"3rem",paddingBlockEnd:"0.5rem",boxShadow:"none",flexWrap:"wrap",'& [data-component-name="ToolbarContent"] > *:first-child':{marginInlineStart:0}},filterArea:{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBlockStart:"1rem",marginBlockEnd:"1rem",background:Z.sapObjectHeader_Background,transition:"max-height 0.2s ease-out, opacity 0.2s ease-in"},filterAreaClosed:{maxHeight:"0",opacity:0,padding:0,margin:0,overflowY:"auto"},filterAreaOpen:{opacity:1},showFiltersBtn:{minWidth:"108px"},loadingContainer:{marginBlockEnd:"0.5rem",display:"flex",width:"100%",justifyContent:"center"},filterBarButtons:{display:"flex",alignItems:"center",position:"absolute",insetInline:"auto 0",marginInlineEnd:"1rem",marginBlockEnd:"1rem","& > *:not(:first-child)":{marginInlineStart:"0.25rem"},"& > *:not(:last-child)":{marginInlineEnd:"0.25rem"}},spacer:{height:0,marginBlockStart:0,marginInlineEnd:"1rem",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))"},lastSpacer:{height:Jt.ui5WcrElementHeight,flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",marginInlineEnd:"1rem"}},gn=fn,xn="list",aa="M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z",bn=!1,vn="SAP-icons-v4",Cn="@ui5/webcomponents-icons";qe(xn,{pathData:aa,ltr:bn,collection:vn,packageName:Cn});const yn="list",na="M479.5 290q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-287-192q-14 0-23-8.5t-9-22.5q0-15 9-23.5t23-8.5h287q32 0 32 32 0 31-32 31h-287zm-144 176q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm431 144q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287zm-431-16q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-256q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-127q20 0 34 14t14 34-14 33.5-34 13.5-34-13.5T.5 67t14-34 34-14zm431 143q15 0 23.5 9t8.5 23-8.5 23-23.5 9h-287q-14 0-23-9t-9-23 9-23 23-9h287z",In=!1,Tn="SAP-icons-v5",Bn="@ui5/webcomponents-icons";qe(yn,{pathData:na,ltr:In,collection:Tn,packageName:Bn});Lt();const Fn="list",wn=Xt()?{maxWidth:"100%",maxHeight:"100%",height:"100%",width:"100%",borderRadius:0,top:0,left:0}:{},Sn={tHactive:{width:"25%","&::part(column)":{textAlign:"center"}},groupPanel:{"&::part(content)":{padding:0}},searchInputContainer:{height:Jt.ui5WcrToolbarHeight,paddingBottom:"0.25rem"},searchInput:{width:"100%"},dialogComponent:{width:"40rem","&::part(content), &::part(footer), &::part(header)":{padding:0},...wn},header:{width:"100%",paddingInline:"1rem",paddingBlock:"0.25rem 0","& *":{marginBlock:"0.25rem",marginInline:0},"& ui5-input":{width:"100%"}},subheaderContainer:{paddingBlock:0,paddingInline:"1rem",boxShadow:Z.sapContent_HeaderShadow},subheader:{paddingBlockEnd:"0.25rem",'& [data-component-name="ToolbarContent"] >:last-child':{margin:0},'& [data-component-name="ToolbarContent"] >:first-child':{marginInline:"0 0.25rem "}},footer:{"& :not(:last-child)":{marginInlineEnd:"0.25rem"}}},jn=Sn,Dn=new Set(["UI5-COMBOBOX","UI5-DATE-PICKER","UI5-DATERANGE-PICKER","UI5-DATETIME-PICKER","UI5-DURATION-PICKER","UI5-INPUT","UI5-MULTI-INPUT","UI5-RATING-INDICATOR","UI5-STEP-INPUT","UI5-TIME-PICKER"]),ra=(l,s)=>{var m;const i=l.tagName;let o={};if(Dn.has(i)&&(o={value:l.value??""}),i==="UI5-SELECT"||i==="UI5-MULTI-COMBOBOX"){const b=Array.from(l.children).map((C,F)=>C.selected?F:!1).filter(C=>C!==!1),v=new Set(b);o={children:(m=s.props.children.props.children)==null?void 0:m.map((C,F)=>v.has(F)?n.cloneElement(C,{selected:!0}):n.cloneElement(C,{selected:!1}))}}return(i==="UI5-SWITCH"||i==="UI5-CHECKBOX")&&(o={checked:l.checked}),o},_n=(l,s)=>{var i;return n.cloneElement(l,{value:s??((i=l==null?void 0:l.props)==null?void 0:i.value),"data-component-name":"FilterBarSearch"})},la=(l,s)=>{l&&(typeof l=="function"?l(s):l.hasOwnProperty("current")&&(l.current=s))};Wt("ui5-table",`
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
 `);const Rn=(l,s)=>{var i,o,m,b,v;switch(l){case"all":return!0;case"visible":return(i=s.props)==null?void 0:i.visibleInFilterBar;case"active":return(o=s.props)==null?void 0:o.active;case"visibleAndActive":return((m=s.props)==null?void 0:m.visibleInFilterBar)&&((b=s.props)==null?void 0:b.active);case"mandatory":return(v=s.props)==null?void 0:v.required;default:return!0}},Rt=(l,s)=>Object.keys(l).find(i=>Object.keys(s).every(o=>l[o]!==s[i])),kn=Ye(jn,{name:"FilterBarDialog"}),Ke=l=>{const{filterBarRefs:s,open:i,handleDialogClose:o,children:m,showRestoreButton:b,handleRestoreFilters:v,handleDialogSave:B,handleSelectionChange:C,handleDialogSearch:F,handleDialogCancel:w,onAfterFiltersDialogOpen:$,portalContainer:K,dialogRef:L,isListView:_,setIsListView:y,filteredAttribute:S,setFilteredAttribute:u}=l,j=kn(),[Te,Ne]=n.useState(""),[te,ae]=n.useState({}),Be=n.useRef({}),Ve=n.useRef(null),[ne,Fe]=n.useReducer(a=>!a,!1),[re,we]=n.useState(),h=Ut("@ui5/webcomponents-react"),le=h.getText(Ea),Se=h.getText(Oa),Ge=h.getText(qa),Me=h.getText(Aa),Y=h.getText(zt),de=h.getText(Na),ce=h.getText(Va),ue=h.getText(Ga),me=h.getText(Ma),pe=h.getText(Pa),Pe=h.getText(La),je=h.getText(Wa),De=h.getText(Ha),q=h.getText(Ua),Le=h.getText(za),he=h.getText($a),fe=h.getText(Ka),W=a=>{F&&F(H(a,{value:a.target.value,element:a.target})),Ne(a.target.value)},ge=a=>{B(a,Be.current,te)},We=a=>{ae({}),on(a),w&&w(a),o(a)},_e=a=>{w&&w(a),o(a)},ie=a=>{ae({}),v(a,"dialog",{filters:Array.from(L.current.querySelectorAll("ui5-table-row"))})},A=a=>{y(a.detail.selectedItem.dataset.id==="list")},xe=()=>m.filter(a=>{var D,p,f;return!!(a!=null&&a.props)&&((D=a.props)==null?void 0:D.visible)&&(((f=(p=a.props)==null?void 0:p.label)==null?void 0:f.toLowerCase().includes(Te.toLowerCase()))||Te.length===0)&&Rn(S,a)}).map(a=>{const D=s.current[a.key];let p={};if(D&&(p=ra(D,a)),!a.props.children)return a;let f=a.props.visibleInFilterBar||a.props.required||a.type.displayName!=="FilterGroupItem";return Object.hasOwn(te,a.key)&&(f=te[a.key]),n.cloneElement(a,{"data-with-values":ne,"data-selected":f,"data-react-key":a.key,children:{...a.props.children,props:{...a.props.children.props,...p},ref:R=>{R&&(Be.current[a.key]=R,la(a.props.children.ref,R))}}})}),N=a=>{u(a.detail.selectedOption.dataset.id)},Re=a=>{var ke;if(a.preventDefault(),!a.target.hasAttribute("ui5-table"))return;const D=a.detail.previouslySelectedRows.reduce((J,I)=>({...J,[I.dataset.reactKey]:I}),{}),p=a.detail.selectedRows.reduce((J,I)=>({...J,[I.dataset.reactKey]:I}),{}),f=a.detail.previouslySelectedRows>a.detail.selectedRows?Rt(D,p):Rt(p,D),R=p[f]||D[f];if(((ke=R.dataset)==null?void 0:ke.required)==="true"){we(R);return}typeof C=="function"&&C(H(a,{element:R,checked:R.selected})),ae(J=>({...J,[f]:R.selected}))};if(n.useEffect(()=>{re&&(re.setAttribute("selected","true"),we(void 0))},[re]),!ln())return null;const He=()=>{const a={};return n.Children.forEach(xe(),p=>{const f=p.props.groupName??"default";a[f]?a[f].push(p):a[f]=[p]}),Object.keys(a).sort((p,f)=>p==="default"?-1:f==="role"?1:0).map((p,f)=>e.jsx(un,{headerText:p==="default"?le:p,className:j.groupPanel,children:e.jsx(Tt,{mode:Bt.MultiSelect,"data-component-name":"FilterBarDialogPanelTable",onSelectionChange:Re,children:a[p]})},`${p==="default"?le:p}${f}`))};return rn.createPortal(e.jsxs(dn,{open:i,ref:L,"data-component-name":"FilterBarDialog",onAfterClose:We,onAfterOpen:$,resizable:!0,draggable:!0,className:j.dialogComponent,preventFocusRestore:!0,header:e.jsx(jt,{design:_t.Header,startContent:e.jsx(Qt,{level:mn.H4,title:Y,children:Y}),endContent:b&&e.jsx(M,{design:P.Transparent,onClick:ie,children:de})}),footer:e.jsx(jt,{design:_t.Footer,endContent:e.jsxs(k,{justifyContent:Da.End,className:j.footer,children:[e.jsx(M,{onClick:ge,"data-component-name":"FilterBarDialogSaveBtn",design:P.Emphasized,children:Ge}),e.jsx(M,{design:P.Transparent,onClick:_e,"data-component-name":"FilterBarDialogCancelBtn",children:Se})]})}),children:[e.jsxs(k,{direction:Je.Column,className:j.subheaderContainer,children:[e.jsxs($t,{className:j.subheader,toolbarStyle:Kt.Clear,children:[e.jsxs(se,{onChange:N,title:fe,accessibleName:fe,children:[e.jsx(c,{selected:S==="all","data-id":"all",children:ce}),e.jsx(c,{selected:S==="visible","data-id":"visible",children:me}),e.jsx(c,{selected:S==="active","data-id":"active",children:ue}),e.jsx(c,{selected:S==="visibleAndActive","data-id":"visibleAndActive",children:pe}),e.jsx(c,{selected:S==="mandatory","data-id":"mandatory",children:Pe})]}),e.jsx(Yt,{}),e.jsx(M,{design:P.Transparent,onClick:Fe,"aria-live":"polite",children:ne?Le:q}),e.jsxs(cn,{onSelectionChange:A,children:[e.jsx(Dt,{icon:Fn,"data-id":"list",pressed:_,accessibleName:je}),e.jsx(Dt,{icon:an,"data-id":"group",pressed:!_,accessibleName:De})]})]}),e.jsx(k,{className:j.searchInputContainer,children:e.jsx(Ae,{noTypeahead:!0,placeholder:Me,onInput:W,showClearIcon:!0,icon:e.jsx(Ht,{name:nn}),ref:Ve,className:j.searchInput,"data-component-name":"FilterBarDialogSearchInput"})})]}),e.jsx(Tt,{"data-component-name":"FilterBarDialogTable",hideNoData:!_,mode:Bt.MultiSelect,onSelectionChange:Re,columns:e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:he}),!ne&&e.jsx(Ft,{className:j.tHactive,children:ue})]}),children:_&&xe()}),!_&&He()]}),K??document.body)};try{Ke.displayName="FilterDialog",Ke.__docgenInfo={description:"",displayName:"FilterDialog",props:{filterBarRefs:{defaultValue:null,description:"",name:"filterBarRefs",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleDialogClose:{defaultValue:null,description:"",name:"handleDialogClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},showRestoreButton:{defaultValue:null,description:"",name:"showRestoreButton",required:!0,type:{name:"boolean"}},handleRestoreFilters:{defaultValue:null,description:"",name:"handleRestoreFilters",required:!0,type:{name:"(e: any, source: any, filterElements: any) => void"}},handleDialogSave:{defaultValue:null,description:"",name:"handleDialogSave",required:!0,type:{name:"(e: any, newRefs: any, updatedToggledFilters: any) => void"}},handleSearchValueChange:{defaultValue:null,description:"",name:"handleSearchValueChange",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},handleSelectionChange:{defaultValue:null,description:"",name:"handleSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},handleDialogSearch:{defaultValue:null,description:"",name:"handleDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},handleDialogCancel:{defaultValue:null,description:"",name:"handleDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},dialogRef:{defaultValue:null,description:"",name:"dialogRef",required:!0,type:{name:"MutableRefObject<DialogDomRef>"}},isListView:{defaultValue:null,description:"",name:"isListView",required:!0,type:{name:"boolean"}},setIsListView:{defaultValue:null,description:"",name:"setIsListView",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},filteredAttribute:{defaultValue:null,description:"",name:"filteredAttribute",required:!0,type:{name:"string"}},setFilteredAttribute:{defaultValue:null,description:"",name:"setFilteredAttribute",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"",name:"onAfterFiltersDialogOpen",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}const Oe=Xt(),En=sn(),kt=l=>{var s,i;return l.borderBoxSize?Array.isArray(l.borderBoxSize)?(s=l.borderBoxSize[0])==null?void 0:s.inlineSize:(i=l.borderBoxSize)==null?void 0:i.inlineSize:l.target.getBoundingClientRect().width},On=Ye(gn,{name:"FilterBar"}),ee=n.forwardRef((l,s)=>{var ot,st;const{children:i,hideToolbar:o,filterBarCollapsed:m,considerGroupName:b,filterContainerWidth:v="13.125rem",activeFiltersCount:B,showClearOnFB:C,showGoOnFB:F,hideFilterConfiguration:w,showRestoreOnFB:$,showResetButton:K,hideToggleFiltersButton:L,style:_,className:y,slot:S,search:u,header:j,as:Te="div",portalContainer:Ne,onToggleFilters:te,onFiltersDialogOpen:ae,onAfterFiltersDialogOpen:Be,onFiltersDialogCancel:Ve,onFiltersDialogClose:ne,onFiltersDialogSave:Fe,onClear:re,onFiltersDialogSelectionChange:we,onFiltersDialogSearch:h,onGo:le,onRestore:Se,...Ge}=l,Me=(()=>o?!0:m!==void 0?m:!En)(),[Y,de]=n.useState(Me),[ce,ue]=n.useState(!0),[me,pe]=n.useState(!1),[Pe,je]=n.useState(void 0),De=n.useRef(null),q=n.useRef({}),Le=n.useRef(null),[he,fe]=n.useState({}),[W,ge]=n.useState({}),We=n.useRef({}),_e=n.useRef(),ie=n.useRef(null),A=n.useRef(null),xe=n.useRef(null),N=Ut("@ui5/webcomponents-react"),Re=N.getText(Ya),et=N.getText(Ja),He=N.getText(Xa),a=N.getText(Qa),D=N.getText(Za),p=o?N.getText(en):N.getText(zt),[f,R]=n.useState(!0),[ke,J]=n.useState("all");n.useEffect(()=>{n.Children.toArray(i).forEach(r=>{n.isValidElement(r)&&ge(t=>!r.props.hasOwnProperty("visibleInFilterBar")&&(t==null?void 0:t[r.key])===void 0?{...t,[r.key]:!0}:r.props.hasOwnProperty("visibleInFilterBar")?{...t,[r.key]:r.props.visibleInFilterBar}:t)})},[i,ge]),n.useEffect(()=>{m!==void 0&&de(o?!0:!m)},[de,o,m]);const I=On(),sa=$e(I.filterArea,Y&&(!Oe||Oe&&o)?I.filterAreaOpen:I.filterAreaClosed),be=()=>{var t;const r=(t=De.current)==null?void 0:t.querySelector('[data-component-name="FilterBarSearch"]');return{filters:q!=null&&q.current?Object.values(q.current).filter(Boolean):[],search:r}},da=r=>{te&&te(H(r,{visible:!Y,...be()})),de(!Y)},[tt,ca]=n.useState(!1),ua=(r,t,x)=>{fe(t);const g={elements:t,toggledElements:{...W,...x},...be()};ge(V=>({...V,...x})),Fe&&Fe(H(r,g)),at(r)},ma=r=>{typeof ae=="function"&&ae(r),r.defaultPrevented?pe(!1):pe(!0)},at=r=>{var t;ne&&ne(H(r)),pe(!1),(t=xe.current)==null||t.focus()},pa=r=>{typeof le=="function"&&le(H(r,{elements:q.current,...be()}))},nt=()=>Object.keys(W).length>0?n.Children.toArray(i).map(r=>n.isValidElement(r)&&(W==null?void 0:W[r.key])!==void 0?n.cloneElement(r,{visibleInFilterBar:W[r.key]}):r):n.Children.toArray(i),X=n.useRef({}),ha=()=>{const r={considerGroupName:b,["data-in-fb"]:!0,["data-with-toolbar"]:!o};return nt().filter(t=>{var x,g;return n.isValidElement(t)?((x=t==null?void 0:t.props)==null?void 0:x.visible)&&((g=t.props)==null?void 0:g.visibleInFilterBar):!1}).map(t=>{var g,V,G,dt,ct,ut,mt,pt,ht,ft,gt,xt,bt,vt,Ct,yt,It;if(v&&(r.style={width:v,...t.props.style}),w)return n.cloneElement(t,{...r});We.current[t.key]=t.props.visibleInFilterBar;let x={};if(Object.keys(he).length>0){const O=he[t.key];O&&(x=ra(O,t))}if(!t.props.children)return n.cloneElement(t,{...r});if((g=X.current)!=null&&g[t.key]&&(((G=(V=t.props.children)==null?void 0:V.props)==null?void 0:G.value)!==((ct=(dt=X.current)==null?void 0:dt[t.key])==null?void 0:ct.value)||((mt=(ut=t.props.children)==null?void 0:ut.props)==null?void 0:mt.checked)!==((ht=(pt=X.current)==null?void 0:pt[t.key])==null?void 0:ht.checked)||Array.isArray((gt=(ft=t.props.children)==null?void 0:ft.props)==null?void 0:gt.children)&&((vt=(bt=(xt=t.props.children)==null?void 0:xt.props)==null?void 0:bt.children)==null?void 0:vt.map(O=>O.props.selected).join(","))!==((It=(yt=(Ct=X==null?void 0:X.current)==null?void 0:Ct[t.key])==null?void 0:yt.children)==null?void 0:It.map(O=>O.props.selected).join(",")))){const{[t.key]:O,...Ba}=he;fe(Ba)}return X.current[t.key]=t.props.children.props,n.cloneElement(t,{...r,children:{...t.props.children,props:{...t.props.children.props,...x},ref:O=>{q.current[t.key]=O,me||la(t.props.children.ref,O)}}})})},rt=(r,t,x)=>{t==="filterBar"&&F&&ue(!1),Se&&Se(H(r,{source:t,...x}))};n.useEffect(()=>{ce||ue(!0)},[ce]);const fa=r=>{rt(r,"filterBar",be())},ga=r=>{typeof re=="function"&&re(H(r,be()))},xa=$e(I.outerContainer,y,!o&&I.outerContainerWithToolbar);n.useEffect(()=>{var r;_e.current=(r=u==null?void 0:u.props)==null?void 0:r.value},[(ot=u==null?void 0:u.props)==null?void 0:ot.value]);const lt=_e.current;n.useEffect(()=>{var r,t;lt!==((r=u==null?void 0:u.props)==null?void 0:r.value)&&je((t=u==null?void 0:u.props)==null?void 0:t.value)},[lt,(st=u==null?void 0:u.props)==null?void 0:st.value]);const Ue=e.jsxs(e.Fragment,{children:[F&&e.jsx(M,{onClick:pa,design:P.Emphasized,children:D}),!L&&!o&&!Oe&&e.jsx(M,{onClick:da,design:P.Transparent,className:I.showFiltersBtn,"aria-live":"polite",children:Y?a:He}),C&&e.jsx(M,{onClick:ga,design:P.Transparent,children:Re}),$&&e.jsx(M,{onClick:fa,design:P.Transparent,children:et}),!w&&e.jsx(M,{onClick:ma,"aria-haspopup":"dialog",design:P.Transparent,ref:xe,children:`${p}${B&&parseInt(B,10)>0?` (${B})`:""}`})]}),ba=Ue.props.children.some(Boolean),[E,va]=n.useState(void 0),[ve,Ca]=n.useState(void 0),[Ee,ya]=n.useState(void 0);n.useEffect(()=>{const r=ze(([x])=>{var V,G;const g=(G=(V=x.target)==null?void 0:V.children)==null?void 0:G[0];g&&g.offsetWidth!==Ee&&ya(g.offsetWidth+16)},100),t=new ResizeObserver(r);return o&&A.current&&t.observe(A.current),()=>{r.cancel(),t.disconnect()}},[A.current,o]),n.useEffect(()=>{const r=ze(([x])=>{const g=kt(x);g!==E&&Ca(g)},100),t=new ResizeObserver(r);return o&&A.current&&t.observe(A.current),()=>{r.cancel(),t.disconnect()}},[ve,A.current,o]),n.useEffect(()=>{const r=ze(([x])=>{const g=kt(x);g!==E&&va(g)},100),t=new ResizeObserver(r);return o&&ie.current&&t.observe(ie.current),()=>{r.cancel(),t.disconnect()}},[ie.current,o,E]);const it=ha();n.useEffect(()=>{tt&&ca(r=>(le(r),!1))},[tt]);const Ia=()=>{if(Ee&&ve&&E){const r=[],t=it.length*Ee;if(ve-E>t)return null;const x=t%ve,g=ve-x,V=Math.floor((g-E)/Ee);for(let G=0;G<V;G++)r.push(e.jsx("div",{className:I.spacer},`filter-spacer-${G}`));return r}return null},Ta=Te;return e.jsxs(e.Fragment,{children:[me&&!w&&e.jsx(Ke,{filterBarRefs:q,open:me,handleDialogClose:at,handleRestoreFilters:rt,handleSearchValueChange:je,showRestoreButton:K,handleSelectionChange:we,handleDialogSave:ua,handleDialogSearch:h,handleDialogCancel:Ve,onAfterFiltersDialogOpen:Be,portalContainer:Ne,dialogRef:Le,isListView:f,setIsListView:R,filteredAttribute:ke,setFilteredAttribute:J,children:nt()}),e.jsxs(Ta,{ref:s,className:xa,style:{["--_ui5wcr_filter_group_item_flex_basis"]:v,..._},slot:S,...Ge,children:[!o&&e.jsxs($t,{className:I.filterBarHeader,toolbarStyle:Kt.Clear,children:[j,j&&u&&e.jsx(tn,{}),u&&!Oe&&e.jsx("div",{ref:De,children:_n(u,Pe)}),ba&&e.jsx(Yt,{}),Ue]}),ce&&e.jsxs("div",{className:sa,style:{position:"relative"},ref:A,children:[it,o&&e.jsxs(e.Fragment,{children:[Ia(),e.jsx("div",{style:{width:E?`${E}px`:"120px",minWidth:E?`${E}px`:"120px"},className:I.lastSpacer,children:e.jsx("div",{className:I.filterBarButtons,ref:ie,children:Ue})})]})]})]})]})});ee.displayName="FilterBar";try{ee.displayName="FilterBar",ee.__docgenInfo={description:'The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.\nIn this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".',displayName:"FilterBar",props:{children:{defaultValue:null,description:"Defines the filters of the `FilterBar`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},search:{defaultValue:null,description:"Defines the search field next to the header of the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"search",required:!1,type:{name:"ReactElement<InputPropTypes, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"Specifies header text or variant management that is shown in the toolbar on the first position\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"header",required:!1,type:{name:"ReactNode"}},hideToolbar:{defaultValue:null,description:'Defines whether the toolbar on top of the filter items is displayed.\n\n__Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.',name:"hideToolbar",required:!1,type:{name:"boolean"}},filterBarCollapsed:{defaultValue:null,description:"Defines whether the `FilterBar` is collapsed.",name:"filterBarCollapsed",required:!1,type:{name:"boolean"}},filterContainerWidth:{defaultValue:null,description:"Defines the width of the `FilterGroupItems`.\n\n__Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.",name:"filterContainerWidth",required:!1,type:{name:"Width<string | number>"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed.",name:"considerGroupName",required:!1,type:{name:"boolean"}},showClearOnFB:{defaultValue:null,description:'Defines whether the "Clear" button is displayed in the `FilterBar`.',name:"showClearOnFB",required:!1,type:{name:"boolean"}},showGoOnFB:{defaultValue:null,description:'Defines whether the "Go" button is displayed in the `FilterBar`.',name:"showGoOnFB",required:!1,type:{name:"boolean"}},hideFilterConfiguration:{defaultValue:null,description:'Defines whether the "Filter" button is displayed in the `FilterBar`.\n\n__Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.',name:"hideFilterConfiguration",required:!1,type:{name:"boolean"}},showResetButton:{defaultValue:null,description:'Defines whether the "Reset" button is displayed in the filter configuration dialog.',name:"showResetButton",required:!1,type:{name:"boolean"}},hideToggleFiltersButton:{defaultValue:null,description:'Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.',name:"hideToggleFiltersButton",required:!1,type:{name:"boolean"}},activeFiltersCount:{defaultValue:null,description:'Defines the number of active filters displayed in the "Filter" button.\n\n__Note__: If `hideFilterConfiguration` is `true` this prop has no effect.',name:"activeFiltersCount",required:!1,type:{name:"string | number"}},showRestoreOnFB:{defaultValue:null,description:'Defines whether the "Restore" button is displayed in the `FilterBar`.',name:"showRestoreOnFB",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onToggleFilters:{defaultValue:null,description:"The event is fired when the `FilterBar` is collapsed/expanded.",name:"onToggleFilters",required:!1,type:{name:"(event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogSave:{defaultValue:null,description:'The event is fired when the "Go" button of the filter configuration dialog is clicked.',name:"onFiltersDialogSave",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.',name:"onFiltersDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogOpen:{defaultValue:null,description:"The event is fired when the filter configuration dialog is opened.\n\n__Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.",name:"onFiltersDialogOpen",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"The event is fired after the filter configuration dialog has been opened.",name:"onAfterFiltersDialogOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onFiltersDialogClose:{defaultValue:null,description:"The event is fired when the filter configuration dialog is closed.",name:"onFiltersDialogClose",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogSelectionChange:{defaultValue:null,description:"The event is fired when a filter is selected/unselected in the filter configuration dialog.",name:"onFiltersDialogSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},onFiltersDialogSearch:{defaultValue:null,description:"The event is fired on input in the filter configuration dialog search field.",name:"onFiltersDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},onClear:{defaultValue:null,description:'The event is fired when the "Clear" button is clicked.',name:"onClear",required:!1,type:{name:"(event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onGo:{defaultValue:null,description:'The event is fired when the "Go" button is clicked.',name:"onGo",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onRestore:{defaultValue:null,description:'The event is fired when the "Restore" button is clicked.',name:"onRestore",required:!1,type:{name:"(event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const qn="circle-task-2",ia="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-54 0-100-20t-81-55-55-81.5T0 256t20-99.5T75 75t81-55T256 0z",An=!1,Nn="SAP-icons-v4",Vn="@ui5/webcomponents-icons";qe(qn,{pathData:ia,ltr:An,collection:Nn,packageName:Vn});const Gn="circle-task-2",oa="M256 1q53 0 99.5 20T437 76t55 81 20 99-20 99.5-55 81.5-81.5 55-99.5 20q-52 0-98.5-20T76 437t-55-81.5T1 256t20-99 55-81 81.5-55T256 1z",Mn=!1,Pn="SAP-icons-v5",Ln="@ui5/webcomponents-icons";qe(Gn,{pathData:oa,ltr:Mn,collection:Pn,packageName:Ln});Lt();const Wn="circle-task-2",Hn={filterItem:{marginBlockEnd:"1rem",marginInlineEnd:"1rem",flexBasis:"var(--_ui5wcr_filter_group_item_flex_basis)",maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",flexGrow:1,flexShrink:0,"&[data-with-toolbar=false]":{maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)"}},innerFilterItemContainer:{display:"flex",flexDirection:"column",justifyContent:"start","& :last-child":{width:"100%"}},loadingContainer:{display:"flex",width:"100%",height:"1.625rem",justifyContent:"center"},dialogCellLabel:{marginBottom:"0.25rem",color:Z.sapTextColor},dialogActiveCell:{width:"25%",textAlign:"center"},dialogActiveIcon:{flexGrow:1,color:Z.sapNeutralColor,transform:"scale(-50%)"},labelContainer:{"& :not(:first-child)":{width:"100%"}}},Un=Hn;Wt("ui5-table-row",`
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`);const zn=Ye(Un,{name:"FilterGroupItem"}),d=n.forwardRef((l,s)=>{const i=zn(),{groupName:o="default",considerGroupName:m,label:b="",labelTooltip:v,required:B=!1,visible:C=!0,visibleInFilterBar:F,children:w,loading:$,className:K,slot:L,active:_,...y}=l,S=l["data-in-fb"],u=l["data-with-values"],j=l["data-selected"];return!B&&(!C||S&&!F)?null:S?e.jsx("div",{ref:s,slot:L,...y,className:$e(i.filterItem,K),children:e.jsxs("div",{className:i.innerFilterItemContainer,children:[e.jsx(k,{children:e.jsx(Q,{title:v??b,required:B,showColon:!!b,children:`${m&&o!=="default"?`${o}: `:""}
          ${b}`})}),$?e.jsx(ja,{className:i.loadingContainer,active:!0,size:Ra.Small}):w]})}):e.jsxs(_a,{"data-react-key":l["data-react-key"],selected:j,"data-required":B,"data-component-name":"FilterBarDialogTableRow",children:[e.jsx(wt,{children:e.jsxs(k,{direction:Je.Column,className:i.labelContainer,children:[e.jsx(Q,{className:i.dialogCellLabel,title:v??b,required:B,showColon:!!b&&u,children:b}),u&&w]})}),!u&&e.jsx(wt,{className:i.dialogActiveCell,children:_&&e.jsx(Ht,{name:Wn,className:i.dialogActiveIcon})})]})});d.displayName="FilterGroupItem";d.defaultProps={groupName:"default",visible:!0,required:!1,label:""};try{d.displayName="FilterGroupItem",d.__docgenInfo={description:"Represents a filter belonging to the `FilterBar`.",displayName:"FilterGroupItem",props:{children:{defaultValue:null,description:"Content of the `FilterGroupItem`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:""},description:"Defines the label of the `FilterGroupItem`.<br />\n__Note:__ This label is used for the search in the filter configuration dialog.",name:"label",required:!1,type:{name:"string"}},groupName:{defaultValue:{value:"default"},description:'Defines the group name of the filter.<br />\n__Note:__ If no `groupName` is set, the name defaults to "Basic".',name:"groupName",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Defines the tooltip of the label.<br />\n__Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.",name:"labelTooltip",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Defines whether a loading indicator should be shown in the `FilterGroupItem`.",name:"loading",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the filter is required.<br />\n__Note:__ Required filters cannot be removed from the `FilterBar`.",name:"required",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"Defines whether the filter is visible.",name:"visible",required:!1,type:{name:"boolean"}},visibleInFilterBar:{defaultValue:null,description:"Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.",name:"visibleInFilterBar",required:!1,type:{name:"boolean"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.",name:"considerGroupName",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const $n={title:"Layouts & Floorplans / FilterBar",component:ee,args:{search:e.jsx(Ae,{placeholder:"Search"}),header:e.jsx(Qt,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},Ce={render:l=>e.jsxs(ee,{...l,children:[e.jsx(d,{label:"StepInput",required:!0,children:e.jsx(Xe,{required:!0})}),e.jsx(d,{label:"RatingIndicator",children:e.jsx(pn,{})}),e.jsx(d,{label:"MultiInput",active:!0,children:e.jsx(Zt,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(U,{text:"Argentina",selected:!0}),e.jsx(U,{text:"Bulgaria"}),e.jsx(U,{text:"England"}),e.jsx(U,{text:"Finland"})]})})}),e.jsx(d,{label:"Input",children:e.jsx(Ae,{placeholder:"Placeholder"})}),e.jsx(d,{label:"Switch",children:e.jsx(ea,{})}),e.jsx(d,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{children:"Option 1"}),e.jsx(c,{selected:!0,children:"Option 2"}),e.jsx(c,{children:"Option 3"}),e.jsx(c,{children:"Option 4"})]})}),e.jsx(d,{label:"SELECT w/o initial selected",children:e.jsxs(se,{children:[e.jsx(c,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(c,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(c,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(c,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(c,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(d,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(Ze,{children:[e.jsx(T,{text:"MultiComboBoxItem 1"}),e.jsx(T,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(T,{text:"MultiComboBoxItem 3"}),e.jsx(T,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(d,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(ta,{children:[e.jsx(z,{text:"ComboBoxItem 1"}),e.jsx(z,{text:"ComboBoxItem 2"}),e.jsx(z,{text:"ComboBoxItem 3"}),e.jsx(z,{text:"ComboBoxItem 4"})]})}),e.jsx(d,{label:"Date Picker",groupName:"Group 2",children:e.jsx(Qe,{style:{minWidth:"auto"}})})]})},ye={render:()=>{const[l,s]=n.useState(37),[i,o]=n.useState({}),[m,b]=n.useState("USD"),[v,B]=n.useState(""),[C,F]=n.useState(""),w=y=>{s(y.target.value)},$=y=>{o(y.detail.items.reduce((S,u)=>({...S,[u.getAttribute("text").toLowerCase()]:!0}),{}))},K=y=>{b(y.detail.selectedOption.textContent)},L=y=>{y.detail.valid&&B(y.detail.value)},_=y=>{y.detail.valid&&F(y.detail.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:[e.jsx(d,{label:"Age",active:!!l,required:!0,children:e.jsx(Xe,{value:l,onChange:w,required:!0})}),e.jsx(d,{label:"Countries",active:Object.keys(i).length>0,children:e.jsxs(Ze,{onSelectionChange:$,children:[e.jsx(T,{text:"Argentina",selected:i.argentina}),e.jsx(T,{text:"Bulgaria",selected:i.bulgaria}),e.jsx(T,{text:"Finland",selected:i.finland}),e.jsx(T,{text:"Germany",selected:i.germany}),e.jsx(T,{text:"Ireland",selected:i.ireland}),e.jsx(T,{text:"Ukraine",selected:i.ukraine}),e.jsx(T,{text:"USA",selected:i.usa})]})}),e.jsx(d,{label:"Currency",active:!!m,children:e.jsxs(se,{onChange:K,children:[e.jsx(c,{additionalText:"€",selected:m==="EUR",children:"EUR"}),e.jsx(c,{additionalText:"$",selected:m==="USD",children:"USD"}),e.jsx(c,{additionalText:"£",selected:m==="GBP",children:"GBP"}),e.jsx(c,{additionalText:"₺",selected:m==="TRY",children:"TRY"}),e.jsx(c,{additionalText:"¥",selected:m==="JPY",children:"JPY"})]})}),e.jsx(d,{label:"Date",active:!!v,children:e.jsx(hn,{value:v,onChange:L,style:{minWidth:"auto"},on:!0})}),e.jsx(d,{label:"Date Range",active:!!C,visibleInFilterBar:!1,children:e.jsx(Qe,{value:C,onChange:_,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(k,{direction:Je.Column,children:[e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Age"}),e.jsx(oe,{children:l})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Countries"}),e.jsx(oe,{children:JSON.stringify(i)})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Currency"}),e.jsx(oe,{children:m})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Date"}),e.jsx(oe,{children:v})]}),e.jsxs(k,{children:[e.jsx(Q,{showColon:!0,children:"Date Range"}),e.jsx(oe,{children:C})]})]})]})}},Ie={name:"In DynamicPage",render:l=>e.jsx(Fa,{headerTitle:e.jsx(wa,{header:e.jsxs(ka,{onClick:s=>{s.stopPropagation()},children:[e.jsx(St,{children:"Variant 1"}),e.jsx(St,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(Sa,{children:e.jsxs(ee,{...l,hideToolbar:!0,children:[e.jsx(d,{label:"StepInput",children:e.jsx(Xe,{})}),e.jsx(d,{label:"MultiInput",active:!0,required:!0,children:e.jsx(Zt,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(U,{text:"Argentina",selected:!0}),e.jsx(U,{text:"Bulgaria"}),e.jsx(U,{text:"England"}),e.jsx(U,{text:"Finland"})]})})}),e.jsx(d,{label:"Input",children:e.jsx(Ae,{placeholder:"Placeholder"})}),e.jsx(d,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(ea,{})}),e.jsx(d,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{children:"Option 1"}),e.jsx(c,{selected:!0,children:"Option 2"}),e.jsx(c,{children:"Option 3"}),e.jsx(c,{children:"Option 4"})]})}),e.jsx(d,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(se,{children:[e.jsx(c,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(c,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(c,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(c,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(c,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(d,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(Ze,{children:[e.jsx(T,{text:"MultiComboBoxItem 1"}),e.jsx(T,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(T,{text:"MultiComboBoxItem 3"}),e.jsx(T,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(d,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(ta,{children:[e.jsx(z,{text:"ComboBoxItem 1"}),e.jsx(z,{text:"ComboBoxItem 2"}),e.jsx(z,{text:"ComboBoxItem 3"}),e.jsx(z,{text:"ComboBoxItem 4"})]})}),e.jsx(d,{label:"Date Picker",groupName:"Group 2",children:e.jsx(Qe,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(oe,{style:{color:"white"},children:"Content"})})})};var Et,Ot,qt;Ce.parameters={...Ce.parameters,docs:{...(Et=Ce.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(qt=(Ot=Ce.parameters)==null?void 0:Ot.docs)==null?void 0:qt.source}}};var At,Nt,Vt;ye.parameters={...ye.parameters,docs:{...(At=ye.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Vt=(Nt=ye.parameters)==null?void 0:Nt.docs)==null?void 0:Vt.source}}};var Gt,Mt,Pt;Ie.parameters={...Ie.parameters,docs:{...(Gt=Ie.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
//# sourceMappingURL=FilterBar.stories-bcb6ac2f.js.map
