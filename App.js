//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry } from 'react-native';

export class FlexboxExamples extends Component {
  render(){
    return (
      <View>
        <View style={[ styles.container ]}>
          <View style = {[ styles.box ]} />
          <View style = {[ styles.box ]} />
          <View style = {[ styles.box ]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EE',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  box: {
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10
  },
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
