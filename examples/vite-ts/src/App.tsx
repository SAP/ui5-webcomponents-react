import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import {
  Avatar,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  InputPropTypes,
  Label,
  Link,
  LinkDesign,
  ShellBar
} from '@ui5/webcomponents-react';
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState('');
  const handleInput: InputPropTypes['onInput'] = (e) => {
    setInputVal(e.target.value ?? '');
  };
  return (
    <>
      <ShellBar
        logo={<img src="/vite.svg" alt={'Vite Logo'} />}
        primaryTitle="UI5 Web Components for React Template"
        profile={<Avatar icon={employeeIcon} />}
      />
      <FlexBox
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
