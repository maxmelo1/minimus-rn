import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput,TouchableHighlight, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
import Constants from 'expo-constants';

import Cadastro from './screens/Cadastro'
import HomeScreen from './screens/Home'






const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#bdc3c7',
  },
  logo:{
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#bdc3c7',
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerCorner:{
    flex: 1,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#20232a",
  },
  headerCenter:{
    flex: 4,
  },
  headerRight:{
    flex: 1,
    backgroundColor: 'powderblue',
  },
  image:{
    width: 100,
    height: 70,
  },
  bgImage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.9,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  element:{
    marginVertical: 5,
  },
  
});

