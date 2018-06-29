import React, { Component } from 'react';
import DummyForm from "../../dummy/Form/component.js"

export default class SmartForm extends Component<{}> {

  static navigationOptions = {
    title: 'Form',
  };

  // constructor(){
  //   super();
  //   this.state = {
  //     events: []
  //   }
  // }

  _goBack = () => {this.props.navigation.goBack()}

  _addNewEvent = (eventData) => {
    this.props.navigation.navigate("Home", {event: eventData})
  }

  render() {
    return (
      <DummyForm
        goBack={this._goBack}
        addNewEvent={this._addNewEvent}
      />);
  }
}