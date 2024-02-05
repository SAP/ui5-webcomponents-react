import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{i as pe}from"./slim-arrow-right-KfBcfSXq.js";import{T as l}from"./ThemingParameters-UghqSl-x.js";import{C as V}from"./CssSizeVariables-loCRUewX.js";import{c as F}from"./clsx-Zbgk8kpT.js";import{r as c}from"./index-OjgoNOWw.js";import{c as ne}from"./react-jss.esm-tmBtHfec.js";import{C as ue}from"./index-4BnItbZe.js";import{I as R}from"./index-Nm6nG7pm.js";import{L as ge}from"./index-_DtB95iI.js";import{F as f,a as re,c as v,b as oe}from"./index-sHoRIkfF.js";import{a as fe}from"./alert-wj9gYQbS.js";import{i as he,s as xe,e as ye}from"./information-LBZ9LJI-.js";import{V as o}from"./ValueState-I_-hGNIb.js";import{a as q}from"./ListItem-sWdvSqFs.js";import{T as we}from"./index-G1ylA0vb.js";import{a as ae}from"./slim-arrow-left-qhRVhGsr.js";import{B as D}from"./index-0aUMUPVq.js";import{B as I}from"./index-Mc-QwGUl.js";import{D as Ie}from"./CodeGen-3TXPbxw2.js";import{L as Ce}from"./index-xTZ1p4E3.js";import{R as Te}from"./CodeGen-W0r5UDLr.js";import{T as O}from"./index-EhCSnwTy.js";import{M as Se}from"./index-1ZaOWbEH.js";import{u as Ne,T as je,X as ve}from"./i18n-defaults-a20Pyi7e.js";import{G as Me}from"./index-EQ8gBz82.js";import{L as be}from"./index-cR1Fxooc.js";import{S as Be,a as K}from"./index-i5JEK_G-.js";import{u as Pe}from"./withWebComponent-UxvJwa3A.js";import{G as De}from"./GlobalStyleClasses-kWTEndz_.js";import{B as M}from"./Button-kjIKsCqk.js";import{T as W}from"./Title-qniGFt20.js";import{W as Ee}from"./WrappingType-avPrqc94.js";const ie=c.createContext({selectMessage:t=>{}}),L=t=>{switch(t){case o.Error:case"Error":return ye;case o.Success:case"Success":return xe;case o.Warning:case"Warning":return fe;default:return he}},ke=t=>(t??[]).map(n=>{var s;return(s=n==null?void 0:n.props)==null?void 0:s.type}).reduce((n,s)=>{const i=s===o.None?o.Information:s;return n.hasOwnProperty(i)&&n[i]++,n},{[o.Error]:0,[o.Warning]:0,[o.Success]:0,[o.Information]:0}),_e=t=>{const n=(t??[]).reduce((s,i)=>{var m;const d=((m=i==null?void 0:i.props)==null?void 0:m.groupName)??"";return s.hasOwnProperty(d)?s[d].push(i):s[d]=[i],s},{});return Object.entries(n).sort((s,i)=>s[0].localeCompare(i[0]))},Ve=ne({container:{width:"100%",overflowX:"hidden",overflowY:"auto",display:"flex",height:"100%","& > *":{width:"100%",flexShrink:0,transition:"transform 200ms ease-in-out"}},showDetails:{"& > *":{transform:"translateX(-100%)"}},button:{'&[data-key="Error"]:not([pressed])':{color:l.sapNegativeElementColor},'&[data-key="Warning"]:not([pressed])':{color:l.sapCriticalElementColor},'&[data-key="Success"]:not([pressed])':{color:l.sapPositiveElementColor},'&[data-key="Information"]:not([pressed])':{color:l.sapInformativeElementColor}},details:{padding:"1rem"},detailsIcon:{flexShrink:0,margin:"0 1rem 0 0.5rem",'&[data-type="Error"]':{color:l.sapNegativeElementColor},'&[data-type="Warning"]':{color:l.sapCriticalElementColor},'&[data-type="Success"]':{color:l.sapPositiveElementColor},'&[data-type="Information"],&[data-type="None"]':{color:l.sapInformativeElementColor}},detailsTextContainer:{overflow:"hidden"},detailsTitle:{marginBlockEnd:"1rem"},detailsText:{fontFamily:l.sapFontFamily,fontSize:l.sapFontSize,lineHeight:1.4,color:l.sapTextColor,marginBlockEnd:"1rem"},messagesContainer:{height:"100%"},detailsContainer:{height:"100%"}},{name:"MessageView"}),C=c.forwardRef((t,n)=>{const{children:s,groupItems:i,showDetailsPageHeader:d,className:m,onItemSelect:w,...k}=t,[h,T]=Pe(n),a=Ve(),b=Ne("@ui5/webcomponents-react"),[x,B]=c.useState("All"),[u,g]=c.useState(null),P=c.Children.toArray(s),H=ke(P),le=Object.values(H).filter(r=>r>0).length,$=x==="All"?P:P.filter(r=>{var y,z,G;return c.isValidElement(r)?x===o.Information?((y=r==null?void 0:r.props)==null?void 0:y.type)===o.Information||((z=r==null?void 0:r.props)==null?void 0:z.type)===o.None:((G=r==null?void 0:r.props)==null?void 0:G.type)===x:!1}),ce=_e($),_=c.useCallback(()=>{g(null)},[g]);c.useEffect(()=>{T.current&&(T.current.navigateBack=_)},[T.current,_]);const me=r=>{B(r.detail.selectedItem.dataset.key)},de=F(a.container,De.sapScrollBar,m,u&&a.showDetails);return e.jsx("div",{ref:h,...k,className:de,children:e.jsxs(ie.Provider,{value:{selectMessage:g},children:[e.jsx("div",{style:{visibility:u?"hidden":"visible"},className:a.messagesContainer,children:!u&&e.jsxs(e.Fragment,{children:[le>1&&e.jsx(D,{startContent:e.jsxs(Be,{onSelectionChange:me,children:[e.jsx(K,{"data-key":"All",pressed:x==="All",children:b.getText(je)}),Object.entries(H).map(([r,y])=>y===0?null:e.jsx(K,{"data-key":r,pressed:x===r,icon:L(r),className:a.button,children:y},r))]})}),e.jsx(be,{onItemClick:w,noDataText:b.getText(ve),children:i?ce.map(([r,y])=>e.jsxs(c.Fragment,{children:[r&&e.jsx(Me,{children:r}),y]},r)):$})]})}),e.jsx("div",{className:a.detailsContainer,children:P.length>0?e.jsxs(e.Fragment,{children:[d&&u&&e.jsx(D,{startContent:e.jsx(I,{design:M.Transparent,icon:ae,onClick:_})}),u&&e.jsxs(f,{className:a.details,children:[e.jsx(R,{"data-type":u.type,name:L(u.type),className:a.detailsIcon}),e.jsxs(f,{direction:re.Column,className:a.detailsTextContainer,children:[e.jsx(O,{level:W.H5,className:a.detailsTitle,wrappingType:Ee.Normal,children:u.titleText}),e.jsx("div",{className:a.detailsText,children:u.children})]})]})]}):null})]})})});C.displayName="MessageView";try{C.displayName="MessageView",C.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Fe=ne({listItem:{height:V.ui5WcrMessageViewListItemHeightSingle},message:{padding:"0.25rem 0",width:"100%",maxWidth:"100%",overflow:"hidden",paddingInlineEnd:"1rem",boxSizing:"border-box"},withSubtitle:{height:V.ui5WcrMessageViewListItemHeightByLine},withChildren:{paddingInlineEnd:"0rem"},iconContainer:{width:"3rem",minWidth:"3rem",height:"2.25rem",display:"flex",alignItems:"center",justifyContent:"center"},icon:{width:"1rem",height:"1rem"},title:{fontFamily:l.sapFontHeaderFamily,fontSize:V.ui5WcrMessageItemTitleFontSize,color:l.sapGroup_TitleTextColor,maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:"1 1 auto","& + $subtitle":{marginBlockStart:"0.25rem",cursor:"inherit"}},subtitle:{},counter:{color:l.sapContent_MarkerTextColor,fontFamily:l.sapFontFamily,fontSize:l.sapFontSize,paddingInlineStart:"1rem",flex:"none"},navigation:{height:"0.875rem",width:"0.875rem",padding:"0 0.9375rem",flexShrink:0},typeError:{"& $icon":{color:l.sapNegativeElementColor}},typeSuccess:{"& $icon":{color:l.sapPositiveElementColor}},typeWarning:{" & $icon":{color:l.sapCriticalElementColor}},typeInformation:{"& $icon":{color:l.sapInformativeElementColor}},typeNone:{"& $icon":{color:l.sapInformativeElementColor}}},{name:"MessageItem"}),p=c.forwardRef((t,n)=>{const{titleText:s,subtitleText:i,counter:d,type:m=o.Error,children:w,className:k,...h}=t,{selectMessage:T}=c.useContext(ie),a=Fe(),b=F(a.listItem,Reflect.get(a,`type${m}`),k,i&&a.withSubtitle),x=F(a.message,w&&a.withChildren),B=g=>{w&&(T(t),typeof h.onClick=="function"&&h.onClick(g))},u=g=>{typeof h.onKeyDown=="function"&&h.onKeyDown(g),g.code==="Enter"&&B(g)};return e.jsx(ue,{onClick:B,onKeyDown:u,"data-title":s,"data-type":m,type:w?q.Active:q.Inactive,...h,className:b,ref:n,children:e.jsxs(f,{alignItems:v.Center,className:x,children:[e.jsx("div",{className:a.iconContainer,children:e.jsx(R,{name:L(m),className:a.icon})}),e.jsxs(f,{direction:re.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e.jsx("span",{className:a.title,children:s}),i&&e.jsx(ge,{className:a.subtitle,children:i})]}),d!=null&&e.jsx("span",{className:a.counter,children:d}),w&&e.jsx(R,{className:a.navigation,name:pe})]})})});p.displayName="MessageItem";try{p.displayName="MessageItem",p.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const E=e.jsx(we,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Re=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(p,{titleText:"Information Message",type:o.Information,groupName:`Group${s}`,children:E},`InformationMessage${s}`)):[],Le=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(p,{titleText:"Success Message",type:o.Success,groupName:`Group${s}`,children:E},`SuccessMessage${s}`)):[],Ae=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(p,{titleText:"Warning Message",type:o.Warning,groupName:`Group${s}`,children:E},`WarningMessage${s}`)):[],Oe=t=>t?new Array(t).fill("").map((n,s)=>e.jsx(p,{titleText:"Error Message",type:o.Error,groupName:`Group${s}`,children:E},`ErrorMessage${s}`)):[],A=t=>[...Re(t.information),...Ae(t.warning),...Le(t.success),...Oe(t.error)];try{A.displayName="generateMessageItems",A.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const We={title:"User Feedback / MessageView",component:C,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(p,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:o.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsxs(p,{titleText:"Success Message Type",subtitleText:"You can also use subtitles",type:o.Success,counter:2,children:["This is a success message! You can even use"," ",e.jsx(Ce,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"links here"}),"."]},2),e.jsx(p,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:o.Warning,counter:3},3),e.jsx(p,{titleText:"Empty Message Type",groupName:"Products"},4),e.jsx(p,{titleText:"Information Message Type without subtitle",type:o.Information,groupName:"Products"},5),e.jsx(p,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:o.None,groupName:"Employees",children:"Informative message"},6)]}},S={},N={name:"MessageView in Dialog",render(t){const n=c.useRef(null),s=c.useRef(null),[i,d]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>{n.current.show()},children:"Open Dialog"}),e.jsx(Ie,{ref:n,style:{width:"400px"},className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(D,{startContent:e.jsxs(f,{alignItems:v.Center,children:[i&&e.jsx(I,{icon:ae,design:M.Transparent,onClick:()=>{d(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(O,{level:W.H4,children:"Messages"})]})}),footer:e.jsx(f,{alignItems:v.Center,justifyContent:oe.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:M.Transparent,onClick:()=>{var m;(m=n.current)==null||m.close()},children:"Close"})}),children:e.jsx(C,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{d(!0)}})})]})}},j={name:"with MessageViewButton & Popover",render(){const t=c.useRef(null),n=c.useRef(null),[s,i]=c.useState(!1),d={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Se,{counter:3,type:o.Error,onClick:m=>{t.current.showAt(m.target)}}),e.jsx(Te,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(D,{startContent:e.jsxs(f,{alignItems:v.Center,children:[s&&e.jsx(I,{design:M.Transparent,icon:"slim-arrow-left",onClick:()=>{i(!1),n.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(O,{level:W.H4,children:"Messages"})]})}),footer:e.jsx(f,{alignItems:v.Center,justifyContent:oe.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(I,{design:M.Transparent,onClick:()=>{var m;(m=t.current)==null||m.close()},children:"Close"})}),children:e.jsx(C,{style:{height:"500px",maxWidth:"600px"},ref:n,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{i(!0)},children:A(d)})})]})}};var U,J,X;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(X=(J=S.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Q,Z;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,se;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=j.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const He=["Default","MessageViewInDialog","WithMessageViewButton"],Tt=Object.freeze(Object.defineProperty({__proto__:null,Default:S,MessageViewInDialog:N,WithMessageViewButton:j,__namedExportsOrder:He,default:We},Symbol.toStringTag,{value:"Module"}));export{Tt as C,S as D,N as M,j as W,p as a};
