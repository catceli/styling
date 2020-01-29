//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry } from 'react-native';

export class FlexboxExamples extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <View style = { styles.box } />
        <View style = {[ styles.box, { alignSelf: 'flex-end' } ]} />
        <View style = { styles.box } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e76e63',
    margin: 10,
  },
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
