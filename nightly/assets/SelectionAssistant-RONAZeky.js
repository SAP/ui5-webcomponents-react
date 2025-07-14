import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as q}from"./index-B5Ip8tK9.js";import{M as N}from"./index-BM8FV3HB.js";import"./index-Bh0L8GxH.js";import"./index-qmG4ve5T.js";import"./Tag-B8Y5CAT_.js";import{r as l}from"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{I as M,F as D}from"./CommandsAndQueries-DR_UlShZ.js";import"./Button-DsiN4KEf.js";import"./jsx-runtime-2NO35c9p.js";import"./copy-C9kEgeiD.js";import{T as $}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import{a as k}from"./getEffectiveScrollbarStyle-zkSO3ShF.js";import{a as A}from"./ai-Co50ExVC.js";import{C as L}from"./index-B-i0fidp.js";import{F as O}from"./index-C2w1dnoB.js";import{L as T}from"./index-49bJeJce.js";import{I as w}from"./index-hkTg_MeU.js";import{B as j}from"./index-C2cs6waD.js";import{T as I}from"./index-D4EjkVV7.js";import{T as _}from"./index-BNpaIwG9.js";import"./iframe-ruRGRraq.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-Dy5MqRQN.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./Keys-CLf_QmYW.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./i18n-defaults-Wx6G1HAa.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-CQSD8GDX.js";import"./index-BVR6w1bU.js";import"./preview-DZZb_t_m.js";import"./DocsRenderer-CFRXHY34-AdlQxKtg.js";import"./react-18-SRpBHcoT.js";import"./Popover-DHgn1IwJ.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./index-28AZPOp1.js";import"./Link-CIigJXcZ.js";import"./index-39R8lAwY.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./clsx-B-dksMZM.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-DxVhvPYU.js";import"./I18nStore-Bb3vbAIQ.js";import"./useStylesheet-DhspXHhi.js";import"./index-WWlNSEWj.js";import"./Tooltips-DqK_Zwt1.js";import"./EventProvider-ChtD9rRX.js";import"./ai-C2T6iUFc.js";import"./BusyIndicator-kBFPsFJK.js";import"./Label-DvK4qyHf.js";import"./Input-DgPmQ__9.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-D8oCtj4w.js";import"./ValueStateMessage.css-26HjZ_sA.js";import"./Suggestions.css-LA4jUZtL.js";const F=(t,n)=>{const r=getComputedStyle(t);for(let o=0;o<r.length;o++){const h=r[o];n.style.setProperty(h,r.getPropertyValue(h))}t.tagName==="INPUT"&&z(n),n.style.position="absolute",n.style.left=`${t.getBoundingClientRect().left}px`,n.style.top=`${t.getBoundingClientRect().top}px`,V(n),document.body.appendChild(n)},V=t=>{t.style.position="absolute",t.style.userSelect="none",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0"},z=t=>{t.style.whiteSpace="nowrap",t.style.overflowX="auto",t.style.overflowY="hidden"},H=()=>{const t=new CSSStyleSheet,n=k();t.replaceSync(n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]},U=()=>{const t=document.createElement("div");t.id="ui5-selection-mirror",t.contentEditable="true",H(),document.body.appendChild(t)},X=(t,n)=>{n.scrollTop=t.scrollTop,n.scrollLeft=t.scrollLeft},Y=(t,n)=>{const{selectionStart:r,selectionEnd:o}=t,h=t.value.slice(r,t.selectionEnd),c=document.createRange();c.setStart(n.firstChild,o-1),c.setEnd(n.firstChild,o),X(t,n);const u=c.getBoundingClientRect(),x={x:u.x,y:u.y,width:u.width,height:u.height,top:u.top,right:u.right,bottom:u.bottom,left:u.left};return document.body.removeChild(n),{...x,selectedText:h}},P=t=>{const n=t.shadowRoot.querySelector("textarea")||t.shadowRoot.querySelector("input");document.getElementById("ui5-selection-mirror")||U();const r=document.getElementById("ui5-selection-mirror");return r.textContent=n.value,n&&F(n,r),Y(n,r)},f=l.forwardRef(({children:t},n)=>e.jsx(L,{children:e.jsx(O,{ref:n,style:{padding:"1rem",position:"relative"},direction:"Column",children:t})}));f.displayName="SelectionAssistantContainer";try{f.displayName="SelectionAssistantContainer",f.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}try{f.displayName="SelectionAssistantContainer",f.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}function E(){const t=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[h,c]=l.useState({}),[u,x]=l.useState(""),[b,g]=l.useState(!1),S=(i,s)=>{c({left:`${i.left-s.left+i.width+4}px`,top:`${i.top-s.top}px`}),o(!0)},R=(i,s)=>{c({left:`${i.left-s.left+i.width}px`,top:`${i.top-s.top+i.height}px`}),o(!0)},v=i=>{var B;const s=i.currentTarget,p=P(s),m=s.getBoundingClientRect(),d=(B=t.current)==null?void 0:B.getBoundingClientRect();d&&(p.bottom>m.bottom||p.right>m.right?S(m,d):R(p,d))},y=i=>{var d;const p=i.currentTarget.getBoundingClientRect(),m=(d=t.current)==null?void 0:d.getBoundingClientRect();S(p,m)},a=()=>{const s=`The selected text equals to: "${document.getSelection().toString()}"`;x(s),g(!0)};return e.jsxs(f,{ref:t,children:[e.jsx(T,{for:"ai-input",showColon:!0,children:"Input with Selection Assistant"}),e.jsx(w,{id:"ai-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:v,onMouseDown:()=>{o(!1)},onScroll:()=>{o(!1)},onBlur:i=>{i.relatedTarget!==n.current&&o(!1)}}),e.jsx("br",{}),e.jsx(T,{for:"ai-native-input",showColon:!0,children:"Input with native API"}),e.jsx(w,{id:"ai-native-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:y}),r&&e.jsx(j,{style:{position:"absolute",zIndex:2,...h},ref:n,icon:A,onClick:a,onBlur:()=>{o(!1)}}),e.jsx(I,{open:b,onClose:()=>{g(!1)},children:u})]})}E.displayName="InputSelectionAssistant";function G(){const t=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[h,c]=l.useState({}),[u,x]=l.useState(""),[b,g]=l.useState(!1),S=(a,i)=>{c({left:`${a.left-i.left+a.width+4}px`,top:`${a.top-i.top}px`}),o(!0)},R=(a,i)=>{c({left:`${a.left-i.left+a.width}px`,top:`${a.top-i.top+a.height}px`}),o(!0)},v=a=>{var d;const i=a.currentTarget,s=P(i),p=i.getBoundingClientRect(),m=(d=t.current)==null?void 0:d.getBoundingClientRect();m&&(s.bottom>p.bottom||s.right>p.right?S(p,m):R(s,m))},y=()=>{const i=`The selected text equals to: "${document.getSelection().toString()}"`;x(i),g(!0)};return e.jsxs(f,{ref:t,children:[e.jsx(T,{for:"ai-textarea",showColon:!0,children:"TextArea with Selection Assistant"}),e.jsx(_,{id:"ai-textarea",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec.",onSelect:v,style:{width:"80%",marginBlockEnd:"3rem"},rows:5}),r&&e.jsx(j,{style:{position:"absolute",zIndex:2,...h},ref:n,icon:A,onClick:y,onBlur:()=>{o(!1)}}),e.jsx(I,{open:b,onClose:()=>{g(!1)},children:u})]})}function C(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...q(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"selection-assistant",children:"Selection Assistant"}),`
`,e.jsx($,{}),`
`,e.jsx(N,{title:"SelectionAssistant (experimental)"}),`
`,e.jsx("table",{style:{width:"550px"},children:e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Usage"}),e.jsx("th",{children:e.jsx(M,{moduleNames:["getElementSelection"],packageName:"@ui5/webcomponents-base/dist/util/SelectionAssistant.js",defaultImport:!0})})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The util is in an experimental state!"]}),`
`,e.jsxs(n.p,{children:["These examples demonstrate the usage of ",e.jsx(n.strong,{children:"SelectionAssistant"}),`, which enhances user interactions by returning the coordinates of the selected text on the select event.
This utility enables developers to create advanced AI-powered scenarios by easily capturing and utilizing the exact coordinates of user-selected text.`]}),`
`,e.jsx(n.h2,{id:"input-with-selection-assistant",children:"Input with Selection Assistant"}),`
`,e.jsx(E,{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
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
`,e.jsx(n.h2,{id:"textarea-with-selection-assistant",children:"TextArea with Selection Assistant"}),`
`,e.jsx(G,{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
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
`,e.jsx(D,{})]})}function Te(t={}){const{wrapper:n}={...q(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(C,{...t})}):C(t)}export{Te as default};
