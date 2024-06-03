import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { CssSizeVariables, useCurrentTheme, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { ButtonDesign } from '../../../../enums/index.js';
import { Button, Icon } from '../../../../webComponents/index.js';
import { classNames, styleData } from './Expandable.module.css.js';

const getPadding = (level) => {
  switch (level) {
    case 0:
      return '0px';
    case 1:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel1;
    case 2:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel2;
    case 3:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel3;
    default:
      return `calc(${CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel3} + ${level - 3}rem * 0.5)`;
  }
};

export const Expandable = (props) => {
  const { cell, row, column, visibleColumns: columns, webComponentsReactProperties } = props;
  const { renderRowSubComponent, alwaysShowSubComponent, translatableTexts } = webComponentsReactProperties;
  const currentTheme = useCurrentTheme();
  useStylesheet(styleData, Expandable.displayName);
  const shouldRenderButton = currentTheme === 'sap_horizon' || currentTheme === 'sap_horizon_dark';
  const tableColumns = columns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const columnIndex = tableColumns.findIndex((col) => col.id === column.id);
  const paddingLeft = getPadding(row.depth);
  const rowProps = row.getToggleRowExpandedProps();
  const subComponentExpandable =
    typeof renderRowSubComponent === 'function' && !!renderRowSubComponent(row) && !alwaysShowSubComponent;

  return (
    <>
      {columnIndex === 0 && (
        // todo rowProps should be applied to the whole row, not just the cell. We should consider refactoring this.
        <>
          {row.canExpand || subComponentExpandable ? (
            <span
              title={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
              style={{ ...rowProps.style, paddingInlineStart: paddingLeft }}
              className={classNames.container}
              aria-expanded={row.isExpanded}
              aria-label={row.isExpanded ? translatableTexts.collapseA11yText : translatableTexts.expandA11yText}
            >
              {shouldRenderButton ? (
                <Button
                  tabIndex={-1}
                  icon={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
                  design={ButtonDesign.Transparent}
                  onClick={rowProps.onClick}
                  className={classNames.button}
                />
              ) : (
                <Icon
                  tabIndex={-1}
                  onClick={rowProps.onClick}
                  interactive
                  name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
                  data-component-name="AnalyticalTableExpandIcon"
                  className={classNames.icon}
                />
              )}
            </span>
          ) : (
            <span
              style={{ paddingInlineStart: paddingLeft }}
              data-component-name="AnalyticalTableNonExpandableCellSpacer"
              className={clsx(
                classNames.nonExpandableCellSpacer,
                shouldRenderButton && classNames.withExpandableButton
              )}
            />
          )}
        </>
      )}
      {cell.render('Cell')}
    </>
  );
};

Expandable.displayName = 'Expandable';
