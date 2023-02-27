import{A}from"./DomRefTable.module-bd2f6310.js";import{D as y}from"./DocsHeader-7b277ff6.js";import{F as S}from"./Footer-a200614f.js";import{a as r,F as d,j as e}from"./jsx-runtime-670450c2.js";import{M as l,a as u,b}from"./index-edbae7f3.js";import{r as p}from"./index-f1f749bf.js";import{D}from"./DomRefTable-693c15e9.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as w,C as M,i as x}from"./index-08f5a92a.js";import{D as v}from"./DialogDomRef-ffa73df1.js";import{B as m}from"./index-b7f80a1d.js";import{u as O}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-c79180df.js";import"./iframe-baaa6734.js";import"../sb-preview/runtime.mjs";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-e1b15b5b.js";import"./Keys-50a1cb5a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./WrappingType-b81e595a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-65416cbf.js";import"./Popover-5336e3a5.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./index-99d317a4.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-26f1131d.js";import"./Dialog-fe19aed2.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-349afbe4.js";import"./Title-18f6d5a1.js";import"./index-4e221527.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";function E(o={}){const{wrapper:c}=Object.assign({},O(),o.components);return c?e(c,{...o,children:e(s,{})}):s();function s(){const n=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",a:"a",h1:"h1"},O(),o.components);return r(d,{children:[e(w,{title:"Modals & Popovers / MessageBox",component:l,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:b.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}}}),`
`,e(y,{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(M,{children:e(x,{name:"Default",children:t=>{const[i,a]=p.useState(t.open),f=()=>{a(!0)},B=h=>{a(!1),t.onClose(h)};return p.useEffect(()=>{a(t.open)},[t.open]),r(d,{children:[e(m,{onClick:f,children:"Open Messagebox"}),e(l,{...t,open:i,onClose:B})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(A,{story:"Default"}),`
`,e(D,{rows:v}),`
`,e(n.h2,{children:"Opening and Closing MessageBoxes"}),`
`,r(n.p,{children:["Unlike ",e(n.code,{children:"Popovers"})," or ",e(n.code,{children:"Dialogs"}),", ",e(n.code,{children:"MessageBoxes"})," do not need to be provided with a ",e(n.code,{children:"ref"})," to be opened or closed. Instead, the ",e(n.code,{children:"open"})," prop can be used for this."]}),`
`,r(n.p,{children:[e(n.strong,{children:"Note:"})," ",e(n.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",e(n.code,{children:"ESC"})," key."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox open={open} onClose={handleClose}>
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,e(n.h2,{children:"Accessing actions in the onClose callback"}),`
`,r(n.p,{children:["To add some logic to the respective actions you can use ",e(n.code,{children:"event.detail.action"})," inside ",e(n.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    if (event.detail.action === MessageBoxActions.OK) {
      // do something on "Ok" button click
    } else if (event.detail.action === 'Custom Action') {
      // do something on "Custom Action" click
    } else {
      // do something on "Cancel" or "Abort" button click
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        open={open}
        onClose={handleClose}
        actions={[MessageBoxActions.OK, 'Custom Action', MessageBoxActions.Cancel, MessageBoxActions.Abort]}
      >
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,e(n.h2,{children:"Using MessageBoxes inside other components"}),`
`,r(n.p,{children:[e(n.code,{children:"MessageBoxes"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(n.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",e(n.code,{children:"MessageBox"})," outside of the DOM hierarchy of the parent component."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-JSX",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      {createPortal(
        <MessageBox open={open} onClose={handleClose}>
          Content
        </MessageBox>,
        document.body
      )}
    </>
  );
};
`})}),`
`,e(n.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(n.h2,{children:"MessageBox with custom actions"}),`
`,e(M,{children:e(x,{name:"With Custom Action",args:{actions:[u.OK,"Custom Action",u.Cancel,e(m,{id:"custom-action",children:"Custom Button"},"0")]},children:t=>{const[i,a]=p.useState(!1);return r(d,{children:[e(m,{onClick:()=>{a(!0)},children:"Open Messagebox"}),e(l,{...t,open:i,onClose:h=>{h.detail.action,a(!1),t.onClose(h)}})]})}})}),`
`,e(S,{})]})}}const k=o=>{const[c,s]=p.useState(o.open),n=()=>{s(!0)},t=i=>{s(!1),o.onClose(i)};return p.useEffect(()=>{s(o.open)},[o.open]),r(d,{children:[e(m,{onClick:n,children:"Open Messagebox"}),e(l,{...o,open:c,onClose:t})]})};k.storyName="Default";k.parameters={storySource:{source:`args => {
  const [open, setOpen] = useState(isChromatic || args.open);

  const onButtonClick = () => {
    setOpen(true);
  };

  const handleClose = e => {
    setOpen(false);
    args.onClose(e);
  };

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);
  return <>
          <Button onClick={onButtonClick}>Open Messagebox</Button>
          <MessageBox {...args} open={open} onClose={handleClose} />
        </>;
}`}};const g=o=>{const[c,s]=p.useState(!1);return r(d,{children:[e(m,{onClick:()=>{s(!0)},children:"Open Messagebox"}),e(l,{...o,open:c,onClose:i=>{i.detail.action,s(!1),o.onClose(i)}})]})};g.storyName="With Custom Action";g.args={actions:[u.OK,"Custom Action",u.Cancel,e(m,{id:"custom-action",children:"Custom Button"},"0")]};g.parameters={storySource:{source:`args => {
  const [open, setOpen] = useState(false);

  const onButtonClick = () => {
    setOpen(true);
  };

  const handleClose = e => {
    if (e.detail.action === "Custom Action") {// do something on "Custom Action" button click
    }

    setOpen(false);
    args.onClose(e);
  };

  return <>
          <Button onClick={onButtonClick}>Open Messagebox</Button>
          <MessageBox {...args} open={open} onClose={handleClose} />
        </>;
}`}};const C={title:"Modals & Popovers / MessageBox",parameters:{chromatic:{delay:1e3}},component:l,args:{open:!1,type:b.Confirm,children:'Press "Escape" to close the MessageBox.'},argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomAction"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:E};const Ge=["defaultStory","withCustomAction"];export{Ge as __namedExportsOrder,C as default,k as defaultStory,g as withCustomAction};
//# sourceMappingURL=MessageBox.stories-1f1b7c73.js.map
