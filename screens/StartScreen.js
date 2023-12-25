import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const StartScreen = ({ navigation }) => {

  const handleLetsGo = ()=>{
   auth().onAuthStateChanged((user)=>{
    if(user){
      navigation.navigate("Main")
    }
    else{
      navigation.navigate("Login")
    }
   }) 
  }

  return (
    <ImageBackground
      source={require('./Splash.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create your experience!</Text>
        <Text style={styles.pText}>Stream your favorite songs ON THE GO...</Text>
        <TouchableOpacity onPress={() => {handleLetsGo()}}>
          <View style={styles.nextButton}>
            <Text style={styles.letsgoText}>LET'S GO</Text>
            <Icon style={{marginLeft:5}} name="arrow-forward-circle" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  nextButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 45,
    padding: 6,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    margin: 6,
  },
  pText: {
    color: 'white',
    margin: 8,
    fontSize: 16,
  },
  letsgoText:{ 
    color: 'black', 
    fontWeight:"bold",
    marginLeft:5,
    fontSize:16
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    marginTop:-5
  },
});
