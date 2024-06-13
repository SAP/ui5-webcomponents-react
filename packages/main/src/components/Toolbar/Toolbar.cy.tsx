import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { useRef, useState } from 'react';
import type { PopoverDomRef, ToolbarPropTypes } from '../..';
import {
  Button,
  Input,
  OverflowToolbarButton,
  Text,
  Toolbar,
  ToggleButton,
  ToolbarSeparator,
  ToolbarSpacer,
  ToolbarStyle,
  OverflowToolbarToggleButton
} from '../..';
import { ToolbarDesign } from '../../enums/index.js';
import { cssVarToRgb, cypressPassThroughTestsFactory, mountWithCustomTagName } from '@/cypress/support/utils';

interface PropTypes {
  onOverflowChange: (event: {
    toolbarElements: HTMLElement[];
    overflowElements: HTMLCollection;
    target: HTMLElement;
  }) => void;
}

const OverflowTestComponent = (props: PropTypes) => {
  const { onOverflowChange } = props;
  const [width, setWidth] = useState(undefined);
  const [additionalChildren, setAdditionalChildren] = useState([]);
  const [eventProperties, setEventProperties] = useState({
    toolbarElements: [],
    overflowElements: undefined,
    target: undefined
  });

  const handleOverflowChange = (e) => {
    onOverflowChange(e);
    setEventProperties(e);
  };
  return (
    <>
      <Input
        data-testid="input"
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          setAdditionalChildren((prev) => [
            ...prev,
            <Button key={prev.length + 1} style={{ width: '200px' }}>
              Button
            </Button>
          ]);
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          setAdditionalChildren((prev) => {
            const [_omit, ...rest] = prev;
            return rest;
          });
        }}
      >
        Remove
      </Button>
      <Toolbar
        data-testid="toolbar"
        onOverflowChange={handleOverflowChange}
        style={width ? { width: `${width}px`, maxWidth: 'none' } : undefined}
      >
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <ToolbarSpacer data-testid="spacer1" />
        <Text data-testid="toolbar-item2" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item3" style={{ width: '200px' }}>
          Item3
        </Text>
        <ToolbarSpacer data-testid="spacer2" />
        {additionalChildren}
        <ToolbarSeparator data-testid="separator" />
      </Toolbar>
      <br />
      toolbarElements: <span data-testid="toolbarElements">{eventProperties.toolbarElements.length}</span>
      overflowElements: <span data-testid="overflowElements">{eventProperties.overflowElements?.length}</span>
    </>
  );
};

describe('Toolbar', () => {
  it('default', () => {
    cy.mount(<Toolbar />);
  });

  it('boolean/undefined children', () => {
    cy.mount(
      <Toolbar data-testid="toolbar">
        <Text>Item1</Text>
        {false}
        {undefined}
        <>{false}</>
        <>
          {false}
          {undefined}
        </>
      </Toolbar>
    );
    cy.findByText('Item1').should('be.visible');
  });

  it('support Fragments', () => {
    cy.mount(
      <Toolbar active data-testid="toolbar">
        <>
          <Text>Item1</Text>
          <Text>Item2</Text>
          <Text>Item3</Text>
        </>
        <>
          <Text>Item4</Text>
        </>
      </Toolbar>
    );
    cy.findByText('Item1').should('be.visible');
    cy.findByText('Item2').should('be.visible');
    cy.findByText('Item3').should('be.visible');
    cy.findByText('Item4').should('be.visible');
  });

  it('overflow menu', () => {
    const onOverflowChange = cy.spy().as('overflowChangeSpy');
    cy.viewport(300, 500);
    cy.mount(<OverflowTestComponent onOverflowChange={onOverflowChange} />);
    cy.get('@overflowChangeSpy').should('have.been.calledOnce');
    cy.findByTestId('toolbarElements').should('have.text', 2);
    cy.findByTestId('overflowElements').should('have.text', 4);
    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('not.be.visible');

    cy.get(`[ui5-toggle-button]`).click().as('open');

    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('be.visible');

    cy.viewport(500, 500);

    // fuzzy - remount component instead
    // cy.get(`[ui5-toggle-button]`).click();
    cy.mount(<OverflowTestComponent onOverflowChange={onOverflowChange} />);
    cy.get('[ui5-popover]').should('not.have.attr', 'open');

    cy.get('@overflowChangeSpy').should('have.callCount', 2);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 3);

    cy.findByTestId('input').shadow().find('input').type('100');
    cy.findByTestId('input').trigger('change');
    cy.findByTestId('input').shadow().find('input').clear({ force: true });

    cy.get('@overflowChangeSpy').should('have.callCount', 3);
    cy.findByTestId('toolbarElements').should('have.text', 0);
    cy.findByTestId('overflowElements').should('have.text', 6);

    cy.get('[data-testid="toolbar-item"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('not.be.visible');

    cy.findByTestId('input').shadow().find('input').type('2000', { force: true });
    cy.findByTestId('input').trigger('change');

    cy.get('@overflowChangeSpy').should('have.callCount', 4);
    cy.findByTestId('toolbarElements').should('have.text', 6);
    cy.findByTestId('overflowElements').should('not.have.text');

    cy.get('[data-testid="toolbar-item"]').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('be.visible');

    cy.findByTestId('input').shadow().find('input').clear({ force: true });
    cy.findByTestId('input').trigger('change');

    cy.get('@overflowChangeSpy').should('have.callCount', 5);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 3);

    cy.findByText('Add').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 6);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 4);

    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 11);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 9);

    cy.findByText('Remove').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 12);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 8);

    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 17);
    cy.findByTestId('toolbarElements').should('have.text', 3);
    cy.findByTestId('overflowElements').should('have.text', 3);

    cy.get(`[ui5-toggle-button]`).click();

    // ToolbarSpacers should not be visible in the popover
    cy.get('[data-component-name="ToolbarOverflowPopover"]')
      .findByTestId('spacer2')
      .should('not.be.visible', { timeout: 100 });
    cy.findByTestId('spacer1').should('exist');

    // ToolbarSeparator should be displayed with horizontal line
    cy.get('[data-component-name="ToolbarOverflowPopover"]').findByTestId('separator').should('be.visible');
  });

  it('Toolbar click', () => {
    const click = cy.spy().as('onClickSpy');
    cy.mount(
      <Toolbar active data-testid="tb" onClick={click}>
        Text
        <input data-testid="input" />
      </Toolbar>
    );
    cy.findByTestId('tb').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');

    cy.findByTestId('tb').type('{enter}', { force: true });
    cy.get('@onClickSpy').should('have.been.calledTwice');

    cy.findByTestId('tb').type(' ', { force: true });
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.findByTestId('input').trigger('keydown', { code: 'Enter' });
    cy.findByTestId('input').trigger('keydown', { code: 'Space' });
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.mount(
      <Toolbar data-testid="tb" onClick={click}>
        Text
      </Toolbar>
    );

    cy.findByTestId('tb').click();
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.findByTestId('tb').trigger('keydown', { code: 'Enter' });
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.findByTestId('tb').trigger('keydown', { code: 'Space' });
    cy.get('@onClickSpy').should('have.been.calledThrice');
  });

  it('ToolbarSpacer', () => {
    cy.mount(
      <Toolbar>
        <Text>Item1</Text>
        <ToolbarSpacer data-testid="spacer" />
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    cy.findByTestId('spacer').should('have.class', 'spacer').should('have.css', 'flex-grow', '1');
  });

  it('ToolbarSeparator', () => {
    cy.mount(
      <Toolbar>
        <Text>Item1</Text>
        <ToolbarSeparator />
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    cy.findByRole('separator').should('be.visible');
  });

  it('toolbarStyle', () => {
    cy.mount(
      <Toolbar data-testid="tb">
        <Text>Item1</Text>
        <Text>Item2</Text>
      </Toolbar>
    );
    cy.findByTestId('tb').should('have.css', 'border-bottom-style', 'solid');
    cy.mount(
      <Toolbar data-testid="tb" toolbarStyle={ToolbarStyle.Clear}>
        <Text>Item1</Text>
        <Text>Item2</Text>
      </Toolbar>
    );
    cy.findByTestId('tb').should('have.css', 'border-bottom-style', 'none');
  });

  Object.values(ToolbarDesign).forEach((design: ToolbarPropTypes['design']) => {
    it(`Design: ${design}`, () => {
      cy.mount(
        <Toolbar data-testid="tb" design={design}>
          <Text>Item1</Text>
          <Text>Item2</Text>
        </Toolbar>
      );
      let height = '44px'; //2.75rem
      let background = 'rgba(0, 0, 0, 0)'; // transparent
      let color = 'rgb(0, 0, 0)';

      switch (design) {
        case 'Info':
          height = '32px'; // 2rem
          background = cssVarToRgb(ThemingParameters.sapInfobar_NonInteractive_Background);
          color = cssVarToRgb(ThemingParameters.sapList_TextColor);
          break;
        case 'Solid':
          background = cssVarToRgb(ThemingParameters.sapToolbar_Background);
          break;
      }
      cy.findByTestId('tb')
        .should('have.css', 'height', height)
        .should('have.css', 'background-color', background)
        .should('have.css', 'color', color);
    });
  });

  it('Design: Info (active)', () => {
    cy.mount(
      <Toolbar data-testid="tb" design={ToolbarDesign.Info} active>
        <Text>Item1</Text>
        <Text>Item2</Text>
      </Toolbar>
    );
    cy.findByTestId('tb')
      .should('have.css', 'background-color', cssVarToRgb(ThemingParameters.sapInfobar_Background))
      .should('have.css', 'color', cssVarToRgb(ThemingParameters.sapInfobar_TextColor));
  });

  it('always visible items', () => {
    cy.mount(
      <Toolbar data-testid="toolbar" style={{ width: '50px' }}>
        <Text data-testid="tbi" style={{ width: '100px' }}>
          Item1
        </Text>
        <Text data-testid="tbi" style={{ width: '100px' }}>
          Item2
        </Text>
        <Text data-testid="tbi" style={{ width: '100px' }}>
          Item3
        </Text>
      </Toolbar>
    );
    cy.wait(200);
    cy.findAllByTestId('tbi').each(($el) => {
      cy.wrap($el).should('not.be.visible');
    });
    cy.get(`[ui5-toggle-button]`).click();
    cy.get('[data-component-name="ToolbarOverflowPopover"]')
      .findAllByTestId('tbi')
      .each(($el) => {
        cy.wrap($el).should('be.visible');
      });

    cy.mount(
      <Toolbar data-testid="toolbar" style={{ width: '50px' }} numberOfAlwaysVisibleItems={2}>
        <Text data-testid="tbiV" style={{ width: '100px' }}>
          Item1
        </Text>
        <Text data-testid="tbiV" style={{ width: '100px' }}>
          Item2
        </Text>
        <Text data-testid="tbi" style={{ width: '100px' }}>
          Item3
        </Text>
      </Toolbar>
    );
    cy.wait(200);
    cy.findAllByTestId('tbiV').each(($el) => {
      cy.wrap($el).should('be.visible');
    });
    cy.get('[data-testid="tbi"]').should('not.be.visible');
    cy.get(`[ui5-toggle-button]`).click();
    cy.get('[data-component-name="ToolbarOverflowPopover"]').findByTestId('tbi').should('be.visible');
    cy.get('[data-component-name="ToolbarOverflowPopover"]').findAllByTestId('tbiV').should('not.exist');
  });

  it('close on interaction', () => {
    const TestComp = () => {
      const popoverRef = useRef<PopoverDomRef>(null);
      return (
        <Toolbar overflowPopoverRef={popoverRef} style={{ width: '50px' }}>
          <Button
            onClick={() => {
              popoverRef.current.open = false;
            }}
          >
            Close
          </Button>
        </Toolbar>
      );
    };

    cy.mount(<TestComp />);
    cy.get(`[ui5-toggle-button]`).click();
    cy.wait(200);
    cy.get('[data-component-name="ToolbarOverflowPopover"]').findByText('Close').click();
    cy.get('[data-component-name="ToolbarOverflowPopover"]').should('not.be.visible');
  });

  it('a11y', () => {
    cy.mount(
      <Toolbar style={{ width: '50px' }}>
        <Button>Button One</Button>
        <Input />
      </Toolbar>
    );

    cy.get(`[ui5-toggle-button]`)
      .find('button')
      .should('have.attr', 'aria-expanded', 'false')
      .should('have.attr', 'aria-haspopup', 'menu')
      .click();

    cy.get(`[ui5-toggle-button]`).find('button').should('have.attr', 'aria-expanded', 'true');
  });

  it('custom overflow button', () => {
    cy.mount(
      <Toolbar
        style={{ width: '50px' }}
        overflowButton={<ToggleButton data-testid="btn" icon={menu2Icon} design={ButtonDesign.Transparent} />}
      >
        <Button>Button One</Button>
        <Input />
      </Toolbar>
    );
    cy.get('[data-component-name="ToolbarOverflowButton"]').should('not.exist');
    cy.findByTestId('btn').should('be.visible').click();
    cy.get('[data-component-name="ToolbarOverflowPopover"]').should('be.visible');
  });

  it('OverflowToolbarToggleButton & OverflowToolbarButton', () => {
    [OverflowToolbarToggleButton, OverflowToolbarButton].forEach((Comp) => {
      cy.mount(
        <Toolbar>
          <Button icon="edit">Edit1</Button>
          <Comp icon="edit" data-testid="ob">
            Edit2
          </Comp>
        </Toolbar>
      );

      cy.findByText('Edit1').should('be.visible').should('have.attr', 'has-icon');
      cy.findByText('Edit1').should('not.have.attr', 'icon-only');
      cy.findByText('Edit2', { timeout: 100 }).should('not.exist');
      cy.findByTestId('ob').should('be.visible').should('have.attr', 'icon-only');
      cy.findByTestId('ob').should('have.attr', 'has-icon');

      cy.mount(
        <Toolbar style={{ width: '50px' }}>
          <Button icon="edit">Edit1</Button>
          <Comp icon="edit" data-testid="ob">
            Edit2
          </Comp>
        </Toolbar>
      );

      cy.get('[ui5-toggle-button][icon="overflow"]').click();
      cy.get('[ui5-popover]').findByText('Edit1').should('be.visible').should('have.attr', 'has-icon');
      cy.get('[ui5-popover]').findByText('Edit1').should('not.have.attr', 'icon-only');
      cy.get('[ui5-popover]').findByText('Edit2').should('be.visible').should('have.attr', 'has-icon');
      cy.get('[ui5-popover]').findByText('Edit2').should('not.have.attr', 'icon-only');
    });
  });

  it('recalc on children change', () => {
    const TestComp = (props: ToolbarPropTypes) => {
      const [actions, setActions] = useState([]);
      return (
        <>
          <button
            onClick={() => {
              setActions([
                <Button key="0">Button</Button>,
                <Button key="1">Button</Button>,
                <Button key="2">Button</Button>,
                <Button key="3">Button</Button>,
                <Button key="4">Button</Button>,
                <Button key="5">Button</Button>,
                <Button key="6">Button</Button>,
                <Button key="7">Button</Button>
              ]);
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              setActions([]);
            }}
          >
            remove
          </button>
          <Toolbar {...props}>{actions}</Toolbar>
        </>
      );
    };
    const overflowChange = cy.spy().as('overflowChange');
    cy.mount(<TestComp onOverflowChange={overflowChange} style={{ width: '200px' }} />);

    cy.get('[ui5-toggle-button]').should('not.exist');
    cy.findByText('add').click();
    cy.get('[ui5-toggle-button]').should('be.visible');
    cy.wait(50);
    cy.findByText('remove').click();
    cy.get('[ui5-toggle-button]').should('not.exist');
    cy.get('@overflowChange').should('have.been.calledOnce');
  });

  it('Toolbar active use outline or shadow', () => {
    cy.mount(
      <Toolbar active data-testid="tb">
        Text
      </Toolbar>
    );
    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');

    cy.findByTestId('tb').realClick();
    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'rgb(0, 50, 165) 0px 0px 0px 2px inset');

    cy.wait(500).then(() => {
      cy.findByTestId('tb').blur();
      void setTheme('sap_fiori_3');
    });

    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');

    cy.findByTestId('tb').click();
    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'dotted');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');
  });

  it('unique ids for overflow', () => {
    cy.viewport(100, 500);
    cy.mount(
      <Toolbar>
        <div id="1">Text1</div>
        <div>Text2 no id</div>
        <Button id="3">Text4</Button>
      </Toolbar>
    );

    cy.get('#1').should('have.length', 1);
    cy.get('#1-overflow').should('have.length', 1);
    cy.findAllByText('Text2 no id').should('have.length', 2).and('not.have.attr', 'id');
    cy.get('#3').should('have.length', 1);
    cy.get('#3-overflow').should('have.length', 1);
  });

  it('a11y - role & contentRole', () => {
    cy.viewport(100, 500);
    cy.mount(
      <Toolbar a11yConfig={{ overflowPopover: { role: PopupAccessibleRole.AlertDialog } }}>
        <div>Text1</div>
        <div>Text2</div>
        <Button>Text4</Button>
      </Toolbar>
    );
    cy.get('section[role="alertdialog"]').should('exist');

    cy.mount(
      <Toolbar a11yConfig={{ overflowPopover: { contentRole: 'menu' } }}>
        <div>Text1</div>
        <div>Text2</div>
        <Button>Text4</Button>
      </Toolbar>
    );
    cy.get('section').should('not.have.attr', 'role');
    cy.get('[data-component-name="ToolbarOverflowPopoverContent"]').should('have.attr', 'role', 'menu');

    cy.mount(
      <Toolbar a11yConfig={{ overflowPopover: { role: PopupAccessibleRole.AlertDialog, contentRole: 'menu' } }}>
        <div>Text1</div>
        <div>Text2</div>
        <Button>Text4</Button>
      </Toolbar>
    );
    cy.get('section').should('not.have.attr', 'role');
    cy.get('[data-component-name="ToolbarOverflowPopoverContent"]').should('have.attr', 'role', 'menu');
  });

  mountWithCustomTagName(Toolbar);
  cypressPassThroughTestsFactory(Toolbar);
});
