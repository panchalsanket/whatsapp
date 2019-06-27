import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';  
class Avantar extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        
      };
    state = {  }
    render() { 
        return ( 
            <Text>Avantar Component</Text>
         );
    }
}
 
export default Avantar;