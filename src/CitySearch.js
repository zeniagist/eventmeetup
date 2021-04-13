import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false
  }

  // update state of city in text input
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
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
      </div>
    );
  }
}

export default CitySearch;