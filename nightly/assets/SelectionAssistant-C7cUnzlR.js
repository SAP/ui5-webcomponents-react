import{cS as N,r as l,j as t,Q as q,Y as A}from"./iframe-D5q1aMGI.js";import{useMDXComponents as j}from"./index-B6q-95ic.js";import{M}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import"./index-YdpDWp2e.js";import"./copy-BKgapaDk.js";import{I as D,F as $}from"./CommandsAndQueries-B7jUlW4q.js";import{T as k}from"./TableOfContent-CCvgAgpP.js";import{a as I}from"./ai-KINnYPGd.js";import{C as L}from"./index-S9YU7LKi.js";import{F as O}from"./index-BCRNDJSO.js";import{L as T}from"./index-B87mq1Uz.js";import{I as w}from"./index-7YvS3mms.js";import{T as _}from"./index-Cs3yheRF.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-Bo48Ce9s.js";import"./ai-C2Co4QMW.js";import"./Input-Dojvmff0.js";import"./ResponsivePopoverCommon.css-BbYcEfwA.js";import"./ValueStateMessage.css-CaAok0mJ.js";import"./Suggestions.css-C9HB9yUf.js";const F=(e,n)=>{const r=getComputedStyle(e);for(let o=0;o<r.length;o++){const h=r[o];n.style.setProperty(h,r.getPropertyValue(h))}e.tagName==="INPUT"&&z(n),n.style.position="absolute",n.style.left=`${e.getBoundingClientRect().left}px`,n.style.top=`${e.getBoundingClientRect().top}px`,V(n),document.body.appendChild(n)},V=e=>{e.style.position="absolute",e.style.userSelect="none",e.style.pointerEvents="none",e.style.zIndex="-1",e.style.opacity="0"},z=e=>{e.style.whiteSpace="nowrap",e.style.overflowX="auto",e.style.overflowY="hidden"},H=()=>{const e=new CSSStyleSheet,n=N();e.replaceSync(n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]},U=()=>{const e=document.createElement("div");e.id="ui5-selection-mirror",e.contentEditable="true",H(),document.body.appendChild(e)},X=(e,n)=>{n.scrollTop=e.scrollTop,n.scrollLeft=e.scrollLeft},Y=(e,n)=>{const{selectionStart:r,selectionEnd:o}=e,h=e.value.slice(r,e.selectionEnd),c=document.createRange();c.setStart(n.firstChild,o-1),c.setEnd(n.firstChild,o),X(e,n);const u=c.getBoundingClientRect(),x={x:u.x,y:u.y,width:u.width,height:u.height,top:u.top,right:u.right,bottom:u.bottom,left:u.left};return document.body.removeChild(n),{...x,selectedText:h}},P=e=>{const n=e.shadowRoot.querySelector("textarea")||e.shadowRoot.querySelector("input");document.getElementById("ui5-selection-mirror")||U();const r=document.getElementById("ui5-selection-mirror");return r.textContent=n.value,n&&F(n,r),Y(n,r)},f=l.forwardRef(({children:e},n)=>t.jsx(L,{children:t.jsx(O,{ref:n,style:{padding:"1rem",position:"relative"},direction:"Column",children:e})}));f.displayName="SelectionAssistantContainer";try{f.displayName="SelectionAssistantContainer",f.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}try{f.displayName="SelectionAssistantContainer",f.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}function E(){const e=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[h,c]=l.useState({}),[u,x]=l.useState(""),[b,g]=l.useState(!1),S=(i,s)=>{c({left:`${i.left-s.left+i.width+4}px`,top:`${i.top-s.top}px`}),o(!0)},R=(i,s)=>{c({left:`${i.left-s.left+i.width}px`,top:`${i.top-s.top+i.height}px`}),o(!0)},v=i=>{var B;const s=i.currentTarget,p=P(s),d=s.getBoundingClientRect(),m=(B=e.current)==null?void 0:B.getBoundingClientRect();m&&(p.bottom>d.bottom||p.right>d.right?S(d,m):R(p,m))},y=i=>{var m;const p=i.currentTarget.getBoundingClientRect(),d=(m=e.current)==null?void 0:m.getBoundingClientRect();S(p,d)},a=()=>{const s=`The selected text equals to: "${document.getSelection().toString()}"`;x(s),g(!0)};return t.jsxs(f,{ref:e,children:[t.jsx(T,{for:"ai-input",showColon:!0,children:"Input with Selection Assistant"}),t.jsx(w,{id:"ai-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:v,onMouseDown:()=>{o(!1)},onScroll:()=>{o(!1)},onBlur:i=>{i.relatedTarget!==n.current&&o(!1)}}),t.jsx("br",{}),t.jsx(T,{for:"ai-native-input",showColon:!0,children:"Input with native API"}),t.jsx(w,{id:"ai-native-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:y}),r&&t.jsx(q,{style:{position:"absolute",zIndex:2,...h},ref:n,icon:I,onClick:a,onBlur:()=>{o(!1)}}),t.jsx(A,{open:b,onClose:()=>{g(!1)},children:u})]})}E.displayName="InputSelectionAssistant";function Q(){const e=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[h,c]=l.useState({}),[u,x]=l.useState(""),[b,g]=l.useState(!1),S=(a,i)=>{c({left:`${a.left-i.left+a.width+4}px`,top:`${a.top-i.top}px`}),o(!0)},R=(a,i)=>{c({left:`${a.left-i.left+a.width}px`,top:`${a.top-i.top+a.height}px`}),o(!0)},v=a=>{var m;const i=a.currentTarget,s=P(i),p=i.getBoundingClientRect(),d=(m=e.current)==null?void 0:m.getBoundingClientRect();d&&(s.bottom>p.bottom||s.right>p.right?S(p,d):R(s,d))},y=()=>{const i=`The selected text equals to: "${document.getSelection().toString()}"`;x(i),g(!0)};return t.jsxs(f,{ref:e,children:[t.jsx(T,{for:"ai-textarea",showColon:!0,children:"TextArea with Selection Assistant"}),t.jsx(_,{id:"ai-textarea",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec.",onSelect:v,style:{width:"80%",marginBlockEnd:"3rem"},rows:5}),r&&t.jsx(q,{style:{position:"absolute",zIndex:2,...h},ref:n,icon:I,onClick:y,onBlur:()=>{o(!1)}}),t.jsx(A,{open:b,onClose:()=>{g(!1)},children:u})]})}function C(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...j(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"selection-assistant",children:"Selection Assistant"}),`
`,t.jsx(k,{}),`
`,t.jsx(M,{title:"SelectionAssistant (experimental)"}),`
`,t.jsx("table",{style:{width:"550px"},children:t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Usage"}),t.jsx("th",{children:t.jsx(D,{moduleNames:["getElementSelection"],packageName:"@ui5/webcomponents-base/dist/util/SelectionAssistant.js",defaultImport:!0})})]})})}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Note:"})," The util is in an experimental state!"]}),`
`,t.jsxs(n.p,{children:["These examples demonstrate the usage of ",t.jsx(n.strong,{children:"SelectionAssistant"}),`, which enhances user interactions by returning the coordinates of the selected text on the select event.
This utility enables developers to create advanced AI-powered scenarios by easily capturing and utilizing the exact coordinates of user-selected text.`]}),`
`,t.jsx(n.h2,{id:"input-with-selection-assistant",children:"Input with Selection Assistant"}),`
`,t.jsx(E,{}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:t.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`
import getElementSelection from '@ui5/webcomponents-base/dist/util/SelectionAssistant.js';
import ai from '@ui5/webcomponents-icons/dist/ai.js';
import type { ButtonDomRef, InputPropTypes } from '@ui5/webcomponents-react';
import { Button, Card, FlexBox, Input, Label, Toast } from '@ui5/webcomponents-react';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef, useRef, useState } from 'react';

type ElementSelection = ReturnType<typeof getElementSelection>;

export function InputSelectionAssistant() {
  const containerRef = useRef<HTMLDivElement>(null); // Needed to calculate container-relative coordinates
  const buttonRef = useRef<ButtonDomRef>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [btnStyle, setBtnStyle] = useState<CSSProperties>({});
  const [toastText, setToastText] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const repositionButtonAtInput = (inputRect: DOMRect, containerRect: DOMRect) => {
    setBtnStyle({
      // Subtract containerRect to make coordinates relative to the container
      // This subtraction is only needed if the container is not the viewport
      // If positioned relative to body (i.e., viewport), you can use inputRect.left/top directly
      left: \`\${inputRect.left - containerRect.left + inputRect.width + 4}px\`,
      top: \`\${inputRect.top - containerRect.top}px\`,
    });
    setShowBtn(true);
  };

  const repositionButtonAtSelection = (selectionRect: ElementSelection, containerRect: DOMRect) => {
    setBtnStyle({
      // If positioned relative to body (i.e., viewport), you can use selectionRect.left/top directly
      left: \`\${selectionRect.left - containerRect.left + selectionRect.width}px\`,
      top: \`\${selectionRect.top - containerRect.top + selectionRect.height}px\`,
    });
    setShowBtn(true);
  };

  const handleSelect: InputPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const selectionRect = getElementSelection(target);
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // If the selected text overflows the visible input, position near full input instead
    if (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {
      repositionButtonAtInput(inputRect, containerRect);
    } else {
      repositionButtonAtSelection(selectionRect, containerRect);
    }
  };

  const handleNativeSelect: InputPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    repositionButtonAtInput(inputRect, containerRect);
  };

  const handleBtnClick = () => {
    const selectedText = document.getSelection().toString();
    const message = \`The selected text equals to: "\${selectedText}"\`;

    setToastText(message);
    setToastOpen(true);
  };

  return (
    <InputSelectionAssistantContainer ref={containerRef}>
      <Label for="ai-input" showColon>
        Input with Selection Assistant
      </Label>
      <Input
        id="ai-input"
        value="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."
        onSelect={handleSelect}
        onMouseDown={() => {
          setShowBtn(false);
        }}
        onScroll={() => {
          setShowBtn(false);
        }}
        onBlur={(e) => {
          if (e.relatedTarget !== buttonRef.current) {
            setShowBtn(false);
          }
        }}
      />
      <br />
      <Label for="ai-native-input" showColon>
        Input with native API
      </Label>
      <Input
        id="ai-native-input"
        value="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."
        onSelect={handleNativeSelect}
      />
      {showBtn && (
        <Button
          // This button is positioned absolute inside a relative container
          // If instead it were in \`body\`, containerRect adjustments wouldn't be needed
          style={{ position: 'absolute', zIndex: 2, ...btnStyle }}
          ref={buttonRef}
          icon={ai}
          onClick={handleBtnClick}
          onBlur={() => {
            setShowBtn(false);
          }}
        />
      )}
      <Toast
        open={toastOpen}
        onClose={() => {
          setToastOpen(false);
        }}
      >
        {toastText}
      </Toast>
    </InputSelectionAssistantContainer>
  );
}

InputSelectionAssistant.displayName = 'InputSelectionAssistant';

const InputSelectionAssistantContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <Card>
      <FlexBox
        ref={ref}
        style={{
          padding: '1rem',
          position: 'relative', // This makes children (like Button) positioned relative to this FlexBox
        }}
        direction="Column"
      >
        {children}
      </FlexBox>
    </Card>
  );
});

InputSelectionAssistantContainer.displayName = 'InputSelectionAssistantContainer';

`})})]}),`
`,t.jsx(n.h2,{id:"textarea-with-selection-assistant",children:"TextArea with Selection Assistant"}),`
`,t.jsx(Q,{}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:t.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`
import getElementSelection from '@ui5/webcomponents-base/dist/util/SelectionAssistant.js';
import ai from '@ui5/webcomponents-icons/dist/ai.js';
import type { ButtonDomRef, TextAreaPropTypes } from '@ui5/webcomponents-react';
import { Button, Card, FlexBox, Label, TextArea, Toast } from '@ui5/webcomponents-react';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef, useRef, useState } from 'react';

type ElementSelection = ReturnType<typeof getElementSelection>;

export function TextAreaSelectionAssistant() {
  const containerRef = useRef<HTMLDivElement>(null); // Needed to calculate container-relative coordinates
  const buttonRef = useRef<ButtonDomRef>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [btnStyle, setBtnStyle] = useState<CSSProperties>({});
  const [toastText, setToastText] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const repositionButtonAtTextArea = (inputRect: DOMRect, containerRect: DOMRect) => {
    setBtnStyle({
      // Subtract containerRect to make coordinates relative to the container
      // This subtraction is only needed if the container is not the viewport
      // If positioned relative to body (i.e., viewport), you can use inputRect.left/top directly
      left: \`\${inputRect.left - containerRect.left + inputRect.width + 4}px\`,
      top: \`\${inputRect.top - containerRect.top}px\`,
    });
    setShowBtn(true);
  };

  const repositionButtonAtSelection = (selectionRect: ElementSelection, containerRect: DOMRect) => {
    setBtnStyle({
      // If positioned relative to body (i.e., viewport), you can use selectionRect.left/top directly
      left: \`\${selectionRect.left - containerRect.left + selectionRect.width}px\`,
      top: \`\${selectionRect.top - containerRect.top + selectionRect.height}px\`,
    });
    setShowBtn(true);
  };

  const handleSelect: TextAreaPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const selectionRect = getElementSelection(target);
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // If the selected text overflows the visible TextArea, position near full TextArea instead
    if (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {
      repositionButtonAtTextArea(inputRect, containerRect);
    } else {
      repositionButtonAtSelection(selectionRect, containerRect);
    }
  };

  const handleBtnClick = () => {
    const selectedText = document.getSelection().toString();
    const message = \`The selected text equals to: "\${selectedText}"\`;

    setToastText(message);
    setToastOpen(true);
  };

  return (
    <SelectionAssistantContainer ref={containerRef}>
      <Label for="ai-textarea" showColon>
        TextArea with Selection Assistant
      </Label>
      <TextArea
        id="ai-textarea"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec."
        onSelect={handleSelect}
        style={{ width: '80%', marginBlockEnd: '3rem' }}
        rows={5}
      />
      {showBtn && (
        <Button
          // This button is positioned absolute inside a relative container
          // If instead it were in \`body\`, containerRect adjustments wouldn't be needed
          style={{ position: 'absolute', zIndex: 2, ...btnStyle }}
          ref={buttonRef}
          icon={ai}
          onClick={handleBtnClick}
          onBlur={() => {
            setShowBtn(false);
          }}
        />
      )}
      <Toast
        open={toastOpen}
        onClose={() => {
          setToastOpen(false);
        }}
      >
        {toastText}
      </Toast>
    </SelectionAssistantContainer>
  );
}

const SelectionAssistantContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <Card>
      <FlexBox
        ref={ref}
        style={{
          padding: '1rem',
          position: 'relative', // This makes children (like Button) positioned relative to this FlexBox
        }}
        direction="Column"
      >
        {children}
      </FlexBox>
    </Card>
  );
});

SelectionAssistantContainer.displayName = 'SelectionAssistantContainer';

`})})]}),`
`,t.jsx($,{})]})}function Ce(e={}){const{wrapper:n}={...j(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(C,{...e})}):C(e)}export{Ce as default};
