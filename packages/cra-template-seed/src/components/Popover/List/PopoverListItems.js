import { List, StandardListItem } from '@ui5/webcomponents-react';
import React from 'react';
import PopoverInfo from '../Info/PopoverInfo';

export default function PopoverListItems({ popoverRef, title, items }) {
  return (
    <div data-testid="popoverListItems-wrapper">
      <PopoverInfo popoverRef={popoverRef} title={title}>
        <List data-testid="popoverListItems-listOfElements-wrapper">
          {items.map((item, index) => {
            return (
              <StandardListItem key={index} selected={item.selected} info={item.info} icon={item.icon} description={item.description} onClick={item.onClick}>
                {item.children}
              </StandardListItem>
            );
          })}
        </List>
      </PopoverInfo>
    </div>
  );
}
