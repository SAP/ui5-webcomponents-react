import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./index-DGINGqHt.js";import{r as x}from"./index-BQ1WsyJB.js";import{a as I,P as f,b as B}from"./Popover-xb-dB4fv.js";import{c as g}from"./clsx-B-dksMZM.js";import{B as d}from"./index-8NPWI0iP.js";import{B as i}from"./index-CkTda0uP.js";import{I as R}from"./index-C2m8R7XH.js";import{L as O}from"./index-BRxP26Qn.js";import{L as j}from"./index-BedRv76N.js";import{L as p}from"./index-DjWvHauw.js";import{T as L}from"./index-_ae32SJH.js";import{R as a}from"./index-DRtj-W--.js";import"./withWebComponent-DykTwaBJ.js";import"./settings-CUGTo-mI.js";const S={title:"Modals & Popovers / ResponsivePopover",component:a,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(O,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:I.Center,placementType:f.End,verticalAlign:B.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},s={render(o){const[r,n]=x.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(a,{...o,onClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:r})]})}},t={render(o){const[r,n]=x.useState(!1),C=()=>{n(!0)},l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"respPopoverBtn2",onClick:C,children:"Open Responsive Popover"}),e.jsx(a,{...o,className:g("headerPartNoPadding",o.className),opener:"respPopoverBtn2",open:r,onClose:l,header:e.jsx(d,{endContent:e.jsx(R,{name:"settings"}),children:e.jsx(L,{children:"Popover"})}),footer:e.jsx(d,{endContent:e.jsx(i,{onClick:l,children:"Close"})}),children:e.jsxs(j,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}};var c,m,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var P,u,h;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const T=["Default","WithContent"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithContent:t,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{q as C,s as D,t as W};
