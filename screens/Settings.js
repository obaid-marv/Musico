import React from 'react';

import { View , StyleSheet, Pressable, Image, Button,Text, TouchableOpacity } from 'react-native';



import Icon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from '../Components/ToggleSwitch';


const Settings = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name='arrow-back' size={30} color='#ffffff'/>
                </TouchableOpacity>
                <Text style={styles.settingsText}>Settings</Text>
                <Icon name='arrow-back' size={30} color='#001f3f'/>
            </View>
            <View style={styles.profileView}>
                <Image style={styles.img} source={require("./profi1.png")} />
                <View style={styles.textView}>
                    <Text style={styles.name}>Obaid</Text>
                    <Text style={styles.pText}>Edit Profile</Text>
                </View>
                <TouchableOpacity style={styles.editArrow} onPress={()=>navigation.push("Edit")}>
                    <Icon name='chevron-forward' size={30} color='#ffffff'/>
                </TouchableOpacity>
            </View>

            <Text style={styles.titles}>Data Saver</Text>
            <View style={styles.dataSaver}>
                <View style={styles.subData}>
                    <Text style={styles.dataText}> High Quality Sound</Text>
                    <ToggleSwitch />
                </View> 
                <View style={styles.subData}>
                    <Text style={styles.dataText}> Download Only Audio</Text>
                    <ToggleSwitch />
                </View> 
                <View style={styles.subData}>
                    <Text style={styles.dataText}> Autoplay</Text>
                    <ToggleSwitch />
                </View> 
                <View style={styles.subData}>
                    <Text style={styles.dataText}> Mono Audio</Text>
                    <ToggleSwitch />
                </View> 




            </View>
            <Text style={styles.titles}>Language</Text>
            <View style={{alignItems:"center"}}>
                <View style={styles.subData}>
                        <Text style={styles.dataText}> Select language</Text>
                        <TouchableOpacity style={[styles.editArrow,{marginLeft:140}]}>
                            <Icon name='chevron-forward' size={30} color='#ffffff'/>
                        </TouchableOpacity>
                </View> 
            </View>

            <Text style={styles.titles}>Terms And Conditions</Text>
            <View style={styles.terms}>
                <TouchableOpacity>
                    <Text style={[styles.pText,{marginLeft:40,marginTop:10}]}>All Stuff You need to Know!</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={[styles.settingsText,{marginLeft:10,fontSize:22,marginTop:10}]}>Log Out</Text>
                <Text style={[styles.pText,{marginLeft:40}]}>You are Logged in as Obaid</Text>
            </TouchableOpacity>




        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#001f3f"
    },
    header:{
        flexDirection:"row",
        marginTop:50,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"space-between"
    },
    settingsText:{
        fontWeight:"bold",
        fontSize:30,
        color:"#ffa500"
    },
    profileView:{
        flexDirection:"row",
        marginLeft:10,
        height:100,
        marginTop:20,
        alignItems:"center",


    },
    img:{
        flex:1,
        height:90,
        width:80,
        borderRadius:60,
        borderWidth:2,
        borderColor:"#ffffff"
        
    },
    textView:{
        flex:2,
        marginLeft:10
    },
    editArrow:{
        flex:1
    },
    name:{
        fontSize:22,
        fontWeight:"bold",
        color:"#ffa500"
    },
    titles:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:5,
        color:"#ffa500"
    },
    pText:{
        fontWeight:"bold",

    },
    dataSaver:{
        alignItems:"center"
    },
    subData:{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        width:"90%",

        justifyContent:"space-between",
        marginTop:10,
    },
    dataText:{
        fontWeight:"bold",
        color:"#ffa500"
    }

});