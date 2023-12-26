import React, {useEffect, useState} from 'react';
import { ActivityIndicator,View ,StatusBar, StyleSheet, Button, Text, TouchableOpacity, TextInput, FlatList,Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Link } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import MusicCard from '../Components/MusicCard';
import auth from '@react-native-firebase/auth';
import Toast from "react-native-simple-toast"
import firestore from '@react-native-firebase/firestore';
import TrackPlayer from 'react-native-track-player';


const HomeScreen = ({navigation})=>{

    const [isLoading, setLoading] = useState(true);
    const [music, setMusic] = useState([])
    const screenWidth = Dimensions.get('window').width;
      


    

    useEffect(() => {
        const subscriber = firestore()
          .collection('Music')
          .onSnapshot(querySnapshot => {
            const music = [];
      
            querySnapshot.forEach(documentSnapshot => {
              music.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setMusic(music);
            setLoading(false);
          });
        
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

    //   console.log(music);
    
      const renderItem = ({ item }) => (
        <TouchableOpacity style={myStyles.hotTouch} onPress={()=>Toast.show("It will not play, enjoy the scrolling for now :)",Toast.SHORT)}>
            <Image style={[myStyles.himg, { width: screenWidth / 3 }]} source={{uri: item.artwork}}
            />
            <Text style={myStyles.imgText}>{item.title}</Text>
        </TouchableOpacity>
      );
    return(
        <View style={myStyles.container}>
            <StatusBar backgroundColor={"#001f3f"}/>
            <View style={myStyles.header}>
                    <Text style={myStyles.text1}>Music</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Recommended")}>
                    <Text style={myStyles.text2}>Recommended</Text>
                    </TouchableOpacity>
            </View>
            <View style={myStyles.searchBarView}>
                    <TouchableOpacity style={myStyles.searchIcon} onPress={()=>Toast.show("Functionality for it not added yet.", Toast.SHORT)}>
                        <Icon name='search' size={35} color= "grey"/>
                    </TouchableOpacity>
                    <TextInput style={myStyles.searchBar} placeholder='Search for artists, songs and genre' placeholderTextColor={"grey"}></TextInput>
            </View>

            <View style={myStyles.upperCardsClass}>

                <TouchableOpacity onPress={()=>{Toast.show("Artists are: Camila, Eminem, Becky G, Imran Khan, Arjit Singh, Imagine Dragons, Javed Bashir", Toast.LONG)}} >
                    <View style = {[myStyles.upperCard]}>
                        <MaterialCommunityIcons name='microphone' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Artists</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Toast.show("No Albums Yet. A screen will be made for it later on",Toast.SHORT)}>
                    <View style = {[myStyles.upperCard]}>
                        <Icon name='disc-outline' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Albums</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Toast.show("Why do you need a playlist ? If you do we will add the functionality later",Toast.SHORT)}>
                    <View style = {[myStyles.upperCard]}>
                    <SimpleLineIcons name='playlist' size={35} color="#FFA500" />   
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Playlists</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{Toast.show("ALL TYPES, Give suggestions for the preferred ones", Toast.SHORT)}}>
                    <View style = {[myStyles.upperCard]}>
                        <Icon name='musical-notes-outline' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Genre</Text>
                    </View>
                </TouchableOpacity>

            </View>


            <View style={myStyles.content}>
                <Text style={myStyles.bold}>HotList</Text>

                <View style={myStyles.hotList}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#FFA500" />
                ) : (
                    <FlatList
                    data={music}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    />
                    )
                }      
                </View>

                <Text style={myStyles.bold}>New Releases</Text>

                <View style={myStyles.hotList}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#FFA500" />
                ) : (
                    <FlatList
                    data={music}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    />
                    )
                }
                </View>
            </View>

            <MusicCard navigation={navigation}/>

        </View>
    
        
    )
}   

export default HomeScreen

const myStyles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f",  
    },
    content:{
        top:30,
        flex:1,
        justifyContent:"flex-start",
        width:"100%"
    },
    header:{
        display:"flex",
        marginTop:50,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%"
    },
    
    
    searchBarView:{
        marginTop: 20,
        width:"92%",
        backgroundColor:"white",
        borderRadius:40,
        flexDirection:"row",
        height:40,
        alignItems:"center"
    },
    searchIcon:{
        paddingLeft:7
    },
    searchBar:{
        borderRadius: 40, 
        paddingLeft: 15,
        color:"black"
        
    },
    text1:{
        color:"#FFA500",
        fontSize:26,
        borderBottomWidth: 4,
        borderBottomColor: "#FFA500",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginHorizontal:10,
        
    },
    text2:{
        color:"white",
        fontSize:26, 
        
    },
    titleText:{
        color:"#FFA500",
        fontSize:18,
        fontWeight:"bold"
    },
    artistText:{
        color:"#FFA500",
        fontSize:16,
    },
    likeText:{
        color:"#FFA500",
        marginLeft:1
    },
    upperCardsClass:{
        display:"flex",
        flexDirection:"row",
        
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
    smallFonts:{
        fontSize:12,
        fontWeight:"bold"
    },
    bold:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        textAlign:"left",
        marginLeft:10
    },
    hotList:{
        // backgroundColor:"pink",
        height:150,
        marginTop:10,
        
    },
    himg:{
        height:110,
        borderRadius:10

    },
    imgText:{
        color:"#ffa500",
        fontWeight:"bold",
        marginLeft:5,
    },
    hotTouch:{
        marginLeft:5,
        height:70,
        marginHorizontal:5
        // backgroundColor:"purple"
    },

})