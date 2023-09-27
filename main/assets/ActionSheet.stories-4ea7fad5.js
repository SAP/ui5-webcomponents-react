import{j as t}from"./jsx-runtime-d079401a.js";import{a as ue}from"./accept-9e169369.js";import{d as he}from"./decline-6c7fc0a2.js";import{d as me}from"./delete-08781f4e.js";import{p as l,o as V}from"./UI5Element-fe43d284.js";import{r as v}from"./Icons-1d0bcfc0.js";import{l as P}from"./i18n-defaults-bdef1cce.js";import{r as g}from"./index-f1f2c4b1.js";import{u as L,Z as fe,C as be,_ as ge}from"./i18n-defaults-1fd9ada1.js";import{u as ve}from"./useIsRTL-8f68c7d5.js";import{u as ye,h as we}from"./withWebComponent-40b4b429.js";import{c as Se}from"./clsx-1229b3e0.js";import{r as Ae}from"./index-c74c9f7f.js";import{c as Ce}from"./react-jss.esm-2e5f50f2.js";import{a as qe}from"./addCustomCSSWithScoping-0dcb0e40.js";import{f as Te}from"./utils-64df43e3.js";import{C as i}from"./CustomVariables-f4d4caba.js";import{T as De}from"./ThemingParameters-7e2e4e30.js";import{C as xe}from"./CssSizeVariables-596b7aba.js";import{R as Be}from"./index-7e919ab8.js";import{B as n}from"./index-997d175b.js";import{B as $}from"./Button-ca10e4c6.js";import{P as Re,a as ke,b as Ne}from"./Popover-e0a9892e.js";const _e={actionSheet:{"&::part(content)":{padding:"0.1875rem 0.375rem"},"& [ui5-button]":{margin:xe.ui5WcrButtonTopBottomPadding,display:"block"},"& [ui5-button]:not([data-cancel-btn])::part(button)":{justifyContent:"start"},"&::part(header)":{background:"transparent",boxShadow:i.ActionSheetHeaderBoxShadow}},actionSheetMobile:{"&::part(content)":{padding:"0 !important"}},contentMobile:{backgroundColor:De.sapGroup_ContentBackground,padding:"0.25rem 0.5rem",boxSizing:"border-box",overflow:"auto",maxHeight:"82vh",borderTopLeftRadius:i.ActionSheetTopBorderRadius,borderTopRightRadius:i.ActionSheetTopBorderRadius,boxShadow:i.ActionSheetBoxShadow,"& > *":{margin:"0.25rem 0"}}},Ie=_e,Oe=Ce(Ie,{name:"ActionSheet"});l()&&qe("ui5-responsive-popover",`
  :host([data-actionsheet]) [ui5-button] {
    display: none;
  }
  :host([data-actionsheet]) [ui5-dialog] {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: ${i.ActionSheetMobileHeaderBorderRadius};
    background-color: ${i.ActionSheetMobileHeaderBackground};
    box-shadow: ${i.ActionSheetMobileHeaderBoxShadow};
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${i.ActionSheetMobileHeaderTextColor} !important;
    text-shadow: none;
    text-align: start !important;
  }
  `);function Ve(s){const{index:c,totalLength:a,...f}=s,y=L("@ui5/webcomponents-react");return t.jsx(n,{accessibleName:`${f.children} ${y.getText(ge,c+1,a)}`,...f,design:$.Transparent,"data-action-btn-index":c})}const m=g.forwardRef((s,c)=>{var N;const{a11yConfig:a,allowTargetOverlap:f,children:y,className:z,footer:H,header:U,headerText:W,hideArrow:X,horizontalAlign:G,initialFocus:J,modal:K,placementType:Y,portalContainer:Z,showCancelButton:C=!0,slot:Q,style:ee,verticalAlign:te,onAfterClose:oe,onAfterOpen:q,onBeforeClose:ne,onBeforeOpen:ae,...re}=s,T=L("@ui5/webcomponents-react"),w=Oe(),[ie,S]=ye(c),r=g.useRef(null),[A,D]=g.useReducer((e,o)=>parseInt(o.target.dataset.actionBtnIndex),0),x=Te(y),B=x.length,p=l()&&C?B+1:B,R=ve(S);if(!we())return null;const se=()=>{S.current.close()},le=(e,o,de)=>t.jsx(Ve,{index:o,totalLength:de.length,tabIndex:A===o?0:-1,...e.props,onClick:b=>{var d,u;S.current.close(),typeof((d=e.props)==null?void 0:d.onClick)=="function"&&((u=e.props)==null||u.onClick(b))},onFocus:b=>{var d,u;typeof((d=e.props)==null?void 0:d.onFocus)=="function"&&((u=e.props)==null||u.onFocus(b)),D(b)}},o),ce=e=>{l()&&r.current.querySelector(`[data-action-btn-index="${A}"]`).focus(),typeof q=="function"&&q(e)},pe=e=>{const o=parseInt(e.target.dataset.actionBtnIndex);switch(e.key){case"ArrowDown":case(R?"ArrowLeft":"ArrowRight"):o+1<p&&(e.preventDefault(),r.current.querySelector(`[data-action-btn-index="${o+1}"]`).focus());break;case"ArrowUp":case(R?"ArrowRight":"ArrowLeft"):o>0&&(e.preventDefault(),r.current.querySelector(`[data-action-btn-index="${o-1}"]`).focus());break;case"PageUp":e.preventDefault(),r.current.querySelector(`[data-action-btn-index="${Math.max(o-5,0)}"]`).focus();break;case"PageDown":e.preventDefault(),r.current.querySelector(`[data-action-btn-index="${Math.min(o+5,p-1)}"]`).focus();break;case"Home":e.preventDefault(),r.current.querySelector('[data-action-btn-index="0"]').focus();break;case"End":e.preventDefault(),r.current.querySelector(`[data-action-btn-index="${p-1}"]`).focus();break}},k=l();return Ae.createPortal(t.jsx(Be,{style:ee,slot:Q,allowTargetOverlap:f,headerText:k?W:void 0,horizontalAlign:G,initialFocus:J,modal:K,hideArrow:X,placementType:Y,verticalAlign:te,footer:H,header:k?U:void 0,onAfterClose:oe,onBeforeClose:ne,onBeforeOpen:ae,accessibleName:T.getText(fe),...re,onAfterOpen:ce,ref:ie,className:Se(w.actionSheet,l()&&w.actionSheetMobile,z),"data-actionsheet":!0,children:t.jsxs("div",{className:l()?w.contentMobile:void 0,"data-component-name":"ActionSheetMobileContent",role:((N=a==null?void 0:a.actionSheetMobileContent)==null?void 0:N.role)??"application",onKeyDown:pe,ref:r,children:[x.map(le),l()&&C&&t.jsx(n,{design:$.Negative,onClick:se,tabIndex:A===p-1?0:-1,"data-action-btn-index":p-1,"data-cancel-btn":!0,onFocus:D,children:T.getText(be)})]})}),Z??document.body)});m.displayName="ActionSheet";try{m.displayName="ActionSheet",m.__docgenInfo={description:`The \`ActionSheet\` holds a list of buttons from which the user can select to complete an action.

The children of the action sheet should be \`Button\` components. Elements in the \`ActionSheet\` are left-aligned. Actions should be arranged in order of importance, from top to bottom.

### Guidelines
- Always display text or text and icons for the actions. Do not use icons only.
- Always provide a Cancel button on mobile phones.
- Avoid scrolling on action sheets.`,displayName:"ActionSheet",props:{headerText:{defaultValue:null,description:"Defines the header text. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},header:{defaultValue:null,description:`Defines the header HTML Element. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the actions of the `ActionSheet`.\n\n__Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>[]"}},showCancelButton:{defaultValue:null,description:"Displays a cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.",name:"showCancelButton",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ actionSheetMobileContent?: { role?: string; }; }"}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}const Pe="email",M="M480 64q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 416V96q0-14 9.5-23T32 64h448zM64 96l192 160L448 96H64zm416 16L256 288 32 112v288l133-136 19 18L48 416h416L329 282l17-18 134 136V112z",Le=!1,$e="SAP-icons-v4",Me="@ui5/webcomponents-icons";v(Pe,{pathData:M,ltr:Le,collection:$e,packageName:Me});const Ee="email",E="M422 64q38 0 64 26t26 64v204q0 38-26 64t-64 26H90q-38 0-64-26T0 358V154q0-38 26-64t64-26h332zM90 115q-11 0-22 7l167 108q8 7 21 7t21-7l166-109q-9-6-21-6H90zm332 282q17 0 28-11t11-28V171L305 273q-22 15-49 15-26 0-49-15L51 172v186q0 17 11 28t28 11h332z",je=!1,Fe="SAP-icons-v5",ze="@ui5/webcomponents-icons";v(Ee,{pathData:E,ltr:je,collection:Fe,packageName:ze});V();const He="email",Ue="forward",j="M471.5 170q9 10 9 23t-9 22l-128 128q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l74-73h-84q-40 0-75 15t-61 41-41 61-15 75v32q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T31.5 449v-32q0-53 20.5-99.5t55-81.5 81-55 99.5-20h84l-74-74q-10-10-10-23t10-22q9-10 22-10t23 10z",We=!1,Xe=P,Ge="SAP-icons-v4",Je="@ui5/webcomponents-icons";v(Ue,{pathData:j,ltr:We,accData:Xe,collection:Ge,packageName:Je});const Ke="forward",F="M320 151h74L289 43q-7-9-7-17 0-11 7.5-18.5T308 0q10 0 18 8l147 151q7 7 7 17 0 11-7 18L326 345q-8 8-18 8-11 0-18.5-7.5T282 327q0-9 7-18l105-107h-74q-49 0-92.5 17T152 266.5t-50.5 73T83 432v54q0 11-7 18.5T58 512t-18.5-7.5T32 486v-54q0-61 22.5-112.5t61.5-89 91.5-58.5T320 151z",Ye=!1,Ze=P,Qe="SAP-icons-v5",et="@ui5/webcomponents-icons";v(Ke,{pathData:F,ltr:Ye,accData:Ze,collection:Qe,packageName:et});V();const tt="forward",ot={title:"Modals & Popovers / ActionSheet",component:m,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{horizontalAlign:Re.Center,placementType:ke.Right,verticalAlign:Ne.Center,open:!1},parameters:{chromatic:{delay:1e3}}},h={render(s){const[c,a]=g.useState(s.open);return t.jsxs("div",{children:[t.jsx(n,{onClick:()=>{a(!0)},id:"actionSheetOpener",children:"Open ActionSheet"}),t.jsxs(m,{...s,opener:"actionSheetOpener",open:c,onAfterClose:()=>{a(!1)},children:[t.jsx(n,{icon:ue,children:"Accept"}),t.jsx(n,{icon:he,children:"Reject"}),t.jsx(n,{icon:He,children:"Email"}),t.jsx(n,{icon:tt,children:"Forward"}),t.jsx(n,{icon:me,children:"Delete"}),t.jsx(n,{children:"Other"})]})]})}};var _,I,O;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render(args) {
    const [actionSheetOpen, setActionSheetOpen] = useState(isChromatic || args.open);
    return <div>
        <Button onClick={() => {
        setActionSheetOpen(true);
      }} id={'actionSheetOpener'}>
          Open ActionSheet
        </Button>
        <ActionSheet {...args} opener="actionSheetOpener" open={actionSheetOpen} onAfterClose={() => {
        setActionSheetOpen(false);
      }}>
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </div>;
  }
}`,...(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const nt=["Default"],Bt=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:nt,default:ot},Symbol.toStringTag,{value:"Module"}));export{Bt as C,h as D};
//# sourceMappingURL=ActionSheet.stories-4ea7fad5.js.map
