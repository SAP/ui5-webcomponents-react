import{j as o}from"./iframe-CpjYl_X5.js";import{useMDXComponents as h}from"./index-33t6PBxs.js";import{A as n}from"./ArgTypesWithNote-G6vWKWtZ.js";import{C as x}from"./ControlsWithNote-CJxz3cS3.js";import{D as j}from"./DocsHeader-C-cPnBsB.js";import{F as b}from"./CommandsAndQueries-EZVtGsJe.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BkWlBCqX.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-B576U6QV.js";import{T as d}from"./index-BvD3ZWmK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-joCwOwY7.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./Tag-DAYBa8yS.js";import"./index-C2_ggH5f.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./copy-xgKoT-7g.js";import"./copy-BKpc5Gew.js";import"./GitHub-Mark-DB1qLV4P.js";import"./TableOfContent-D2ZJCbj2.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./Select-BbN0n5sp.js";import"./InvisibleMessage-BskeonYB.js";import"./slim-arrow-down-BdbjdxUH.js";import"./slim-arrow-down-DwQAWsTD.js";import"./ResponsivePopoverCommon.css-DwHdHtV9.js";import"./ValueStateMessage.css-BUAJFQ99.js";import"./Option-DZvbArRC.js";import"./ListItemBaseTemplate-Bdi5-fvq.js";import"./ToolbarButton-DpDfiEDG.js";import"./overflow-CwWln5vM.js";import"./overflow-CBP-7Ucw.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
