import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import { NavigationLayout, Text, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';
import { NLShellBar } from './NLShellBar.tsx';
import { NLSideNavigation } from './NLSideNavigation.tsx';

function App() {
  const [mode, setMode] = useState<NavigationLayoutMode>(NavigationLayoutMode.Auto);
  const [contentTitle, setContentTitle] = useState('Home');
  return (
    <>
      <NavigationLayout
        id="navigation-layout"
        header={<NLShellBar setMode={setMode} />}
        sideContent={<NLSideNavigation setContentTitle={setContentTitle} />}
        mode={mode}
      >
        <div className="mainContent">
          <Title>{contentTitle}</Title>
          <br />
          <Text>Content...</Text>
        </div>
      </NavigationLayout>
    </>
  );
}

export default App;
