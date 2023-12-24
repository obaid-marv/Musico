import {Text, View, Pressable, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React from 'react'
import MusicCard from "../Components/MusicCard"


const AccountScreen =()=> {
    const [name, setName] = React.useState("Zaki")

    return(
        <View style={myStyles.container}>
            <View style={myStyles.header}>

            <TouchableOpacity style={myStyles.backButton}>
                <Icon name='arrow-back' size={35} color= "#A6A6A6" />
            </TouchableOpacity>

            <Text style={myStyles.headerText}>Account</Text>
            </View>

            <Image style={myStyles.imgStyle} source={require("../Components/Profile.png")} />

            <View style={myStyles.nameView}>
                <Text style={myStyles.nameText}>{name}</Text>
                <TouchableOpacity>
                <FontAwesome5 style={{marginLeft:10}} name="edit" size={20} color={"#FFA500"}/>
                </TouchableOpacity>
            </View>

            <View style={myStyles.lowerView}>

                <Pressable style={myStyles.pressableView}>
                    <MaterialCommunityIcons style={myStyles.leftIcon} name="pencil" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Edit Profile</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>

                <Pressable style={myStyles.pressableView}>
                    <Feather style={myStyles.leftIcon} name="globe" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Language</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>
                
                <Pressable style={myStyles.pressableView}>
                    <MaterialCommunityIcons style={myStyles.leftIcon} name="message-outline" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Contact Us</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>

                <Pressable style={myStyles.pressableView}>
                    <SimpleLineIcons style={myStyles.leftIcon} name="question" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>FAQS</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>

                <Pressable style={myStyles.pressableView}>
                    <Icon style={myStyles.leftIcon} name="settings-outline" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Settings</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>
            </View>

            <MusicCard/>
        </View>
    )
}

export default AccountScreen

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001f3f"
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
    nameView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:30
    },
    lowerView:{
        backgroundColor:"#FFA500",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        width:"100%",
    },
    pressableView:{
        flexDirection:"row",
        paddingTop:25,
        alignItem:"center",
        marginVertical:4
    },
    backButton:{
        marginLeft:18 
    },
    headerText:{
        color:"#FFA500",
        fontWeight:"bold",
        fontSize:26,
        width:"70%",
        textAlign:"center",
        marginLeft:5   //For moving right left
    },
    nameText:{
        color:"#FFA500",
        fontSize:20,
        fontWeight:"bold",
    },
    lowerTexts:{
        color:"black",
        fontWeight:"bold",
        fontSize:18,
        width:"25%"
    },
    imgStyle:{
        height:120,
        width:120,
        marginTop:30,
        marginBottom:30
    },
    leftIcon:{
        marginLeft:10,
        marginRight:5
    },
    rightIcon:{
       width:"60%",
       alignItems:"flex-end"
    }
})