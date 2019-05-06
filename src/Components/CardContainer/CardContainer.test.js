import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <CardContainer
        planet={mockPlanet}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});