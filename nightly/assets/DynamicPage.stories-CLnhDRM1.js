import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./index-D6tTnx-w.js";import{P as R}from"./products-B8km3JGR.js";import{e as F,T as O,a as h,b as z,c as m}from"./index-C7vjzbPF.js";import{F as g,a as x,d as A}from"./index-Bz1xVcti.js";import{T as I}from"./index-f_HIS5b8.js";import{L as t}from"./index-CBHUUcbt.js";import{B as N}from"./BarDesign-BLoXVb05.js";import{B as r}from"./Button-D2qpVKd_.js";import{V as _}from"./ValueState-CyC8gWMA.js";import"./withWebComponent-BAC46Qgl.js";import{r as C}from"./Icon-KwQmOmwG.js";import{d as E}from"./decline-Cvlv1555.js";import{f as $,e as L}from"./full-screen-GsswjWXB.js";import{T as y}from"./ThemingParameters-le4wpk1U.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as u}from"./index-CjmQ2z5u.js";import{D as j,a as V,b as W}from"./index-DF4IZeaG.js";import{T}from"./index-BeEBPTj0.js";import{M as S}from"./index-C1n754Ql.js";import{a as v,T as a}from"./index-BwRhs-q9.js";import{a as G,B as i}from"./index-BvjeVuMl.js";import{T as K}from"./index-B80W41n0.js";import{O as U}from"./index-Dg2eVWUF.js";import{B as J}from"./index-D6LiHYcR.js";import{B as P}from"./index-H87Uqpad.js";const Q=()=>e.jsx(F,{headerRow:e.jsxs(O,{children:[e.jsx(h,{children:"Product"}),e.jsx(h,{children:"Supplier"}),e.jsx(h,{children:"Dimensions"}),e.jsx(h,{children:"Price"})]}),children:R.map(n=>e.jsxs(z,{children:[e.jsx(m,{children:e.jsxs(g,{direction:x.Column,children:[e.jsx(I,{children:n.Name}),e.jsx(t,{children:n.ProductId})]})}),e.jsx(m,{children:e.jsx(t,{children:n.SupplierName})}),e.jsx(m,{children:e.jsxs(t,{children:[n.Width," x ",n.Depth," x ",n.Height," cm"]})}),e.jsx(m,{children:e.jsxs(t,{children:[n.Price," EUR"]})})]},n.ProductId))}),X="action",Y="M503 90q9 10 9 23t-9 23l-92 84q-5 5-11 5t-11-5-5-11.5 5-11.5l75-69h-48q-40 0-75 15t-61 41.5-41 61.5-15 74v16q0 16-16 16t-16-16v-19q0-3 1-4 1-45 19.5-84.5T261 160t70-46 85-17h48l-75-69q-5-5-5-11.5T389 5t11-5 11 5zm-87 229h32v129q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 448V64q0-14 9.5-23T32 32h128v32H32v384h384V319z",Z=!1,ee="SAP-icons-v4",ne="@ui5/webcomponents-icons";C(X,{pathData:Y,ltr:Z,collection:ee,packageName:ne});const te="action",re="M504 109q8 8 8 19t-8 19L395 249q-7 7-17 7-11 0-18.5-7.5T352 230q0-10 8-18l69-65h-52q-21 0-40 8t-32.5 22-21.5 33-8 40v76q0 11-7 18.5t-18 7.5-18.5-7-7.5-18v-77q0-32 12-60t32.5-49 48.5-33 60-12h38l-55-52q-8-8-8-18 0-11 7.5-18.5T378 0q10 0 17 7zm-50 194q11 0 18.5 7t7.5 18v62q0 38-26 64t-64 26H90q-38 0-64-26T0 390V90q0-38 26-64T90 0h137q11 0 18.5 7.5T253 26t-7.5 18-18.5 7H90q-17 0-28 11T51 90v300q0 17 11 28t28 11h300q17 0 28-11t11-28v-62q0-11 7-18t18-7z",se=!1,ae="SAP-icons-v5",ie="@ui5/webcomponents-icons";C(te,{pathData:re,ltr:se,collection:ae,packageName:ie});const oe="action",ce=n=>{const[d,l]=u.useState(void 0);return u.useEffect(()=>{const p=new ResizeObserver(([s])=>{l(s.contentRect.height)});return n.current&&customElements.whenDefined("ui5-dynamic-page").then(()=>{const{shadowRoot:s}=n.current,f=new MutationObserver(()=>{const b=s.querySelector("header");b&&(f.disconnect(),p.observe(b))});s&&s.childElementCount?p.observe(s.querySelector("header")):f.observe(s,{childList:!0})}),()=>{p.disconnect()}},[]),d},de={title:"Layouts & Floorplans / DynamicPage",component:j,argTypes:{children:{control:{disable:!0}},titleArea:{control:{disable:!0}},headerArea:{control:{disable:!0}},footerArea:{control:{disable:!0}}},args:{style:{height:"600px"},titleArea:e.jsx(V,{heading:e.jsx(T,{style:{fontSize:y.sapObjectHeader_Title_FontSize},children:"Header Title"}),snappedHeading:e.jsx(T,{style:{fontSize:y.sapObjectHeader_Title_SnappedFontSize},children:"Snapped Header Title"}),subheading:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Subheader"}),e.jsx(S,{children:"Information (only visible if header content is expanded)"})]}),snappedSubheading:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Snapped Subheader"}),e.jsx(S,{children:"Information (only visible if header content is collapsed (snapped))"})]}),actionsBar:e.jsxs(v,{design:"Transparent",children:[e.jsx(a,{design:r.Emphasized,text:"Edit"}),e.jsx(a,{design:r.Transparent,text:"Delete"}),e.jsx(a,{design:r.Transparent,text:"Copy"}),e.jsx(a,{icon:oe,design:r.Transparent})]}),navigationBar:e.jsxs(v,{design:"Transparent",children:[e.jsx(a,{icon:$,design:r.Transparent}),e.jsx(a,{icon:L,design:r.Transparent}),e.jsx(a,{icon:E,design:r.Transparent})]}),breadcrumbs:e.jsxs(G,{children:[e.jsx(i,{children:"Home"}),e.jsx(i,{children:"Page 1"}),e.jsx(i,{children:"Page 2"}),e.jsx(i,{children:"Page 3"}),e.jsx(i,{children:"Page 4"}),e.jsx(i,{children:"Page 5"})]}),children:e.jsx(K,{children:"Status: OK"})}),headerArea:e.jsx(W,{children:e.jsxs(g,{wrap:A.Wrap,children:[e.jsxs(g,{direction:x.Column,children:[e.jsx(t,{children:"Location: Warehouse A"}),e.jsx(t,{children:"Halway: 23L"}),e.jsx(t,{children:"Rack: 34"})]}),e.jsx("span",{style:{width:"1rem"}}),e.jsxs(g,{direction:x.Column,children:[e.jsx(t,{children:"Availability:"}),e.jsx(U,{state:_.Positive,children:"In Stock"})]})]})}),footerArea:e.jsx(J,{design:N.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(P,{design:r.Positive,children:"Accept"}),e.jsx(P,{design:r.Negative,children:"Reject"})]})})},tags:["package:@ui5/webcomponents-fiori"]},o={render(n){return e.jsx(j,{...n,children:e.jsx(Q,{})})}},c={render(n){const d=u.useRef(null),l=ce(d);return e.jsx(j,{...n,ref:d,className:M(n.className,"dynamicPageStickyContent"),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"sticky",width:"100%",height:"4rem",background:"lightgreen",insetBlockStart:`${l}px`},children:"Sticky Header"}),e.jsx("div",{style:{width:"100%",background:"orange",height:"10rem"},children:"Content"}),e.jsx("div",{style:{position:"sticky",width:"100%",height:"8rem",background:"lightgreen",insetBlockStart:`calc(${l}px + 4rem)`},children:"Sticky Header 2"}),e.jsx("div",{style:{background:"lightblue",height:"2000px",width:"100%"},children:"Content"})]})})}};var H,k,q;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render(args) {
    return <DynamicPage {...args}>
        <ProductsTable />
      </DynamicPage>;
  }
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var w,D,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render(args) {
    const dynamicPageRef = useRef<DynamicPageDomRef & {
      shadowRoot: ShadowRoot;
    }>(null);
    const headerHeight = useGetHeaderHeight(dynamicPageRef);
    return <DynamicPage {...args} ref={dynamicPageRef} className={clsx(args.className, 'dynamicPageStickyContent')}>
        <>
          <div style={{
          position: 'sticky',
          width: '100%',
          height: '4rem',
          background: 'lightgreen',
          insetBlockStart: \`\${headerHeight}px\`
        }}>
            Sticky Header
          </div>
          <div style={{
          width: '100%',
          background: 'orange',
          height: '10rem'
        }}>Content</div>
          <div style={{
          position: 'sticky',
          width: '100%',
          height: '8rem',
          background: 'lightgreen',
          insetBlockStart: \`calc(\${headerHeight}px + 4rem)\`
        }}>
            Sticky Header 2
          </div>
          <div style={{
          background: 'lightblue',
          height: '2000px',
          width: '100%'
        }}>Content</div>
        </>
      </DynamicPage>;
  }
}`,...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const le=["Default","StickyContentHeaders"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Default:o,StickyContentHeaders:c,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{Ie as C,o as D,c as S};
