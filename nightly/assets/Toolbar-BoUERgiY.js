import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./ToolbarButton-BMN_UtyH.js";import{i,r as a}from"./react-BOKIvUzN.js";import{_ as o,d as s,o as c,r as l,u}from"./blocks-CKwWy9w8.js";import{S as d,b as f,f as p,t as m,u as h}from"./components-vOco9h7o.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as v,c as y,d as b,f as x,h as S,i as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M}from"./Toolbar.stories-BjDh0QX2.js";function N(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(s,{of:k}),`
`,(0,F.jsx)(p,{of:k,since:`1.19.0`}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,F.jsx)(l,{of:j}),`
`,(0,F.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,F.jsx)(f,{of:j}),`
`,(0,F.jsx)(t.h2,{id:`toolbaritem`,children:`ToolbarItem`}),`
`,(0,F.jsx)(t.p,{children:`ToolbarItem wrapper used to add any component to Toolbar.`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Note:`}),` To display the radio buttons and checkboxes in a column in the overflow popover, the `,(0,F.jsx)(t.code,{children:`toolbar-item-group`}),` CSS class is used:`]}),`
`,(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-css`,children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,(0,F.jsx)(l,{of:C}),`
`,(0,F.jsx)(t.h2,{id:`opening-popovers-via-toolbarbutton`,children:`Opening Popovers via ToolbarButton`}),`
`,(0,F.jsxs)(t.p,{children:[`Since the `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),` is an `,(0,F.jsx)(t.a,{href:`?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components`,children:`abstract UI5 web component`}),`, the opener of the `,(0,F.jsx)(t.code,{children:`Popover`}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,(0,F.jsx)(t.code,{children:`@ui5/webcomponents(-react)`}),`, the `,(0,F.jsx)(t.code,{children:`detail`}),` property of the `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),`'s click handler now includes a `,(0,F.jsx)(t.code,{children:`targetRef`}),` property, which can be used as the opener.`]}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Note:`}),` To prevent the overflow popover from closing when the opener `,(0,F.jsx)(t.code,{children:`ToolbarButton`}),` of the Popover is clicked, you can call `,(0,F.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,F.jsx)(t.code,{children:`onClick`}),` event handler.`]}),`
`,(0,F.jsx)(l,{of:E}),`
`,(0,F.jsx)(t.h3,{id:`example-code`,children:`Example Code`}),`
`,(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-tsx`,children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
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
`,(0,F.jsx)(u,{children:_}),`
`,(0,F.jsx)(t.h2,{id:`toolbaritem-1`,children:`ToolbarItem`}),`
`,(0,F.jsx)(c,{of:T}),`
`,(0,F.jsx)(d,{metaOf:k,of:T}),`
`,(0,F.jsx)(t.h2,{id:`toolbarbutton`,children:`ToolbarButton`}),`
`,(0,F.jsx)(c,{of:r}),`
`,(0,F.jsx)(d,{metaOf:k,of:r}),`
`,(0,F.jsx)(t.h2,{id:`toolbarselect`,children:`ToolbarSelect`}),`
`,(0,F.jsx)(c,{of:x}),`
`,(0,F.jsx)(d,{metaOf:k,of:x}),`
`,(0,F.jsx)(t.h2,{id:`toolbarselectoption`,children:`ToolbarSelectOption`}),`
`,(0,F.jsx)(c,{of:M}),`
`,(0,F.jsx)(d,{metaOf:k,of:M}),`
`,(0,F.jsx)(t.h2,{id:`toolbarseparator`,children:`ToolbarSeparator`}),`
`,(0,F.jsx)(c,{of:y}),`
`,(0,F.jsx)(d,{metaOf:k,of:y}),`
`,(0,F.jsx)(t.h2,{id:`toolbarspacer`,children:`ToolbarSpacer`}),`
`,(0,F.jsx)(c,{of:D}),`
`,(0,F.jsx)(d,{metaOf:k,of:D}),`
`,(0,F.jsx)(h,{})]})}function P(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),a(),m(),g(),o(),n(),S(),O(),b(),w(),A(),v()})))()}I();export{P as default};