import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList'
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  // show upcoming events
  // test('render list of events', () => {
  //   expect(AppWrapper.find(EventList)).toHaveLength(1);
  // });

  //show a list of suggestions during search
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  // show number of events
  test('render number of events component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});