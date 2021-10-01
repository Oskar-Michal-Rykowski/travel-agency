import React from 'react';
import { shallow } from 'enzyme';
import CountDaysTo from './CountDaysTo';

const select = {
  span: 'h3 span',
  title: '.title',
  component: '.component',
  countdownTo: '.countdownTo',
};

const mockProps = {
  countdownTo: 'to winter!',
  monthFrom: 11,
  dayFrom: 2,
  monthTo: 11,
  dayTo: 10,
};

describe('Component CountDaysTo', () => {
  it('should render without crashing', () => {
    const component = shallow(<CountDaysTo />);
    expect(component).toBeTruthy();
  });
  it('should render h3 with class title', () => {
    const component = shallow(<CountDaysTo />);
    expect(component.exists(select.title)).toEqual(true);
  });
  it('should render div with class component', () => {
    const component = shallow(<CountDaysTo />);
    expect(component.exists(select.component)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate);
    }
  };

const checkTextAtTime = (time, expectedValue) => {
  it(`should show ${expectedValue} on ${time}`, () => {
    global.Date = mockDate(`${time}T00:00:01.135Z`);

    const component = shallow(<CountDaysTo {...mockProps} />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedValue);

    global.Date = trueDate;
  });
};

describe('Component CountDaysTo with mocked Date', () => {
  checkTextAtTime('2021-12-01', '1 day to winter!');
  checkTextAtTime('2019-12-02', '');
  checkTextAtTime('2019-12-10', '358 days to winter!');
  checkTextAtTime('2019-12-09', '');
});

const checkDescriptionAfterTime = (time, delayDays, expectedValue) => {
  it(`should show correct value ${delayDays} days after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`${time}T00:00:01.135Z`);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delayDays * 24 * 60 * 60);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delayDays * 24 * 60 * 60 * 1000);

    const component = shallow(<CountDaysTo {...mockProps} />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedValue);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component CountDaysTo with mocked Date and delay', () => {
  checkDescriptionAfterTime('2021-12-01', 2, '');
  checkDescriptionAfterTime('2021-12-05', 5, '357 days to winter!');
  checkDescriptionAfterTime('2021-11-26', 4, '2 days to winter!');
});
