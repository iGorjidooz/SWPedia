import React from 'react';
import { shallow } from 'enzyme';
import peopleFixtures from '../fixtures/peopleFixtures';
import SWCharacterListItem from '../../components/SWCharacterListItem';

 test('should render SWCharacterListItem correctly', () => {
    const wrapper = shallow(
      <SWCharacterListItem character={peopleFixtures[1]} listIndex={peopleFixtures[1].id} />
    );
    expect(wrapper).toMatchSnapshot();
 })