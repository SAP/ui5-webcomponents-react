import{j as e}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{i as pe}from"./slim-arrow-right-DAFsLrVd.js";import{c as O}from"./clsx-B-dksMZM.js";import{r}from"./index-BP8_t0zE.js";import{C as fe}from"./index-CQnQaey3.js";import{I as A}from"./index-CDql54II.js";import{L as _e}from"./index-D4Q2hLLw.js";import{F as h,a as ae,c as D,b as re}from"./index-D5jmPUux.js";import{a as he}from"./alert-DgMNwF9A.js";import{i as we,s as ye,e as xe}from"./information-ByKCPUae.js";import{V as i}from"./ValueState-gQDshf3o.js";import{u as oe}from"./useStylesheet-CKNtzFUp.js";import{a as U}from"./ListItem-D6VH6dNG.js";import{T as Ie}from"./index-BHtFRKyY.js";import{a as ie}from"./slim-arrow-left-BbC6zzX9.js";import{r as le}from"./index-BxmsGmlx.js";import{B as R}from"./index-DFVY_IJt.js";import{B as M}from"./index-ByFdKTQR.js";import{D as ve}from"./index-i-2umUAv.js";import{R as Me}from"./index-Bh2DndBI.js";import{T as H}from"./index-pYs60KaJ.js";import{M as Ce}from"./index-ChVcOhqA.js";import{u as Ne,w as be,L as Te}from"./i18n-defaults-eAAV7luf.js";import{G as Ve}from"./index-CoiGZFQA.js";import{L as ke}from"./index-DLVJqxxa.js";import{a as Se,S as K}from"./index-D_LnI0IE.js";import{u as je}from"./withWebComponent-iwEMLCwM.js";import{G as De}from"./GlobalStyleClasses-CJhxSfAI.js";import{B}from"./Button-gvhXfHAu.js";import{T as q}from"./Title-BBSMWZjZ.js";import{W as Be}from"./WrappingType-CW8URInd.js";const ce=r.createContext({selectMessage:t=>{}}),Pe={packageName:"@ui5/webcomponents-react",fileName:"MessageView.module.css",content:".MessageView_container_l69ku_1{display:flex;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}.MessageView_container_l69ku_1>*{flex-shrink:0;transition:transform .2s ease-in-out;width:100%}.MessageView_showDetails_l69ku_15>*{transform:translateX(-100%)}.MessageView_button_l69ku_21[data-key=Error]:not([pressed]){color:var(--sapNegativeElementColor)}.MessageView_button_l69ku_21[data-key=Warning]:not([pressed]){color:var(--sapCriticalElementColor)}.MessageView_button_l69ku_21[data-key=Success]:not([pressed]){color:var(--sapPositiveElementColor)}.MessageView_button_l69ku_21[data-key=Information]:not([pressed]){color:var(--sapInformativeElementColor)}.MessageView_details_l69ku_39{padding:1rem}.MessageView_detailsIcon_l69ku_43{flex-shrink:0;margin:0 1rem 0 .5rem}.MessageView_detailsIcon_l69ku_43[data-type=Error]{color:var(--sapNegativeElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Warning]{color:var(--sapCriticalElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Success]{color:var(--sapPositiveElementColor)}.MessageView_detailsIcon_l69ku_43[data-type=Information],.MessageView_detailsIcon_l69ku_43[data-type=None]{color:var(--sapInformativeElementColor)}.MessageView_detailsTextContainer_l69ku_65{overflow:hidden}.MessageView_detailsTitle_l69ku_69{margin-block-end:1rem}.MessageView_detailsText_l69ku_65{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.4;margin-block-end:1rem}.MessageView_messagesContainer_l69ku_81{height:100%}.MessageView_detailsContainer_l69ku_85{height:100%}"},p={container:"MessageView_container_l69ku_1",showDetails:"MessageView_showDetails_l69ku_15",button:"MessageView_button_l69ku_21",details:"MessageView_details_l69ku_39",detailsIcon:"MessageView_detailsIcon_l69ku_43",detailsTextContainer:"MessageView_detailsTextContainer_l69ku_65",detailsTitle:"MessageView_detailsTitle_l69ku_69",detailsText:"MessageView_detailsText_l69ku_65",messagesContainer:"MessageView_messagesContainer_l69ku_81",detailsContainer:"MessageView_detailsContainer_l69ku_85"},W=t=>{switch(t){case i.Error:case"Error":return xe;case i.Success:case"Success":return ye;case i.Warning:case"Warning":return he;default:return we}},Ee=t=>(t??[]).map(n=>{var s;return(s=n==null?void 0:n.props)==null?void 0:s.type}).reduce((n,s)=>{const o=s===i.None?i.Information:s;return n.hasOwnProperty(o)&&n[o]++,n},{[i.Error]:0,[i.Warning]:0,[i.Success]:0,[i.Information]:0}),Re=t=>{const n=(t??[]).reduce((s,o)=>{var l;const m=((l=o==null?void 0:o.props)==null?void 0:l.groupName)??"";return s.hasOwnProperty(m)?s[m].push(o):s[m]=[o],s},{});return Object.entries(n).sort((s,o)=>s[0].localeCompare(o[0]))},_=r.forwardRef((t,n)=>{const{children:s,groupItems:o,showDetailsPageHeader:m,className:l,onItemSelect:E,...F}=t;oe(Pe,_.displayName);const[w,C]=je(n),N=Ne("@ui5/webcomponents-react"),[f,x]=r.useState("All"),[d,b]=r.useState(null),I=r.Children.toArray(s),T=Ee(I),L=Object.values(T).filter(a=>a>0).length,V=f==="All"?I:I.filter(a=>{var y,$,G;return r.isValidElement(a)?f===i.Information?((y=a==null?void 0:a.props)==null?void 0:y.type)===i.Information||(($=a==null?void 0:a.props)==null?void 0:$.type)===i.None:((G=a==null?void 0:a.props)==null?void 0:G.type)===f:!1}),g=Re(V),v=r.useCallback(()=>{b(null)},[b]);r.useEffect(()=>{C.current&&(C.current.navigateBack=v)},[C.current,v]);const ue=a=>{x(a.detail.selectedItem.dataset.key)},ge=O(p.container,De.sapScrollBar,l,d&&p.showDetails);return e.jsx("div",{ref:w,...F,className:ge,children:e.jsxs(ce.Provider,{value:{selectMessage:b},children:[e.jsx("div",{style:{visibility:d?"hidden":"visible"},className:p.messagesContainer,children:!d&&e.jsxs(e.Fragment,{children:[L>1&&e.jsx(R,{startContent:e.jsxs(Se,{onSelectionChange:ue,children:[e.jsx(K,{"data-key":"All",pressed:f==="All",children:N.getText(be)}),Object.entries(T).map(([a,y])=>y===0?null:e.jsx(K,{"data-key":a,pressed:f===a,icon:W(a),className:p.button,children:y},a))]})}),e.jsx(ke,{onItemClick:E,noDataText:N.getText(Te),children:o?g.map(([a,y])=>e.jsxs(r.Fragment,{children:[a&&e.jsx(Ve,{children:a}),y]},a)):V})]})}),e.jsx("div",{className:p.detailsContainer,children:I.length>0?e.jsxs(e.Fragment,{children:[m&&d&&e.jsx(R,{startContent:e.jsx(M,{design:B.Transparent,icon:ie,onClick:v})}),d&&e.jsxs(h,{className:p.details,children:[e.jsx(A,{"data-type":d.type,name:W(d.type),className:p.detailsIcon}),e.jsxs(h,{direction:ae.Column,className:p.detailsTextContainer,children:[e.jsx(H,{level:q.H5,className:p.detailsTitle,wrappingType:Be.Normal,children:d.titleText}),e.jsx("div",{className:p.detailsText,children:d.children})]})]})]}):null})]})})});_.displayName="MessageView";try{_.displayName="MessageView",_.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}try{_.displayName="MessageView",_.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Fe={packageName:"@ui5/webcomponents-react",fileName:"MessageItem.module.css",content:".MessageItem_listItem_vln5w_1{height:var(--_ui5wcr-MessageViewListItemHeightSingle)}.MessageItem_message_vln5w_5{box-sizing:border-box;max-width:100%;overflow:hidden;padding:.25rem 0;padding-inline-end:1rem;width:100%}.MessageItem_withSubtitle_vln5w_14{height:var(--_ui5wcr-MessageViewListItemHeightByLine)}.MessageItem_withChildren_vln5w_18{padding-inline-end:0}.MessageItem_iconContainer_vln5w_22{align-items:center;display:flex;height:2.25rem;justify-content:center;min-width:3rem;width:3rem}.MessageItem_icon_vln5w_22{height:1rem;width:1rem}.MessageItem_title_vln5w_36{color:var(--sapGroup_TitleTextColor);flex:1 1 auto;font-family:var(--sapFontHeaderFamily);font-size:var(--_ui5wcr-MessageItemTitleFontSize);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.MessageItem_title_vln5w_36+.MessageItem_subtitle_vln5w_46{cursor:inherit;margin-block-start:.25rem}.MessageItem_counter_vln5w_52{color:var(--sapContent_MarkerTextColor);flex:none;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);padding-inline-start:1rem}.MessageItem_navigation_vln5w_60{flex-shrink:0;height:.875rem;padding:0 .9375rem;width:.875rem}.MessageItem_typeError_vln5w_67 .MessageItem_icon_vln5w_22{color:var(--sapNegativeElementColor)}.MessageItem_typeSuccess_vln5w_73 .MessageItem_icon_vln5w_22{color:var(--sapPositiveElementColor)}.MessageItem_typeWarning_vln5w_79 .MessageItem_icon_vln5w_22{color:var(--sapCriticalElementColor)}:is(.MessageItem_typeInformation_vln5w_85,.MessageItem_typeNone_vln5w_86) .MessageItem_icon_vln5w_22{color:var(--sapInformativeElementColor)}"},u={listItem:"MessageItem_listItem_vln5w_1",message:"MessageItem_message_vln5w_5",withSubtitle:"MessageItem_withSubtitle_vln5w_14",withChildren:"MessageItem_withChildren_vln5w_18",iconContainer:"MessageItem_iconContainer_vln5w_22",icon:"MessageItem_icon_vln5w_22",title:"MessageItem_title_vln5w_36",subtitle:"MessageItem_subtitle_vln5w_46",counter:"MessageItem_counter_vln5w_52",navigation:"MessageItem_navigation_vln5w_60",typeError:"MessageItem_typeError_vln5w_67",typeSuccess:"MessageItem_typeSuccess_vln5w_73",typeWarning:"MessageItem_typeWarning_vln5w_79",typeInformation:"MessageItem_typeInformation_vln5w_85",typeNone:"MessageItem_typeNone_vln5w_86"},c=r.forwardRef((t,n)=>{const{titleText:s,subtitleText:o,counter:m,type:l=i.Error,children:E,className:F,...w}=t,[C,N]=r.useState(!1),f=r.useRef(null),x=!!(E||C);oe(Fe,c.displayName);const{selectMessage:d}=r.useContext(ce),b=O(u.listItem,Reflect.get(u,`type${l}`),F,o&&u.withSubtitle),I=O(u.message,x&&u.withChildren),T=g=>{x&&(d(t),typeof w.onClick=="function"&&w.onClick(g))},L=g=>{typeof w.onKeyDown=="function"&&w.onKeyDown(g),g.code==="Enter"&&T(g)},V=r.Children.count(E);return r.useEffect(()=>{const g=new ResizeObserver(([v])=>{v.target.scrollWidth>v.target.clientWidth?N(!0):N(!1)});return!V&&f.current&&g.observe(f.current),()=>{g.disconnect()}},[V]),e.jsx(fe,{onClick:T,onKeyDown:L,"data-title":s,"data-type":l,type:x?U.Active:U.Inactive,...w,className:b,ref:n,children:e.jsxs(h,{alignItems:D.Center,className:I,children:[e.jsx("div",{className:u.iconContainer,children:e.jsx(A,{name:W(l),className:u.icon})}),e.jsxs(h,{direction:ae.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e.jsx("span",{className:u.title,ref:f,children:s}),s&&o&&e.jsx(_e,{className:u.subtitle,children:o})]}),m!=null&&e.jsx("span",{className:u.counter,children:m}),x&&e.jsx(A,{className:u.navigation,name:pe})]})})});c.displayName="MessageItem";try{c.displayName="MessageItem",c.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="MessageItem",c.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const z=e.jsx(Ie,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Le=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Information Message",type:i.Information,groupName:`Group${s}`,children:z},`InformationMessage${s}`)):[],Oe=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Warning Message",type:i.Warning,groupName:`Group${s}`,children:z},`WarningMessage${s}`)):[],Ae=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(c,{titleText:"Error Message",type:i.Error,groupName:`Group${s}`,children:z},`ErrorMessage${s}`)):[],P=t=>[...Le(t.information),...Oe(t.warning),...Ae(t.error)];try{P.displayName="generateMessageItems",P.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}try{P.displayName="generateMessageItems",P.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const me=r.forwardRef((t,n)=>le.createPortal(e.jsx(ve,{...t,ref:n}),document.body));me.displayName="Dialog";const de=r.forwardRef((t,n)=>le.createPortal(e.jsx(Me,{...t,ref:n}),document.body));de.displayName="ResponsivePopover";const We={title:"User Feedback / MessageView",component:_,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(c,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:i.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsx(c,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:i.Warning,counter:3},3),e.jsx(c,{titleText:"Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!",groupName:"Products"},4),e.jsx(c,{titleText:"Information Message Type without subtitle",type:i.Information,groupName:"Products"},5),e.jsx(c,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:i.None,groupName:"Employees",children:"Informative message"},6)]}},k={},S={name:"MessageView in Dialog",render(t){const n=r.useRef(null),s=r.useRef(null),[o,m]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(M,{onClick:()=>{n.current.show()},children:"Open Dialog"}),e.jsx(me,{ref:n,resizable:!0,style:{width:"500px"},className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(R,{startContent:e.jsxs(h,{alignItems:D.Center,children:[o&&e.jsx(M,{icon:ie,design:B.Transparent,onClick:()=>{m(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(H,{level:q.H4,children:"Messages"})]})}),footer:e.jsx(h,{alignItems:D.Center,justifyContent:re.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(M,{design:B.Transparent,onClick:()=>{var l;(l=n.current)==null||l.close()},children:"Close"})}),children:e.jsx(_,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{m(!0)}})})]})}},j={name:"with MessageViewButton & Popover",render(){const t=r.useRef(null),n=r.useRef(null),[s,o]=r.useState(!1),m={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{counter:3,type:i.Error,onClick:l=>{t.current.showAt(l.target)}}),e.jsx(de,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(R,{startContent:e.jsxs(h,{alignItems:D.Center,children:[s&&e.jsx(M,{design:B.Transparent,icon:"slim-arrow-left",onClick:()=>{o(!1),n.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(H,{level:q.H4,children:"Messages"})]})}),footer:e.jsx(h,{alignItems:D.Center,justifyContent:re.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(M,{design:B.Transparent,onClick:()=>{var l;(l=t.current)==null||l.close()},children:"Close"})}),children:e.jsx(_,{style:{height:"500px",maxWidth:"600px"},ref:n,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{o(!0)},children:P(m)})})]})}};var J,X,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Q=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        <Dialog ref={dialogRef} resizable style={{
        width: '500px'
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const He=["Default","MessageViewInDialog","WithMessageViewButton"],xt=Object.freeze(Object.defineProperty({__proto__:null,Default:k,MessageViewInDialog:S,WithMessageViewButton:j,__namedExportsOrder:He,default:We},Symbol.toStringTag,{value:"Module"}));export{xt as C,k as D,S as M,j as W,c as a};
