import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{M as n}from"./index-8-904t-4.js";import{B as o}from"./index-BdTvKG3b.js";import{B as R}from"./index-XxLLSGyc.js";import{M as l}from"./index-D6gReyZq.js";import{a as D}from"./index-BgwYTWry.js";const I={title:"User Feedback / Modals",component:n},r={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{const{close:F}=n.showDialog({headerText:"Dialog Title",children:"I'm a Dialog!",footer:e.jsx(R,{endContent:e.jsx(o,{onClick:()=>F(),children:"Close"})})})},children:"Show Dialog"})})},s={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-popover",onClick:()=>{n.showPopover({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})})},a={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-responsive-popover",onClick:()=>{n.showResponsivePopover({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})})},t={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{id:"modals-show-menu",onClick:()=>{n.showMenu({opener:"modals-show-menu",headerText:"Menu Title",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"New File",icon:"add-document"}),e.jsx(l,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})})},d={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{n.showMessageBox({type:D.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{onClick:()=>{n.showToast({children:"I'm a Message Toast!"})},children:"Show Toast"})})};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Button onClick={() => {
        const {
          close
        } = Modals.showDialog({
          headerText: 'Dialog Title',
          children: "I'm a Dialog!",
          footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
        });
      }}>
          Show Dialog
        </Button>
      </>;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,w,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var M,B,T;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var C,P,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var S,f,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const y=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],U=Object.freeze(Object.defineProperty({__proto__:null,Dialog:r,Menu:t,MessageBox:d,Popover:s,ResponsivePopover:a,Toast:i,__namedExportsOrder:y,default:I},Symbol.toStringTag,{value:"Module"}));export{U as C,r as D,t as M,s as P,a as R,i as T,d as a};
