//On 1/29/2020: https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

export class FlexboxExamples extends Component {
  constructor(props){
    super(props);
    this._pressedButton = this._pressedButton.bind(this);
  }

  _pressedButton(){
    console.log('hi')
  }

  render(){
    return (
      <View style={[ styles.container ]}>
        <View style = {[ styles.box, { flex: 1 } ]}>
          <View style = {[ styles.circle ]} />
          <Text style = {[ styles.text ]}>Name Here</Text>
        </View>
        <View style = {[ styles.box, { backgroundColor: '#8B4513', flex: 1.4 } ]}>
        </View>
        <View style = {[ styles.box, { backgroundColor: '#302bcc', flex: 0.6 } ]}>
          <Button
            style = {[ styles.button, { alignSelf: 'flex-start' } ]}
            title = 'Back'
            onPress = {() => this._pressedButton}
          />
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
    color: '#2bcc91',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default FlexboxExamples;
AppRegistry.registerComponent('FlexboxExamples', () => FlexboxExamples);
