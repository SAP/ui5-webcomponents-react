import{A as k}from"./DomRefTable.module-9d048681.js";import{D}from"./DocsHeader-40fbd71a.js";import{F as O}from"./Footer-67049b4c.js";import{j as e,a,F as m}from"./jsx-runtime-670450c2.js";import{M as g,a as h,b as M}from"./index-a5eefd09.js";import{r as l}from"./index-f1f749bf.js";import{D as A}from"./DomRefTable-8ff0455c.js";import"./chunk-QDOP3WTA-4d67ff75.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as N,C as B,j as v}from"./index-2eb5db95.js";import{r as S}from"./index-96c5f47c.js";import{D as _}from"./DialogDomRef-ffa73df1.js";import{B as d}from"./index-f8eca0cc.js";import{u as x}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-6836c374.js";import"./iframe-387196f1.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b176d46e.js";import"./TableOfContent-7560364c.js";import"./index-283ce192.js";import"./WrappingType-b81e595a.js";import"./index-5c52c118.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-46eae42e.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-99d317a4.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./stopPropagation-da74d54e.js";import"./CssSizeVariables-bd372cde.js";import"./useIsomorphicId-78860c77.js";import"./index-31b5f75a.js";import"./Dialog-0097f4e9.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-3ba37536.js";import"./Title-b986a4bd.js";import"./index-087620fb.js";import"./react-18-2bb9dade.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";const c=l.forwardRef((n,i)=>S.createPortal(e(g,{...n,ref:i}),document.body));c.displayName="MessageBox";try{c.displayName="MessageBox",c.__docgenInfo={description:"",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

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

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}function T(n={}){const{wrapper:i}=Object.assign({},x(),n.components);return i?e(i,{...n,children:e(s,{})}):s();function s(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",a:"a",h1:"h1"},x(),n.components);return a(m,{children:[e(N,{title:"Modals & Popovers / MessageBox",component:g,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:M.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}}}),`
`,e(D,{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(B,{children:e(v,{name:"Default",children:t=>{const[r,p]=l.useState(t.open),C=()=>{p(!0)},y=u=>{p(!1),t.onClose(u)};return l.useEffect(()=>{p(t.open)},[t.open]),a(m,{children:[e(d,{onClick:C,children:"Open Messagebox"}),e(c,{...t,open:r,onClose:y})]})}})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(k,{story:"Default"}),`
`,e(A,{rows:_}),`
`,e(o.h2,{children:"Opening and Closing MessageBoxes"}),`
`,a(o.p,{children:["Unlike ",e(o.code,{children:"Popovers"})," or ",e(o.code,{children:"Dialogs"}),", ",e(o.code,{children:"MessageBoxes"})," do not need to be provided with a ",e(o.code,{children:"ref"})," to be opened or closed. Instead, the ",e(o.code,{children:"open"})," prop can be used for this."]}),`
`,a(o.p,{children:[e(o.strong,{children:"Note:"})," ",e(o.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",e(o.code,{children:"ESC"})," key."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,e(o.h2,{children:"Accessing actions in the onClose callback"}),`
`,a(o.p,{children:["To add some logic to the respective actions you can use ",e(o.code,{children:"event.detail.action"})," inside ",e(o.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,e(o.h2,{children:"Using MessageBoxes inside other components"}),`
`,a(o.p,{children:[e(o.code,{children:"MessageBoxes"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(o.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",e(o.code,{children:"MessageBox"})," outside of the DOM hierarchy of the parent component."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-JSX",children:`const MessageBoxComponent = () => {
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
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{children:"MessageBox with custom actions"}),`
`,e(B,{children:e(v,{name:"With Custom Action",args:{actions:[h.OK,"Custom Action",h.Cancel,e(d,{id:"custom-action",children:"Custom Button"},"0")]},children:t=>{const[r,p]=l.useState(!1);return a(m,{children:[e(d,{onClick:()=>{p(!0)},children:"Open Messagebox"}),e(c,{...t,open:r,onClose:u=>{u.detail.action,p(!1),t.onClose(u)}})]})}})}),`
`,e(O,{})]})}}const w=n=>{const[i,s]=l.useState(n.open),o=()=>{s(!0)},t=r=>{s(!1),n.onClose(r)};return l.useEffect(()=>{s(n.open)},[n.open]),a(m,{children:[e(d,{onClick:o,children:"Open Messagebox"}),e(c,{...n,open:i,onClose:t})]})};w.storyName="Default";w.parameters={storySource:{source:`args => {
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
}`}};const b=n=>{const[i,s]=l.useState(!1);return a(m,{children:[e(d,{onClick:()=>{s(!0)},children:"Open Messagebox"}),e(c,{...n,open:i,onClose:r=>{r.detail.action,s(!1),n.onClose(r)}})]})};b.storyName="With Custom Action";b.args={actions:[h.OK,"Custom Action",h.Cancel,e(d,{id:"custom-action",children:"Custom Button"},"0")]};b.parameters={storySource:{source:`args => {
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
}`}};const f={title:"Modals & Popovers / MessageBox",parameters:{chromatic:{delay:1e3}},component:g,args:{open:!1,type:M.Confirm,children:'Press "Escape" to close the MessageBox.'},argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomAction"]};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:T};const Ze=["defaultStory","withCustomAction"];export{Ze as __namedExportsOrder,f as default,w as defaultStory,b as withCustomAction};
//# sourceMappingURL=MessageBox.stories-017461ca.js.map
