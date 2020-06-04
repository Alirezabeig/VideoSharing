import React, {Component} from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RNCamera, FaceDetector } from 'react-native-camera';
import AddPost from './component/AddPost';
import Home from './component/Home';
import Profile from './component/Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator} from '@react-navigation/stack';
import {Provider, connect} from 'react-redux';
//import reducer from './reducers';
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';



const Tab = createBottomTabNavigator();

function Tabs (){
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={size} />
        ),
      }}  />


      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
        tabBarLabel: 'AddPost',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={size} />
        ),
      }}  />
    </Tab.Navigator>

  )
}

const Stack = createStackNavigator();

export default class App extends Component {
  render (){
    return (

          <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Tabs}/>
            </Stack.Navigator>
          </NavigationContainer>

      );

  }


}
