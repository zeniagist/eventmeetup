import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import InfoAlert from './InfoAlert';

class App extends Component {
  state = {
    events: [],
    locations: [],
  }

  // update events
  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      locationEvents = events;
      if (location === 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventCount === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventCount > 0) {
        locationEvents = events.slice(0, eventCount);
      }
      this.setState({
        events: locationEvents,
        eventCount,
      });
    });
  };

  // load events with app
  componentDidMount() {
    this.mounted = true;
    // Try to load localEvent
    if (!navigator.onLine) {
      this.setState({
        infoText:
          'You are not connected from internet(data may not be up to date)',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  // componentDidMount() {
  //   this.mounted = true;

  //   if (!navigator.onLine) {
  //     this.setState({
  //       warningText:
  //         'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
  //     })
  //   } else {
  //     this.setState({ warningText: '' })
  //   }

  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({ events, locations: extractLocations(events) });
  //     }
  //   });
  // }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <h1 className='eventTitle'>Event Meetup App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;