import{j as n}from"./iframe-D3WSfxnn.js";import{useMDXComponents as i}from"./index-INJaxUMc.js";import{M as p,C as c}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import{C as a}from"./ControlsWithNote-bBb_VS4m.js";import{D as m}from"./DocsHeader-i6mSv8qc.js";import{F as h}from"./CommandsAndQueries-D0ehjJEo.js";import{C as o,D as r}from"./ActionSheet.stories-CKI5rOqQ.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./index-BE0SODKX.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./copy-CY1Urzho.js";import"./copy-B0_WxO9i.js";import"./GitHub-Mark-B9By78RC.js";import"./TableOfContent-D7UH4733.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./delete-BOOuxbhQ.js";import"./utils-BE8JeYQm.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function T(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{T as default};
