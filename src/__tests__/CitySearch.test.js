import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => { }} />);
  });

  // text input
  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  // suggested cities
  test('renders a list of suggested cities', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  // text input w/ query
  test('render text input with query', () => {
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

  // suggested cities are based on query input
  test('render list of suggestions to update with text input', () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  // suggested cities match query input when changed
  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });

  // select suggestions changes query
  test("selecting a suggestion should change query state", () => {
    CitySearchWrapper.setState({
      query: 'Berlin'
    });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  // input shows suggestions
  test("selecting CitySearch input reveals the suggestions list", () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' });
  });

  // input hides suggestions
  test("selecting a suggestion should hide the suggestions list", () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
      showSuggestions: undefined
    });
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
  });

  // input hides suggestions when clicked on but blank
  test("suggestions list will appear upon having a focus on city input field", () => {
    CitySearchWrapper.setState({
      query: '',
      suggestions: locations,
    });
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({});
  });

});