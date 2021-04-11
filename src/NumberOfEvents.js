import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
  };

  // change number of events list
  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: 32
      });
    } else {
      this.setState({
        eventCount
      });
      // this.props.updateEvents('', eventCount);
    }
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <label>Number of Events</label>
        <input
          type='number'
          name='numberOfEvents'
          className='numberOfEventsInput'
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;