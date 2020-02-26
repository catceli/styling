import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Flatlist, Alert } from 'react-native';

export default class Grid1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      defaultStory: null,
      data: [
        {'id': 0, 'image': require('./sky.png')},
        {'id': 1, 'image': require('./sky.png')},
        {'id': 2, 'image': require('./sky.png')},
        {'id': 3, 'image': require('./sky.png')},
        {'id': 4, 'image': require('./sky.png')}
      ],
    }
  }

  render() {
    return (
      <ScrollView centerContent={true} contentContainerStyle={{ alignItems: 'center' }}>
      {
        this.state.data.map((item, index) => (
           <View key = {item.id}>
              <TouchableHighlight onPress={() => Alert.alert("Hi")} underlayColor='orange'>
                <Image
                  style={ styles.circle }
                  resizeMode='cover'
                  source={item.image}
                />
              </TouchableHighlight>
              <Text style = {{alignSelf: 'center'}}>{item.id}</Text>
           </View>
      ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   circle: {
     width: 200,
     height: 200,
     borderRadius: 100,
     flexDirection: 'column',
     alignItems: 'flex-end',
     backgroundColor: 'red',
     margin: 40,
     padding: 0,
     justifyContent: 'center',
   },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
