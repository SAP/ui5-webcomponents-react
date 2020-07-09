type ArgDefinition = {
  [key: string]: Record<string, string> | string[];
};

export const createSelectArgTypes = (definition: ArgDefinition) => {
  const argTypes = {};

  for (const arg in definition) {
    argTypes[arg] = {
      control: {
        type: 'radio',
        options: Array.isArray(definition[arg]) ? definition[arg] : Object.values(definition[arg])
      }
    };
  }

  return argTypes;
};
