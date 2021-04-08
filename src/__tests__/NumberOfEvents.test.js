import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  // text input number of events
  test('render text input for number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput')).toHaveLength(1);
  });

  // default value of number of events is 32
  test('render default value of 32', () => {
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(32);
  });

  // change state of number events input
  test('change state of number events input', () => {
    const eventCount = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.numberOfEventsInput').simulate('change', eventCount);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(10);
  });

});