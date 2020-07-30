import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput,TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';




export default function App() {

  return (
    <View style={stylesFlex.container}>
    <View style={stylesFlex.div1}>

    </View>
        <View style={stylesFlex.div2}>
            <View style={stylesFlex.esp}>
            <Button title="Calcular" color="white"/>
            </View>
        </View>
    </View>
  );
}

const stylesFlex = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
      },
    div1:{
        flex:9,
        backgroundColor:'#34495e'
    },
    div2:{
        flexDirection:'row-reverse',
        flex:1
    },
    esp:{
        justifyContent:'center',
        marginRight:25,
        borderRadius:10,
        width:100,
        height:50,
        marginVertical: 5,
        backgroundColor:'#34495e',
        color: 'white',
    },
    
    
});