import{j as t}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{G as l}from"./GitHub-Mark-Dk-S7sqj.js";import{n as u}from"./nav-back-nToC37zY.js";import{B as m,a as d}from"./index-BKvZxUSf.js";import{B as g}from"./Button-BsmQPuS3.js";import{B as h}from"./index-_fAMOa9x.js";import{I as x}from"./index-FGnCkQ__.js";import{L as f}from"./index-CvKtSv5O.js";import{T as b}from"./index-CO0m_RWJ.js";const j={title:"Layouts & Floorplans / Bar",component:m,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:d.Header,startContent:t.jsx("span",{children:"Start Content"}),children:t.jsx("span",{children:"Center Content"}),endContent:t.jsx("span",{children:"End Content"})},tags:["package:@ui5/webcomponents-fiori"]},e={},n={render(p){return t.jsx(m,{...p,startContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{icon:u,design:g.Transparent}),t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}})]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(x,{placeholder:"Search"}),t.jsx(f,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(l,{})})]}),children:t.jsx(b,{children:"Bar"})})}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
