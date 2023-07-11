import Handlebars from 'handlebars';
import fs from 'node:fs';
import prettier from 'prettier';
import * as Utils from '../utils.js';

// helpers
Handlebars.registerHelper('convertToStringArray', function (array) {
  if (typeof array === 'string') return array;
  if (!Array.isArray(array)) return '';
  return `[${array.map((v) => `'${v}'`).join(', ')}]`;
});

Handlebars.registerHelper('join', function (array, separator) {
  if (typeof array === 'string') return array;
  if (!Array.isArray(array)) return '';
  separator = typeof separator === 'string' ? separator : ', ';
  return array.join(separator);
});

Handlebars.registerHelper('storySubComponents', function (subcomponents) {
  return `{{ ${subcomponents.join(', ')} }}`;
});

// templates
const testTemplate = Handlebars.compile(fs.readFileSync(new URL('./TestTemplate.hbs', import.meta.url)).toString());

const componentTemplate = Handlebars.compile(
  fs.readFileSync(new URL('./ComponentTemplate.hbs', import.meta.url)).toString()
);

const storyTemplate = Handlebars.compile(fs.readFileSync(new URL('./StoryTemplate.hbs', import.meta.url)).toString());
const csfTemplate = Handlebars.compile(fs.readFileSync(new URL('./CsfTemplate.hbs', import.meta.url)).toString());

export const renderComponentWrapper = async (params) => {
  return await prettier.format(await Utils.runEsLint(componentTemplate(params), params.name), Utils.prettierConfig);
};

export const renderStory = async (params) => {
  return await prettier.format(storyTemplate(params), { ...Utils.prettierConfig, parser: 'mdx' });
};

export async function renderCsf(params) {
  return await prettier.format(csfTemplate(params), { ...Utils.prettierConfig, parser: 'typescript' });
}

export const renderTest = async (params) => {
  return await prettier.format(testTemplate(params), Utils.prettierConfig);
};
