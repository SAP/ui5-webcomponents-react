import { useReducer } from 'react';
import { TimelineChart, TimelineChartAnnotation } from '../..';
import { TimingFigure } from './examples/Annotations.js';
import { dummyDataSet, illegalConnDataset, illegalConnDataset2, schedulingEDFData } from './examples/Dataset.js';
import {
  HOVER_OPACITY,
  MOUSE_CURSOR_AUTO,
  MOUSE_CURSOR_GRAB,
  MOUSE_CURSOR_GRABBING,
  NORMAL_OPACITY
} from './util/constants.js';

describe('TimeLineChart', () => {
  it('renders PlaceHolder without dataset', () => {
    cy.mount(<TimelineChart totalDuration={10} />);
    cy.get('svg').should('have.length', 1).should('be.visible');
  });

  it('renders TimelineChart with dataset', () => {
    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={150} data-testid="tlc" />);
    cy.findByTestId('tlc').should('be.visible').should('have.prop', 'tagName').should('eq', 'DIV');
  });

  it('calls the valueFormat callback & renders labels', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={150}
        valueFormat={(x: number) => `${Math.round(x)}-formatted`}
      />
    );
    for (let i = 0; i <= 150; i += 30) {
      cy.findByText(`${i}-formatted`).should('be.visible');
    }
  });

  it('render connection layer', () => {
    const TestComp = () => {
      const [showConn, toggleShowConn] = useReducer((prev) => !prev, undefined);
      return (
        <>
          <button onClick={toggleShowConn}>Toggle Connection</button>
          <TimelineChart dataset={dummyDataSet} totalDuration={150} showConnection={showConn} />
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.get('[data-component-name="TimelineChartConnectionLayer"]').should('not.exist');
    cy.findByText('Toggle Connection').click();
    cy.get('[data-component-name="TimelineChartConnectionLayer"]').should('be.visible');
  });

  it('render annotation layer ', () => {
    const TestComp = () => {
      const [showAnn, toggleShowAnn] = useReducer((prev) => !prev, undefined);
      const [renderAnn, toggleAnn] = useReducer((prev) => !prev, undefined);
      return (
        <>
          <button onClick={toggleShowAnn}>Toggle Annotations visibility</button>
          <button onClick={toggleAnn}>Toggle Annotations</button>
          <TimelineChart
            dataset={dummyDataSet}
            totalDuration={150}
            showAnnotation={showAnn}
            annotations={
              renderAnn && (
                <>
                  <TimelineChartAnnotation
                    rowIndex={0}
                    rowHeight={35}
                    figure={<TimingFigure arrival={0} period={4} deadline={4} totalDuration={15} />}
                  />
                  <TimelineChartAnnotation
                    rowIndex={1}
                    rowHeight={35}
                    figure={<TimingFigure arrival={4} period={5} deadline={5} totalDuration={15} />}
                  />
                  <TimelineChartAnnotation
                    rowIndex={2}
                    rowHeight={35}
                    figure={<TimingFigure arrival={0} period={7} deadline={6} totalDuration={15} />}
                  />
                </>
              )
            }
          />
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.get('[data-component-name="TimelineChartAnnotationLayer"]').should('not.exist');
    cy.findByText('Toggle Annotations').click();
    cy.get('[data-component-name="TimelineChartAnnotationLayer"]').should('not.exist');
    cy.findByText('Toggle Annotations visibility').click();
    cy.get('[data-component-name="TimelineChartAnnotationLayer"]').should('be.visible');
    cy.findByText('Toggle Annotations').click();
    cy.get('[data-component-name="TimelineChartAnnotationLayer"]').children().should('not.exist');
  });

  it('throws InvalidDiscreteLabelError', (done) => {
    cy.on('uncaught:exception', (err) => {
      console.dir(err.name);
      if (err.name === 'InvalidDiscreteLabelError') {
        done();
      }
    });
    cy.mount(
      <TimelineChart dataset={schedulingEDFData} totalDuration={15} discreteLabels={['label1', 'label2']} isDiscrete />
    );

    cy.wait(1000).then(() => {
      done(new Error('Should throw InvalidDiscreteLabelError'));
    });
  });

  it('throws IllegalConnectionError (1)', (done) => {
    cy.on('uncaught:exception', (err) => {
      console.dir(err.name);
      if (err.name === 'IllegalConnectionError') {
        done();
      }
    });
    cy.mount(<TimelineChart dataset={illegalConnDataset} totalDuration={10} showConnection />);
    cy.wait(1000).then(() => {
      done(new Error('Should throw IllegalConnectionError'));
    });
  });
  it('throws IllegalConnectionError (2)', (done) => {
    cy.on('uncaught:exception', (err) => {
      console.dir(err.name);
      if (err.name === 'IllegalConnectionError') {
        done();
      }
    });
    cy.mount(<TimelineChart dataset={illegalConnDataset2} totalDuration={10} showConnection />);
    cy.wait(1000).then(() => {
      done(new Error('Should throw IllegalConnectionError'));
    });
  });

  it('shows the right mouse cursor', () => {
    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    cy.get('[data-component-name="TimelineChartBodyContainer"]')
      .should('have.css', 'cursor', MOUSE_CURSOR_AUTO)
      .trigger('mousedown')
      .should('have.css', 'cursor', MOUSE_CURSOR_AUTO)
      .trigger('mouseup')
      .should('have.css', 'cursor', MOUSE_CURSOR_AUTO);

    cy.get('[data-component-name="TimelineChartBody"]')
      .trigger('wheel', { deltaY: -1, bubbles: true })
      .should('have.css', 'cursor', MOUSE_CURSOR_GRAB)
      .trigger('mousedown')
      .should('have.css', 'cursor', MOUSE_CURSOR_GRABBING)
      .trigger('mouseup')
      .should('have.css', 'cursor', MOUSE_CURSOR_GRAB);
  });

  it('TimelineChartAnotation: postions itself correctly in the parent', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={150}
        annotations={<TimelineChartAnnotation rowIndex={2} rowHeight={20} figure={<div></div>} />}
        showAnnotation
      />
    );
    cy.get('[data-component-name="TimelineChartAnnotation"]').should('have.css', 'inset-block-start', '40px');
  });

  it('TimeLineChartRow: tooltip & opacity for milestones and tasks', () => {
    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);

    cy.get('[data-component-name="TimelineChartTask"]')
      .first()
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`)
      .trigger('mousemove')
      .should('have.css', 'opacity', `${HOVER_OPACITY}`);

    cy.findByText('Item 1').should('be.visible');
    cy.get('[data-component-name="TimelineChartTask"]')
      .first()
      // React internally uses mouseout when `onMouseLeave` is used
      .trigger('mouseout')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`);

    cy.findByText('Item 1').should('not.exist');

    cy.get('[data-component-name="TimelineChartMilestone"] > rect')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`)
      .trigger('mousemove')
      .should('have.css', 'opacity', `${HOVER_OPACITY}`);
    cy.findByText('Milestone 11').should('be.visible');
    cy.get('[data-component-name="TimelineChartMilestone"] > rect')
      // React internally uses mouseout when `onMouseLeave` is used
      .trigger('mouseout')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`);
    cy.findByText('Milestone 11').should('not.exist');

    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={150} hideTooltip />);

    cy.get('[data-component-name="TimelineChartTask"]')
      .first()
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`)
      .trigger('mousemove')
      .should('have.css', 'opacity', `${HOVER_OPACITY}`);

    cy.findByText('Item 1').should('not.exist');
    cy.get('[data-component-name="TimelineChartTask"]')
      .first()
      // React internally uses mouseout when `onMouseLeave` is used
      .trigger('mouseout')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`);

    cy.get('[data-component-name="TimelineChartMilestone"] > rect')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`)
      .trigger('mousemove')
      .should('have.css', 'opacity', `${HOVER_OPACITY}`);
    cy.findByText('Milestone 11').should('not.exist');
    cy.get('[data-component-name="TimelineChartMilestone"] > rect')
      // React internally uses mouseout when `onMouseLeave` is used
      .trigger('mouseout')
      .should('have.css', 'opacity', `${NORMAL_OPACITY}`);
  });

  it('TimelineChartBody: scales when the mouse wheel event happens', () => {
    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    cy.findByText('150.0').should('be.visible');
    cy.get('[data-component-name="TimelineChartBody"]').trigger('wheel', { deltaY: -10, bubbles: true });

    cy.findByText('109.1').should('be.visible');
    cy.findByText('150.0').should('not.be.visible');
  });

  it('TimelineChartLayer', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={150}
        showConnection
        annotations={<TimelineChartAnnotation rowIndex={2} rowHeight={20} figure={<div></div>} />}
        showAnnotation
      />
    );
    cy.get('[data-component-name="TimelineChartGridLayer"]')
      .should('have.css', 'pointer-events', 'none')
      .should('have.prop', 'tagName')
      .should('eq', 'svg');
    cy.get('[data-component-name="TimelineChartConnectionLayer"]')
      .should('have.css', 'pointer-events', 'none')
      .should('have.prop', 'tagName')
      .should('eq', 'svg');
    cy.get('[data-component-name="TimelineChartRowsLayer"]')
      .should('have.css', 'pointer-events', 'none')
      .should('have.prop', 'tagName')
      .should('eq', 'svg');
    cy.get('[data-component-name="TimelineChartAnnotationLayer"]')
      .should('have.css', 'pointer-events', 'none')
      .should('have.prop', 'tagName')
      .should('eq', 'DIV');
  });

  it('TimelineChartHeaders: ColumnLabels', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={10}
        width="500px"
        valueFormat={(x: number) => `${Math.round(x)}`}
      />
    );
    for (let i = 0; i <= 10; i += 2) {
      cy.findByText(i).should('be.visible');
    }
    cy.findByText('12').should('not.exist');
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={10}
        width="500px"
        valueFormat={(x: number) => `${Math.round(x)}`}
        isDiscrete
      />
    );
    for (let i = 0; i <= 9; i++) {
      cy.findByText(i).should('be.visible');
    }
    cy.findByText('10').should('not.exist');
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={10}
        width="500px"
        valueFormat={(x: number) => `${Math.round(x)}`}
        isDiscrete
        discreteLabels={['one', 'two', ...new Array(8).fill('label')]}
      />
    );
    cy.findAllByText('label').should('have.length', 8).should('be.visible');
    cy.findByText('one').should('be.visible');
    cy.findByText('two').should('be.visible');
  });

  it('rowHeight', () => {
    cy.mount(<TimelineChart dataset={dummyDataSet} totalDuration={10} rowHeight={200} />);
    cy.get('[data-component-name="TimelineChartRow"]').should('have.attr', 'height', '200');
  });

  it('unit and titles', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={10}
        unit="unit"
        rowTitle="rowTitle"
        columnTitle="columnTitle"
      />
    );
    cy.findByText('Activities').should('not.exist');
    cy.findByText('Duration').should('not.exist');

    cy.findByText('columnTitle (unit)').should('be.visible');
    cy.findByText('rowTitle').should('be.visible');
  });

  it('start', () => {
    cy.mount(
      <TimelineChart
        dataset={dummyDataSet}
        totalDuration={10}
        start={5}
        valueFormat={(x: number) => `${Math.round(x)}`}
      />
    );
    for (let i = 5; i <= 15; i += 2) {
      cy.findByText(i).should('be.visible');
    }
    cy.findByText('17').should('not.exist');
  });
});
