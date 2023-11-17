import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{i as ue}from"./slim-arrow-right-v6ItARyR.js";import{T as a}from"./ThemingParameters-UghqSl-x.js";import{C as q}from"./CssSizeVariables-IMpNFjIe.js";import{c as V}from"./clsx-2Jv0kmJG.js";import{r as c}from"./index-OjgoNOWw.js";import{c as re}from"./react-jss.esm-AmlvxLhk.js";import{C as pe}from"./index-O4bSbcpm.js";import{I as F}from"./index-X4bIzM78.js";import{L as ge}from"./index-nNeIKPnb.js";import{F as f,b as ne,c as v,a as oe}from"./index-ZYxd7chN.js";import{a as fe}from"./alert-TGfQazfI.js";import{i as he,s as xe,e as ye}from"./information-WfdY8QHP.js";import{V as o}from"./ValueState-I_-hGNIb.js";import{L as G}from"./ListItem-rKilMSpt.js";import{T as we}from"./index-S1zyQWjr.js";import{a as ae}from"./slim-arrow-left-uLSkx8_6.js";import{B as D}from"./index-iScefSri.js";import{B as I}from"./index-2S6zoQWg.js";import{D as Ie}from"./CodeGen-EGwsrl-Y.js";import{L as Ce}from"./index-pvnqkZ_E.js";import{R as Te}from"./CodeGen-vDS0h8Hp.js";import{T as A}from"./index-F_HLscyQ.js";import{M as Ne}from"./index-qNL3pJw4.js";import{u as Se,B as je,L as ve}from"./i18n-defaults-TsGk1om8.js";import{G as Me}from"./index-BOW2zZAw.js";import{L as be}from"./index-P2VtUv3d.js";import{S as Be,a as K}from"./index-w-ekOqvk.js";import{u as Pe}from"./withWebComponent-ceo0jn6D.js";import{B as M}from"./Button-a5xMWTkk.js";import{T as O}from"./Title-QpYFGHiM.js";import{W as De}from"./WrappingType-avPrqc94.js";const ie=c.createContext({selectMessage:t=>{}}),R=t=>{switch(t){case o.Error:case"Error":return ye;case o.Success:case"Success":return xe;case o.Warning:case"Warning":return fe;default:return he}},_e=t=>(t??[]).map(r=>{var s;return(s=r==null?void 0:r.props)==null?void 0:s.type}).reduce((r,s)=>{const i=s===o.None?o.Information:s;return r.hasOwnProperty(i)&&r[i]++,r},{[o.Error]:0,[o.Warning]:0,[o.Success]:0,[o.Information]:0}),ke=t=>{const r=(t??[]).reduce((s,i)=>{var m;const d=((m=i==null?void 0:i.props)==null?void 0:m.groupName)??"";return s.hasOwnProperty(d)?s[d].push(i):s[d]=[i],s},{});return Object.entries(r).sort((s,i)=>s[0].localeCompare(i[0]))},Ee=re({container:{width:"100%",overflowX:"hidden",overflowY:"auto",display:"flex",height:"100%","& > *":{width:"100%",flexShrink:0,transition:"transform 200ms ease-in-out"}},showDetails:{"& > *":{transform:"translateX(-100%)"}},button:{'&[data-key="Error"]:not([pressed])':{color:a.sapNegativeElementColor},'&[data-key="Warning"]:not([pressed])':{color:a.sapCriticalElementColor},'&[data-key="Success"]:not([pressed])':{color:a.sapPositiveElementColor},'&[data-key="Information"]:not([pressed])':{color:a.sapNeutralElementColor}},detailsContainer:{padding:"1rem"},detailsIcon:{flexShrink:0,margin:"0 1rem 0 0.5rem",'&[data-type="Error"]':{color:a.sapNegativeElementColor},'&[data-type="Warning"]':{color:a.sapCriticalElementColor},'&[data-type="Success"]':{color:a.sapPositiveElementColor},'&[data-type="Information"],&[data-type="None"]':{color:a.sapNeutralElementColor}},detailsTextContainer:{overflow:"hidden"},detailsTitle:{marginBottom:"1rem"},detailsText:{fontFamily:a.sapFontFamily,fontSize:a.sapFontSize,lineHeight:1.4,color:a.sapTextColor,marginBottom:"1rem"}},{name:"MessageView"}),C=c.forwardRef((t,r)=>{const{children:s,groupItems:i,showDetailsPageHeader:d,className:m,onItemSelect:w,...k}=t,[h,T]=Pe(r),l=Ee(),b=Se("@ui5/webcomponents-react"),[x,B]=c.useState("All"),[p,g]=c.useState(null),P=c.Children.toArray(s),W=_e(P),le=Object.values(W).filter(n=>n>0).length,H=x==="All"?P:P.filter(n=>{var y,z,$;return c.isValidElement(n)?x===o.Information?((y=n==null?void 0:n.props)==null?void 0:y.type)===o.Information||((z=n==null?void 0:n.props)==null?void 0:z.type)===o.None:(($=n==null?void 0:n.props)==null?void 0:$.type)===x:!1}),ce=ke(H),E=c.useCallback(()=>{g(null)},[g]);c.useEffect(()=>{T.current&&(T.current.navigateBack=E)},[T.current,E]);const me=n=>{B(n.detail.selectedItem.dataset.key)},de=V(l.container,m,p&&l.showDetails);return e.jsx("div",{ref:h,...k,className:de,children:e.jsxs(ie.Provider,{value:{selectMessage:g},children:[e.jsxs("div",{style:{visibility:p?"hidden":"visible"},children:[le>1&&e.jsx(D,{startContent:e.jsxs(Be,{onSelectionChange:me,children:[e.jsx(K,{"data-key":"All",pressed:x==="All",children:b.getText(je)}),Object.entries(W).map(([n,y])=>y===0?null:e.jsx(K,{"data-key":n,pressed:x===n,icon:R(n),className:l.button,children:y},n))]})}),e.jsx(be,{onItemClick:w,noDataText:b.getText(ve),children:i?ce.map(([n,y])=>e.jsxs(c.Fragment,{children:[n&&e.jsx(Me,{children:n}),y]},n)):H})]}),e.jsx("div",{children:P.length>0?e.jsxs(e.Fragment,{children:[d&&p&&e.jsx(D,{startContent:e.jsx(I,{design:M.Transparent,icon:ae,onClick:E})}),p&&e.jsxs(f,{className:l.detailsContainer,children:[e.jsx(F,{"data-type":p.type,name:R(p.type),className:l.detailsIcon}),e.jsxs(f,{direction:ne.Column,className:l.detailsTextContainer,children:[e.jsx(A,{level:O.H5,className:l.detailsTitle,wrappingType:De.Normal,children:p.titleText}),e.jsx("div",{className:l.detailsText,children:p.children})]})]})]}):null})]})})});C.displayName="MessageView";try{C.displayName="MessageView",C.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Ve=re({listItem:{height:q.ui5WcrMessageViewListItemHeightSingle},message:{padding:"0.25rem 0",width:"100%",maxWidth:"100%",overflow:"hidden",paddingRight:"1rem",boxSizing:"border-box"},withSubtitle:{height:q.ui5WcrMessageViewListItemHeightByLine},withChildren:{paddingRight:"0rem"},iconContainer:{width:"3rem",minWidth:"3rem",height:"2.25rem",display:"flex",alignItems:"center",justifyContent:"center"},icon:{width:"1rem",height:"1rem"},title:{fontFamily:a.sapFontHeaderFamily,fontSize:a.sapFontHeader6Size,color:a.sapGroup_TitleTextColor,maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:"1 1 auto","& + $subtitle":{marginTop:"0.25rem",cursor:"inherit"}},subtitle:{},counter:{color:a.sapContent_MarkerTextColor,fontFamily:a.sapFontFamily,fontSize:a.sapFontSize,paddingLeft:"1rem",flex:"none"},navigation:{height:"0.875rem",width:"0.875rem",padding:"0 0.9375rem",flexShrink:0},typeError:{"& $icon":{color:a.sapNegativeElementColor}},typeSuccess:{"& $icon":{color:a.sapPositiveElementColor}},typeWarning:{" & $icon":{color:a.sapCriticalElementColor}},typeInformation:{"& $icon":{color:a.sapNeutralElementColor}},typeNone:{"& $icon":{color:a.sapNeutralElementColor}}},{name:"MessageItem"}),u=c.forwardRef((t,r)=>{const{titleText:s,subtitleText:i,counter:d,type:m=o.Error,children:w,className:k,...h}=t,{selectMessage:T}=c.useContext(ie),l=Ve(),b=V(l.listItem,Reflect.get(l,`type${m}`),k,i&&l.withSubtitle),x=V(l.message,w&&l.withChildren),B=g=>{w&&(T(t),typeof h.onClick=="function"&&h.onClick(g))},p=g=>{typeof h.onKeyDown=="function"&&h.onKeyDown(g),g.code==="Enter"&&B(g)};return e.jsx(pe,{onClick:B,onKeyDown:p,"data-title":s,"data-type":m,type:w?G.Active:G.Inactive,...h,className:b,ref:r,children:e.jsxs(f,{alignItems:v.Center,className:x,children:[e.jsx("div",{className:l.iconContainer,children:e.jsx(F,{name:R(m),className:l.icon})}),e.jsxs(f,{direction:ne.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e.jsx("span",{className:l.title,children:s}),i&&e.jsx(ge,{className:l.subtitle,children:i})]}),d!=null&&e.jsx("span",{className:l.counter,children:d}),w&&e.jsx(F,{className:l.navigation,name:ue})]})})});u.displayName="MessageItem";try{u.displayName="MessageItem",u.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=e.jsx(we,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Fe=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:"Information Message",type:o.Information,groupName:`Group${s}`,children:_})):[],Re=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:"Success Message",type:o.Success,groupName:`Group${s}`,children:_})):[],Le=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:"Warning Message",type:o.Warning,groupName:`Group${s}`,children:_})):[],Ae=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:"Error Message",type:o.Error,groupName:`Group${s}`,children:_})):[],L=t=>[...Fe(t.information),...Le(t.warning),...Re(t.success),...Ae(t.error)];try{L.displayName="generateMessageItems",L.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const Oe={title:"User Feedback / MessageView",component:C,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(u,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:o.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsxs(u,{titleText:"Success Message Type",subtitleText:"You can also use subtitles",type:o.Success,counter:2,children:["This is a success message! You can even use"," ",e.jsx(Ce,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"links here"}),"."]},2),e.jsx(u,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:o.Warning,counter:3},3),e.jsx(u,{titleText:"Empty Message Type",groupName:"Products"},4),e.jsx(u,{titleText:"Information Message Type without subtitle",type:o.Information,groupName:"Products"},5),e.jsx(u,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:o.None,groupName:"Employees",children:"Informative message"},6)]}},N={},S={name:"MessageView in Dialog",render(t){const r=c.useRef(null),s=c.useRef(null),[i,d]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>{r.current.show()},children:"Open Dialog"}),e.jsx(Ie,{ref:r,style:{width:"400px"},className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(D,{startContent:e.jsxs(f,{alignItems:v.Center,children:[i&&e.jsx(I,{icon:ae,design:M.Transparent,onClick:()=>{d(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(A,{level:O.H4,children:"Messages"})]})}),footer:e.jsx(f,{alignItems:v.Center,justifyContent:oe.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:M.Transparent,onClick:()=>{var m;(m=r.current)==null||m.close()},children:"Close"})}),children:e.jsx(C,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{d(!0)}})})]})}},j={name:"with MessageViewButton & Popover",render(){const t=c.useRef(null),r=c.useRef(null),[s,i]=c.useState(!1),d={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{counter:3,type:o.Error,onClick:m=>{t.current.showAt(m.target)}}),e.jsx(Te,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(D,{startContent:e.jsxs(f,{alignItems:v.Center,children:[s&&e.jsx(I,{design:M.Transparent,icon:"slim-arrow-left",onClick:()=>{i(!1),r.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(A,{level:O.H4,children:"Messages"})]})}),footer:e.jsx(f,{alignItems:v.Center,justifyContent:oe.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:M.Transparent,onClick:()=>{var m;(m=t.current)==null||m.close()},children:"Close"})}),children:e.jsx(C,{ref:r,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{i(!0)},children:L(d)})})]})}};var U,J,Y;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(Y=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var X,Q,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,se;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
          <MessageView ref={messageViewRef} showDetailsPageHeader={false} groupItems onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}>
            {generateMessageItems(numberOfItems)}
          </MessageView>
        </ResponsivePopover>
      </>;
  }
}`,...(se=(te=j.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const We=["Default","MessageViewInDialog","WithMessageViewButton"],It=Object.freeze(Object.defineProperty({__proto__:null,Default:N,MessageViewInDialog:S,WithMessageViewButton:j,__namedExportsOrder:We,default:Oe},Symbol.toStringTag,{value:"Module"}));export{It as C,N as D,S as M,j as W,u as a};
//# sourceMappingURL=MessageView.stories-E5RTUcxL.js.map
