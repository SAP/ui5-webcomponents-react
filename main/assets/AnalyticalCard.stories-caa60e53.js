import{j as t}from"./jsx-runtime-5926aa06.js";import{L as Z}from"./LineChart-90016370.js";import{k as z}from"./UI5Element-d19f28b4.js";import{h as w}from"./Icons-d3203353.js";import{d as L,e as H}from"./i18n-defaults-80781f7e.js";import{S as ee,a as te,b as ae,c as re,N as ie,d as oe,u as ne,e as le}from"./i18n-defaults-54a5f988.js";import{u as se}from"./useIsomorphicId-4be7c5e3.js";import{c as N}from"./clsx.m-1229b3e0.js";import{r as b}from"./index-ebeaab24.js";import{c as k}from"./react-jss.esm-022ab528.js";import{f as de}from"./utils-69f7a0e0.js";import{s as ce}from"./spacing-097dbbf3.js";import{T as e}from"./ThemingParameters-7e2e4e30.js";import{I as me}from"./index-5ec1ccf8.js";import{T as O}from"./index-562e1433.js";import{C as ue}from"./index-7befcc42.js";var s=(a=>(a.Down="Down",a.Up="Up",a.None="None",a))(s||{}),i=(a=>(a.Critical="Critical",a.Error="Error",a.Good="Good",a.Neutral="Neutral",a.None="None",a))(i||{});const pe={content:{flex:"1 1 auto",overflow:"hidden",position:"relative",display:"flex",borderRadius:`0 0 ${e.sapTile_BorderCornerRadius} ${e.sapTile_BorderCornerRadius}`}},he=pe,fe=k(he,{name:"AnalyticalCard"}),S=b.forwardRef((a,f)=>{const{children:y,header:d,...c}=a,m=fe();return t.jsxs(ue,{ref:f,...c,children:[d,t.jsx("div",{className:m.content,role:"group",children:y})]})});S.displayName="AnalyticalCard";try{S.displayName="AnalyticalCard",S.__docgenInfo={description:"The `AnalyticalCard` is mainly used for data visualization. It consists of two areas – a header area and a chart area with a visual representation of the data.<br />",displayName:"AnalyticalCard",props:{header:{defaultValue:null,description:"The Card header Component. Using the `AnalyticalCardHeader` is recommended.",name:"header",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The content of the `AnalyticalCard`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const ye="down",M="M0 32h512L256 480zm64 32l192 352L448 64H64z",xe=!1,ge=L,Ne="SAP-icons-v4",ve="@ui5/webcomponents-icons";w(ye,{pathData:M,ltr:xe,accData:ge,collection:Ne,packageName:ve});const Ce="down",U="M506.5 69q5 6 5 16 0 8-4 13l-226 368q-9 14-23 14t-23-14L9.5 98q-7-11-7-20 0-5 1-8 7-14 26-14h453q16 0 24 13zm-75 43h-351l175 286z",_e=!1,Te=L,be="SAP-icons-v5",Se="@ui5/webcomponents-icons";w(Ce,{pathData:U,ltr:_e,accData:Te,collection:be,packageName:Se});z();const we="down",Ie="up",V="M256 32l256 448H0zm0 64L64 448h384z",$e=!1,Ae=H,ke="SAP-icons-v4",Fe="@ui5/webcomponents-icons";w(Ie,{pathData:V,ltr:$e,accData:Ae,collection:ke,packageName:Fe});const De="up",W="M254 137L79 423h351zm253 329q-10 14-26 14H28q-9 0-16-4.5T2 466q-3-8-1-15t7-14L235 68q3-6 9.5-10t12.5-4q13 0 23 14l227 369q10 14 0 29z",Ee=!1,Oe=H,je="SAP-icons-v5",Re="@ui5/webcomponents-icons";w(De,{pathData:W,ltr:Ee,accData:Oe,collection:je,packageName:Re});z();const qe="up",ze={helpText:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",color:e.sapTextColor},cardHeader:{...ce,position:"relative",backgroundColor:e.sapTile_Background,"&:focus:before":{outline:"none",content:'""',position:"absolute",border:"var(--_ui5_card_header_focus_border)",pointerEvents:"none",top:"var(--_ui5_card_header_focus_offset)",left:"var(--_ui5_card_header_focus_offset)",right:"var(--_ui5_card_header_focus_offset)",bottom:"var(--_ui5_card_header_focus_offset)",borderTopLeftRadius:"var(--_ui5_card_header_focus_radius)",borderTopRightRadius:"var(--_ui5_card_header_focus_radius)",borderBottomLeftRadius:"var(--_ui5_card_header_focus_bottom_radius)",borderBottomRightRadius:"var(--_ui5_card_header_focus_bottom_radius)"},"&:focus-visible":{outline:"none"}},cardHeaderClickable:{cursor:"pointer"},headerTitles:{flex:"1 1 auto",display:"flex",flexDirection:"column",justifyContent:"center",minWidth:"0",width:"100%"},headerFirstLine:{display:"flex",justifyContent:"space-between",width:"100%"},headerSecondLine:{position:"relative",fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",color:e.sapTile_TextColor,minHeight:"1rem",flexGrow:"1",margin:"0.25rem 0 0 0",display:"flex",alignItems:"flex-end",whiteSpace:"normal",wordWrap:"break-word",overflow:"hidden",textAlign:"left",textOverflow:"ellipsis",marginTop:"0.5rem",width:"100%",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"},headerText:{fontFamily:e.sapFontHeaderFamily,fontWeight:"var(--sapFontHeaderWeight)",fontSize:e.sapFontHeader6Size,color:e.sapTile_TitleTextColor,overflow:"hidden",WebkitLineClamp:"3",WebkitBoxOrient:"vertical",whiteSpace:"normal",wordWrap:"break-word",textAlign:"left",textOverflow:"ellipsis"},status:{fontSize:e.sapFontSmallSize,color:e.sapTile_TextColor,lineHeight:"normal",textAlign:"right",marginInlineStart:"1rem",marginBlockStart:"0.125rem"},unitOfMeasurement:{marginInlineStart:"0.25rem",paddingInlineStart:"0.25rem",borderInlineStart:`1px solid ${e.sapTile_TextColor}`},helpIcon:{position:"absolute",right:"0",top:"0"},kpiContent:{display:"flex",alignItems:"flex-start",marginTop:"0.25rem"},mainIndicator:{color:e.sapNeutralTextColor,display:"inline-flex",justifyContent:"flex-start",position:"relative",whiteSpace:"nowrap",textAlign:"right",textOverflow:"ellipsis",fontSize:"2.25rem",fontFamily:e.sapFontFamily,fontWeight:"normal"},value:{paddingBlockStart:"0.125rem",height:"2.875rem",fontFamily:e.sapFontLightFamily},indicatorAndUnit:{display:"grid",textOverflow:"ellipsis",textAlign:"center",height:"2.125rem",paddingInlineStart:"0.375rem",paddingBlock:"0.5rem 0.375rem"},indicator:{gridColumn:1,gridRow:1,width:e.sapFontSmallSize,height:e.sapFontSmallSize,color:"currentColor"},unit:{gridColumn:1,gridRow:1,marginTop:"0.9375rem",fontFamily:e.sapFontFamily,fontSize:e.sapFontSmallSize},indicatorGap:{flex:"1 0 1rem",maxWidth:"3rem"},sideIndicators:{display:"flex",padding:"0.5rem 0",minWidth:0,"& > *":{marginInlineEnd:"1rem"},"&:last-child":{marginInlineEnd:0}},description:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSmallSize,fontWeight:"normal",color:e.sapTile_TextColor,whiteSpace:"normal",overflow:"hidden",textAlign:"left",textOverflow:"ellipsis",marginTop:"0.25rem",width:"100%",display:"-webkit-box",lineHeight:"14px",maxHeight:"14px",WebkitLineClamp:"1",WebkitBoxOrient:"vertical"},good:{color:e.sapPositiveTextColor},error:{color:e.sapNegativeTextColor},critical:{color:e.sapCriticalTextColor},neutral:{color:e.sapNeutralTextColor}},Le=ze,He=k(Le,{name:"AnalyticalCardHeader"}),Me=new Map([[i.Neutral,ee],[i.Good,te],[i.Critical,ae],[i.Error,re]]),Ue=new Map([[s.Up,ie],[s.Down,oe]]),v=b.forwardRef((a,f)=>{const{titleText:y,subtitleText:d,value:c,scale:m,state:n,onClick:C,className:l,description:I,status:F,unitOfMeasurement:_,trend:x,style:P,children:B,id:G,...J}=a,r=He(),K=N(r.cardHeader,C&&r.cardHeaderClickable,l),Q=N(r.mainIndicator,n===i.Good&&r.good,n===i.Error&&r.error,n===i.Critical&&r.critical,n===i.Neutral&&r.neutral),$=ne("@ui5/webcomponents-react"),X=se(),o=G??X,D=de(B),Y=D.map((p,A)=>{var E;return((E=p.props)==null?void 0:E.id)??`${o}-indicator${A}`});let T=`${c??""}${m??""}
`;x&&x!==s.None&&(T+=$.getText(Ue.get(x)??""),T+=`
`),n&&n!==i.None&&(T+=$.getText(Me.get(n)??""));let u=`${o}-title`;d&&(u+=` ${o}-subtitle`),_&&(u+=` ${o}-unitOfMeasurement`),u+=` ${o}-mainIndicator`;for(const p of Y)u+=` ${p}`;return I&&(u+=` ${o}-description`),t.jsx("div",{ref:f,className:K,style:P,id:o,"data-sap-ui-fastnavgroup":"true",tabIndex:0,role:"heading","aria-roledescription":$.getText(le),"aria-labelledby":u,...J,onClick:C,slot:"header",children:t.jsxs("div",{children:[t.jsxs("div",{className:r.headerTitles,children:[t.jsxs("div",{className:r.headerFirstLine,children:[t.jsx("span",{role:"heading","aria-level":3,className:r.headerText,id:`${o}-title`,children:y}),F&&t.jsx("span",{className:r.status,children:F})]}),(d||_)&&t.jsxs("div",{className:r.headerSecondLine,children:[t.jsx("span",{id:`${o}-subtitle`,children:d}),_&&t.jsx("span",{id:`${o}-unitOfMeasurement`,className:r.unitOfMeasurement,children:_})]})]}),t.jsxs("div",{className:r.kpiContent,children:[t.jsxs("div",{className:Q,id:`${o}-mainIndicator`,"aria-label":T,role:"img",children:[t.jsx("span",{className:r.value,children:c}),t.jsxs("div",{className:r.indicatorAndUnit,children:[x!==s.None&&t.jsx(me,{className:N(r.indicator),name:x===s.Up?qe:we}),t.jsx("div",{className:r.unit,children:m})]})]}),t.jsx("div",{className:r.indicatorGap}),t.jsx("div",{className:r.sideIndicators,children:D.map((p,A)=>b.cloneElement(p,{id:p.props.id??`${o}-indicator${A}`}))})]}),I&&t.jsx("span",{id:`${o}-description`,className:r.description,children:I})]})})});v.displayName="AnalyticalCardHeader";v.defaultProps={trend:s.None,state:i.None};try{v.displayName="AnalyticalCardHeader",v.__docgenInfo={description:"The `AnalyticalCardHeader` component serves as layout for the header prop of the `AnalyticalCard`.\n\nIt should only be used as header for the `AnalyticalCard` component.",displayName:"AnalyticalCardHeader",props:{titleText:{defaultValue:null,description:"The title of the card",name:"titleText",required:!1,type:{name:"string"}},subtitleText:{defaultValue:null,description:"The subtitle of the card",name:"subtitleText",required:!1,type:{name:"string"}},trend:{defaultValue:{value:"DeviationIndicator.None"},description:"The direction of the trend arrow. Shows deviation for the value of the main number indicator.",name:"trend",required:!1,type:{name:"enum",value:[{value:'"Down"'},{value:'"Up"'},{value:'"None"'},{value:'"Down"'},{value:'"Up"'},{value:'"None"'}]}},value:{defaultValue:null,description:"The numeric value of the main number indicator.",name:"value",required:!1,type:{name:"string"}},scale:{defaultValue:null,description:`Defines the unit of measurement (scaling prefix) for the main indicator.
Financial characters can be used for currencies and counters. The International System of Units (SI) prefixes can be used.`,name:"scale",required:!1,type:{name:"string"}},state:{defaultValue:{value:"ValueColor.None"},description:`The semantic color which represents the state of the main number indicator.
Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Critical</code></li> <li><code>Good</code></li> <li><code>Neutral</code></li></ul>`,name:"state",required:!1,type:{name:"enum",value:[{value:'"Critical"'},{value:'"Error"'},{value:'"Good"'},{value:'"Neutral"'},{value:'"None"'},{value:'"None"'},{value:'"Critical"'},{value:'"Error"'},{value:'"Good"'},{value:'"Neutral"'}]}},description:{defaultValue:null,description:"Additional text which adds more details to what is shown in the numeric header.",name:"description",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"Defines the status text.",name:"status",required:!1,type:{name:"string"}},unitOfMeasurement:{defaultValue:null,description:"General unit of measurement for the header. Displayed as side information to the subtitle.",name:"unitOfMeasurement",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the `AnalyticalCardHeader` is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},children:{defaultValue:null,description:'Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators should be used.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `NumericSideIndicator` in order to preserve the intended design.',name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ve={numericSideIndicator:{display:"flex",flexDirection:"column",alignItems:"flex-end",minWidth:0,position:"relative"},title:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSmallSize,color:e.sapTile_TextColor,textAlign:"end",textOverflow:"ellipsis",overflow:"hidden",paddingBottom:"0.25rem",maxWidth:"100%"},valueContainer:{position:"relative"},number:{fontSize:e.sapFontSmallSize,color:e.sapTile_TitleTextColor,whiteSpace:"pre-line",wordWrap:"break-word",wordBreak:"break-word"},unit:{fontSize:e.sapFontSmallSize,color:e.sapTile_TitleTextColor,whiteSpace:"pre-line",wordWrap:"break-word",wordBreak:"break-word"},stateGood:{color:e.sapPositiveTextColor,"& $number, $unit":{color:e.sapPositiveTextColor}},stateError:{color:e.sapNegativeTextColor,"& $number, $unit":{color:e.sapNegativeTextColor}},stateCritical:{color:e.sapCriticalTextColor,"& $number, $unit":{color:e.sapCriticalTextColor}},stateNeutral:{color:e.sapNeutralTextColor,"& $number, $unit":{color:e.sapNeutralTextColor}}},We=k(Ve,{name:"NumericSideIndicator"}),h=b.forwardRef((a,f)=>{const{number:y,state:d,titleText:c,unit:m,className:n,...C}=a,l=We();return t.jsxs("div",{ref:f,className:N(l.numericSideIndicator,n),...C,children:[t.jsx("span",{className:l.title,children:c}),t.jsxs("div",{className:N(l.valueContainer,Reflect.get(l,`state${d}`)),children:[t.jsx(O,{className:l.number,children:y}),t.jsx(O,{className:l.unit,children:m})]})]})});h.displayName="NumericSideIndicator";h.defaultProps={state:i.None};try{h.displayName="NumericSideIndicator",h.__docgenInfo={description:"Holds a set of side indicator attributes used in the NumericHeader component.",displayName:"NumericSideIndicator",props:{number:{defaultValue:null,description:"The numeric value",name:"number",required:!0,type:{name:"string | number"}},state:{defaultValue:{value:"ValueColor.None"},description:"The semantic color which represents the state of the side indicator.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Critical"'},{value:'"Error"'},{value:'"Good"'},{value:'"Neutral"'},{value:'"None"'}]}},titleText:{defaultValue:null,description:"The title of the indicator",name:"titleText",required:!0,type:{name:"string"}},unit:{defaultValue:null,description:"Defines the unit of measurement (scaling prefix) for the numeric value",name:"unit",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Pe=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],Be={title:"Data Display / AnalyticalCard",component:S,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:t.jsx(Z,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:a=>`${a}k`}],dataset:Pe}),header:t.jsxs(v,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:s.Down,value:"65.34",state:i.Error,scale:"K",description:"Q1, 2018",children:[t.jsx(h,{titleText:"Target",number:"100",unit:"k"}),t.jsx(h,{titleText:"Deviation",number:"34.7",unit:"%",state:i.Critical})]})}},g={};var j,R,q;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Ge=["Default"],ct=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:Ge,default:Be},Symbol.toStringTag,{value:"Module"}));export{v as A,ct as C,g as D,h as N};
//# sourceMappingURL=AnalyticalCard.stories-caa60e53.js.map
