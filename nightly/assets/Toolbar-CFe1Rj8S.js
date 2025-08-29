import{j as o}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as h}from"./index-DBGwXOnP.js";import{A as n}from"./ArgTypesWithNote-CLmVF_cj.js";import{C as x}from"./ControlsWithNote-CMyxfP3l.js";import{D as j}from"./DocsHeader-C8XbMA3a.js";import{F as b}from"./CommandsAndQueries-Cb3G3ka5.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DynXzMxo.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CDxEUQQN.js";import{T as d}from"./index-D0nJ5WCK.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CqdKq5PF.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./Tag-CzQty8rY.js";import"./index-TINCTucQ.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./copy-CJQmrf12.js";import"./copy-CWrvVeie.js";import"./GitHub-Mark-BcD1_bIs.js";import"./TableOfContent-AMPzVTY_.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./Select-CatGjmg8.js";import"./InvisibleMessage-DYgdDzKE.js";import"./slim-arrow-down-CJjWd9wb.js";import"./slim-arrow-down-DMLXw6xT.js";import"./ResponsivePopoverCommon.css-Ba71pV2j.js";import"./ValueStateMessage.css-rpNnQiGf.js";import"./Option-DAiofa7l.js";import"./ListItemBaseTemplate-UHhLaiyc.js";import"./ToolbarButton-y4E-n-4L.js";import"./overflow-DoHZFAr7.js";import"./overflow-DkDib3sR.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
