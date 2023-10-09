import{j as a}from"./jsx-runtime-d079401a.js";import{V,a as D,b as R,c as H}from"./i18n-defaults-edeeca68.js";import{a as q}from"./alert-f95f2d2e.js";import{i as L,s as W,e as U}from"./information-31cb56bb.js";import{c as z}from"./clsx-1229b3e0.js";import{r as M}from"./index-f1f2c4b1.js";import{c as P}from"./react-jss.esm-2e5f50f2.js";import{u as w,I as G,A as J,E as Y}from"./i18n-defaults-f9eebbcc.js";import{I as v}from"./index-836e5983.js";import{T as e}from"./ThemingParameters-7e2e4e30.js";import{V as p}from"./ValueState-ab6838cc.js";const i=(t,u=!1)=>({textShadow:u?e.sapContent_TextShadow:e.sapContent_ContrastTextShadow,background:e[`${t}_Background`],color:e[`${t}_TextColor`],border:`0.0625rem solid ${e[`${t}_BorderColor`]}`,"& [ui5-icon]":{color:e[`${t}_TextColor`]},"&$active:hover":{background:e[`${t}_Hover_Background`],color:e[`${t}_Hover_TextColor`],border:`0.0625rem solid ${e[`${t}_Hover_BorderColor`]}`,"& [ui5-icon]":{color:e[`${t}_Hover_TextColor`]}},"&$active:active":{textShadow:e.sapContent_TextShadow,background:e[`${t}_Active_Background`],border:`0.0625rem solid ${e[`${t}_Active_BorderColor`]}`}}),c=t=>({textShadow:e.sapContent_ContrastTextShadow,color:e[`${t}_TextColor`],backgroundColor:e[`${t}_Background`],border:`0.0625rem solid ${e[`${t}_BorderColor`]}`,"& [ui5-icon]":{color:e[`${t}_TextColor`]},"&$active:hover":{background:e[`${t}_Hover_Background`]},"&$active:active":{textShadow:e.sapContent_TextShadow,background:e[`${t}_Active_Background`],border:`0.0625rem solid ${e[`${t}_Active_BorderColor`]}`,color:e[`${t}_Active_TextColor`],"& [ui5-icon]":{color:e[`${t}_Active_TextColor`]}}}),K={objectStatus:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",position:"relative",display:"inline-block",verticalAlign:"top",width:"fit-content",textShadow:e.sapContent_TextShadow},active:{cursor:"pointer","&:not($inverted)":{"& $text":{textDecoration:"underline"},"&:hover, &:active":{"& $text":{textDecoration:"none"}},"&:focus":{textShadow:"none",background:e.sapContent_FocusColor,color:e.sapContent_ContrastTextColor,borderRadius:"0.125rem",outline:`0.125rem ${e.sapContent_FocusColor}`,"& [ui5-icon]":{color:e.sapContent_ContrastTextColor}}}},icon:{width:"1rem",textAlign:"center",display:"inline-block",height:"1rem",lineHeight:"1rem",verticalAlign:"top",paddingInlineEnd:"0.25rem",'&[data-icon-only="true"]':{paddingInlineEnd:0},textShadow:e.sapContent_TextShadow},text:{lineHeight:"1rem",display:"inline-block",height:"inherit",verticalAlign:"top"},emptyIndicator:{lineHeight:"normal",color:e.sapTextColor},pseudoInvisibleText:{fontSize:0,position:"absolute",userSelect:"none",left:0,top:0},success:{color:e.sapPositiveTextColor,"& [ui5-icon]":{color:e.sapPositiveElementColor}},warning:{color:e.sapCriticalTextColor,"& [ui5-icon]":{color:e.sapCriticalElementColor}},error:{color:e.sapNegativeTextColor,"& [ui5-icon]":{color:e.sapNegativeElementColor}},information:{color:e.sapInformativeTextColor,"& [ui5-icon]":{color:e.sapInformativeElementColor}},none:{color:e.sapNeutralTextColor,"& [ui5-icon]":{color:e.sapNeutralElementColor}},indication01:{color:e.sapIndicationColor_1,"& [ui5-icon]":{color:e.sapIndicationColor_1}},indication02:{color:e.sapIndicationColor_2,"& [ui5-icon]":{color:e.sapIndicationColor_2}},indication03:{color:e.sapIndicationColor_3,"& [ui5-icon]":{color:e.sapIndicationColor_3}},indication04:{color:e.sapIndicationColor_4,"& [ui5-icon]":{color:e.sapIndicationColor_4}},indication05:{color:e.sapIndicationColor_5,"& [ui5-icon]":{color:e.sapIndicationColor_5}},indication06:{color:e.sapIndicationColor_6,"& [ui5-icon]":{color:e.sapIndicationColor_6}},indication07:{color:e.sapIndicationColor_7,"& [ui5-icon]":{color:e.sapIndicationColor_7}},indication08:{color:e.sapIndicationColor_8,"& [ui5-icon]":{color:e.sapIndicationColor_8}},inverted:{height:"auto",minHeight:"1rem",minWidth:"1.375rem",padding:"0.1875rem 0.25rem",borderRadius:e.sapButton_BorderCornerRadius,fontFamily:e.sapFontBoldFamily,fontSize:e.sapFontSmallSize,"& $icon":{verticalAlign:"text-bottom"},'& [ui5-icon], $icon:not([data-icon-only="true"])':{width:e.sapFontSmallSize,height:e.sapFontSmallSize},'&[data-icon-only="true"]':{display:"flex",alignItems:"center",justifyContent:"center",padding:"0.1875rem 0.313rem",width:"1rem",height:"1rem","& [ui5-icon]":{width:"1rem",height:"1rem"}},"$active&:focus":{outline:`${e.sapContent_FocusColor} ${e.sapContent_FocusStyle} ${e.sapContent_FocusWidth}`},"&$error":{...i("sapButton_Negative"),"&$active:active":{...i("sapButton_Negative",!0)["&$active:active"],color:e.sapButton_Reject_Selected_TextColor,"& [ui5-icon]":{color:e.sapButton_Reject_Selected_TextColor}}},"&$warning":{...i("sapButton_Critical"),"&$active:active":{...i("sapButton_Critical",!0)["&$active:active"],color:e.sapButton_Attention_Selected_TextColor,"& [ui5-icon]":{color:e.sapButton_Attention_Selected_TextColor}}},"&$success":{...i("sapButton_Success"),"&$active:active":{...i("sapButton_Success",!0)["&$active:active"],color:e.sapButton_Accept_Selected_TextColor,"& [ui5-icon]":{color:e.sapButton_Accept_Selected_TextColor}}},"&$information":{...i("sapButton_Information",!0),"&$active:active":{...i("sapButton_Information",!0)["&$active:active"],color:e.sapButton_Selected_TextColor,"& [ui5-icon]":{color:e.sapButton_Selected_TextColor}}},"&$none":{...i("sapButton_Neutral",!0),background:e.sapNeutralBackground,color:e.sapTextColor,border:e.sapNeutralBorderColor,"&$active:active":{...i("sapButton_Neutral",!0)["&$active:active"],color:e.sapButton_Active_TextColor,"& [ui5-icon]":{color:e.sapButton_Active_TextColor}}},"&$indication01":c("sapIndicationColor_1"),"&$indication02":c("sapIndicationColor_2"),"&$indication03":c("sapIndicationColor_3"),"&$indication04":c("sapIndicationColor_4"),"&$indication05":c("sapIndicationColor_5"),"&$indication06":c("sapIndicationColor_6"),"&$indication07":c("sapIndicationColor_7"),"&$indication08":c("sapIndicationColor_8")},large:{fontSize:"1.5rem",fontFamily:e.sapFontLightFamily,"& [ui5-icon], $icon":{height:"1.5rem",width:"1.5rem"},"& $icon":{verticalAlign:"middle"},"& $text":{lineHeight:"normal",verticalAlign:"middle"},"&$inverted":{fontSize:"1.25rem",fontFamily:e.sapFontSemiboldDuplexFamily,padding:"0.125rem 0.25rem","& [ui5-icon], $icon":{height:"1.25rem",width:"1.25rem"},'&[data-icon-only="true"]':{padding:"0 0.25rem",minWidth:"1.75rem",height:"auto"},'& [data-icon-only="true"]':{height:"1.5rem",width:"1.5rem","& [ui5-icon]":{height:"1.5rem",width:"1.5rem"}}}}},Q=K,X=(t,u,m,x,d)=>{const{indicationColorText:S,errorStateText:I,warningStateText:C,informationStateText:l,successStateText:g}=d;let r=m;const s=u&&!r;let o=x;if(!o&&t.startsWith("Indication")&&(o=`${S} ${t.substring(t.indexOf("0")+1)}`),!o||s)switch(t){case p.Error:s&&(r=a.jsx(v,{name:U,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=I);break;case p.Success:s&&(r=a.jsx(v,{name:W,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=g);break;case p.Warning:s&&(r=a.jsx(v,{name:q,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=C);break;case p.Information:s&&(r=a.jsx(v,{name:L,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=l);break}return[r,o]},Z=P(Q,{name:"ObjectStatus"}),f=M.forwardRef((t,u)=>{const{state:m,showDefaultIcon:x,children:d,icon:S,className:I,style:C,active:l,inverted:g,onClick:r,emptyIndicator:s,stateAnnouncementText:o,large:A,...B}=t,T=w("@ui5/webcomponents-react"),_=w("@ui5/webcomponents"),n=Z(),N=T.getText(G),j=_.getText(V),E=_.getText(D),k=_.getText(R),O=_.getText(H),[$,b]=X(m,x,S,o,{indicationColorText:N,errorStateText:j,warningStateText:E,informationStateText:k,successStateText:O}),h=s&&!d,y=h?a.jsx("span",{"aria-hidden":h,"data-component-name":"ObjectStatusEmptyIndicator",className:n.emptyIndicator,children:"–"}):d,F=z(n.objectStatus,n[`${m}`.toLowerCase()],l&&n.active,g&&!h&&n.inverted,A&&n.large,I);return a.jsxs("div",{ref:u,className:F,style:C,onClick:l?r:void 0,tabIndex:l?0:void 0,"data-icon-only":!d,role:l?"button":void 0,"aria-roledescription":l?T.getText(J):void 0,...B,children:[$&&a.jsx("span",{className:n.icon,"data-icon-only":!d,"data-component-name":"ObjectStatusIconContainer",children:$}),y&&a.jsxs("span",{className:n.text,"data-component-name":"ObjectStatusTextContainer",children:[y,h&&a.jsx("span",{className:n.pseudoInvisibleText,"data-component-name":"ObjectStatusInvisibleEmptyTextContainer",children:T.getText(Y)})]}),!!b&&y&&a.jsx("span",{className:n.pseudoInvisibleText,"data-component-name":"ObjectStatusInvisibleTextContainer",children:b})]})});f.displayName="ObjectStatus";f.defaultProps={state:p.None};try{f.displayName="ObjectStatus",f.__docgenInfo={description:"Status information that can be either text with a value state, or an icon.",displayName:"ObjectStatus",props:{active:{defaultValue:null,description:"Indicates if the ObjectStatus text and icon can be clicked/tapped by the user.\n\n**Note:** If you set this property to true, you have to also set the `children` or `icon` prop.\n@since 0.16.6",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Defines the icon in front of the `ObjectStatus` text.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use `Icon` in order to preserve the intended design.",name:"icon",required:!1,type:{name:"ReactNode"}},inverted:{defaultValue:null,description:`Determines whether the background color reflects the set state instead of the text
@since 0.16.6`,name:"inverted",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:`Defines if the component should be rendered in large design.
@since 1.21.0`,name:"large",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Defines the text of the `ObjectStatus`.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode"}},state:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the <code>ObjectStatus</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>\n\nSince version 0.17.0 the state property also accepts values from enum `IndicationColor`.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'}]}},showDefaultIcon:{defaultValue:null,description:"Defines whether the default icon for each `ValueState` should be displayed.<br />\n__Note:__ If the `icon` prop was set, `showDefaultIcon` has no effect.",name:"showDefaultIcon",required:!1,type:{name:"boolean"}},emptyIndicator:{defaultValue:null,description:`Specifies if an empty indicator should be displayed when there is no text.
@since 1.19.0`,name:"emptyIndicator",required:!1,type:{name:"boolean"}},stateAnnouncementText:{defaultValue:null,description:`Enables overriding of the default state announcement read by screen readers.
@since 1.19.0`,name:"stateAnnouncementText",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:`Fires when the user clicks/taps on active text.
@since 0.16.6`,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as O};
//# sourceMappingURL=index-18a4fa96.js.map
