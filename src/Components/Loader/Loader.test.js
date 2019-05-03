import React from 'react';
import { shallow, mount } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});