import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Label } from '../Label/index.js';
import { Text } from '../Text/index.js';
import { Token } from '../Token/index.js';
import type { TokenizerPropTypes } from './index.js';
import { Tokenizer } from './index.js';

const meta = {
  title: 'Inputs / Tokenizer',
  component: Tokenizer,
  args: { style: { width: '250px' } },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Tokenizer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <Tokenizer {...args}>
        <Token text="Andorra" />
        <Token text="Bulgaria" />
        <Token text="Canada" />
        <Token text="Denmark" />
        <Token text="Estonia" />
        <Token text="Fiji" />
        <Token text="Ghana" />
        <Token text="India" />
        <Token text="Japan" />
        <Token text="Kenya" />
        <Token text="Luxembourg" />
        <Token text="Mexico" />
        <Token text="Nepal" />
        <Token text="Qatar" />
        <Token text="Uganda" />
      </Tokenizer>
    );
  }
};

export const WithLogic = {
  render(args) {
    const [countries, setCountries] = useState([
      'Andorra',
      'Bulgaria',
      'Canada',
      'Denmark',
      'Estonia',
      'Fiji',
      'Ghana',
      'India',
      'Japan',
      'Kenya',
      'Luxembourg',
      'Mexico',
      'Nepal',
      'Qatar',
      'Uganda'
    ]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = (e) => {
      args.onTokenDelete(e);
      const { tokens } = e.detail;
      if (tokens) {
        const tokensToDelete = tokens.map((token) => token.text);
        setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
        setSelectedCountries([]);
      }
    };
    const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = (e) => {
      args.onSelectionChange(e);
      const { tokens } = e.detail;
      if (tokens) {
        const selectedTokens = tokens.map((token) => token.text);
        setSelectedCountries(selectedTokens);
      }
    };
    console.log(selectedCountries);
    return (
      <>
        <Tokenizer {...args} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
          {countries.map((country) => (
            <Token key={country} text={country} />
          ))}
        </Tokenizer>
        <br />
        <div style={{ display: 'flex', gap: '0.2rem' }}>
          <Label showColon>Selected countries</Label>
          <Text>{selectedCountries.join(', ')}</Text>
        </div>
      </>
    );
  }
};
