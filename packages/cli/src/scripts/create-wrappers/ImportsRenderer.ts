import dedent from 'dedent';
import { AbstractRenderer, RenderingPhase } from './AbstractRenderer.js';
import { WebComponentWrapper } from './WebComponentWrapper.js';

function sortAndMergeMembers(members: string[]) {
  return members.sort((a, b) => a.localeCompare(b)).join(', ');
}

export class ImportsRenderer extends AbstractRenderer {
  public phase = RenderingPhase.imports;

  render(context: WebComponentWrapper): string {
    const unassignedImports = [...context.importMap.entries()]
      .filter(([_, importConfig]) => {
        return importConfig.importUnassinged;
      })
      .map(([mod]) => mod)
      .sort((a, b) => a.localeCompare(b));
    const sortedModules = [...context.importMap.keys()]
      .filter((mod) => !unassignedImports.includes(mod))
      .sort((a, b) => a.localeCompare(b));

    return dedent`
    ${unassignedImports.map((imp) => `import '${imp}';`).join('\n')}  
    ${sortedModules
      .map((module) => {
        const config = context.importMap.get(module)!;
        let regularImports = '';
        if (config.typeOnlyDefault) {
          regularImports += 'type ';
        }
        if (config.default) {
          regularImports += config.default;
        }
        if (config.default && config.named.length > 0) {
          regularImports += ', ';
        }
        if (config.named.length > 0) {
          regularImports += `{ ${sortAndMergeMembers(config.named)} }`;
        }

        let imports = '';
        if (regularImports.length > 0) {
          imports = `import ${regularImports} from '${module}';`;
        }

        if (config.types.length > 0) {
          imports += `import type { ${sortAndMergeMembers(config.types)} } from '${module}';`;
        }
        return imports;
      })
      .join('\n')}
    `;
  }
}
