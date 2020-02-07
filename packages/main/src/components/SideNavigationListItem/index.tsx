import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/icons/navigation-right-arrow.js';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { List } from '@ui5/webcomponents-react/lib/List';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
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
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { sideNavigationListItemStyles } from './SideNavigationListItem.jss';

export interface SideNavigationListItemProps extends CommonProps {
  icon?: string;
  text: string;
  id: number | string;
  children?: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof sideNavigationListItemStyles>>(
  sideNavigationListItemStyles,
  {
    name: 'SideNavigationListItem'
  }
);
/**
 * <code>import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';</code>
 */
const SideNavigationListItem: FC<SideNavigationListItemProps> = forwardRef(
  (props: SideNavigationListItemProps, ref: Ref<HTMLDivElement>) => {
    const { icon, text, id, children, tooltip, slot, className, style } = props;

    const [isExpanded, setExpanded] = useState(false);

    const handleToggleExpand = useCallback(() => {
      setExpanded(!isExpanded);
    }, [isExpanded, setExpanded]);

    const classes = useStyles();

    const listItemClasses = StyleClassHelper.of(classes.listItem);

    if (className) {
      listItemClasses.put(className);
    }

    if (isExpanded) {
      listItemClasses.put(classes.expanded);
    }

    const noIcons = props['noIcons'];
    if (noIcons) {
      listItemClasses.put(classes.noIcons);
    }

    const childCount = Children.count(children);
    const validChildren = Children.toArray(children).filter(Boolean);

    const isOpenStateExpanded = props['openState'] === SideNavigationOpenState.Expanded;

    useEffect(() => {
      if (validChildren.length) {
        const selectedElement = validChildren.find((child: any) => child.props.id === props['selectedId']);
        if (selectedElement) {
          setExpanded(isOpenStateExpanded);
        }
      }
    }, [props['selectedId'], id, children, setExpanded, isOpenStateExpanded]);

    const isSelfSelected = props['selectedId'] === id;
    const hasSelectedChild =
      !isOpenStateExpanded &&
      childCount > 0 &&
      !!validChildren.find((child: any) => child.props.id === props['selectedId']);

    const passThroughProps = usePassThroughHtmlProps(props);

    const customListItemCommonProps = {
      ref,
      className: listItemClasses.valueOf(),
      tooltip,
      slot,
      style,
      'data-id': id,
      'data-has-children': childCount > 0,
      'data-is-child': props['isChild'],
      ...passThroughProps
    };

    const popoverRef = useRef();

    const displayedIcon = useMemo(() => {
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
            {icon && !noIcons && displayedIcon}
            {!icon && !noIcons && <span className={classes.icon} />}
            <Text className={classes.text}>{text}</Text>
            {childCount > 0 && (
              <span onClick={handleToggleExpand} className={classes.expandArrow}>
                <Icon name={isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'} />
              </span>
            )}
          </CustomListItem>
          {isExpanded &&
            validChildren.map((child: any, index: number) => {
              const style = child.props.style || {};
              if (index !== childCount - 1) {
                style['--ui5-listitem-border-bottom'] = 'none';
              }

              return cloneElement(child, {
                icon: null,
                style,
                openState: props['openState'],
                selectedId: props['selectedId'],
                noIcons,
                isChild: true
              });
            })}
        </>
      );
    }

    return (
      <>
        <CustomListItem selected={isSelfSelected || hasSelectedChild} {...customListItemCommonProps}>
          {childCount > 0 ? (
            <span onClick={handleOpenPopover}>
              {displayedIcon}
              <div className={classes.condensedExpandTriangle} />
              {createPortal(
                <Popover ref={popoverRef} open={isExpanded} verticalAlign={PopoverVerticalAlign.Top}>
                  <List onItemClick={props['onListItemSelected']}>
                    <StandardListItem selected={isSelfSelected} data-id={id} tooltip={tooltip}>
                      {text}
                    </StandardListItem>
                    {validChildren.map((child: any, index) => (
                      <StandardListItem
                        selected={props['selectedId'] === child.props.id}
                        key={index}
                        data-id={child.props.id}
                        data-parent-id={id}
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
      </>
    );
  }
);

SideNavigationListItem.displayName = 'SideNavigationListItem';

SideNavigationListItem.defaultProps = {};

export { SideNavigationListItem };
