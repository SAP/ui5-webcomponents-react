'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
var Lint = require('tslint');
var path = require('path');
var Rule = /** @class */ (function(_super) {
  __extends(Rule, _super);
  function Rule() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Rule.prototype.apply = function(sourceFile) {
    return this.applyWithWalker(new NoIndexImportsWalker(sourceFile, this.getOptions()));
  };
  Rule.FAILURE_STRING = "imports from main 'index.ts' are forbidden";
  Rule.FORBIDDEN_FILE = path.dirname(path.resolve('src', 'index.ts'));
  return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
// The walker takes care of all the work.
var NoIndexImportsWalker = /** @class */ (function(_super) {
  __extends(NoIndexImportsWalker, _super);
  function NoIndexImportsWalker() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  NoIndexImportsWalker.prototype.visitImportDeclaration = function(node) {
    var fileName = node.getSourceFile().fileName;
    // import path is surrounded by ' or " - replace it
    var importPath = node.moduleSpecifier.getText().replace(/(['"])/g, '');
    var importedPath = path.resolve(path.dirname(fileName), importPath);
    var importRegex = new RegExp(Rule.FORBIDDEN_FILE + '(.ts)?$');
    // does the import target the "forbidden" index.ts - if yes mark as error
    if (/^.?.\/.*/.test(importPath) && importRegex.test(importedPath)) {
      this.addFailureAtNode(node, Rule.FAILURE_STRING);
    }
    // call the base version of this visitor to actually parse this node
    _super.prototype.visitImportDeclaration.call(this, node);
  };
  return NoIndexImportsWalker;
})(Lint.RuleWalker);
