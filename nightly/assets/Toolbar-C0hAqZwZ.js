import{j as o}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as h}from"./index-lDTLJk7j.js";import{A as n}from"./ArgTypesWithNote-BDXETI9-.js";import{C as x}from"./ControlsWithNote-CA46pQAN.js";import{D as j}from"./DocsHeader-BQtE_pzP.js";import{F as b}from"./CommandsAndQueries-BGpNLpHt.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-Cil-35LB.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-Dcel3ANo.js";import{T as d}from"./index-DOb5lcb5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-aevS7PA-.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./Tag-BIgoED-u.js";import"./index-DceE06Sq.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./copy-CX8AOcqp.js";import"./copy-E4FhZn3x.js";import"./GitHub-Mark-avIXmTtc.js";import"./TableOfContent-ew4WB2x2.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./Select-CsDTuuP5.js";import"./InvisibleMessage-Btu_O-HX.js";import"./slim-arrow-down-Ba9Bx2ZK.js";import"./slim-arrow-down-C3AMNhFD.js";import"./ResponsivePopoverCommon.css-BwJ1vIxv.js";import"./ValueStateMessage.css-Fubl11x4.js";import"./Option-BvmKpK6T.js";import"./ListItemBaseTemplate-C2zYVBWE.js";import"./ToolbarButton-C1TKh5IB.js";import"./overflow-CcM6bvDg.js";import"./overflow-CAAGEowA.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};
