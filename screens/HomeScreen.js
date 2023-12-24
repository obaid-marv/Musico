import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, FlatList,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Link } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const HomeScreen = ({navigation})=>{


    const data = [
        { key: '1', title: './Havana.jpg' },
        { key: '2', title: './Havana.jpg' },
        { key: '3', title: './Havana.jpg' },
        { key: '4', title: './Havana.jpg' },
        // Add more items as needed
      ];

      const renderItem = ({ item }) => (
        <TouchableOpacity>
          <View style={[myStyles.upperCard]}>
            <Image source={require("./Havana.jpg")}/>
            <Text style={myStyles.fltext}>Havana</Text>
          </View>
        </TouchableOpacity>
      );
    return(
        <View style={myStyles.container}>
            <View style={myStyles.header}>
                    <Text style={myStyles.text1}>Music</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Popular")}>
                    <Text style={myStyles.text2}>Recommended</Text>
                    </TouchableOpacity>
            </View>
            <View style={myStyles.searchBarView}>
                    <TouchableOpacity style={myStyles.searchIcon}>
                        <Icon name='search' size={35} color= "grey"/>
                    </TouchableOpacity>
                    <TextInput style={myStyles.searchBar} placeholder='Search for artists, songs and genre' placeholderTextColor={"grey"}></TextInput>
            </View>

            <View style={myStyles.upperCardsClass}>

                <TouchableOpacity>
                    <View style = {[myStyles.upperCard]}>
                        <Icon name='mic-circle' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Downloads</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style = {[myStyles.upperCard]}>
                        <Icon name='disc' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Playlists</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style = {[myStyles.upperCard]}>
                        <Icon name='musical-notes' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Favourites</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>

                    <View style = {[myStyles.upperCard]}>
                        <Icon name='musical-note' size={35} color="#FFA500" />
                        <Text style={[myStyles.colorWhite,  myStyles.smallFonts] }>Local files</Text>
                    </View>
                </TouchableOpacity>

            </View>


            <View style={myStyles.content}>
                <Text style={myStyles.bold}>HotList</Text>
                <View style={myStyles.hotList}>
                <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.key}
                />
                </View>
                <View style={myStyles.newReleases}>

                    
                </View>


                
            

            
                
            </View>

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
        top:130,
        flex:1,
        alignItems:"center",
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
    },
    bold:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    hotList:{
        backgroundColor:"pink",
        height:100,
    }
})