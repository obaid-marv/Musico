import {Text, View, StyleSheet, TextInput, FlatList,Image} from 'react-native'
import RecommendationCard from './RecommendationCard'
import Icon from 'react-native-vector-icons/Ionicons'
import {list} from "./MusicList";

const RecommendationScreen = ()=>{

    return(
        <View style={myStyles.container}>
            <View style={myStyles.content}>
                <View style={myStyles.header}>
                    <Text style={myStyles.text1}>Music</Text>
                    <Text style={myStyles.text2}>Recommended</Text>
                </View>

                <View style={myStyles.searchBarView}>
                    <View style={myStyles.searchIcon}>
                        <Icon name='search' size={35} color= "grey"/>
                    </View>
                    <TextInput style={myStyles.searchBar} placeholder='Search for artists, songs and genre' placeholderTextColor={"grey"}></TextInput>
                </View>

            
                <FlatList
                    style={myStyles.FLView}
                    data={list}          
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})=>(
                        <View key={item.id} style={myStyles.rectView}>
                            <View>
                                <Image style={{width:75, height:75, borderRadius:20}} source={require("./Havana.jpg")} />
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
                                        <Text style={myStyles.likeText}>{item.likes}</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="share-social" size={17} color='#FFA500' />
                                        <Text style={myStyles.likeText}>{item.shares}</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="file-tray" size={17} color='#FFA500' />
                                        <Text style={myStyles.likeText}>{item.comments}</Text>
                                    </View>

                                    <View style={myStyles.likesView}>
                                        <Icon name="download-outline" size={17} color='#FFA500' />
                                        <Text style={myStyles.likeText}>{item.downloads}</Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                    )}      
    
                />
                


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
        top:130,
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        width:"100%"
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        // backgroundColor:"grey",
        width:"100%"
    },
    FLView:{
        marginTop:15,
        width:"92%",
        flex:1
    },
    rectView:{
        borderRadius:25,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#033348",
        margin:5,
        flexDirection:"row"
    },
    innerRectView:{
        width:"70%"
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
        marginTop: 10,
        width:"92%",
        backgroundColor:"white",
        borderRadius:40,
        flexDirection:"row"
    },
    searchIcon:{
        paddingTop:8,
        paddingLeft:7
    },
    searchBar:{
        borderRadius: 40, 
        paddingLeft: 15,
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