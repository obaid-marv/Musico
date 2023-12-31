import { useEffect } from 'react';
import {Text,Image,StyleSheet,View, StatusBar} from 'react-native'

const LaunchScreen = ({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>navigation.navigate("StartScreen"),2000)
    },[]);
    return(
        <View style={myStyles.container}>
            <StatusBar backgroundColor={"#001f3f"}/>
            <Image style={myStyles.imageView} source={require("../Components/MusicoIcon.png")}/>

            <Text style={myStyles.textStyle}>Musico</Text>

        </View>
    )
}

export default LaunchScreen;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f"
    },
    imageView:{
        height:120,
        width:120,
        
    },  
    textStyle:{
        color:"#FFA500",
        fontSize:32,
        fontWeight:"bold",
        marginBottom:20 //Adjust to move both the image and text upwards
    }   

})