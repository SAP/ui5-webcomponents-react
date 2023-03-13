'use client';

import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef, ReactNode, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import { ListItemType } from '../../enums/ListItemType';
import { ValueState } from '../../enums/ValueState';
import { CommonProps } from '../../interfaces/CommonProps';
import { MessageViewContext } from '../../internal/MessageViewContext';
import { CustomListItem, CustomListItemDomRef } from '../../webComponents/CustomListItem';
import { Icon } from '../../webComponents/Icon';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';
import { getIconNameForType } from './utils';

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
      height: CssSizeVariables.sapWcrMessageViewListItemHeightSingle
    },
    message: {
      padding: '0.25rem 0',
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      paddingRight: '1rem',
      boxSizing: 'border-box'
    },
    withSubtitle: {
      height: CssSizeVariables.sapWcrMessageViewListItemHeightByLine
    },
    withChildren: {
      paddingRight: '0rem'
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
      fontSize: ThemingParameters.sapFontHeader6Size,
      color: ThemingParameters.sapGroup_TitleTextColor,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flex: '1 1 auto',
      '& + $subtitle': {
        marginTop: '0.25rem',
        cursor: 'inherit'
      }
    },
    subtitle: {},
    counter: {
      color: ThemingParameters.sapContent_MarkerTextColor,
      fontFamily: ThemingParameters.sapFontFamily,
      fontSize: ThemingParameters.sapFontSize,
      paddingLeft: '1rem',
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
        // color: ThemingParameters.sapInformativeElementColor
        color: ThemingParameters.sapNeutralElementColor
      }
    },
    typeNone: {
      '& $icon': {
        color: ThemingParameters.sapNeutralElementColor
      }
    }
  },
  { name: 'MessageItem' }
);

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
  return (
    <CustomListItem
      onClick={handleListItemClick}
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
