import { generateDiff } from './diff';
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

function getEssentials(str) {
  return str.replace(/[\n ]/g, '');
}

function parseStatement(statement) {
  if (!statement) {
    return {};
  }
  return statement.split('\n').reduce((acc, line) => {
    if (line.indexOf(':') !== -1) {
      const parts = line.split(/:(.+)/);
      const isGenerated = parts[1].indexOf('// @generated') !== -1;
      acc[parts[0]] = {
        value: parts[1].replace('// @generated', '').trim(),
        isGenerated
      };
    }
    return acc;
  }, {});
}

function filterObject(obj, propKey, constraint) {
  return Object.entries(obj)
    .filter(([key, item]) => item[propKey] === constraint)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

function formatKey(key) {
  let formattedKey = key.replace(/^[ ]+/g, '');
  return formattedKey.startsWith('\t') ? formattedKey : '\t' + formattedKey;
}

function formatDefaultPropValue(val, isLast) {
  return isLast ? val.replace(',', '') : val.trim().endsWith(',') ? val : `${val.trim()},`;
}

function detectChanges(newProps, oldProps) {
  let changesFound = false;

  Object.entries(newProps).forEach(([key, item]) => {
    const existingItem = oldProps[key];
    if (existingItem) {
      if (
        (existingItem.value === item.value && !existingItem.isGenerated) ||
        (existingItem.value !== item.value && existingItem.isGenerated)
      ) {
        changesFound = true;
      }
    } else {
      changesFound = true;
    }
  });

  Object.entries(oldProps)
    .filter(([key, item]) => item.isGenerated)
    .forEach(([key]) => {
      if (!newProps[key]) {
        changesFound = true;
      }
    });

  return changesFound;
}

async function showOptions(componentName, tsTypings, indexPath, jsxContent, onlyStopForMerge) {
  const existingWrapperContent = fs.readFileSync(indexPath, 'utf8');

  if (getEssentials(existingWrapperContent) === getEssentials(jsxContent)) {
    return;
  }

  const defaultPropsRegex = new RegExp(`${componentName}\.defaultProps(.|\\n)*?};`);
  const interfaceRegex = /export interface(.|\n)*?}/;

  const oldInterfaceString = interfaceRegex.exec(existingWrapperContent)[0];
  const oldDefaultPropsRegexResult = defaultPropsRegex.exec(existingWrapperContent);
  const oldDefaultPropsString = oldDefaultPropsRegexResult ? oldDefaultPropsRegexResult[0] : null;
  const newDefaultPropString = tsTypings.defaultPropsStatement;
  const newInterfaceString = tsTypings.interfaceStatement;
  const diff = generateDiff(existingWrapperContent, jsxContent);

  const newInterface = parseStatement(newInterfaceString);
  const oldInterface = parseStatement(oldInterfaceString);

  const newDefaultProps = parseStatement(newDefaultPropString);
  const oldDefaultProps = parseStatement(oldDefaultPropsString);

  const mergeOption = {
    name: 'Merge interface/default Props Statement',
    value: 'mergeInterface'
  };

  const showMergeOption = detectChanges(newInterface, oldInterface) || detectChanges(newDefaultProps, oldDefaultProps);
  if (onlyStopForMerge && !showMergeOption) {
    return;
  }

  function mergeObjects(obj1, obj2) {
    let filteredObj1 = {};
    let filteredObj2 = obj2;
    Object.entries(obj1).forEach(([key, item]) => {
      const existingItem = obj2[key];

      if (!existingItem) {
        filteredObj1[key] = item;
      } else {
        if (item.value === existingItem.value) {
          filteredObj1[key] = {
            ...item,
            isGenerated: true
          };
          delete filteredObj2[key];
        }
      }
    });

    return {
      ...filteredObj1,
      ...filteredObj2
    };
  }

  function mergeWrappers() {
    let mergedWrapper = existingWrapperContent;

    if (newInterfaceString !== oldInterfaceString) {
      const manuallyAddedProps = filterObject(oldInterface, 'isGenerated', false);
      const mergedInterface = mergeObjects(newInterface, manuallyAddedProps);

      const interfaceName = `${componentName}PropTypes`;

      let mergedInterfaceStatement = `export interface ${interfaceName} extends WithWebComponentPropTypes {\n`;

      Object.entries(mergedInterface).forEach(([key, item]) => {
        mergedInterfaceStatement = mergedInterfaceStatement.concat(
          !mergedInterfaceStatement.endsWith('\n') ? '\n' : '',
          `${formatKey(key)}: ${item.value}${item.isGenerated ? ' // @generated' : ''}\n`
        );
      });
      mergedInterfaceStatement += '}';
      mergedWrapper = mergedWrapper.replace(interfaceRegex, mergedInterfaceStatement);
    }

    if (newDefaultPropString && newDefaultPropString !== '' && newDefaultPropString !== oldDefaultPropsString) {
      const manuallyAddedDefaultProps = filterObject(oldDefaultProps, 'isGenerated', false);
      const mergedDefaultProps = mergeObjects(newDefaultProps, manuallyAddedDefaultProps);

      let mergedDefaultPropsStatement = `${componentName}.defaultProps = {\n`;

      const defaultPropsCount = Object.keys(mergedDefaultProps).length;
      Object.entries(mergedDefaultProps).forEach(([key, item], index) => {
        mergedDefaultPropsStatement = mergedDefaultPropsStatement.concat(
          !mergedDefaultPropsStatement.endsWith('\n') ? '\n' : '',
          `${formatKey(key)}: ${formatDefaultPropValue(item.value, index === defaultPropsCount - 1)} ${
            item.isGenerated ? '// @generated' : ''
          }`
        );
      });

      mergedDefaultPropsStatement = `${mergedDefaultPropsStatement}\n};`;

      if (defaultPropsRegex.test(mergedWrapper)) {
        mergedWrapper = mergedWrapper.replace(defaultPropsRegex, mergedDefaultPropsStatement);
      } else {
        const exportPattern = `export { ${componentName} };\n`;
        mergedWrapper = mergedWrapper.replace(
          new RegExp(exportPattern),
          `${mergedDefaultPropsStatement}\n\n${exportPattern}`
        );
      }
    }
    return mergedWrapper;
  }

  const showPrompt = () => {
    return inquirer
      .prompt([
        {
          type: 'list',
          message: `${componentName} Wrapper already exists. What do you want to do?`,
          name: componentName,
          choices: [
            {
              name: 'Keep existing wrapper',
              value: 'keepOldWrapper'
            },
            {
              name: 'Accept New Wrapper',
              value: 'acceptNewWrapper'
            },
            ...(showMergeOption ? [mergeOption] : []),
            new inquirer.Separator(),
            {
              name: 'Print New Wrapper',
              value: 'printNewWrapper'
            },
            {
              name: 'Print Old Wrapper',
              value: 'printOldWrapper'
            },
            {
              name: 'Print Diff',
              value: 'printDiff'
            }
          ]
        }
      ])
      .then((answers) => {
        switch (answers[componentName]) {
          case 'acceptNewWrapper':
            fs.writeFileSync(indexPath, jsxContent);
            console.log(chalk.green(`Wrapper for ${componentName} overwritten`));
            break;
          case 'mergeInterface':
            const mergedFileContent = mergeWrappers();
            fs.writeFileSync(indexPath, mergedFileContent);
            break;
          case 'printNewWrapper':
            console.log(jsxContent);
            return showPrompt();
          case 'printOldWrapper':
            console.log(existingWrapperContent);
            return showPrompt();
          case 'printDiff':
            console.log(diff);
            return showPrompt();
        }
      });
  };

  console.log(chalk.cyan(`\n\n${componentName} Wrapper already exists. See changes:`));
  console.log(diff);
  await showPrompt();
}

module.exports = showOptions;
