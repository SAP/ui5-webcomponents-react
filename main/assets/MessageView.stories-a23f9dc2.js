import{j as e,a as d,F as H}from"./jsx-runtime-670450c2.js";import{i as fe}from"./slim-arrow-right-78d167a6.js";import{T as o}from"./ThemingParameters-f4b4144e.js";import{b as J}from"./CssSizeVariables-bd372cde.js";import{c as R}from"./clsx.m-1229b3e0.js";import{r as c}from"./index-f1f749bf.js";import{c as oe}from"./react-jss.esm-2e28eff7.js";import{F as f,a as ie,c as v,b as le}from"./index-44cc9c22.js";import{a as Y}from"./ListItem-843af2c9.js";import{V as a}from"./ValueState-ab6838cc.js";import{C as he}from"./index-6f46084f.js";import{I as L}from"./index-f4484b56.js";import{L as ye}from"./index-b86e29db.js";import{i as we,a as Ie,s as xe,e as Ce}from"./information-2c502181.js";import{T as B}from"./index-479d8097.js";import{a as ce}from"./slim-arrow-left-0e139baa.js";import{a as b}from"./Button-fa05cadd.js";import{T as W}from"./Title-0440ec3f.js";import{B as k}from"./index-d565c7c2.js";import{B as I}from"./index-3a4d85a6.js";import{D as Ne}from"./Dialog.stories-9bf78d53.js";import{L as Te}from"./index-b6d55309.js";import{R as Se}from"./CodeGen-62ad10d5.js";import{T as j}from"./index-50ec8e27.js";import{M as Me}from"./index-665b8008.js";import{u as ve,a8 as be,aB as Be}from"./i18n-defaults-57d9744b.js";import{G as Pe}from"./index-882a36fd.js";import{L as De}from"./index-20c6b9c9.js";import{S as ke,a as X}from"./index-af2703fd.js";import{u as _e}from"./withWebComponent-d280b5c2.js";const me=c.createContext({selectMessage:t=>{}}),A=t=>{switch(t){case a.Error:case"Error":return Ce;case a.Success:case"Success":return xe;case a.Warning:case"Warning":return Ie;default:return we}},Ve=t=>(t??[]).map(r=>{var s;return(s=r==null?void 0:r.props)==null?void 0:s.type}).reduce((r,s)=>{const i=s===a.None?a.Information:s;return r.hasOwnProperty(i)&&r[i]++,r},{[a.Error]:0,[a.Warning]:0,[a.Success]:0,[a.Information]:0}),Ee=t=>{const r=(t??[]).reduce((s,i)=>{var m;const u=((m=i==null?void 0:i.props)==null?void 0:m.groupName)??"";return s.hasOwnProperty(u)?s[u].push(i):s[u]=[i],s},{});return Object.entries(r).sort((s,i)=>s[0].localeCompare(i[0]))},Fe=oe({container:{width:"100%",overflowX:"hidden",overflowY:"auto",display:"flex",height:"100%","& > *":{width:"100%",flexShrink:0,transition:"transform 200ms ease-in-out"}},showDetails:{"& > *":{transform:"translateX(-100%)"}},button:{'&[data-key="Error"]:not([pressed])':{color:o.sapNegativeElementColor},'&[data-key="Warning"]:not([pressed])':{color:o.sapCriticalElementColor},'&[data-key="Success"]:not([pressed])':{color:o.sapPositiveElementColor},'&[data-key="Information"]:not([pressed])':{color:o.sapNeutralElementColor}},detailsContainer:{padding:"1rem"},detailsIcon:{flexShrink:0,margin:"0 1rem 0 0.5rem",'&[data-type="Error"]':{color:o.sapNegativeElementColor},'&[data-type="Warning"]':{color:o.sapCriticalElementColor},'&[data-type="Success"]':{color:o.sapPositiveElementColor},'&[data-type="Information"],&[data-type="None"]':{color:o.sapNeutralElementColor}},detailsTitle:{marginBottom:"1rem"},detailsText:{fontFamily:o.sapFontFamily,fontSize:o.sapFontSize,lineHeight:1.4,color:o.sapTextColor,marginBottom:"1rem"}},{name:"MessageView"}),x=c.forwardRef((t,r)=>{const{children:s,groupItems:i,showDetailsPageHeader:u,className:m,onItemSelect:w,...V}=t,[C,N]=_e(r),l=Fe(),P=ve("@ui5/webcomponents-react"),[h,z]=c.useState("All"),[g,E]=c.useState(null),D=c.Children.toArray(s),$=Ve(D),de=Object.values($).filter(n=>n>0).length,q=h==="All"?D:D.filter(n=>{var y,G,U;return c.isValidElement(n)?h===a.Information?((y=n==null?void 0:n.props)==null?void 0:y.type)===a.Information||((G=n==null?void 0:n.props)==null?void 0:G.type)===a.None:((U=n==null?void 0:n.props)==null?void 0:U.type)===h:!1}),ue=Ee(q),F=c.useCallback(()=>{E(null)},[E]);c.useEffect(()=>{N.current&&(N.current.navigateBack=F)},[N.current,F]);const pe=n=>{z(n.detail.selectedItem.dataset.key)},ge=R(l.container,m,g&&l.showDetails);return e("div",{ref:C,...V,className:ge,children:d(me.Provider,{value:{selectMessage:E},children:[d("div",{children:[de>1&&e(k,{startContent:d(ke,{onSelectionChange:pe,children:[e(X,{"data-key":"All",pressed:h==="All",children:P.getText(be)}),Object.entries($).map(([n,y])=>y===0?null:e(X,{"data-key":n,pressed:h===n,icon:A(n),className:l.button,children:y},n))]})}),e(De,{onItemClick:w,noDataText:P.getText(Be),children:i?ue.map(([n,y])=>d(c.Fragment,{children:[n&&e(Pe,{children:n}),y]},n)):q})]}),e("div",{children:D.length>0?d(H,{children:[u&&e(k,{startContent:e(I,{design:b.Transparent,icon:ce,onClick:F})}),g&&d(f,{className:l.detailsContainer,children:[e(L,{"data-type":g.type,name:A(g.type),className:l.detailsIcon}),d(f,{direction:ie.Column,children:[e(j,{level:W.H5,className:l.detailsTitle,children:g.titleText}),e("div",{className:l.detailsText,children:g.children})]})]})]}):null})]})})});x.displayName="MessageView";try{x.displayName="MessageView",x.__docgenInfo={description:"",displayName:"MessageView",props:{}}}catch{}const Re=oe({listItem:{height:J.sapWcrMessageViewListItemHeightSingle},message:{padding:"0.25rem 0",width:"100%",maxWidth:"100%",overflow:"hidden",paddingRight:"1rem",boxSizing:"border-box"},withSubtitle:{height:J.sapWcrMessageViewListItemHeightByLine},withChildren:{paddingRight:"0rem"},iconContainer:{width:"3rem",minWidth:"3rem",height:"2.25rem",display:"flex",alignItems:"center",justifyContent:"center"},icon:{width:"1rem",height:"1rem"},title:{fontFamily:o.sapFontHeaderFamily,fontSize:o.sapFontHeader6Size,color:o.sapGroup_TitleTextColor,maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:"1 1 auto","& + $subtitle":{marginTop:"0.25rem",cursor:"inherit"}},subtitle:{},counter:{color:o.sapContent_MarkerTextColor,fontFamily:o.sapFontFamily,fontSize:o.sapFontSize,paddingLeft:"1rem",flex:"none"},navigation:{height:"0.875rem",width:"0.875rem",padding:"0 0.9375rem",flexShrink:0},typeError:{"& $icon":{color:o.sapNegativeElementColor}},typeSuccess:{"& $icon":{color:o.sapPositiveElementColor}},typeWarning:{" & $icon":{color:o.sapCriticalElementColor}},typeInformation:{"& $icon":{color:o.sapNeutralElementColor}},typeNone:{"& $icon":{color:o.sapNeutralElementColor}}},{name:"MessageItem"}),p=c.forwardRef((t,r)=>{const{titleText:s,subtitleText:i,counter:u,type:m=a.Error,children:w,className:V,...C}=t,{selectMessage:N}=c.useContext(me),l=Re(),P=R(l.listItem,Reflect.get(l,`type${m}`),V,i&&l.withSubtitle),h=R(l.message,w&&l.withChildren);return e(he,{onClick:g=>{w&&(N(t),typeof C.onClick=="function"&&C.onClick(g))},"data-title":s,"data-type":m,type:w?Y.Active:Y.Inactive,...C,className:P,ref:r,children:d(f,{alignItems:v.Center,className:h,children:[e("div",{className:l.iconContainer,children:e(L,{name:A(m),className:l.icon})}),d(f,{direction:ie.Column,style:{flex:"auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[s&&e("span",{className:l.title,children:s}),i&&e(ye,{className:l.subtitle,children:i})]}),u!=null&&e("span",{className:l.counter,children:u}),w&&e(L,{className:l.navigation,name:fe})]})})});p.displayName="MessageItem";try{p.displayName="MessageItem",p.__docgenInfo={description:"A component used to hold different types of system messages inside the `MessageView` component.",displayName:"MessageItem",props:{titleText:{defaultValue:null,description:"Specifies the title of the message\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.",name:"titleText",required:!0,type:{name:"ReactNode"}},subtitleText:{defaultValue:null,description:`Specifies the subtitle of the message

__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"subtitleText",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Defines the number of messages for a given message type.",name:"counter",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"Specifies the type of the message",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},groupName:{defaultValue:null,description:"Name of a message group the current item belongs to.",name:"groupName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Specifies detailed description of the message",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=e(B,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Le=t=>t?new Array(t).fill("").map((r,s)=>e(p,{titleText:e(B,{children:"Information Message"}),type:a.Information,groupName:`Group${s}`,children:_})):[],Ae=t=>t?new Array(t).fill("").map((r,s)=>e(p,{titleText:e(B,{children:"Success Message"}),type:a.Success,groupName:`Group${s}`,children:_})):[],Oe=t=>t?new Array(t).fill("").map((r,s)=>e(p,{titleText:e(B,{children:"Warning Message"}),type:a.Warning,groupName:`Group${s}`,children:_})):[],He=t=>t?new Array(t).fill("").map((r,s)=>e(p,{titleText:e(B,{children:"Error Message"}),type:a.Error,groupName:`Group${s}`,children:_})):[],O=t=>[...Le(t.information),...Oe(t.warning),...Ae(t.success),...He(t.error)];try{O.displayName="generateMessageItems",O.__docgenInfo={description:"",displayName:"generateMessageItems",props:{}}}catch{}const We={title:"User Feedback / MessageView",component:x,argTypes:{showDetailsPageHeader:{description:"Defines whether the header of the details page will be shown."},groupItems:{description:"Defines whether the messages are grouped or not."},onItemSelect:{description:"Event is fired when the details of a message are shown.",action:"onItemSelect"},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[e(p,{titleText:"Error Message Type",subtitleText:"Some bad error occurred",type:a.Error,counter:1,groupName:"Products",children:"First Error Message Description."},1),d(p,{titleText:"Success Message Type",subtitleText:"You can also use subtitles",type:a.Success,counter:2,children:["This is a success message! You can even use"," ",e(Te,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"links here"}),"."]},2),e(p,{titleText:"Warning Message Type",subtitleText:"Warnign without details",type:a.Warning,counter:3},3),e(p,{titleText:"Empty Message Type",groupName:"Products"},4),e(p,{titleText:"Information Message Type without subtitle",type:a.Information,groupName:"Products"},5),e(p,{titleText:"None Message Type",subtitleText:"Value State None will be handled as Information",type:a.None,groupName:"Employees",children:"Informative message"},6)]}},T={},S={name:"MessageView in Dialog",render(t){const r=c.useRef(null),s=c.useRef(null),[i,u]=c.useState(!1);return d(H,{children:[e(I,{onClick:()=>{r.current.show()},children:"Open Dialog"}),e(Ne,{ref:r,style:{width:"400px"},className:"contentPartNoPadding headerPartNoPadding",header:e(k,{startContent:d(f,{alignItems:v.Center,children:[i&&e(I,{icon:ce,design:b.Transparent,onClick:()=>{u(!1),s.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e(j,{level:W.H4,children:"Messages"})]})}),footer:e(f,{alignItems:v.Center,justifyContent:le.End,style:{width:"100%",boxSizing:"border-box"},children:e(I,{design:b.Transparent,onClick:()=>{var m;(m=r.current)==null||m.close()},children:"Close"})}),children:e(x,{ref:s,...t,showDetailsPageHeader:!1,onItemSelect:()=>{u(!0)}})})]})}},M={name:"with MessageViewButton & Popover",render(){const t=c.useRef(null),r=c.useRef(null),[s,i]=c.useState(!1),u={information:2,warning:5,success:3,error:3};return d(H,{children:[e(Me,{counter:3,type:a.Error,onClick:m=>{t.current.showAt(m.target)}}),e(Se,{ref:t,headerText:"Messages",className:"contentPartNoPadding headerPartNoPadding",header:e(k,{startContent:d(f,{alignItems:v.Center,children:[s&&e(I,{design:b.Transparent,icon:"slim-arrow-left",onClick:()=>{i(!1),r.current.navigateBack()},style:{marginInline:"0 0.5rem"}}),e(j,{level:W.H4,children:"Messages"})]})}),footer:e(f,{alignItems:v.Center,justifyContent:le.End,style:{paddingBlock:"0.25rem",width:"100%",boxSizing:"border-box"},children:e(I,{design:b.Transparent,onClick:()=>{var m;(m=t.current)==null||m.close()},children:"Close"})}),children:e(x,{ref:r,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{i(!0)},children:O(u)})})]})}};var K,Q,Z;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(Z=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ne,ae;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const je=["Default","MessageViewInDialog","WithMessageViewButton"],It=Object.freeze(Object.defineProperty({__proto__:null,Default:T,MessageViewInDialog:S,WithMessageViewButton:M,__namedExportsOrder:je,default:We},Symbol.toStringTag,{value:"Module"}));export{It as C,T as D,S as M,M as W,p as a};
//# sourceMappingURL=MessageView.stories-a23f9dc2.js.map
