import{j as t}from"./jsx-runtime-CLpGMVip.js";import"./withWebComponent-DfVDXLfc.js";import{f as T}from"./Icon-DVzRT9Bg.js";import{l as y}from"./i18n-defaults-CUGG7UPM.js";import{F as L,a as z}from"./index-DlWYL6lf.js";import{C as B}from"./index-pRRfesa_.js";import{C as j}from"./index-C1yRVqRl.js";import{I as E}from"./index-DFqCSedi.js";import{T as N}from"./index-DgufeG-1.js";import{r as a}from"./index-D23YZj_x.js";import{u as $,P as A}from"./i18n-defaults-CoZOvFer.js";import{c as F}from"./clsx-B-dksMZM.js";import{u as H}from"./useStylesheet-DNyxTWaC.js";const M="activate",P="M140 64l21-58 21 58h59l-47 39 20 64-53-40-55 40 21-64-47-39h60zm196 0h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zM21 408l249-249q5-5 11-5t11 5l45 45q6 5 6 11t-6 12L89 475q-5 5-12 5-6 0-11-5l-45-45q-6-6-6-11 0-6 6-11zm315-120h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zM55 419l22 23 181-181-22-23z",O=!1,R=y,W="SAP-icons-v4",V="@ui5/webcomponents-icons";T(M,{pathData:P,ltr:O,accData:R,collection:W,packageName:V});const U="activate",Y="M313 247q7 7 7 18t-7 18L102 494q-20 18-44 18-26 0-42-18T0 453q0-24 17-42l212-211q8-8 18-8 11 0 19 8zm-78 41l-11-11L54 448q-3 1-3 5 0 8 8 8 3 0 5-2zm181-96q-9 0-16-6t-9-15l-8-41-42-9q-9-2-15-9t-6-16 6-16 15-9l42-8 8-42q2-9 9-15t16-6 16 6 9 15l9 42 42 8q8 2 14 9t6 16-6 16-14 9l-42 9-9 41q-2 9-9 15t-16 6zm-288 0q-9 0-16-6t-9-15l-8-41-42-9q-9-2-15-9t-6-16 6-16 15-9l42-8 8-42q2-9 9-15t16-6 16 6 9 15l9 42 42 8q8 2 14 9t6 16-6 16-14 9l-42 9-9 41q-2 9-9 15t-16 6zm288 288q-9 0-16-6t-9-15l-8-41-42-9q-9-2-15-9t-6-16 6-16 15-9l42-8 8-42q2-9 9-15t16-6 16 6 9 15l9 42 42 8q8 2 14 9t6 16-6 16-14 9l-42 9-9 41q-2 9-9 15t-16 6z",G=!1,J=y,K="SAP-icons-v5",Q="@ui5/webcomponents-icons";T(U,{pathData:Y,ltr:G,accData:J,collection:K,packageName:Q});const X="activate";var m=(e=>(e.Determinate="Determinate",e.Indeterminate="Indeterminate",e))(m||{});const Z='@layer ui5-webcomponents-react{._loader_qpbhk_1{height:.25rem;position:relative;width:100%}._loader_qpbhk_1:before{background-color:var(--sapContent_BusyColor);content:"";height:100%;left:0;opacity:.15;position:absolute;width:100%}._loader_qpbhk_1._loaderDeterminate_qpbhk_16{background:linear-gradient(to right,var(--sapContent_BusyColor),var(--sapContent_BusyColor)) repeat-y}._loader_qpbhk_1._loaderIndeterminate_qpbhk_20{animation:_scroll_qpbhk_1 1.2s linear infinite;background-size:40%;background:linear-gradient(to right,#0000 0,var(--sapContent_BusyColor) calc(50% - 2rem),var(--sapContent_BusyColor) calc(50% + 2rem),#0000 100%) repeat-y}@keyframes _scroll_qpbhk_1{0%{background-position:-100% 0}to{background-position:200% 0}}}',_={loader:"_loader_qpbhk_1",loaderDeterminate:"_loaderDeterminate_qpbhk_16",loaderIndeterminate:"_loaderIndeterminate_qpbhk_20",scroll:"_scroll_qpbhk_1"},p=a.forwardRef((e,o)=>{const{className:u,type:r=m.Indeterminate,progress:s="0px",slot:c,style:d,delay:n=0,...h}=e;H(Z,p.displayName);const[v,w]=a.useState(n===0),D=F(_.loader,u,_[`loader${r}`]),I=r!==m.Determinate?"40%":s;a.useEffect(()=>{let x;return n>0&&(x=setTimeout(()=>{w(!0)},n)),()=>{clearTimeout(x)}},[]);const S=$("@ui5/webcomponents-react");return v?t.jsx("div",{ref:o,className:D,"data-component-name":"Loader","aria-busy":"true",role:"progressbar",title:S.getText(A),slot:c,style:{...d,backgroundSize:I},...h}):null});p.displayName="Loader";const ee={title:"Loader",component:p,argTypes:{},args:{type:m.Indeterminate,progress:"60%"}},i={},l={render(e){const o="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[u,r]=a.useState(o),[s,c]=a.useState(!1),d=a.useRef(0),n=()=>{c(!0)};return a.useEffect(()=>{s&&setTimeout(()=>{d.current<10?r(h=>h===o?"Updated (⌐■_■)":o):r("You really must be bored ಠ_ಠ"),d.current++,c(!1)},5e3)},[s]),t.jsx(B,{header:t.jsx(j,{titleText:"Click the header to update the text below.",interactive:!0,avatar:t.jsx(E,{name:X}),onClick:n}),style:{width:"400px"},children:t.jsxs(L,{direction:z.Column,children:[s&&t.jsx(p,{...e}),t.jsx(N,{style:{padding:"1rem"},children:u})]})})}};var b,f,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var q,k,C;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render(args) {
    const initialText = 'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
    const [text, setText] = useState(initialText);
    const [loading, setLoading] = useState(false);
    const counter = useRef(0);
    const onHeaderClick = () => {
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          if (counter.current < 10) {
            setText(prev => prev === initialText ? 'Updated (⌐■_■)' : initialText);
          } else {
            setText('You really must be bored ಠ_ಠ');
          }
          counter.current++;
          setLoading(false);
        }, 5000);
      }
    }, [loading]);
    return <Card header={<CardHeader titleText="Click the header to update the text below." interactive avatar={<Icon name={activateIcon} />} onClick={onHeaderClick} />} style={{
      width: '400px'
    }}>
        <FlexBox direction={FlexBoxDirection.Column}>
          {loading && <Loader {...args} />}
          <Text style={{
          padding: '1rem'
        }}>{text}</Text>
        </FlexBox>
      </Card>;
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const te=["Default","WithCard"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithCard:l,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{xe as C,i as D,l as W};
