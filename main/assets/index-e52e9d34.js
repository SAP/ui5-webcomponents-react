import{j as r}from"./jsx-runtime-5926aa06.js";import{c as X}from"./clsx.m-1229b3e0.js";import{r as a}from"./index-ebeaab24.js";import{c as I}from"./react-jss.esm-022ab528.js";import{T}from"./ThemingParameters-7e2e4e30.js";import{u as oe}from"./withWebComponent-884f99a7.js";import{g as W}from"./Media-6b270b80.js";import{T as se}from"./index-6503765a.js";import{T as ue}from"./Title-a5ea80a2.js";import{b as U}from"./CssSizeVariables-02fb2fd8.js";import{f as ie}from"./utils-69f7a0e0.js";import{L as me}from"./index-69d14591.js";import{W as O}from"./WrappingType-b81e595a.js";import{u as ce}from"./useIsomorphicId-4be7c5e3.js";var J=(e=>(e.Solid="Solid",e.Transparent="Transparent",e))(J||{});const pe=I({title:{gridColumn:"1 / span 12",display:"flex",alignItems:"center",height:U.sapWcrFormGroupTitleHeight,lineHeight:U.sapWcrFormGroupTitleHeight,fontFamily:T.sapFontHeaderFamily,color:T.sapGroup_TitleTextColor,fontSize:T.sapFontHeader6Size,fontWeight:"bold",margin:0,marginBlockStart:"1rem"}},{name:"FormGroupTitle"});function E({titleText:e,style:t}){const n=pe();return r.jsx("h6",{className:n.title,title:e,"aria-label":e,"data-component-name":"FormGroupTitle",style:t,children:e})}try{E.displayName="FormGroupTitle",E.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{titleText:{defaultValue:null,description:"",name:"titleText",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const de={formContainer:{containerType:"inline-size"},form:{display:"grid",alignItems:"center",rowGap:"0.25rem",columnGap:"0.5rem","--ui5wcr_form_label_text_align":"end","@container (max-width: 599px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_s)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_s)",gridTemplateColumns:"repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)","--ui5wcr_form_content_span":"calc(12 - var(--ui5wcr_form_label_span))"},"@container (min-width: 600px) and (max-width: 1023px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_m)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_m)",gridTemplateColumns:"repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)","--ui5wcr_form_content_span":"calc(12 - var(--ui5wcr_form_label_span))"},"@container (min-width: 1024px) and (max-width: 1439px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_l)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_l)",gridTemplateColumns:"repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)","--ui5wcr_form_content_span":"calc(12 - var(--ui5wcr_form_label_span))"},"@container (min-width: 1440px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_xl)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_xl)",gridTemplateColumns:"repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)","--ui5wcr_form_content_span":"calc(12 - var(--ui5wcr_form_label_span))"}},solid:{backgroundColor:T.sapGroup_ContentBackground},transparent:{backgroundColor:"transparent"},formTitle:{borderBlockEnd:`1px solid ${T.sapGroup_TitleBorderColor}`,marginBlockEnd:"1.75rem",gridColumn:"1 / -1"},labelSpan12:{"--ui5wcr_form_content_span":12,"--ui5wcr_form_label_text_align":"start","--ui5wcr_form_label_span":12,rowGap:0}},K=a.createContext({labelSpan:null});function Q(){return a.useContext(K)}const fe=I(de,{name:"Form"}),q=a.forwardRef((e,t)=>{var H;const{as:n="form",backgroundDesign:u=J.Transparent,children:o,columnsS:c=1,columnsM:v=1,columnsL:i=1,columnsXL:p=2,className:k,labelSpanS:C=12,labelSpanM:w=2,labelSpanL:s=4,labelSpanXL:b=4,titleText:S,...N}=e,d=new Map;d.set("Phone",c),d.set("Tablet",v),d.set("Desktop",i),d.set("LargeDesktop",p);const x=new Map;x.set("Phone",C),x.set("Tablet",w),x.set("Desktop",s),x.set("LargeDesktop",b);const[Z,L]=oe(t),[$,ee]=a.useState(((H=W())==null?void 0:H.name)??"Desktop"),j=a.useRef($);a.useEffect(()=>{const h=new ResizeObserver(([A])=>{const _=W(A.contentRect.width);_&&j.current!==_.name&&(j.current=_.name,ee(_.name))});return L.current&&h.observe(L.current),()=>{h.disconnect()}},[L]);const R=fe(),M=d.get($),ae=x.get($),re=a.useMemo(()=>{if(M===1)return o;const h=[],_=a.Children.toArray(o).reduce((m,F,f)=>{const l=Math.floor(f/M);return m[l]??(m[l]=[]),m[l].push(F),m},[]),B=[];_.forEach((m,F)=>{B[F]=Math.max(...m.map(f=>f.type.displayName==="FormItem"?1:a.Children.count(f.props.children)+1))});let g=2;return _.forEach((m,F)=>{const f=B.at(F);m.forEach((l,V)=>{var P;const le={gridColumnStart:V*12+1,gridRowStart:g};(P=l==null?void 0:l.props)!=null&&P.titleText&&h.push(r.jsx(E,{titleText:l.props.titleText,style:le},`title-col-${V}-row-${g}`));for(let y=0;y<f;y++){let G;l.type.displayName==="FormGroup"?G=a.Children.toArray(l.props.children).at(y):l.type.displayName==="FormItem"&&y===0&&(G=l),G&&h.push(a.cloneElement(G,{key:`col-${V}-row-${g+y}`,columnIndex:V,rowIndex:g+y+1}))}}),g+=f,f===1&&(g+=1)}),h},[o,M]),te=X(R.form,R[u.toLowerCase()]),ne=n;return r.jsx(K.Provider,{value:{labelSpan:ae},children:r.jsx(ne,{className:X(R.formContainer,k),suppressHydrationWarning:!0,ref:Z,...N,children:r.jsxs("div",{className:te,style:{"--ui5wcr_form_label_span_s":C,"--ui5wcr_form_label_span_m":w,"--ui5wcr_form_label_span_l":s,"--ui5wcr_form_label_span_xl":b,"--ui5wcr_form_columns_s":c,"--ui5wcr_form_columns_m":v,"--ui5wcr_form_columns_l":i,"--ui5wcr_form_columns_xl":p},children:[S&&r.jsx(se,{level:ue.H3,className:R.formTitle,children:S}),re]})})})});q.displayName="Form";try{q.displayName="Form",q.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
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

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e=I({spacer:{height:"1rem",gridColumn:"span 12"}},{name:"FormGroup"}),z=e=>{const{titleText:t,children:n}=e,u=_e();return r.jsxs(r.Fragment,{children:[r.jsx(E,{titleText:t}),n,r.jsx("span",{className:u.spacer})]})};z.displayName="FormGroup";try{z.displayName="FormGroup",z.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups.\n\n__Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const ve=new Set(["CheckBox","RadioButton","Switch","RangeSlider","Slider"]),Y=I({label:{gridColumnEnd:"span var(--ui5wcr_form_label_span)",justifySelf:"var(--ui5wcr_form_label_text_align)",textAlign:"var(--ui5wcr_form_label_text_align)",'&[data-label-span="12"]':{justifySelf:"start",paddingBlockEnd:"0.25rem"},'&:has(+ $content + [data-component-name="FormGroupTitle"])':{paddingBlockEnd:"1rem"},"&:has(+ $content > [ui5-checkbox])":{alignSelf:"center"},"&:has(+ $content > [ui5-radio-button])":{alignSelf:"center"},"&:has(+ $content > [ui5-switch])":{alignSelf:"center"},"&:has(+ $content > [ui5-range-slider])":{alignSelf:"center"},"&:has(+ $content > [ui5-slider])":{alignSelf:"center"}},content:{display:"flex",gridColumnEnd:"span var(--ui5wcr_form_content_span)",'&[data-label-span="12"]':{gridColumnEnd:"span 12",paddingBlockEnd:"0.625rem"},'&:has(+ [data-component-name="FormGroupTitle"])':{paddingBlockEnd:"1rem"}}},{name:"FormItem"});function be({label:e,style:t}){const n=Y(),{labelSpan:u}=Q();if(typeof e=="string")return r.jsx(me,{className:n.label,style:t,wrappingType:O.Normal,"data-label-span":u,children:e?`${e}:`:""});if(a.isValidElement(e)){const{showColon:o,wrappingType:c,className:v,style:i,children:p}=e.props;return a.cloneElement(e,{showColon:o??!0,wrappingType:c??O.Normal,className:`${n.label} ${v??""}`,style:{...t,...i||{}},"data-label-span":u},p??"")}return null}const he=e=>{var t;return typeof e=="string"?e:a.isValidElement(e)&&typeof((t=e.props)==null?void 0:t.children)=="string"?e.props.children:""},D=e=>{var w;const{label:t,children:n,columnIndex:u,rowIndex:o}=e,c=ce(),v=Y(),{labelSpan:i}=Q(),p=(u??0)*12+1,k=u!=null?i===12?p:p+(i??0):void 0,C=i===12?(o??0)+1:o??0;return r.jsxs(r.Fragment,{children:[r.jsx(be,{label:t,style:{gridColumnStart:p,gridRowStart:o??void 0,alignSelf:ve.has((w=n==null?void 0:n.type)==null?void 0:w.displayName)?"center":void 0}}),r.jsx("div",{className:v.content,style:{gridColumnStart:k,gridRowStart:o!=null?C:void 0},"data-label-span":i,children:ie(n).map((s,b)=>{var S;if(a.isValidElement(s)&&s.type&&s.type.$$typeof!==Symbol.for("react.portal")){const N=he(t),d=(S=s==null?void 0:s.props)==null?void 0:S.id;return r.jsxs(a.Fragment,{children:[a.cloneElement(s,{id:d??`${c}-${b}`}),r.jsx("label",{htmlFor:d??`${c}-${b}`,style:{display:"none"},"aria-hidden":!0,children:N})]},`${N}-${c}-${b}`)}})})]})};D.displayName="FormItem";try{D.displayName="FormItem",D.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Content of the FormItem. Can be an arbitrary React Node.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}export{z as F,D as a,q as b,J as c};
//# sourceMappingURL=index-e52e9d34.js.map
