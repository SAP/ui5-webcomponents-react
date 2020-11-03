import React from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { spacing } from '@ui5/webcomponents-react-base';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import PopoverInfo from '../Info/PopoverInfo';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';

const style = {
  flexbox: {
    width: '100%',
  },
  popover: {
    width: '35%',
  },
};

const PopoverListItems = ({ popoverRef, title, items }) => {
  return (
    <div data-testid="popoverListItems-wrapper">
      <PopoverInfo popoverRef={popoverRef} title={title} style={style.popover}>
        <List data-testid="popoverListItems-listOfElements-wrapper">
          {items.map((item, index) => {
            return (
              <CustomListItem key={index} onClick={item.onClick}>
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} alignItems={FlexBoxAlignItems.Start} style={style.flexbox}>
                  <Icon style={spacing.sapUiTinyMarginBeginEnd} name={item.icon} />
                  <Text style={spacing.sapUiTinyMarginEnd}>{item.description}</Text>
                  <div>{item.children}</div>
                </FlexBox>
              </CustomListItem>
            );
          })}
        </List>
      </PopoverInfo>
    </div>
  );
};

export default PopoverListItems;
