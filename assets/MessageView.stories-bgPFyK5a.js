import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{i as pe}from"./slim-arrow-right-w4AUPzoN.js";import{c as E}from"./clsx-Zbgk8kpT.js";import{r as i}from"./index-OjgoNOWw.js";import{C as _e}from"./index-8v8kv0G9.js";import{I as R}from"./index-AdaLOUyB.js";import{L as fe}from"./index-mG3laKte.js";import{F as _,b as se,a as T,c as ne}from"./index-xrvtQWKa.js";import{a as he}from"./alert--0SE21sY.js";import{i as we,s as xe,e as ye}from"./information-6141dtH3.js";import{V as r}from"./ValueState-I_-hGNIb.js";import{u as ae}from"./useStylesheet-MWHnOiB7.js";import{a as G}from"./ListItem-WDqK2DXW.js";import{T as Ie}from"./index-FxYIONdV.js";import{a as re}from"./slim-arrow-left-W95OY-0p.js";import{r as oe}from"./index-QYh6idnL.js";import{B as S}from"./index-Xfq_bmGx.js";import{B as I}from"./index-u_LDmd01.js";import{D as Me}from"./index-dHdJs6jI.js";import{L as ve}from"./index-yOV2Cusw.js";import{R as Ce}from"./index-CiiYBYLx.js";import{T as A}from"./index-DS8Tk-pf.js";import{M as Ne}from"./index-1vw3vH-9.js";import{u as Te,$ as ke,a0 as be}from"./i18n-defaults-Ph_9MK3s.js";import{G as je}from"./index-sI3ds-gE.js";import{L as Ve}from"./index-EByCiS5Q.js";import{a as Se,S as q}from"./index-YhxjwNBq.js";import{u as De}from"./withWebComponent-LTFbYRvs.js";import{G as Be}from"./GlobalStyleClasses-kWTEndz_.js";import{B as k}from"./Button-DcwyQdV9.js";import{T as O}from"./Title-yLgJni0m.js";import{W as Pe}from"./WrappingType-avPrqc94.js";const ie=i.createContext({selectMessage:t=>{}}),Ee={packageName:"@ui5/webcomponents-react",fileName:"MessageView.module.css",content:".MessageView_container_l69ku_1{display:flex;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}.MessageView_container_l69ku_1>*{flex-shrink:0;transition:transform .2s ease-in-out;width:100%}.MessageView_showDetails_l69ku_15>*{transform:translateX(-100%)}.MessageView_button_l69ku_21[data-key=Error]:not([pressed]){color:var(--sapNegativeElementColor)}.MessageView_button_l69ku_21[data-key=Warning]:not([pressed]){color:var(--sapCriticalElementColor)}.MessageView_button_l69ku_21[data-key=Success]:not([pressed]){color:var(--sapPositiveElementColor)}.MessageView_button_l69ku_21[data-key=Information]:not([pressed]){color:var(--sapInformativeElementColor)}.MessageView_details_l69ku_39{padding:1rem}.MessageView_detailsIcon_l69ku_43{flex-shrink:0;margin:0 1rem 0 .5rem}.MessageView_detailsIcon_l69ku_43[data-type=Error]{color:var(--sapNegativeElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Warning]{color:var(--sapCriticalElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Success]{color:var(--sapPositiveElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Information],.MessageView_detailsIcon_l69ku_43[data-type=None]{color:var(--sapInformativeElementColor)}.MessageView_detailsTextContainer_l69ku_65{overflow:hidden}.MessageView_detailsTitle_l69ku_69{margin-block-end:1rem}.MessageView_detailsText_l69ku_65{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.4;margin-block-end:1rem}.MessageView_messagesContainer_l69ku_81{height:100%}.MessageView_detailsContainer_l69ku_85{height:100%}"},u={container:"MessageView_container_l69ku_1",showDetails:"MessageView_showDetails_l69ku_15",button:"MessageView_button_l69ku_21",details:"MessageView_details_l69ku_39",detailsIcon:"MessageView_detailsIcon_l69ku_43",detailsTextContainer:"MessageView_detailsTextContainer_l69ku_65",detailsTitle:"MessageView_detailsTitle_l69ku_69",detailsText:"MessageView_detailsText_l69ku_65",messagesContainer:"MessageView_messagesContainer_l69ku_81",detailsContainer:"MessageView_detailsContainer_l69ku_85"},F=t=>{switch(t){case r.Error:case"Error":return ye;case r.Success:case"Success":return xe;case r.Warning:case"Warning":return he;default:return we}},Re=t=>(t??[]).map(n=>{var s;return(s=n==null?void 0:n.props)==null?void 0:s.type}).reduce((n,s)=>{const o=s===r.None?r.Information:s;return n.hasOwnProperty(o)&&n[o]++,n},{[r.Error]:0,[r.Warning]:0,[r.Success]:0,[r.Information]:0}),Fe=t=>{const n=(t??[]).reduce((s,o)=>{var l;const m=((l=o==null?void 0:o.props)==null?void 0:l.groupName)??"";return s.hasOwnProperty(m)?s[m].push(o):s[m]=[o],s},{});return Object.entries(n).sort((s,o)=>s[0].localeCompare(o[0]))},x=i.forwardRef((t,n)=>{const{children:s,groupItems:o,showDetailsPageHeader:m,className:l,onItemSelect:y,...B}=t;ae(Ee,x.displayName);const[f,M]=De(n),b=Te("@ui5/webcomponents-react"),[h,j]=i.useState("All"),[d,p]=i.useState(null),V=i.Children.toArray(s),W=Re(V),me=Object.values(W).filter(a=>a>0).length,H=h==="All"?V:V.filter(a=>{var w,$,z;return i.isValidElement(a)?h===r.Information?((w=a==null?void 0:a.props)==null?void 0:w.type)===r.Information||(($=a==null?void 0:a.props)==null?void 0:$.type)===r.None:((z=a==null?void 0:a.props)==null?void 0:z.type)===h:!1}),de=Fe(H),P=i.useCallback(()=>{p(null)},[p]);i.useEffect(()=>{M.current&&(M.current.navigateBack=P)},[M.current,P]);const ge=a=>{j(a.detail.selectedItem.dataset.key)},ue=E(u.container,Be.sapScrollBar,l,d&&u.showDetails);return e.jsx("div",{ref:f,...B,className:ue,children:e.jsxs(ie.Provider,{value:{selectMessage:p},children:[e.jsx("div",{style:{visibility:d?"hidden":"visible"},className:u.messagesContainer,children:!d&&e.jsxs(e.Fragment,{children:[me>1&&e.jsx(S,{startContent:e.jsxs(Se,{onSelectionChange:ge,children:[e.jsx(q,{"data-key":"All",pressed:h==="All",children:b.getText(ke)}),Object.entries(W).map(([a,w])=>w===0?null:e.jsx(q,{"data-key":a,pressed:h===a,icon:F(a),className:u.button,children:w},a))]})}),e.jsx(Ve,{onItemClick:y,noDataText:b.getText(be),children:o?de.map(([a,w])=>e.jsxs(i.Fragment,{children:[a&&e.jsx(je,{children:a}),w]},a)):H})]})}),e.jsx("div",{className:u.detailsContainer,children:V.length>0?e.jsxs(e.Fragment,{children:[m&&d&&e.jsx(S,{startContent:e.jsx(I,{design:k.Transparent,icon:re,onClick:P})}),d&&e.jsxs(_,{className:u.details,children:[e.jsx(R,{"data-type":d.type,name:F(d.type),className:u.detailsIcon}),e.jsxs(_,{direction:se.Column,className:u.detailsTextContainer,children:[e.jsx(A,{level:O.H5,className:u.detailsTitle,wrappingType:Pe.Normal,children:d.titleText}),e.jsx("div",{className:u.detailsText,children:d.children})]})]})]}):null})]})})});x.displayName="MessageView";try{x.displayName="MessageView",x.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Le={packageName:"@ui5/webcomponents-react",fileName:"MessageItem.module.css",content:".MessageItem_listItem_vln5w_1{height:var(--_ui5wcr-MessageViewListItemHeightSingle)}.MessageItem_message_vln5w_5{box-sizing:border-box;max-width:100%;overflow:hidden;padding:.25rem 0;padding-inline-end:1rem;width:100%}.MessageItem_withSubtitle_vln5w_14{height:var(--_ui5wcr-MessageViewListItemHeightByLine)}.MessageItem_withChildren_vln5w_18{padding-inline-end:0}.MessageItem_iconContainer_vln5w_22{align-items:center;display:flex;height:2.25rem;justify-content:center;min-width:3rem;width:3rem}.MessageItem_icon_vln5w_22{height:1rem;width:1rem}.MessageItem_title_vln5w_36{color:var(--sapGroup_TitleTextColor);flex:1 1 auto;font-family:var(--sapFontHeaderFamily);font-size:var(--_ui5wcr-MessageItemTitleFontSize);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.MessageItem_title_vln5w_36+.MessageItem_subtitle_vln5w_46{cursor:inherit;margin-block-start:.25rem}.MessageItem_counter_vln5w_52{color:var(--sapContent_MarkerTextColor);flex:none;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);padding-inline-start:1rem}.MessageItem_navigation_vln5w_60{flex-shrink:0;height:.875rem;padding:0 .9375rem;width:.875rem}.MessageItem_typeError_vln5w_67 .MessageItem_icon_vln5w_22{color:var(--sapNegativeElementColor)}.MessageItem_typeSuccess_vln5w_73 .MessageItem_icon_vln5w_22{color:var(--sapPositiveElementColor)}.MessageItem_typeWarning_vln5w_79 .MessageItem_icon_vln5w_22{color:var(--sapCriticalElementColor)}.MessageItem_typeInformation_vln5w_85 .MessageItem_icon_vln5w_22,.MessageItem_typeNone_vln5w_86 .MessageItem_icon_vln5w_22{color:var(--sapInformativeElementColor)}"},g={listItem:"MessageItem_listItem_vln5w_1",message:"MessageItem_message_vln5w_5",withSubtitle:"MessageItem_withSubtitle_vln5w_14",withChildren:"MessageItem_withChildren_vln5w_18",iconContainer:"MessageItem_iconContainer_vln5w_22",icon:"MessageItem_icon_vln5w_22",title:"MessageItem_title_vln5w_36",subtitle:"MessageItem_subtitle_vln5w_46",counter:"MessageItem_counter_vln5w_52",navigation:"MessageItem_navigation_vln5w_60",typeError:"MessageItem_typeError_vln5w_67",typeSuccess:"MessageItem_typeSuccess_vln5w_73",typeWarning:"MessageItem_typeWarning_vln5w_79",typeInformation:"MessageItem_typeInformation_vln5w_85",typeNone:"MessageItem_typeNone_vln5w_86"},c=i.forwardRef((t,n)=>{const{titleText:s,subtitleText:o,counter:m,type:l=r.Error,children:y,className:B,...f}=t;ae(Le,c.displayName);const{selectMessage:M}=i.useContext(ie),b=E(g.listItem,Reflect.get(g,`type${l}`),B,o&&g.withSubtitle),h=E(g.message,y&&g.withChildren),j=p=>{y&&(M(t),typeof f.onClick=="function"&&f.onClick(p))},d=p=>{typeof f.onKeyDown=="function"&&f.onKeyDown(p),p.code==="Enter"&&j(p)};return e.jsx(_e,{onClick:j,onKeyDown:d,"data-title":s,"data-type":l,type:y?G.Active:G.Inactive,...f,className:b,ref:n,children:e.jsxs(_,{alignItems:T.Center,className:h,children:[e.jsx("div",{className:g.iconContainer,children:e.jsx(R,{name:F(l),className:g.icon})}),e.jsxs(_,{direction:se.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e.jsx("span",{className:g.title,children:s}),o&&e.jsx(fe,{className:g.subtitle,children:o})]}),m!=null&&e.jsx("span",{className:g.counter,children:m}),y&&e.jsx(R,{className:g.navigation,name:pe})]})})});c.displayName="MessageItem";try{c.displayName="MessageItem",c.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const D=e.jsx(Ie,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Ae=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Information Message",type:r.Information,groupName:`Group${s}`,children:D},`InformationMessage${s}`)):[],Oe=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Success Message",type:r.Success,groupName:`Group${s}`,children:D},`SuccessMessage${s}`)):[],We=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Warning Message",type:r.Warning,groupName:`Group${s}`,children:D},`WarningMessage${s}`)):[],He=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Error Message",type:r.Error,groupName:`Group${s}`,children:D},`ErrorMessage${s}`)):[],L=t=>[...Ae(t.information),...We(t.warning),...Oe(t.success),...He(t.error)];try{L.displayName="generateMessageItems",L.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const le=i.forwardRef((t,n)=>oe.createPortal(e.jsx(Me,{...t,ref:n}),document.body));le.displayName="Dialog";const ce=i.forwardRef((t,n)=>oe.createPortal(e.jsx(Ce,{...t,ref:n}),document.body));ce.displayName="ResponsivePopover";const $e={title:"User Feedback / MessageView",component:x,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(c,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:r.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsxs(c,{titleText:"Success Message Type",subtitleText:"You can also use subtitles",type:r.Success,counter:2,children:["This is a success message! You can even use"," ",e.jsx(ve,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"links here"}),"."]},2),e.jsx(c,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:r.Warning,counter:3},3),e.jsx(c,{titleText:"Empty Message Type",groupName:"Products"},4),e.jsx(c,{titleText:"Information Message Type without subtitle",type:r.Information,groupName:"Products"},5),e.jsx(c,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:r.None,groupName:"Employees",children:"Informative message"},6)]}},v={},C={name:"MessageView in Dialog",render(t){const n=i.useRef(null),s=i.useRef(null),[o,m]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>{n.current.show()},children:"Open Dialog"}),e.jsx(le,{ref:n,style:{width:"400px"},className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(S,{startContent:e.jsxs(_,{alignItems:T.Center,children:[o&&e.jsx(I,{icon:re,design:k.Transparent,onClick:()=>{m(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(A,{level:O.H4,children:"Messages"})]})}),footer:e.jsx(_,{alignItems:T.Center,justifyContent:ne.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:k.Transparent,onClick:()=>{var l;(l=n.current)==null||l.close()},children:"Close"})}),children:e.jsx(x,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{m(!0)}})})]})}},N={name:"with MessageViewButton & Popover",render(){const t=i.useRef(null),n=i.useRef(null),[s,o]=i.useState(!1),m={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{counter:3,type:r.Error,onClick:l=>{t.current.showAt(l.target)}}),e.jsx(ce,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(S,{startContent:e.jsxs(_,{alignItems:T.Center,children:[s&&e.jsx(I,{design:k.Transparent,icon:"slim-arrow-left",onClick:()=>{o(!1),n.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(A,{level:O.H4,children:"Messages"})]})}),footer:e.jsx(_,{alignItems:T.Center,justifyContent:ne.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:k.Transparent,onClick:()=>{var l;(l=t.current)==null||l.close()},children:"Close"})}),children:e.jsx(x,{style:{height:"500px",maxWidth:"600px"},ref:n,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{o(!0)},children:L(m)})})]})}};var K,J,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(U=(J=v.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,X,Q;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'MessageView in Dialog',
  render(args) {
    const dialogRef = useRef(null);
    const messageViewRef = useRef(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return <>
        <Button onClick={() => {
        dialogRef.current.show();
      }}>
          Open Dialog
        </Button>
        <Dialog ref={dialogRef} style={{
        width: '400px'
      }} className="contentPartNoPadding headerPartNoPadding" header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && <Button icon={arrowLeftIcon} design={ButtonDesign.Transparent} onClick={() => {
          setIsOnDetailsPage(false);
          messageViewRef.current.navigateBack();
        }} style={{
          marginInline: '0 0.5rem'
        }} />}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>} />} footer={<FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.End} style={{
        width: '100%',
        boxSizing: 'border-box'
      }}>
              <Button design={ButtonDesign.Transparent} onClick={() => {
          dialogRef.current?.close();
        }}>
                Close
              </Button>
            </FlexBox>}>
          <MessageView ref={messageViewRef} {...args} showDetailsPageHeader={false} onItemSelect={() => {
          setIsOnDetailsPage(true);
        }} />
        </Dialog>
      </>;
  }
}`,...(Q=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,ee,te;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'with MessageViewButton & Popover',
  render() {
    const ref = useRef(null);
    const messageViewRef = useRef(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const numberOfItems = {
      information: 2,
      warning: 5,
      success: 3,
      error: 3
    };
    return <>
        <MessageViewButton counter={3} type={ValueState.Error} onClick={e => {
        ref.current.showAt(e.target);
      }} />
        <ResponsivePopover ref={ref} headerText="Messages" className="contentPartNoPadding headerPartNoPadding" header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && <Button design={ButtonDesign.Transparent} icon="slim-arrow-left" onClick={() => {
          setIsOnDetailsPage(false);
          messageViewRef.current.navigateBack();
        }} style={{
          marginInline: '0 0.5rem'
        }} />}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>} />} footer={<FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.End} style={{
        paddingBlock: '0.25rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
              <Button design={ButtonDesign.Transparent} onClick={() => {
          ref.current?.close();
        }}>
                Close
              </Button>
            </FlexBox>}>
          <MessageView style={{
          height: '500px',
          maxWidth: '600px'
        }} ref={messageViewRef} showDetailsPageHeader={false} groupItems onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}>
            {generateMessageItems(numberOfItems)}
          </MessageView>
        </ResponsivePopover>
      </>;
  }
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ze=["Default","MessageViewInDialog","WithMessageViewButton"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:v,MessageViewInDialog:C,WithMessageViewButton:N,__namedExportsOrder:ze,default:$e},Symbol.toStringTag,{value:"Module"}));export{vt as C,v as D,C as M,N as W,c as a};
