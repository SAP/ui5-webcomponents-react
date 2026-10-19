import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./ColorPaletteItem-CupeDYfI.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s,n as c,o as l,r as u,u as d}from"./blocks-BPOhBw-k.js";import{b as f,f as p,t as m,u as h}from"./components-Cws1YkAX.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{n as v,r as y,t as b}from"./ColorPalettePopover.stories-LjboVQmj.js";function x(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s,{of:b}),`
`,(0,C.jsx)(p,{of:b,since:`0.20.0`}),`
`,(0,C.jsx)(`br`,{}),`
`,(0,C.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsx)(u,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,C.jsx)(f,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`opening-colorpalettepopovers`,children:`Opening ColorPalettePopovers`}),`
`,(0,C.jsxs)(t.p,{children:[`You can open and close the `,(0,C.jsx)(t.code,{children:`ColorPalettePopover`}),` component in a declarative way using the `,(0,C.jsx)(t.code,{children:`open`}),` and `,(0,C.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-jsx`,children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,(0,C.jsx)(d,{children:_}),`
`,(0,C.jsx)(t.h2,{id:`colorpaletteitem`,children:`ColorPaletteItem`}),`
`,(0,C.jsx)(l,{of:r}),`
`,(0,C.jsx)(c,{of:r}),`
`,(0,C.jsx)(h,{})]})}function S(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),a(),m(),o(),y(),g(),n()})))()}w();export{S as default};