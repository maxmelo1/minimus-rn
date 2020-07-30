import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput,TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';




export default function App() {

  return (
    <View style={stylesFlex.container}>
        <View style={stylesFlex.div1}>
        </View>

    <View style={stylesFlex.div2}>
        <View style={stylesFlex.espText}>
            <Text>Módulos disponíveis:</Text>
        </View>
    
        <View style={stylesFlex.esp}>
            <Button title="Algoritmo Djkstra" color="white"/>
        </View>
        <View style={stylesFlex.esp}>
            <Button title="Busca em profundidade" color="white"/>
        </View>
        <View style={stylesFlex.esp}>
            <Button title="Busca em largura" color="white"/>
        </View>
    </View>
      <View style={stylesFlex.div3}>

      </View>
    </View>
  );
}

const stylesFlex = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    div1:{
        flex: 1,
    },
    div2:{
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderRadius:15,
        width:350,
    },
    esp:{
        marginVertical: 5,
        backgroundColor:'#34495e',
        color: 'white',
      },
      espText:{
        alignItems: 'center',
        marginVertical: 10,
      },
    div3:{
        flex: 3,
    },
});