import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // const renderer = new ReactSHallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
