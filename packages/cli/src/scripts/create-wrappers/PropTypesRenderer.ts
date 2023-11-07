import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class PropTypesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.props;

  prepare(context: WebComponentWrapper) {
    context.addTypeImport('@ui5/webcomponents-react', 'CommonProps');
  }

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}PropTypes extends ${context.componentName}Attributes, CommonProps {
    }
    `;
  }
}
