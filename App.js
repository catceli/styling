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

// <NavigationContainer>
//   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//     <Drawer.Screen name="Home" component={Home} />
//     <Drawer.Screen name="SecondPage" component={SecondPage} />
//     <Drawer.Screen name="ThirdPage" component={ThirdPage} />
//   </Drawer.Navigator>
// </NavigationContainer>

function Home({ navigation }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate('SecondPage')}
      />
    </View>
  );
}

function SecondPage({ navigation }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Third Page"
        onPress={() => navigation.navigate('ThirdPage')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function ThirdPage({ navigation }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView{...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={()=> props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Stack(){
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SecondPage" component={SecondPage} />
    <Stack.Screen name="ThirdPage" component={ThirdPage} />
  </Stack.Navigator>
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//
// export default class App extends React.Component {
//   render(){
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//           <Drawer.Screen name="Home" component={Home} />
//           <Drawer.Screen name="SecondPage" component={SecondPage} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
