import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
// import {getAuth}  from 'firebase/auth';

const LibraryScreen = ({navigation}) => {

    // const handleSignOut = () =>{

    //     const myauth = getAuth();
    //     myauth.signOut();

    //     navigation.navigate("welcome");
    // }

    return(

        <View style={styles.container}>
            
            <View style={styles.heading}>
                <TouchableOpacity style={{flex:1, left:18}}>

                <Icon name='arrow-back' size={35} color= "#A6A6A6" />
                </TouchableOpacity>
            <Text style = {[styles.title, {flex:2, display:"flex",marginLeft:30 }]}>Library</Text>
            </View>
            <View style = {styles.content}>

            
 
            <View style={styles.upperCardsClass}>

            <TouchableOpacity>
                <View style = {[styles.upperCard]}>
                    <Icon name='mic-circle' size={35} color="#FFA500" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Downloads</Text>
                </View>
            </TouchableOpacity>

            
            <TouchableOpacity>
                <View style = {[styles.upperCard]}>
                    <Icon name='disc' size={35} color="#FFA500" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Playlists</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style = {[styles.upperCard]}>
                    <Icon name='musical-notes' size={35} color="#FFA500" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Favourites</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style = {[styles.upperCard]}>
                    <Icon name='musical-note' size={35} color="#FFA500" />
                    <Text style={[styles.colorWhite,  styles.smallFonts] }>Local files</Text>
                </View>
            </TouchableOpacity>

        </View>
            <View style={styles.lowerBody}>
                <Text style = {styles.colorOffWhite}>Recently Streamed</Text>
                <View>

                <TouchableOpacity>

                    <View style={styles.libraryCard}>
                        <View style = {styles.imageDiv}>
                            <Image style={{width:75, height:75, borderRadius:15}} source={require("./Havana.jpg")}/>
                        </View>
                        <View style={styles.data}>
                            <Text style = {{color:"#FFA500"}}>Album name</Text>
                            <Text style = {{color:"#aaa"}}>No. of Songs</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.libraryCard}>
                        <View style = {styles.imageDiv}>
                            <Image style={{width:75, height:75, borderRadius:15}} source={require("./Havana.jpg")}/>
                        </View>
                        <View style={styles.data}>
                            <Text style = {{color:"#FFA500"}}>Album name</Text>
                            <Text style = {{color:"#aaa"}}>No. of Songs</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.libraryCard}>
                        <View style = {styles.imageDiv}>
                            <Image style={{width:75, height:75, borderRadius:15}} source={require("./Havana.jpg")}/>
                        </View>
                        <View style={styles.data}>
                            <Text style = {{color:"#FFA500"}}>Album name</Text>
                            <Text style = {{color:"#aaa"}}>No. of Songs</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.libraryCard}>
                        <View style = {styles.imageDiv}>
                            <Image style={{width:75, height:75, borderRadius:15}} source={require("./Havana.jpg")}/>
                        </View>
                        <View style={styles.data}>
                            <Text style = {{color:"#FFA500"}}>Album name</Text>
                            <Text style = {{color:"#aaa"}}>No. of Songs</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

</View>
        </View>
    );
};

export default LibraryScreen;

const styles = StyleSheet.create({
    nextButton:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#FFA500",
        alignItems:"center",
        fontWeight:"bold",
        marginTop: 45,
        padding:6,
        borderRadius:30,
    },
    heading:{
        display:"flex",
        marginTop:50,
        flexDirection:"row",

        justifyContent:"center",
        alignItems:"center"
    },
    libraryCard:{
        width:350,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:80,
        flexDirection:"row",
    },
    imageDiv:{
        flex:2,
        borderRadius:18,
    },
    data:{
        flex:6,
    },
    lowerBody:{
        marginTop:40,
        top:45,
        left:10,
    },
    colorOffWhite:{
        color:"#aaa",
        bottom:15,
    },
    upperCard:{
        display:"flex",
        width:70,
        height:70,
        margin:6,
        alignItems:"center",
        paddingTop:9,
        backgroundColor:"#001f3f",
        borderRadius:12,
        elevation:10,
        borderWidth:1,
        borderColor:"#ffa500",
        shadowRadius:20,
        shadowColor:"#FFA500",
        shadowOffset:{width:100, height:100},
        shadowOpacity:1,
        top:25,
    },
    container: {
        
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f",

        
    },
    content:{

        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        
        
    },
    upperCardsClass:{
        display:"flex",
        flexDirection:"row",
        top:10,
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
    },
    colorWhite:{
        color:"#FFA500"
    },
    smallFonts:{
        fontSize:12,
    }
});