import React, { Component } from 'react';

class CitySearch extends Component {
  render() {
    return (
      <div className='CitySearch'>
        {/* text input */}
        <input
          type='text'
          className='city'
        />
        {/* list of suggested cities */}
        <ul className='suggestions'>

        </ul>
      </div>
    );
  }
}

export default CitySearch;