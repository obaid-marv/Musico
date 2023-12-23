import React from 'react';
import { View , StyleSheet, Image, Pressable } from 'react-native';
import MusicPlayer from './assets/Source/Screens/MusicPlayer';
import SignUp from './assets/Source/Screens/SignUp';
import StartScreen from './assets/Source/Screens/StartScreen';
import Login from './HomeScreen';

const MusicCard = () => {

    return(
        <View style={styles.container}>
            <Pressable>
            <Image source={require("../covers/WeRollin.jfif")}/>
            <Text></Text>
            </Pressable>
        </View>
    );
};

export default MusicCard;

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
});