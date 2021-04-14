import React, { Component } from 'react';
import InfoAlert from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false
  }

  // update state of city in text input
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  }

  // update query state when clicking suggested
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });

    this.props.updateEvents(suggestion, 0);
  }

  render() {
    return (
      <div className='CitySearch'>
        <h1 className='eventTitle'>Event Meetup App</h1>
        <label>Choose your nearest city</label>
        {/* text input */}
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder='Search for a city'
          onFocus={() => { this.setState({ showSuggestions: true }) }}
          onClick={() => { this.setState({ showSuggestions: true }) }}
        />
        {/* list of suggested cities */}
        <ul
          className='suggestions'
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
        <InfoAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;