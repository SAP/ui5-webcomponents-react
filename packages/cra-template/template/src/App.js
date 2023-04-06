import { useState } from 'react';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  Label,
  Link,
  LinkDesign,
  ShellBar
} from '@ui5/webcomponents-react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
          Getting Started with UI5 Web Component for React
        </Link>
        <Input placeholder="Hello World" onInput={handleInput} value={inputVal} />
        <Label>{inputVal}</Label>
      </FlexBox>
    </>
  );
}

export default App;
