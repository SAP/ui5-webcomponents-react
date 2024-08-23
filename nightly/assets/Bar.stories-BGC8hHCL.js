import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{G as l}from"./GitHub-Mark-07DkmEp8.js";import{B as u}from"./BarDesign-BLoXVb05.js";import{B as d}from"./Button-B2giC9cI.js";import"./withWebComponent-_WQ2NUTk.js";import"./nav-back-B0X-iLb0.js";import{B as g}from"./index-vVMuEgPM.js";import{I as h}from"./index-CBPyIDIC.js";import{L as x}from"./index-DmY6wLrA.js";import{T as f}from"./index-GL_VUH3Y.js";import{B as m}from"./index-Ad8GkoGe.js";const b="nav-back",B={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:u.Header,startContent:t.jsx("span",{children:"Start Content"}),children:t.jsx("span",{children:"Center Content"}),endContent:t.jsx("span",{children:"End Content"})},tags:["package:@ui5/webcomponents-fiori"]},e={},r={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(g,{icon:b,design:d.Transparent}),t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}})]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{placeholder:"Search"}),t.jsx(x,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(f,{children:"Bar"})})}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    return <Bar {...args} startContent={<>
            <Button icon={navBackIcon} design={ButtonDesign.Transparent} />
            <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png" alt="logo" style={{
        marginLeft: '6px',
        width: '120px'
      }} />
          </>} endContent={<>
            <Input placeholder="Search" />
            <Link style={{
        marginLeft: '6px'
      }} href="https://github.com/SAP/ui5-webcomponents-react" target="_blank">
              <GitHubLogo />
            </Link>
          </>}>
        <Title>Bar</Title>
      </Bar>;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const j=["Default","WithCustomElements"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithCustomElements:r,__namedExportsOrder:j,default:B},Symbol.toStringTag,{value:"Module"}));export{P as C,e as D,r as W};
