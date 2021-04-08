import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    query: '',
  }

  // update state of city in text input
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
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
        />
        {/* list of suggested cities */}
        <ul className='suggestions'>

        </ul>
      </div>
    );
  }
}

export default CitySearch;