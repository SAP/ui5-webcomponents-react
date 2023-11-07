import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

export class ExportsRenderer extends AbstractRenderer {
  public phase = RenderingPhase.exports;

  render(context: WebComponentWrapper): string {
    return dedent`
    export { ${Array.from(context.exportSet).join(', ')} };
    export type { ${Array.from(context.typeExportSet).join(', ')} };
    `;
  }
}
