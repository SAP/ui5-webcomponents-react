import { ThemeProvider } from '@ui5/webcomponents-react';
import UXCIntegrationApp from '../patterns/navigation-layout/src/App.js';
import '../patterns/navigation-layout/src/index.css';
import { EmbeddedStackBlitz } from '@/docs/EmbeddedStackBlitz.js';

function UXCIntegration() {
  return (
    <div style={{ height: '80vh', position: 'relative' }}>
      <ThemeProvider>
        <UXCIntegrationApp
          content={<EmbeddedStackBlitz repoPath="SAP/ui5-webcomponents-react/tree/main/patterns/navigation-layout" />}
        />
      </ThemeProvider>
    </div>
  );
}

export default UXCIntegration;
