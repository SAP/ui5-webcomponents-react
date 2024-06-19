import{j as t}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{r as a}from"./index-CP2MHerv.js";import{u as p}from"./ModalsContext-CA2qjtQ6.js";import{M as q,a as G}from"./index-V2feEdaE.js";import{M as J,a as C}from"./index-CJIB9P_D.js";import{T as K}from"./index-Bmvyg75V.js";import{D as L}from"./index-DrsT95qr.js";import{P as Q}from"./index-gpggeB-W.js";import{R as W}from"./index-DGu48g58.js";import{B as u}from"./index-DagUqEb_.js";import{B as X}from"./index-Bhrx8Nuo.js";const l=()=>"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),d=e=>{e||console.error("Please make sure that your application is wrapped in the '<ThemeProvider />' component.")};function H(e,o,s){d(o);const n=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:L,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:n}})}},ref:r,container:s,id:n}}),{ref:r}}function E(e,o,s){d(o);const n=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:Q,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:n}})}},ref:r,container:s,id:n}}),{ref:r}}function O(e,o,s){d(o);const n=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:W,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:n}})}},ref:r,container:s,id:n}}),{ref:r}}function z(e,o,s){d(o);const n=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:J,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:n}})}},ref:r,container:s,id:n}}),{ref:r}}function A(e,o,s){d(o);const n=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:q,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:n}})}},ref:r,container:s,id:n}}),{ref:r}}function V(e,o,s){const n=a.createRef();d(o);const r=l();return o==null||o({type:"set",payload:{Component:K,props:{...e,open:!0,onClose:c=>{typeof e.onClose=="function"&&e.onClose(c),o({type:"reset",payload:{id:r}})}},container:s,id:r}}),{ref:n}}function Y(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=H(e,s,o);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}}function Z(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=H(o,e,s);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}},[e])}function ee(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=E(e,s,o);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}}function oe(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=E(o,e,s);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}},[e])}function ne(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=O(e,s,o);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}}function se(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=O(o,e,s);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}},[e])}function re(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=z(e,s,o);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}}function te(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=z(o,e,s);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}},[e])}function ae(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=A(e,s,o);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}}function ce(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=A(o,e,s);return{ref:n,close:()=>{n.current&&(n.current.open=!1)}}},[e])}function ie(e,o){var r;const s=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:n}=V(e,s,o);return{ref:n}}function ue(){const{setModal:e}=p();return a.useCallback((o,s)=>{const{ref:n}=V(o,e,s);return{ref:n}},[e])}const i={showDialog:Y,useShowDialog:Z,showPopover:ee,useShowPopover:oe,showResponsivePopover:ne,useShowResponsivePopover:se,showMenu:re,useShowMenu:te,showMessageBox:ae,useShowMessageBox:ce,showToast:ie,useShowToast:ue};try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}const pe={title:"User Feedback / Modals"},h={render:()=>{const e=i.useShowDialog();return t.jsx(u,{onClick:()=>{const{close:o}=e({headerText:"Dialog Title",children:"I'm a Dialog!",footer:t.jsx(X,{endContent:t.jsx(u,{onClick:()=>o(),children:"Close"})})})},children:"Show Dialog"})}},f={render:()=>{const e=i.useShowPopover();return t.jsx(u,{id:"modals-show-popover",onClick:()=>{e({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})}},w={render:()=>{const e=i.useShowResponsivePopover();return t.jsx(u,{id:"modals-show-responsive-popover",onClick:()=>{e({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})}},m={render:()=>{const e=i.useShowMenu();return t.jsx(u,{id:"modals-show-menu",onClick:()=>{e({opener:"modals-show-menu",headerText:"Menu Title",children:t.jsxs(t.Fragment,{children:[t.jsx(C,{text:"New File",icon:"add-document"}),t.jsx(C,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})}},v={render:()=>{const e=i.useShowMessageBox();return t.jsx(u,{onClick:()=>{e({type:G.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})}},g={render:()=>{const e=i.useShowToast();return t.jsx(u,{onClick:()=>{e({children:"I'm a Message Toast!"})},children:"Show Toast"})}};var y,x,S;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const showDialog = Modals.useShowDialog();
    return <Button onClick={() => {
      const {
        close
      } = showDialog({
        headerText: 'Dialog Title',
        children: "I'm a Dialog!",
        footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
      });
    }}>
        Show Dialog
      </Button>;
  }
}`,...(S=(x=h.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var P,T,M;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const showPopover = Modals.useShowPopover();
    return <Button id="modals-show-popover" onClick={() => {
      showPopover({
        opener: 'modals-show-popover',
        headerText: 'Popover Title',
        children: "I'm a Popover!"
      });
    }}>
        Show Popover
      </Button>;
  }
}`,...(M=(T=f.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var B,k,R;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const showResponsivePopover = Modals.useShowResponsivePopover();
    return <Button id="modals-show-responsive-popover" onClick={() => {
      showResponsivePopover({
        opener: 'modals-show-responsive-popover',
        headerText: 'Responsive Popover Title',
        children: "I'm a Responsive Popover!"
      });
    }}>
        Show ResponsivePopover
      </Button>;
  }
}`,...(R=(k=w.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var D,_,b;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const showMenu = Modals.useShowMenu();
    return <Button id="modals-show-menu" onClick={() => {
      showMenu({
        opener: 'modals-show-menu',
        headerText: 'Menu Title',
        children: <>
                <MenuItem text="New File" icon="add-document" />
                <MenuItem text="New Folder" icon="add-folder" disabled />
              </>
      });
    }}>
        Show Menu
      </Button>;
  }
}`,...(b=(_=m.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var I,j,F;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const showMessageBox = Modals.useShowMessageBox();
    return <Button onClick={() => {
      showMessageBox({
        type: MessageBoxTypes.Confirm,
        children: 'Can you see this MessageBox?'
      });
    }}>
        Show MessageBox
      </Button>;
  }
}`,...(F=(j=v.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,U,$;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const showToast = Modals.useShowToast();
    return <Button onClick={() => {
      showToast({
        children: "I'm a Message Toast!"
      });
    }}>
        Show Toast
      </Button>;
  }
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const le=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Dialog:h,Menu:m,MessageBox:v,Popover:f,ResponsivePopover:w,Toast:g,__namedExportsOrder:le,default:pe},Symbol.toStringTag,{value:"Module"}));export{Pe as C,h as D,m as M,f as P,w as R,g as T,v as a};
