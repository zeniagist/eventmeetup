import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch />);
  });
  // text input
  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  // suggested cities
  test('renders a list of suggested cities', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  // text input w/ Google Calendar MockData
  test('render text input with Google Calendar MockData', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });
  // change state when text input changes
  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });
});