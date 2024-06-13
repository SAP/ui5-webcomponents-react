import { MessageItem, Text } from '@ui5/webcomponents-react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const LoremIpsum = (
  <Text>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </Text>
);

const informationMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem
      key={`InformationMessage${index}`}
      titleText={'Information Message'}
      type={ValueState.Information}
      groupName={`Group${index}`}
    >
      {LoremIpsum}
    </MessageItem>
  ));
};

const successMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem
      key={`SuccessMessage${index}`}
      titleText={'Success Message'}
      type={ValueState.Positive}
      groupName={`Group${index}`}
    >
      {LoremIpsum}
    </MessageItem>
  ));
};

const warningMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem
      key={`WarningMessage${index}`}
      titleText={'Warning Message'}
      type={ValueState.Critical}
      groupName={`Group${index}`}
    >
      {LoremIpsum}
    </MessageItem>
  ));
};

const errorMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem
      key={`ErrorMessage${index}`}
      titleText={'Error Message'}
      type={ValueState.Negative}
      groupName={`Group${index}`}
    >
      {LoremIpsum}
    </MessageItem>
  ));
};

export const generateMessageItems = (numberOfMessageTypes) => [
  ...informationMessageItems(numberOfMessageTypes.information),
  ...warningMessageItems(numberOfMessageTypes.warning),
  ...successMessageItems(numberOfMessageTypes.success),
  ...errorMessageItems(numberOfMessageTypes.error)
];
