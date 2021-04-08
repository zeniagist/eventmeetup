import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: []
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
      query: suggestion
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className='CitySearch'>
        {/* text input */}
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder='Search for a city'
        />
        {/* list of suggested cities */}
        <ul className='suggestions'>
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