import{j as o}from"./ManagedStyles-0Bwp9t5R.js";import{c as q}from"./clsx-B-dksMZM.js";import{r as a}from"./index-BP8_t0zE.js";import{u as ee}from"./useStylesheet-DXQOMd9Q.js";import{u as xe}from"./withWebComponent-DdLYI_QY.js";import{g as ve}from"./Media-BZGMoUh-.js";import{T as Se}from"./index-DO3RY53V.js";import{T as Ie}from"./Title-ClrU0KnW.js";import{u as ce}from"./useIsomorphicId-D4u2wl0X.js";import{f as Ne}from"./utils-VXdlHuBA.js";import{L as Te}from"./index-CBk4YQBz.js";import{W as pe}from"./WrappingType-CW8URInd.js";var de=(e=>(e.Solid="Solid",e.Transparent="Transparent",e))(de||{});const Ce={packageName:"@ui5/webcomponents-react",fileName:"Form.module.css",content:'.Form_formContainer_18twp_1{container-type:inline-size}.Form_form_18twp_1{align-items:center;column-gap:.5rem;display:grid;row-gap:.25rem;--_ui5wcr_form_label_text_align:end}.Form_form_18twp_1>[ui5-title]~[data-row-index-label="2"]:has(+[data-row-index="3"]){margin-block-start:.5rem}.Form_form_18twp_1>[ui5-title]~[data-row-index-label="2"]+[data-row-index="2"]{margin-block-start:.5rem}@container (max-width: 599px){.Form_form_18twp_1{--_ui5wcr_form_label_span:var(--_ui5wcr_form_label_span_s);--_ui5wcr_form_columns:var(--_ui5wcr_form_columns_s);--_ui5wcr_form_content_span:calc(12 - var(--_ui5wcr_form_label_span));grid-template-columns:repeat(calc(var(--_ui5wcr_form_columns)*12),1fr)}}@container (min-width: 600px) and (max-width: 1023px){.Form_form_18twp_1{--_ui5wcr_form_label_span:var(--_ui5wcr_form_label_span_m);--_ui5wcr_form_columns:var(--_ui5wcr_form_columns_m);--_ui5wcr_form_content_span:calc(12 - var(--_ui5wcr_form_label_span));grid-template-columns:repeat(calc(var(--_ui5wcr_form_columns)*12),1fr)}}@container (min-width: 1024px) and (max-width: 1439px){.Form_form_18twp_1{--_ui5wcr_form_label_span:var(--_ui5wcr_form_label_span_l);--_ui5wcr_form_columns:var(--_ui5wcr_form_columns_l);--_ui5wcr_form_content_span:calc(12 - var(--_ui5wcr_form_label_span));grid-template-columns:repeat(calc(var(--_ui5wcr_form_columns)*12),1fr)}}@container (min-width: 1440px){.Form_form_18twp_1{--_ui5wcr_form_label_span:var(--_ui5wcr_form_label_span_xl);--_ui5wcr_form_columns:var(--_ui5wcr_form_columns_xl);--_ui5wcr_form_content_span:calc(12 - var(--_ui5wcr_form_label_span));grid-template-columns:repeat(calc(var(--_ui5wcr_form_columns)*12),1fr)}}.Form_solid_18twp_58{background-color:var(--sapGroup_ContentBackground)}.Form_transparent_18twp_62{background-color:initial}.Form_formTitle_18twp_66{border-block-end:var(--_ui5wcr_Form_HeaderBorderWidth) solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;font-size:var(--sapGroup_Title_FontSize);grid-column:1/-1;height:2.75rem;line-height:2.75rem}.Form_labelSpan12_18twp_75{--_ui5wcr_form_content_span:12;--_ui5wcr_form_label_text_align:start;--_ui5wcr_form_label_span:12;row-gap:0}'},O={formContainer:"Form_formContainer_18twp_1",form:"Form_form_18twp_1",solid:"Form_solid_18twp_58",transparent:"Form_transparent_18twp_62",formTitle:"Form_formTitle_18twp_66",labelSpan12:"Form_labelSpan12_18twp_75"},fe=a.createContext({labelSpan:null,recalcTrigger:0});function ae(){return a.useContext(fe)}const _e=a.createContext({});function Ve(){return a.useContext(_e)}const ke=e=>e+1,R=a.forwardRef((e,l)=>{var re;const{as:c="form",backgroundDesign:g=de.Transparent,children:m,columnsS:d=1,columnsM:v=1,columnsL:s=1,columnsXL:h=2,className:E,labelSpanS:I=12,labelSpanM:f=2,labelSpanL:N=4,labelSpanXL:y=4,titleText:b,style:T,...j}=e,[C,H]=a.useState(()=>new Map);ee(Ce,R.displayName);const V=new Map;V.set("Phone",d),V.set("Tablet",v),V.set("Desktop",s),V.set("LargeDesktop",h);const i=new Map;i.set("Phone",I),i.set("Tablet",f),i.set("Desktop",N),i.set("LargeDesktop",y);const[$,M]=xe(l),[L,A]=a.useState(((re=ve())==null?void 0:re.name)??"Desktop"),le=a.useRef(L);a.useEffect(()=>{const t=new ResizeObserver(([p])=>{if(p.contentRect.width){const u=ve(p.contentRect.width);u&&le.current!==u.name&&(le.current=u.name,A(u.name))}});return M.current&&t.observe(M.current),()=>{t.disconnect()}},[M]);const K=i.get(L),P=V.get(L),te=a.useCallback((t,p,r)=>{H(u=>{const n=new Map(u);if(r){const z=n.get(r);z?z.formItemIds=new Set(z.formItemIds).add(t):n.set(r,{id:r,type:"formGroup",formItemIds:new Set([t])})}else n.has(t)||n.set(t,{id:t,type:p,formItemIds:new Set});return n})},[]),ue=a.useCallback((t,p)=>{H(r=>{const u=new Map(r);if(p){const n=u.get(p);n&&n.formItemIds.delete(t)}else u.delete(t);return u})},[]),w=a.useMemo(()=>{var se,ie;const t=[],p=[];let r=-1;const u=K===12?2:1;let n=(b?2:1)+u-1;const z={},F=[],we=Math.ceil(C.size/P),ne=Array.from(C.entries()),oe=ne.every(([,x])=>x.type==="formItem");if(ne.forEach(([x,_],k)=>{const S=oe?Math.floor(k/we):k%P;F[S]??(F[S]=[]),F[S].push({id:x,..._})}),oe)((se=F.at(-1))==null?void 0:se.length)===1&&((ie=F.at(-2))==null?void 0:ie.length)>2&&F.at(-1).unshift(F.at(-2).pop()),F.forEach((x,_)=>{let k=n;x.forEach(({id:S})=>{r++,t.push({id:S,index:r,columnIndex:_,rowIndex:k}),k+=u})});else{let x=0,_=(b?2:1)+u-1;C.forEach(({type:k,formItemIds:S},Q)=>{const Y=x%P;if(r++,k==="formGroup"){z[_]=!0,p.push({id:Q,index:r,columnIndex:Y,rowIndex:_});let J=1,Z=1;S.size||n++,S.forEach((Fe,Re,me)=>{t.push({id:Fe,index:r,groupId:Q,columnIndex:Y,rowIndex:_+J,lastGroupItem:me.size===Z}),me.size===Z&&n<_+J+u&&(n=_+J+u),J+=u,Z++})}else n<_+1&&(n+=u),t.push({id:Q,index:r,columnIndex:Y,rowIndex:_});(x+1)%P===0&&(_=n),x++})}return{formItems:t,formGroups:p,registerItem:te,unregisterItem:ue,rowsWithGroup:z}},[C,te,ue,P,b,K]),he=q(O.form,O[g.toLowerCase()]),be=c,W=a.useRef(void 0),B=a.useRef(void 0),[ge,ye]=a.useReducer(ke,0,void 0);return a.useEffect(()=>{if(W.current||B.current){let t=w.formItems.length!==W.current.length||w.formGroups.length!==B.current.length;t||(t=!w.formGroups.every((p,r)=>B.current.findIndex(u=>u.id===p.id)===r)),t||(t=!w.formItems.every((p,r)=>W.current.findIndex(u=>u.id===p.id)===r)),t&&ye()}W.current=w.formItems,B.current=w.formGroups},[w.formItems,w.formGroups]),o.jsx(fe.Provider,{value:{...w,labelSpan:K,recalcTrigger:ge},children:o.jsx(be,{className:q(O.formContainer,E),suppressHydrationWarning:!0,ref:$,style:{...T,"--_ui5wcr_form_label_span_s":I,"--_ui5wcr_form_label_span_m":f,"--_ui5wcr_form_label_span_l":N,"--_ui5wcr_form_label_span_xl":y,"--_ui5wcr_form_columns_s":d,"--_ui5wcr_form_columns_m":v,"--_ui5wcr_form_columns_l":s,"--_ui5wcr_form_columns_xl":h},...j,children:o.jsxs("div",{className:he,children:[b&&o.jsx(Se,{level:Ie.H3,className:O.formTitle,style:{gridColumn:"1 / -1"},children:b}),m]})})})});R.displayName="Form";try{R.displayName="Form",R.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.\n\n__Note:__ The `Form` calculates its width based on the available space of its container. If the container also dynamically adjusts its width to its contents, you must ensure that you specify a fixed width, either for the container or for the `Form` itself. (e.g. when used inside a 'popover').",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 1`,name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:`Form columns for medium size (\`600px\` - \`1023px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note__: The number of columns for medium size must not be smaller than the number of columns for small size.`,name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:`Form columns for large size (\`1024px\` - \`1439px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note:__ The number of columns for large size must not be smaller than the number of columns for medium size.`,name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:`Form columns for extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 2

__Note:__ The number of columns for extra large size must not be smaller than the number of columns for large size.`,name:"columnsXL",required:!1,type:{name:"number"}},labelSpanS:{defaultValue:null,description:`Default span for labels in small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 12`,name:"labelSpanS",required:!1,type:{name:"number"}},labelSpanM:{defaultValue:null,description:"Default span for labels in medium size (`600px` - `1023px`).\nMust be a number between 1 and 12.\n\nDefault Value: 2",name:"labelSpanM",required:!1,type:{name:"number"}},labelSpanL:{defaultValue:null,description:"Default span for labels in large size (`1024px` - `1439px`).\nMust be a number between 1 and 12.\n\nDefault Value: 4",name:"labelSpanL",required:!1,type:{name:"number"}},labelSpanXL:{defaultValue:null,description:`Default span for labels in extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{R.displayName="Form",R.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.\n\n__Note:__ The `Form` calculates its width based on the available space of its container. If the container also dynamically adjusts its width to its contents, you must ensure that you specify a fixed width, either for the container or for the `Form` itself. (e.g. when used inside a 'popover').",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 1`,name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:`Form columns for medium size (\`600px\` - \`1023px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note__: The number of columns for medium size must not be smaller than the number of columns for small size.`,name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:`Form columns for large size (\`1024px\` - \`1439px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note:__ The number of columns for large size must not be smaller than the number of columns for medium size.`,name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:`Form columns for extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 2

__Note:__ The number of columns for extra large size must not be smaller than the number of columns for large size.`,name:"columnsXL",required:!1,type:{name:"number"}},labelSpanS:{defaultValue:null,description:`Default span for labels in small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 12`,name:"labelSpanS",required:!1,type:{name:"number"}},labelSpanM:{defaultValue:null,description:"Default span for labels in medium size (`600px` - `1023px`).\nMust be a number between 1 and 12.\n\nDefault Value: 2",name:"labelSpanM",required:!1,type:{name:"number"}},labelSpanL:{defaultValue:null,description:"Default span for labels in large size (`1024px` - `1439px`).\nMust be a number between 1 and 12.\n\nDefault Value: 4",name:"labelSpanL",required:!1,type:{name:"number"}},labelSpanXL:{defaultValue:null,description:`Default span for labels in extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const qe={packageName:"@ui5/webcomponents-react",fileName:"FormGroupTitle.module.css",content:".FormGroupTitle_title_16ybq_1{color:var(--sapGroup_TitleTextColor);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);font-weight:unset;grid-column:1/span 12;height:var(--_ui5wcr-FormGroupTitleHeight);line-height:var(--_ui5wcr-FormGroupTitleHeight);margin:0;margin-block-end:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"},Ge={title:"FormGroupTitle_title_16ybq_1"};function G({as:e,className:l,titleText:c,style:g,...m}){ee(qe,G.displayName);const d=e;return o.jsx(d,{...m,className:q(Ge.title,l),title:c,"aria-label":c,"data-component-name":"FormGroupTitle",style:g,children:c})}G.displayName="FormGroupTitle";try{G.displayName="FormGroupTitle",G.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}}}catch{}try{G.displayName="FormGroupTitle",G.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}}}catch{}const X=e=>{const{titleText:l,children:c,as:g="h5",style:m,...d}=e,{formGroups:v,registerItem:s,unregisterItem:h,labelSpan:E,recalcTrigger:I}=ae(),f=ce();a.useEffect(()=>(s==null||s(f,"formGroup"),()=>h==null?void 0:h(f)),[f,s,h,I]);const N=a.useMemo(()=>v==null?void 0:v.find(({id:j})=>f===j),[v,f]);if(!N)return null;const{columnIndex:y,rowIndex:b}=N,T=E===12?b-1:b;return o.jsx(_e.Provider,{value:{id:f},children:o.jsxs(o.Fragment,{children:[o.jsx(G,{...d,titleText:l,style:{...m,display:l?"unset":"none",gridColumnStart:y*12+1,gridRowStart:T,marginBlockStart:T===2?"0.5rem":"1rem"},as:g}),c]})})};X.displayName="FormGroup";try{X.displayName="FormGroup",X.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups and allows setting a title for each group.\n\n__Note:__ Setting a React Ref is not supported by this component.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{X.displayName="FormGroup",X.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups and allows setting a title for each group.\n\n__Note:__ Setting a React Ref is not supported by this component.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Me={packageName:"@ui5/webcomponents-react",fileName:"FormItem.module.css",content:'.FormItem_label_v44iu_1{grid-column-end:span var(--_ui5wcr_form_label_span);justify-self:var(--_ui5wcr_form_label_text_align);text-align:var(--_ui5wcr_form_label_text_align)}.FormItem_label_v44iu_1[data-label-span="12"]{justify-self:start}.FormItem_label_v44iu_1:has(+.FormItem_content_v44iu_10>:is([ui5-checkbox],[ui5-radio-button],[ui5-switch],[ui5-range-slider],[ui5-slider])){align-self:center}.FormItem_content_v44iu_10{display:flex;grid-column-end:span var(--_ui5wcr_form_content_span)}.FormItem_content_v44iu_10[data-label-span="12"]{grid-column-end:span 12;padding-block-end:.75rem}.FormItem_lastGroupItem_v44iu_25{margin-block-end:1rem}'},U={label:"FormItem_label_v44iu_1",content:"FormItem_content_v44iu_10",lastGroupItem:"FormItem_lastGroupItem_v44iu_25"};function Le({label:e,style:l,className:c,rowIndex:g}){const{labelSpan:m}=ae();if(typeof e=="string")return o.jsx(Te,{className:q(U.label,c),style:l,wrappingType:pe.Normal,"data-label-span":m,showColon:!!e,"data-row-index-label":g,children:e});if(a.isValidElement(e)){const{showColon:d,wrappingType:v,style:s,children:h}=e.props;return a.cloneElement(e,{showColon:d??!0,wrappingType:v??pe.Normal,className:q(U.label,c,e.props.className),style:{...l,...s||{}},"data-label-span":m,"data-row-index-label":g},h??"")}return null}const ze=e=>{var l;return typeof e=="string"?e:a.isValidElement(e)&&typeof((l=e.props)==null?void 0:l.children)=="string"?e.props.children:""},D=e=>{const l=ce(),{label:c,children:g}=e,{formItems:m,registerItem:d,unregisterItem:v,labelSpan:s,rowsWithGroup:h,recalcTrigger:E}=ae(),I=Ve();ee(Me,D.displayName),a.useEffect(()=>(d==null||d(l,"formItem",I.id),()=>{v==null||v(l,I.id)}),[l,d,v,I.id,E]);const f=a.useMemo(()=>m==null?void 0:m.find(({id:i})=>l===i),[m,l]);if(m&&!f)return null;const{columnIndex:N,rowIndex:y,lastGroupItem:b}=f,T=(N??0)*12+1,j=N!=null?s===12?T:T+(s??0):void 0,C=!f.groupId&&h[y]?y+1:y??0,H=C??0,V=s===12?C-1:C??void 0;return o.jsxs(o.Fragment,{children:[o.jsx(Le,{label:c,style:{gridColumnStart:T,gridRowStart:V},rowIndex:V,className:q(s!==12&&b&&U.lastGroupItem)}),o.jsx("div",{"data-id":l,className:q(U.content,b&&U.lastGroupItem),style:{gridColumnStart:j,gridRowStart:y!=null?H:void 0},"data-label-span":s,"data-row-index":H,children:Ne(g).map((i,$)=>{var M;if(a.isValidElement(i)&&i.type&&i.type.$$typeof!==Symbol.for("react.portal")){const L=ze(c),A=(M=i==null?void 0:i.props)==null?void 0:M.id;return o.jsxs(a.Fragment,{children:[a.cloneElement(i,{id:A??`${l}-${$}`}),o.jsx("label",{htmlFor:A??`${l}-${$}`,style:{display:"none"},"aria-hidden":!0,children:L})]},`${L}-${l}-${$}`)}})})]})};D.displayName="FormItem";try{D.displayName="FormItem",D.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:`Content of the FormItem.

__Note:__ Text, numbers and React portals are ignored.`,name:"children",required:!0,type:{name:"FormItemContent"}}}}}catch{}try{D.displayName="FormItem",D.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:`Content of the FormItem.

__Note:__ Text, numbers and React portals are ignored.`,name:"children",required:!0,type:{name:"FormItemContent"}}}}}catch{}export{X as F,D as a,R as b,de as c};
