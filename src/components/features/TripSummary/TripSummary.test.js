import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const fakeTagsTable = ['tag1', 'tag2', 'tag3'];
  const newId = `abc`;
  const tripName = 'tripName';
  const imageFile = 'image.jpg';
  const tripCost = '$300';
  const tripDays = 5;

  it('should generate right address', () => {
    const expectedAddress = `/trip/${newId}`;
    const component = shallow(<TripSummary id={newId} tags={fakeTagsTable} />);
    expect(component.find('.link').prop('to')).toEqual(expectedAddress);
  });

  it('should have correct src and alt', () => {
    const component = shallow(
      <TripSummary
        image={imageFile}
        name={tripName}
        id={newId}
        tags={fakeTagsTable}
      />
    );
    expect(component.find('img').prop('src')).toEqual(imageFile);
    expect(component.find('img').prop('alt')).toEqual(tripName);
  });

  it('should render props', () => {
    const component = shallow(
      <TripSummary
        name={tripName}
        cost={tripCost}
        days={tripDays}
        id={newId}
        tags={fakeTagsTable}
      />
    );
    expect(component.find('.title').text()).toEqual(tripName);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});
