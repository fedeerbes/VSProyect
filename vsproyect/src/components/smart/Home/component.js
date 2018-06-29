import React, { Component } from 'react';
import DummyHome from "../../dummy/Home/component.js"

export default class SmartHome extends Component<{}> {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(){
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    fetch('https://skybox.vividseats.com/services/events?sortedBy=eventName&sortDir=asc&eventDateFrom=2018-06-29T00:00:00.000&eventDateTo=2018-07-01T23:59:59.999', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "X-Api-Token": "7c26596d-4e44-4b0b-818e-7dceb79d235c",
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson);
      this.setState({events: responseJson.rows})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _goToForm = () => {
    this.props.navigation.navigate("Form")    
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.navigation.state.params !== undefined) {
      let newEvent = nextProps.navigation.state.params.event,
      formatedEvent = {};

      formatedEvent = {
        name: newEvent.eventName,
        date: newEvent.eventDate,
        venue: {
          name: newEvent.eventVenueName,
          city: newEvent.eventVenueCity,
          state: newEvent.eventVenueState
        }
      }

      let events = this.state.events,
          updatedEvents = [...events];

          updatedEvents.push(formatedEvent)
      this.setState({events: updatedEvents})
    }
  }

  render() {
    return (
      <DummyHome
        events={this.state.events}
        goToForm={this._goToForm}
      />);
  }
}