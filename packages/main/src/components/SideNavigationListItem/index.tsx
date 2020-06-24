import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow.js';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { List } from '@ui5/webcomponents-react/lib/List';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { ISideNavigationContext, SideNavigationContext } from '@ui5/webcomponents-react/lib/SideNavigationContext';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Text } from '@ui5/webcomponents-react/lib/Text';

import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useContext,
  useMemo,
  useRef
} from 'react';
import { createPortal } from 'react-dom';
import { CommonProps } from '../../interfaces/CommonProps';
import { sideNavigationListItemStyles } from './SideNavigationListItem.jss';

export interface SideNavigationListItemProps extends CommonProps {
  icon?: string;
  text: string;
  id: number | string;
  children?: ReactNode | ReactNodeArray;
  expanded?: boolean;
}

const useStyles = createComponentStyles(sideNavigationListItemStyles, {
  name: 'SideNavigationListItem'
});
/**
 * <code>import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';</code>
 */
const SideNavigationListItem: FC<SideNavigationListItemProps> = forwardRef(
  (props: SideNavigationListItemProps, ref: Ref<HTMLDivElement>) => {
    const { icon, text, id, children, tooltip, slot, className, style } = props;

    const context = useContext<ISideNavigationContext>(SideNavigationContext);

    const isExpanded = context.expandedItems.includes(id);
    const handleToggleExpand = useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        context.toggleExpandedItems(id);
      },
      [context.toggleExpandedItems, id]
    );

    const classes = useStyles();

    const listItemClasses = StyleClassHelper.of(classes.listItem);

    if (className) {
      listItemClasses.put(className);
    }

    if (context.noIcons) {
      listItemClasses.put(classes.noIcons);
    }

    const validChildren = Children.toArray(children).filter(Boolean);
    const hasChildren = validChildren.length > 0;

    const isOpenStateExpanded = context.openState === SideNavigationOpenState.Expanded;

    const isSelfSelected = context.selectedId === id;
    const hasSelectedChild = !!validChildren.find((child: any) => child.props.id === context.selectedId);

    const passThroughProps = usePassThroughHtmlProps(props, ['id']);

    const customListItemCommonProps = {
      ref,
      className: listItemClasses.valueOf(),
      tooltip,
      slot,
      style,
      'data-id': id,
      ...passThroughProps
    };

    if (isExpanded && isOpenStateExpanded && hasChildren) {
      customListItemCommonProps['data-is-expanded'] = '';
    }

    if (hasChildren) {
      customListItemCommonProps['data-has-children'] = '';
    }

    if (props['isChild']) {
      customListItemCommonProps['data-is-child'] = '';
    }

    const popoverRef = useRef();

    const displayedIcon = useMemo(() => {
      if (!icon) {
        return <span className={classes.icon} />;
      }
      return <Icon name={icon} className={classes.icon} />;
    }, [classes.icon, icon]);

    const handleOpenPopover = useCallback(
      (e) => {
        // @ts-ignore
        popoverRef.current.openBy(e.target);
      },
      [popoverRef.current]
    );

    if (isOpenStateExpanded) {
      return (
        <>
          <CustomListItem selected={isSelfSelected} {...customListItemCommonProps}>
            {!context.noIcons && displayedIcon}
            <Text className={classes.text}>{text}</Text>
            {hasChildren && (
              <Icon
                name={isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}
                onClick={handleToggleExpand}
                className={classes.expandArrow}
              />
            )}
          </CustomListItem>
          {isExpanded &&
            validChildren.map((child: any, index: number) => {
              const style = child.props.style || {};
              if (index !== validChildren.length - 1) {
                style['--ui5-listitem-border-bottom'] = 'none';
              }

              return cloneElement(child, {
                icon: null,
                style,
                isChild: true
              });
            })}
        </>
      );
    }

    return (
      <CustomListItem selected={isSelfSelected || hasSelectedChild} {...customListItemCommonProps}>
        {hasChildren ? (
          <span onClick={handleOpenPopover}>
            {displayedIcon}
            <div className={classes.condensedExpandTriangle} />
            {createPortal(
              <Popover ref={popoverRef} verticalAlign={PopoverVerticalAlign.Top}>
                <List onItemClick={context.onListItemSelected}>
                  <StandardListItem selected={isSelfSelected} data-id={id} tooltip={tooltip}>
                    {text}
                  </StandardListItem>
                  {validChildren.map((child: any, index) => (
                    <StandardListItem
                      selected={context.selectedId === child.props.id}
                      key={index}
                      data-id={child.props.id}
                      tooltip={child.props.tooltip || child.props.text}
                    >
                      {child.props.text}
                    </StandardListItem>
                  ))}
                </List>
              </Popover>,
              document.body
            )}
          </span>
        ) : (
          displayedIcon
        )}
      </CustomListItem>
    );
  }
);

SideNavigationListItem.displayName = 'SideNavigationListItem';

SideNavigationListItem.defaultProps = {};

export { SideNavigationListItem };
