import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput, 
  FlatList
} from 'react-native';
import styles from "./styles.js"


export default class DummyHome extends Component<{}> {

  constructor(){
    super();
    this.state = {
      events: [],
      filterEvent: []
    }
  }

  componentDidMount = () => {
    if (this.props.events.length !== 0) {
      this.setState({events})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log(nextProps.events);
    if (nextProps.events.length !== 0) this.setState({events: nextProps.events})
  }

  _renderEvents = () => {
    let eventsRender = [],
        events = this.state.events;

        if (events.length !== 0) {
          events.map( event => {
            eventsRender.push(
              <View style={styles.event}>
                <Text>{`Name ${event.name}`}</Text>
                <Text>{`Date ${event.date}`}</Text>
                <Text>{`Venue ${event.venue.name}`}</Text>
                <Text>{`City ${event.venue.city}`}</Text>
                <Text>{`State ${event.venue.state}`}</Text>
              </View>
            )
          })
        }

    return eventsRender
  }

  _renderEvent = (eventData) => {
    let event = (
      <View style={styles.event}>
                <Text>{`Name ${eventData.name}`}</Text>
                <Text>{`Date ${eventData.date}`}</Text>
                <Text>{`Venue ${eventData.venue.name}`}</Text>
                <Text>{`City ${eventData.venue.city}`}</Text>
                <Text>{`State ${eventData.venue.state}`}</Text>
              </View>
    ) 

    return event;
  }

  _keyExtractor = (item, index) => index;

  _getAllEvents = () => {
    let events = this.state.events;
    this.setState({filterEvent: events})
  }

  _getUpcomingEvents = () => {
    let events = this.state.events,
        updatedEvents = [];

        updatedEvents = events.filter(event => {
          let currentDate = new Date(),
              eventDate = new Date(event.date);

          if (currentDate < eventDate) return true;
        })

    this.setState({filterEvent: updatedEvents})
  }

  _getLocalEvents = () => {
    let events = this.state.events,
        updatedEvents = [];

        updatedEvents = events.filter(event => {
          if (event.venue.state === "IL") return true;
        })

    this.setState({filterEvent: updatedEvents})
  }

  render() {
    return (
      // this._renderEvents()
      <View style={{ flex: 1, paddingTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <TouchableOpacity 
            style={[styles.tab, styles.tabSelected]}
            onPress={this._getAllEvents}
          ><Text>All Events</Text></TouchableOpacity>
          <TouchableOpacity 
          style={styles.tab}
          onPress={this._getUpcomingEvents}
          ><Text>Upcoming Events</Text></TouchableOpacity>
          <TouchableOpacity 
          style={styles.tab}
          onPress={this._getLocalEvents}
          ><Text>Local Events</Text></TouchableOpacity>
          <TouchableOpacity 
          style={styles.tab}
          onPress={() => this.props.goToForm()}
          ><Text>Go to Form</Text></TouchableOpacity>
        </View>
        <FlatList
          data={this.state.filterEvent}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderEvent(item)}
        />
      </View>
      // <View style={{flex: 1, paddingTop: 30}}>
      //   <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
      //     <TouchableOpacity style={[styles.tab, styles.tabSelected]}><Text>All Events</Text></TouchableOpacity>
      //     <TouchableOpacity style={styles.tab}><Text>Upcoming Events</Text></TouchableOpacity>
      //     <TouchableOpacity style={styles.tab}><Text>Local Events</Text></TouchableOpacity>
      //   </View>
      //   <View style={styles.event}>
      //     <Text>Name: USC Trojans at Notre Dame Fighting Irish</Text>
      //     <Text>Date: Oct 17 7:30 PM</Text>
      //     <Text>Venue: Notre Dame Stadium</Text>
      //     <Text>City: Notre Dame</Text>
      //     <Text>State: IN</Text>
      //   </View>
      //   <View style={{alignItems: 'flex-start'}}>
      //     <TouchableOpacity style={styles.button}><Text>Add Event</Text></TouchableOpacity>
      //   </View>

      //   <View style={styles.form}>
      //     <Text>Event Information</Text>
      //     <TextInput style={{height: 40}} placeholder="Event Name"/>
      //     <TextInput style={{height: 40}} placeholder="Date"/>
      //     <TextInput style={{height: 40}} placeholder="Time"/>
      //     <Text>Venue Information</Text>
      //     <TextInput style={{height: 40}} placeholder="Venue Name"/>
      //     <TextInput style={{height: 40}} placeholder="Venue City"/>
      //     <Picker style={{height: 40}}>
      //       <Picker.Item label="AK" value="AK"/>
      //       <Picker.Item label="AL" value="AL"/>
      //       <Picker.Item label="AR" value="AR"/>
      //       <Picker.Item label="AZ" value="AZ"/>
      //       <Picker.Item label="CA" value="CA"/>
      //       <Picker.Item label="CO" value="CO"/>
      //       <Picker.Item label="CT" value="CT"/>
      //       <Picker.Item label="DC" value="DC"/>
      //       <Picker.Item label="DE" value="DE"/>
      //       <Picker.Item label="FL" value="FL"/>
      //       <Picker.Item label="GA" value="GA"/>
      //       <Picker.Item label="HI" value="HI"/>
      //       <Picker.Item label="IA" value="IA"/>
      //       <Picker.Item label="ID" value="ID"/>
      //       <Picker.Item label="IL" value="IL"/>
      //       <Picker.Item label="IN" value="IN"/>
      //       <Picker.Item label="KS" value="KS"/>
      //       <Picker.Item label="KY" value="KY"/>
      //       <Picker.Item label="LA" value="LA"/>
      //       <Picker.Item label="MA" value="MA"/>
      //       <Picker.Item label="MD" value="MD"/>
      //       <Picker.Item label="ME" value="ME"/>
      //       <Picker.Item label="MI" value="MI"/>
      //       <Picker.Item label="MN" value="MN"/>
      //       <Picker.Item label="MO" value="MO"/>
      //       <Picker.Item label="MS" value="MS"/>
      //       <Picker.Item label="MT" value="MT"/>
      //       <Picker.Item label="NC" value="NC"/>
      //       <Picker.Item label="ND" value="ND"/>
      //       <Picker.Item label="NE" value="NE"/>
      //       <Picker.Item label="NH" value="NH"/>
      //       <Picker.Item label="NJ" value="NJ"/>
      //       <Picker.Item label="NM" value="NM"/>
      //       <Picker.Item label="NV" value="NV"/>
      //       <Picker.Item label="NY" value="NY"/>
      //       <Picker.Item label="OH" value="OH"/>
      //       <Picker.Item label="OK" value="OK"/>
      //       <Picker.Item label="OR" value="OR"/>
      //       <Picker.Item label="PA" value="PA"/>
      //       <Picker.Item label="RI" value="RI"/>
      //       <Picker.Item label="SC" value="SC"/>
      //       <Picker.Item label="SD" value="SD"/>
      //       <Picker.Item label="TN" value="TN"/>
      //       <Picker.Item label="TX" value="TX"/>
      //       <Picker.Item label="UT" value="UT"/>
      //       <Picker.Item label="VA" value="VA"/>
      //       <Picker.Item label="VT" value="VT"/>
      //       <Picker.Item label="WA" value="WA"/>
      //       <Picker.Item label="WI" value="WI"/>
      //       <Picker.Item label="WV" value="WV"/>
      //       <Picker.Item label="WY" value="WY"/>
      //     </Picker>
      //     <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
      //       <TouchableOpacity style={styles.button}><Text>Cancel</Text></TouchableOpacity>
      //       <TouchableOpacity style={styles.button}><Text>Add Event</Text></TouchableOpacity>
      //     </View>
      //   </View>
      // </View>
    );
  }
}

