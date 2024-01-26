'use client';

import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, ListItemType, ValueState } from '../../enums/index.js';
import { MessageViewContext } from '../../internal/MessageViewContext.js';
import type { CommonProps } from '../../types/index.js';
import type { CustomListItemDomRef } from '../../webComponents/CustomListItem/index.js';
import { CustomListItem } from '../../webComponents/CustomListItem/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { getIconNameForType } from './utils.js';

export interface MessageItemPropTypes extends CommonProps {
  /**
   * Specifies the title of the message
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.
   */
  titleText: ReactNode;

  /**
   * Specifies the subtitle of the message
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  subtitleText?: ReactNode;

  /**
   * Defines the number of messages for a given message type.
   */
  counter?: number;

  /**
   * Specifies the type of the message
   */
  type?: ValueState | keyof typeof ValueState;

  /**
   * Name of a message group the current item belongs to.
   */
  groupName?: string;

  /**
   * Specifies detailed description of the message
   */
  children?: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(
  {
    listItem: {
      height: CssSizeVariables.ui5WcrMessageViewListItemHeightSingle
    },
    message: {
      padding: '0.25rem 0',
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      paddingInlineEnd: '1rem',
      boxSizing: 'border-box'
    },
    withSubtitle: {
      height: CssSizeVariables.ui5WcrMessageViewListItemHeightByLine
    },
    withChildren: {
      paddingInlineEnd: '0rem'
    },
    iconContainer: {
      width: '3rem',
      minWidth: '3rem',
      height: '2.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '1rem',
      height: '1rem'
    },
    title: {
      fontFamily: ThemingParameters.sapFontHeaderFamily,
      fontSize: CssSizeVariables.ui5WcrMessageItemTitleFontSize,
      color: ThemingParameters.sapGroup_TitleTextColor,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flex: '1 1 auto',
      '& + $subtitle': {
        marginBlockStart: '0.25rem',
        cursor: 'inherit'
      }
    },
    subtitle: {},
    counter: {
      color: ThemingParameters.sapContent_MarkerTextColor,
      fontFamily: ThemingParameters.sapFontFamily,
      fontSize: ThemingParameters.sapFontSize,
      paddingInlineStart: '1rem',
      flex: 'none'
    },
    navigation: {
      height: '0.875rem',
      width: '0.875rem',
      padding: '0 0.9375rem',
      flexShrink: 0
    },
    typeError: {
      '& $icon': {
        color: ThemingParameters.sapNegativeElementColor
      }
    },
    typeSuccess: {
      '& $icon': {
        color: ThemingParameters.sapPositiveElementColor
      }
    },
    typeWarning: {
      ' & $icon': {
        color: ThemingParameters.sapCriticalElementColor
      }
    },
    typeInformation: {
      '& $icon': {
        color: ThemingParameters.sapInformativeElementColor
      }
    },
    typeNone: {
      '& $icon': {
        color: ThemingParameters.sapInformativeElementColor
      }
    }
  },
  { name: 'MessageItem' }
);
/**
 * A component used to hold different types of system messages inside the `MessageView` component.
 */
const MessageItem = forwardRef<CustomListItemDomRef, MessageItemPropTypes>((props, ref) => {
  const { titleText, subtitleText, counter, type = ValueState.Error, children, className, ...rest } = props;

  const { selectMessage } = useContext(MessageViewContext);

  const classes = useStyles();

  const listItemClasses = clsx(
    classes.listItem,
    Reflect.get(classes, `type${type}`),
    className,
    subtitleText && classes.withSubtitle
  );

  const messageClasses = clsx(classes.message, children && classes.withChildren);

  const handleListItemClick = (e) => {
    if (children) {
      selectMessage(props);
      if (typeof rest.onClick === 'function') {
        rest.onClick(e);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (typeof rest.onKeyDown === 'function') {
      rest.onKeyDown(e);
    }
    if (e.code === 'Enter') {
      handleListItemClick(e);
    }
  };
  return (
    <CustomListItem
      onClick={handleListItemClick}
      onKeyDown={handleKeyDown}
      data-title={titleText}
      data-type={type}
      type={children ? ListItemType.Active : ListItemType.Inactive}
      {...rest}
      className={listItemClasses}
      ref={ref}
    >
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={messageClasses}>
        <div className={classes.iconContainer}>
          <Icon name={getIconNameForType(type as ValueState)} className={classes.icon} />
        </div>
        <FlexBox
          direction={FlexBoxDirection.Column}
          style={{ flex: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {titleText && <span className={classes.title}>{titleText}</span>}
          {subtitleText && <Label className={classes.subtitle}>{subtitleText}</Label>}
        </FlexBox>
        {counter != null && <span className={classes.counter}>{counter}</span>}
        {children && <Icon className={classes.navigation} name={iconArrowRight} />}
      </FlexBox>
    </CustomListItem>
  );
});

MessageItem.displayName = 'MessageItem';

export { MessageItem };
