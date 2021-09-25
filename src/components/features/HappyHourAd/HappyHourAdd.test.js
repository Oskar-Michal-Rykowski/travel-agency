import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const mockProps = {
  title: 'Test title',
  promoDescription: 'Something Lorem Ipsum',
};

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render h3 with class title', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
  });
  it('should render div with class promoDescription', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should have title from props title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
  it('should have title from props promoDescription', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.promoDescription).text()).toEqual(
      mockProps.promoDescription
    );
  });
});
