import{j as a}from"./jsx-runtime-DtaoT6pD.js";import{r as c}from"./index-OjgoNOWw.js";import{u as p}from"./ModalsContext-0q87fkkd.js";import{M as G,b as J}from"./index-57TbckB2.js";import{M as K,a as C}from"./index-ICSZoKSD.js";import{T as x}from"./index-7sXFPuk-.js";import{D as L}from"./index-28QPLd_a.js";import{P as Q}from"./index-a_cIOO5C.js";import{R as W}from"./index-gwkVZ97d.js";import{B as u}from"./index-Jy9GcCMw.js";import{B as X}from"./index-CjdoEuPo.js";const l=()=>"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),d=e=>{e||console.error("Please make sure that your application is wrapped in the '<ThemeProvider />' component.")};function H(e,o,n){d(o);const s=l(),r=c.createRef();return o==null||o({type:"set",payload:{Component:L,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function E(e,o,n){d(o);const s=l(),r=c.createRef();return o==null||o({type:"set",payload:{Component:Q,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function O(e,o,n){d(o);const s=l(),r=c.createRef();return o==null||o({type:"set",payload:{Component:W,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function z(e,o,n){d(o);const s=l(),r=c.createRef();return o==null||o({type:"set",payload:{Component:K,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function V(e,o,n){d(o);const s=l(),r=c.createRef();return o==null||o({type:"set",payload:{Component:G,props:{...e,open:!0,onClose:t=>{typeof e.onClose=="function"&&e.onClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function q(e,o,n){const s=c.createRef();d(o);const r=l();return o==null||o({type:"set",payload:{Component:x,props:{...e},ref:t=>{s.current=t,t&&!t.open&&(t.show(),setTimeout(()=>{o({type:"reset",payload:{id:r}})},e.duration??x.defaultProps.duration))},container:n,id:r}}),{ref:s}}function Y(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=H(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function Z(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=H(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ee(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=E(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function oe(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=E(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function se(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=O(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function re(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=O(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ne(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=z(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function te(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=z(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ae(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=V(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function ce(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=V(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ie(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=q(e,n,o);return{ref:s}}function ue(){const{setModal:e}=p();return c.useCallback((o,n)=>{const{ref:s}=q(o,e,n);return{ref:s}},[e])}const i={showDialog:Y,useShowDialog:Z,showPopover:ee,useShowPopover:oe,showResponsivePopover:se,useShowResponsivePopover:re,showMenu:ne,useShowMenu:te,showMessageBox:ae,useShowMessageBox:ce,showToast:ie,useShowToast:ue};try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}const pe={title:"User Feedback / Modals"},h={render:()=>{const e=i.useShowDialog();return a.jsx(u,{onClick:()=>{const{close:o}=e({headerText:"Dialog Title",children:"I'm a Dialog!",footer:a.jsx(X,{endContent:a.jsx(u,{onClick:()=>o(),children:"Close"})})})},children:"Show Dialog"})}},w={render:()=>{const e=i.useShowPopover();return a.jsx(u,{id:"modals-show-popover",onClick:()=>{e({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})}},m={render:()=>{const e=i.useShowResponsivePopover();return a.jsx(u,{id:"modals-show-responsive-popover",onClick:()=>{e({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})}},f={render:()=>{const e=i.useShowMenu();return a.jsx(u,{id:"modals-show-menu",onClick:()=>{e({opener:"modals-show-menu",headerText:"Menu Title",children:a.jsxs(a.Fragment,{children:[a.jsx(C,{text:"New File",icon:"add-document"}),a.jsx(C,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})}},v={render:()=>{const e=i.useShowMessageBox();return a.jsx(u,{onClick:()=>{e({type:J.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})}},g={render:()=>{const e=i.useShowToast();return a.jsx(u,{onClick:()=>{e({children:"I'm a Message Toast!"})},children:"Show Toast"})}};var y,S,P;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(P=(S=h.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,B,M;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(B=w.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,k,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var b,j,I;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(j=f.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var _,A,F;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(A=v.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var U,N,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(N=g.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const le=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Dialog:h,Menu:f,MessageBox:v,Popover:w,ResponsivePopover:m,Toast:g,__namedExportsOrder:le,default:pe},Symbol.toStringTag,{value:"Module"}));export{Pe as C,h as D,f as M,w as P,m as R,g as T,v as a};
