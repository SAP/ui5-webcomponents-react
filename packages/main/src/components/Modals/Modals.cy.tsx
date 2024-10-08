import { Bar, Button, MenuItem } from '../../index.js';
import { Modals } from './index.js';

describe('Modals - static helpers', () => {
  it('showDialog', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            onClick={() => {
              const { close } = Modals.showDialog({
                children: 'Dialog Content',
                footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
              });
            }}
          >
            Show Dialog
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Dialog').click();
    cy.findByText('Dialog Content').should('be.visible');
    cy.findByText('Close').click();
    cy.findByText('Dialog Content').should('not.exist');
  });

  it('showPopover', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-popover"
            onClick={() => {
              const { close } = Modals.showPopover({
                opener: 'modals-show-popover',
                children: 'Popover Content',
                footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
              });
            }}
          >
            Show Popover
          </Button>
        </>
      );

      cy.mount(<TestComp />);

      cy.findByText('Show Popover').click();
      cy.findByText('Popover Content').should('be.visible');
      cy.findByText('Close').click();
      cy.findByText('Dialog Content').should('not.exist');
    };
  });

  it('showResponsivePopover', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-popover"
            onClick={() => {
              const { close } = Modals.showResponsivePopover({
                opener: 'modals-show-popover',
                children: 'Popover Content',
                footer: <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
              });
            }}
          >
            Show Popover
          </Button>
        </>
      );

      cy.mount(<TestComp />);

      cy.findByText('Show Popover').click();
      cy.findByText('Popover Content').should('be.visible');
      cy.findByText('Close').click();
      cy.findByText('Dialog Content').should('not.exist');
    };
  });

  it('showMenu', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            id="modals-show-popover"
            onClick={() => {
              Modals.showMenu({
                opener: 'modals-show-popover',
                children: <MenuItem text="MenuItem" />
              });
            }}
          >
            Show Menu
          </Button>
        </>
      );

      cy.mount(<TestComp />);

      cy.findByText('Show Menu').click();
      cy.findByText('MenuItem').should('be.visible');
      cy.findByText('MenuItem').click();
      cy.findByText('MenuItem').should('not.exist');
    };
  });

  it('showMessageBox', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <Button
            onClick={() => {
              Modals.showMessageBox({
                children: 'MessageBox Content'
              });
            }}
          >
            Show MessageBox
          </Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show MessageBox').click();
    cy.findByText('MessageBox Content').should('be.visible');
    cy.findByText('OK').click();
    cy.findByText('MessageBox Content').should('not.exist');
  });

  it('showToast', () => {
    const TestComp = () => {
      return (
        <>
          <Modals />
          <div id="container">
            <Button
              onClick={() => {
                Modals.showToast(
                  {
                    children: 'Toast Content'
                  },
                  document.getElementById('container')
                );
              }}
            >
              Show Toast
            </Button>
          </div>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Toast').click();
    cy.findByText('Toast Content').should('exist');
  });
});
