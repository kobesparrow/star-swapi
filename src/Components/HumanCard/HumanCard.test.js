import React from 'react';
import { shallow } from 'enzyme';
import HumanCard from './HumanCard';

let mockScrollingMovieInfo = {
  title: 'Star Wars',
  subTitle: 'is good',
  text: 'you should watch it'
}

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <HumanCard
        scrollingMovieInfo={ mockScrollingMovieInfo }
      />);

    expect(wrapper).toMatchSnapshot();
  });
});