import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{s as Ft}from"./search-qOG4WpHE.js";import{e as H}from"./index-ENBflQbU.js";import{c as Le}from"./clsx-Zbgk8kpT.js";import{r}from"./index-OjgoNOWw.js";import{c as Me}from"./react-jss.esm-fzYOEaou.js";import{u as _t,a3 as ta,f as aa,O as na,a4 as ra,a5 as It,_ as la,T as ia,a6 as oa,a7 as sa,a8 as da,a9 as ua,aa as ca,ab as pa,ac as ha,ad as fa,ae as ma,af as ga,ag as va,Z as ba,ah as ya,ai as Ta,aj as Ca,ak as xa,B as wa,al as Ba}from"./i18n-defaults-8iJXv8tC.js";import{c as Fa}from"./circle-task-2-l7D6EbZb.js";import{a as St}from"./addCustomCSSWithScoping-tGNiKL_K.js";import{B as _a}from"./index-9HAW5b8q.js";import{L as ht}from"./index-x-7bG_XB.js";import{F as de,b as Rt,c as Ia}from"./index-Qwyc25sK.js";import{T as G}from"./ThemingParameters-UghqSl-x.js";import{b as Sa,c as ft,T as mt,e as gt,a as vt}from"./index-VT2R2Tkk.js";import{B as Ra}from"./BusyIndicator-FNk7agZk.js";import{I as We}from"./index-jDcqNIxI.js";import{T as Dt,b as Et}from"./index-_aOtie1C.js";import{T as qt}from"./index-9x3Nihny.js";import{C as Nt}from"./CssSizeVariables-eR3x6QxW.js";import{g as Da}from"./group-2-OzfVRjVL.js";import{j as Ea,k as Vt,o as qa,n as Na}from"./UI5Element-ZYvPEp0D.js";import{r as At}from"./Icons-cAVhCySg.js";import{r as bt}from"./index-QYh6idnL.js";import{d as Va}from"./withWebComponent-c-uI2wMj.js";import{s as Aa}from"./stopPropagation-dV8jBYUw.js";import{M as ka,a as ja,b as yt}from"./index-T9rLnYla.js";import{e as Oa}from"./utils-_oNUceU3.js";import{B as Tt,a as Ct}from"./index-IgXNAIJI.js";import{S as La}from"./index-JASAWDxl.js";import{O as se}from"./index-JEMBwjZ2.js";import{a as Ha,S as xt}from"./index-SNgUhGB8.js";import{I as Pa}from"./index-UVbhjXpW.js";import{P as Ma}from"./index-xPf89kuY.js";import{u as Wa}from"./useIsomorphicId-G0VPUEKO.js";import{D as Ga}from"./index-isdI21WT.js";import{T as Ua}from"./index-Z_i1og7Y.js";import{T as za}from"./Title-i5azmM6D.js";import{B as V}from"./index-3rIpJUwf.js";import{B as A}from"./Button-6A8kFSGe.js";import{d as je}from"./debounce-F9irgL9Y.js";const $a={filterItem:{marginBlockEnd:"1rem",marginInlineEnd:"1rem",flexBasis:"var(--_ui5wcr_filter_group_item_flex_basis)",maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",flexGrow:1,flexShrink:0,"&[data-with-toolbar=false]":{maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)"}},innerFilterItemContainer:{display:"flex",flexDirection:"column",justifyContent:"start","& > :last-child":{width:"100%"}},loadingContainer:{display:"flex",width:"100%",height:"1.625rem",justifyContent:"center"},dialogCellLabel:{marginBottom:"0.25rem",color:G.sapTextColor},dialogActiveCell:{width:"25%",textAlign:"center"},dialogActiveIcon:{flexGrow:1,color:G.sapNeutralColor,transform:"scale(-50%)"},labelContainer:{"& :not(:first-child)":{width:"100%"}}},Ka=$a;St("ui5-table-row",`
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`);const Xa=Me(Ka,{name:"FilterGroupItem"}),ue=r.forwardRef((l,u)=>{const d=Xa(),{groupName:i="default",considerGroupName:h,label:m="",labelTooltip:b,required:y=!1,visible:k=!0,visibleInFilterBar:j,children:v,loading:I,className:Y,slot:U,active:S,...J}=l,C=l["data-in-fb"],c=l["data-with-values"],T=l["data-selected"];return!y&&(!k||C&&!j)?null:C?e.jsx("div",{ref:u,slot:U,...J,className:Le(d.filterItem,Y),children:e.jsxs("div",{className:d.innerFilterItemContainer,children:[e.jsx(de,{children:e.jsx(ht,{title:b??m,required:y,showColon:!!m,children:`${h&&i!=="default"?`${i}: `:""}
          ${m}`})}),I?e.jsx(_a,{className:d.loadingContainer,active:!0,size:Ra.Small}):v]})}):e.jsxs(Sa,{"data-react-key":l["data-react-key"],selected:T,"data-required":y,"data-component-name":"FilterBarDialogTableRow",children:[e.jsx(ft,{children:e.jsxs(de,{direction:Rt.Column,className:d.labelContainer,children:[e.jsx(ht,{className:d.dialogCellLabel,title:b??m,required:y,showColon:!!m&&c,children:m}),c&&v]})}),!c&&e.jsx(ft,{className:d.dialogActiveCell,children:S&&e.jsx(We,{name:Fa,className:d.dialogActiveIcon})})]})});ue.displayName="FilterGroupItem";ue.defaultProps={groupName:"default",visible:!0,required:!1,label:""};try{ue.displayName="FilterGroupItem",ue.__docgenInfo={description:"Represents a filter belonging to the `FilterBar`.",displayName:"FilterGroupItem",props:{children:{defaultValue:null,description:"Content of the `FilterGroupItem`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:""},description:"Defines the label of the `FilterGroupItem`.<br />\n__Note:__ This label is used for the search in the filter configuration dialog.",name:"label",required:!1,type:{name:"string"}},groupName:{defaultValue:{value:"default"},description:'Defines the group name of the filter.<br />\n__Note:__ If no `groupName` is set, the name defaults to "Basic".',name:"groupName",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Defines the tooltip of the label.<br />\n__Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.",name:"labelTooltip",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Defines whether a loading indicator should be shown in the `FilterGroupItem`.",name:"loading",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the filter is required.<br />\n__Note:__ Required filters cannot be removed from the `FilterBar`.",name:"required",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"Defines whether the filter is visible.",name:"visible",required:!1,type:{name:"boolean"}},visibleInFilterBar:{defaultValue:null,description:"Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.",name:"visibleInFilterBar",required:!1,type:{name:"boolean"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.",name:"considerGroupName",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ya={outerContainer:{background:G.sapObjectHeader_Background},outerContainerWithToolbar:{paddingBlock:"0.5rem 1px",paddingInline:"2rem",boxShadow:G.sapContent_HeaderShadow},filterBarHeader:{alignItems:"center",display:"flex",background:G.sapObjectHeader_Background,minHeight:"3rem",paddingBlockEnd:"0.5rem",boxShadow:"none",flexWrap:"wrap",'& [data-component-name="ToolbarContent"] > *:first-child':{marginInlineStart:0}},filterArea:{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBlockStart:"1rem",marginBlockEnd:"1rem",background:G.sapObjectHeader_Background,transition:"max-height 0.2s ease-out, opacity 0.2s ease-in"},filterAreaClosed:{maxHeight:"0",opacity:0,padding:0,margin:0,overflowY:"auto"},filterAreaOpen:{opacity:1},showFiltersBtn:{minWidth:"108px"},loadingContainer:{marginBlockEnd:"0.5rem",display:"flex",width:"100%",justifyContent:"center"},filterBarButtons:{display:"flex",alignItems:"center",position:"absolute",insetInline:"auto 0",marginInlineEnd:"1rem",marginBlockEnd:"1rem","& > *:not(:first-child)":{marginInlineStart:"0.25rem"},"& > *:not(:last-child)":{marginInlineEnd:"0.25rem"}},searchContainer:{"& > [ui5-input]":{width:"100%"}},spacer:{height:0,marginBlockStart:0,marginInlineEnd:"1rem",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))"},lastSpacer:{height:Nt.ui5WcrElementHeight,flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",marginInlineEnd:"1rem"}},Ja=Ya,Za="list",kt="M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z",Qa=!1,en="SAP-icons-v4",tn="@ui5/webcomponents-icons";At(Za,{pathData:kt,ltr:Qa,collection:en,packageName:tn});const an="list",jt="M454 83H186q-11 0-18.5-7T160 58t7.5-18.5T186 32h268q11 0 18.5 7.5T480 58t-7.5 18-18.5 7zM64 32q13 0 22.5 9.5T96 64t-9.5 22.5T64 96t-22.5-9.5T32 64t9.5-22.5T64 32zm0 128q13 0 22.5 9.5T96 192t-9.5 22.5T64 224t-22.5-9.5T32 192t9.5-22.5T64 160zm390 51H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 160h268q11 0 18.5 7.5T480 186t-7.5 18-18.5 7zm0 128H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 288h268q11 0 18.5 7.5T480 314t-7.5 18-18.5 7zM64 288q13 0 22.5 9.5T96 320t-9.5 22.5T64 352t-22.5-9.5T32 320t9.5-22.5T64 288zm390 179H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 416h268q11 0 18.5 7.5T480 442t-7.5 18-18.5 7zM64 416q13 0 22.5 9.5T96 448t-9.5 22.5T64 480t-22.5-9.5T32 448t9.5-22.5T64 416z",nn=!1,rn="SAP-icons-v5",ln="@ui5/webcomponents-icons";At(an,{pathData:jt,ltr:nn,collection:rn,packageName:ln});Ea();const on="list",sn=Vt()?{maxWidth:"100%",maxHeight:"100%",height:"100%",width:"100%",borderRadius:0,top:0,left:0}:{},dn={tHactive:{width:"25%","&::part(column)":{textAlign:"center"}},groupPanel:{"&::part(content)":{padding:0}},searchInputContainer:{height:Nt.ui5WcrToolbarHeight,paddingBottom:"0.25rem"},searchInput:{width:"100%"},dialogComponent:{width:"40rem","&::part(content), &::part(footer), &::part(header)":{padding:0},...sn},header:{width:"100%",paddingInline:"1rem",paddingBlock:"0.25rem 0","& *":{marginBlock:"0.25rem",marginInline:0},"& ui5-input":{width:"100%"}},subheaderContainer:{paddingBlock:0,paddingInline:"1rem",boxShadow:G.sapContent_HeaderShadow},subheader:{paddingBlockEnd:"0.25rem",'& [data-component-name="ToolbarContent"] >:last-child':{margin:0},'& [data-component-name="ToolbarContent"] >:first-child':{marginInline:"0 0.25rem "}},footer:{"& :not(:last-child)":{marginInlineEnd:"0.25rem"}}},un=dn,cn=new Set(["UI5-COMBOBOX","UI5-DATE-PICKER","UI5-DATERANGE-PICKER","UI5-DATETIME-PICKER","UI5-DURATION-PICKER","UI5-INPUT","UI5-MULTI-INPUT","UI5-RATING-INDICATOR","UI5-STEP-INPUT","UI5-TIME-PICKER"]),Ot=(l,u)=>{const d=l.tagName,i=Oa(d);let h={};if(cn.has(i)&&(h={value:l.value??""}),i==="UI5-SELECT"||i==="UI5-MULTI-COMBOBOX"){const m=u.props.children.props.children;let b;if(m){const y=Array.from(l.children).map((v,I)=>v.selected?I:!1).filter(v=>v!==!1),k=new Set(y);b=(Array.isArray(m)?m:[m]).map((v,I)=>k.has(I)?r.cloneElement(v,{selected:!0}):r.cloneElement(v,{selected:!1}))}h={children:b}}return(i==="UI5-SWITCH"||i==="UI5-CHECKBOX")&&(h={checked:l.checked}),h},pn=(l,u,d={})=>{var h;const i={...d,...l==null?void 0:l.props};return r.cloneElement(l,{...i,"data-component-name":"FilterBarSearch",value:u??((h=l==null?void 0:l.props)==null?void 0:h.value)})},Lt=(l,u)=>{l&&(typeof l=="function"?l(u):l.hasOwnProperty("current")&&(l.current=u))};St("ui5-table",`
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
 `);const hn=(l,u)=>{var d,i,h,m,b;switch(l){case"all":return!0;case"visible":return(d=u.props)==null?void 0:d.visibleInFilterBar;case"active":return(i=u.props)==null?void 0:i.active;case"visibleAndActive":return((h=u.props)==null?void 0:h.visibleInFilterBar)&&((m=u.props)==null?void 0:m.active);case"mandatory":return(b=u.props)==null?void 0:b.required;default:return!0}},wt=(l,u)=>Object.keys(l).find(d=>Object.keys(u).every(i=>l[i]!==u[d])),fn=Me(un,{name:"FilterBarDialog"}),He=l=>{const{filterBarRefs:u,open:d,handleDialogClose:i,children:h,showRestoreButton:m,handleRestoreFilters:b,handleDialogSave:y,handleSelectionChange:k,handleDialogSearch:j,handleDialogCancel:v,onAfterFiltersDialogOpen:I,portalContainer:Y,dialogRef:U,isListView:S,setIsListView:J,filteredAttribute:C,setFilteredAttribute:c}=l,T=fn(),ce=Wa(),[pe,he]=r.useState(""),[z,Z]=r.useState({}),fe=r.useRef({}),me=r.useRef(null),[$,ge]=r.useReducer(t=>!t,!1),[Re,ve]=r.useState(!1),[P,Q]=r.useState(),f=_t("@ui5/webcomponents-react"),be=f.getText(ta),K=f.getText(aa),ee=f.getText(na),te=f.getText(ra),ae=f.getText(It),ne=f.getText(la),re=f.getText(ia),ye=f.getText(oa),Te=f.getText(sa),Ce=f.getText(da),R=f.getText(ua),De=f.getText(ca),le=f.getText(pa),xe=f.getText(ha),O=f.getText(fa),ie=f.getText(ma),we=f.getText(ga),Be=f.getText(va),X=t=>{j&&j(H(t,{value:t.target.value,element:t.target})),he(t.target.value)},D=t=>{y(t,fe.current,z)},Fe=t=>{Z({}),Aa(t),v&&v(t),i(t)},B=t=>{v&&v(t),i(t)},Ee=()=>{ve(!0)},qe=t=>{J(t.detail.selectedItem.dataset.id==="list")},Ne=t=>{t.detail.action==="OK"&&(Z({}),b(t,"dialog",{filters:Array.from(U.current.querySelectorAll("ui5-table-row"))})),ve(!1)},_e=()=>h.filter(t=>{var x,p,s;return!!(t!=null&&t.props)&&((x=t.props)==null?void 0:x.visible)&&(((s=(p=t.props)==null?void 0:p.label)==null?void 0:s.toLowerCase().includes(pe.toLowerCase()))||pe.length===0)&&hn(C,t)}).map(t=>{const x=u.current[t.key];let p={};if(x&&(p=Ot(x,t)),!t.props.children)return t;let s=t.props.visibleInFilterBar||t.props.required||t.type.displayName!=="FilterGroupItem";return Object.hasOwn(z,t.key)&&(s=z[t.key]),r.cloneElement(t,{"data-with-values":$,"data-selected":s,"data-react-key":t.key,children:{...t.props.children,props:{...t.props.children.props,...p},ref:E=>{E&&(fe.current[t.key]=E,Lt(t.props.children.ref,E))}}})}),Ve=t=>{c(t.detail.selectedOption.dataset.id)},Ie=t=>{var x;if(t.target.hasAttribute("ui5-table")){t.preventDefault();const p=t.detail.previouslySelectedRows.reduce((M,L)=>({...M,[L.dataset.reactKey]:L}),{}),s=t.detail.selectedRows.reduce((M,L)=>({...M,[L.dataset.reactKey]:L}),{}),E=t.detail.previouslySelectedRows>t.detail.selectedRows?wt(p,s):wt(s,p),w=s[E]||p[E];if(((x=w.dataset)==null?void 0:x.required)==="true"){Q(w);return}typeof k=="function"&&k(H(t,{element:w,checked:w.selected})),Z(M=>({...M,[E]:w.selected}))}};if(r.useEffect(()=>{P&&(P.setAttribute("selected","true"),Q(void 0))},[P]),!Va())return null;const Ae=()=>{const t={};return r.Children.forEach(_e(),p=>{const s=p.props.groupName??"default";t[s]?t[s].push(p):t[s]=[p]}),Object.keys(t).sort((p,s)=>p==="default"?-1:s==="role"?1:0).map((p,s)=>e.jsx(Ma,{headerText:p==="default"?be:p,className:T.groupPanel,children:e.jsx(mt,{mode:gt.MultiSelect,"data-component-name":"FilterBarDialogPanelTable",onSelectionChange:Ie,children:t[p]})},`${p==="default"?be:p}${s}`))};return e.jsxs(e.Fragment,{children:[bt.createPortal(e.jsxs(Ga,{open:d,ref:U,"data-component-name":"FilterBarDialog",onAfterClose:Fe,onAfterOpen:I,resizable:!0,draggable:!0,className:T.dialogComponent,preventFocusRestore:!0,initialFocus:`${ce}-fb-dialog-search`,header:e.jsx(Tt,{design:Ct.Header,startContent:e.jsx(Ua,{level:za.H4,title:ae,children:ae}),endContent:m&&e.jsx(V,{design:A.Transparent,onClick:Ee,children:ne})}),footer:e.jsx(Tt,{design:Ct.Footer,endContent:e.jsxs(de,{justifyContent:Ia.End,className:T.footer,children:[e.jsx(V,{onClick:D,"data-component-name":"FilterBarDialogSaveBtn",design:A.Emphasized,children:ee}),e.jsx(V,{design:A.Transparent,onClick:B,"data-component-name":"FilterBarDialogCancelBtn",children:K})]})}),children:[e.jsxs(de,{direction:Rt.Column,className:T.subheaderContainer,children:[e.jsxs(Dt,{className:T.subheader,toolbarStyle:Et.Clear,children:[e.jsxs(La,{onChange:Ve,title:we,accessibleName:we,children:[e.jsx(se,{selected:C==="all","data-id":"all",children:re}),e.jsx(se,{selected:C==="visible","data-id":"visible",children:Te}),e.jsx(se,{selected:C==="active","data-id":"active",children:ye}),e.jsx(se,{selected:C==="visibleAndActive","data-id":"visibleAndActive",children:Ce}),e.jsx(se,{selected:C==="mandatory","data-id":"mandatory",children:R})]}),e.jsx(qt,{}),e.jsx(V,{design:A.Transparent,onClick:ge,"aria-live":"polite",children:$?O:xe}),e.jsxs(Ha,{onSelectionChange:qe,children:[e.jsx(xt,{icon:on,"data-id":"list",pressed:S,accessibleName:De}),e.jsx(xt,{icon:Da,"data-id":"group",pressed:!S,accessibleName:le})]})]}),e.jsx(de,{className:T.searchInputContainer,children:e.jsx(Pa,{id:`${ce}-fb-dialog-search`,noTypeahead:!0,placeholder:te,onInput:X,showClearIcon:!0,icon:e.jsx(We,{name:Ft}),ref:me,className:T.searchInput,"data-component-name":"FilterBarDialogSearchInput"})})]}),e.jsx(mt,{"data-component-name":"FilterBarDialogTable",hideNoData:!S,mode:gt.MultiSelect,onSelectionChange:Ie,columns:e.jsxs(e.Fragment,{children:[e.jsx(vt,{children:ie}),!$&&e.jsx(vt,{className:T.tHactive,children:ye})]}),children:S&&_e()}),!S&&Ae()]}),Y??document.body),m&&Re&&bt.createPortal(e.jsx(ka,{open:!0,type:ja.Warning,actions:[yt.OK,yt.Cancel],onClose:Ne,"data-component-name":"FilterBarDialogResetMessageBox",children:Be}),document.body)]})};try{He.displayName="FilterDialog",He.__docgenInfo={description:"",displayName:"FilterDialog",props:{filterBarRefs:{defaultValue:null,description:"",name:"filterBarRefs",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleDialogClose:{defaultValue:null,description:"",name:"handleDialogClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},showRestoreButton:{defaultValue:null,description:"",name:"showRestoreButton",required:!0,type:{name:"boolean"}},handleRestoreFilters:{defaultValue:null,description:"",name:"handleRestoreFilters",required:!0,type:{name:"(e: any, source: any, filterElements: any) => void"}},handleDialogSave:{defaultValue:null,description:"",name:"handleDialogSave",required:!0,type:{name:"(e: any, newRefs: any, updatedToggledFilters: any) => void"}},handleSearchValueChange:{defaultValue:null,description:"",name:"handleSearchValueChange",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},handleSelectionChange:{defaultValue:null,description:"",name:"handleSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},handleDialogSearch:{defaultValue:null,description:"",name:"handleDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},handleDialogCancel:{defaultValue:null,description:"",name:"handleDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},dialogRef:{defaultValue:null,description:"",name:"dialogRef",required:!0,type:{name:"MutableRefObject<DialogDomRef>"}},isListView:{defaultValue:null,description:"",name:"isListView",required:!0,type:{name:"boolean"}},setIsListView:{defaultValue:null,description:"",name:"setIsListView",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},filteredAttribute:{defaultValue:null,description:"",name:"filteredAttribute",required:!0,type:{name:"string"}},setFilteredAttribute:{defaultValue:null,description:"",name:"setFilteredAttribute",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"",name:"onAfterFiltersDialogOpen",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}const Oe=Vt(),mn=qa(),gn=Na(),Bt=l=>{var u,d;return l.borderBoxSize?Array.isArray(l.borderBoxSize)?(u=l.borderBoxSize[0])==null?void 0:u.inlineSize:(d=l.borderBoxSize)==null?void 0:d.inlineSize:l.target.getBoundingClientRect().width},vn=Me(Ja,{name:"FilterBar"}),Pe=r.forwardRef((l,u)=>{var Ye,Je;const{children:d,hideToolbar:i,filterBarCollapsed:h,considerGroupName:m,filterContainerWidth:b="13.125rem",activeFiltersCount:y,showClearOnFB:k,showGoOnFB:j,hideFilterConfiguration:v,showRestoreOnFB:I,showResetButton:Y,hideToggleFiltersButton:U,style:S,className:J,slot:C,search:c,header:T,as:ce="div",portalContainer:pe,onToggleFilters:he,onFiltersDialogOpen:z,onAfterFiltersDialogOpen:Z,onFiltersDialogCancel:fe,onFiltersDialogClose:me,onFiltersDialogSave:$,onClear:ge,onFiltersDialogSelectionChange:Re,onFiltersDialogSearch:ve,onGo:P,onRestore:Q,...f}=l,be=(()=>i?!0:h!==void 0?h:!(mn&&!gn))(),[K,ee]=r.useState(be),[te,ae]=r.useState(!0),[ne,re]=r.useState(!1),[ye,Te]=r.useState(void 0),Ce=r.useRef(null),R=r.useRef({}),De=r.useRef(null),[le,xe]=r.useState({}),[O,ie]=r.useState({}),we=r.useRef({}),Be=r.useRef(),X=r.useRef(null),D=r.useRef(null),Fe=r.useRef(null),B=_t("@ui5/webcomponents-react"),Ee=B.getText(ba),qe=B.getText(ya),Ne=B.getText(Ta),_e=B.getText(Ca),Ve=B.getText(xa),Ie=B.getText(wa),Ge=i?B.getText(Ba):B.getText(It),[Ae,t]=r.useState(!0),[x,p]=r.useState("all");r.useEffect(()=>{r.Children.toArray(d).forEach(n=>{if(r.isValidElement(n)){const a=n.key;ie(o=>!n.props.hasOwnProperty("visibleInFilterBar")&&(o==null?void 0:o[a])===void 0?{...o,[a]:!0}:n.props.hasOwnProperty("visibleInFilterBar")?{...o,[a]:n.props.visibleInFilterBar}:o)}})},[d,ie]),r.useEffect(()=>{h!==void 0&&ee(i?!0:!h)},[ee,i,h]);const s=vn(),E=Le(s.filterArea,K&&(!Oe||Oe&&i)?s.filterAreaOpen:s.filterAreaClosed),w=()=>{var a;const n=(a=Ce.current)==null?void 0:a.querySelector('[data-component-name="FilterBarSearch"]');return{filters:R!=null&&R.current?Object.values(R.current).filter(Boolean):[],search:n}},M=n=>{he&&he(H(n,{visible:!K,...w()})),ee(!K)},[L,Ht]=r.useState(!1),Pt=(n,a,o)=>{xe(a);const g={elements:a,toggledElements:{...O,...o},...w()};ie(q=>({...q,...o})),$&&$(H(n,g)),Ue(n)},Mt=n=>{typeof z=="function"&&z(n),n.defaultPrevented?re(!1):re(!0)},Ue=n=>{var a;me&&me(H(n)),re(!1),(a=Fe.current)==null||a.focus()},Wt=n=>{typeof P=="function"&&P(H(n,{elements:R.current,...w()}))},ze=()=>Object.keys(O).length>0?r.Children.toArray(d).map(n=>{if(r.isValidElement(n)){const a=n.key;if((O==null?void 0:O[a])!==void 0)return r.cloneElement(n,{visibleInFilterBar:O[a]})}return n}):r.Children.toArray(d),W=r.useRef({}),Gt=()=>{const n={considerGroupName:m,"data-in-fb":!0,"data-with-toolbar":!i};return ze().filter(a=>{var o,g;return r.isValidElement(a)?((o=a==null?void 0:a.props)==null?void 0:o.visible)&&((g=a.props)==null?void 0:g.visibleInFilterBar):!1}).map(a=>{var q,N,Ze,Qe,et,tt,at,nt,rt,lt,it,ot,st,dt,ut,ct,pt;const o=a.key;if(b&&(n.style={width:b,...a.props.style}),v)return r.cloneElement(a,{...n});we.current[o]=a.props.visibleInFilterBar;let g={};if(Object.keys(le).length>0){const _=le[o];_&&(g=Ot(_,a))}if(!a.props.children)return r.cloneElement(a,{...n});if((q=W.current)!=null&&q[o]&&(((Ze=(N=a.props.children)==null?void 0:N.props)==null?void 0:Ze.value)!==((et=(Qe=W.current)==null?void 0:Qe[o])==null?void 0:et.value)||((at=(tt=a.props.children)==null?void 0:tt.props)==null?void 0:at.checked)!==((rt=(nt=W.current)==null?void 0:nt[o])==null?void 0:rt.checked)||Array.isArray((it=(lt=a.props.children)==null?void 0:lt.props)==null?void 0:it.children)&&((dt=(st=(ot=a.props.children)==null?void 0:ot.props)==null?void 0:st.children)==null?void 0:dt.map(_=>_.props.selected).join(","))!==((pt=(ct=(ut=W==null?void 0:W.current)==null?void 0:ut[o])==null?void 0:ct.children)==null?void 0:pt.map(_=>_.props.selected).join(",")))){const{[a.key]:_,...ea}=le;xe(ea)}return W.current[o]=a.props.children.props,r.cloneElement(a,{...n,children:{...a.props.children,props:{...a.props.children.props,...g},ref:_=>{R.current[o]=_,ne||Lt(a.props.children.ref,_)}}})})},$e=(n,a,o)=>{a==="filterBar"&&j&&ae(!1),Q&&Q(H(n,{source:a,...o}))};r.useEffect(()=>{te||ae(!0)},[te]);const Ut=n=>{$e(n,"filterBar",w())},zt=n=>{typeof ge=="function"&&ge(H(n,w()))},$t=Le(s.outerContainer,J,!i&&s.outerContainerWithToolbar);r.useEffect(()=>{var n;Be.current=(n=c==null?void 0:c.props)==null?void 0:n.value},[(Ye=c==null?void 0:c.props)==null?void 0:Ye.value]);const Ke=Be.current;r.useEffect(()=>{var n,a;Ke!==((n=c==null?void 0:c.props)==null?void 0:n.value)&&Te((a=c==null?void 0:c.props)==null?void 0:a.value)},[Ke,(Je=c==null?void 0:c.props)==null?void 0:Je.value]);const ke=e.jsxs(e.Fragment,{children:[j&&e.jsx(V,{onClick:Wt,design:A.Emphasized,children:Ve}),!U&&!i&&!Oe&&e.jsx(V,{onClick:M,design:A.Transparent,className:s.showFiltersBtn,"aria-live":"polite",children:K?_e:Ne}),k&&e.jsx(V,{onClick:zt,design:A.Transparent,children:Ee}),I&&e.jsx(V,{onClick:Ut,design:A.Transparent,children:qe}),!v&&e.jsx(V,{onClick:Mt,"aria-haspopup":"dialog",design:A.Transparent,ref:Fe,children:`${Ge}${y&&parseInt(y,10)>0?` (${y})`:""}`})]}),Kt=ke.props.children.some(Boolean),[F,Xt]=r.useState(void 0),[oe,Yt]=r.useState(void 0),[Se,Jt]=r.useState(void 0);r.useEffect(()=>{const n=je(([o])=>{var q,N;const g=(N=(q=o.target)==null?void 0:q.children)==null?void 0:N[0];g&&g.offsetWidth!==Se&&Jt(g.offsetWidth+16)},100),a=new ResizeObserver(n);return i&&D.current&&a.observe(D.current),()=>{n.cancel(),a.disconnect()}},[D.current,i]),r.useEffect(()=>{const n=je(([o])=>{const g=Bt(o);g!==F&&Yt(g)},100),a=new ResizeObserver(n);return i&&D.current&&a.observe(D.current),()=>{n.cancel(),a.disconnect()}},[oe,D.current,i]),r.useEffect(()=>{const n=je(([o])=>{const g=Bt(o);g!==F&&Xt(g)},100),a=new ResizeObserver(n);return i&&X.current&&a.observe(X.current),()=>{n.cancel(),a.disconnect()}},[X.current,i,F]);const Xe=Gt();r.useEffect(()=>{L&&Ht(n=>(P(n),!1))},[L]);const Zt=()=>{if(Se&&oe&&F){const n=[],a=Xe.length*Se;if(oe-F>a)return null;const o=a%oe,g=oe-o,q=Math.floor((g-F)/Se)-1;for(let N=0;N<q;N++)n.push(e.jsx("div",{className:s.spacer},`filter-spacer-${N}`));return n}return null},Qt=ce;return e.jsxs(e.Fragment,{children:[ne&&!v&&e.jsx(He,{filterBarRefs:R,open:ne,handleDialogClose:Ue,handleRestoreFilters:$e,handleSearchValueChange:Te,showRestoreButton:Y,handleSelectionChange:Re,handleDialogSave:Pt,handleDialogSearch:ve,handleDialogCancel:fe,onAfterFiltersDialogOpen:Z,portalContainer:pe,dialogRef:De,isListView:Ae,setIsListView:t,filteredAttribute:x,setFilteredAttribute:p,children:ze()}),e.jsxs(Qt,{ref:u,className:$t,style:{"--_ui5wcr_filter_group_item_flex_basis":b,...S},slot:C,...f,children:[!i&&e.jsxs(Dt,{className:s.filterBarHeader,toolbarStyle:Et.Clear,children:[T,Kt&&e.jsx(qt,{}),ke]}),te&&e.jsxs("div",{className:E,style:{position:"relative"},ref:D,children:[c&&e.jsx(ue,{"data-in-fb":!0,visibleInFilterBar:!0,"data-with-toolbar":!i,children:e.jsx("div",{ref:Ce,className:s.searchContainer,children:pn(c,ye,{placeholder:Ie,icon:e.jsx(We,{name:Ft}),noTypeahead:!0,showClearIcon:!0})})}),Xe,i&&e.jsxs(e.Fragment,{children:[Zt(),e.jsx("div",{style:{width:F?`${F}px`:"120px",minWidth:F?`${F}px`:"120px"},className:s.lastSpacer,children:e.jsx("div",{className:s.filterBarButtons,ref:X,children:ke})})]})]})]})]})});Pe.displayName="FilterBar";try{Pe.displayName="FilterBar",Pe.__docgenInfo={description:'The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.\nIn this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting the respective checkbox.\n\n__Note:__ We recommend always fully controlling the filters, as otherwise, you may encounter discrepancies between the filters dialog and the FilterBar, especially when using complex or custom filter components.',displayName:"FilterBar",props:{children:{defaultValue:null,description:"Defines the filters of the `FilterBar`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},search:{defaultValue:null,description:"Defines the search field rendered as first filter item.\n\n__Note:__ Per default `placeholder`, `icon`, `noTypeahead` and `showClearIcon` are applied to the search input.\n\n__Note:__ The field is only available in the FilterBar not inside the filter configuration dialog.",name:"search",required:!1,type:{name:"ReactElement<InputPropTypes, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"Specifies header text or variant management that is shown in the toolbar on the first position\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"header",required:!1,type:{name:"ReactNode"}},hideToolbar:{defaultValue:null,description:'Defines whether the toolbar on top of the filter items is displayed.\n\n__Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.',name:"hideToolbar",required:!1,type:{name:"boolean"}},filterBarCollapsed:{defaultValue:null,description:"Defines whether the `FilterBar` is collapsed.",name:"filterBarCollapsed",required:!1,type:{name:"boolean"}},filterContainerWidth:{defaultValue:null,description:"Defines the width of the `FilterGroupItems`.\n\n__Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.",name:"filterContainerWidth",required:!1,type:{name:"Width<string | number>"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed.",name:"considerGroupName",required:!1,type:{name:"boolean"}},showClearOnFB:{defaultValue:null,description:'Defines whether the "Clear" button is displayed in the `FilterBar`.',name:"showClearOnFB",required:!1,type:{name:"boolean"}},showGoOnFB:{defaultValue:null,description:'Defines whether the "Go" button is displayed in the `FilterBar`.',name:"showGoOnFB",required:!1,type:{name:"boolean"}},hideFilterConfiguration:{defaultValue:null,description:'Defines whether the "Filter" button is displayed in the `FilterBar`.\n\n__Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.',name:"hideFilterConfiguration",required:!1,type:{name:"boolean"}},showResetButton:{defaultValue:null,description:'Defines whether the "Reset" button is displayed in the filter configuration dialog.',name:"showResetButton",required:!1,type:{name:"boolean"}},hideToggleFiltersButton:{defaultValue:null,description:'Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.',name:"hideToggleFiltersButton",required:!1,type:{name:"boolean"}},activeFiltersCount:{defaultValue:null,description:'Defines the number of active filters displayed in the "Filter" button.\n\n__Note__: If `hideFilterConfiguration` is `true` this prop has no effect.',name:"activeFiltersCount",required:!1,type:{name:"string | number"}},showRestoreOnFB:{defaultValue:null,description:'Defines whether the "Restore" button is displayed in the `FilterBar`.',name:"showRestoreOnFB",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onToggleFilters:{defaultValue:null,description:"The event is fired when the `FilterBar` is collapsed/expanded.",name:"onToggleFilters",required:!1,type:{name:"(event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogSave:{defaultValue:null,description:'The event is fired when the "Go" button of the filter configuration dialog is clicked.',name:"onFiltersDialogSave",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.',name:"onFiltersDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogOpen:{defaultValue:null,description:"The event is fired when the filter configuration dialog is opened.\n\n__Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.",name:"onFiltersDialogOpen",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"The event is fired after the filter configuration dialog has been opened.",name:"onAfterFiltersDialogOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onFiltersDialogClose:{defaultValue:null,description:"The event is fired when the filter configuration dialog is closed.",name:"onFiltersDialogClose",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogSelectionChange:{defaultValue:null,description:"The event is fired when a filter is selected/unselected in the filter configuration dialog.",name:"onFiltersDialogSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},onFiltersDialogSearch:{defaultValue:null,description:"The event is fired on input in the filter configuration dialog search field.",name:"onFiltersDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},onClear:{defaultValue:null,description:'The event is fired when the "Clear" button is clicked.',name:"onClear",required:!1,type:{name:"(event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onGo:{defaultValue:null,description:'The event is fired when the "Go" button is clicked.',name:"onGo",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onRestore:{defaultValue:null,description:'The event is fired when the "Reset" button is clicked.',name:"onRestore",required:!1,type:{name:"(event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{ue as F,Pe as a};
