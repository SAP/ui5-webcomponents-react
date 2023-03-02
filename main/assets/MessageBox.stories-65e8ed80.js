import{A as k}from"./DomRefTable.module-746f3f04.js";import{D as O}from"./DocsHeader-15a8236a.js";import{F as D}from"./Footer-ebebda66.js";import{j as e,a as i,F as m}from"./jsx-runtime-670450c2.js";import{M as g,a as u,b as v}from"./index-dbdcffd6.js";import{r as l}from"./index-f1f749bf.js";import{D as A}from"./DomRefTable-c536bce5.js";import"./chunk-G4YQS2SV-7a95a674.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as N,C as B,i as x}from"./index-a8c6d1d6.js";import{r as S}from"./index-96c5f47c.js";import{D as _}from"./DialogDomRef-ffa73df1.js";import{B as d}from"./index-2034a973.js";import{u as M}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-7cbae288.js";import"./iframe-a2c24f12.js";import"../sb-preview/runtime.mjs";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-2e5054c2.js";import"./Keys-50a1cb5a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f33ae237.js";import"./TableOfContent-b95d870a.js";import"./index-46d6c505.js";import"./WrappingType-b81e595a.js";import"./index-011b3eaa.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-e5ea7df7.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./index-99d317a4.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-368387c5.js";import"./Dialog-859ab2f5.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-2c4be2cb.js";import"./Title-18f6d5a1.js";import"./index-8ff5b4a2.js";import"./react-18-2bb9dade.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";const c=l.forwardRef((o,a)=>S.createPortal(e(g,{...o,ref:a}),document.body));c.displayName="MessageBox";try{c.displayName="MessageBox",c.__docgenInfo={description:"",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and a11y capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:null,description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:null,description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Success"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.",name:"onClose",required:!1,type:{name:"(event: CustomEvent<{ action: string; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. This event does not bubble.",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer. \`accessibleName\` should be used.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, { escPressed: boolean; }>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}function T(o={}){const{wrapper:a}=Object.assign({},M(),o.components);return a?e(a,{...o,children:e(s,{})}):s();function s(){const n=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",a:"a",h1:"h1"},M(),o.components);return i(m,{children:[e(N,{title:"Modals & Popovers / MessageBox",component:g,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:v.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}}}),`
`,e(O,{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(B,{children:e(x,{name:"Default",children:t=>{const[r,p]=l.useState(t.open),C=()=>{p(!0)},y=h=>{p(!1),t.onClose(h)};return l.useEffect(()=>{p(t.open)},[t.open]),i(m,{children:[e(d,{onClick:C,children:"Open Messagebox"}),e(c,{...t,open:r,onClose:y})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(k,{story:"Default"}),`
`,e(A,{rows:_}),`
`,e(n.h2,{children:"Opening and Closing MessageBoxes"}),`
`,i(n.p,{children:["Unlike ",e(n.code,{children:"Popovers"})," or ",e(n.code,{children:"Dialogs"}),", ",e(n.code,{children:"MessageBoxes"})," do not need to be provided with a ",e(n.code,{children:"ref"})," to be opened or closed. Instead, the ",e(n.code,{children:"open"})," prop can be used for this."]}),`
`,i(n.p,{children:[e(n.strong,{children:"Note:"})," ",e(n.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",e(n.code,{children:"ESC"})," key."]}),`
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
`,i(n.p,{children:["To add some logic to the respective actions you can use ",e(n.code,{children:"event.detail.action"})," inside ",e(n.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
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
`,i(n.p,{children:[e(n.code,{children:"MessageBoxes"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
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
`,e(B,{children:e(x,{name:"With Custom Action",args:{actions:[u.OK,"Custom Action",u.Cancel,e(d,{id:"custom-action",children:"Custom Button"},"0")]},children:t=>{const[r,p]=l.useState(!1);return i(m,{children:[e(d,{onClick:()=>{p(!0)},children:"Open Messagebox"}),e(c,{...t,open:r,onClose:h=>{h.detail.action,p(!1),t.onClose(h)}})]})}})}),`
`,e(D,{})]})}}const w=o=>{const[a,s]=l.useState(o.open),n=()=>{s(!0)},t=r=>{s(!1),o.onClose(r)};return l.useEffect(()=>{s(o.open)},[o.open]),i(m,{children:[e(d,{onClick:n,children:"Open Messagebox"}),e(c,{...o,open:a,onClose:t})]})};w.storyName="Default";w.parameters={storySource:{source:`args => {
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
}`}};const b=o=>{const[a,s]=l.useState(!1);return i(m,{children:[e(d,{onClick:()=>{s(!0)},children:"Open Messagebox"}),e(c,{...o,open:a,onClose:r=>{r.detail.action,s(!1),o.onClose(r)}})]})};b.storyName="With Custom Action";b.args={actions:[u.OK,"Custom Action",u.Cancel,e(d,{id:"custom-action",children:"Custom Button"},"0")]};b.parameters={storySource:{source:`args => {
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
}`}};const f={title:"Modals & Popovers / MessageBox",parameters:{chromatic:{delay:1e3}},component:g,args:{open:!1,type:v.Confirm,children:'Press "Escape" to close the MessageBox.'},argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomAction"]};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:T};const Qe=["defaultStory","withCustomAction"];export{Qe as __namedExportsOrder,f as default,w as defaultStory,b as withCustomAction};
//# sourceMappingURL=MessageBox.stories-65e8ed80.js.map
