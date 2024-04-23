import{j as y}from"./ManagedStyles-DBz9b8_7.js";import{c as B}from"./clsx-B-dksMZM.js";import{r as b}from"./index-Cu9bd8lq.js";import{u as w}from"./useStylesheet-Emr_nFue.js";var t=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.Baseline="Baseline",e.Stretch="Stretch",e))(t||{}),n=(e=>(e.Column="Column",e.ColumnReverse="ColumnReverse",e.Row="Row",e.RowReverse="RowReverse",e))(n||{}),u=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.SpaceAround="SpaceAround",e.SpaceBetween="SpaceBetween",e))(u||{}),o=(e=>(e.NoWrap="NoWrap",e.Wrap="Wrap",e.WrapReverse="WrapReverse",e))(o||{});const C={packageName:"@ui5/webcomponents-react",fileName:"FlexBox.module.css",content:".FlexBox_flexBox_11fgm_1{display:flex}.FlexBox_flexBox_11fgm_1:where(.FlexBox_fitContainer_11fgm_4){height:100%;width:100%}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentStart_11fgm_11){justify-content:flex-start}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentEnd_11fgm_15){justify-content:flex-end}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentCenter_11fgm_19){justify-content:center}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentSpaceAround_11fgm_23){justify-content:space-around}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentSpaceBetween_11fgm_27){justify-content:space-between}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsStart_11fgm_33){align-items:flex-start}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsEnd_11fgm_37){align-items:flex-end}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsCenter_11fgm_41){align-items:center}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsStretch_11fgm_45){align-items:stretch}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsBaseline_11fgm_49){align-items:baseline}.FlexBox_flexBoxDisplayInline_11fgm_54{display:inline-flex}.FlexBox_flexBoxDirectionColumn_11fgm_58{flex-direction:column}.FlexBox_flexBoxDirectionColumnReverse_11fgm_62{flex-direction:column-reverse}.FlexBox_flexBoxDirectionRow_11fgm_66{flex-direction:row}.FlexBox_flexBoxDirectionRowReverse_11fgm_70{flex-direction:row-reverse}.FlexBox_flexWrapNoWrap_11fgm_74{flex-wrap:nowrap}.FlexBox_flexWrapWrap_11fgm_78{flex-wrap:wrap}.FlexBox_flexWrapWrapReverse_11fgm_82{flex-wrap:wrap-reverse}"},a={flexBox:"FlexBox_flexBox_11fgm_1",fitContainer:"FlexBox_fitContainer_11fgm_4",justifyContentStart:"FlexBox_justifyContentStart_11fgm_11",justifyContentEnd:"FlexBox_justifyContentEnd_11fgm_15",justifyContentCenter:"FlexBox_justifyContentCenter_11fgm_19",justifyContentSpaceAround:"FlexBox_justifyContentSpaceAround_11fgm_23",justifyContentSpaceBetween:"FlexBox_justifyContentSpaceBetween_11fgm_27",alignItemsStart:"FlexBox_alignItemsStart_11fgm_33",alignItemsEnd:"FlexBox_alignItemsEnd_11fgm_37",alignItemsCenter:"FlexBox_alignItemsCenter_11fgm_41",alignItemsStretch:"FlexBox_alignItemsStretch_11fgm_45",alignItemsBaseline:"FlexBox_alignItemsBaseline_11fgm_49",flexBoxDisplayInline:"FlexBox_flexBoxDisplayInline_11fgm_54",flexBoxDirectionColumn:"FlexBox_flexBoxDirectionColumn_11fgm_58",flexBoxDirectionColumnReverse:"FlexBox_flexBoxDirectionColumnReverse_11fgm_62",flexBoxDirectionRow:"FlexBox_flexBoxDirectionRow_11fgm_66",flexBoxDirectionRowReverse:"FlexBox_flexBoxDirectionRowReverse_11fgm_70",flexWrapNoWrap:"FlexBox_flexWrapNoWrap_11fgm_74",flexWrapWrap:"FlexBox_flexWrapWrap_11fgm_78",flexWrapWrapReverse:"FlexBox_flexWrapWrapReverse_11fgm_82"},l=b.forwardRef((e,r)=>{const{children:i,justifyContent:s=u.Start,direction:v=n.Row,alignItems:m=t.Stretch,displayInline:p,wrap:f=o.NoWrap,className:d,fitContainer:x,as:c="div",..._}=e;w(C,l.displayName);const h=B(a.flexBox,a[`flexBoxDirection${v}`],a[`justifyContent${s}`],a[`alignItems${m}`],a[`flexWrap${f}`],p&&a.flexBoxDisplayInline,x&&a.fitContainer,d),g=c;return y.jsx(g,{ref:r,className:h,..._,children:i})});l.displayName="FlexBox";try{l.displayName="FlexBox",l.__docgenInfo={description:"The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.",displayName:"FlexBox",props:{alignItems:{defaultValue:null,description:"Controls the alignment of items on the Cross Axis.<br />\n<b>Note:</b> Corresponds to `align-items`.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'}]}},direction:{defaultValue:null,description:"Controls how the items are placed in the `FlexBox`.<br />\n<b>Note:</b> Corresponds to `flex-direction`.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'},{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'}]}},displayInline:{defaultValue:null,description:"Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.",name:"displayInline",required:!1,type:{name:"boolean"}},fitContainer:{defaultValue:null,description:"Determines whether the `FlexBox` will be sized to completely fill its container.\n\n__Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)",name:"fitContainer",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around items along the main-axis.<br />\n<b>Note:</b> Corresponds to `justify-content`.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'}]}},wrap:{defaultValue:null,description:"Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />\n<b>Note:</b> Corresponds to `flex-wrap`.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'},{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'}]}},children:{defaultValue:null,description:"Content of the `FlexBox`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="FlexBox",l.__docgenInfo={description:"The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.",displayName:"FlexBox",props:{alignItems:{defaultValue:null,description:"Controls the alignment of items on the Cross Axis.<br />\n<b>Note:</b> Corresponds to `align-items`.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'}]}},direction:{defaultValue:null,description:"Controls how the items are placed in the `FlexBox`.<br />\n<b>Note:</b> Corresponds to `flex-direction`.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'},{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'}]}},displayInline:{defaultValue:null,description:"Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.",name:"displayInline",required:!1,type:{name:"boolean"}},fitContainer:{defaultValue:null,description:"Determines whether the `FlexBox` will be sized to completely fill its container.\n\n__Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)",name:"fitContainer",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around items along the main-axis.<br />\n<b>Note:</b> Corresponds to `justify-content`.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'}]}},wrap:{defaultValue:null,description:"Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />\n<b>Note:</b> Corresponds to `flex-wrap`.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'},{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'}]}},children:{defaultValue:null,description:"Content of the `FlexBox`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{l as F,n as a,u as b,t as c,o as d};
