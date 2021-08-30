import { CssSizeVariables } from '@ui5/webcomponents-react-base/dist/CssSizeVariables';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { CustomListItem } from '@ui5/webcomponents-react/dist/CustomListItem';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import { ListItemType } from '@ui5/webcomponents-react/dist/ListItemType';
import { MessageViewContext } from '@ui5/webcomponents-react/dist/MessageViewContext';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { getIconNameForType } from './utils';

export interface MessageItemPropTypes extends CommonProps {
  /**
   * Specifies the title of the message
   */
  titleText: string;

  /**
   * Specifies the subtitle of the message
   */
  subtitleText?: string;

  /**
   * Defines the number of messages for a given message.
   */
  counter?: number;

  /**
   * Specifies the type of the message
   */
  type: ValueState | keyof typeof ValueState;

  /**
   * Name of a message group the current item belongs to.
   */
  groupName?: string;

  /**
   * Specifies detailed description of the message
   */
  children: ReactNode | ReactNodeArray;
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
        marginTop: '0.25rem'
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

const MessageItem = forwardRef((props: MessageItemPropTypes, ref: Ref<Ui5DomRef>) => {
  const { titleText, subtitleText, counter, type, children, className, ...rest } = props;

  const { selectMessage } = useContext(MessageViewContext);

  const classes = useStyles();

  const listItemClasses = StyleClassHelper.of(classes.listItem, Reflect.get(classes, `type${type}`)).putIfPresent(
    className
  );
  if (subtitleText) {
    listItemClasses.put(classes.withSubtitle);
  }

  const messageClasses = StyleClassHelper.of(classes.message);
  if (children) {
    messageClasses.put(classes.withChildren);
  }

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
      className={listItemClasses.className}
      ref={ref}
    >
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={messageClasses.className}>
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
        {children && <Icon className={classes.navigation} name="slim-arrow-right" />}
      </FlexBox>
    </CustomListItem>
  );
});

MessageItem.displayName = 'Message';

MessageItem.defaultProps = {
  type: ValueState.None
};

export { MessageItem };
