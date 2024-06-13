import{j as e}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import"./index-ZM-57o7g.js";import{r as i}from"./index-gJgmXzrm.js";import{a as I,P as R,b as B}from"./Popover-XR-C8_HJ.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as j}from"./index-DjqRnomV.js";import{B as c}from"./index-I-NZREiZ.js";import{B as a}from"./index-Dp8IwEPL.js";import{I as O}from"./index-BAVhdYPD.js";import{L}from"./index-DFf4EEFj.js";import{L as S}from"./index-B_z-4Gl0.js";import{S as p}from"./index-CwYO7Bx6.js";import{T}from"./index-DveKmdbI.js";import{R as f}from"./index-WbX0NhpB.js";import"./Boot-Bi0-wsLc.js";import"./settings-BUuc45is.js";const l=i.forwardRef((o,n)=>j.createPortal(e.jsx(f,{...o,ref:n}),document.body));l.displayName="ResponsivePopover";const b={title:"Modals & Popovers / ResponsivePopover",component:f,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(L,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:I.Center,placementType:R.End,verticalAlign:B.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},t={render(o){const[n,s]=i.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openResponsivePopoverBtn",onClick:()=>{s(!0)},children:"Open Popover"}),e.jsx(l,{...o,onClose:()=>{s(!1)},opener:"openResponsivePopoverBtn",open:n})]})}},r={render(o){const[n,s]=i.useState(!1),C=()=>{s(!0)},d=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"respPopoverBtn2",onClick:C,children:"Open Responsive Popover"}),e.jsx(l,{...o,className:g("headerPartNoPadding",o.className),opener:"respPopoverBtn2",open:n,onClose:d,header:e.jsx(c,{endContent:e.jsx(O,{name:"settings"}),children:e.jsx(T,{children:"Popover"})}),footer:e.jsx(c,{endContent:e.jsx(a,{onClick:d,children:"Close"})}),children:e.jsxs(S,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}};var m,v,P;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(isChromatic || args.open);
    return <>
        <Button id={'openResponsivePopoverBtn'} onClick={() => {
        setResponsivePopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <ResponsivePopover {...args} onClose={() => {
        setResponsivePopoverIsOpen(false);
      }} opener="openResponsivePopoverBtn" open={responsivePopoverIsOpen} />
      </>;
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <ResponsivePopover {...args} className={clsx('headerPartNoPadding', args.className)} opener="respPopoverBtn2" open={responsivePopoverIsOpen} onClose={handleClose} header={<Bar endContent={<Icon name="settings" />}>
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
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const k=["Default","WithContent"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithContent:r,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{J as C,t as D,r as W};
