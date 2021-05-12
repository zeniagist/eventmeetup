import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';
import './App.css';
import Login from "./Login";
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import InfoAlert from './InfoAlert';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
  }

  // get location
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };

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

    if (!navigator.onLine) {
      this.setState({
        infoText:
          'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
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

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <h1 className='eventTitle'>Event Meetup App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <h1 className='chartLabel'>Events in each city</h1>
        <div className='data-vis-wrapper'>
          {/* pie chart */}
          <EventGenre events={events} />
          {/* scatter plot */}
          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                // top: 20, right: 20, bottom: 20, left: 20,
                top: 30, right: 30, bottom: 5, left: 0,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#632c21" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;