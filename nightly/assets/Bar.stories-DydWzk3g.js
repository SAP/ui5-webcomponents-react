import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{G as l}from"./GitHub-Mark-DLtQKbjK.js";import{B as u}from"./BarDesign-BLoXVb05.js";import{B as d}from"./Button-B25Pr19o.js";import"./withWebComponent-D2290JWW.js";import"./nav-back-B2EIXKhq.js";import{B as g}from"./index-DczEHKsk.js";import{I as h}from"./index-BALa6gIN.js";import{L as x}from"./index-BihYjSJH.js";import{T as b}from"./index-DI6DJ6_U.js";import{B as m}from"./index-DH6FuJPQ.js";const f="nav-back",B={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:u.Header,startContent:t.jsx("span",{children:"Start Content"}),children:t.jsx("span",{children:"Center Content"}),endContent:t.jsx("span",{children:"End Content"})},tags:["package:@ui5/webcomponents"]},e={},r={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(g,{icon:f,design:d.Transparent}),t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}})]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{placeholder:"Search"}),t.jsx(x,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(b,{children:"Bar"})})}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
