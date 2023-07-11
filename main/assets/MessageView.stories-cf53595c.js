import{j as e}from"./jsx-runtime-5926aa06.js";import{i as pe}from"./slim-arrow-right-ccb981dd.js";import{T as a}from"./ThemingParameters-7e2e4e30.js";import{b as G}from"./CssSizeVariables-cd649ef5.js";import{c as F}from"./clsx.m-1229b3e0.js";import{r as c}from"./index-ebeaab24.js";import{c as ne}from"./react-jss.esm-022ab528.js";import{C as ge}from"./index-f887d660.js";import{I as R}from"./index-7072ca7c.js";import{L as fe}from"./index-87fc4735.js";import{F as g,a as oe,c as S,b as ae}from"./index-ea625d40.js";import{i as he,a as xe,s as ye,e as we}from"./information-872f55da.js";import{V as o}from"./ValueState-ab6838cc.js";import{a as U}from"./ListItem-6bbd1cb0.js";import{T as v}from"./index-562e1433.js";import{a as ie}from"./slim-arrow-left-9b1e01a2.js";import{B as P}from"./index-b430aefa.js";import{B as y}from"./index-a896842c.js";import{D as Ie}from"./CodeGen-7728bbfb.js";import{L as Ce}from"./index-9862a48d.js";import{R as je}from"./CodeGen-a127c6d5.js";import{T as O}from"./index-8d6ce1af.js";import{M as Ne}from"./index-5dc36745.js";import{u as Te,a8 as Se,aB as Me}from"./i18n-defaults-ec343d3a.js";import{G as ve}from"./index-7ab5d096.js";import{L as be}from"./index-3e79a0f3.js";import{S as Be,a as J}from"./index-5059514f.js";import{u as Pe}from"./withWebComponent-d4224c1c.js";import{B as M}from"./Button-427cd4bb.js";import{T as H}from"./Title-e1d9d87f.js";const le=c.createContext({selectMessage:t=>{}}),L=t=>{switch(t){case o.Error:case"Error":return we;case o.Success:case"Success":return ye;case o.Warning:case"Warning":return xe;default:return he}},De=t=>(t??[]).map(r=>{var s;return(s=r==null?void 0:r.props)==null?void 0:s.type}).reduce((r,s)=>{const i=s===o.None?o.Information:s;return r.hasOwnProperty(i)&&r[i]++,r},{[o.Error]:0,[o.Warning]:0,[o.Success]:0,[o.Information]:0}),_e=t=>{const r=(t??[]).reduce((s,i)=>{var m;const d=((m=i==null?void 0:i.props)==null?void 0:m.groupName)??"";return s.hasOwnProperty(d)?s[d].push(i):s[d]=[i],s},{});return Object.entries(r).sort((s,i)=>s[0].localeCompare(i[0]))},ke=ne({container:{width:"100%",overflowX:"hidden",overflowY:"auto",display:"flex",height:"100%","& > *":{width:"100%",flexShrink:0,transition:"transform 200ms ease-in-out"}},showDetails:{"& > *":{transform:"translateX(-100%)"}},button:{'&[data-key="Error"]:not([pressed])':{color:a.sapNegativeElementColor},'&[data-key="Warning"]:not([pressed])':{color:a.sapCriticalElementColor},'&[data-key="Success"]:not([pressed])':{color:a.sapPositiveElementColor},'&[data-key="Information"]:not([pressed])':{color:a.sapNeutralElementColor}},detailsContainer:{padding:"1rem"},detailsIcon:{flexShrink:0,margin:"0 1rem 0 0.5rem",'&[data-type="Error"]':{color:a.sapNegativeElementColor},'&[data-type="Warning"]':{color:a.sapCriticalElementColor},'&[data-type="Success"]':{color:a.sapPositiveElementColor},'&[data-type="Information"],&[data-type="None"]':{color:a.sapNeutralElementColor}},detailsTitle:{marginBottom:"1rem"},detailsText:{fontFamily:a.sapFontFamily,fontSize:a.sapFontSize,lineHeight:1.4,color:a.sapTextColor,marginBottom:"1rem"}},{name:"MessageView"}),w=c.forwardRef((t,r)=>{const{children:s,groupItems:i,showDetailsPageHeader:d,className:m,onItemSelect:x,..._}=t,[I,C]=Pe(r),l=ke(),b=Te("@ui5/webcomponents-react"),[f,k]=c.useState("All"),[p,E]=c.useState(null),B=c.Children.toArray(s),W=De(B),ce=Object.values(W).filter(n=>n>0).length,z=f==="All"?B:B.filter(n=>{var h,$,q;return c.isValidElement(n)?f===o.Information?((h=n==null?void 0:n.props)==null?void 0:h.type)===o.Information||(($=n==null?void 0:n.props)==null?void 0:$.type)===o.None:((q=n==null?void 0:n.props)==null?void 0:q.type)===f:!1}),me=_e(z),V=c.useCallback(()=>{E(null)},[E]);c.useEffect(()=>{C.current&&(C.current.navigateBack=V)},[C.current,V]);const de=n=>{k(n.detail.selectedItem.dataset.key)},ue=F(l.container,m,p&&l.showDetails);return e.jsx("div",{ref:I,..._,className:ue,children:e.jsxs(le.Provider,{value:{selectMessage:E},children:[e.jsxs("div",{children:[ce>1&&e.jsx(P,{startContent:e.jsxs(Be,{onSelectionChange:de,children:[e.jsx(J,{"data-key":"All",pressed:f==="All",children:b.getText(Se)}),Object.entries(W).map(([n,h])=>h===0?null:e.jsx(J,{"data-key":n,pressed:f===n,icon:L(n),className:l.button,children:h},n))]})}),e.jsx(be,{onItemClick:x,noDataText:b.getText(Me),children:i?me.map(([n,h])=>e.jsxs(c.Fragment,{children:[n&&e.jsx(ve,{children:n}),h]},n)):z})]}),e.jsx("div",{children:B.length>0?e.jsxs(e.Fragment,{children:[d&&e.jsx(P,{startContent:e.jsx(y,{design:M.Transparent,icon:ie,onClick:V})}),p&&e.jsxs(g,{className:l.detailsContainer,children:[e.jsx(R,{"data-type":p.type,name:L(p.type),className:l.detailsIcon}),e.jsxs(g,{direction:oe.Column,children:[e.jsx(O,{level:H.H5,className:l.detailsTitle,children:p.titleText}),e.jsx("div",{className:l.detailsText,children:p.children})]})]})]}):null})]})})});w.displayName="MessageView";try{w.displayName="MessageView",w.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Ee=ne({listItem:{height:G.ui5WcrMessageViewListItemHeightSingle},message:{padding:"0.25rem 0",width:"100%",maxWidth:"100%",overflow:"hidden",paddingRight:"1rem",boxSizing:"border-box"},withSubtitle:{height:G.ui5WcrMessageViewListItemHeightByLine},withChildren:{paddingRight:"0rem"},iconContainer:{width:"3rem",minWidth:"3rem",height:"2.25rem",display:"flex",alignItems:"center",justifyContent:"center"},icon:{width:"1rem",height:"1rem"},title:{fontFamily:a.sapFontHeaderFamily,fontSize:a.sapFontHeader6Size,color:a.sapGroup_TitleTextColor,maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:"1 1 auto","& + $subtitle":{marginTop:"0.25rem",cursor:"inherit"}},subtitle:{},counter:{color:a.sapContent_MarkerTextColor,fontFamily:a.sapFontFamily,fontSize:a.sapFontSize,paddingLeft:"1rem",flex:"none"},navigation:{height:"0.875rem",width:"0.875rem",padding:"0 0.9375rem",flexShrink:0},typeError:{"& $icon":{color:a.sapNegativeElementColor}},typeSuccess:{"& $icon":{color:a.sapPositiveElementColor}},typeWarning:{" & $icon":{color:a.sapCriticalElementColor}},typeInformation:{"& $icon":{color:a.sapNeutralElementColor}},typeNone:{"& $icon":{color:a.sapNeutralElementColor}}},{name:"MessageItem"}),u=c.forwardRef((t,r)=>{const{titleText:s,subtitleText:i,counter:d,type:m=o.Error,children:x,className:_,...I}=t,{selectMessage:C}=c.useContext(le),l=Ee(),b=F(l.listItem,Reflect.get(l,`type${m}`),_,i&&l.withSubtitle),f=F(l.message,x&&l.withChildren),k=p=>{x&&(C(t),typeof I.onClick=="function"&&I.onClick(p))};return e.jsx(ge,{onClick:k,"data-title":s,"data-type":m,type:x?U.Active:U.Inactive,...I,className:b,ref:r,children:e.jsxs(g,{alignItems:S.Center,className:f,children:[e.jsx("div",{className:l.iconContainer,children:e.jsx(R,{name:L(m),className:l.icon})}),e.jsxs(g,{direction:oe.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e.jsx("span",{className:l.title,children:s}),i&&e.jsx(fe,{className:l.subtitle,children:i})]}),d!=null&&e.jsx("span",{className:l.counter,children:d}),x&&e.jsx(R,{className:l.navigation,name:pe})]})})});u.displayName="MessageItem";try{u.displayName="MessageItem",u.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const D=e.jsx(v,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Ve=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:e.jsx(v,{children:"Information Message"}),type:o.Information,groupName:`Group${s}`,children:D})):[],Fe=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:e.jsx(v,{children:"Success Message"}),type:o.Success,groupName:`Group${s}`,children:D})):[],Re=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:e.jsx(v,{children:"Warning Message"}),type:o.Warning,groupName:`Group${s}`,children:D})):[],Le=t=>t?new Array(t).fill("").map((r,s)=>e.jsx(u,{titleText:e.jsx(v,{children:"Error Message"}),type:o.Error,groupName:`Group${s}`,children:D})):[],A=t=>[...Ve(t.information),...Re(t.warning),...Fe(t.success),...Le(t.error)];try{A.displayName="generateMessageItems",A.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const Ae={title:"User Feedback / MessageView",component:w,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e.jsx(u,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:o.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),e.jsxs(u,{titleText:"Success Message Type",subtitleText:"You can also use subtitles",type:o.Success,counter:2,children:["This is a success message! You can even use"," ",e.jsx(Ce,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"links here"}),"."]},2),e.jsx(u,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:o.Warning,counter:3},3),e.jsx(u,{titleText:"Empty Message Type",groupName:"Products"},4),e.jsx(u,{titleText:"Information Message Type without subtitle",type:o.Information,groupName:"Products"},5),e.jsx(u,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:o.None,groupName:"Employees",children:"Informative message"},6)]}},j={},N={name:"MessageView in Dialog",render(t){const r=c.useRef(null),s=c.useRef(null),[i,d]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:()=>{r.current.show()},children:"Open Dialog"}),e.jsx(Ie,{ref:r,style:{width:"400px"},className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(P,{startContent:e.jsxs(g,{alignItems:S.Center,children:[i&&e.jsx(y,{icon:ie,design:M.Transparent,onClick:()=>{d(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(O,{level:H.H4,children:"Messages"})]})}),footer:e.jsx(g,{alignItems:S.Center,justifyContent:ae.End,style:{width:"100%",boxSizing:"border-box"},children:e.jsx(y,{design:M.Transparent,onClick:()=>{var m;(m=r.current)==null||m.close()},children:"Close"})}),children:e.jsx(w,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{d(!0)}})})]})}},T={name:"with MessageViewButton & Popover",render(){const t=c.useRef(null),r=c.useRef(null),[s,i]=c.useState(!1),d={information:2,warning:5,success:3,error:3};return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{counter:3,type:o.Error,onClick:m=>{t.current.showAt(m.target)}}),e.jsx(je,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e.jsx(P,{startContent:e.jsxs(g,{alignItems:S.Center,children:[s&&e.jsx(y,{design:M.Transparent,icon:"slim-arrow-left",onClick:()=>{i(!1),r.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e.jsx(O,{level:H.H4,children:"Messages"})]})}),footer:e.jsx(g,{alignItems:S.Center,justifyContent:ae.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e.jsx(y,{design:M.Transparent,onClick:()=>{var m;(m=t.current)==null||m.close()},children:"Close"})}),children:e.jsx(w,{ref:r,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{i(!0)},children:A(d)})})]})}};var Y,X,K;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(K=(X=j.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,Z,ee;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(se=T.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const Oe=["Default","MessageViewInDialog","WithMessageViewButton"],xt=Object.freeze(Object.defineProperty({__proto__:null,Default:j,MessageViewInDialog:N,WithMessageViewButton:T,__namedExportsOrder:Oe,default:Ae},Symbol.toStringTag,{value:"Module"}));export{xt as C,j as D,N as M,T as W,u as a};
//# sourceMappingURL=MessageView.stories-cf53595c.js.map
