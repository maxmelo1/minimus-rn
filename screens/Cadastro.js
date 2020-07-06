import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput,TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';




class Cadastro extends Component{
  render(){
    return (
      <View style={styles.container}>
        
  
        <View style={styles.body}>
          
          <View style={styles.element}>
            <TextInput placeholder="Nome">
            </TextInput>
          </View>
          <View style={styles.element}>
            <Button title="Salvar"  style={styles.button} color='#34495e' />
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },  
  element:{
    marginVertical: 5,
  },
  
});

export default Cadastro;
