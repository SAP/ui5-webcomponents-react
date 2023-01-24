import { Text as RechartsText, TextProps } from 'recharts';
import { PieChart } from '@ui5/webcomponents-react-charts';

const smallDataset = [
  {
    name: 'January / Month',
    users: 100
  },
  {
    name: 'February / Month',
    users: 230
  },
  {
    name: 'March / Month',
    users: 240
  }
];

describe('PieChart.cy.tsx', () => {
  it('custom label', () => {
    const DataLabel = (props: TextProps) => {
      // @ts-expect-error: typings should be improved
      return <RechartsText {...props}>CustomLabel</RechartsText>;
    };
    cy.mount(
      <PieChart
        dataset={smallDataset}
        dimension={{
          accessor: 'name'
        }}
        measure={{
          accessor: 'users',
          DataLabel: <DataLabel />
        }}
      />
    );
    cy.findAllByText('CustomLabel').should('have.length', 3);
  });
});
