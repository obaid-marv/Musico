import {Text, View, StyleSheet, TextInput, FlatList,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {list} from "./MusicList";
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import MusicCard from '../Components/MusicCard';

const RecommendationScreen = ({navigation})=>{

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
            <View style={myStyles.header}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Music")}>
                    <Text style={myStyles.text1}>Music</Text>
                    </TouchableOpacity>
                    <Text style={myStyles.text2}>Recommended</Text>
                    
            </View>
            <View style={myStyles.searchBarView}>
                    <View style={myStyles.searchIcon}>
                        <Icon name='search' size={35} color= "grey"/>
                    </View>
                    <TextInput style={myStyles.searchBar} placeholder='Search for artists, songs and genre' placeholderTextColor={"grey"}></TextInput>
            </View>

            <View style={myStyles.content}>
            
                <FlatList
                    style={myStyles.FLView}
                    data={music}          
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(
                        
                        <TouchableOpacity>
                        <View key={item.id} style={myStyles.rectView}>
                            <View>
                                <Image style={{width:75, height:75, borderRadius:20}} source={{uri: item.artwork}} />
                            </View>

                            <View style={myStyles.innerRectView}>
                                <View style={myStyles.innerUpperView}>
                                    <View style={myStyles.titleView}>
                                        <Text style={myStyles.titleText}>{item.title}</Text>
                                        <Text style={myStyles.artistText}>{item.artist}</Text>
                                    </View>
                                    <View style={myStyles.musicIconView}>
                                    <Icon name='play-circle-outline' size={25} color="#FFA500" />
                                    </View>
                                </View>
                                <View style={myStyles.innerLowerView}>

                                    <View style={myStyles.likesView}>
                                        <Icon name="heart-outline" size={17} color='#FFA500' />
                                        {/* <Text style={myStyles.likeText}>{item.likes}</Text> */}
                                        <Text style={myStyles.likeText}>6k</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="share-social" size={17} color='#FFA500' />
                                        {/* <Text style={myStyles.likeText}>{item.shares}</Text> */}
                                        <Text style={myStyles.likeText}>2k</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="file-tray" size={17} color='#FFA500' />
                                        {/* <Text style={myStyles.likeText}>{item.comments}</Text> */}
                                        <Text style={myStyles.likeText}>2k</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="download-outline" size={17} color='#FFA500' />
                                        {/* <Text style={myStyles.likeText}>{item.downloads}</Text> */}
                                        <Text style={myStyles.likeText}>1.1k</Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                        </TouchableOpacity>
                    )}      
    
                />
            
                <MusicCard/>

            </View>
        </View>
    )
}   

export default RecommendationScreen

const myStyles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f",  
    },
    content:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        width:"100%"
    },
    header:{
        display:"flex",
        marginTop:50,
        flexDirection:"row",
        justifyContent:"flex-start",
        // backgroundColor:"grey",
        width:"100%"
    },
    FLView:{
        width:"92%",
        flex:1
    },
    rectView:{
        borderRadius:25,
        borderWidth:1,
        borderColor:"#001f3f",
        backgroundColor:"#033348",
        margin:5,
        flexDirection:"row",
        elevation:10,
        shadowColor:"#ffa500",
        
    },
    innerRectView:{
        width:"70%",
    },
    likesView:{
        paddingHorizontal:5,
        flexDirection:"row",
        marginTop:8,
        marginRight:15
    },
    musicIconView:{
        marginTop:20
    },
    innerUpperView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:5
        
    },
    innerLowerView:{
        flexDirection:"row",
        // backgroundColor:"yellow",
    },
    searchBarView:{
        
        width:"92%",
        backgroundColor:"white",
        borderRadius:40,
        height:40,
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,

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
        color:"white",
        fontSize:26, 
        marginHorizontal:10,
    },
    text2:{
        color:"#FFA500",
        fontSize:26,
        borderBottomWidth: 4,
        borderBottomColor: "#FFA500",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
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
    }
})