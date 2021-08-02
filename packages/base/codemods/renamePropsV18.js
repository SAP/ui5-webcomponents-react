const renamingMap = {
  // UI5 Web Components
  Avatar: {
    backgroundColor: 'colorScheme',
    image: 'children',
    imageFitType: null
  },
  AvatarGroup: {
    avatarSize: null
  },
  Bar: {
    middleContent: 'children'
  },
  Button: {
    'aria-label': 'accessibleName',
    iconSize: null
  },
  Card: {
    'aria-label': 'accessibleName',
    heading: 'titleText',
    subheading: 'subtitleText'
  },
  Carousel: {
    hideNavigation: 'hideNavigationArrows',
    selectedIndex: null,
    infiniteScrollOffset: null
  },
  CheckBox: {
    'aria-label': 'accessibleName',
    wrap: 'wrappingType'
  },
  ComboBox: {
    'aria-label': 'accessibleName',
    filterValue: 'value'
  },
  ColorPalette: {
    onChange: 'onItemClick',
    showMoreColors: null,
    showRecentColors: null,
    value: null
  },
  ColorPaletteItem: {
    stableDomRef: null
  },
  DatePicker: {
    'aria-label': 'accessibleName'
  },
  DateRangePicker: {
    firstDateValue: 'startDateValue',
    lastDateValue: 'endDateValue'
  },
  Dialog: {
    'aria-label': 'accessibleName'
  },
  FlexibleColumnLayout: {
    noArrows: 'hideArrows'
  },
  Input: {
    'aria-label': 'accessibleName',
    highlight: null
  },
  Label: {
    wrap: 'wrappingType'
  },
  Link: {
    'aria-label': 'accessibleName',
    wrap: 'wrappingType'
  },
  List: {
    'aria-label': 'accessibleName',
    inset: 'indent'
  },
  MessageStrip: {
    noIcon: 'hideIcon',
    noCloseButton: 'hideCloseButton',
    type: 'design'
  },
  Panel: {
    'aria-label': 'accessibleName'
  },
  Popover: {
    'aria-label': 'accessibleName',
    noArrow: 'hideArrow'
  },
  Popup: {
    'aria-label': 'accessibleName'
  },
  ProductSwitchItem: {
    heading: 'titleText',
    subheading: 'subtitleText'
  },
  RadioButton: {
    wrap: 'wrappingType',
    selected: 'checked',
    onSelect: 'onChange'
  },
  RatingIndicator: {
    'aria-label': 'accessibleName',
    maxValue: 'max'
  },
  Select: {
    'aria-label': 'accessibleName'
  },
  ShellBar: {
    notificationCount: 'notificationsCount'
  },
  StandardListItem: {
    info: 'additionalText',
    infoState: 'additionalTextState'
  },
  SuggestionItem: {
    info: 'additionalText',
    infoState: 'additionalTextState',
    group: null // use SuggestionItemGroup instead
  },
  Switch: {
    graphical: 'design'
  },
  Tab: {
    semanticColor: 'design'
  },
  TabContainer: {
    tabsPlacement: null
  },
  Table: {
    showNoData: 'hideNoData',
    moreText: 'growingButtonText',
    moreSubtext: 'growingButtonSubtext'
  },
  TimelineItem: {
    itemName: 'name',
    itemNameClickable: 'nameClickable',
    onItemNameClick: 'onNameClick'
  },
  Title: {
    wrap: 'wrappingType'
  },
  TreeListItem: {
    info: 'additionalText',
    infoState: 'additionalTextState'
  },
  TreeItem: {
    info: 'additionalText',
    infoState: 'additionalTextState'
  },
  StepInput: {
    'aria-label': 'accessibleName'
  },
  TextArea: {
    'aria-label': 'accessibleName'
  },
  UploadCollection: {
    onFileDeleted: 'onFileDelete',
    noDelete: 'disableDeleteButton',
    noRetry: 'hideRetryButton',
    noTerminate: 'hideTerminateButton',
    noDnd: 'hideDragOverlay'
  },
  Wizard: {
    'aria-label': 'accessibleName',
    onSelectionChange: 'onStepChange'
  },
  WizardStep: {
    'aria-label': 'accessibleName',
    heading: 'titleText',
    subheading: 'subtitleText'
  },

  // UI5 Web Components React
  AnalyticalTable: {
    title: 'header'
  },
  ObjectPageSection: {
    heading: 'titleText',
    headingUppercase: 'titleTextUppercase'
  },
  ObjectPageSubSection: {
    heading: 'titleText'
  }
};

const componentIsImportedFromWebComponentsReact = (j, root, componentName) => {
  const imports = root.find(j.ImportDeclaration);
  const importStatement = imports.find(j.ImportSpecifier, { local: { name: componentName } });

  if (importStatement.length === 0) return false;

  const importedFrom = importStatement.get().parentPath.parentPath.value.source.value;

  return importedFrom.startsWith('@ui5/webcomponents-react');
};

const addWebComponentsReactImport = (j, root, importName) => {
  const imports = root.find(j.ImportDeclaration);
  const n = imports.length;

  const isAlreadyImported = componentIsImportedFromWebComponentsReact(j, root, importName);

  if (isAlreadyImported) {
    return;
  }

  const importStatement = j.importDeclaration(
    [j.importSpecifier(j.identifier(importName), j.identifier(importName))],
    j.literal('@ui5/webcomponents-react')
  );

  if (n) {
    j(imports.at(n - 1).get()).insertAfter(importStatement);
  } else {
    root.get().node.program.body.unshift(importStatement);
  }
};

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};

  const root = j(file.source);

  // eslint-disable-next-line guard-for-in
  for (const componentName in renamingMap) {
    const jsxElements = root.findJSXElements(componentName);

    if (jsxElements.length === 0) {
      continue;
    }

    const validMatch = componentIsImportedFromWebComponentsReact(j, root, componentName);

    if (!validMatch) {
      continue;
    }

    Object.entries(renamingMap[componentName]).forEach(([oldName, newName]) => {
      const jsxAttributes = jsxElements.find(j.JSXAttribute, { name: { name: oldName } });
      if (!jsxAttributes.length) {
        return;
      }
      if (newName === null) {
        jsxAttributes.remove();
      } else {
        jsxAttributes.find(j.JSXIdentifier, { name: oldName }).replaceWith(j.jsxIdentifier(newName));
      }

      if (newName === 'wrappingType') {
        addWebComponentsReactImport(j, root, 'WrappingType');
        jsxAttributes.replaceWith((nodePath) => {
          return j.jsxAttribute(
            nodePath.value.name,
            j.jsxExpressionContainer(
              j.memberExpression(
                j.identifier('WrappingType'),
                nodePath.value.value?.expression?.value === false ? j.identifier('None') : j.identifier('Normal')
              )
            )
          );
        });
      }

      if (componentName === 'Table' && newName === 'hideNoData') {
        // remove all values that used to be like `<Table showNoData />` or `<Table showNoData={true} />`
        jsxAttributes
          .filter((nodePath) => {
            return (
              nodePath.value.name.name === 'hideNoData' &&
              (nodePath.value.value === null || nodePath.value.value?.expression?.value === true)
            );
          })
          .remove();
        // invert the boolean
        jsxAttributes.find(j.BooleanLiteral, { value: false }).replaceWith(j.booleanLiteral(true));
      }

      if (componentName === 'Switch' && newName === 'design') {
        addWebComponentsReactImport(j, root, 'SwitchDesign');
        jsxAttributes.replaceWith((nodePath) => {
          return j.jsxAttribute(
            nodePath.value.name,
            j.jsxExpressionContainer(
              j.memberExpression(
                j.identifier('SwitchDesign'),
                nodePath.value.value?.expression?.value === false ? j.identifier('Textual') : j.identifier('Graphical')
              )
            )
          );
        });
      }
    });
  }

  return root.toSource(printOptions);
};
