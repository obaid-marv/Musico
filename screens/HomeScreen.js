import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Link } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const HomeScreen = () => {

    return(
        <View style={styles.container}>

            <View>
            <Text style = {styles.title}>Music</Text>
            <Text style = {styles.title}>Recommendation</Text>
            </View>

            <View style= {styles.searchBar}>
                <Icon name="arrow-back-sharp" size={35} color='#000'/>
                <TextInput placeholder='Search for artist, songs and genre' style = {styles.searchBarInput} />
            </View>
                
            <View>
                <Slider />
            </View>

            <Pressable>
                <View>
                    <Icon name='mic-circle' size={35} color="yellow" />
                    <Text>Artists</Text>
                </View>
                <View>
                    <Icon name='disc' size={35} color="yellow" />
                    <Text>Albums</Text>
                </View>
                <View>
                    <Icon name='musical-notes' size={35} color="yellow" />
                    <Text>Playlists</Text>
                </View>
                <View>
                    <Icon name='musical-note' size={35} color="yellow" />
                    <Text>Genre</Text>
                </View>
            </Pressable>

            <View>
                <Text>Hot List</Text>
                <Pressable>
                    <View>
                        <Text>See more</Text>
                        <Icon name='arrow-forward-outline' size={35} color="Yellow"/>
                    </View>
                </Pressable>

                {/* <Card /> */}
            </View>

            <View>
                <Text>New Release</Text>
                <Pressable>
                    <View>
                        <Text>See more</Text>
                        <Icon name='arrow-forward-outline' size={35} color="Yellow"/>
                    </View>
                </Pressable>

                {/* <Card /> */}
            </View>



            {/* <Button title='Log In'/> */}
            {/* <View>
                <Text>Don't have an account?</Text>
                <Pressable>
                    <Text>Sign Up</Text>
                </Pressable>
            </View> */}
            {/* <View>
                {/* <span></span>
                <span>OR</span>
                <span></span> }
                <Text>OR</Text>
            </View>
            
            <View>
                <Text>Icon</Text>
                <Text>Login with facebook</Text>
            </View> */}

            {/* <TouchableOpacity onPress={()=>{}}>
                <View style = {styles.nextButton}>
                    <Text style = {{color:"black"}}>LET'S GO</Text>
                    <Ionicons name="arrow-forward-sharp" size={25} color='#000'/>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    nextButton:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"yellow",
        alignItems:"center",
        fontWeight:"bold",
        marginTop: 45,
        padding:6,
        borderRadius:30,
    },
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
    },
    title:{
        fontSize:24,
        color:"white",
        fontWeight:"700",
        margin: 6,
    },
    pText:{
        color:"white",
        margin:8,
        fontSize:16,
    }
});