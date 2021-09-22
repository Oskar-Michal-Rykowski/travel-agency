import React from 'react';
import { shallow } from 'enzyme';
import { OrderOption } from './OrderOption';

describe('Component OrderOption', () => {
  const testType = 'number';
  const testName = 'Robert';
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type={testType} name={testName} />);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render props name correctly', () => {
    const component = shallow(<OrderOption type={testType} name={testName} />);
    expect(component.find('.title').text()).toEqual(testName);
  });
});
