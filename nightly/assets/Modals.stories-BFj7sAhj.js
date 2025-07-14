import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-qmG4ve5T.js";import{M as r}from"./index-CNaE7Zm2.js";import{B as o}from"./index-C2cs6waD.js";import{F as y,d as R}from"./index-C2w1dnoB.js";import{M as l}from"./index-DCmRwTa5.js";import{M as D}from"./index-D99xzYfs.js";const I={title:"User Feedback / Modals",component:r},s={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{const{close:k}=r.showDialog({headerText:"Dialog Title",children:"I'm a Dialog!",footer:e.jsxs(y,{justifyContent:R.End,fitContainer:!0,style:{paddingBlock:"0.25rem"},children:[e.jsx(o,{onClick:()=>k(),children:"Close"})," "]})})},children:"Show Dialog"})})},n={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-popover",onClick:()=>{r.showPopover({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})})},t={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-responsive-popover",onClick:()=>{r.showResponsivePopover({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})})},a={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-menu",onClick:()=>{r.showMenu({opener:"modals-show-menu",headerText:"Menu Title",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"New File",icon:"add-document"}),e.jsx(l,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{r.showMessageBox({type:D.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})})},d={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{r.showToast({children:"I'm a Message Toast!"})},children:"Show Toast"})})};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,w,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(w=t.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var M,B,C;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var T,j,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var f,S,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const b=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],q=Object.freeze(Object.defineProperty({__proto__:null,Dialog:s,Menu:a,MessageBox:i,Popover:n,ResponsivePopover:t,Toast:d,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{q as C,s as D,a as M,n as P,t as R,d as T,i as a};
