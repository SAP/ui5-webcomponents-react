import type { WebComponentWrapper } from './WebComponentWrapper.js';

export enum RenderingPhase {
  imports = 'imports',
  attributes = 'attributes',
  props = 'props',
  domRef = 'domRef',
  component = 'component',
  exports = 'exports'
}

export abstract class AbstractRenderer {
  public readonly phase!: RenderingPhase;

  public prepare(context: WebComponentWrapper) {
    // optional
  }
  abstract render(context: WebComponentWrapper): string;
}
