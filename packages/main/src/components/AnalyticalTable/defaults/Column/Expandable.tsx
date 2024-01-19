import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { CssSizeVariables, ThemingParameters, useCurrentTheme } from '@ui5/webcomponents-react-base';
import type { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../../../enums/index.js';
import { Button, Icon } from '../../../../webComponents/index.js';

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

const useStyles = createUseStyles(
  {
    container: {
      height: CssSizeVariables.ui5WcrAnalyticalTableExpandButtonHeight,
      marginInlineEnd: '0.125rem'
    },
    icon: {
      color: ThemingParameters.sapContent_IconColor,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '&::part(root)': {
        padding: '0.375rem',
        width: CssSizeVariables.ui5WcrAnalyticalTableExpandIconHeight,
        height: CssSizeVariables.ui5WcrAnalyticalTableExpandIconHeight
      }
    },
    button: { color: ThemingParameters.sapTextColor, height: '100%', fontSize: '0.75rem' }
  },
  { name: 'ExpandableIndicatorStyles' }
);

export const Expandable = (props) => {
  const { cell, row, column, visibleColumns: columns, webComponentsReactProperties } = props;
  const { renderRowSubComponent, alwaysShowSubComponent, translatableTexts } = webComponentsReactProperties;
  const currentTheme = useCurrentTheme();
  const classes = useStyles();
  const shouldRenderButton = currentTheme === 'sap_horizon' || currentTheme === 'sap_horizon_dark';
  const tableColumns = columns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const columnIndex = tableColumns.findIndex((col) => col.id === column.id);
  let paddingLeft;
  if (row.canExpand) {
    paddingLeft = columnIndex === 0 ? getPadding(row.depth) : 0;
  } else {
    paddingLeft = columnIndex === 0 ? `calc(${getPadding(row.depth)} + 2rem)` : 0;
  }
  const style: CSSProperties = {
    paddingInlineStart: paddingLeft
  };
  const rowProps = row.getToggleRowExpandedProps();

  const subComponentExpandable =
    typeof renderRowSubComponent === 'function' && !!renderRowSubComponent(row) && !alwaysShowSubComponent;

  return (
    <>
      {columnIndex === 0 && (row.canExpand || subComponentExpandable) ? (
        // todo rowProps should be applied to the whole row, not just the cell. We should consider refactoring this.
        <span
          title={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
          style={{ ...rowProps.style, ...style }}
          className={classes.container}
          aria-expanded={row.isExpanded}
          aria-label={row.isExpanded ? translatableTexts.collapseA11yText : translatableTexts.expandA11yText}
        >
          {shouldRenderButton ? (
            <Button
              icon={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
              design={ButtonDesign.Transparent}
              onClick={rowProps.onClick}
              className={classes.button}
            />
          ) : (
            <Icon
              onClick={rowProps.onClick}
              interactive
              name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow}
              data-component-name="AnalyticalTableExpandIcon"
              className={classes.icon}
            />
          )}
        </span>
      ) : (
        <span style={style} />
      )}
      {cell.render('Cell')}
    </>
  );
};
