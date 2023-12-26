
import { View , StyleSheet, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/Ionicons'
import MusicCard from '../Components/MusicCard';
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast'
import firestore from '@react-native-firebase/firestore';
// import {getAuth}  from 'firebase/auth';

const LibraryScreen = ({navigation}) => {

    const [musicData, setMusicData ] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/obaid-marv/Weather-App/main/data.json");
      const data = await response.json();
      setMusicData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    
    fetchData();
  }, []);

    return(

        <View style={styles.container}>
            <StatusBar backgroundColor={"#001f3f"}/>

            <View style={styles.heading}>
                <TouchableOpacity style={{flex:1, left:18}} onPress={()=>Toast.show("Use the Botton Tabs !! , This is just for show", Toast.SHORT)}>

                <Icon name='arrow-back' size={35} color= "#A6A6A6" />
                </TouchableOpacity>
            <Text style = {[styles.title, {flex:2, display:"flex",marginLeft:30 }]}>Library</Text>
            </View>
            <View style = {styles.content}>

            
 
            <View style={styles.upperCardsClass}>

                <TouchableOpacity onPress={()=>Toast.show("Artists are: Camila, Eminem, Becky G, Imran Khan, Arjit Singh, Imagine Dragons, Javed Bashir",Toast.LONG)}>
                    <View style = {[styles.upperCard]}>
                        <MaterialCommunityIcons name='microphone' size={35} color="#FFA500" />
                        <Text style={[styles.colorWhite,  styles.smallFonts] }>Artists</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Toast.show("Not that many albums",Toast.SHORT)}>
                    <View style = {[styles.upperCard]}>
                        <Icon name='disc-outline' size={35} color="#FFA500" />
                        <Text style={[styles.colorWhite,  styles.smallFonts] }>Albums</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Toast.show("Why do you need a playlist ?",Toast.SHORT)}>
                    <View style = {[styles.upperCard]}>
                    <SimpleLineIcons name='playlist' size={35} color="#FFA500" />   
                        <Text style={[styles.colorWhite,  styles.smallFonts] }>Playlists</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{Toast.show("ALL TYPES", Toast.SHORT)}}>
                    <View style = {[styles.upperCard]}>
                        <Icon name='musical-notes-outline' size={35} color="#FFA500" />
                        <Text style={[styles.colorWhite,  styles.smallFonts] }>Genre</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.lowerBody}>
                <Text style = {styles.colorOffWhite}>Recently Streamed</Text>
                <View>

                {musicData?.map((e,i)=>{

                    return (         

                        <TouchableOpacity key={i}>

                            <View style={styles.libraryCard}>
                                <View style = {styles.imageDiv}>
                                    <Image style={{width:75, height:75, borderRadius:15}} source={{uri:e?.imgUrl}}/>
                                </View>
                                <View style={styles.data}>
                                    <Text style = {{color:"#FFA500"}}>{e.artist}</Text>
                                    <Text style = {{color:"#aaa"}}>{e.noOfSongs}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })    
                }
                
                </View>
            </View>

        </View>
            <MusicCard navigation={navigation}/>
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
        marginBottom:75
    },
    colorOffWhite:{
        color:"#aaa",
        bottom:15,
        fontSize:16,
        marginLeft:5,
        fontWeight:"bold"
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
        color:"#FFA500",
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