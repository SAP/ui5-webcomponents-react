import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-BOKIvUzN.js";import{_ as i,d as a,r as o}from"./blocks-BZbg3aby.js";import{b as s,f as c,t as l,u}from"./components-AtID__O7.js";import{n as d,r as f,t as p}from"./ActionSheet.stories-BgIWtLoQ.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(c,{of:p,subComponents:[`Button`],deprecationText:"This component has a number of limitations. Use a `Menu` instead of the `ActionSheet` whenever possible."}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(o,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`opening-actionsheets`,children:`Opening ActionSheets`}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` and `,(0,g.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const MyComponentWithActionSheet = () => {
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
`,(0,g.jsx)(t.p,{children:(0,g.jsxs)(t.strong,{children:[`Opening an `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` by reference`]})}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` exposes a way to pass a reference of an element instead of an `,(0,g.jsx)(t.code,{children:`id`}),` to the `,(0,g.jsx)(t.code,{children:`opener`}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const ActionSheetComponent = () => {
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
`,(0,g.jsx)(u,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),l(),i(),f()})))()}_();export{h as default};