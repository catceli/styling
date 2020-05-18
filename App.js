import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight } from 'react-native';

export class FlexboxExamples extends Component {

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]} />
            <Text style = {[ styles.text ]}>Name Here</Text>
          </View>
          <View style = {[ styles.box, { backgroundColor: '#8B4513', flex: 1.4 } ]}>
          </View>
          <View style = {[ styles.box, { backgroundColor: '#302bcc', flex: 0.6, flexDirection: 'row' } ]}>
            <TouchableHighlight
              style = {[ styles.button, { flex: 1 } ]}
              onPress = {() => Alert.alert('hi')}>
                <Text style = {[ styles.buttonText ]}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style = {[ styles.button, { flex: 1 } ]}
              onPress = {() => Alert.alert('hi')}>
                <Text style = {[ styles.buttonText ]}>Next</Text>
            </TouchableHighlight>
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
    backgroundColor: '#e76e63',
  },
  //https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    backgroundColor: '#a829c2',
    marginTop: 60,
    marginBottom: 20,
  },
  text: {
    color: '#100812',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  button: {
    alignContent: 'space-around',
    margin: 30,
    backgroundColor: '#2bcc91',
  },
  buttonText: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    textAlign:'center'
  },
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
