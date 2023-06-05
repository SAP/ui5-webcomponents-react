import{j as n}from"./jsx-runtime-5926aa06.js";import{i as S,a as x,s as $,e as b}from"./information-e6fe8610.js";import{c as N}from"./clsx.m-1229b3e0.js";import{r as j}from"./index-ebeaab24.js";import{c as k}from"./react-jss.esm-022ab528.js";import{I as r}from"./index-398d65a8.js";import{T as e}from"./ThemingParameters-7e2e4e30.js";import{V as c}from"./ValueState-ab6838cc.js";const a=o=>({background:e[`${o}_Background`],color:e[`${o}_TextColor`],"& [ui5-icon]":{color:e[`${o}_TextColor`]},"&$active:hover":{background:e[`${o}_Hover_Background`],color:e[`${o}_Hover_TextColor`],"& [ui5-icon]":{color:e[`${o}_Hover_TextColor`]}},"&$active:active":{background:e[`${o}_Active_Background`],color:e[`${o}_Active_TextColor`],"& [ui5-icon]":{color:e[`${o}_Active_TextColor`]}}}),t=o=>({color:e[`${o}_TextColor`],backgroundColor:e[`${o}`],"& [ui5-icon]":{color:e[`${o}_TextColor`]},"&$active:hover":{background:e[`${o}_Hover_Background`]},"&$active:active":{background:e[`${o}_Active_Background`]}}),w={objectStatus:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",position:"relative",display:"inline-block",verticalAlign:"top",width:"fit-content"},icon:{width:"1rem",textAlign:"center",display:"inline-block",height:"1rem",lineHeight:"1rem",verticalAlign:"top",paddingInlineEnd:"0.25rem","&:only-child":{paddingInlineEnd:0}},text:{lineHeight:"1rem",display:"inline-block",height:"inherit",verticalAlign:"top"},success:{color:e.sapPositiveTextColor,"& [ui5-icon]":{color:e.sapPositiveElementColor}},warning:{color:e.sapCriticalTextColor,"& [ui5-icon]":{color:e.sapCriticalElementColor}},error:{color:e.sapNegativeTextColor,"& [ui5-icon]":{color:e.sapNegativeElementColor}},information:{color:e.sapInformativeTextColor,"& [ui5-icon]":{color:e.sapInformativeElementColor}},none:{color:e.sapNeutralTextColor,"& [ui5-icon]":{color:e.sapNeutralElementColor}},indication01:{color:e.sapIndicationColor_1,"& [ui5-icon]":{color:e.sapIndicationColor_1}},indication02:{color:e.sapIndicationColor_2,"& [ui5-icon]":{color:e.sapIndicationColor_2}},indication03:{color:e.sapIndicationColor_3,"& [ui5-icon]":{color:e.sapIndicationColor_3}},indication04:{color:e.sapIndicationColor_4,"& [ui5-icon]":{color:e.sapIndicationColor_4}},indication05:{color:e.sapIndicationColor_5,"& [ui5-icon]":{color:e.sapIndicationColor_5}},indication06:{color:e.sapIndicationColor_6,"& [ui5-icon]":{color:e.sapIndicationColor_6}},indication07:{color:e.sapIndicationColor_7,"& [ui5-icon]":{color:e.sapIndicationColor_7}},indication08:{color:e.sapIndicationColor_8,"& [ui5-icon]":{color:e.sapIndicationColor_8}},active:{"&:hover, &:active":{cursor:"pointer","&:not($inverted) $text, $icon:only-child":{textDecoration:"underline"}}},inverted:{height:"auto",minHeight:"1rem",minWidth:"1.25rem",padding:"0.0625rem 0.25rem",borderRadius:e.sapElement_BorderCornerRadius,fontFamily:e.sapFontBoldFamily,fontSize:e.sapFontSmallSize,"& [ui5-icon]":{paddingTop:"0.125rem",width:e.sapFontSmallSize,height:e.sapFontSmallSize},"&$error":a("sapButton_Negative"),"&$warning":a("sapButton_Critical"),"&$success":a("sapButton_Success"),"&$information":a("sapButton_Information"),"&$none":a("sapButton_Neutral"),"&$indication01":t("sapIndicationColor_1"),"&$indication02":t("sapIndicationColor_2"),"&$indication03":t("sapIndicationColor_3"),"&$indication04":t("sapIndicationColor_4"),"&$indication05":t("sapIndicationColor_5"),"&$indication06":t("sapIndicationColor_6"),"&$indication07":t("sapIndicationColor_7"),"&$indication08":t("sapIndicationColor_8")}},T=w,E=o=>{switch(o){case c.Error:return n.jsx(r,{name:b,"data-component-name":"ObjectStatusDefaultIcon"});case c.Success:return n.jsx(r,{name:$,"data-component-name":"ObjectStatusDefaultIcon"});case c.Warning:return n.jsx(r,{name:x,"data-component-name":"ObjectStatusDefaultIcon"});case c.Information:return n.jsx(r,{name:S,"data-component-name":"ObjectStatusDefaultIcon"});default:return null}},D=k(T,{name:"ObjectStatus"}),l=j.forwardRef((o,h)=>{const{state:s,showDefaultIcon:v,children:d,icon:u,className:f,style:I,active:p,inverted:_,onClick:g,...y}=o,m=(()=>u||(v?E(s):null))(),i=D(),C=N(i.objectStatus,i[`${s}`.toLowerCase()],p&&i.active,_&&i.inverted,f);return n.jsxs("div",{ref:h,className:C,style:I,onClick:p?g:void 0,...y,children:[m&&n.jsx("span",{className:i.icon,children:m}),d&&n.jsx("span",{className:i.text,children:d})]})});l.displayName="ObjectStatus";l.defaultProps={state:c.None};try{l.displayName="ObjectStatus",l.__docgenInfo={description:"Status information that can be either text with a value state, or an icon.",displayName:"ObjectStatus",props:{active:{defaultValue:null,description:"Indicates if the ObjectStatus text and icon can be clicked/tapped by the user.\n\n**Note:** If you set this property to true, you have to also set the `children` or `icon` prop.\n@since 0.16.6",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Defines the icon in front of the `ObjectStatus` text.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use `Icon` in order to preserve the intended design.",name:"icon",required:!1,type:{name:"ReactNode"}},inverted:{defaultValue:null,description:`Determines whether the background color reflects the set state instead of the text
@since 0.16.6`,name:"inverted",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Defines the text of the `ObjectStatus`.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode"}},state:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the <code>ObjectStatus</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>\n\nSince version 0.17.0 the state property also accepts values from enum `IndicationColor`.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'}]}},showDefaultIcon:{defaultValue:null,description:"Defines whether the default icon for each `ValueState` should be displayed.<br />\n__Note:__ If the `icon` prop was set, `showDefaultIcon` has no effect.",name:"showDefaultIcon",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:`Fires when the user clicks/taps on active text.
@since 0.16.6`,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{l as O};
//# sourceMappingURL=index-570e5d43.js.map
