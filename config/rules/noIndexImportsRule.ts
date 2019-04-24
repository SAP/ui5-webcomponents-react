import * as ts from 'typescript';
import * as Lint from 'tslint';
import * as path from 'path';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "imports from main 'index.ts' are forbidden";

  public static FORBIDDEN_FILE = path.dirname(path.resolve('src', 'index.ts'));

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoIndexImportsWalker(sourceFile, this.getOptions()));
  }
}

// The walker takes care of all the work.
class NoIndexImportsWalker extends Lint.RuleWalker {
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    const fileName = node.getSourceFile().fileName;
    // import path is surrounded by ' or " - replace it
    const importPath = node.moduleSpecifier.getText().replace(/(['"])/g, '');
    const importedPath = path.resolve(path.dirname(fileName), importPath);
    const importRegex = new RegExp(`${Rule.FORBIDDEN_FILE}(\.ts)?$`);
    // does the import target the "forbidden" index.ts - if yes mark as error
    if (/^.?.\/.*/.test(importPath) && importRegex.test(importedPath)) {
      this.addFailureAtNode(node, Rule.FAILURE_STRING);
    }
    // call the base version of this visitor to actually parse this node
    super.visitImportDeclaration(node);
  }
}
