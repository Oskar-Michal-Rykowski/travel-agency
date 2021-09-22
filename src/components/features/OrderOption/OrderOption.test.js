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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;

    beforeEach(() => {
      component = shallow(
        <OrderOption type={type} {...mockProps} {...mockPropsForType[type]} />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /*common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
    });
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    // it('contains select and options', () => {
    //   const select = renderedSubcomponent.find('select');
    //   expect(select.length).toBe(1);

    //   const emptyOption = select.find('option[value=""]').length;
    //   expect(emptyOption).toBe(1);

    //   const options = select.find('option').not('[value=""]');
    //   expect(options.length).toBe(mockProps.values.length);
    //   expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
    //   expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
    // });

    /*type-specific tests */

    switch (type) {
      case 'dropdown': {
        /*test for dropdown */
        break;
      }
    }
  });
}