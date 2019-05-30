import React from 'react';
import { shallow } from 'enzyme';
import starshipsFixtures from '../fixtures/starshipsFixtures';
import peopleFixtures from '../fixtures/peopleFixtures';
import { SWLegendsList } from '../../components/SWLegendsList';

test('should render loading status when the app is fetching data from the API', () => {
   const wrapper = shallow(
      <SWLegendsList 
         starshipItems={[]}
         peopleItems={[]}
         isFetching={true}
      />
   );
   expect(wrapper).toMatchSnapshot();
});

test('should render SWLegendsList correctly', () => {
   const wrapper = shallow(
      <SWLegendsList 
         starshipItems={starshipsFixtures}
         peopleItems={peopleFixtures}
         isFetching={false}
      />
   );
   expect(wrapper).toMatchSnapshot();
})