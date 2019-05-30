import React from 'react';
import { shallow } from 'enzyme';
import throttle from 'lodash/throttle';
import starshipsFixtures from '../fixtures/starshipsFixtures';
import peopleFixtures from '../fixtures/peopleFixtures';
import { SWLegendsPage } from '../../components/SWLegendsPage';

let wrapper, startFetchingStarships, startFetchingPeople, map;

// Forcing snapshot serializer to show the connected component name instead of generic 'ConnectFunction'
jest.mock('react-redux', () => ({
   connect: jest.fn(() => component => `Connect(${component.name})`),
}));

jest.useFakeTimers();

// jest.mock('lodash/throttle');

// throttle.mockImplementation(fn => fn);

beforeEach(() => {
   global.innerHeight = 500;
   global.document.body.scrollTop = 100;
   Object.defineProperties(global.HTMLElement.prototype, {
      offsetHeight: {
         get: function() { return parseFloat(global.getComputedStyle(this).height) || 1500; }
      },
   });

   map = {};
   window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
   });

   startFetchingPeople = jest.fn();
   startFetchingStarships = jest.fn();
   wrapper = shallow(<SWLegendsPage
      hasMoreStarships={false}
      isFetching={false}
      nextStarshipsPageUrl={''}
      nextPeoplePageUrl={''}
      startFetchingStarships={startFetchingPeople}
      startFetchingPeople={startFetchingStarships}
   />);

   // wrapper.instance().scrollEventHandler = jest.fn();
});

test('should render SWLegendsPage correctly', () => {
   // global.document.dispatchEvent(new Event('scroll'));
   // jest.runOnlyPendingTimers();
   // expect(scrollEventHandler).toHaveBeenCalledTimes(0);
   expect(wrapper).toMatchSnapshot();
});

test('should call scrollEventHandler but not start to fetch new data', () => {
   // global.document.body.scrollTop = 1000;
   // wrapper.setProps({ hasMoreStarships: true });
   // global.document.dispatchEvent(new Event('scroll'));
   // console.log('map',map);
   // map.scroll();
   // // jest.runOnlyPendingTimers();
   // wrapper.update();
   // expect(startFetchingStarships).toHaveBeenCalledTimes(1);
})