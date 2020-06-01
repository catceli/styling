import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, AppRegistry, Button, Alert, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
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

// function Home({ navigation }){
//   return(
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button
//         title="Go to Second Page"
//         onPress={() => navigation.navigate('SecondPage')}
//       />
//     </View>
//   );
// }

function Homes({ route, navigation }){
  return(
    <Home
      navigation={navigation}
      route={route}
    />
  );
}

function SecondPage({ navigation }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function StackNav(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homes} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Home} initialParams={{name: "i did it!"}}/>
          <Drawer.Screen name="SecondPage" component={SecondPage} />
          <Drawer.Screen name="Stack" component={StackNav} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

// in home: initialParams={{name: "home"}}
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
