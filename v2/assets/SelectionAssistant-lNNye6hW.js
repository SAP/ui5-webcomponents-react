import{cS as E,r as l,j as t,Q as C,Y as q}from"./iframe-CMv2_fr8.js";import{useMDXComponents as A}from"./index-BCZO-1se.js";import{M as N}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{I as M,F as D}from"./CommandsAndQueries-UgVWTBkO.js";import"./copy-Bp5geyDe.js";import{T as $}from"./TableOfContent-CaCWTgrs.js";import{a as j}from"./ai-C1JmLzbC.js";import{C as k}from"./index-wL9CVecO.js";import{F as L}from"./index-BP5Wh9d8.js";import{L as T}from"./index-mbEJ-Zu7.js";import{I as B}from"./index-BmaCr3G1.js";import{T as O}from"./index-D4lH71Fj.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-51EQIK1-.js";import"./ai-Dz91apPh.js";import"./Input-Bl2hG8Lo.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";import"./ValueStateMessage.css-CQDFsMMJ.js";import"./Suggestions.css-Ak-2B7T4.js";const _=(e,n)=>{const r=getComputedStyle(e);for(let o=0;o<r.length;o++){const m=r[o];n.style.setProperty(m,r.getPropertyValue(m))}e.tagName==="INPUT"&&V(n),n.style.position="absolute",n.style.left=`${e.getBoundingClientRect().left}px`,n.style.top=`${e.getBoundingClientRect().top}px`,F(n),document.body.appendChild(n)},F=e=>{e.style.position="absolute",e.style.userSelect="none",e.style.pointerEvents="none",e.style.zIndex="-1",e.style.opacity="0"},V=e=>{e.style.whiteSpace="nowrap",e.style.overflowX="auto",e.style.overflowY="hidden"},z=()=>{const e=new CSSStyleSheet,n=E();e.replaceSync(n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]},H=()=>{const e=document.createElement("div");e.id="ui5-selection-mirror",e.contentEditable="true",z(),document.body.appendChild(e)},U=(e,n)=>{n.scrollTop=e.scrollTop,n.scrollLeft=e.scrollLeft},X=(e,n)=>{const{selectionStart:r,selectionEnd:o}=e,m=e.value.slice(r,e.selectionEnd),c=document.createRange();c.setStart(n.firstChild,o-1),c.setEnd(n.firstChild,o),U(e,n);const u=c.getBoundingClientRect(),f={x:u.x,y:u.y,width:u.width,height:u.height,top:u.top,right:u.right,bottom:u.bottom,left:u.left};return document.body.removeChild(n),{...f,selectedText:m}},I=e=>{const n=e.shadowRoot.querySelector("textarea")||e.shadowRoot.querySelector("input");document.getElementById("ui5-selection-mirror")||H();const r=document.getElementById("ui5-selection-mirror");return r.textContent=n.value,n&&_(n,r),X(n,r)},h=l.forwardRef(({children:e},n)=>t.jsx(k,{children:t.jsx(L,{ref:n,style:{padding:"1rem",position:"relative"},direction:"Column",children:e})}));h.displayName="SelectionAssistantContainer";try{h.displayName="SelectionAssistantContainer",h.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}try{h.displayName="SelectionAssistantContainer",h.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}function P(){const e=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[m,c]=l.useState({}),[u,f]=l.useState(""),[S,x]=l.useState(!1),g=(i,s)=>{c({left:`${i.left-s.left+i.width+4}px`,top:`${i.top-s.top}px`}),o(!0)},b=(i,s)=>{c({left:`${i.left-s.left+i.width}px`,top:`${i.top-s.top+i.height}px`}),o(!0)},R=i=>{const s=i.currentTarget,p=I(s),d=s.getBoundingClientRect(),y=e.current?.getBoundingClientRect();y&&(p.bottom>d.bottom||p.right>d.right?g(d,y):b(p,y))},v=i=>{const p=i.currentTarget.getBoundingClientRect(),d=e.current?.getBoundingClientRect();g(p,d)},a=()=>{const s=`The selected text equals to: "${document.getSelection().toString()}"`;f(s),x(!0)};return t.jsxs(h,{ref:e,children:[t.jsx(T,{for:"ai-input",showColon:!0,children:"Input with Selection Assistant"}),t.jsx(B,{id:"ai-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:R,onMouseDown:()=>{o(!1)},onScroll:()=>{o(!1)},onBlur:i=>{i.relatedTarget!==n.current&&o(!1)}}),t.jsx("br",{}),t.jsx(T,{for:"ai-native-input",showColon:!0,children:"Input with native API"}),t.jsx(B,{id:"ai-native-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:v}),r&&t.jsx(C,{style:{position:"absolute",zIndex:2,...m},ref:n,icon:j,onClick:a,onBlur:()=>{o(!1)}}),t.jsx(q,{open:S,onClose:()=>{x(!1)},children:u})]})}P.displayName="InputSelectionAssistant";function Y(){const e=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[m,c]=l.useState({}),[u,f]=l.useState(""),[S,x]=l.useState(!1),g=(a,i)=>{c({left:`${a.left-i.left+a.width+4}px`,top:`${a.top-i.top}px`}),o(!0)},b=(a,i)=>{c({left:`${a.left-i.left+a.width}px`,top:`${a.top-i.top+a.height}px`}),o(!0)},R=a=>{const i=a.currentTarget,s=I(i),p=i.getBoundingClientRect(),d=e.current?.getBoundingClientRect();d&&(s.bottom>p.bottom||s.right>p.right?g(p,d):b(s,d))},v=()=>{const i=`The selected text equals to: "${document.getSelection().toString()}"`;f(i),x(!0)};return t.jsxs(h,{ref:e,children:[t.jsx(T,{for:"ai-textarea",showColon:!0,children:"TextArea with Selection Assistant"}),t.jsx(O,{id:"ai-textarea",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec.",onSelect:R,style:{width:"80%",marginBlockEnd:"3rem"},rows:5}),r&&t.jsx(C,{style:{position:"absolute",zIndex:2,...m},ref:n,icon:j,onClick:v,onBlur:()=>{o(!1)}}),t.jsx(q,{open:S,onClose:()=>{x(!1)},children:u})]})}function w(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...A(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"selection-assistant",children:"Selection Assistant"}),`
`,t.jsx("table",{style:{width:"550px"},children:t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Usage"}),t.jsx("th",{children:t.jsx(M,{moduleNames:["getElementSelection"],packageName:"@ui5/webcomponents-base/dist/util/SelectionAssistant.js",defaultImport:!0})})]})})}),`
`,t.jsx($,{}),`
`,t.jsx(N,{title:"SelectionAssistant",tags:["experimental"]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Note:"})," The util is in an experimental state!"]}),`
`,t.jsxs(n.p,{children:["These examples demonstrate the usage of ",t.jsx(n.strong,{children:"SelectionAssistant"}),`, which enhances user interactions by returning the coordinates of the selected text on the select event.
This utility enables developers to create advanced AI-powered scenarios by easily capturing and utilizing the exact coordinates of user-selected text.`]}),`
`,t.jsx(n.h2,{id:"input-with-selection-assistant",children:"Input with Selection Assistant"}),`
`,t.jsx(P,{}),`
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
`,t.jsx(Y,{}),`
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
`,t.jsx(D,{})]})}function we(e={}){const{wrapper:n}={...A(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(w,{...e})}):w(e)}export{we as default};
