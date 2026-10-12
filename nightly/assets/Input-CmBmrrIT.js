import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,n as r,r as i,t as a}from"./SuggestionItemGroup-YXx9giV-.js";import{i as o,r as s}from"./iframe-B327VbxB.js";import{i as c,r as l}from"./react-BOKIvUzN.js";import{_ as u,d,o as f,r as p,u as m}from"./blocks-CKwWy9w8.js";import{S as h,b as g,f as _,t as v,u as y}from"./components-vOco9h7o.js";import{n as b,t as x}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as S,c as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./Input.stories-B-ITR_zh.js";function A(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(d,{of:D}),`
`,(0,M.jsx)(_,{of:D,subComponents:[`InputIcon`]}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,M.jsx)(p,{of:k}),`
`,(0,M.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,M.jsx)(g,{of:k}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h3,{id:`fully-controlled-input`,children:`Fully Controlled Input`}),`
`,(0,M.jsxs)(t.p,{children:[`Different from the native `,(0,M.jsx)(t.code,{children:`input`}),` element, the `,(0,M.jsx)(t.code,{children:`Input`}),` (`,(0,M.jsx)(t.code,{children:`ui5-input`}),`) web component is uncontrolled even if the `,(0,M.jsx)(t.code,{children:`value`}),` prop is provided (see `,(0,M.jsx)(t.a,{href:`https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable`,rel:`nofollow`,children:`React docs`}),`).
To make it fully controlled, call `,(0,M.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,M.jsx)(t.code,{children:`onInput`}),` handler.`]}),`
`,(0,M.jsxs)(t.p,{children:[`In the example below, only letters are allowed to be entered into the `,(0,M.jsx)(t.code,{children:`Input`}),` component.`]}),`
`,(0,M.jsx)(p,{of:T}),`
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
`,(0,M.jsx)(p,{of:S}),`
`,(0,M.jsx)(t.h3,{id:`input-with-inputicon`,children:`Input with InputIcon`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`InputIcon`}),` component represents an interactive icon that can be placed inside an `,(0,M.jsx)(t.code,{children:`Input`}),` via the `,(0,M.jsx)(t.code,{children:`icon`}),` slot.
Unlike the standard `,(0,M.jsx)(t.code,{children:`Icon`}),`, it provides button-like behavior with hover, focus, and active states.`]}),`
`,(0,M.jsx)(p,{of:w}),`
`,(0,M.jsx)(m,{children:x}),`
`,(0,M.jsx)(t.h2,{id:`inputicon`,children:`InputIcon`}),`
`,(0,M.jsx)(f,{of:O}),`
`,(0,M.jsx)(h,{metaOf:D,hideHTMLPropsNote:!0,of:O}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitem`,children:`SuggestionItem`}),`
`,(0,M.jsx)(f,{of:i}),`
`,(0,M.jsx)(h,{metaOf:D,hideHTMLPropsNote:!0,exclude:s,of:i}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitemgroup`,children:`SuggestionItemGroup`}),`
`,(0,M.jsx)(f,{of:a}),`
`,(0,M.jsx)(h,{metaOf:D,of:a,hideHTMLPropsNote:!0,exclude:s}),`
`,(0,M.jsx)(y,{})]})}function j(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),l(),v(),b(),u(),C(),r(),n(),E(),o()})))()}N();export{j as default};