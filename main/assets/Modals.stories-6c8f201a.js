import{j as c,a as G,F as J}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{u as p}from"./ModalsContext-131e4070.js";import{M as K,b as L}from"./index-f45c3cc3.js";import{M as Q,a as C}from"./index-d0c7caf1.js";import{T as y}from"./index-a28e4ea6.js";import{D as W}from"./index-0606b9bd.js";import{P as X}from"./index-d9bed319.js";import{R as Y}from"./index-f2bf222d.js";import{B as u}from"./index-5599defc.js";import{B as Z}from"./index-b416e93c.js";const l=()=>"randomUUID"in crypto?crypto.randomUUID():window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),d=e=>{e||console.error("Please make sure that your application is wrapped in the '<ThemeProvider />' component.")};function H(e,o,n){d(o);const s=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:W,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function O(e,o,n){d(o);const s=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:X,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function E(e,o,n){d(o);const s=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:Y,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function z(e,o,n){d(o);const s=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:Q,props:{...e,open:!0,onAfterClose:t=>{typeof e.onAfterClose=="function"&&e.onAfterClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function V(e,o,n){d(o);const s=l(),r=a.createRef();return o==null||o({type:"set",payload:{Component:K,props:{...e,open:!0,onClose:t=>{typeof e.onClose=="function"&&e.onClose(t),o({type:"reset",payload:{id:s}})}},ref:r,container:n,id:s}}),{ref:r}}function q(e,o,n){const s=a.createRef();d(o);const r=l();return o==null||o({type:"set",payload:{Component:y,props:{...e},ref:t=>{s.current=t,t&&!t.open&&(t.show(),setTimeout(()=>{o({type:"reset",payload:{id:r}})},e.duration??y.defaultProps.duration))},container:n,id:r}}),{ref:s}}function ee(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=H(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function oe(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=H(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function se(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=O(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function re(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=O(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ne(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=E(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function te(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=E(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ae(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=z(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function ce(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=z(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function ie(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=V(e,n,o);return{ref:s,close:()=>{var t;(t=s.current)==null||t.close()}}}function ue(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=V(o,e,n);return{ref:s,close:()=>{var r;(r=s.current)==null||r.close()}}},[e])}function pe(e,o){var r;const n=(r=window["@ui5/webcomponents-react"])==null?void 0:r.setModal,{ref:s}=q(e,n,o);return{ref:s}}function le(){const{setModal:e}=p();return a.useCallback((o,n)=>{const{ref:s}=q(o,e,n);return{ref:s}},[e])}const i={showDialog:ee,useShowDialog:oe,showPopover:se,useShowPopover:re,showResponsivePopover:ne,useShowResponsivePopover:te,showMenu:ae,useShowMenu:ce,showMessageBox:ie,useShowMessageBox:ue,showToast:pe,useShowToast:le};try{i.displayName="Modals",i.__docgenInfo={description:`Utility class for opening modals in an imperative way.

These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
network calls.`,displayName:"Modals",props:{}}}catch{}const de={title:"User Feedback / Modals"},h={render:()=>{const e=i.useShowDialog();return c(u,{onClick:()=>{const{close:o}=e({headerText:"Dialog Title",children:"I'm a Dialog!",footer:c(Z,{endContent:c(u,{onClick:()=>o(),children:"Close"})})})},children:"Show Dialog"})}},w={render:()=>{const e=i.useShowPopover();return c(u,{id:"modals-show-popover",onClick:()=>{e({opener:"modals-show-popover",headerText:"Popover Title",children:"I'm a Popover!"})},children:"Show Popover"})}},m={render:()=>{const e=i.useShowResponsivePopover();return c(u,{id:"modals-show-responsive-popover",onClick:()=>{e({opener:"modals-show-responsive-popover",headerText:"Responsive Popover Title",children:"I'm a Responsive Popover!"})},children:"Show ResponsivePopover"})}},f={render:()=>{const e=i.useShowMenu();return c(u,{id:"modals-show-menu",onClick:()=>{e({opener:"modals-show-menu",headerText:"Menu Title",children:G(J,{children:[c(C,{text:"New File",icon:"add-document"}),c(C,{text:"New Folder",icon:"add-folder",disabled:!0})]})})},children:"Show Menu"})}},v={render:()=>{const e=i.useShowMessageBox();return c(u,{onClick:()=>{e({type:L.Confirm,children:"Can you see this MessageBox?"})},children:"Show MessageBox"})}},g={render:()=>{const e=i.useShowToast();return c(u,{onClick:()=>{e({children:"I'm a Message Toast!"})},children:"Show Toast"})}};var S,P,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(P=h.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var x,B,M;w.parameters={...w.parameters,docs:{...(x=w.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(B=w.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var k,R,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var b,I,_;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(I=f.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,F,U;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(F=v.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var N,$,j;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const he=["Dialog","Popover","ResponsivePopover","Menu","MessageBox","Toast"],Be=Object.freeze(Object.defineProperty({__proto__:null,Dialog:h,Menu:f,MessageBox:v,Popover:w,ResponsivePopover:m,Toast:g,__namedExportsOrder:he,default:de},Symbol.toStringTag,{value:"Module"}));export{Be as C,h as D,f as M,w as P,m as R,g as T,v as a};
//# sourceMappingURL=Modals.stories-6c8f201a.js.map
