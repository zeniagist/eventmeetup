import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let Appwrapper;
    let NumberOfEventsWrapper;
    given('the page has fully loaded the events', () => {
      Appwrapper = mount(<App />);
    });

    when('the user loads the list of events without specifying number of events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    then('up to 32 events are shown by default', () => {
      expect(NumberOfEventsWrapper.state('eventCount')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the page has fully loaded the events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events per page', () => {
      const numberOfEvents = {
        target: { value: 10 },
      };
      AppWrapper.find(".numberOfEventsInput").simulate("change", numberOfEvents);
    });

    then('the specified number of events populate on the screen', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("eventCount")).toBe(10);
    });
  });

});