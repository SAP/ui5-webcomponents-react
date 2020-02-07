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

const makeTreeEntry = () => ({
  name: getRandomName(),
  age: getRandomNumber(18, 65),
  friend: {
    name: getRandomName(),
    age: getRandomNumber(18, 65)
  },
  subRows: [
    {
      name: getRandomName(),
      age: getRandomNumber(18, 65),
      friend: {
        name: getRandomName(),
        age: getRandomNumber(18, 65)
      },
      subRows: [
        {
          name: getRandomName(),
          age: getRandomNumber(18, 65),
          friend: {
            name: getRandomName(),
            age: getRandomNumber(18, 65)
          },
          subRows: [
            {
              name: getRandomName(),
              age: getRandomNumber(18, 65),
              friend: {
                name: getRandomName(),
                age: getRandomNumber(18, 65)
              },
              subRows: [
                {
                  name: getRandomName(),
                  age: getRandomNumber(18, 65),
                  friend: {
                    name: getRandomName(),
                    age: getRandomNumber(18, 65)
                  },
                  subRows: [
                    {
                      name: getRandomName(),
                      age: getRandomNumber(18, 65),
                      friend: {
                        name: getRandomName(),
                        age: getRandomNumber(18, 65)
                      },
                      subRows: [
                        {
                          name: getRandomName(),
                          age: getRandomNumber(18, 65),
                          friend: {
                            name: getRandomName(),
                            age: getRandomNumber(18, 65)
                          },
                          subRows: [
                            {
                              name: getRandomName(),
                              age: getRandomNumber(18, 65),
                              friend: {
                                name: getRandomName(),
                                age: getRandomNumber(18, 65)
                              },
                              subRows: [
                                {
                                  name: getRandomName(),
                                  age: getRandomNumber(18, 65),
                                  friend: {
                                    name: getRandomName(),
                                    age: getRandomNumber(18, 65)
                                  },
                                  subRows: [
                                    {
                                      name: getRandomName(),
                                      age: getRandomNumber(18, 65),
                                      friend: {
                                        name: getRandomName(),
                                        age: getRandomNumber(18, 65)
                                      },
                                      subRows: [
                                        {
                                          name: getRandomName(),
                                          age: getRandomNumber(18, 65),
                                          friend: {
                                            name: getRandomName(),
                                            age: getRandomNumber(18, 65)
                                          },
                                          subRows: [
                                            {
                                              name: getRandomName(),
                                              age: getRandomNumber(18, 65),
                                              friend: {
                                                name: getRandomName(),
                                                age: getRandomNumber(18, 65)
                                              },
                                              subRows: [
                                                {
                                                  name: getRandomName(),
                                                  age: getRandomNumber(18, 65),
                                                  friend: {
                                                    name: getRandomName(),
                                                    age: getRandomNumber(18, 65)
                                                  },
                                                  subRows: [
                                                    {
                                                      name: getRandomName(),
                                                      age: getRandomNumber(18, 65),
                                                      friend: {
                                                        name: getRandomName(),
                                                        age: getRandomNumber(18, 65)
                                                      },
                                                      subRows: [
                                                        {
                                                          name: getRandomName(),
                                                          age: getRandomNumber(18, 65),
                                                          friend: {
                                                            name: getRandomName(),
                                                            age: getRandomNumber(18, 65)
                                                          },
                                                          subRows: [
                                                            {
                                                              name: getRandomName(),
                                                              age: getRandomNumber(18, 65),
                                                              friend: {
                                                                name: getRandomName(),
                                                                age: getRandomNumber(18, 65)
                                                              }
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: getRandomName(),
              age: getRandomNumber(18, 65),
              friend: {
                name: getRandomName(),
                age: getRandomNumber(18, 65)
              }
            }
          ]
        },
        {
          name: getRandomName(),
          age: getRandomNumber(18, 65),
          friend: {
            name: getRandomName(),
            age: getRandomNumber(18, 65)
          }
        }
      ]
    },
    {
      name: getRandomName(),
      age: getRandomNumber(18, 65),
      friend: {
        name: getRandomName(),
        age: getRandomNumber(18, 65)
      },
      subRows: [
        {
          name: getRandomName(),
          age: getRandomNumber(18, 65),
          friend: {
            name: getRandomName(),
            age: getRandomNumber(18, 65)
          },
          subRows: [
            {
              name: getRandomName(),
              age: getRandomNumber(18, 65),
              friend: {
                name: getRandomName(),
                age: getRandomNumber(18, 65)
              }
            },
            {
              name: getRandomName(),
              age: getRandomNumber(18, 65),
              friend: {
                name: getRandomName(),
                age: getRandomNumber(18, 65)
              },
              subRows: [
                {
                  name: getRandomName(),
                  age: getRandomNumber(18, 65),
                  friend: {
                    name: getRandomName(),
                    age: getRandomNumber(18, 65)
                  }
                },
                {
                  name: getRandomName(),
                  age: getRandomNumber(18, 65),
                  friend: {
                    name: getRandomName(),
                    age: getRandomNumber(18, 65)
                  }
                }
              ]
            }
          ]
        },
        {
          name: getRandomName(),
          age: getRandomNumber(18, 65),
          friend: {
            name: getRandomName(),
            age: getRandomNumber(18, 65)
          }
        }
      ]
    }
  ]
});

const makeEntry = () => ({
  name: getRandomName(),
  longColumn: 'Really really long column content... don´t crop please',
  age: getRandomNumber(18, 65),
  friend: {
    name: getRandomName(),
    age: getRandomNumber(18, 65)
  }
});

const generateData = (numEntries, isTree = false) => {
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    isTree ? data.push(makeTreeEntry()) : data.push(makeEntry());
  }
  return data;
};

export default generateData;
