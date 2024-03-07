import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./UnableToLoad-RD96-YmC.js";import{n as wt}from"./navigation-down-arrow-8RCstR2x.js";import{s as Xe}from"./search-LiKh_it2.js";import{T as S}from"./ThemingParameters-UghqSl-x.js";import{e as ue}from"./index-ENBflQbU.js";import{c as ye}from"./clsx-Zbgk8kpT.js";import{r as t,R as Ke}from"./index-OjgoNOWw.js";import{r as Re}from"./index-QYh6idnL.js";import{c as qe}from"./react-jss.esm-fzYOEaou.js";import{u as xe,V as Ze,m as et,n as tt,o as xt,M as St,p as bt,q as It,r as Pe,s as Ct,U as Tt,t as je,f as at,v as Be,w as _t,x as At,y as Dt,z as Et,B as nt,F as Nt,G as Mt,H as Rt,J as qt,K as Pt,L as jt,Q as Bt}from"./i18n-defaults-EsDEVf23.js";import{d as ke,u as kt}from"./withWebComponent-WsMVk7rH.js";import{s as Ft}from"./stopPropagation-dV8jBYUw.js";import{F as Ve,b as Ce,a as Te}from"./index-mlUqNAao.js";import{l as Ot,t as Lt,p as Ht}from"./Boot-ZMdbUkXu.js";import{t as _e,c as it}from"./utils-TqRdq3Pf.js";import{B as Fe,a as Oe}from"./index-RGL69Ccb.js";import{B as Z}from"./index-cT5HpiGU.js";import{D as lt}from"./index-U8B1ocsk.js";import{b as Ut,c as oe,T as Wt,a as de}from"./index-lMCmJR6q.js";import{d as $t}from"./decline-9_Y3Taaa.js";import{f as be}from"./favorite-nXOKb_3-.js";import{u as zt}from"./unfavorite-xHHe37Zx.js";import{T as Je}from"./index-PT67_7v6.js";import{R as Gt}from"./index-Akq2TjJC.js";import{C as ge}from"./index-aPaCpBCo.js";import{I as we}from"./index-nDRV897P.js";import{B as L}from"./Button-2HS1JCrT.js";import{I as Se}from"./index-bX_VtGV4.js";import{V as Qe}from"./ValueState-I_-hGNIb.js";import{u as st}from"./useIsomorphicId-G0VPUEKO.js";import{L as Yt}from"./index-jdIcBaoB.js";import{I as Kt}from"./index-Co-88fr1.js";import{I as Jt}from"./IllustratedMessage-WhLZ6tjs.js";import{P as Qt}from"./Popover-AJDeb5lw.js";import{T as Xt}from"./Title-Mo7n6sbi.js";import{T as Zt}from"./index-faYBJpyV.js";import{R as ea}from"./index-ztpJOswn.js";import{L as ta}from"./index-AwHEYXwe.js";import{L as aa}from"./List-XR6v1E83.js";import{S as na}from"./index-1PS5it-M.js";const rt=t.createContext({selectVariantItem:d=>{}}),Ae=d=>{const{variantNames:D,changedVariantNames:y,setChangedVariantNames:w,handleRowChange:x,handleDelete:H,defaultView:P,setDefaultView:j,showShare:B,showApplyAutomatically:u,showSetAsDefault:g,showCreatedBy:E,labelReadOnly:V,favorite:s,children:i,global:b,isDefault:N,applyAutomatically:G,applyAutomaticallyText:k,author:Y,setInvalidVariants:F,hideDelete:U,showOnlyFavorites:K}=d,f=xe("@ui5/webcomponents-react"),J=f.getText(Ze),I=f.getText(et),ee=f.getText(tt),M=f.getText(xt),ie=f.getText(St),c=f.getText(bt),C=f.getText(It),v=f.getText(Pe),Q=f.getText(Ct),X=f.getText(Tt),T=f.getText(je),[_,W]=t.useReducer(o=>!o,!!s),r=_?be:zt,R=t.useRef(void 0),[te,$]=t.useState(!1),ae=o=>{W(),x(o,{currentVariant:i,favorite:!_})},le=o=>{var O,z;typeof((O=d.manageViewsInputProps)==null?void 0:O.onInput)=="function"&&((z=d.manageViewsInputProps)==null||z.onInput(o));const h=_e(o.target.value);D.includes(h)||Array.from(y.values()).includes(h)?($(J),F(q=>({...q,[`${i}`]:R.current})),x(o,{currentVariant:i,children:h})):h.length===0?($(I),F(q=>({...q,[i]:R.current})),x(o,{currentVariant:i,children:h})):o.isInvalid?F(q=>({...q,[`${i}`]:R.current})):($(!1),F(q=>{const re={...q};return q.hasOwnProperty(i)&&delete re[i],re}),x(o,{currentVariant:i,children:h}))},se=o=>{var O,z;typeof((O=d.manageViewsInputProps)==null?void 0:O.onChange)=="function"&&((z=d.manageViewsInputProps)==null||z.onChange(o));const h=_e(o.target.value);w(q=>{const re=new Map(q);return re.set(i,h),re})},l=()=>{j(i)},n=o=>{x(o,{currentVariant:i,applyAutomatically:o.target.checked})},p=()=>{var o,h;return V?e.jsx(Je,{style:{fontFamily:N?S.sapFontBoldFamily:S.sapFontFamily},children:i}):e.jsx(Se,{placeholder:T,ref:R,...d.manageViewsInputProps,valueStateMessage:((o=d.manageViewsInputProps)==null?void 0:o.valueStateMessage)??e.jsx("div",{children:te}),valueState:((h=d.manageViewsInputProps)==null?void 0:h.valueState)??(te?Qe.Error:Qe.None),value:i,onInput:le,onChange:se})};return e.jsxs(Ut,{"data-id":i,children:[K&&e.jsx(oe,{children:N?e.jsx(we,{name:be,style:{color:S.sapContent_NonInteractiveIconColor}}):e.jsx(we,{accessibleName:ie,title:r===be?Q:X,name:r,interactive:!0,style:{color:S.sapContent_MarkerIconColor,cursor:"pointer"},onClick:ae})}),e.jsx(oe,{children:p()}),B&&e.jsx(oe,{children:b?ee:M}),g&&e.jsx(oe,{children:e.jsx(Gt,{accessibleName:c,checked:P!==void 0?P===i:N,onChange:l})}),u&&e.jsx(oe,{children:e.jsx(ge,{accessibleName:v,checked:G,onChange:n,text:k})}),E&&e.jsx(oe,{children:e.jsx(Je,{children:Y})}),e.jsx(oe,{children:!(U??b)&&e.jsx(Z,{tooltip:C,accessibleName:C,icon:$t,design:L.Transparent,onClick:H,"data-children":i})})]},`${i}`)};try{Ae.displayName="ManageViewsTableRows",Ae.__docgenInfo={description:"",displayName:"ManageViewsTableRows",props:{variantNames:{defaultValue:null,description:"",name:"variantNames",required:!0,type:{name:"string[]"}},handleRowChange:{defaultValue:null,description:"",name:"handleRowChange",required:!0,type:{name:"(e: Event, payload: any) => void"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(e: any) => void"}},defaultView:{defaultValue:null,description:"",name:"defaultView",required:!0,type:{name:"string"}},setDefaultView:{defaultValue:null,description:"",name:"setDefaultView",required:!0,type:{name:"(view: string) => void"}},showShare:{defaultValue:null,description:"",name:"showShare",required:!0,type:{name:"boolean"}},showApplyAutomatically:{defaultValue:null,description:"",name:"showApplyAutomatically",required:!0,type:{name:"boolean"}},showSetAsDefault:{defaultValue:null,description:"",name:"showSetAsDefault",required:!0,type:{name:"boolean"}},showCreatedBy:{defaultValue:null,description:"",name:"showCreatedBy",required:!0,type:{name:"boolean"}},showOnlyFavorites:{defaultValue:null,description:"",name:"showOnlyFavorites",required:!1,type:{name:"boolean"}},changedVariantNames:{defaultValue:null,description:"",name:"changedVariantNames",required:!0,type:{name:"Map<string, any>"}},setChangedVariantNames:{defaultValue:null,description:"",name:"setChangedVariantNames",required:!0,type:{name:"(varNames: any) => void"}},setInvalidVariants:{defaultValue:null,description:"",name:"setInvalidVariants",required:!0,type:{name:"(invalidVars: any) => void"}},children:{defaultValue:null,description:"The name of the variant.",name:"children",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"Author of the variant.",name:"author",required:!1,type:{name:"string"}},favorite:{defaultValue:null,description:"Indicates if favorites can be created.\n\n__Note:__ Has no effect if `showOnlyFavorites` is falsy in the `VariantMangament`.",name:"favorite",required:!1,type:{name:"boolean"}},global:{defaultValue:null,description:"Indicator if a variant is visible for all users (public flag is set).",name:"global",required:!1,type:{name:"boolean"}},isDefault:{defaultValue:null,description:"Indicator if it's the default variant.",name:"isDefault",required:!1,type:{name:"boolean"}},labelReadOnly:{defaultValue:null,description:"Indicates if the variant title can be changed.",name:"labelReadOnly",required:!1,type:{name:"boolean"}},applyAutomatically:{defaultValue:null,description:"Indicates if the variant should be applied automatically on selection.",name:"applyAutomatically",required:!1,type:{name:"boolean"}},applyAutomaticallyText:{defaultValue:null,description:'Text displayed next to the "Apply Automatically" checkbox inside the "Manage Views" dialog.',name:"applyAutomaticallyText",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:'If set to false, the user is allowed to change the item\'s data.\n\n__Note:__ When set to true, no "Save" button will be displayed for the `VariantItem` when the `VariantManagement` is in `dirtyState`.',name:"readOnly",required:!1,type:{name:"boolean"}},hideDelete:{defaultValue:null,description:"Indicates if the variant can be deleted.\n\n__Note:__ If not set, a delete button is shown for all variants except for variants with `global={true}`.",name:"hideDelete",required:!1,type:{name:"boolean"}},manageViewsInputProps:{defaultValue:null,description:'Defines the props of the input rendered with the `VariantItem` inside the "Manage Views" dialog.\n\n__Note:__ It is possible to overwrite internally used props. Please use with caution!',name:"manageViewsInputProps",required:!1,type:{name:'Omit<InputPropTypes, "value">'}},saveViewInputProps:{defaultValue:null,description:'Defines the props of the input rendered with the `VariantItem` inside the "Save View" dialog.\n\n__Note:__ It is possible to overwrite internally used props. Please use with caution!',name:"saveViewInputProps",required:!1,type:{name:'Omit<InputPropTypes, "id" | "value">'}},accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const Ie=`var(${it}popup_default_header_height)`,ia=`var(${it}popup_header_font_family)`,la={manageViewsDialog:{width:Ot()||Lt()&&!Ht()?"100%":"70vw","&::part(content), &::part(header)":{padding:0},"&::part(footer)":{padding:0,borderBlockStart:"none"}},headerText:{margin:0,textAlign:"center",alignSelf:"start",minHeight:Ie,maxHeight:Ie,lineHeight:Ie,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"100%",display:"inline-block",paddingInlineStart:"1rem",fontFamily:`"72override",${ia}`,fontSize:"1rem"},search:{width:"calc(100% - 2rem)",marginBlockEnd:"0.5rem"},inputIcon:{cursor:"pointer",color:S.sapContent_IconColor}},sa=qe(la,{name:"ManageViewsDialog"}),De=d=>{const{children:D,onAfterClose:y,handleSaveManageViews:w,showShare:x,showApplyAutomatically:H,showSetAsDefault:P,showCreatedBy:j,variantNames:B,portalContainer:u,showOnlyFavorites:g,onManageViewsCancel:E}=d,V=st(),s=xe("@ui5/webcomponents-react"),i=s.getText(at),b=s.getText(Be),N=s.getText(je),G=s.getText(_t),k=s.getText(At),Y=s.getText(Pe),F=s.getText(Dt),U=s.getText(Et),K=s.getText(nt),[f,J]=t.useState(new Map),[I,ee]=t.useState({}),M=sa(),ie=e.jsxs(e.Fragment,{children:[g&&e.jsx(de,{},"favorite-variant-item"),e.jsx(de,{children:N}),x&&e.jsx(de,{demandPopin:!0,minWidth:600,children:G}),P&&e.jsx(de,{demandPopin:!0,minWidth:600,popinText:k,children:k}),H&&e.jsx(de,{demandPopin:!0,minWidth:600,popinText:Y,children:Y}),j&&e.jsx(de,{demandPopin:!0,minWidth:600,popinText:F,children:F}),e.jsx(de,{},"delete-variant-item")]}),[c,C]=t.useState(t.Children.map(D,l=>Ke.isValidElement(l)?l.props:{}));t.useEffect(()=>{C(t.Children.map(D,l=>Ke.isValidElement(l)?l.props:{}))},[D]);const[v,Q]=t.useState(c);t.useEffect(()=>{Q(c)},[c]);const[X,T]=t.useState(),_=t.useRef({}),W=(l,n)=>{n&&(_.current[n.currentVariant]={..._.current[n.currentVariant]??{},...n})},r=t.useRef(new Set([])),R=l=>{r.current.add(l.target.dataset.children),C(n=>n.filter(p=>p.children!==l.target.dataset.children).map(p=>_.current.hasOwnProperty(p.children)?{...p,..._.current[p.children]}:p))},te=l=>{Object.keys(I).length===0?w(l,{updatedRows:_.current,defaultView:X,deletedRows:r.current}):Object.values(I)[0].focus()},$=l=>{l.detail.escPressed?ae(l):y(l)},ae=l=>{typeof E=="function"&&E(ue(l,{invalidVariants:I})),ee(n=>(Object.values(n).forEach(p=>{p.isInvalid=!1}),{})),y(l)},le=l=>{const n=l.target.value.toLowerCase();Q(c.filter(p=>{var o,h,O,z;return((h=(o=p.children)==null?void 0:o.toLowerCase())==null?void 0:h.includes(n))||((z=(O=p.author)==null?void 0:O.toLowerCase())==null?void 0:z.includes(n))}))};return ke()?Re.createPortal(e.jsx(lt,{open:!0,className:M.manageViewsDialog,"data-component-name":"VariantManagementManageViewsDialog",onAfterClose:y,onBeforeClose:$,headerText:U,initialFocus:`search-${V}`,header:e.jsxs(Ve,{direction:Ce.Column,style:{width:"100%"},alignItems:Te.Center,children:[e.jsx("h2",{className:M.headerText,children:U}),e.jsx(Se,{id:`search-${V}`,className:M.search,placeholder:K,showClearIcon:!0,icon:e.jsx(we,{name:Xe,className:M.inputIcon}),onInput:le})]}),resizable:!0,footer:e.jsx(Fe,{design:Oe.Footer,endContent:e.jsxs(e.Fragment,{children:[e.jsx(Z,{design:L.Emphasized,onClick:te,children:b}),e.jsx(Z,{design:L.Transparent,onClick:ae,children:i})]})}),children:e.jsx(Wt,{columns:ie,stickyColumnHeader:!0,role:"table",children:v.map(l=>t.createElement(Ae,{...l,setInvalidVariants:ee,setChangedVariantNames:J,changedVariantNames:f,variantNames:B,handleRowChange:W,handleDelete:R,defaultView:X,setDefaultView:T,showShare:x,showApplyAutomatically:H,showSetAsDefault:P,showCreatedBy:j,key:l==null?void 0:l.children,showOnlyFavorites:g}))})}),u??document.body):null};try{De.displayName="ManageViewsDialog",De.__docgenInfo={description:"",displayName:"ManageViewsDialog",props:{onAfterClose:{defaultValue:null,description:"",name:"onAfterClose",required:!0,type:{name:"any"}},handleSaveManageViews:{defaultValue:null,description:"",name:"handleSaveManageViews",required:!0,type:{name:"(e: MouseEventHandler<HTMLElement>, payload: { updatedRows: any; defaultView: string; deletedRows: any; }) => void"}},showShare:{defaultValue:null,description:"",name:"showShare",required:!0,type:{name:"boolean"}},showApplyAutomatically:{defaultValue:null,description:"",name:"showApplyAutomatically",required:!0,type:{name:"boolean"}},showSetAsDefault:{defaultValue:null,description:"",name:"showSetAsDefault",required:!0,type:{name:"boolean"}},showCreatedBy:{defaultValue:null,description:"",name:"showCreatedBy",required:!0,type:{name:"boolean"}},variantNames:{defaultValue:null,description:"",name:"variantNames",required:!0,type:{name:"string[]"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},showOnlyFavorites:{defaultValue:null,description:"",name:"showOnlyFavorites",required:!1,type:{name:"boolean"}},onManageViewsCancel:{defaultValue:null,description:"",name:"onManageViewsCancel",required:!1,type:{name:"(e: (MouseEvent<ButtonDomRef, MouseEvent> | Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) & { ...; }) => void"}}}}}catch{}const ra=qe({dialog:{"&::part(footer)":{borderBlockStart:"none",padding:0}},input:{width:"100%",marginBlock:"0.1875rem"},checkBoxesContainer:{paddingInline:"0.5rem"}},{name:"SaveViewDialogStyles"}),Ee=d=>{const{onAfterClose:D,handleSave:y,selectedVariant:w,showShare:x,showApplyAutomatically:H,showSetAsDefault:P,variantNames:j,portalContainer:B,saveViewInputProps:u,onSaveViewCancel:g}=d,E=t.useRef(null),V=t.useRef(void 0),s=xe("@ui5/webcomponents-react"),i=ra(),b=st(),N=s.getText(at),G=s.getText(Be),k=s.getText(Nt),Y=s.getText(Mt),F=s.getText(tt),U=s.getText(Pe),K=s.getText(je),f=s.getText(Ze),J=s.getText(et),[I,ee]=t.useState(w.isDefault),[M,ie]=t.useState(w.global),[c,C]=t.useState(w.applyAutomatically),[v,Q]=t.useState(w.children),[X,T]=t.useState(!1),[_,W]=t.useState(!1),r=n=>{typeof(u==null?void 0:u.onInput)=="function"&&u.onInput(n);const p=_e(n.target.value);Q(p),j.includes(p)?T(f):p.length===0?T(J):n.isInvalid?W(!0):(T(!1),W(!1))},R=n=>{var p,o,h;j.includes(v)?(T(f),(p=V.current)==null||p.focus()):v.length===0?(T(J),(o=V.current)==null||o.focus()):_?(h=V.current)==null||h.focus():(T(!1),y(n,{...w,children:v,isDefault:I,global:M,applyAutomatically:c}))},te=n=>{n.detail.escPressed?$(n):D(n)},$=n=>{typeof g=="function"&&g(ue(n,{...w,children:v,isDefault:I,global:M,applyAutomatically:c,isInvalid:_})),W(!1),V.current.isInvalid=!1,E.current.close()},ae=n=>{ee(n.target.checked)},le=n=>{ie(n.target.checked)},se=n=>{C(n.target.checked)};return ke()?Re.createPortal(e.jsx(lt,{open:!0,className:i.dialog,ref:E,headerText:k,onAfterClose:D,onBeforeClose:te,initialFocus:`view-${b}`,footer:e.jsx(Fe,{design:Oe.Footer,endContent:e.jsxs(e.Fragment,{children:[e.jsx(Z,{design:L.Emphasized,onClick:R,children:G}),e.jsx(Z,{design:L.Transparent,onClick:$,children:N})]})}),children:e.jsxs(Ve,{direction:Ce.Column,alignItems:Te.Start,children:[e.jsx(Yt,{for:`view-${b}`,showColon:!0,children:K}),e.jsx(Se,{accessibleName:K,ref:V,...u,valueState:(u==null?void 0:u.valueState)??(X?"Error":"None"),valueStateMessage:(u==null?void 0:u.valueStateMessage)??e.jsx("div",{children:X}),className:ye(i.input,u==null?void 0:u.className),id:`view-${b}`,value:v,onInput:r}),e.jsxs(Ve,{alignItems:Te.Start,direction:Ce.Column,className:i.checkBoxesContainer,children:[P&&e.jsx(ge,{onChange:ae,text:Y,checked:I}),x&&e.jsx(ge,{onChange:le,text:F,checked:M}),H&&e.jsx(ge,{onChange:se,text:U,checked:c})]})]})}),B??document.body):null};try{Ee.displayName="SaveViewDialog",Ee.__docgenInfo={description:"",displayName:"SaveViewDialog",props:{onAfterClose:{defaultValue:null,description:"",name:"onAfterClose",required:!0,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},handleSave:{defaultValue:null,description:"",name:"handleSave",required:!0,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, never>, selectedVariant: SelectedVariant) => void"}},selectedVariant:{defaultValue:null,description:"",name:"selectedVariant",required:!0,type:{name:"SelectedVariant"}},showShare:{defaultValue:null,description:"",name:"showShare",required:!0,type:{name:"boolean"}},showApplyAutomatically:{defaultValue:null,description:"",name:"showApplyAutomatically",required:!0,type:{name:"boolean"}},showSetAsDefault:{defaultValue:null,description:"",name:"showSetAsDefault",required:!0,type:{name:"boolean"}},variantNames:{defaultValue:null,description:"",name:"variantNames",required:!0,type:{name:"string[]"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},saveViewInputProps:{defaultValue:null,description:"",name:"saveViewInputProps",required:!1,type:{name:'Omit<InputPropTypes, "value">'}},onSaveViewCancel:{defaultValue:null,description:"",name:"onSaveViewCancel",required:!1,type:{name:"(e: (MouseEvent<ButtonDomRef, MouseEvent> | Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) & { ...; }) => void"}}}}}catch{}const oa={container:{display:"flex",alignItems:"center",textAlign:"center"},title:{cursor:"pointer",color:S.sapLinkColor,textShadow:"none","&:hover":{color:S.sapLink_Hover_Color},"&:active":{color:S.sapLink_Active_Color}},disabled:{"& $title":{color:S.sapGroup_TitleTextColor,cursor:"default","&:hover":{color:"ThemingParameters.sapGroup_TitleTextColor"}}},dirtyState:{color:S.sapGroup_TitleTextColor,paddingInline:"0.125rem",fontWeight:"bold",font:S.sapFontFamily,fontSize:S.sapFontSize,flexGrow:1},dirtyStateText:{fontSize:S.sapFontSmallSize,fontWeight:"normal"},navDownBtn:{marginInlineStart:"0.125rem"},footer:{"& > :last-child":{marginInlineEnd:0}},inputIcon:{cursor:"pointer",color:S.sapContent_IconColor},searchInputContainer:{padding:"0.25rem 1rem"},searchInput:{width:"100%"},popover:{minWidth:"25rem","&::part(content), &::part(footer)":{padding:0},"&::part(footer)":{borderBlockStart:"none"}}},da=qe(oa,{name:"VariantManagement"}),Ne=t.forwardRef((d,D)=>{const y=xe("@ui5/webcomponents-react"),{titleText:w=y.getText(Rt),className:x,style:H,placement:P=Qt.Bottom,level:j=Xt.H4,onSelect:B,closeOnItemSelect:u,disabled:g,onSaveAs:E,onSaveManageViews:V,showOnlyFavorites:s,inErrorState:i,hideShare:b,children:N,hideManageVariants:G,hideApplyAutomatically:k,hideSetAsDefault:Y,hideCreatedBy:F,hideSaveAs:U,dirtyStateText:K="*",dirtyState:f,onSave:J,portalContainer:I,onManageViewsCancel:ee,onSaveViewCancel:M,...ie}=d,c=da(),C=t.useRef(null),[v,Q]=t.useState(t.Children.toArray(N));t.useEffect(()=>{Q(t.Children.toArray(N))},[N]);const[X,T]=t.useState(!1),[_,W]=t.useState(!1),[r,R]=t.useState(()=>{const a=v.find(m=>t.isValidElement(m)&&m.props.selected);if(a)return{...a.props,variantItem:a.ref}}),[te,$]=t.useState((r==null?void 0:r.saveViewInputProps)??{}),ae=()=>{C.current.close()},le=()=>{T(!0)},se=()=>{T(!1)},l=()=>{W(!0)},n=()=>{W(!1)},p=a=>{typeof J=="function"&&J(ue(a,r))},o=(a,m)=>{typeof E=="function"&&E(ue(a,m)),R(m),a.defaultPrevented||n()},h=(a,m)=>{const{defaultView:pe,updatedRows:Ge,deletedRows:yt}=m,me={deletedVariants:[],prevVariants:[],updatedVariants:[],variants:[]};Q(gt=>t.Children.toArray(gt.map(A=>{if(!t.isValidElement(A))return!1;let ne={};const Ye=C.current.querySelector(`ui5-li[data-children="${A.props.children}"]`);if(me.prevVariants.push(A.props),pe&&(pe===A.props.children?ne.isDefault=!0:A.props.isDefault&&(ne.isDefault=!1)),Object.keys(Ge).includes(A.props.children)){const{currentVariant:ua,...Vt}=Ge[A.props.children];ne={...ne,...Vt}}return yt.has(A.props.children)?(me.deletedVariants.push(A.props),!1):(Object.keys(ne).length>0&&me.updatedVariants.push({...A.props,...ne,variantItem:Ye,prevVariant:{...A.props}}),me.variants.push({...A.props,...ne,variantItem:Ye}),t.cloneElement(A,ne))}))),typeof V=="function"&&V(ue(a,me)),a.defaultPrevented||se()},O=t.useCallback(a=>{C.current.showAt(a.target)},[C]),z=y.getText(nt),q=y.getText(qt),re=y.getText(Pt),ot=y.getText(Be),dt=y.getText(jt),Le=y.getText(Bt),ut=ye(c.container,g&&c.disabled,x),ct=ye(c.dirtyState,K!=="*"&&c.dirtyStateText),fe=t.useRef();t.useEffect(()=>{fe.current&&typeof B=="function"&&(B(ue(fe.current,{selectedVariant:r})),fe.current=void 0)},[r,B]),t.useEffect(()=>{const a=v.find(m=>t.isValidElement(m)&&m.props.children===(r==null?void 0:r.children));$((a==null?void 0:a.props.saveViewInputProps)??{})},[r,v]);const pt=a=>{R({...a.detail.selectedItems[0].dataset,variantItem:a.detail.selectedItems[0]}),fe.current=a,u&&ae()},He=v.map(a=>{var m;return t.isValidElement(a)&&typeof((m=a.props)==null?void 0:m.children)=="string"?a.props.children:""}),[he,Ue]=t.useState(void 0);t.useEffect(()=>{s&&Ue(v.filter(a=>t.isValidElement(a)&&(a.props.favorite||a.props.isDefault))),!s&&(he==null?void 0:he.length)>0&&Ue(void 0)},[s,v]);const ce=he??v,mt=ce.length>10,[We,$e]=t.useState(void 0),[ze,ft]=t.useState(""),ht=a=>{ft(a.target.value),$e(ce.filter(m=>{var pe;return typeof((pe=m==null?void 0:m.props)==null?void 0:pe.children)=="string"&&m.props.children.toLowerCase().includes(a.target.value.toLowerCase())}))};t.useEffect(()=>{We&&$e(ce.filter(a=>{var m;return typeof((m=a==null?void 0:a.props)==null?void 0:m.children)=="string"&&a.props.children.toLowerCase().includes(ze)}))},[ce]);const vt=ke(),ve=f&&!(r!=null&&r.readOnly);return e.jsx("div",{className:ut,style:H,...ie,ref:D,children:e.jsxs(rt.Provider,{value:{selectVariantItem:R},children:[e.jsxs(Ve,{onClick:g?void 0:O,children:[e.jsx(Zt,{level:j,className:c.title,children:r==null?void 0:r.children}),f&&e.jsx("div",{className:ct,children:K})]}),e.jsx(Z,{className:ye(c.navDownBtn,"ui5-content-density-compact"),tooltip:Le,accessibleName:Le,onClick:g?void 0:O,design:L.Transparent,icon:wt,disabled:g}),vt?Re.createPortal(e.jsx(ea,{className:c.popover,ref:C,headerText:w,placementType:P,footer:(ve||!U||!G)&&e.jsx(Fe,{design:Oe.Footer,className:c.footer,endContent:e.jsxs(e.Fragment,{children:[!i&&ve&&e.jsx(Z,{onClick:p,design:L.Emphasized,children:ot}),!i&&!U&&e.jsx(Z,{onClick:l,design:ve?L.Transparent:L.Emphasized,disabled:!r||Object.keys(r).length===0,children:q}),!i&&!G&&e.jsx(Z,{onClick:le,design:ve||!U?L.Transparent:L.Emphasized,children:re})]})}),onAfterClose:Ft,children:i?e.jsx(Kt,{name:Jt.UnableToLoad}):e.jsx(ta,{onSelectionChange:pt,mode:aa.SingleSelect,header:mt?e.jsx("div",{className:c.searchInputContainer,tabIndex:-1,children:e.jsx(Se,{className:c.searchInput,accessibleName:dt,value:ze,placeholder:z,onInput:ht,showClearIcon:!0,icon:e.jsx(we,{name:Xe,className:c.inputIcon})})}):void 0,children:We??ce})}),I??document.body):null,X&&e.jsx(De,{onAfterClose:se,onManageViewsCancel:ee,handleSaveManageViews:h,showShare:!b,showApplyAutomatically:!k,showCreatedBy:!F,showSetAsDefault:!Y,variantNames:He,portalContainer:I,showOnlyFavorites:s,children:v}),_&&e.jsx(Ee,{onSaveViewCancel:M,saveViewInputProps:te,portalContainer:I,showShare:!b,showApplyAutomatically:!k,showSetAsDefault:!Y,onAfterClose:n,handleSave:o,selectedVariant:r,variantNames:He})]})})});Ne.displayName="VariantManagement";try{Ne.displayName="VariantManagement",Ne.__docgenInfo={description:"The `VariantManagement` component can be used to manage variants, such as FilterBar variants or AnalyticalTable variants.",displayName:"VariantManagement",props:{children:{defaultValue:null,description:"Variant items displayed by the VariantManagement component.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantItem` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},placement:{defaultValue:null,description:"Determines on which side the VariantManagement popover is placed at.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},titleText:{defaultValue:null,description:`Describes the title of the VariantManagement popover.

__Note:__ If not set, the default title is used.`,name:"titleText",required:!1,type:{name:"string"}},closeOnItemSelect:{defaultValue:null,description:"Defines whether the VariantManagement should be closed if an item was selected.",name:"closeOnItemSelect",required:!1,type:{name:"boolean"}},level:{defaultValue:null,description:"Describes the `HTML Title` level of the variants.",name:"level",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},disabled:{defaultValue:null,description:"Defines whether the VariantManagement is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},dirtyState:{defaultValue:null,description:"Indicator for modified but not saved variants.\n\n__Note:__ You can change the indicator by setting `dirtyStateText`.",name:"dirtyState",required:!1,type:{name:"boolean"}},dirtyStateText:{defaultValue:null,description:"Text for the dirty state indicator.",name:"dirtyStateText",required:!1,type:{name:"string"}},showOnlyFavorites:{defaultValue:null,description:"Indicates that the 'Favorites' feature is used. Only variants marked as favorites will be displayed in the variant list.\n\n__Note:__ Only if `showOnlyFavorites` is set to `true` favorites can be changed.",name:"showOnlyFavorites",required:!1,type:{name:"boolean"}},hideSetAsDefault:{defaultValue:null,description:"Indicates that set as default is visible in the Save View and the Manage Views dialogs.",name:"hideSetAsDefault",required:!1,type:{name:"boolean"}},hideShare:{defaultValue:null,description:"Indicates that the Public indicator is visible in the Save View and the Manage Views dialogs.",name:"hideShare",required:!1,type:{name:"boolean"}},hideApplyAutomatically:{defaultValue:null,description:"Indicates that Apply Automatically is visible in the Save View and the Manage Views dialogs.",name:"hideApplyAutomatically",required:!1,type:{name:"boolean"}},hideCreatedBy:{defaultValue:null,description:"Indicates that the Author is visible in the Manage Views dialog.",name:"hideCreatedBy",required:!1,type:{name:"boolean"}},hideSaveAs:{defaultValue:null,description:"Indicates that the Save View dialog button is visible.",name:"hideSaveAs",required:!1,type:{name:"boolean"}},hideManageVariants:{defaultValue:null,description:"Indicates that the Manage Views dialog button is visible.",name:"hideManageVariants",required:!1,type:{name:"boolean"}},inErrorState:{defaultValue:null,description:"Indicates that the control is in error state. If set to true error message will be displayed whenever the variant is opened.",name:"inErrorState",required:!1,type:{name:"boolean"}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},onSelect:{defaultValue:null,description:"Fired after a variant has been selected.\n\n__Note:__ This event inherits part of its details from the `onSelectionChange` event of the `List` component.",name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail & { selectedVariant: SelectedVariant; }>) => void"}},onSaveAs:{defaultValue:null,description:'The event is fired when the "Save" button is clicked inside the Save View dialog.\n\n__Note:__ Calling `event.preventDefault()` prevents the dialog from closing when clicked.',name:"onSaveAs",required:!1,type:{name:"(e: MouseEvent<ButtonDomRef, MouseEvent> & { detail: SelectedVariant; }) => void"}},onSaveManageViews:{defaultValue:null,description:'The event is fired when the "Save" button is clicked inside the Manage Views dialog.\n\n__Note:__ Calling `event.preventDefault()` prevents the dialog from closing when clicked.',name:"onSaveManageViews",required:!1,type:{name:"(e: MouseEvent<ButtonDomRef, MouseEvent> & { detail: { deletedVariants: VariantItemPropTypes[]; prevVariants: VariantItemPropTypes[]; updatedVariants: UpdatedVariant[]; variants: SelectedVariant[]; }; }) => void"}},onSave:{defaultValue:null,description:'The event is fired when the "Save" button is clicked in the `VariantManagement` popover.\n\n__Note:__ The save button is only displayed if the `VariantManagement` is in `dirtyState` and the selected variant is not in `readOnly` mode.',name:"onSave",required:!1,type:{name:"(e: MouseEvent<ButtonDomRef, MouseEvent> & { detail: SelectedVariant; }) => void"}},onManageViewsCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button inside the Manage Views dialog is clicked or ESCAPE is pressed.',name:"onManageViewsCancel",required:!1,type:{name:"(e: (MouseEvent<ButtonDomRef, MouseEvent> | Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) & { ...; }) => void"}},onSaveViewCancel:{defaultValue:null,description:'The event is fired when the "Cancel" button inside the Save View dialog is clicked or ESCAPE is pressed.',name:"onSaveViewCancel",required:!1,type:{name:"(e: (MouseEvent<ButtonDomRef, MouseEvent> | Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) & { ...; }) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Me=t.forwardRef((d,D)=>{const{isDefault:y,author:w,favorite:x,global:H,labelReadOnly:P,applyAutomatically:j,applyAutomaticallyText:B,readOnly:u,selected:g,children:E,hideDelete:V}=d,{selectVariantItem:s}=t.useContext(rt),[i,b]=kt(D);t.useEffect(()=>{g&&s({...d,variantItem:b.current})},[g]);const{manageViewsInputProps:N,saveViewInputProps:G,...k}=d;return e.jsx(na,{...k,ref:i,"data-is-default":y,"data-author":w,"data-favorite":x,"data-global":H,"data-label-read-only":P,"data-apply-automatically":j,"data-apply-automatically-text":B,"data-read-only":u,"data-children":E,"data-hide-delete":V})});Me.displayName="VariantItem";try{Me.displayName="VariantItem",Me.__docgenInfo={description:"The `VariantItem` describes a variant/view of the `VariantManagement` component.",displayName:"VariantItem",props:{children:{defaultValue:null,description:"The name of the variant.",name:"children",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"Author of the variant.",name:"author",required:!1,type:{name:"string"}},favorite:{defaultValue:null,description:"Indicates if favorites can be created.\n\n__Note:__ Has no effect if `showOnlyFavorites` is falsy in the `VariantMangament`.",name:"favorite",required:!1,type:{name:"boolean"}},global:{defaultValue:null,description:"Indicator if a variant is visible for all users (public flag is set).",name:"global",required:!1,type:{name:"boolean"}},isDefault:{defaultValue:null,description:"Indicator if it's the default variant.",name:"isDefault",required:!1,type:{name:"boolean"}},labelReadOnly:{defaultValue:null,description:"Indicates if the variant title can be changed.",name:"labelReadOnly",required:!1,type:{name:"boolean"}},applyAutomatically:{defaultValue:null,description:"Indicates if the variant should be applied automatically on selection.",name:"applyAutomatically",required:!1,type:{name:"boolean"}},applyAutomaticallyText:{defaultValue:null,description:'Text displayed next to the "Apply Automatically" checkbox inside the "Manage Views" dialog.',name:"applyAutomaticallyText",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:'If set to false, the user is allowed to change the item\'s data.\n\n__Note:__ When set to true, no "Save" button will be displayed for the `VariantItem` when the `VariantManagement` is in `dirtyState`.',name:"readOnly",required:!1,type:{name:"boolean"}},hideDelete:{defaultValue:null,description:"Indicates if the variant can be deleted.\n\n__Note:__ If not set, a delete button is shown for all variants except for variants with `global={true}`.",name:"hideDelete",required:!1,type:{name:"boolean"}},manageViewsInputProps:{defaultValue:null,description:'Defines the props of the input rendered with the `VariantItem` inside the "Manage Views" dialog.\n\n__Note:__ It is possible to overwrite internally used props. Please use with caution!',name:"manageViewsInputProps",required:!1,type:{name:'Omit<InputPropTypes, "value">'}},saveViewInputProps:{defaultValue:null,description:'Defines the props of the input rendered with the `VariantItem` inside the "Save View" dialog.\n\n__Note:__ It is possible to overwrite internally used props. Please use with caution!',name:"saveViewInputProps",required:!1,type:{name:'Omit<InputPropTypes, "id" | "value">'}},accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{Ne as V,Me as a};
