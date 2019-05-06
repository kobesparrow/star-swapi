import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

let mockVehicle = {
  name: 'Millenium Falcon',
  model: 'old',
  vehicle_class: 'starship',
  passengers: 3
}

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <VehicleCard
        vehicle={ mockVehicle }
      />);

    expect(wrapper).toMatchSnapshot();
  });
});