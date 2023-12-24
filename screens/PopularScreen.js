import {Text, Image, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-simple-toast';
import { list } from './MusicList';


const PopularScreen = ()=>{

    const showMsg = ()=>{
        Toast.show('Back Button Pressed', Toast.SHORT);
    }
    return(
        <View style={myStyles.container}>
            <View style={myStyles.header}>

                <TouchableOpacity style={myStyles.backButton} onPress={showMsg}>
                    <Icon name='arrow-back' size={35} color= "#A6A6A6" />
                </TouchableOpacity>

                <Text style={myStyles.headerText}>Popular</Text>
            </View>

            <View style={myStyles.textView}>
                <Text style={myStyles.textStyle}>Last 24 hours</Text>
            </View>

            <FlatList
            horizontal={true}
            data={list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <View>
                    <Image style={myStyles.imgStyle} source={require("../Components/Havana.jpg")}/>
                    <Text style={myStyles.titleText}>{item.title}</Text>
                    <Text style={myStyles.artistText}>{item.artist}</Text>
                </View>
            )}
            />

            <View style={myStyles.textView}>
                <Text style={myStyles.textStyle}>Last 7 days</Text>
            </View>

            <FlatList
            horizontal={true}
            data={list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <View>
                    <Image style={myStyles.imgStyle} source={require("../Components/Havana.jpg")}/>
                    <Text style={myStyles.titleText}>{item.title}</Text>
                    <Text style={myStyles.artistText}>{item.artist}</Text>
                </View>
            )}
            />

            <View style={{flex:1}}></View>
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
        marginBottom:20
    }, 
    backButton:{
        marginLeft:18 
    },
    imgStyle:{
        height:150,
        width:150,
        borderRadius:15,
        marginHorizontal:12,
        marginBottom:8
    },
    textView:{
        flex:1,
        alignItems:"flex-start",
        marginTop:10,
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