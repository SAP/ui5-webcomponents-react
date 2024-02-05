import { Bar, Button, MenuItem } from '../../webComponents/index.js';
import { Modals } from './index.js';

describe('Modals - static helpers', () => {
  it('showDialog', () => {
    const TestComp = () => {
      return (
        <>
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
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Show Toast').click();
    cy.findByText('Toast Content').should('exist');
  });
});

describe('Modals - hooks', () => {
  interface PropTypes {
    hookFn: any;
    modalProps: any;
  }
  const TestComponent = ({ hookFn, modalProps }: PropTypes) => {
    const hook = hookFn();

    return (
      <button
        onClick={() => {
          hook(modalProps);
        }}
      >
        Open Modal
      </button>
    );
  };

  const TestComponentClosable = ({ hookFn, modalProps }: PropTypes) => {
    const hook = hookFn();

    return (
      <Button
        onClick={() => {
          const { close } = hook({
            ...modalProps,
            children: [
              ...modalProps?.children,
              <Button key="btn" onClick={() => close()}>
                Close
              </Button>
            ]
          });
        }}
      >
        Open Modal
      </Button>
    );
  };

  it('useShowDialog', () => {
    cy.mount(
      <TestComponentClosable
        hookFn={Modals.useShowDialog}
        modalProps={{
          children: 'Dialog Content'
        }}
      />
    );
    cy.findByText('Open Modal').click();
    cy.findByText('Dialog Content').should('be.visible');
    cy.findByText('Close').click();
    cy.findByText('Dialog Content').should('not.exist');
  });

  it('useShowPopover', () => {
    cy.mount(
      <>
        <span id="opener" />
        <TestComponentClosable
          hookFn={Modals.useShowPopover}
          modalProps={{ children: 'Popover Content', opener: 'opener' }}
        />
      </>
    );
    cy.findByText('Open Modal').click();
    cy.findByText('Popover Content').should('be.visible');
    cy.findByText('Close').click();
    cy.findByText('Popover Content').should('not.exist');
  });

  it('useShowResponsivePopover', () => {
    cy.mount(
      <>
        <span id="opener" />
        <TestComponentClosable
          hookFn={Modals.useShowResponsivePopover}
          modalProps={{ children: 'Popover Content', opener: 'opener' }}
        />
      </>
    );
    cy.findByText('Open Modal').click();
    cy.findByText('Popover Content').should('be.visible');
    cy.findByText('Close').click();
    cy.findByText('Popover Content').should('not.exist');
  });

  it('useShowMenu', () => {
    const TestComp = () => {
      const showMenu = Modals.useShowMenu();
      return (
        <div id="container">
          <Button
            id="modals-show-popover"
            onClick={() => {
              showMenu(
                {
                  opener: 'modals-show-popover',
                  children: <MenuItem text="MenuItem" />
                },
                document.getElementById('container')
              );
            }}
          >
            Show Menu
          </Button>
        </div>
      );
    };

    cy.mount(<TestComp />);

    cy.findByText('Show Menu').click();
    cy.get('[ui5-static-area-item]');
    cy.wait(200);
    cy.get('[ui5-li]').find('li').click({ force: true });
    cy.get('[ui5-static-area-item]').should('not.exist');
  });

  it('useShowMessageBox', () => {
    cy.mount(<TestComponent hookFn={Modals.useShowMessageBox} modalProps={{ children: 'MessageBox Content' }} />);
    cy.findByText('Open Modal').click();
    cy.findByText('MessageBox Content').should('be.visible');
    cy.findByText('OK').click();
    cy.findByText('MessageBox Content').should('not.exist');
  });

  it('useShowToast', () => {
    cy.mount(<TestComponent hookFn={Modals.useShowToast} modalProps={{ children: 'Toast Content' }} />);
    cy.findByText('Open Modal').click();
    cy.findByText('Toast Content').should('exist');
  });
});
