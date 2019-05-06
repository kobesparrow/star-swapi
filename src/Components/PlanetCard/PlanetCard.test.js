import React from 'react';
import { shallow } from 'enzyme';
import PlanetCard from './PlanetCard';

let mockPlanet = {
  name: 'Hoth',
  terrain: 'snow',
  population: 'uknown',
  climate: 'frozen',
  residents: ['Han', 'Chewie']
}

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <PlanetCard
        planet={mockPlanet}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});