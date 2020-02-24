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
      <ScrollView>
      {
        this.state.data.map((item, index) => (
           <View key = {item.id} style = {styles.circle}>
              <TouchableHighlight onPress={() => Alert.alert("Hi")}>
                <Image
                  style={{width: 300, height: 400, flex: 1, borderRadius: 90,}}
                  source={item.image}
                />
              </TouchableHighlight>
           </View>
      ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   circle: {
     width: 180,
     height: 180,
     borderRadius: 90,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
   },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
