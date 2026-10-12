import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-BOKIvUzN.js";import{_ as i,d as a,r as o}from"./blocks-BotZtXPk.js";import{b as s,f as c,t as l,u}from"./components-oB2MmGM3.js";import{n as d,r as f,t as p}from"./Toast.stories-BGBEFFDV.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(c,{of:d,since:`0.9.0`}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`show-a-toast`,children:`Show a toast`}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`Toast`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Example`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,(0,g.jsx)(u,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),l(),i(),f()})))()}_();export{h as default};