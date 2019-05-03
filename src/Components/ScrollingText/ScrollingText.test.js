import React from 'react';
import { shallow, mount } from 'enzyme';
import ScrollingText from './ScrollingText';

let mockScrollingMovieInfo = {
  title: 'Star Wars',
  subTitle: 'is good',
  text: 'you should watch it'
}

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <ScrollingText
        scrollingMovieInfo={ mockScrollingMovieInfo }
      />);

    expect(wrapper).toMatchSnapshot();
  });
});

