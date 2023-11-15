import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';

interface ImportConfig {
  default: string | null;
  typeOnlyDefault: boolean;
  named: string[];
  types: string[];
}

export class WebComponentWrapper {
  tagName: string;
  componentName: string;
  modulePath: string;

  importMap = new Map<string, ImportConfig>();
  private renderers = new Array<AbstractRenderer>();

  public exportSet = new Set<string>();
  public typeExportSet = new Set<string>();

  constructor(tagName: string, componentName: string, modulePath: string) {
    this.tagName = tagName;
    this.componentName = componentName;
    this.modulePath = modulePath;
  }

  addDefaultImport(pkgName: string, localName: string) {
    const importConfig = this.getOrCreateImportConfig(pkgName);
    importConfig.default = localName;
    importConfig.typeOnlyDefault = false;
    return this;
  }

  addNamedImport(pkgName: string, localName: string) {
    const importConfig = this.getOrCreateImportConfig(pkgName);
    importConfig.named.push(localName);
    return this;
  }

  addDefaultTypeImport(pkgName: string, localName: string) {
    const importConfig = this.getOrCreateImportConfig(pkgName);
    importConfig.default = localName;
    importConfig.typeOnlyDefault = true;
    return this;
  }

  addTypeImport(pkgName: string, localName: string) {
    const importConfig = this.getOrCreateImportConfig(pkgName);
    importConfig.types.push(localName);
    return this;
  }

  addUnassignedImport(pkgName: string) {
    this.getOrCreateImportConfig(pkgName);
    return this;
  }

  addRenderer(ctx: AbstractRenderer) {
    this.renderers.push(ctx);
  }

  render() {
    for (const renderer of this.renderers) {
      if (typeof renderer.prepare === 'function') {
        renderer.prepare(this);
      }
    }
    let result = '';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.imports)?.render(this) ?? '';
    result += '\n\n';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.attributes)?.render(this) ?? '';
    result += '\n\n';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.props)?.render(this) ?? '';
    result += '\n\n';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.domRef)?.render(this) ?? '';
    result += '\n\n';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.component)?.render(this) ?? '';
    result += '\n\n';
    result += this.renderers.find((renderer) => renderer.phase === RenderingPhase.exports)?.render(this) ?? '';
    result += '\n';
    return result;
  }

  private getOrCreateImportConfig(pkgName: string) {
    if (!this.importMap.has(pkgName)) {
      this.importMap.set(pkgName, {
        default: null,
        typeOnlyDefault: false,
        named: [],
        types: []
      });
    }
    return this.importMap.get(pkgName)!;
  }
}
