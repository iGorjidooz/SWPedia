import React from 'react';
import { shallow } from 'enzyme';
import peopleFixtures from '../fixtures/peopleFixtures';
import { SWCharacterPage } from '../../components/SWCharacterPage';

test('should redirect to homepage if the id passed to the page is not found in the store.people array', () => {
  const wrapper = shallow(
    <SWCharacterPage character={undefined} listIndex={peopleFixtures[1].id} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render SWCharacterPage correctly', () => {
  const wrapper = shallow(
    <SWCharacterPage character={peopleFixtures[1]} listIndex={peopleFixtures[1].id} />
  );
  expect(wrapper).toMatchSnapshot();
});