import {
  CustomListItem,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Icon,
  Label,
  ListItemType,
  ValueState
} from '@ui5/webcomponents-react';
import { CssSizeVariables, StyleClassHelper, ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { getIconNameForType } from './utils';

export interface MessagePropTypes {
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
      // fontWeight: ThemingParameters.sapFontHeaderWeight
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
  { name: 'Message' }
);

const Message = forwardRef((props: MessagePropTypes, ref: Ref<Ui5DomRef>) => {
  const { titleText, subtitleText, counter, type, children } = props;

  const classes = useStyles();

  const listItemClasses = StyleClassHelper.of(classes.listItem, Reflect.get(classes, `type${type}`));
  if (subtitleText) {
    listItemClasses.put(classes.withSubtitle);
  }

  const messageClasses = StyleClassHelper.of(classes.message);
  if (children) {
    messageClasses.put(classes.withChildren);
  }

  return (
    <CustomListItem className={listItemClasses.className} type={children ? ListItemType.Active : ListItemType.Inactive}>
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

Message.displayName = 'Message';

Message.defaultProps = {
  type: ValueState.None
};

export { Message };
