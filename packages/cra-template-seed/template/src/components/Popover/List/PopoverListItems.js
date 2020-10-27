import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { List } from '@ui5/webcomponents-react/lib/List';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';
import PopoverInfo from '../Info/PopoverInfo';
import { spacing } from '@ui5/webcomponents-react-base';

const PopoverListItems = ({ popoverRef, title, items }) => {
  return (
    <div data-testid="popoverListItems-wrapper">
      <PopoverInfo popoverRef={popoverRef} title={title}>
        <List data-testid="popoverListItems-listOfElements-wrapper">
          {items.map((item, index) => {
            return (
              <CustomListItem key={index} onClick={item.onClick}>
                <Icon style={spacing.sapUiTinyMarginBeginEnd} name={item.icon} />
                <Text style={spacing.sapUiTinyMarginEnd}>{item.description}</Text>
                <div>{item.children}</div>
              </CustomListItem>
            );
          })}
        </List>
      </PopoverInfo>
    </div>
  );
};

export default PopoverListItems;
