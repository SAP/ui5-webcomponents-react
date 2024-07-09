import{j as t}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{G as l}from"./GitHub-Mark-D3Wkw5er.js";import{B as u}from"./BarDesign-BLoXVb05.js";import{B as d}from"./Button-BNnZDQ19.js";import"./UI5Element-CpDKvy14.js";import"./nav-back-BjNAZYYL.js";import{B as g}from"./index-Bfa5x2b5.js";import{I as h}from"./index-B7pSOU5b.js";import{L as x}from"./index-CIJQg1Ki.js";import{T as f}from"./index-DITg_8gn.js";import{B as m}from"./index-BAN4eIQu.js";const b="nav-back",B={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:u.Header,startContent:t.jsx("span",{children:"Start Content"}),children:t.jsx("span",{children:"Center Content"}),endContent:t.jsx("span",{children:"End Content"})},tags:["package:@ui5/webcomponents-fiori"]},e={},n={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(g,{icon:b,design:d.Transparent}),t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}})]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{placeholder:"Search"}),t.jsx(x,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(f,{children:"Bar"})})}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const j=["Default","WithCustomElements"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithCustomElements:n,__namedExportsOrder:j,default:B},Symbol.toStringTag,{value:"Module"}));export{P as C,e as D,n as W};
