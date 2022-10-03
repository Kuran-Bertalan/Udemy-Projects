import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Card } from '../../components/card/card.component';

it('renders without crashing', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
