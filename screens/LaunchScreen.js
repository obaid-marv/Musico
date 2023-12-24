import {Text,Image,StyleSheet,View} from 'react-native'

const LaunchScreen = ()=>{
    return(
        <View style={myStyles.container}>

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