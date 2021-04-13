import React, { Component } from 'react';

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  // show details button
  handleShowButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className='event' onClick={() => this.handleShowButton()}>
        <h1 className='eventName'>{event.summary}</h1>
        <p className='eventLocation'>{event.location}</p>

        {/* <span className="startDateTime">
          {event.start.dateTime} ({event.start.timeZone} Standard Time)
          </span> */}

        {this.state.showHideDetails && (
          <div className='eventDetails'>
            <h2>About event:</h2>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className='showDetailsButton'
          onClick={() => this.handleShowButton()}
        >
          {!this.state.showHideDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}

export default Event;