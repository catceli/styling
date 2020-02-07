//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry } from 'react-native';

export class FlexboxExamples extends Component {
  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]} />
        </View>
        <View style = {[ styles.box, { backgroundColor: '#8B4513', flex: 2 } ]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box: {
    alignItems: 'center',
    height: 50,
    backgroundColor: '#e76e63'
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#a829c2',
    margin: 50
  },
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
