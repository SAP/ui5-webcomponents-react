import { createPassThroughPropsTest, getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React, { cloneElement } from 'react';
import * as sinon from 'sinon';

const renderCarousel = (props) => {
  return (
    <Carousel {...props}>
      <p>Carousel 1</p>
      <p>Carousel 2</p>
      <p>Carousel 3</p>
      <p>Carousel 4</p>
      <p>Carousel 5</p>
      <p>Carousel 6</p>
      <p>Carousel 7</p>
    </Carousel>
  );
};

describe('Carousel', () => {
  test('Renders without crashing', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0 }));
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Should render a text indicator', () => {
    const wrapper = mountThemedComponent(
      <Carousel>
        <p>Carousel 1</p>
        <p>Carousel 2</p>
        <p>Carousel 3</p>
        <p>Carousel 4</p>
        <p>Carousel 5</p>
        <p>Carousel 6</p>
        <p>Carousel 7</p>
        <p>Carousel 8</p>
        <p>Carousel 9</p>
        <p>Carousel 10</p>
      </Carousel>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('CarouselArrowsPlacement: Content', () => {
    const wrapper = mountThemedComponent(renderCarousel({ arrowsPlacement: CarouselArrowsPlacement.Content }));
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('CarouselArrowsPlacement: PageIndicator', () => {
    const wrapper = mountThemedComponent(renderCarousel({ arrowsPlacement: CarouselArrowsPlacement.PageIndicator }));
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Page Indicator Placement: Top', () => {
    const wrapper = mountThemedComponent(
      renderCarousel({
        arrowsPlacement: CarouselArrowsPlacement.PageIndicator,
        pageIndicatorPlacement: PlacementType.Top
      })
    );
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.setProps({
      children: cloneElement(wrapper.props().children, { activePage: 1 })
    });
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Update activePage via prop', () => {
    const wrapper = mountThemedComponent(
      renderCarousel({
        activePage: 0
      })
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Navigation to next page', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(1);
  });

  test('Navigation to previous page', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 1, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(0);
  });

  test('Navigation to previous page - w/o Loop', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    expect(callback.called).toEqual(false);
  });

  test('Navigation to previous page - w/ Loop', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, loop: true, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(6);
  });

  test('Navigation to next page - w/o Loop', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 6, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    expect(callback.called).toEqual(false);
  });

  test('Navigation to next page - w/ Loop', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 6, loop: true, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(0);
  });

  test('Carousel with 1 child', () => {
    const wrapper = mountThemedComponent(
      <Carousel arrowsPlacement={CarouselArrowsPlacement.Content}>
        <p>Carousel 1</p>
      </Carousel>
    );
    expect(wrapper.render().find('[data-value="paginationArrow"]')).toHaveLength(0);
  });

  test('Navigation to next page with Keyboard', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, onPageChanged: callback }));
    wrapper
      .find('div[role="list"]')
      .last()
      .simulate('keydown', { key: 'ArrowRight' });
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(1);
  });

  test('Navigation to previous page with Keyboard', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 1, onPageChanged: callback }));
    wrapper
      .find('div[role="list"]')
      .first()
      .simulate('keydown', { key: 'ArrowLeft' });
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).toEqual(0);
  });

  createPassThroughPropsTest(Carousel);
});
