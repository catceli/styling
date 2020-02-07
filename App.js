//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert } from 'react-native';

export class FlexboxExamples extends Component {

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1, flexDirection: 'row' } ]}>
          <View style = {[ styles.button, { flex: 1 } ]}>
            <Button
              color = '#2bcc91'
              title = 'Back'
              onPress = {() => Alert.alert('hi')}
            />
          </View>
          <View style = {[ styles.button, { flex: 1, backgroundColor: '#302bcc' } ]}>
            <Button
              color = '#2bcc91'
              title = 'Next'
              onPress = {() => Alert.alert('hi')}
            />
          </View>
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
    backgroundColor: '#174f44',
    justifyContent: 'center'
  }
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
