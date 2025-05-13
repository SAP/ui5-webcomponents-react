import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { CssSizeVariables, useCurrentTheme } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { FocusEvent } from 'react';
import type { ButtonDomRef } from '../../../../webComponents/Button/index.js';
import { Button } from '../../../../webComponents/Button/index.js';
import { Icon } from '../../../../webComponents/Icon/index.js';
import type { ColumnType, RowType, WCRPropertiesType } from '../../types/index.js';
import { RenderColumnTypes } from '../../types/index.js';

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

interface ExpandableProps {
  cell: Record<string, any>;
  row: RowType;
  column: ColumnType;
  visibleColumns: ColumnType[];
  webComponentsReactProperties: WCRPropertiesType;
}

export const Expandable = (props: ExpandableProps) => {
  const { cell, row, column, visibleColumns: columns, webComponentsReactProperties } = props;
  const {
    renderRowSubComponent,
    alwaysShowSubComponent,
    translatableTexts,
    classes: classNames,
  } = webComponentsReactProperties;
  const currentTheme = useCurrentTheme();
  const shouldRenderButton = currentTheme === 'sap_horizon' || currentTheme === 'sap_horizon_dark';
  const tableColumns = columns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column',
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
            >
              {shouldRenderButton ? (
                <Button
                  tabIndex={-1}
                  icon={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
                  design={ButtonDesign.Transparent}
                  className={classNames.button}
                  onClick={rowProps.onClick}
                  accessibilityAttributes={{ expanded: row.isExpanded }}
                  onFocus={(e: FocusEvent<ButtonDomRef>) => {
                    e.target.accessibleName = row.isExpanded
                      ? translatableTexts.collapseNodeA11yText
                      : translatableTexts.expandNodeA11yText;
                  }}
                  onBlur={(e: FocusEvent<ButtonDomRef>) => {
                    e.target.accessibleName = '';
                  }}
                />
              ) : (
                <Icon
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={rowProps.onClick}
                  mode={IconMode.Interactive}
                  name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
                  aria-expanded={`${row.isExpanded}`}
                  data-component-name="AnalyticalTableExpandIcon"
                  className={classNames.expandableIcon}
                  accessibleName={
                    row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText
                  }
                />
              )}
            </span>
          ) : (
            <span
              style={{ paddingInlineStart: paddingLeft }}
              data-component-name="AnalyticalTableNonExpandableCellSpacer"
              className={clsx(
                classNames.nonExpandableCellSpacer,
                shouldRenderButton && classNames.withExpandableButton,
              )}
              onFocus={(e: FocusEvent<ButtonDomRef>) => {
                e.target.accessibleName = row.isExpanded
                  ? translatableTexts.collapseNodeA11yText
                  : translatableTexts.expandNodeA11yText;
              }}
              onBlur={(e: FocusEvent<ButtonDomRef>) => {
                e.target.accessibleName = '';
              }}
            />
          )}
        </>
      )}
      {cell.render(RenderColumnTypes.Cell)}
    </>
  );
};

Expandable.displayName = 'Expandable';
