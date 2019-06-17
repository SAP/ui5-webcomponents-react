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
  'Franco'
];

const getRandomName = () => `${getRandomArrayEntry(possibleFirstNames)} ${getRandomArrayEntry(possibleLastNames)}`;

const makeEntry = () => ({
  name: getRandomName(),
  age: getRandomNumber(18, 65),
  friend: {
    name: getRandomName(),
    age: getRandomNumber(18, 65)
  }
});

const generateData = (numEntries) => {
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    data.push(makeEntry());
  }
  return data;
};

export default generateData;
