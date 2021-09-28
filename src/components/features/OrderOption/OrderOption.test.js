import React from 'react';
import { shallow } from 'enzyme';
import { OrderOption } from './OrderOption';
import DatePicker from 'react-datepicker';

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
// eslint-disable-next-line
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
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

    /*type-specific tests */

    switch (type) {
      case 'dropdown': {
        /*test for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          //tutaj chodzi o to czy select zawiera dwa elementy?
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('select')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      /*test for number */
      case 'number': {
        it('contains input with correct props', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);

          expect(input.prop('value')).toBe(
            mockPropsForType.number.currentValue
          );
          expect(input.prop('min')).toBe(mockProps.limits.min);
          expect(input.prop('max')).toBe(mockProps.limits.max);
          expect(input.hasClass('inputSmall')).toBe(true);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('input')
            .simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValueNumber,
          });
        });

        break;
      }
      /*test for number */
      case 'text': {
        it('contains input with correct props', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
          expect(input.hasClass('input')).toBe(true);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('input')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });

        break;
      }

      /* icons */
      case 'icons': {
        it('contains input with correct props', () => {
          const element = renderedSubcomponent.find('div .icon');
          expect(element.length).toBe(2);
          expect(element.find('Icon').at(0).prop('name')).toBe(
            mockProps.values[0].icon
          );
          expect(element.find('Icon').at(1).prop('name')).toBe(
            mockProps.values[1].icon
          );
          // Chciałem tutaj sprawdzić też key w tym divie
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div .icon').at(1).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }

      case 'checkboxes': {
        it('contains input with correct props', () => {
          const element = renderedSubcomponent.find('.checkboxes');

          expect(element.find('input').at(0).prop('value')).toBe(
            mockProps.values[0].id
          );
          expect(element.find('input').at(0).prop('checked')).toBe(
            mockProps.currentValue.includes(mockProps.values[0].id)
          );
          expect(element.find('input').at(1).prop('value')).toBe(
            mockProps.values[1].id
          );
          expect(element.find('input').at(1).prop('checked')).toBe(
            mockProps.currentValue.includes(mockProps.values[1].id)
          );
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find(`input[value="${testValue}"]`)
            .simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: [mockProps.currentValue, testValue],
          });
        });
        break;
      }

      case 'date': {
        it('contains component DataPicker', () => {
          const element = renderedSubcomponent.find(DatePicker);
          //tutaj też jest coś nie tak. Nizależnie czy wyszuuję DatePicker czy nawet "blablalba" warunek poniżej jest prawdziwy...
          expect(element.length).toBe(1);
        });

        /// Nie mam pojęcia jak mam ten DatePicker importować a potem zasymulować event bez renderowania.
        it('should run setOrderOption function on change', () => {
          const element = renderedSubcomponent.find(DatePicker);
          element.simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
    }
  });
}
