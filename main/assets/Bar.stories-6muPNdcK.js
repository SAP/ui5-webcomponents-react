import{j as t}from"./ManagedStyles-0Bwp9t5R.js";import{G as l}from"./GitHub-Mark-QeDVj3uD.js";import{n as u}from"./nav-back-DX_nrM0l.js";import{B as m,a as d}from"./index-1CNtZYd5.js";import{B as g}from"./Button-C4siPQ_G.js";import{B as h}from"./index-KkA_w46_.js";import{I as x}from"./index-DCKZv6wy.js";import{L as f}from"./index-gyP_cJ1b.js";import{T as b}from"./index-BXoiAA8y.js";const j={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:d.Header,startContent:t.jsx("span",{children:"Start Content"}),children:t.jsx("span",{children:"Center Content"}),endContent:t.jsx("span",{children:"End Content"})},tags:["package:@ui5/webcomponents-fiori"]},e={},n={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{icon:u,design:g.Transparent}),t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}})]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(x,{placeholder:"Search"}),t.jsx(f,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(b,{children:"Bar"})})}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    return <Bar {...args} startContent={<>
            <Button icon={navBackIcon} design={ButtonDesign.Transparent} />
            <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png" alt="logo" style={{
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
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const B=["Default","WithCustomElements"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithCustomElements:n,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{E as C,e as D,n as W};
