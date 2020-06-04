import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TextInput } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

const Sep = () => {
  return <View style={styles.separator} />;
}



export default function App() {

  const handleClick = () =>{
    Alert.alert("",x)
    console.log('foi')

    return <View style={styles.circle} />;
  }

  const [x, setX] = useState('');
  const [y, setY] = useState('');



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text>Left</Text>
        </View>
        <View style={styles.headerCenter}>
        </View>
        <View style={styles.headerRight}>
          <Text>Right</Text>
        </View>
      </View>

      <View style={styles.logo}>
      {/*<ImageBackground source={require('./img/pru.png')} style={styles.bgImage} >
      </ImageBackground>*/}
      <Image source={require("./img/pru.png")} style={styles.image} />
      </View>

      <View style={styles.body}>
        <View>
          <Text>Iniciar</Text>
          <Sep />
        </View>
        <View>
        {/*<Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>*/}
        <TextInput placeholder="x" onChangeText={text => setX(text)} keyboardType={'numeric'}/>
        <TextInput placeholder="y" onChangeText={(text) => setY(text)} keyboardType={'numeric'}/>
        <Button title="Press me" onPress={handleClick}/>
        </View>

      </View>
    </View>
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
    backgroundColor: 'gray',
  },
  logo:{
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerLeft:{
    flex: 1,
    backgroundColor: 'red',
  },
  headerCenter:{
    flex: 4,
    backgroundColor: 'yellow',
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
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3
  }
});
