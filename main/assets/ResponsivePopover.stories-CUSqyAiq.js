import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./index-BHtxiptB.js";import{r as i}from"./index-DEe9W-hO.js";import{a as I,P as R,b as B}from"./Popover-D7imDdfT.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as j}from"./index-D6UH2S5y.js";import{B as c}from"./index-lCSFNmua.js";import{B as a}from"./index-jYDynjsO.js";import{I as O}from"./index-CeD1K_b8.js";import{L}from"./index-jhiEbKzu.js";import{L as S}from"./index-BFUd4G0O.js";import{L as p}from"./index-1g5qlUHs.js";import{T}from"./index-DoXvukHD.js";import{R as f}from"./index-fQ5m-n7r.js";import"./Boot-CS6Wsrzl.js";import"./settings-5ehD0gYo.js";const l=i.forwardRef((o,n)=>j.createPortal(e.jsx(f,{...o,ref:n}),document.body));l.displayName="ResponsivePopover";const b={title:"Modals & Popovers / ResponsivePopover",component:f,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(L,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:I.Center,placementType:R.End,verticalAlign:B.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},t={render(o){const[n,s]=i.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openResponsivePopoverBtn",onClick:()=>{s(!0)},children:"Open Popover"}),e.jsx(l,{...o,onClose:()=>{s(!1)},opener:"openResponsivePopoverBtn",open:n})]})}},r={render(o){const[n,s]=i.useState(!1),C=()=>{s(!0)},d=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"respPopoverBtn2",onClick:C,children:"Open Responsive Popover"}),e.jsx(l,{...o,className:g("headerPartNoPadding",o.className),opener:"respPopoverBtn2",open:n,onClose:d,header:e.jsx(c,{endContent:e.jsx(O,{name:"settings"}),children:e.jsx(T,{children:"Popover"})}),footer:e.jsx(c,{endContent:e.jsx(a,{onClick:d,children:"Close"})}),children:e.jsxs(S,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}};var m,v,P;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </ResponsivePopover>
      </>;
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const k=["Default","WithContent"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithContent:r,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{J as C,t as D,r as W};
