import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { CardList } from '../../components/card-list/card-list.component';

it('renders without crashing', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Test',
      username: 'Tester',
      email: 'test@test.com',
    },
  ];
  expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot();
});
