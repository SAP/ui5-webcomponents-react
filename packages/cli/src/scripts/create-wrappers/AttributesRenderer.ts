import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class AttributesRenderer extends AbstractRenderer {
  public phase = RenderingPhase.attributes;

  render(context: WebComponentWrapper): string {
    return dedent`
    interface ${context.componentName}Attributes {
    }
    `;
  }
}
