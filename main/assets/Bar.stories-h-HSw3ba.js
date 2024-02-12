import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{G as l}from"./GitHub-Mark-JYujJlUX.js";import{n as d}from"./nav-back-MGvfVjvD.js";import{B as m,a as u}from"./index-MxmtXPWc.js";import{B as g}from"./Button-MUpci_CC.js";import{B as h}from"./index-65hQ6iR6.js";import{I as f}from"./index-mrJgTINk.js";import{L as x}from"./index-JyPTsvpH.js";import{T as C}from"./index-OYLYonc_.js";const b=t.jsx("span",{children:"Start Content"}),j=t.jsx("span",{children:"Center Content"}),B=t.jsx("span",{children:"End Content"}),S=t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}}),L={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:u.Header,startContent:b,children:j,endContent:B},tags:["package:@ui5/webcomponents-fiori"]},n={},e={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{icon:d,design:g.Transparent}),S]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(f,{placeholder:"Search"}),t.jsx(x,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(C,{children:"Bar"})})}};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    return <Bar {...args} startContent={<>
            <Button icon={navBackIcon} design={ButtonDesign.Transparent} />
            {Img}
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default","WithCustomElements"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithCustomElements:e,__namedExportsOrder:k,default:L},Symbol.toStringTag,{value:"Module"}));export{A as C,n as D,e as W};
