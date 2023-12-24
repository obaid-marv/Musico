import {Text, View, Image, Pressable, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { KeyboardAvoidingView } from 'react-native'

const EditScreen = ()=>{
    return(
        <View style={myStyles.container}>

            <View style={myStyles.yellowView}>
                <View style={myStyles.header}>
                    <TouchableOpacity>
                        <Icon style={{marginLeft:10}} name='arrow-back' size={35} color= "black" />
                    </TouchableOpacity>
                    <Text style={myStyles.headerText}>Edit Profile</Text>
                    <TouchableOpacity>
                    <Icon style={{marginRight:15}} name="share-social-outline" size={28} color={"black"} />
                    </TouchableOpacity>
                </View>

                {/* Image in yellowView */}
                <Image style={myStyles.imgStyleYellow} source={require("../Components/Profile1.png")} />
            </View>

            {/* <Image style={myStyles.imgStyle} source={require("../Components/Profile.png")}/> */}

            <View style={myStyles.blueView}>
                {/* Image in blueView */}
                <Image style={myStyles.imgStyleBlue} source={require("../Components/Profile1.png")} />

                <TouchableOpacity style={{marginTop:50, marginBottom:10}}>
                    <Text>Change Picture</Text>
                </TouchableOpacity>

                <View style={myStyles.textWrap}>
                <Text style={myStyles.textStyle}>Username</Text>
                </View>
                <TextInput style={myStyles.inputStyle}  placeholder='Zaki098' placeholderTextColor={"grey"}/> 

                <View style={myStyles.textWrap}>
                <Text style={myStyles.textStyle}>Email Id</Text>
                </View>
                <TextInput style={myStyles.inputStyle} placeholder='zaki098@gmail.com' placeholderTextColor={"grey"} />

                <View style={myStyles.textWrap}>
                <Text style={myStyles.textStyle}>Phone Number</Text>
                </View>
                <TextInput style={myStyles.inputStyle} placeholder='+92398788999' placeholderTextColor={"grey"}/>

                <View style={myStyles.textWrap}>
                <Text style={myStyles.textStyle}>Password</Text>
                </View>
                <TextInput style={myStyles.inputStyle}  placeholder='AsDfGhJkL' placeholderTextColor={"grey"}/>

                <TouchableOpacity style={myStyles.updateBtn}>
                    <Text style={myStyles.updateText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditScreen

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        marginTop:30,
        flexDirection:"row",
        // backgroundColor:"grey",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        marginBottom:15
    },
    yellowView:{
        backgroundColor:"#FFA500",
        height:"22%"
    },
    blueView:{
        backgroundColor:"#001f3f",
        height:"78%",
        alignItems:"center",
        width:"100%"
    },
    textWrap:{
        width:"85%"
    },
    imgStyleYellow: {
        height: 120,
        width: 120,
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: [{ translateX: -60 }, { translateY: -40 }], // Center the image in yellowView
        zIndex: 1,
      },
    
      imgStyleBlue: {
        height: 120,
        width: 120,
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -60 }, { translateY: -76 }], // Center the image in blueView
        zIndex: 1,
      },
    imgStyle:{
        height:120,
        width:120,
    },
    textStyle:{
        color:"#FFA500",
        fontWeight:"bold",
        fontSize:16,
        textAlign:"left",
        marginBottom:3
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"#FFA500",
        alignItems:"center",
        padding:8,
        marginBottom:15,
        width:"85%",
        borderRadius:10,
        paddingLeft:15
    },  
    headerText:{
        color:"black",
        fontWeight:"bold",
        fontSize:26,
        marginLeft:5
    },
    updateText:{
        color:"#001f3f",
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    updateBtn:{
        backgroundColor:"#FFA500",
        padding:10,
        // paddingVertical:10,
        borderRadius:15,
        width:"75%",
        marginTop:20
    }

})