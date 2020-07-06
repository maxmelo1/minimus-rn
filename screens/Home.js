import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput,TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';


function Separator() {
    return <View style={styles.separator} />;
  }
  
  const Sep = () => {
    return <View style={styles.separator} />;
  }

class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerCorner}>
              <Text>Score:</Text>
            </View>
            <View style={styles.headerCenter}>
            </View>
            <View style={styles.headerCorner}>
              <Text>High Score:</Text>
            </View>
          </View>

          <View style={styles.logo}>
            <Text>Minimus RN</Text>
          </View>

          <View style={styles.body}>
            <View>
              <Text>Iniciar:</Text>
              <Sep />
            </View>
            <View style={styles.element}>
              <Button title="Teoria dos Conjuntos"  style={styles.button} color='#34495e' onPress={() => this.props.navigation.navigate('Cadastro')} />
            </View>
            <View style={styles.element}>
              <Button title="Álgebra de Boole"  style={styles.button} color='#34495e' />
            </View>
            <View style={styles.element}>
              <Button title="Teoria dos Grafos"  color='#34495e'/>
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

export default HomeScreen;