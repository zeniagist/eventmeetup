import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import Login from "./Login";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, checkToken, getToken } from "./api";
import InfoAlert from './InfoAlert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import EventGenre from "./EventGenre";

class App extends Component {
  state = {
    events: [],
    page: null,
    currentLocation: "all",
    offlineText: "",
    numberOfEvents: 32,
    locations: [],
    tokenCheck: false,
  };

  async componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    const validToken = accessToken !== null  ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if(validToken === true) this.updateEvents()
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    this.mounted = true;
    if (code && this.mounted === true && validToken === false){ 
      this.setState({tokenCheck:true });
      this.updateEvents()
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(" ").shift();
      return { city, number };
    });
    return data;
  };

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

  render() {
    const { events, tokenCheck } = this.state;
    return tokenCheck === false ? (
      <div className="App">
        <Login />
      </div>
    ) : (
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