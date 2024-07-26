import{j as a}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./withWebComponent-Bw_l6Ewh.js";import{f as q}from"./Icon-Bjam5y2n.js";import{l as k}from"./i18n-defaults-Cz0fD7oZ.js";import{F as N,a as B}from"./index-PGreZEtb.js";import{r as n}from"./index-ClU-Tc1p.js";import{u as S,P as z}from"./i18n-defaults-BCbbGYDh.js";import{c as j}from"./clsx-B-dksMZM.js";import{u as A}from"./useStylesheet-waKyCe7Y.js";import{C as E}from"./index-BhBXmkmt.js";import{C as V}from"./index-VDGBiTNb.js";import{I as F}from"./index-CJHnTOI-.js";import{T as $}from"./index-MkKF04B_.js";const U="activate",W="M21 408l249-249q5-5 11-5t11 5l45 45q12 11 0 23L89 475q-5 5-12 5-6 0-11-5l-45-45q-11-11 0-22zM140 64l21-58 21 58h59l-47 39 20 64-53-40-55 40 21-64-47-39h60zm196 0h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zm0 224h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zM55 419l22 23 181-181-22-23z",H=!1,M=k,P="SAP-icons-v4",O="@ui5/webcomponents-icons";q(U,{pathData:W,ltr:H,accData:M,collection:P,packageName:O});const R="activate",X="M416 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm-288 0q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm185 55q7 7 7 18t-7 18L102 494q-20 18-44 18-26 0-42-18T0 453q0-24 17-42l212-212q7-7 18-7 12 0 19 7zm-78 41l-11-11L54 448q-3 1-3 5 0 8 8 8 2 0 6-2zm181 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6z",Y=!1,G=k,J="SAP-icons-v5",K="@ui5/webcomponents-icons";q(R,{pathData:X,ltr:Y,accData:G,collection:J,packageName:K});const Q="activate";var u=(e=>(e.Determinate="Determinate",e.Indeterminate="Indeterminate",e))(u||{});const Z={packageName:"@ui5/webcomponents-react-compat",fileName:"Loader.module.css",content:'.Loader_loader_qpbhk_1{height:.25rem;position:relative;width:100%}.Loader_loader_qpbhk_1:before{background-color:var(--sapContent_BusyColor);content:"";height:100%;left:0;opacity:.15;position:absolute;width:100%}.Loader_loader_qpbhk_1.Loader_loaderDeterminate_qpbhk_16{background:linear-gradient(to right,var(--sapContent_BusyColor),var(--sapContent_BusyColor)) repeat-y}.Loader_loader_qpbhk_1.Loader_loaderIndeterminate_qpbhk_20{animation:Loader_scroll_qpbhk_1 1.2s linear infinite;background-size:40%;background:linear-gradient(to right,#0000 0,var(--sapContent_BusyColor) calc(50% - 2rem),var(--sapContent_BusyColor) calc(50% + 2rem),#0000 100%) repeat-y}@keyframes Loader_scroll_qpbhk_1{0%{background-position:-100% 0}to{background-position:200% 0}}'},f={loader:"Loader_loader_qpbhk_1",loaderDeterminate:"Loader_loaderDeterminate_qpbhk_16",loaderIndeterminate:"Loader_loaderIndeterminate_qpbhk_20",scroll:"Loader_scroll_qpbhk_1"},t=n.forwardRef((e,r)=>{const{className:m,type:o=u.Indeterminate,progress:s="0px",slot:c,style:p,delay:i=0,...h}=e;A(Z,t.displayName);const[T,w]=n.useState(i===0),I=j(f.loader,m,f[`loader${o}`]),C=o!==u.Determinate?"40%":s;n.useEffect(()=>{let _;return i>0&&(_=setTimeout(()=>{w(!0)},i)),()=>{clearTimeout(_)}},[]);const D=S("@ui5/webcomponents-react");return T?a.jsx("div",{ref:r,className:I,"data-component-name":"Loader","aria-busy":"true",role:"progressbar",title:D.getText(z),slot:c,style:{...p,backgroundSize:C},...h}):null});t.displayName="Loader";try{t.displayName="Loader",t.__docgenInfo={description:"__Note__: There is no longer a concept of a Loader component defined by the UX guidelines! To indicate a loading state, please use the `BusyIndicator` instead. For backwards compatibility, the Loader is still available in the `@ui5/webcomponents-react-compat` package, but it may lack accessibility features and no longer receives feature updates.\n\nThe `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.\nIt can be used to signal a data update on an already existing dataset, or where an expansion will happen.",displayName:"Loader",props:{delay:{defaultValue:{value:"`0`"},description:"Delay in ms until the Loader will be displayed",name:"delay",required:!1,type:{name:"number"}},type:{defaultValue:{value:'`"Indeterminate"`'},description:"Defines the type of the `Loader`.\n\n__Note:__ If the process completion rate can be detected the `Determinate` type should be used.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Determinate"'},{value:'"Indeterminate"'},{value:'"Determinate"'},{value:'"Indeterminate"'}]}},progress:{defaultValue:{value:'`"0px"`'},description:"Defines the progress of the Loader Bar.\n\n__Note:__ This prop has no effect if used with type `Indeterminate`.",name:"progress",required:!1,type:{name:"Width<string | number>"}}}}}catch{}try{t.displayName="Loader",t.__docgenInfo={description:"__Note__: There is no longer a concept of a Loader component defined by the UX guidelines! To indicate a loading state, please use the `BusyIndicator` instead. For backwards compatibility, the Loader is still available in the `@ui5/webcomponents-react-compat` package, but it may lack accessibility features and no longer receives feature updates.\n\nThe `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.\nIt can be used to signal a data update on an already existing dataset, or where an expansion will happen.",displayName:"Loader",props:{delay:{defaultValue:{value:"`0`"},description:"Delay in ms until the Loader will be displayed",name:"delay",required:!1,type:{name:"number"}},type:{defaultValue:{value:'`"Indeterminate"`'},description:"Defines the type of the `Loader`.\n\n__Note:__ If the process completion rate can be detected the `Determinate` type should be used.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Determinate"'},{value:'"Indeterminate"'},{value:'"Determinate"'},{value:'"Indeterminate"'}]}},progress:{defaultValue:{value:'`"0px"`'},description:"Defines the progress of the Loader Bar.\n\n__Note:__ This prop has no effect if used with type `Indeterminate`.",name:"progress",required:!1,type:{name:"Width<string | number>"}}}}}catch{}const ee={title:"Loader",component:t,argTypes:{},args:{type:u.Indeterminate,progress:"60%"}},l={},d={render(e){const r="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[m,o]=n.useState(r),[s,c]=n.useState(!1),p=n.useRef(0),i=()=>{c(!0)};return n.useEffect(()=>{s&&setTimeout(()=>{p.current<10?o(h=>h===r?"Updated (⌐■_■)":r):o("You really must be bored ಠ_ಠ"),p.current++,c(!1)},5e3)},[s]),a.jsx(E,{header:a.jsx(V,{titleText:"Click the header to update the text below.",interactive:!0,avatar:a.jsx(F,{name:Q}),onClick:i}),style:{width:"400px"},children:a.jsxs(N,{direction:B.Column,children:[s&&a.jsx(t,{...e}),a.jsx($,{style:{padding:"1rem"},children:m})]})})}};var b,y,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,v,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(v=d.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const te=["Default","WithCard"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:l,WithCard:d,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{_e as C,l as D,d as W};
