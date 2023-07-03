import{j as n}from"./jsx-runtime-5926aa06.js";import{c as E}from"./clsx.m-1229b3e0.js";import{r as a}from"./index-ebeaab24.js";import{c as A}from"./react-jss.esm-022ab528.js";import{T as R}from"./ThemingParameters-7e2e4e30.js";import{u as _e}from"./withWebComponent-d4224c1c.js";import{g as ae}from"./Media-6b270b80.js";import{T as ve}from"./index-319a4cc8.js";import{T as be}from"./Title-c6699a53.js";import{b as te}from"./CssSizeVariables-cd649ef5.js";import{u as ne}from"./useIsomorphicId-4be7c5e3.js";import{f as he}from"./utils-69f7a0e0.js";import{L as ge}from"./index-85bd0d17.js";import{W as re}from"./WrappingType-b81e595a.js";var le=(e=>(e.Solid="Solid",e.Transparent="Transparent",e))(le||{});const ye={formContainer:{containerType:"inline-size"},form:{display:"grid",alignItems:"center",rowGap:"0.25rem",columnGap:"0.5rem","--_ui5wcr_form_label_text_align":"end","@container (max-width: 599px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_s)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_s)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 600px) and (max-width: 1023px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_m)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_m)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 1024px) and (max-width: 1439px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_l)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_l)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"},"@container (min-width: 1440px)":{"--_ui5wcr_form_label_span":"var(--_ui5wcr_form_label_span_xl)","--_ui5wcr_form_columns":"var(--_ui5wcr_form_columns_xl)",gridTemplateColumns:"repeat(calc(12 * var(--_ui5wcr_form_columns)), 1fr)","--_ui5wcr_form_content_span":"calc(12 - var(--_ui5wcr_form_label_span))"}},solid:{backgroundColor:R.sapGroup_ContentBackground},transparent:{backgroundColor:"transparent"},formTitle:{borderBlockEnd:`1px solid ${R.sapGroup_TitleBorderColor}`,marginBlockEnd:"1.75rem",gridColumn:"1 / -1"},labelSpan12:{"--_ui5wcr_form_content_span":12,"--_ui5wcr_form_label_text_align":"start","--_ui5wcr_form_label_span":12,rowGap:0}},oe=a.createContext({labelSpan:null});function U(){return a.useContext(oe)}const se=a.createContext({});function we(){return a.useContext(se)}const xe=A(ye,{name:"Form"}),B=a.forwardRef((e,u)=>{var Q;const{as:d="form",backgroundDesign:t=le.Transparent,children:l,columnsS:i=1,columnsM:f=1,columnsL:r=1,columnsXL:_=2,className:v,labelSpanS:b=12,labelSpanM:w=2,labelSpanL:G=4,labelSpanXL:x=4,titleText:S,style:V,...q}=e,[C,L]=a.useState(()=>new Map),F=xe(),o=new Map;o.set("Phone",i),o.set("Tablet",f),o.set("Desktop",r),o.set("LargeDesktop",_);const h=new Map;h.set("Phone",b),h.set("Tablet",w),h.set("Desktop",G),h.set("LargeDesktop",x);const[M,I]=_e(u),[T,ie]=a.useState(((Q=ae())==null?void 0:Q.name)??"Desktop"),O=a.useRef(T);a.useEffect(()=>{const m=new ResizeObserver(([g])=>{const s=ae(g.contentRect.width);s&&O.current!==s.name&&(O.current=s.name,ie(s.name))});return I.current&&m.observe(I.current),()=>{m.disconnect()}},[I]);const z=h.get(T),D=o.get(T),J=a.useCallback((m,g,s)=>{L(y=>{const c=new Map(y);if(s){const p=c.get(s);p?p.formItemIds=new Set(p.formItemIds).add(m):c.set(s,{type:"formGroup",formItemIds:new Set([m])})}else c.has(m)||c.set(m,{type:g,formItemIds:new Set});return c})},[]),K=a.useCallback((m,g)=>{L(s=>{const y=new Map(s);if(g){const c=y.get(g);c&&c.formItemIds.delete(m)}else y.delete(m);return y})},[]),me=a.useMemo(()=>{const m=[],g=[];let s=-1,y=0;const c=z===12?2:1;let p=(S?2:1)+c-1,N=p;const Y={};return C.forEach(({type:de,formItemIds:Z},j)=>{const $=y%D;if(s++,de==="formGroup"){Y[p]=!0,g.push({id:j,index:s,columnIndex:$,rowIndex:p});let k=1,H=1;Z.size||N++,Z.forEach((fe,Te,ee)=>{m.push({id:fe,index:s,groupId:j,columnIndex:$,rowIndex:p+k,lastGroupItem:ee.size===H}),ee.size===H&&N<p+k+c&&(N=p+k+c),k+=c,H++})}else N<p+1&&(N+=c),m.push({id:j,index:s,columnIndex:$,rowIndex:p});(y+1)%D===0&&(p=N),y++}),{formItems:m,formGroups:g,registerItem:J,unregisterItem:K,rowsWithGroup:Y}},[C,J,K,D,S,z]),ce=E(F.form,F[t.toLowerCase()]),pe=d;return n.jsx(oe.Provider,{value:{...me,labelSpan:z},children:n.jsx(pe,{className:E(F.formContainer,v),suppressHydrationWarning:!0,ref:M,style:{...V,"--_ui5wcr_form_label_span_s":b,"--_ui5wcr_form_label_span_m":w,"--_ui5wcr_form_label_span_l":G,"--_ui5wcr_form_label_span_xl":x,"--_ui5wcr_form_columns_s":i,"--_ui5wcr_form_columns_m":f,"--_ui5wcr_form_columns_l":r,"--_ui5wcr_form_columns_xl":_},...q,children:n.jsxs("div",{className:ce,children:[S&&n.jsx(ve,{level:be.H3,className:F.formTitle,style:{gridColumn:"1 / -1"},children:S}),l]})})})});B.displayName="Form";try{B.displayName="Form",B.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.\n\n__Note:__ The `Form` calculates its width based on the available space of its container. If the container also dynamically adjusts its width to its contents, you must ensure that you specify a fixed width, either for the container or for the `Form` itself. (e.g. when used inside a 'popover').",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
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

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Se=A({title:{gridColumn:"1 / span 12",display:"flex",alignItems:"center",height:te.ui5WcrFormGroupTitleHeight,lineHeight:te.ui5WcrFormGroupTitleHeight,fontFamily:R.sapFontHeaderFamily,color:R.sapGroup_TitleTextColor,fontSize:R.sapFontHeader6Size,fontWeight:"bold",margin:0,marginBlockStart:"1rem"}},{name:"FormGroupTitle"});function P({titleText:e,style:u}){const d=Se();return n.jsx("h6",{className:d.title,title:e,"aria-label":e,"data-component-name":"FormGroupTitle",style:u,children:e})}try{P.displayName="FormGroupTitle",P.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{titleText:{defaultValue:null,description:"",name:"titleText",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const W=e=>{const{titleText:u,children:d}=e,{formGroups:t,registerItem:l,unregisterItem:i,labelSpan:f}=U(),r=ne();a.useEffect(()=>(l==null||l(r,"formGroup"),()=>i==null?void 0:i(r)),[r,l,i]);const _=a.useMemo(()=>t==null?void 0:t.find(({id:w})=>r===w),[t]);if(!_)return null;const{columnIndex:v,rowIndex:b}=_;return n.jsx(se.Provider,{value:{id:r},children:n.jsxs(n.Fragment,{children:[n.jsx(P,{titleText:u,style:{gridColumnStart:v*12+1,gridRowStart:f===12?b-1:b}}),d]})})};W.displayName="FormGroup";try{W.displayName="FormGroup",W.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups.\n\n__Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const Fe=new Set(["CheckBox","RadioButton","Switch","RangeSlider","Slider"]),ue=A({label:{gridColumnEnd:"span var(--_ui5wcr_form_label_span)",justifySelf:"var(--_ui5wcr_form_label_text_align)",textAlign:"var(--_ui5wcr_form_label_text_align)",'&[data-label-span="12"]':{justifySelf:"start",paddingBlockEnd:"0.25rem"},"&:has(+ $content > [ui5-checkbox])":{alignSelf:"center"},"&:has(+ $content > [ui5-radio-button])":{alignSelf:"center"},"&:has(+ $content > [ui5-switch])":{alignSelf:"center"},"&:has(+ $content > [ui5-range-slider])":{alignSelf:"center"},"&:has(+ $content > [ui5-slider])":{alignSelf:"center"}},content:{display:"flex",gridColumnEnd:"span var(--_ui5wcr_form_content_span)",'&[data-label-span="12"]':{gridColumnEnd:"span 12",paddingBlockEnd:"0.625rem"}},lastGroupItem:{marginBlockEnd:"1rem"}},{name:"FormItem"});function Ce({label:e,style:u,className:d}){const t=ue(),{labelSpan:l}=U();if(typeof e=="string")return n.jsx(ge,{className:E(t.label,d),style:u,wrappingType:re.Normal,"data-label-span":l,children:e?`${e}:`:""});if(a.isValidElement(e)){const{showColon:i,wrappingType:f,className:r,style:_,children:v}=e.props;return a.cloneElement(e,{showColon:i??!0,wrappingType:f??re.Normal,className:`${t.label} ${r??""}`,style:{...u,..._||{}},"data-label-span":l},v??"")}return null}const Ie=e=>{var u;return typeof e=="string"?e:a.isValidElement(e)&&typeof((u=e.props)==null?void 0:u.children)=="string"?e.props.children:""},X=e=>{var F;const{label:u,children:d}=e,t=ne(),{formItems:l,registerItem:i,unregisterItem:f,labelSpan:r,rowsWithGroup:_}=U(),v=we(),b=ue();a.useEffect(()=>(i==null||i(t,"formItem",v.id),()=>{f==null||f(t,v.id)}),[t,i,f,v.id]);const w=a.useMemo(()=>l==null?void 0:l.find(({id:o})=>t===o),[l,t]);if(l&&!w)return null;const{columnIndex:G,rowIndex:x,lastGroupItem:S}=w,V=(G??0)*12+1,q=G!=null?r===12?V:V+(r??0):void 0,C=(()=>!w.groupId&&_[x]?x+1:x??0)(),L=C??0;return n.jsxs(n.Fragment,{children:[n.jsx(Ce,{label:u,style:{gridColumnStart:V,gridRowStart:r===12?C-1:C??void 0,alignSelf:Fe.has((F=d==null?void 0:d.type)==null?void 0:F.displayName)?"center":void 0},className:E(r!==12&&S&&b.lastGroupItem)}),n.jsx("div",{"data-id":t,className:E(b.content,S&&b.lastGroupItem),style:{gridColumnStart:q,gridRowStart:x!=null?L:void 0},"data-label-span":r,children:he(d).map((o,h)=>{var M;if(a.isValidElement(o)&&o.type&&o.type.$$typeof!==Symbol.for("react.portal")){const I=Ie(u),T=(M=o==null?void 0:o.props)==null?void 0:M.id;return n.jsxs(a.Fragment,{children:[a.cloneElement(o,{id:T??`${t}-${h}`}),n.jsx("label",{htmlFor:T??`${t}-${h}`,style:{display:"none"},"aria-hidden":!0,children:I})]},`${I}-${t}-${h}`)}})})]})};X.displayName="FormItem";try{X.displayName="FormItem",X.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Content of the FormItem. Can be an arbitrary React Node.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}export{W as F,X as a,B as b,le as c};
//# sourceMappingURL=index-b9efdd06.js.map
