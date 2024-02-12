import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as C}from"./clsx-Zbgk8kpT.js";import{r as h}from"./index-OjgoNOWw.js";import{a as I,P as R,b as B}from"./Popover-RS8IZQFL.js";import{B as l}from"./index-f6pUTeaT.js";import{B as i}from"./index-4Epqu3KW.js";import{I as g}from"./index-UdBiWwGz.js";import{L as O}from"./index-cguyeOcy.js";import{L as j}from"./index-OG5tCiFX.js";import{S as p}from"./index-42-FNEnP.js";import{T as L}from"./index-m0sz8Gy_.js";import{R as x}from"./CodeGen-ck_FcYHh.js";import{R as S}from"./index-Jc6G8WKW.js";import"./settings-5W_N_9E1.js";const T={title:"Modals & Popovers / ResponsivePopover",component:S,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(O,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:I.Center,placementType:R.Right,verticalAlign:B.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},s={render(o){const[r,n]=h.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(x,{...o,onAfterClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:r})]})}},t={render(o){const[r,n]=h.useState(!1),f=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"respPopoverBtn2",onClick:f,children:"Open Responsive Popover"}),e.jsx(x,{...o,className:C("headerPartNoPadding",o.className),opener:"respPopoverBtn2",open:r,onAfterClose:a,header:e.jsx(l,{endContent:e.jsx(g,{name:"settings"}),children:e.jsx(L,{children:"Popover"})}),footer:e.jsx(l,{endContent:e.jsx(i,{onClick:a,children:"Close"})}),children:e.jsxs(j,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}};var d,c,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(isChromatic || args.open);
    return <>
        <Button id={'openResponsivePopoverBtn'} onClick={() => {
        setResponsivePopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <ResponsivePopover {...args} onAfterClose={() => {
        setResponsivePopoverIsOpen(false);
      }} opener="openResponsivePopoverBtn" open={responsivePopoverIsOpen} />
      </>;
  }
}`,...(v=(c=s.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var m,P,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setResponsivePopoverIsOpen(true);
    };
    const handleClose = () => {
      setResponsivePopoverIsOpen(false);
    };
    return <>
        <Button id="respPopoverBtn2" onClick={onButtonClick}>
          Open Responsive Popover
        </Button>
        <ResponsivePopover {...args} className={clsx('headerPartNoPadding', args.className)} opener="respPopoverBtn2" open={responsivePopoverIsOpen} onAfterClose={handleClose} header={<Bar endContent={<Icon name="settings" />}>
              <Title>Popover</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
          <List style={{
          width: '200px'
        }}>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </ResponsivePopover>
      </>;
  }
}`,...(u=(P=t.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};const k=["Default","WithContent"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithContent:t,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{$ as C,s as D,t as W};
