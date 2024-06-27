import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./Boot-CS6Wsrzl.js";import{f as h}from"./Icons-DkFvE6sF.js";import{i as f}from"./i18n-defaults-CXs2tJOZ.js";import{s as v}from"./spacing-Bgb-YkCp.js";import{r as n}from"./index-DEe9W-hO.js";import{C as w}from"./index-B60cVvq6.js";import{C as k}from"./index-MKQtZNd-.js";import{I as L}from"./index-C1rNd0It.js";import{F as y,a as z}from"./index-B6HtmUYb.js";import{T as D}from"./index-D455cKCd.js";import{L as T,a as S}from"./index-B59Cbv-c.js";const _="activate",j="M21 408l249-249q5-5 11-5t11 5l45 45q12 11 0 23L89 475q-5 5-12 5-6 0-11-5l-45-45q-11-11 0-22zM140 64l21-58 21 58h59l-47 39 20 64-53-40-55 40 21-64-47-39h60zm196 0h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zm0 224h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zM55 419l22 23 181-181-22-23z",A=!1,I=f,F="SAP-icons-v4",E="@ui5/webcomponents-icons";h(_,{pathData:j,ltr:A,accData:I,collection:F,packageName:E});const $="activate",B="M416 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm-288 0q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm185 55q7 7 7 18t-7 18L102 494q-20 18-44 18-26 0-42-18T0 453q0-24 17-42l212-212q7-7 18-7 12 0 19 7zm-78 41l-11-11L54 448q-3 1-3 5 0 8 8 8 2 0 6-2zm181 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6z",H=!1,M=f,P="SAP-icons-v5",U="@ui5/webcomponents-icons";h($,{pathData:B,ltr:H,accData:M,collection:P,packageName:U});const N="activate",O={title:"User Feedback / Loader",component:T,argTypes:{},args:{type:S.Indeterminate,progress:"60%"}},t={},a={render(g){const o="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[C,r]=n.useState(o),[s,i]=n.useState(!1),l=n.useRef(0),q=()=>{i(!0)};return n.useEffect(()=>{s&&setTimeout(()=>{l.current<10?r(b=>b===o?"Updated (⌐■_■)":o):r("You really must be bored ಠ_ಠ"),l.current++,i(!1)},5e3)},[s]),e.jsx(w,{header:e.jsx(k,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e.jsx(L,{name:N}),onClick:q}),style:{width:"400px"},children:e.jsxs(y,{direction:z.Column,children:[s&&e.jsx(T,{...g}),e.jsx(D,{style:v,children:C})]})})}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <Text style={spacing.sapUiContentPadding}>{text}</Text>
        </FlexBox>
      </Card>;
  }
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const R=["Default","WithCard"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithCard:a,__namedExportsOrder:R,default:O},Symbol.toStringTag,{value:"Module"}));export{ne as C,t as D,a as W};
