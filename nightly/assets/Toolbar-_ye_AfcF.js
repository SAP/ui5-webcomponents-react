import{j as o}from"./iframe-DvixYE7k.js";import{useMDXComponents as h}from"./index-DvcP8w-F.js";import{A as n}from"./ArgTypesWithNote-DCB2HZQX.js";import{C as x}from"./ControlsWithNote-s_60twtr.js";import{D as j}from"./DocsHeader-BkkmtBJn.js";import{F as b}from"./CommandsAndQueries-BP59pkyc.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CTAO90yM.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-D8PphoDm.js";import{T as d}from"./index-DxYLFOQl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGjL_ZJV.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./Tag-CHowEnLY.js";import"./index-BiNCRTue.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./copy-BSDmbcVi.js";import"./copy-CVzsP6l9.js";import"./GitHub-Mark-1hS7OttQ.js";import"./TableOfContent-gAqVWuC4.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./Select-DsKB4JBR.js";import"./InvisibleMessage-BYn7ctRV.js";import"./slim-arrow-down-BZHFnOJT.js";import"./slim-arrow-down-Bl8g1r6x.js";import"./ResponsivePopoverCommon.css-B5iSbHgX.js";import"./ValueStateMessage.css-Dh9bgGbN.js";import"./Option-CbzqeI1G.js";import"./ListItemBaseTemplate-0XXQ3IbQ.js";import"./ToolbarButton-mznySg5T.js";import"./overflow-B3unXxFe.js";import"./overflow-BC5195Qg.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
