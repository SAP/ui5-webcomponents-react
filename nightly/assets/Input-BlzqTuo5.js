import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./InputIcon-5ycoYW36.js";import{i,n as a,r as o,t as s}from"./SuggestionItemGroup-Ujxxrv3J.js";import{i as c,r as l}from"./iframe-YU-DW5QF.js";import{i as u,r as d}from"./react-fLZJfuRT.js";import{_ as f,d as p,o as m,r as h,u as g}from"./blocks-D4P5IKNV.js";import{S as _,b as v,f as y,t as b,u as x}from"./components-BAyU7DX7.js";import{n as S,t as C}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as w,i as T,n as E,o as D,r as O,t as k}from"./Input.stories-Bg9Ym26i.js";function A(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...u(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(p,{of:O}),`
`,(0,M.jsx)(y,{of:O,subComponents:[`InputIcon`]}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,M.jsx)(h,{of:k}),`
`,(0,M.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,M.jsx)(v,{of:k}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h3,{id:`fully-controlled-input`,children:`Fully Controlled Input`}),`
`,(0,M.jsxs)(t.p,{children:[`Different from the native `,(0,M.jsx)(t.code,{children:`input`}),` element, the `,(0,M.jsx)(t.code,{children:`Input`}),` (`,(0,M.jsx)(t.code,{children:`ui5-input`}),`) web component is uncontrolled even if the `,(0,M.jsx)(t.code,{children:`value`}),` prop is provided (see `,(0,M.jsx)(t.a,{href:`https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable`,rel:`nofollow`,children:`React docs`}),`).
To make it fully controlled, call `,(0,M.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,M.jsx)(t.code,{children:`onInput`}),` handler.`]}),`
`,(0,M.jsxs)(t.p,{children:[`In the example below, only letters are allowed to be entered into the `,(0,M.jsx)(t.code,{children:`Input`}),` component.`]}),`
`,(0,M.jsx)(h,{of:E}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-ts`,children:`const handleInput: InputPropTypes['onInput'] = (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (/^[a-zA-Z]*$/.test(value)) {
    setValue(value);
  }
};
`})}),`
`,(0,M.jsx)(t.h3,{id:`input-with-customizable-suggestionitem`,children:`Input with customizable SuggestionItem`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`SuggestionItem`}),` represents the suggestion item of the `,(0,M.jsx)(t.code,{children:`Input`})]}),`
`,(0,M.jsx)(h,{of:w}),`
`,(0,M.jsx)(t.h3,{id:`input-with-inputicon`,children:`Input with InputIcon`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`InputIcon`}),` component represents an interactive icon that can be placed inside an `,(0,M.jsx)(t.code,{children:`Input`}),` via the `,(0,M.jsx)(t.code,{children:`icon`}),` slot.
Unlike the standard `,(0,M.jsx)(t.code,{children:`Icon`}),`, it provides button-like behavior with hover, focus, and active states.`]}),`
`,(0,M.jsx)(h,{of:T}),`
`,(0,M.jsx)(g,{children:C}),`
`,(0,M.jsx)(t.h2,{id:`inputicon`,children:`InputIcon`}),`
`,(0,M.jsx)(m,{of:r}),`
`,(0,M.jsx)(_,{metaOf:O,hideHTMLPropsNote:!0,of:r}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitem`,children:`SuggestionItem`}),`
`,(0,M.jsx)(m,{of:o}),`
`,(0,M.jsx)(_,{metaOf:O,hideHTMLPropsNote:!0,exclude:l,of:o}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitemgroup`,children:`SuggestionItemGroup`}),`
`,(0,M.jsx)(m,{of:s}),`
`,(0,M.jsx)(_,{metaOf:O,of:s,hideHTMLPropsNote:!0,exclude:l}),`
`,(0,M.jsx)(x,{})]})}function j(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),d(),b(),S(),f(),n(),a(),i(),D(),c()})))()}N();export{j as default};