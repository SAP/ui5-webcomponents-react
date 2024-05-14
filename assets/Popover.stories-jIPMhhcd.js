import{j as e}from"./ManagedStyles-0Bwp9t5R.js";import"./settings-DxzrX51-.js";import"./index-BDQE-g5y.js";import{r as i}from"./index-BP8_t0zE.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as B}from"./index-BxmsGmlx.js";import{B as c,a as m}from"./index-Bcah6UpN.js";import{a as j,P as O,b as L}from"./Popover-BRx0aMsU.js";import{B as p}from"./index-Drze_fDY.js";import{I as S}from"./index-BvyZ24cA.js";import{L as T}from"./index-CBk4YQBz.js";import{L as k}from"./index-ChbvNi7e.js";import{S as a}from"./index-HWVQEpHy.js";import{T as b}from"./index-DO3RY53V.js";import{P as g}from"./index-77u6OClw.js";const d=i.forwardRef((o,t)=>B.createPortal(e.jsx(g,{...o,ref:t}),document.body));d.displayName="Popover";const y={title:"Modals & Popovers / Popover",component:g,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(T,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:j.Center,placementType:O.Right,verticalAlign:L.Center,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},r={render(o){const[t,n]=i.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(d,{...o,onAfterClose:()=>{n(!1)},opener:"openPopoverBtn",open:t})]})}},s={render(o){const[t,n]=i.useState(!1),C=()=>{n(!0)},l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn2",onClick:C,children:"Open Popover"}),e.jsx(d,{...o,opener:"openPopoverBtn2",open:t,onAfterClose:l,className:I("headerPartNoPadding",o.className),header:e.jsx(c,{endContent:e.jsx(S,{name:"settings"}),design:m.Header,children:e.jsx(b,{children:"Popover"})}),footer:e.jsx(c,{endContent:e.jsx(p,{onClick:l,children:"Close"}),design:m.Footer}),children:e.jsxs(k,{style:{width:"200px"},children:[e.jsx(a,{additionalText:"3",children:"List Item 1"}),e.jsx(a,{additionalText:"2",children:"List Item 2"}),e.jsx(a,{additionalText:"1",children:"List Item 3"})]})})]})}};var P,v,u;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(isChromatic || args.open);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setPopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onAfterClose={() => {
        setPopoverIsOpen(false);
      }} opener="openPopoverBtn" open={popoverIsOpen} />
      </>;
  }
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setPopoverIsOpen(true);
    };
    const handleClose = () => {
      setPopoverIsOpen(false);
    };
    return <>
        <Button id="openPopoverBtn2" onClick={onButtonClick}>
          Open Popover
        </Button>
        <Popover {...args} opener="openPopoverBtn2" open={popoverIsOpen} onAfterClose={handleClose} className={clsx('headerPartNoPadding', args.className)} header={<Bar endContent={<Icon name="settings" />} design={BarDesign.Header}>
              <Title>Popover</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} design={BarDesign.Footer} />}>
          <List style={{
          width: '200px'
        }}>
            <StandardListItem additionalText="3">List Item 1</StandardListItem>
            <StandardListItem additionalText="2">List Item 2</StandardListItem>
            <StandardListItem additionalText="1">List Item 3</StandardListItem>
          </List>
        </Popover>
      </>;
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const N=["Default","PopoverWithContent"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,PopoverWithContent:s,__namedExportsOrder:N,default:y},Symbol.toStringTag,{value:"Module"}));export{J as C,r as D,s as P};
