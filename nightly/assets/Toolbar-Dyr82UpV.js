import{j as o}from"./iframe-D9TrNBgU.js";import{useMDXComponents as h}from"./index-DVnXt3Ou.js";import{A as n}from"./ArgTypesWithNote-SPqVTZOw.js";import{C as x}from"./ControlsWithNote-CSjZ13nD.js";import{D as j}from"./DocsHeader-0Jjxl0tR.js";import{F as b}from"./CommandsAndQueries-D4YJbg3c.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CZTCdXhi.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-kwTafBze.js";import{T as d}from"./index-AEosqd4D.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BNvAHmYG.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Tag-Dxsn5xSE.js";import"./index-CVrKfxdZ.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./copy-idIQo1yB.js";import"./copy-DLBvKbOK.js";import"./GitHub-Mark-CR-XH0WA.js";import"./TableOfContent-Bm0N_0e1.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./Select-DHXu7QxQ.js";import"./InvisibleMessage-B7KEwtPS.js";import"./slim-arrow-down-CjNPHzOs.js";import"./slim-arrow-down-C2JXuKwB.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Option-DQLWMMud.js";import"./ListItemBaseTemplate-ZtPbHRna.js";import"./ToolbarButton-BOnNmHYH.js";import"./overflow-BV27gQYS.js";import"./overflow-BgRbBRcw.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
