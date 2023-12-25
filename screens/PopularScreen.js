import {Text, Image, StatusBar,View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-simple-toast';
import { list } from './MusicList';
import MusicCard from '../Components/MusicCard';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';

const PopularScreen = (navigation)=>{

    const [loading, setLoading] = useState(true);
    const [music, setMusic] = useState([])

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


    return(
        <View style={myStyles.container}>
            <StatusBar backgroundColor={"#001f3f"}/>

            <View style={myStyles.header}>

                <TouchableOpacity style={myStyles.backButton} onPress={()=>Toast.show("Use the Botton Tabs !! , This is just for show", Toast.SHORT)}>
                    <Icon name='arrow-back' size={35} color= "#A6A6A6" />
                </TouchableOpacity>

                <Text style={myStyles.headerText}>Popular</Text>
            </View>

            <View style={myStyles.textView}>
                <Text style={myStyles.textStyle}>Last 24 hours</Text>
            </View>

            <FlatList
            style={myStyles.FLView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={music}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <View key={item.id}>
                    <Image style={myStyles.imgStyle} source={{uri:item.artwork}}/>
                    <Text style={myStyles.titleText}>{item.title}</Text>
                    <Text style={myStyles.artistText}>{item.artist}</Text>
                </View>
            )}
            />

            <View style={myStyles.textView}>
                <Text style={myStyles.textStyle}>Last 7 days</Text>
            </View>

            <FlatList
            style={myStyles.FLView}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={music}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <View key={item.id}>
                    <Image style={myStyles.imgStyle} source={{ uri: item.artwork}}/>
                    <Text style={myStyles.titleText}>{item.title}</Text>
                    <Text style={myStyles.artistText}>{item.artist}</Text>
                </View>
            )}
            />
            
            <MusicCard/>
        </View>
    )
}

export default PopularScreen;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f",  
    },
    header:{    
        display:"flex",
        marginTop:50,
        flexDirection:"row",
        // backgroundColor:"grey",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        marginBottom:15
    }, 
    FLView:{
        marginBottom:-25
    },
    backButton:{
        marginLeft:18 
    },
    imgStyle:{
        height:130,
        width:140,
        borderRadius:15,
        marginHorizontal:12,
        marginBottom:8
    },
    textView:{
        flex:1,
        alignItems:"flex-start",
        marginTop:0,
        width:"100%"
    },
    textStyle:{
        color:"white",
        fontWeight:"bold",
        fontSize: 18,
        marginLeft:25
    },
    headerText:{
        color:"#FFA500",
        fontWeight:"bold",
        fontSize:26,
        width:"70%",
        textAlign:"center",
        marginLeft:5   //For moving right left
    },
    titleText:{
        textAlign:"center",
        color:"#FFA500",
        fontSize:20,
        fontWeight:"bold"
    },
    artistText:{
        color:"#FFA500",
        textAlign:"center",
        fontSize:16
    }
})