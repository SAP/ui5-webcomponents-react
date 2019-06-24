import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React, { cloneElement } from 'react';
import * as sinon from 'sinon';
import { Carousel } from '../../lib/Carousel';
import { CarouselArrowsPlacement } from '../../lib/CarouselArrowsPlacement';
import { Icon } from '../../lib/Icon';
import { PlacementType } from '../../lib/PlacementType';

use(matchSnapshot);

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
  it('Renders without crashing', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0 }));
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Should render a text indicator', () => {
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
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('CarouselArrowsPlacement: Content', () => {
    const wrapper = mountThemedComponent(renderCarousel({ arrowsPlacement: CarouselArrowsPlacement.Content }));
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('CarouselArrowsPlacement: PageIndicator', () => {
    const wrapper = mountThemedComponent(renderCarousel({ arrowsPlacement: CarouselArrowsPlacement.PageIndicator }));
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Page Indicator Placement: Top', () => {
    const wrapper = mountThemedComponent(
      renderCarousel({
        arrowsPlacement: CarouselArrowsPlacement.PageIndicator,
        pageIndicatorPlacement: PlacementType.Top
      })
    );
    expect(wrapper.debug()).to.matchSnapshot();
    wrapper.setProps({
      children: cloneElement(wrapper.props().children, { activePage: 1 })
    });
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(1);
  });

  it('Update activePage via prop', () => {
    const wrapper = mountThemedComponent(
      renderCarousel({
        activePage: 0
      })
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Navigation to next page', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, onPageChanged: callback }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(1);
    expect(getEventFromCallback(callback).getParameter('selectedIndex')).to.equal(1);
  });

  it('Navigation to previous page', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 1 }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(0);
  });

  it('Navigation to previous page - w/o Loop', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0 }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(0);
  });

  it('Navigation to previous page - w/ Loop', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 0, loop: true }));
    wrapper
      .find(Icon)
      .first()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(6);
  });

  it('Navigation to next page - w/o Loop', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 6 }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(6);
  });

  it('Navigation to next page - w/ Loop', () => {
    const wrapper = mountThemedComponent(renderCarousel({ activePage: 6, loop: true }));
    wrapper
      .find(Icon)
      .last()
      .simulate('click');
    wrapper.update();
    // @ts-ignore
    const instance = wrapper.find(Carousel.InnerComponent).instance();
    // @ts-ignore
    expect(instance.state.activePage).to.equal(0);
  });

  it('Carousel with 1 child', () => {
    const wrapper = mountThemedComponent(
      <Carousel arrowsPlacement={CarouselArrowsPlacement.Content}>
        <p>Carousel 1</p>
      </Carousel>
    );
    expect(wrapper.render().find('[data-value="paginationArrow"]')).to.have.length(0);
  });
});
