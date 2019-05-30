import React from 'react';
import { shallow } from 'enzyme';
import starshipFixtures from '../fixtures/starshipsFixtures';
import { SWStarshipPage } from '../../components/SWStarshipPage';

test('should redirect to homepage if the id passed to the page is not found in the store.people array', () => {
  const wrapper = shallow(
    <SWStarshipPage starship={undefined} listIndex={starshipFixtures[1].id} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render SWCharacterPage correctly', () => {
  const wrapper = shallow(
    <SWStarshipPage starship={starshipFixtures[1]} listIndex={starshipFixtures[1].id} />
  );
  expect(wrapper).toMatchSnapshot();
});