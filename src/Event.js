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
      <div className='event'>

        {this.state.showHideDetails && (
          <div className='eventDetails'>
            <h2>About event:</h2>
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