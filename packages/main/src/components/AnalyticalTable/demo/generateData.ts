import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

const getRandomArrayEntry = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const possibleFirstNames = ['Jason', 'Dan', 'Bob', 'Peter', 'Susanne', 'Rose', 'Greg', 'Marc', 'Rick', 'Carl'];

const possibleLastNames = [
  'Miller',
  'Grimes',
  'DeAngelo',
  'James',
  'Carlisle',
  'Simpson',
  'Abramov',
  'Alpert',
  'Klein',
  'Franco',
  'Herman of Longnameington the Third'
];

const getRandomName = () => `${getRandomArrayEntry(possibleFirstNames)} ${getRandomArrayEntry(possibleLastNames)}`;

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newEntry = () => {
  return {
    name: getRandomName(),
    age: getRandomNumber(18, 65),
    friend: {
      name: getRandomName(),
      age: getRandomNumber(18, 65)
    },
    status: [ValueState.None, ValueState.Information, ValueState.Success, ValueState.Warning, ValueState.Error][
      Math.floor(Math.random() * 4)
    ]
  };
};

const makeTreeEntry = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newEntry(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };
  return makeDataLevel();
};

const makeEntry = () => ({
  name: getRandomName(),
  longColumn: 'Really really long column content... don´t crop please',
  age: getRandomNumber(18, 65),
  friend: {
    name: getRandomName(),
    age: getRandomNumber(18, 65)
  },
  status: [ValueState.None, ValueState.Information, ValueState.Success, ValueState.Warning, ValueState.Error][
    Math.floor(Math.random() * 4)
  ]
});

const generateData = (numEntries, isTree = false) => {
  if (isTree) {
    return makeTreeEntry(numEntries, 4, 4, 4);
  }
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    data.push(makeEntry());
  }
  return data;
};

export default generateData;
