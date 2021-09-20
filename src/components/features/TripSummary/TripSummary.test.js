import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate right address', () => {
    const id = `abc`;
    // const fakeTagsTable = ['tag1', 'tag2', 'tag3'];
    const expectedAddress = `/trip/${id}`;
    const component = shallow(<TripSummary key={id} />);
    expect(component.find('Link').prop('to')).toEqual(expectedAddress);
  });

  it('should have correct src and alt', () => {
    const imageFile = 'image.jpg';
    const tripName = 'tripName';
    const component = shallow(
      <TripSummary image={imageFile} name={tripName} />
    );
    expect(component.find('img').prop('src')).toEqual(imageFile);
    expect(component.find('img').prop('alt')).toEqual(tripName);
  });
});
