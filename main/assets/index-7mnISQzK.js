import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{s as wt}from"./search-Q76f2oXr.js";import{e as O}from"./index-Jm2lAFsC.js";import{c as je}from"./clsx-c3LcQGjR.js";import{r}from"./index-OjgoNOWw.js";import{c as He}from"./react-jss.esm-AmlvxLhk.js";import{u as xt,ab as aa,C as na,O as ra,ac as la,ad as Ft,R as ia,B as oa,ae as sa,af as da,ag as ua,ah as ca,ai as pa,aj as ha,ak as fa,al as ma,am as ga,an as va,x as ba,ao as ya,ap as Ta,aq as Ca,ar as wa,o as xa,as as Fa}from"./i18n-defaults-PmTGElot.js";import{h as Bt,j as _t,q as Ba}from"./UI5Element-OBgzz0fv.js";import{r as _e}from"./Icons-zRUxeAje.js";import{a as It}from"./addCustomCSSWithScoping-cCePQQVr.js";import{B as _a}from"./index-071-pwS1.js";import{L as pt}from"./index-TECIvL8m.js";import{F as se,b as St,a as Ia}from"./index-FvozjNxD.js";import{T as P}from"./ThemingParameters-UghqSl-x.js";import{b as Sa,c as ht,T as ft,e as mt,a as gt}from"./index-ut8rJwwt.js";import{I as Pe}from"./index-FgCYaFOE.js";import{B as Da}from"./BusyIndicator-v8eJGF06.js";import{T as Dt,b as Rt}from"./index-OFd3cfXr.js";import{T as Et}from"./index-F4VuT6wa.js";import{C as qt}from"./CssSizeVariables-IMpNFjIe.js";import{g as Ra}from"./group-2-PB4OlzUK.js";import{r as Ea}from"./index-QYh6idnL.js";import{h as qa}from"./withWebComponent-6ZcDnwha.js";import{s as ka}from"./stopPropagation-dV8jBYUw.js";import{D as Na}from"./index--M2nbye0.js";import{B as vt}from"./index-9E_8u4iV.js";import{T as Va}from"./index-xnADVpRi.js";import{S as Aa}from"./index-lWk9WdU3.js";import{O as oe}from"./index-mYnFcrCI.js";import{S as ja,a as bt}from"./index-LSyx66ec.js";import{I as Oa}from"./index-Oj2z2tMK.js";import{P as La}from"./index-BEpnbPWv.js";import{u as Ha}from"./useIsomorphicId-G0VPUEKO.js";import{B as yt}from"./Bar-oatY253I.js";import{T as Pa}from"./Title-nBPKLywE.js";import{B as A}from"./index-BrYKujOg.js";import{B as j}from"./Button-UDaVhcBU.js";import{d as Ve}from"./debounce-F9irgL9Y.js";const Ma="circle-task-2",kt="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-54 0-100-20t-81-55-55-81.5T0 256t20-99.5T75 75t81-55T256 0z",Ga=!1,Wa="SAP-icons-v4",za="@ui5/webcomponents-icons";_e(Ma,{pathData:kt,ltr:Ga,collection:Wa,packageName:za});const Ua="circle-task-2",Nt="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0z",$a=!1,Ka="SAP-icons-v5",Xa="@ui5/webcomponents-icons";_e(Ua,{pathData:Nt,ltr:$a,collection:Ka,packageName:Xa});Bt();const Ya="circle-task-2",Ja={filterItem:{marginBlockEnd:"1rem",marginInlineEnd:"1rem",flexBasis:"var(--_ui5wcr_filter_group_item_flex_basis)",maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",flexGrow:1,flexShrink:0,"&[data-with-toolbar=false]":{maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)"}},innerFilterItemContainer:{display:"flex",flexDirection:"column",justifyContent:"start","& :last-child":{width:"100%"}},loadingContainer:{display:"flex",width:"100%",height:"1.625rem",justifyContent:"center"},dialogCellLabel:{marginBottom:"0.25rem",color:P.sapTextColor},dialogActiveCell:{width:"25%",textAlign:"center"},dialogActiveIcon:{flexGrow:1,color:P.sapNeutralColor,transform:"scale(-50%)"},labelContainer:{"& :not(:first-child)":{width:"100%"}}},Qa=Ja;It("ui5-table-row",`
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`);const Za=He(Qa,{name:"FilterGroupItem"}),de=r.forwardRef((l,d)=>{const s=Za(),{groupName:i="default",considerGroupName:m,label:v="",labelTooltip:b,required:w=!1,visible:y=!0,visibleInFilterBar:x,children:F,loading:X,className:Y,slot:M,active:R,...J}=l,B=l["data-in-fb"],u=l["data-with-values"],T=l["data-selected"];return!w&&(!y||B&&!x)?null:B?e.jsx("div",{ref:d,slot:M,...J,className:je(s.filterItem,Y),children:e.jsxs("div",{className:s.innerFilterItemContainer,children:[e.jsx(se,{children:e.jsx(pt,{title:b??v,required:w,showColon:!!v,children:`${m&&i!=="default"?`${i}: `:""}
          ${v}`})}),X?e.jsx(_a,{className:s.loadingContainer,active:!0,size:Da.Small}):F]})}):e.jsxs(Sa,{"data-react-key":l["data-react-key"],selected:T,"data-required":w,"data-component-name":"FilterBarDialogTableRow",children:[e.jsx(ht,{children:e.jsxs(se,{direction:St.Column,className:s.labelContainer,children:[e.jsx(pt,{className:s.dialogCellLabel,title:b??v,required:w,showColon:!!v&&u,children:v}),u&&F]})}),!u&&e.jsx(ht,{className:s.dialogActiveCell,children:R&&e.jsx(Pe,{name:Ya,className:s.dialogActiveIcon})})]})});de.displayName="FilterGroupItem";de.defaultProps={groupName:"default",visible:!0,required:!1,label:""};try{de.displayName="FilterGroupItem",de.__docgenInfo={description:"Represents a filter belonging to the `FilterBar`.",displayName:"FilterGroupItem",props:{children:{defaultValue:null,description:"Content of the `FilterGroupItem`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:""},description:"Defines the label of the `FilterGroupItem`.<br />\n__Note:__ This label is used for the search in the filter configuration dialog.",name:"label",required:!1,type:{name:"string"}},groupName:{defaultValue:{value:"default"},description:'Defines the group name of the filter.<br />\n__Note:__ If no `groupName` is set, the name defaults to "Basic".',name:"groupName",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Defines the tooltip of the label.<br />\n__Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.",name:"labelTooltip",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Defines whether a loading indicator should be shown in the `FilterGroupItem`.",name:"loading",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the filter is required.<br />\n__Note:__ Required filters cannot be removed from the `FilterBar`.",name:"required",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"Defines whether the filter is visible.",name:"visible",required:!1,type:{name:"boolean"}},visibleInFilterBar:{defaultValue:null,description:"Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.",name:"visibleInFilterBar",required:!1,type:{name:"boolean"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.",name:"considerGroupName",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const en={outerContainer:{background:P.sapObjectHeader_Background},outerContainerWithToolbar:{paddingBlock:"0.5rem 1px",paddingInline:"2rem",boxShadow:P.sapContent_HeaderShadow},filterBarHeader:{alignItems:"center",display:"flex",background:P.sapObjectHeader_Background,minHeight:"3rem",paddingBlockEnd:"0.5rem",boxShadow:"none",flexWrap:"wrap",'& [data-component-name="ToolbarContent"] > *:first-child':{marginInlineStart:0}},filterArea:{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBlockStart:"1rem",marginBlockEnd:"1rem",background:P.sapObjectHeader_Background,transition:"max-height 0.2s ease-out, opacity 0.2s ease-in"},filterAreaClosed:{maxHeight:"0",opacity:0,padding:0,margin:0,overflowY:"auto"},filterAreaOpen:{opacity:1},showFiltersBtn:{minWidth:"108px"},loadingContainer:{marginBlockEnd:"0.5rem",display:"flex",width:"100%",justifyContent:"center"},filterBarButtons:{display:"flex",alignItems:"center",position:"absolute",insetInline:"auto 0",marginInlineEnd:"1rem",marginBlockEnd:"1rem","& > *:not(:first-child)":{marginInlineStart:"0.25rem"},"& > *:not(:last-child)":{marginInlineEnd:"0.25rem"}},spacer:{height:0,marginBlockStart:0,marginInlineEnd:"1rem",flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))"},lastSpacer:{height:qt.ui5WcrElementHeight,flexGrow:1,flexShrink:0,maxWidth:"calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)",flexBasis:"calc(var(--_ui5wcr_filter_group_item_flex_basis))",marginInlineEnd:"1rem"}},tn=en,an="list",Vt="M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z",nn=!1,rn="SAP-icons-v4",ln="@ui5/webcomponents-icons";_e(an,{pathData:Vt,ltr:nn,collection:rn,packageName:ln});const on="list",At="M454 83H186q-11 0-18.5-7T160 58t7.5-18.5T186 32h268q11 0 18.5 7.5T480 58t-7.5 18-18.5 7zM64 32q13 0 22.5 9.5T96 64t-9.5 22.5T64 96t-22.5-9.5T32 64t9.5-22.5T64 32zm0 128q13 0 22.5 9.5T96 192t-9.5 22.5T64 224t-22.5-9.5T32 192t9.5-22.5T64 160zm390 51H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 160h268q11 0 18.5 7.5T480 186t-7.5 18-18.5 7zm0 128H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 288h268q11 0 18.5 7.5T480 314t-7.5 18-18.5 7zM64 288q13 0 22.5 9.5T96 320t-9.5 22.5T64 352t-22.5-9.5T32 320t9.5-22.5T64 288zm390 179H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 416h268q11 0 18.5 7.5T480 442t-7.5 18-18.5 7zM64 416q13 0 22.5 9.5T96 448t-9.5 22.5T64 480t-22.5-9.5T32 448t9.5-22.5T64 416z",sn=!1,dn="SAP-icons-v5",un="@ui5/webcomponents-icons";_e(on,{pathData:At,ltr:sn,collection:dn,packageName:un});Bt();const cn="list",pn=_t()?{maxWidth:"100%",maxHeight:"100%",height:"100%",width:"100%",borderRadius:0,top:0,left:0}:{},hn={tHactive:{width:"25%","&::part(column)":{textAlign:"center"}},groupPanel:{"&::part(content)":{padding:0}},searchInputContainer:{height:qt.ui5WcrToolbarHeight,paddingBottom:"0.25rem"},searchInput:{width:"100%"},dialogComponent:{width:"40rem","&::part(content), &::part(footer), &::part(header)":{padding:0},...pn},header:{width:"100%",paddingInline:"1rem",paddingBlock:"0.25rem 0","& *":{marginBlock:"0.25rem",marginInline:0},"& ui5-input":{width:"100%"}},subheaderContainer:{paddingBlock:0,paddingInline:"1rem",boxShadow:P.sapContent_HeaderShadow},subheader:{paddingBlockEnd:"0.25rem",'& [data-component-name="ToolbarContent"] >:last-child':{margin:0},'& [data-component-name="ToolbarContent"] >:first-child':{marginInline:"0 0.25rem "}},footer:{"& :not(:last-child)":{marginInlineEnd:"0.25rem"}}},fn=hn,mn=new Set(["UI5-COMBOBOX","UI5-DATE-PICKER","UI5-DATERANGE-PICKER","UI5-DATETIME-PICKER","UI5-DURATION-PICKER","UI5-INPUT","UI5-MULTI-INPUT","UI5-RATING-INDICATOR","UI5-STEP-INPUT","UI5-TIME-PICKER"]),jt=(l,d)=>{var m;const s=l.tagName;let i={};if(mn.has(s)&&(i={value:l.value??""}),s==="UI5-SELECT"||s==="UI5-MULTI-COMBOBOX"){const v=Array.from(l.children).map((y,x)=>y.selected?x:!1).filter(y=>y!==!1),b=new Set(v);i={children:(m=d.props.children.props.children)==null?void 0:m.map((y,x)=>b.has(x)?r.cloneElement(y,{selected:!0}):r.cloneElement(y,{selected:!1}))}}return(s==="UI5-SWITCH"||s==="UI5-CHECKBOX")&&(i={checked:l.checked}),i},gn=(l,d,s={})=>{var m;const i={...s,...l==null?void 0:l.props};return r.cloneElement(l,{...i,"data-component-name":"FilterBarSearch",value:d??((m=l==null?void 0:l.props)==null?void 0:m.value)})},Ot=(l,d)=>{l&&(typeof l=="function"?l(d):l.hasOwnProperty("current")&&(l.current=d))};It("ui5-table",`
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
 `);const vn=(l,d)=>{var s,i,m,v,b;switch(l){case"all":return!0;case"visible":return(s=d.props)==null?void 0:s.visibleInFilterBar;case"active":return(i=d.props)==null?void 0:i.active;case"visibleAndActive":return((m=d.props)==null?void 0:m.visibleInFilterBar)&&((v=d.props)==null?void 0:v.active);case"mandatory":return(b=d.props)==null?void 0:b.required;default:return!0}},Tt=(l,d)=>Object.keys(l).find(s=>Object.keys(d).every(i=>l[i]!==d[s])),bn=He(fn,{name:"FilterBarDialog"}),Oe=l=>{const{filterBarRefs:d,open:s,handleDialogClose:i,children:m,showRestoreButton:v,handleRestoreFilters:b,handleDialogSave:w,handleSelectionChange:y,handleDialogSearch:x,handleDialogCancel:F,onAfterFiltersDialogOpen:X,portalContainer:Y,dialogRef:M,isListView:R,setIsListView:J,filteredAttribute:B,setFilteredAttribute:u}=l,T=bn(),ue=Ha(),[ce,pe]=r.useState(""),[G,Q]=r.useState({}),he=r.useRef({}),fe=r.useRef(null),[W,me]=r.useReducer(t=>!t,!1),[Z,ge]=r.useState(),p=xt("@ui5/webcomponents-react"),ee=p.getText(aa),Ie=p.getText(na),Se=p.getText(ra),z=p.getText(la),U=p.getText(Ft),te=p.getText(ia),ve=p.getText(oa),$=p.getText(sa),ae=p.getText(da),De=p.getText(ua),be=p.getText(ca),ye=p.getText(pa),E=p.getText(ha),Re=p.getText(fa),ne=p.getText(ma),Te=p.getText(ga),q=p.getText(va),re=t=>{x&&x(O(t,{value:t.target.value,element:t.target})),pe(t.target.value)},Ee=t=>{w(t,he.current,G)},Ce=t=>{Q({}),ka(t),F&&F(t),i(t)},K=t=>{F&&F(t),i(t)},k=t=>{Q({}),b(t,"dialog",{filters:Array.from(M.current.querySelectorAll("ui5-table-row"))})},we=t=>{J(t.detail.selectedItem.dataset.id==="list")},_=()=>m.filter(t=>{var C,c,h;return!!(t!=null&&t.props)&&((C=t.props)==null?void 0:C.visible)&&(((h=(c=t.props)==null?void 0:c.label)==null?void 0:h.toLowerCase().includes(ce.toLowerCase()))||ce.length===0)&&vn(B,t)}).map(t=>{const C=d.current[t.key];let c={};if(C&&(c=jt(C,t)),!t.props.children)return t;let h=t.props.visibleInFilterBar||t.props.required||t.type.displayName!=="FilterGroupItem";return Object.hasOwn(G,t.key)&&(h=G[t.key]),r.cloneElement(t,{"data-with-values":W,"data-selected":h,"data-react-key":t.key,children:{...t.props.children,props:{...t.props.children.props,...c},ref:I=>{I&&(he.current[t.key]=I,Ot(t.props.children.ref,I))}}})}),qe=t=>{u(t.detail.selectedOption.dataset.id)},xe=t=>{var Fe;if(t.preventDefault(),!t.target.hasAttribute("ui5-table"))return;const C=t.detail.previouslySelectedRows.reduce((L,g)=>({...L,[g.dataset.reactKey]:g}),{}),c=t.detail.selectedRows.reduce((L,g)=>({...L,[g.dataset.reactKey]:g}),{}),h=t.detail.previouslySelectedRows>t.detail.selectedRows?Tt(C,c):Tt(c,C),I=c[h]||C[h];if(((Fe=I.dataset)==null?void 0:Fe.required)==="true"){ge(I);return}typeof y=="function"&&y(O(t,{element:I,checked:I.selected})),Q(L=>({...L,[h]:I.selected}))};if(r.useEffect(()=>{Z&&(Z.setAttribute("selected","true"),ge(void 0))},[Z]),!qa())return null;const ke=()=>{const t={};return r.Children.forEach(_(),c=>{const h=c.props.groupName??"default";t[h]?t[h].push(c):t[h]=[c]}),Object.keys(t).sort((c,h)=>c==="default"?-1:h==="role"?1:0).map((c,h)=>e.jsx(La,{headerText:c==="default"?ee:c,className:T.groupPanel,children:e.jsx(ft,{mode:mt.MultiSelect,"data-component-name":"FilterBarDialogPanelTable",onSelectionChange:xe,children:t[c]})},`${c==="default"?ee:c}${h}`))};return Ea.createPortal(e.jsxs(Na,{open:s,ref:M,"data-component-name":"FilterBarDialog",onAfterClose:Ce,onAfterOpen:X,resizable:!0,draggable:!0,className:T.dialogComponent,preventFocusRestore:!0,initialFocus:`${ue}-fb-dialog-search`,header:e.jsx(vt,{design:yt.Header,startContent:e.jsx(Va,{level:Pa.H4,title:U,children:U}),endContent:v&&e.jsx(A,{design:j.Transparent,onClick:k,children:te})}),footer:e.jsx(vt,{design:yt.Footer,endContent:e.jsxs(se,{justifyContent:Ia.End,className:T.footer,children:[e.jsx(A,{onClick:Ee,"data-component-name":"FilterBarDialogSaveBtn",design:j.Emphasized,children:Se}),e.jsx(A,{design:j.Transparent,onClick:K,"data-component-name":"FilterBarDialogCancelBtn",children:Ie})]})}),children:[e.jsxs(se,{direction:St.Column,className:T.subheaderContainer,children:[e.jsxs(Dt,{className:T.subheader,toolbarStyle:Rt.Clear,children:[e.jsxs(Aa,{onChange:qe,title:q,accessibleName:q,children:[e.jsx(oe,{selected:B==="all","data-id":"all",children:ve}),e.jsx(oe,{selected:B==="visible","data-id":"visible",children:ae}),e.jsx(oe,{selected:B==="active","data-id":"active",children:$}),e.jsx(oe,{selected:B==="visibleAndActive","data-id":"visibleAndActive",children:De}),e.jsx(oe,{selected:B==="mandatory","data-id":"mandatory",children:be})]}),e.jsx(Et,{}),e.jsx(A,{design:j.Transparent,onClick:me,"aria-live":"polite",children:W?ne:Re}),e.jsxs(ja,{onSelectionChange:we,children:[e.jsx(bt,{icon:cn,"data-id":"list",pressed:R,accessibleName:ye}),e.jsx(bt,{icon:Ra,"data-id":"group",pressed:!R,accessibleName:E})]})]}),e.jsx(se,{className:T.searchInputContainer,children:e.jsx(Oa,{id:`${ue}-fb-dialog-search`,noTypeahead:!0,placeholder:z,onInput:re,showClearIcon:!0,icon:e.jsx(Pe,{name:wt}),ref:fe,className:T.searchInput,"data-component-name":"FilterBarDialogSearchInput"})})]}),e.jsx(ft,{"data-component-name":"FilterBarDialogTable",hideNoData:!R,mode:mt.MultiSelect,onSelectionChange:xe,columns:e.jsxs(e.Fragment,{children:[e.jsx(gt,{children:Te}),!W&&e.jsx(gt,{className:T.tHactive,children:$})]}),children:R&&_()}),!R&&ke()]}),Y??document.body)};try{Oe.displayName="FilterDialog",Oe.__docgenInfo={description:"",displayName:"FilterDialog",props:{filterBarRefs:{defaultValue:null,description:"",name:"filterBarRefs",required:!0,type:{name:"any"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleDialogClose:{defaultValue:null,description:"",name:"handleDialogClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},showRestoreButton:{defaultValue:null,description:"",name:"showRestoreButton",required:!0,type:{name:"boolean"}},handleRestoreFilters:{defaultValue:null,description:"",name:"handleRestoreFilters",required:!0,type:{name:"(e: any, source: any, filterElements: any) => void"}},handleDialogSave:{defaultValue:null,description:"",name:"handleDialogSave",required:!0,type:{name:"(e: any, newRefs: any, updatedToggledFilters: any) => void"}},handleSearchValueChange:{defaultValue:null,description:"",name:"handleSearchValueChange",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},handleSelectionChange:{defaultValue:null,description:"",name:"handleSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},handleDialogSearch:{defaultValue:null,description:"",name:"handleDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},handleDialogCancel:{defaultValue:null,description:"",name:"handleDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},dialogRef:{defaultValue:null,description:"",name:"dialogRef",required:!0,type:{name:"MutableRefObject<DialogDomRef>"}},isListView:{defaultValue:null,description:"",name:"isListView",required:!0,type:{name:"boolean"}},setIsListView:{defaultValue:null,description:"",name:"setIsListView",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},filteredAttribute:{defaultValue:null,description:"",name:"filteredAttribute",required:!0,type:{name:"string"}},setFilteredAttribute:{defaultValue:null,description:"",name:"setFilteredAttribute",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"",name:"onAfterFiltersDialogOpen",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}const Ae=_t(),yn=Ba(),Ct=l=>{var d,s;return l.borderBoxSize?Array.isArray(l.borderBoxSize)?(d=l.borderBoxSize[0])==null?void 0:d.inlineSize:(s=l.borderBoxSize)==null?void 0:s.inlineSize:l.target.getBoundingClientRect().width},Tn=He(tn,{name:"FilterBar"}),Le=r.forwardRef((l,d)=>{var Xe,Ye;const{children:s,hideToolbar:i,filterBarCollapsed:m,considerGroupName:v,filterContainerWidth:b="13.125rem",activeFiltersCount:w,showClearOnFB:y,showGoOnFB:x,hideFilterConfiguration:F,showRestoreOnFB:X,showResetButton:Y,hideToggleFiltersButton:M,style:R,className:J,slot:B,search:u,header:T,as:ue="div",portalContainer:ce,onToggleFilters:pe,onFiltersDialogOpen:G,onAfterFiltersDialogOpen:Q,onFiltersDialogCancel:he,onFiltersDialogClose:fe,onFiltersDialogSave:W,onClear:me,onFiltersDialogSelectionChange:Z,onFiltersDialogSearch:ge,onGo:p,onRestore:ee,...Ie}=l,Se=(()=>i?!0:m!==void 0?m:!yn)(),[z,U]=r.useState(Se),[te,ve]=r.useState(!0),[$,ae]=r.useState(!1),[De,be]=r.useState(void 0),ye=r.useRef(null),E=r.useRef({}),Re=r.useRef(null),[ne,Te]=r.useState({}),[q,re]=r.useState({}),Ee=r.useRef({}),Ce=r.useRef(),K=r.useRef(null),k=r.useRef(null),we=r.useRef(null),_=xt("@ui5/webcomponents-react"),qe=_.getText(ba),xe=_.getText(ya),Me=_.getText(Ta),ke=_.getText(Ca),t=_.getText(wa),C=_.getText(xa),c=i?_.getText(Fa):_.getText(Ft),[h,I]=r.useState(!0),[Fe,L]=r.useState("all");r.useEffect(()=>{r.Children.toArray(s).forEach(n=>{if(r.isValidElement(n)){const a=n.key;re(o=>!n.props.hasOwnProperty("visibleInFilterBar")&&(o==null?void 0:o[a])===void 0?{...o,[a]:!0}:n.props.hasOwnProperty("visibleInFilterBar")?{...o,[a]:n.props.visibleInFilterBar}:o)}})},[s,re]),r.useEffect(()=>{m!==void 0&&U(i?!0:!m)},[U,i,m]);const g=Tn(),Lt=je(g.filterArea,z&&(!Ae||Ae&&i)?g.filterAreaOpen:g.filterAreaClosed),le=()=>{var a;const n=(a=ye.current)==null?void 0:a.querySelector('[data-component-name="FilterBarSearch"]');return{filters:E!=null&&E.current?Object.values(E.current).filter(Boolean):[],search:n}},Ht=n=>{pe&&pe(O(n,{visible:!z,...le()})),U(!z)},[Ge,Pt]=r.useState(!1),Mt=(n,a,o)=>{Te(a);const f={elements:a,toggledElements:{...q,...o},...le()};re(N=>({...N,...o})),W&&W(O(n,f)),We(n)},Gt=n=>{typeof G=="function"&&G(n),n.defaultPrevented?ae(!1):ae(!0)},We=n=>{var a;fe&&fe(O(n)),ae(!1),(a=we.current)==null||a.focus()},Wt=n=>{typeof p=="function"&&p(O(n,{elements:E.current,...le()}))},ze=()=>Object.keys(q).length>0?r.Children.toArray(s).map(n=>{if(r.isValidElement(n)){const a=n.key;if((q==null?void 0:q[a])!==void 0)return r.cloneElement(n,{visibleInFilterBar:q[a]})}return n}):r.Children.toArray(s),H=r.useRef({}),zt=()=>{const n={considerGroupName:v,"data-in-fb":!0,"data-with-toolbar":!i};return ze().filter(a=>{var o,f;return r.isValidElement(a)?((o=a==null?void 0:a.props)==null?void 0:o.visible)&&((f=a.props)==null?void 0:f.visibleInFilterBar):!1}).map(a=>{var N,V,Je,Qe,Ze,et,tt,at,nt,rt,lt,it,ot,st,dt,ut,ct;const o=a.key;if(b&&(n.style={width:b,...a.props.style}),F)return r.cloneElement(a,{...n});Ee.current[o]=a.props.visibleInFilterBar;let f={};if(Object.keys(ne).length>0){const D=ne[o];D&&(f=jt(D,a))}if(!a.props.children)return r.cloneElement(a,{...n});if((N=H.current)!=null&&N[o]&&(((Je=(V=a.props.children)==null?void 0:V.props)==null?void 0:Je.value)!==((Ze=(Qe=H.current)==null?void 0:Qe[o])==null?void 0:Ze.value)||((tt=(et=a.props.children)==null?void 0:et.props)==null?void 0:tt.checked)!==((nt=(at=H.current)==null?void 0:at[o])==null?void 0:nt.checked)||Array.isArray((lt=(rt=a.props.children)==null?void 0:rt.props)==null?void 0:lt.children)&&((st=(ot=(it=a.props.children)==null?void 0:it.props)==null?void 0:ot.children)==null?void 0:st.map(D=>D.props.selected).join(","))!==((ct=(ut=(dt=H==null?void 0:H.current)==null?void 0:dt[o])==null?void 0:ut.children)==null?void 0:ct.map(D=>D.props.selected).join(",")))){const{[a.key]:D,...ta}=ne;Te(ta)}return H.current[o]=a.props.children.props,r.cloneElement(a,{...n,children:{...a.props.children,props:{...a.props.children.props,...f},ref:D=>{E.current[o]=D,$||Ot(a.props.children.ref,D)}}})})},Ue=(n,a,o)=>{a==="filterBar"&&x&&ve(!1),ee&&ee(O(n,{source:a,...o}))};r.useEffect(()=>{te||ve(!0)},[te]);const Ut=n=>{Ue(n,"filterBar",le())},$t=n=>{typeof me=="function"&&me(O(n,le()))},Kt=je(g.outerContainer,J,!i&&g.outerContainerWithToolbar);r.useEffect(()=>{var n;Ce.current=(n=u==null?void 0:u.props)==null?void 0:n.value},[(Xe=u==null?void 0:u.props)==null?void 0:Xe.value]);const $e=Ce.current;r.useEffect(()=>{var n,a;$e!==((n=u==null?void 0:u.props)==null?void 0:n.value)&&be((a=u==null?void 0:u.props)==null?void 0:a.value)},[$e,(Ye=u==null?void 0:u.props)==null?void 0:Ye.value]);const Ne=e.jsxs(e.Fragment,{children:[x&&e.jsx(A,{onClick:Wt,design:j.Emphasized,children:t}),!M&&!i&&!Ae&&e.jsx(A,{onClick:Ht,design:j.Transparent,className:g.showFiltersBtn,"aria-live":"polite",children:z?ke:Me}),y&&e.jsx(A,{onClick:$t,design:j.Transparent,children:qe}),X&&e.jsx(A,{onClick:Ut,design:j.Transparent,children:xe}),!F&&e.jsx(A,{onClick:Gt,"aria-haspopup":"dialog",design:j.Transparent,ref:we,children:`${c}${w&&parseInt(w,10)>0?` (${w})`:""}`})]}),Xt=Ne.props.children.some(Boolean),[S,Yt]=r.useState(void 0),[ie,Jt]=r.useState(void 0),[Be,Qt]=r.useState(void 0);r.useEffect(()=>{const n=Ve(([o])=>{var N,V;const f=(V=(N=o.target)==null?void 0:N.children)==null?void 0:V[0];f&&f.offsetWidth!==Be&&Qt(f.offsetWidth+16)},100),a=new ResizeObserver(n);return i&&k.current&&a.observe(k.current),()=>{n.cancel(),a.disconnect()}},[k.current,i]),r.useEffect(()=>{const n=Ve(([o])=>{const f=Ct(o);f!==S&&Jt(f)},100),a=new ResizeObserver(n);return i&&k.current&&a.observe(k.current),()=>{n.cancel(),a.disconnect()}},[ie,k.current,i]),r.useEffect(()=>{const n=Ve(([o])=>{const f=Ct(o);f!==S&&Yt(f)},100),a=new ResizeObserver(n);return i&&K.current&&a.observe(K.current),()=>{n.cancel(),a.disconnect()}},[K.current,i,S]);const Ke=zt();r.useEffect(()=>{Ge&&Pt(n=>(p(n),!1))},[Ge]);const Zt=()=>{if(Be&&ie&&S){const n=[],a=Ke.length*Be;if(ie-S>a)return null;const o=a%ie,f=ie-o,N=Math.floor((f-S)/Be)-1;for(let V=0;V<N;V++)n.push(e.jsx("div",{className:g.spacer},`filter-spacer-${V}`));return n}return null},ea=ue;return e.jsxs(e.Fragment,{children:[$&&!F&&e.jsx(Oe,{filterBarRefs:E,open:$,handleDialogClose:We,handleRestoreFilters:Ue,handleSearchValueChange:be,showRestoreButton:Y,handleSelectionChange:Z,handleDialogSave:Mt,handleDialogSearch:ge,handleDialogCancel:he,onAfterFiltersDialogOpen:Q,portalContainer:ce,dialogRef:Re,isListView:h,setIsListView:I,filteredAttribute:Fe,setFilteredAttribute:L,children:ze()}),e.jsxs(ea,{ref:d,className:Kt,style:{"--_ui5wcr_filter_group_item_flex_basis":b,...R},slot:B,...Ie,children:[!i&&e.jsxs(Dt,{className:g.filterBarHeader,toolbarStyle:Rt.Clear,children:[T,Xt&&e.jsx(Et,{}),Ne]}),te&&e.jsxs("div",{className:Lt,style:{position:"relative"},ref:k,children:[u&&e.jsx(de,{"data-in-fb":!0,visibleInFilterBar:!0,"data-with-toolbar":!i,children:e.jsx("div",{ref:ye,children:gn(u,De,{placeholder:C,icon:e.jsx(Pe,{name:wt}),noTypeahead:!0,showClearIcon:!0})})}),Ke,i&&e.jsxs(e.Fragment,{children:[Zt(),e.jsx("div",{style:{width:S?`${S}px`:"120px",minWidth:S?`${S}px`:"120px"},className:g.lastSpacer,children:e.jsx("div",{className:g.filterBarButtons,ref:K,children:Ne})})]})]})]})]})});Le.displayName="FilterBar";try{Le.displayName="FilterBar",Le.__docgenInfo={description:'The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.\nIn this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".',displayName:"FilterBar",props:{children:{defaultValue:null,description:"Defines the filters of the `FilterBar`.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},search:{defaultValue:null,description:"Defines the search field rendered as first filter item.\n\n__Note:__ Per default `placeholder`, `icon`, `noTypeahead` and `showClearIcon` are applied to the search input.\n\n__Note:__ The field is only available in the FilterBar not inside the filter configuration dialog.",name:"search",required:!1,type:{name:"ReactElement<InputPropTypes, string | JSXElementConstructor<any>>"}},header:{defaultValue:null,description:"Specifies header text or variant management that is shown in the toolbar on the first position\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.",name:"header",required:!1,type:{name:"ReactNode"}},hideToolbar:{defaultValue:null,description:'Defines whether the toolbar on top of the filter items is displayed.\n\n__Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.',name:"hideToolbar",required:!1,type:{name:"boolean"}},filterBarCollapsed:{defaultValue:null,description:"Defines whether the `FilterBar` is collapsed.",name:"filterBarCollapsed",required:!1,type:{name:"boolean"}},filterContainerWidth:{defaultValue:null,description:"Defines the width of the `FilterGroupItems`.\n\n__Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.",name:"filterContainerWidth",required:!1,type:{name:"Width<string | number>"}},considerGroupName:{defaultValue:null,description:"Defines whether the `groupName` of the `FilterGroupItems` is displayed.",name:"considerGroupName",required:!1,type:{name:"boolean"}},showClearOnFB:{defaultValue:null,description:'Defines whether the "Clear" button is displayed in the `FilterBar`.',name:"showClearOnFB",required:!1,type:{name:"boolean"}},showGoOnFB:{defaultValue:null,description:'Defines whether the "Go" button is displayed in the `FilterBar`.',name:"showGoOnFB",required:!1,type:{name:"boolean"}},hideFilterConfiguration:{defaultValue:null,description:'Defines whether the "Filter" button is displayed in the `FilterBar`.\n\n__Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.',name:"hideFilterConfiguration",required:!1,type:{name:"boolean"}},showResetButton:{defaultValue:null,description:'Defines whether the "Reset" button is displayed in the filter configuration dialog.',name:"showResetButton",required:!1,type:{name:"boolean"}},hideToggleFiltersButton:{defaultValue:null,description:'Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.\n\n__Note:__ If `hideToolbar` is `true` this prop has no effect.',name:"hideToggleFiltersButton",required:!1,type:{name:"boolean"}},activeFiltersCount:{defaultValue:null,description:'Defines the number of active filters displayed in the "Filter" button.\n\n__Note__: If `hideFilterConfiguration` is `true` this prop has no effect.',name:"activeFiltersCount",required:!1,type:{name:"string | number"}},showRestoreOnFB:{defaultValue:null,description:'Defines whether the "Restore" button is displayed in the `FilterBar`.',name:"showRestoreOnFB",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"progress"'},{value:'"select"'},{value:'"input"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onToggleFilters:{defaultValue:null,description:"The event is fired when the `FilterBar` is collapsed/expanded.",name:"onToggleFilters",required:!1,type:{name:"(event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogSave:{defaultValue:null,description:'The event is fired when the "Go" button of the filter configuration dialog is clicked.',name:"onFiltersDialogSave",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onFiltersDialogCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.',name:"onFiltersDialogCancel",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogOpen:{defaultValue:null,description:"The event is fired when the filter configuration dialog is opened.\n\n__Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.",name:"onFiltersDialogOpen",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onAfterFiltersDialogOpen:{defaultValue:null,description:"The event is fired after the filter configuration dialog has been opened.",name:"onAfterFiltersDialogOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onFiltersDialogClose:{defaultValue:null,description:"The event is fired when the filter configuration dialog is closed.",name:"onFiltersDialogClose",required:!1,type:{name:"(event: Ui5CustomEvent<HTMLElement, never>) => void"}},onFiltersDialogSelectionChange:{defaultValue:null,description:"The event is fired when a filter is selected/unselected in the filter configuration dialog.",name:"onFiltersDialogSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[]; }>) => void"}},onFiltersDialogSearch:{defaultValue:null,description:"The event is fired on input in the filter configuration dialog search field.",name:"onFiltersDialogSearch",required:!1,type:{name:"(event: CustomEvent<{ value: string; element: HTMLElement; }>) => void"}},onClear:{defaultValue:null,description:'The event is fired when the "Clear" button is clicked.',name:"onClear",required:!1,type:{name:"(event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onGo:{defaultValue:null,description:'The event is fired when the "Go" button is clicked.',name:"onGo",required:!1,type:{name:"(event: CustomEvent<{ elements: Record<string, HTMLElement>; filters: HTMLElement[]; search: HTMLElement; }>) => void"}},onRestore:{defaultValue:null,description:'The event is fired when the "Restore" button is clicked.',name:"onRestore",required:!1,type:{name:"(event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Le as F,de as a};
//# sourceMappingURL=index-7mnISQzK.js.map
