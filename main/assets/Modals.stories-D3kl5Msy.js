import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{r as c}from"./index-Dl6G-zuu.js";import{u as p}from"./ModalsContext-qaxSwC3j.js";import{M as q,a as G}from"./index-BEWi8sx8.js";import{M as J,a as y}from"./index-BFn-IFh5.js";import{T as K}from"./index-Bcu4Zxyc.js";import{D as L}from"./index-DQbzeM7B.js";import{P as Q}from"./index-BMxKdwoR.js";import{R as W}from"./index-CUr0y8Dk.js";import{B as u}from"./index-BgTNfpJS.js";import{B as X}from"./index-1y92PciF.js";const l=()=>"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),d=e=>{e||console.error("Please make sure that your application is wrapped in the '<ThemeProvider />' component.")};function $(e,o,r){d(o);const n=l(),s=c.createRef();return o==null||o({type:"set",payload:{Component:L,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:n}})}},ref:s,container:r,id:n}}),{ref:s}}function H(e,o,r){d(o);const n=l(),s=c.createRef();return o==null||o({type:"set",payload:{Component:Q,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:n}})}},ref:s,container:r,id:n}}),{ref:s}}function E(e,o,r){d(o);const n=l(),s=c.createRef();return o==null||o({type:"set",payload:{Component:W,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:n}})}},ref:s,container:r,id:n}}),{ref:s}}function O(e,o,r){d(o);const n=l(),s=c.createRef();return o==null||o({type:"set",payload:{Component:J,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:n}})}},ref:s,container:r,id:n}}),{ref:s}}function z(e,o,r){d(o);const n=l(),s=c.createRef();return o==null||o({type:"set",payload:{Component:q,props:{...e,open:!0,onClose:t=>{typeof e.onClose=="function"&&e.onClose(t),o({type:"reset",payload:{id:n}})}},ref:s,container:r,id:n}}),{ref:s}}function V(e,o,r){const n=c.createRef();d(o);const s=l();return o==null||o({type:"set",payload:{Component:K,props:{...e},ref:t=>{n.current=t,t&&!t.open&&(t.show(),setTimeout(()=>{o({type:"reset",payload:{id:s}})},e.duration??3e3))},container:r,id:s}}),{ref:n}}function Y(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=$(e,r,o);return{ref:n,close:()=>{var t;(t=n.current)==null||t.close()}}}function Z(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=$(o,e,r);return{ref:n,close:()=>{var s;(s=n.current)==null||s.close()}}},[e])}function ee(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=H(e,r,o);return{ref:n,close:()=>{var t;(t=n.current)==null||t.close()}}}function oe(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=H(o,e,r);return{ref:n,close:()=>{var s;(s=n.current)==null||s.close()}}},[e])}function ne(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=E(e,r,o);return{ref:n,close:()=>{var t;(t=n.current)==null||t.close()}}}function se(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=E(o,e,r);return{ref:n,close:()=>{var s;(s=n.current)==null||s.close()}}},[e])}function re(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=O(e,r,o);return{ref:n,close:()=>{var t;(t=n.current)==null||t.close()}}}function te(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=O(o,e,r);return{ref:n,close:()=>{var s;(s=n.current)==null||s.close()}}},[e])}function ae(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=z(e,r,o);return{ref:n,close:()=>{var t;(t=n.current)==null||t.close()}}}function ce(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=z(o,e,r);return{ref:n,close:()=>{var s;(s=n.current)==null||s.close()}}},[e])}function ie(e,o){var s;const r=(s=window["@ui5/webcomponents-react"])==null?void 0:s.setModal,{ref:n}=V(e,r,o);return{ref:n}}function ue(){const{setModal:e}=p();return c.useCallback((o,r)=>{const{ref:n}=V(o,e,r);return{ref:n}},[e])}const i={showDialog:Y,useShowDialog:Z,showPopover:ee,useShowPopover:oe,showResponsivePopover:ne,useShowResponsivePopover:se,showMenu:re,useShowMenu:te,showMessageBox:ae,useShowMessageBox:ce,showToast:ie,useShowToast:ue};try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}const pe={title:"User Feedback / Modals"},h={render:()=>{const e=i.useShowDialog();return a.jsx(u,{onClick:()=>{const{close:o}=e({headerText:"Dialog Title",children:"I'm a Dialog!",footer:a.jsx(X,{endContent:a.jsx(u,{onClick:()=>o(),children:"Close"})})})},children:"Show Dialog"})}},w={render:()=>{const e=i.useShowPopover();return a.jsx(u,{id:"modals-show-popover",onClick:()=>{e({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})}},m={render:()=>{const e=i.useShowResponsivePopover();return a.jsx(u,{id:"modals-show-responsive-popover",onClick:()=>{e({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})}},f={render:()=>{const e=i.useShowMenu();return a.jsx(u,{id:"modals-show-menu",onClick:()=>{e({opener:"modals-show-menu",headerText:"Menu Title",children:a.jsxs(a.Fragment,{children:[a.jsx(y,{text:"New File",icon:"add-document"}),a.jsx(y,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})}},v={render:()=>{const e=i.useShowMessageBox();return a.jsx(u,{onClick:()=>{e({type:G.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})}},g={render:()=>{const e=i.useShowToast();return a.jsx(u,{onClick:()=>{e({children:"I'm a Message Toast!"})},children:"Show Toast"})}};var C,x,S;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(x=h.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,P,M;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(P=w.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var B,k,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var D,_,b;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(b=(_=f.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var I,j,A;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(j=v.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var F,N,U;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const le=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],Te=Object.freeze(Object.defineProperty({__proto__:null,Dialog:h,Menu:f,MessageBox:v,Popover:w,ResponsivePopover:m,Toast:g,__namedExportsOrder:le,default:pe},Symbol.toStringTag,{value:"Module"}));export{Te as C,h as D,f as M,w as P,m as R,g as T,v as a};
