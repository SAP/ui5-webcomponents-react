import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{c as F}from"./clsx-Zbgk8kpT.js";import{r as a}from"./index-OjgoNOWw.js";import{c as ue}from"./react-jss.esm-fzYOEaou.js";import{T as te}from"./ThemingParameters-UghqSl-x.js";import{u as be}from"./withWebComponent-LTFbYRvs.js";import{g as re}from"./Media-HHIdDivs.js";import{T as ge}from"./index-DS8Tk-pf.js";import{T as ye}from"./Title-yLgJni0m.js";import{u as we}from"./useStylesheet-MWHnOiB7.js";import{u as oe}from"./useIsomorphicId-G0VPUEKO.js";import{f as xe}from"./utils-d3BcYjeO.js";import{L as Se}from"./index-mG3laKte.js";import{W as ne}from"./WrappingType-avPrqc94.js";var se=(e=>(e.Solid="Solid",e.Transparent="Transparent",e))(se||{});const Ce={formContainer:{containerType:"inline-size"},form:{display:"grid",alignItems:"center",rowGap:"0.25rem",columnGap:"0.5rem","--_ui5wcr_form_label_text_align":"end","@container (max-width: 599px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_s)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_s)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_m)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_m)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_l)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_l)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 1440px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_xl)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_xl)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"}},solid:{backgroundColor:te.sapGroup_ContentBackground},transparent:{backgroundColor:"transparent"},formTitle:{borderBlockEnd:`1px solid ${te.sapGroup_TitleBorderColor}`,marginBlockEnd:"1.75rem",gridColumn:"1 / -1"},labelSpan12:{"--_ui5wcr_form_content_span":12,"--_ui5wcr_form_label_text_align":"start","--_ui5wcr_form_label_span":12,rowGap:0}},ie=a.createContext({labelSpan:null,recalcTrigger:0});function J(){return a.useContext(ie)}const me=a.createContext({});function Fe(){return a.useContext(me)}const Ie=e=>e+1,Te=ue(Ce,{name:"Form"}),A=a.forwardRef((e,l)=>{var Z;const{as:d="form",backgroundDesign:v=se.Transparent,children:i,columnsS:f=1,columnsM:m=1,columnsL:u=1,columnsXL:g=2,className:V,labelSpanS:x=12,labelSpanM:_=2,labelSpanL:y=4,labelSpanXL:C=4,titleText:b,style:I,...q}=e,[M,T]=a.useState(()=>new Map),N=Te(),S=new Map;S.set("Phone",f),S.set("Tablet",m),S.set("Desktop",u),S.set("LargeDesktop",g);const o=new Map;o.set("Phone",x),o.set("Tablet",_),o.set("Desktop",y),o.set("LargeDesktop",C);const[E,G]=be(l),[k,z]=a.useState(((Z=re())==null?void 0:Z.name)??"Desktop"),K=a.useRef(k);a.useEffect(()=>{const t=new ResizeObserver(([c])=>{if(c.contentRect.width){const r=re(c.contentRect.width);r&&K.current!==r.name&&(K.current=r.name,z(r.name))}});return G.current&&t.observe(G.current),()=>{t.disconnect()}},[G]);const H=o.get(k),P=S.get(k),Q=a.useCallback((t,c,s)=>{T(r=>{const p=new Map(r);if(s){const h=p.get(s);h?h.formItemIds=new Set(h.formItemIds).add(t):p.set(s,{type:"formGroup",formItemIds:new Set([t])})}else p.has(t)||p.set(t,{type:c,formItemIds:new Set});return p})},[]),Y=a.useCallback((t,c)=>{T(s=>{const r=new Map(s);if(c){const p=r.get(c);p&&p.formItemIds.delete(t)}else r.delete(t);return r})},[]),w=a.useMemo(()=>{const t=[],c=[];let s=-1,r=0;const p=H===12?2:1;let h=(b?2:1)+p-1,R=h;const ee={};return M.forEach(({type:_e,formItemIds:ae},B)=>{const U=r%P;if(s++,_e==="formGroup"){ee[h]=!0,c.push({id:B,index:s,columnIndex:U,rowIndex:h});let $=1,X=1;ae.size||R++,ae.forEach((he,qe,le)=>{t.push({id:he,index:s,groupId:B,columnIndex:U,rowIndex:h+$,lastGroupItem:le.size===X}),le.size===X&&R<h+$+p&&(R=h+$+p),$+=p,X++})}else R<h+1&&(R+=p),t.push({id:B,index:s,columnIndex:U,rowIndex:h});(r+1)%P===0&&(h=R),r++}),{formItems:t,formGroups:c,registerItem:Q,unregisterItem:Y,rowsWithGroup:ee}},[M,Q,Y,P,b,H]),pe=F(N.form,N[v.toLowerCase()]),de=d,j=a.useRef(void 0),D=a.useRef(void 0),[ve,fe]=a.useReducer(Ie,0,void 0);return a.useEffect(()=>{if(j.current||D.current){let t=w.formItems.length!==j.current.length||w.formGroups.length!==D.current.length;t||(t=!w.formGroups.every((c,s)=>D.current.findIndex(r=>r.id===c.id)===s)),t||(t=!w.formItems.every((c,s)=>j.current.findIndex(r=>r.id===c.id)===s)),t&&fe()}j.current=w.formItems,D.current=w.formGroups},[w.formItems,w.formGroups]),n.jsx(ie.Provider,{value:{...w,labelSpan:H,recalcTrigger:ve},children:n.jsx(de,{className:F(N.formContainer,V),suppressHydrationWarning:!0,ref:E,style:{...I,"--_ui5wcr_form_label_span_s":x,"--_ui5wcr_form_label_span_m":_,"--_ui5wcr_form_label_span_l":y,"--_ui5wcr_form_label_span_xl":C,"--_ui5wcr_form_columns_s":f,"--_ui5wcr_form_columns_m":m,"--_ui5wcr_form_columns_l":u,"--_ui5wcr_form_columns_xl":g},...q,children:n.jsxs("div",{className:pe,children:[b&&n.jsx(ge,{level:ye.H3,className:N.formTitle,style:{gridColumn:"1 / -1"},children:b}),i]})})})});A.displayName="Form";try{A.displayName="Form",A.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.\n\n__Note:__ The `Form` calculates its width based on the available space of its container. If the container also dynamically adjusts its width to its contents, you must ensure that you specify a fixed width, either for the container or for the `Form` itself. (e.g. when used inside a 'popover').",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
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

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ne={packageName:"@ui5/webcomponents-react",fileName:"FormGroupTitle.module.css",content:".FormGroupTitle_title_1pqdf_1{color:var(--sapGroup_TitleTextColor);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);font-weight:unset;grid-column:1/span 12;height:var(--_ui5wcr-FormGroupTitleHeight);line-height:var(--_ui5wcr-FormGroupTitleHeight);margin:0;margin-block-end:unset;margin-block-start:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"},Ge={title:"FormGroupTitle_title_1pqdf_1"};function L({as:e,className:l,titleText:d,style:v,...i}){we(Ne,L.displayName);const f=e;return n.jsx(f,{...i,className:F(Ge.title,l),title:d,"aria-label":d,"data-component-name":"FormGroupTitle",style:v,children:d})}L.displayName="FormGroupTitle";try{L.displayName="FormGroupTitle",L.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}}}catch{}const W=e=>{const{titleText:l,children:d,as:v="h5",style:i,...f}=e,{formGroups:m,registerItem:u,unregisterItem:g,labelSpan:V,recalcTrigger:x}=J(),_=oe();a.useEffect(()=>(u==null||u(_,"formGroup"),()=>g==null?void 0:g(_)),[_,u,g,x]);const y=a.useMemo(()=>m==null?void 0:m.find(({id:I})=>_===I),[m,_]);if(!y)return null;const{columnIndex:C,rowIndex:b}=y;return n.jsx(me.Provider,{value:{id:_},children:n.jsxs(n.Fragment,{children:[n.jsx(L,{...f,titleText:l,style:{...i,display:l?"unset":"none",gridColumnStart:C*12+1,gridRowStart:V===12?b-1:b},as:v}),d]})})};W.displayName="FormGroup";try{W.displayName="FormGroup",W.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups and allows setting a title for each group.\n\n__Note:__ Setting a React Ref is not supported by this component.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:{value:'"h5"'},description:"Sets the components outer HTML tag.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const ke=new Set(["CheckBox","RadioButton","Switch","RangeSlider","Slider"]),ce=ue({label:{gridColumnEnd:"span var(--_ui5wcr_form_label_span)",justifySelf:"var(--_ui5wcr_form_label_text_align)",textAlign:"var(--_ui5wcr_form_label_text_align)",'&[data-label-span="12"]':{justifySelf:"start",paddingBlockEnd:"0.25rem"},"&:has(+ $content > [ui5-checkbox])":{alignSelf:"center"},"&:has(+ $content > [ui5-radio-button])":{alignSelf:"center"},"&:has(+ $content > [ui5-switch])":{alignSelf:"center"},"&:has(+ $content > [ui5-range-slider])":{alignSelf:"center"},"&:has(+ $content > [ui5-slider])":{alignSelf:"center"}},content:{display:"flex",gridColumnEnd:"span var(--_ui5wcr_form_content_span)",'&[data-label-span="12"]':{gridColumnEnd:"span 12",paddingBlockEnd:"0.625rem"}},lastGroupItem:{marginBlockEnd:"1rem"}},{name:"FormItem"});function Re({label:e,style:l,className:d}){const v=ce(),{labelSpan:i}=J();if(typeof e=="string")return n.jsx(Se,{className:F(v.label,d),style:l,wrappingType:ne.Normal,"data-label-span":i,showColon:!!e,children:e});if(a.isValidElement(e)){const{showColon:f,wrappingType:m,style:u,children:g}=e.props;return a.cloneElement(e,{showColon:f??!0,wrappingType:m??ne.Normal,className:F(v.label,d,e.props.className),style:{...l,...u||{}},"data-label-span":i},g??"")}return null}const Ve=e=>{var l;return typeof e=="string"?e:a.isValidElement(e)&&typeof((l=e.props)==null?void 0:l.children)=="string"?e.props.children:""},O=e=>{var S;const l=oe(),{label:d,children:v}=e,{formItems:i,registerItem:f,unregisterItem:m,labelSpan:u,rowsWithGroup:g,recalcTrigger:V}=J(),x=Fe(),_=ce();a.useEffect(()=>(f==null||f(l,"formItem",x.id),()=>{m==null||m(l,x.id)}),[l,f,m,x.id,V]);const y=a.useMemo(()=>i==null?void 0:i.find(({id:o})=>l===o),[i,l]);if(i&&!y)return null;const{columnIndex:C,rowIndex:b,lastGroupItem:I}=y,q=(C??0)*12+1,M=C!=null?u===12?q:q+(u??0):void 0,T=(()=>!y.groupId&&g[b]?b+1:b??0)(),N=T??0;return n.jsxs(n.Fragment,{children:[n.jsx(Re,{label:d,style:{gridColumnStart:q,gridRowStart:u===12?T-1:T??void 0,alignSelf:ke.has((S=v==null?void 0:v.type)==null?void 0:S.displayName)?"center":void 0},className:F(u!==12&&I&&_.lastGroupItem)}),n.jsx("div",{"data-id":l,className:F(_.content,I&&_.lastGroupItem),style:{gridColumnStart:M,gridRowStart:b!=null?N:void 0},"data-label-span":u,children:xe(v).map((o,E)=>{var G;if(a.isValidElement(o)&&o.type&&o.type.$$typeof!==Symbol.for("react.portal")){const k=Ve(d),z=(G=o==null?void 0:o.props)==null?void 0:G.id;return n.jsxs(a.Fragment,{children:[a.cloneElement(o,{id:z??`${l}-${E}`}),n.jsx("label",{htmlFor:z??`${l}-${E}`,style:{display:"none"},"aria-hidden":!0,children:k})]},`${k}-${l}-${E}`)}})})]})};O.displayName="FormItem";try{O.displayName="FormItem",O.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Content of the FormItem. Can be an arbitrary React Node.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}export{W as F,O as a,A as b,se as c};
