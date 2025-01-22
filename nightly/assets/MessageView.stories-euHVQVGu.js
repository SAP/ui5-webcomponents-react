import{j as e}from"./jsx-runtime-CLpGMVip.js";import{o}from"./ValueState-Bg0UWejw.js";import"./index-um0BACm9.js";import{b as J}from"./ListItemTemplate-CkbJDOzl.js";import{i as de}from"./slim-arrow-right-BGBY6--0.js";import{c as E}from"./clsx-B-dksMZM.js";import{r}from"./index-D23YZj_x.js";import{I as L}from"./index-DFqCSedi.js";import{L as pe}from"./index-DVZh2p7o.js";import{L as ge}from"./index-BjX5wsLl.js";import{F as h,a as oe,c as S,b as ae}from"./index-DlWYL6lf.js";import{a as ue,s as fe,e as _e}from"./sys-enter-2-XqI4eejo.js";import{i as he}from"./information-CuCY0lV7.js";import{u as re}from"./useStylesheet-DNyxTWaC.js";import{T as xe}from"./index-DgufeG-1.js";import{B as O}from"./Button-Bn6Q5CAy.js";import{T as H}from"./Title-D0oe8JHs.js";import{a as ie}from"./slim-arrow-left-C9Tu9_Ae.js";import{B as V}from"./index-CnpffF2n.js";import{B as I}from"./index-DaCk7tY-.js";import{D as ye}from"./index-CegvHMDS.js";import{R as we}from"./index-Dfi15ae1.js";import{T as z}from"./index-BJJjzqf0.js";import{M as Ce}from"./index-wb7Gyg2_.js";import{a as ve}from"./List-DgtIRlaK.js";import{W as Ie}from"./WrappingType-CW8URInd.js";import{u as be,s as Te,L as Ne}from"./i18n-defaults-CoZOvFer.js";import{L as je}from"./index-BPhoOnR5.js";import{L as Be}from"./index-BgQUpemO.js";import{a as Pe,S as q}from"./index-C-QuXNwu.js";import{h as De}from"./withWebComponent-DfVDXLfc.js";const le=r.createContext({selectMessage:s=>{}}),Me="@layer ui5-webcomponents-react{._container_1be3f_1{display:flex;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}._container_1be3f_1>*{flex-shrink:0;transition:transform .2s ease-in-out;width:100%}._showDetails_1be3f_15>*{transform:translateX(-100%)}._button_1be3f_21[data-key=Negative]:not([pressed]){color:var(--sapNegativeElementColor)}._button_1be3f_21[data-key=Critical]:not([pressed]){color:var(--sapCriticalElementColor)}._button_1be3f_21[data-key=Positive]:not([pressed]){color:var(--sapPositiveElementColor)}._button_1be3f_21[data-key=Information]:not([pressed]){color:var(--sapInformativeElementColor)}._details_1be3f_39{padding:1rem}._detailsIcon_1be3f_43{flex-shrink:0;margin:0 1rem 0 .5rem}._detailsIcon_1be3f_43[data-type=Negative]{color:var(--sapNegativeElementColor)}._detailsIcon_1be3f_43[data-type=Critical]{color:var(--sapCriticalElementColor)}._detailsIcon_1be3f_43[data-type=Positive]{color:var(--sapPositiveElementColor)}._detailsIcon_1be3f_43[data-type=Information],._detailsIcon_1be3f_43[data-type=None]{color:var(--sapInformativeElementColor)}._detailsTextContainer_1be3f_65{overflow:hidden}._detailsTitle_1be3f_69{margin-block-end:1rem}._detailsText_1be3f_65{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.4;margin-block-end:1rem}._messagesContainer_1be3f_81{height:100%}._detailsContainer_1be3f_85{height:100%}}",f={container:"_container_1be3f_1",showDetails:"_showDetails_1be3f_15",button:"_button_1be3f_21",details:"_details_1be3f_39",detailsIcon:"_detailsIcon_1be3f_43",detailsTextContainer:"_detailsTextContainer_1be3f_65",detailsTitle:"_detailsTitle_1be3f_69",detailsText:"_detailsText_1be3f_65",messagesContainer:"_messagesContainer_1be3f_81",detailsContainer:"_detailsContainer_1be3f_85"},A=s=>{switch(s){case o.Negative:case"Negative":return _e;case o.Positive:case"Positive":return fe;case o.Critical:case"Critical":return ue;default:return he}},ke=s=>(s??[]).map(a=>{var t;return(t=a==null?void 0:a.props)==null?void 0:t.type}).reduce((a,t)=>{const n=t===o.None?o.Information:t;return Object.prototype.hasOwnProperty.call(a,n)&&a[n]++,a},{[o.Negative]:0,[o.Critical]:0,[o.Positive]:0,[o.Information]:0}),Se=s=>{const a=(s??[]).reduce((t,n)=>{var l;const m=((l=n==null?void 0:n.props)==null?void 0:l.groupName)??"";return Object.prototype.hasOwnProperty.call(t,m)?t[m].push(n):t[m]=[n],t},{});return Object.entries(a).sort(([t],[n])=>t===""&&n!==""?-1:t!==""&&n===""?1:0)},F=r.forwardRef((s,a)=>{const{children:t,groupItems:n,showDetailsPageHeader:m,className:l,onItemSelect:y,...b}=s;re(Me,F.displayName);const[x,T]=De(a),N=be("@ui5/webcomponents-react"),[_,w]=r.useState("All"),[d,j]=r.useState(null),C=r.Children.toArray(t),B=ke(C),R=Object.values(B).filter(i=>i>0).length,P=_==="All"?C:C.filter(i=>{var $,G,K;if(!r.isValidElement(i))return!1;const c=i;return _===o.Information?(($=c==null?void 0:c.props)==null?void 0:$.type)===o.Information||((G=c==null?void 0:c.props)==null?void 0:G.type)===o.None:((K=c==null?void 0:c.props)==null?void 0:K.type)===_}),u=Se(P),v=r.useCallback(()=>{j(null)},[j]);r.useEffect(()=>{T.current&&(T.current.navigateBack=v)},[T.current,v]);const ce=i=>{w(i.detail.selectedItems.at(0).dataset.key)},me=E(f.container,l,d&&f.showDetails);return e.jsx("div",{ref:x,...b,className:me,children:e.jsxs(le.Provider,{value:{selectMessage:j},children:[e.jsx("div",{style:{visibility:d?"hidden":"visible"},className:f.messagesContainer,children:!d&&e.jsxs(e.Fragment,{children:[R>1&&e.jsx(V,{startContent:e.jsxs(Pe,{onSelectionChange:ce,children:[e.jsx(q,{"data-key":"All",selected:_==="All",children:N.getText(Te)}),Object.entries(B).map(([i,c])=>c===0?null:e.jsx(q,{"data-key":i,selected:_===i,icon:A(i),className:f.button,children:c},i))]})}),e.jsx(je,{onItemClick:y,noDataText:N.getText(Ne),separators:ve.Inner,children:n?u.map(([i,c])=>i?e.jsx(r.Fragment,{children:i&&e.jsx(Be,{headerText:i,children:c})},i):c):P})]})}),e.jsx("div",{className:f.detailsContainer,children:C.length>0?e.jsxs(e.Fragment,{children:[m&&d&&e.jsx(V,{startContent:e.jsx(I,{design:O.Transparent,icon:ie,onClick:v})}),d&&e.jsxs(h,{className:f.details,children:[e.jsx(L,{"data-type":d.type??o.Negative,name:A(d.type),className:f.detailsIcon}),e.jsxs(h,{direction:oe.Column,className:f.detailsTextContainer,children:[e.jsx(z,{level:H.H5,className:f.detailsTitle,wrappingType:Ie.Normal,children:d.titleText}),e.jsx("div",{className:f.detailsText,children:d.children})]})]})]}):null})]})})});F.displayName="MessageView";const Oe="@layer ui5-webcomponents-react{._listItem_lmpco_1{height:var(--_ui5wcr-MessageViewListItemHeightSingle);min-height:0}._message_lmpco_6{box-sizing:border-box;max-width:100%;overflow:hidden;padding:.25rem 0;padding-inline-end:1rem;width:100%}._withSubtitle_lmpco_15{height:var(--_ui5wcr-MessageViewListItemHeightByLine)}._withChildren_lmpco_19{padding-inline-end:0}._iconContainer_lmpco_23{align-items:center;display:flex;height:2.25rem;justify-content:center;min-width:3rem;width:3rem}._icon_lmpco_23{height:1rem;width:1rem}._title_lmpco_37{color:var(--sapGroup_TitleTextColor);flex:1 1 auto;font-family:var(--sapFontHeaderFamily);font-size:var(--_ui5wcr-MessageItemTitleFontSize);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._title_lmpco_37+._subtitle_lmpco_47{cursor:inherit;margin-block-start:.25rem}._counter_lmpco_53{color:var(--sapContent_MarkerTextColor);flex:none;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);padding-inline-start:1rem}._navigation_lmpco_61{flex-shrink:0;height:.875rem;padding:0 .9375rem;width:.875rem}._typeNegative_lmpco_68 ._icon_lmpco_23{color:var(--sapNegativeElementColor)}._typePositive_lmpco_74 ._icon_lmpco_23{color:var(--sapPositiveElementColor)}._typeCritical_lmpco_80 ._icon_lmpco_23{color:var(--sapCriticalElementColor)}:is(._typeInformation_lmpco_86,._typeNone_lmpco_87) ._icon_lmpco_23{color:var(--sapInformativeElementColor)}}",p={listItem:"_listItem_lmpco_1",message:"_message_lmpco_6",withSubtitle:"_withSubtitle_lmpco_15",withChildren:"_withChildren_lmpco_19",iconContainer:"_iconContainer_lmpco_23",icon:"_icon_lmpco_23",title:"_title_lmpco_37",subtitle:"_subtitle_lmpco_47",counter:"_counter_lmpco_53",navigation:"_navigation_lmpco_61",typeNegative:"_typeNegative_lmpco_68",typePositive:"_typePositive_lmpco_74",typeCritical:"_typeCritical_lmpco_80",typeInformation:"_typeInformation_lmpco_86",typeNone:"_typeNone_lmpco_87"},g=r.forwardRef((s,a)=>{const{titleText:t,subtitleText:n,counter:m,type:l=o.Negative,children:y,className:b,...x}=s,[T,N]=r.useState(!1),_=r.useRef(null),w=!!(y||T);re(Oe,g.displayName);const{selectMessage:d}=r.useContext(le),j=E(p.listItem,Reflect.get(p,`type${l}`),b,n&&p.withSubtitle),C=E(p.message,w&&p.withChildren),B=u=>{w&&(d(s),typeof x.onClick=="function"&&x.onClick(u))},R=u=>{typeof x.onKeyDown=="function"&&x.onKeyDown(u),u.code==="Enter"&&B(u)},P=r.Children.count(y);return r.useEffect(()=>{const u=new ResizeObserver(([v])=>{v.target.scrollWidth>v.target.clientWidth?N(!0):N(!1)});return!P&&_.current&&u.observe(_.current),()=>{u.disconnect()}},[P]),e.jsx(ge,{onClick:B,onKeyDown:R,"data-title":t,"data-type":l,type:w?J.Active:J.Inactive,...x,className:j,ref:a,children:e.jsxs(h,{alignItems:S.Center,className:C,children:[e.jsx("div",{className:p.iconContainer,children:e.jsx(L,{name:A(l),className:p.icon})}),e.jsxs(h,{direction:oe.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[t&&e.jsx("span",{className:p.title,ref:_,children:t}),t&&n&&e.jsx(pe,{className:p.subtitle,children:n})]}),m!=null&&e.jsx("span",{className:p.counter,children:m}),w&&e.jsx(L,{className:p.navigation,name:de})]})})});g.displayName="MessageItem";const W=e.jsx(xe,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Fe=s=>new Array(s).fill("").map((a,t)=>e.jsx(g,{titleText:"Information Message",type:o.Information,groupName:`Group${t}`,children:W},`InformationMessage${t}`)),Ve=s=>new Array(s).fill("").map((a,t)=>e.jsx(g,{titleText:"Warning Message",type:o.Critical,groupName:`Group${t}`,children:W},`WarningMessage${t}`)),Re=s=>new Array(s).fill("").map((a,t)=>e.jsx(g,{titleText:"Error Message",type:o.Negative,groupName:`Group${t}`,children:W},`ErrorMessage${t}`)),Ee=s=>[...Fe(s.information),...Ve(s.warning),...Re(s.error)],Le={title:"User Feedback / MessageView",component:F,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(g,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:o.Negative,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsx(g,{titleText:"Warning Message Type",subtitleText:"Warning without details",type:o.Critical,counter:3},3),e.jsx(g,{titleText:"Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!",groupName:"Products"},4),e.jsx(g,{titleText:"Information Message Type without subtitle",type:o.Information,groupName:"Products"},5),e.jsx(g,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:o.None,groupName:"Employees",children:"Informative message"},6),e.jsx(g,{titleText:"Error Message Type",type:o.Negative,counter:3},7)]}},D={},M={name:"MessageView in Dialog",render(s){const[a,t]=r.useState(!1),n=r.useRef(null),[m,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>{t(!0)},children:"Open Dialog"}),e.jsx(ye,{resizable:!0,style:{width:"500px"},className:"contentPartNoPadding headerPartNoPadding",open:a,onClose:()=>{t(!1),n.current.navigateBack()},header:e.jsx(V,{startContent:e.jsxs(h,{alignItems:S.Center,children:[m&&e.jsx(I,{icon:ie,design:O.Transparent,onClick:()=>{l(!1),n.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(z,{level:H.H4,children:"Messages"})]})}),footer:e.jsx(h,{alignItems:S.Center,justifyContent:ae.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:O.Transparent,onClick:()=>{t(!1)},children:"Close"})}),children:e.jsx(F,{ref:n,...s,showDetailsPageHeader:!1,onItemSelect:()=>{l(!0)}})})]})}},k={name:"with MessageViewButton & Popover",render(){const s=r.useRef(null),a=r.useRef(null),[t,n]=r.useState(!1),[m,l]=r.useState(!1),y={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{counter:3,type:o.Negative,onClick:b=>{s.current.opener=b.currentTarget,l(!0)}}),e.jsx(we,{ref:s,open:m,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",onClose:()=>{a.current.navigateBack(),l(!1)},header:e.jsx(V,{startContent:e.jsxs(h,{alignItems:S.Center,children:[t&&e.jsx(I,{design:O.Transparent,icon:"slim-arrow-left",onClick:()=>{n(!1),a.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(z,{level:H.H4,children:"Messages"})]})}),footer:e.jsx(h,{alignItems:S.Center,justifyContent:ae.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:O.Transparent,onClick:()=>{l(!1)},children:"Close"})}),children:e.jsx(F,{style:{height:"500px",maxWidth:"600px"},ref:a,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{n(!0)},children:Ee(y)})})]})}};var U,X,Q;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(Q=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'MessageView in Dialog',
  render(args) {
    const [open, setOpen] = useState(false);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog resizable style={{
        width: '500px'
      }} className="contentPartNoPadding headerPartNoPadding" open={open} onClose={() => {
        setOpen(false);
        messageViewRef.current.navigateBack();
      }} header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
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
          setOpen(false);
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
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ne;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'with MessageViewButton & Popover',
  render() {
    const ref = useRef(null);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const [open, setOpen] = useState(false);
    const numberOfItems = {
      information: 2,
      warning: 5,
      success: 3,
      error: 3
    };
    return <>
        <MessageViewButton counter={3} type={ValueState.Negative} onClick={e => {
        ref.current.opener = e.currentTarget;
        setOpen(true);
      }} />
        <ResponsivePopover ref={ref} open={open} headerText="Messages" className="contentPartNoPadding headerPartNoPadding" onClose={() => {
        messageViewRef.current.navigateBack();
        setOpen(false);
      }} header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
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
          setOpen(false);
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
}`,...(ne=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Ae=["Default","MessageViewInDialog","WithMessageViewButton"],xt=Object.freeze(Object.defineProperty({__proto__:null,Default:D,MessageViewInDialog:M,WithMessageViewButton:k,__namedExportsOrder:Ae,default:Le},Symbol.toStringTag,{value:"Module"}));export{xt as C,D,M,k as W,g as a};
