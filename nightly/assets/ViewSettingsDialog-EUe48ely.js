import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./iframe-CDOEqb7u.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s,n as c,o as l,r as u,u as d}from"./blocks-BL36d_RL.js";import{b as f,f as p,t as m,u as h}from"./components-BxKQlBaO.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as v,c as y,d as b,f as x,i as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j}from"./ViewSettingsDialog.stories-CBGE_Xy3.js";function M(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{of:T}),`
`,(0,P.jsx)(p,{of:T,since:`0.20.0`}),`
`,(0,P.jsx)(`br`,{}),`
`,(0,P.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,P.jsx)(u,{of:A}),`
`,(0,P.jsx)(t.h2,{id:`with-custom-tabs`,children:`With Custom Tabs`}),`
`,(0,P.jsx)(u,{of:O}),`
`,(0,P.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,P.jsx)(f,{of:A}),`
`,(0,P.jsx)(t.h2,{id:`opening-viewsettingsdialog`,children:`Opening ViewSettingsDialog`}),`
`,(0,P.jsxs)(t.p,{children:[`You can open and close the `,(0,P.jsx)(t.code,{children:`ViewSettingsDialog`}),` component in a declarative way using the `,(0,P.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-jsx`,children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,(0,P.jsx)(d,{children:_}),`
`,(0,P.jsx)(t.h2,{id:`sortitem`,children:`SortItem`}),`
`,(0,P.jsx)(l,{of:k}),`
`,(0,P.jsx)(c,{exclude:r,of:k}),`
`,(0,P.jsx)(t.h2,{id:`filteritem`,children:`FilterItem`}),`
`,(0,P.jsx)(l,{of:D}),`
`,(0,P.jsx)(c,{exclude:r,of:D}),`
`,(0,P.jsx)(t.h2,{id:`filteritemoption`,children:`FilterItemOption`}),`
`,(0,P.jsx)(l,{of:b}),`
`,(0,P.jsx)(c,{exclude:r,of:b}),`
`,(0,P.jsx)(t.h2,{id:`groupitem`,children:`GroupItem`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.15.0`})}),`
`,(0,P.jsx)(l,{of:C}),`
`,(0,P.jsx)(c,{exclude:r,of:C}),`
`,(0,P.jsx)(t.h2,{id:`viewsettingsdialogcustomtab`,children:`ViewSettingsDialogCustomTab`}),`
`,(0,P.jsx)(t.p,{children:(0,P.jsx)(t.strong,{children:`Since v2.22.0`})}),`
`,(0,P.jsx)(l,{of:v}),`
`,(0,P.jsx)(c,{exclude:r,of:v}),`
`,(0,P.jsx)(h,{})]})}function N(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),a(),m(),g(),o(),w(),x(),y(),j(),E(),S(),n()})))()}F();export{N as default};