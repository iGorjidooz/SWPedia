import React from 'react';
import { shallow } from 'enzyme';
import starshipFixtures from '../fixtures/starshipsFixtures';
import SWStarshipListItem from '../../components/SWStarshipListItem';

 test('should render SWCharacterListItem correctly', () => {
    const wrapper = shallow(
      <SWStarshipListItem starship={starshipFixtures[1]} listIndex={starshipFixtures[1].id} />
    );
    expect(wrapper).toMatchSnapshot();
 })