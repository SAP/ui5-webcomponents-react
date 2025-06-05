import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import { NavigationLayout, Text, Title } from '@ui5/webcomponents-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { NLShellBar } from './NLShellBar.tsx';
import { NLSideNavigation } from './NLSideNavigation.tsx';

interface AppProps {
  content?: ReactNode;
}

function App({ content }: AppProps) {
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
          {content ?? <Text>Content...</Text>}
        </div>
      </NavigationLayout>
    </>
  );
}

export default App;
