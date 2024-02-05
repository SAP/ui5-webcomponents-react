import{j as b}from"./jsx-runtime-DtaoT6pD.js";import{c as x}from"./clsx-Zbgk8kpT.js";import{r as g}from"./index-OjgoNOWw.js";import{c as S}from"./react-jss.esm-tmBtHfec.js";var l=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.Baseline="Baseline",e.Stretch="Stretch",e))(l||{}),n=(e=>(e.Column="Column",e.ColumnReverse="ColumnReverse",e.Row="Row",e.RowReverse="RowReverse",e))(n||{}),r=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.SpaceAround="SpaceAround",e.SpaceBetween="SpaceBetween",e))(r||{}),u=(e=>(e.NoWrap="NoWrap",e.Wrap="Wrap",e.WrapReverse="WrapReverse",e))(u||{});const R={flexBox:{display:"flex","&:where($fitContainer)":{width:"100%",height:"100%"},"&:where($justifyContentStart)":{justifyContent:"flex-start"},"&:where($justifyContentEnd)":{justifyContent:"flex-end"},"&:where($justifyContentCenter)":{justifyContent:"center"},"&:where($justifyContentSpaceAround)":{justifyContent:"space-around"},"&:where($justifyContentSpaceBetween)":{justifyContent:"space-between"},"&:where($alignItemsStart)":{alignItems:"flex-start"},"&:where($alignItemsEnd)":{alignItems:"flex-end"},"&:where($alignItemsCenter)":{alignItems:"center"},"&:where($alignItemsStretch)":{alignItems:"stretch"},"&:where($alignItemsBaseline)":{alignItems:"baseline"}},flexBoxDisplayInline:{display:"inline-flex"},fitContainer:{},justifyContentStart:{},justifyContentEnd:{},justifyContentCenter:{},justifyContentSpaceAround:{},justifyContentSpaceBetween:{},alignItemsStart:{},alignItemsEnd:{},alignItemsCenter:{},alignItemsStretch:{},alignItemsBaseline:{},flexBoxDirectionColumn:{flexDirection:"column"},flexBoxDirectionColumnReverse:{flexDirection:"column-reverse"},flexBoxDirectionRow:{flexDirection:"row"},flexBoxDirectionRowReverse:{flexDirection:"row-reverse"},flexWrapNoWrap:{flexWrap:"nowrap"},flexWrapWrap:{flexWrap:"wrap"},flexWrapWrapReverse:{flexWrap:"wrap-reverse"}},j=S(R,{name:"FlexBox"}),t=g.forwardRef((e,o)=>{const{children:s,justifyContent:i=r.Start,direction:v=n.Row,alignItems:p=l.Stretch,displayInline:d,wrap:c=u.NoWrap,className:m,fitContainer:f,as:h="div",...y}=e,a=j(),C=x(a.flexBox,a[`flexBoxDirection${v}`],a[`justifyContent${i}`],a[`alignItems${p}`],a[`flexWrap${c}`],d&&a.flexBoxDisplayInline,f&&a.fitContainer,m),w=h;return b.jsx(w,{ref:o,className:C,...y,children:s})});t.displayName="FlexBox";try{t.displayName="FlexBox",t.__docgenInfo={description:"The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.",displayName:"FlexBox",props:{alignItems:{defaultValue:null,description:"Controls the alignment of items on the Cross Axis.<br />\n<b>Note:</b> Corresponds to `align-items`.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'}]}},direction:{defaultValue:null,description:"Controls how the items are placed in the `FlexBox`.<br />\n<b>Note:</b> Corresponds to `flex-direction`.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'},{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'}]}},displayInline:{defaultValue:null,description:"Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.",name:"displayInline",required:!1,type:{name:"boolean"}},fitContainer:{defaultValue:null,description:"Determines whether the `FlexBox` will be sized to completely fill its container.\n\n__Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)",name:"fitContainer",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around items along the main-axis.<br />\n<b>Note:</b> Corresponds to `justify-content`.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'}]}},wrap:{defaultValue:null,description:"Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />\n<b>Note:</b> Corresponds to `flex-wrap`.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'},{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'}]}},children:{defaultValue:null,description:"Content of the `FlexBox`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"input"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{t as F,n as a,r as b,l as c,u as d};
