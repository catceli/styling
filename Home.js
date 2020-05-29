import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.route.params,
    }
  }
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{this.state.name}</Text>
        <Button
          title="Go to Second Page"
          onPress={() => this.props.navigation.navigate('SecondPage', {name: this.state.name})}
        />
      </View>
    );
  }
}
