import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./withWebComponent-BbH_5MIb.js";import"./settings-CnHg8z_5.js";import"./index-CiRfCSmz.js";import{r as g}from"./index-BQ1WsyJB.js";import{B as l}from"./BarDesign-BLoXVb05.js";import{a as I,P as f,b as B}from"./Popover-By40N46R.js";import{c as O}from"./clsx-B-dksMZM.js";import{B as c}from"./index-DRjJfmGy.js";import{B as p}from"./index-B4BPp1es.js";import{I as j}from"./index-DzPf46oJ.js";import{L}from"./index-Cu1iuWPo.js";import{L as S}from"./index-BYrCU43d.js";import{L as a}from"./index-B5gclcmW.js";import{T}from"./index-DGyKXyb-.js";import{P as i}from"./index-DtmBi3gW.js";const k={title:"Modals & Popovers / Popover",component:i,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(L,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:I.Center,placement:f.End,verticalAlign:B.Center,className:"footerPartNoPadding"},tags:["package:@ui5/webcomponents"]},t={render(o){const[s,n]=g.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(i,{...o,onClose:()=>{n(!1)},opener:"openPopoverBtn",open:s})]})}},r={render(o){const[s,n]=g.useState(!1),C=()=>{n(!0)},d=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openPopoverBtn2",onClick:C,children:"Open Popover"}),e.jsx(i,{...o,opener:"openPopoverBtn2",open:s,onClose:d,className:O("headerPartNoPadding",o.className),header:e.jsx(c,{endContent:e.jsx(j,{name:"settings"}),design:l.Header,children:e.jsx(T,{children:"Popover"})}),footer:e.jsx(c,{endContent:e.jsx(p,{onClick:d,children:"Close"}),design:l.Footer}),children:e.jsxs(S,{style:{width:"200px"},children:[e.jsx(a,{additionalText:"3",children:"List Item 1"}),e.jsx(a,{additionalText:"2",children:"List Item 2"}),e.jsx(a,{additionalText:"1",children:"List Item 3"})]})})]})}};var m,P,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(isChromatic || args.open);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setPopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setPopoverIsOpen(false);
      }} opener="openPopoverBtn" open={popoverIsOpen} />
      </>;
  }
}`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <Popover {...args} opener="openPopoverBtn2" open={popoverIsOpen} onClose={handleClose} className={clsx('headerPartNoPadding', args.className)} header={<Bar endContent={<Icon name="settings" />} design={BarDesign.Header}>
              <Title>Popover</Title>
            </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} design={BarDesign.Footer} />}>
          <List style={{
          width: '200px'
        }}>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </Popover>
      </>;
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const b=["Default","PopoverWithContent"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,PopoverWithContent:r,__namedExportsOrder:b,default:k},Symbol.toStringTag,{value:"Module"}));export{J as C,t as D,r as P};
