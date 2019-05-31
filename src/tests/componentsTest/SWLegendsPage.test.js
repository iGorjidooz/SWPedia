import React from 'react';
import { shallow } from 'enzyme';
import debounce from 'lodash/debounce';
import { SWLegendsPage } from "../../components/SWLegendsPage";

let wrapper, startFetchingStarships, startFetchingPeople;

// Forcing snapshot serializer to show the connected component name instead of generic 'ConnectFunction'
jest.mock('react-redux', () => ({
   connect: jest.fn(() => component => `Connect(${component.name})`),
}));

// Tell jest to mock lodash debounce import
jest.mock('lodash/debounce');

// Mocking the debounce function implementation, returning the function passed to it
debounce.mockImplementation(fn => fn);

beforeEach(() => {
   startFetchingPeople = jest.fn();
   startFetchingStarships = jest.fn();
   wrapper = shallow(
       <SWLegendsPage
         hasMoreStarships={false}
         isFetching={false}
         nextStarshipsPageUrl={""}
         nextPeoplePageUrl={""}
         startFetchingStarships={startFetchingPeople}
         startFetchingPeople={startFetchingStarships}
       />
   );
});

test('should render SWLegendsPage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should render SWLegendsPage & execute scroll event handler, resulting in startFetchingStarships to be called', () => {
   wrapper.setProps({ hasMoreStarships: true });
   wrapper.find('#legendsListWrapper').simulate('scroll', {
      currentTarget: {
         offsetHeight: 500,
         scrollTop: 200,
         scrollHeight: 700
      }
   });
   expect(startFetchingStarships).toHaveBeenCalledTimes(1);
});

test('should render SWLegendsPage & execute scroll event handler, but not calling startFetchingStarships', () => {
   wrapper.setProps({ hasMoreStarships: true });
   wrapper.find('#legendsListWrapper').simulate('scroll', {
      currentTarget: {
         offsetHeight: 500,
         scrollTop: 100,
         scrollHeight: 700
      }
   });
   expect(startFetchingStarships).toHaveBeenCalledTimes(0);
   wrapper.setProps({ isFetching: true });
   wrapper.find('#legendsListWrapper').simulate('scroll', {
      currentTarget: {
         offsetHeight: 500,
         scrollTop: 200,
         scrollHeight: 700
      }
   });
   expect(startFetchingStarships).toHaveBeenCalledTimes(0);
})