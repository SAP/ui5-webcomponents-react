import{C as r,j as e,B as o,M as p}from"./iframe-Dh5R3sl2.js";import{F as m,d as u}from"./index-yFvmPqI1.js";import{M as l}from"./index-aFP5l2F3.js";const h={title:"User Feedback / Modals",component:r,tags:["package:@ui5/webcomponents-react"]},s={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{const{close:c}=r.showDialog({headerText:"Dialog Title",children:"I'm a Dialog!",footer:e.jsxs(m,{justifyContent:u.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:[e.jsx(o,{onClick:()=>c(),children:"Close"})," "]})})},children:"Show Dialog"})})},n={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-popover",onClick:()=>{r.showPopover({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})})},t={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-responsive-popover",onClick:()=>{r.showResponsivePopover({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})})},a={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-menu",onClick:()=>{r.showMenu({opener:"modals-show-menu",headerText:"Menu Title",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"New File",icon:"add-document"}),e.jsx(l,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})})},d={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{r.showMessageBox({type:p.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{r.showToast({children:"I'm a Message Toast!"})},children:"Show Toast"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button id="modals-show-popover" onClick={() => {
        Modals.showPopover({
          opener: 'modals-show-popover',
          headerText: 'Popover Title',
          children: "I'm a Popover!"
        });
      }}>
          Show Popover
        </Button>
      </>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button id="modals-show-responsive-popover" onClick={() => {
        Modals.showResponsivePopover({
          opener: 'modals-show-responsive-popover',
          headerText: 'Responsive Popover Title',
          children: "I'm a Responsive Popover!"
        });
      }}>
          Show ResponsivePopover
        </Button>
      </>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button id="modals-show-menu" onClick={() => {
        Modals.showMenu({
          opener: 'modals-show-menu',
          headerText: 'Menu Title',
          children: <>
                  <MenuItem text="New File" icon="add-document" />
                  <MenuItem text="New Folder" icon="add-folder" disabled />
                </>
        });
      }}>
          Show Menu
        </Button>
      </>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],M=Object.freeze(Object.defineProperty({__proto__:null,Dialog:s,Menu:a,MessageBox:d,Popover:n,ResponsivePopover:t,Toast:i,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{M as C,s as D,a as M,n as P,t as R,i as T,d as a};
