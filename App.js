import React, { Component } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './component/homescreen';
import Cards from './component/cards';
import Swipe from './component/swipe';
import Form from './component/form'
import List from './component/list'
import Tabs from './component/tabs'
import { Container, Content, Header } from 'native-base';
import { Root } from "native-base";
import Signup from './component/auth/signup'
import Login from './component/auth/login'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers/index.js';
// End of MyHomeScreen class
const store = createStore(allReducers);
const WhatsAppNavigator = createStackNavigator({
  signup :{
    screen: Signup
  },
  login :{
    screen: Login
  },
  tab :{
    screen: Tabs
  }
})
const MyDrawerNavigator = createDrawerNavigator({
  // Home: {
  //   screen: HomeScreen,
  // },
  // Cards: {
  //   screen: Cards,
  // },
  // Swipe: {
  //   screen: Swipe,
  // },
  // Form: {
  //   screen: Form,
  // },
  WhatsApp :{ 
    screen: WhatsAppNavigator
  }
  
});


const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store= {store}>
      <MyApp ></MyApp >
      </Provider>
    );
  }
}//End of App class

export default App;