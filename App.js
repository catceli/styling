//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry } from 'react-native';

export class FlexboxExamples extends Component {
  render(){
    return (
      <View>
      <View style={[ styles.container, { flex: .25 } ]}>
        <View style = {[ styles.box, { alignSelf: 'flex-start', width: 100, height: 100, borderRadius: 50 } ]} />
      </View>
      <View style={[ styles.container, { flex: .75, backgroundColor: '#800080' } ]}>
        <View style = {[ styles.box, { backgroundColor: '#B0E0E6' } ]} />
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
