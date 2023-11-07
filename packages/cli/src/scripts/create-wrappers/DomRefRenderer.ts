import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class DomRefRenderer extends AbstractRenderer {
  public phase = RenderingPhase.domRef;

  prepare(context: WebComponentWrapper) {
    context.addTypeImport('@ui5/webcomponents-react', 'Ui5DomRef');
  }

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}DomRef extends ${context.componentName}Attributes, Ui5DomRef {
    }
    `;
  }
}
