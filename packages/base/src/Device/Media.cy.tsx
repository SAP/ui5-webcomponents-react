import { useEffect, useState } from 'react';
import { MediaEventProvider } from './EventProvider';
import { attachMediaHandler, detachMediaHandler, getCurrentRange } from './Media';

describe('Device - Media', () => {
  it('getCurrentRange with window size', () => {
    expect(getCurrentRange()).to.deep.equal({
      from: 1440,
      name: 'LargeDesktop',
      unit: 'px'
    });
  });

  it('getCurrentRange with user defined size', () => {
    expect(getCurrentRange(400)).to.deep.equal({
      from: 0,
      name: 'Phone',
      to: 599,
      unit: 'px'
    });
  });

  it('Attach and Detach Event', () => {
    const callback = cy.spy();
    attachMediaHandler(callback);
    expect(MediaEventProvider.isHandlerAttached('media', callback)).to.be.true;
    detachMediaHandler(callback);
    expect(MediaEventProvider.isHandlerAttached('media', callback)).to.be.false;
  });

  it('fire resizes', () => {
    const TestComponent = () => {
      const [range, setRange] = useState(getCurrentRange());

      useEffect(() => {
        attachMediaHandler((rangeInfo) => {
          setRange(rangeInfo);
        });
      }, []);

      return <span>{range.name}</span>;
    };

    cy.mount(<TestComponent />);
    cy.findByText('LargeDesktop').should('be.visible');

    cy.viewport(1280, 720);
    cy.wait(50);
    cy.findByText('Desktop').should('be.visible');

    cy.viewport(768, 1024);
    cy.wait(50);
    cy.findByText('Tablet').should('be.visible');

    cy.viewport(375, 812);
    cy.wait(50);
    cy.findByText('Phone').should('be.visible');

    cy.viewport(1920, 1080);
    cy.wait(50);
    cy.findByText('LargeDesktop').should('be.visible');
  });
});
