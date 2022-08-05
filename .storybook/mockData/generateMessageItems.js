import { MessageItem, Text, ValueState } from '@ui5/webcomponents-react';

const informationMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem titleText={<Text>Information Message</Text>} type={ValueState.Information} groupName={`Group${index}`}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </MessageItem>
  ));
};

const successMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem titleText={<Text>Success Message</Text>} type={ValueState.Success} groupName={`Group${index}`}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </MessageItem>
  ));
};

const warningMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem titleText={<Text>Warning Message</Text>} type={ValueState.Warning} groupName={`Group${index}`}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </MessageItem>
  ));
};

const errorMessageItems = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill('').map((_, index) => (
    <MessageItem titleText={<Text>Error Message</Text>} type={ValueState.Error} groupName={`Group${index}`}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </MessageItem>
  ));
};

export const generateMessageItems = (numberOfMessageTypes) => [
  ...informationMessageItems(numberOfMessageTypes.information),
  ...warningMessageItems(numberOfMessageTypes.warning),
  ...successMessageItems(numberOfMessageTypes.success),
  ...errorMessageItems(numberOfMessageTypes.error)
];
