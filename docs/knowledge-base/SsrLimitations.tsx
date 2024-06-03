import { MessageStrip, MessageStripDesign } from '@ui5/webcomponents-react';

export function SsrLimitations() {
  return (
    <MessageStrip design={MessageStripDesign.Information} hideCloseButton>
      <>
        <strong>Known Limitations</strong>
        <ul>
          <li>
            As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the
            outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening
            on the client.
          </li>
          <li>
            The Next.js <code>app</code> directory shows some hydration warnings on the client. These warnings seem not
            to affect the runtime.
          </li>
        </ul>
      </>
    </MessageStrip>
  );
}
