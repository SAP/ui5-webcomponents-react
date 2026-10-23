import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{a as i,c as a,n as o,o as s,s as c,t as l}from"./FlexBox-D6F4acFi.js";import{n as u,t as d}from"./Button-CFEhkIC-.js";import{n as f,t as p}from"./Label-CC0T01Qq.js";import{i as m,r as h}from"./MessageBox-B4qeGWAN.js";import{n as g,t as _}from"./MenuItem-BxrkkyT1.js";import{n as v,t as y}from"./Switch-tE-DUg-Q.js";import{m as b,p as x}from"./iframe-B704Q9dM.js";var S=t({Dialog:()=>E,Menu:()=>k,MessageBox:()=>A,Popover:()=>D,ResponsivePopover:()=>O,Toast:()=>j,__namedExportsOrder:()=>M,default:()=>T}),C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{C=n(),a(),s(),m(),u(),f(),g(),v(),o(),b(),w=r(),T={title:`User Feedback / Modals`,component:x,tags:[`package:@ui5/webcomponents-react`]},E={render:()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(d,{onClick:()=>{let{close:e}=x.showDialog({headerText:`Dialog Title`,children:`I'm a Dialog!`,footer:(0,w.jsxs)(l,{justifyContent:i.End,fitContainer:!0,style:{paddingBlock:`0.25rem`},children:[(0,w.jsx)(d,{onClick:()=>e(),children:`Close`}),` `]})})},children:`Show Dialog`})})},D={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(l,{direction:c.Column,alignItems:`Start`,gap:`1rem`,children:[(0,w.jsxs)(l,{alignItems:`Center`,gap:`0.5rem`,children:[(0,w.jsx)(y,{checked:e,onChange:e=>t(e.target.checked)}),(0,w.jsx)(p,{children:`autoClosePopovers`})]}),(0,w.jsx)(d,{id:`modals-show-popover`,onClick:()=>{x.showPopover({opener:`modals-show-popover`,headerText:`Popover Title`,children:`I'm a Popover!`},{autoClosePopovers:e})},children:`Show Popover`})]})}},O={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(l,{direction:c.Column,alignItems:`Start`,gap:`1rem`,children:[(0,w.jsxs)(l,{alignItems:`Center`,gap:`0.5rem`,children:[(0,w.jsx)(y,{checked:e,onChange:e=>t(e.target.checked)}),(0,w.jsx)(p,{children:`autoClosePopovers`})]}),(0,w.jsx)(d,{id:`modals-show-responsive-popover`,onClick:()=>{x.showResponsivePopover({opener:`modals-show-responsive-popover`,headerText:`Responsive Popover Title`,children:`I'm a Responsive Popover!`},{autoClosePopovers:e})},children:`Show ResponsivePopover`})]})}},k={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(l,{direction:c.Column,alignItems:`Start`,gap:`1rem`,children:[(0,w.jsxs)(l,{alignItems:`Center`,gap:`0.5rem`,children:[(0,w.jsx)(y,{checked:e,onChange:e=>t(e.target.checked)}),(0,w.jsx)(p,{children:`autoClosePopovers`})]}),(0,w.jsx)(d,{id:`modals-show-menu`,onClick:()=>{x.showMenu({opener:`modals-show-menu`,headerText:`Menu Title`,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{text:`New File`,icon:`add-document`}),(0,w.jsx)(_,{text:`New Folder`,icon:`add-folder`,disabled:!0})]})},{autoClosePopovers:e})},children:`Show Menu`})]})}},A={render:()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(d,{onClick:()=>{x.showMessageBox({type:h.Confirm,children:`Can you see this MessageBox?`})},children:`Show MessageBox`})})},j={render:()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(d,{onClick:()=>{x.showToast({children:`I'm a Message Toast!`})},children:`Show Toast`})})},M=[`Dialog`,`Popover`,`ResponsivePopover`,`Menu`,`MessageBox`,`Toast`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        const {
          close
        } = Modals.showDialog({
          headerText: 'Dialog Title',
          children: "I'm a Dialog!",
          footer: <FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{
            paddingBlock: '0.25rem'
          }}>
                  <Button onClick={() => close()}>Close</Button>{' '}
                </FlexBox>
        });
      }}>
          Show Dialog
        </Button>
      </>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-popover" onClick={() => {
        Modals.showPopover({
          opener: 'modals-show-popover',
          headerText: 'Popover Title',
          children: "I'm a Popover!"
        }, {
          autoClosePopovers
        });
      }}>
          Show Popover
        </Button>
      </FlexBox>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-responsive-popover" onClick={() => {
        Modals.showResponsivePopover({
          opener: 'modals-show-responsive-popover',
          headerText: 'Responsive Popover Title',
          children: "I'm a Responsive Popover!"
        }, {
          autoClosePopovers
        });
      }}>
          Show ResponsivePopover
        </Button>
      </FlexBox>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={e => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button id="modals-show-menu" onClick={() => {
        Modals.showMenu({
          opener: 'modals-show-menu',
          headerText: 'Menu Title',
          children: <>
                    <MenuItem text="New File" icon="add-document" />
                    <MenuItem text="New Folder" icon="add-folder" disabled />
                  </>
        }, {
          autoClosePopovers
        });
      }}>
          Show Menu
        </Button>
      </FlexBox>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        Modals.showMessageBox({
          type: MessageBoxType.Confirm,
          children: 'Can you see this MessageBox?'
        });
      }}>
          Show MessageBox
        </Button>
      </>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        Modals.showToast({
          children: "I'm a Message Toast!"
        });
      }}>
          Show Toast
        </Button>
      </>;
  }
}`,...j.parameters?.docs?.source}}}})))()}export{D as a,N as c,S as i,k as n,O as o,A as r,j as s,E as t};