import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from "../components/smart/Home/component.js"
import Form from "../components/smart/Form/component.js"


const RootStack = createStackNavigator(
  {
    Home: Home,
    Form: Form,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}