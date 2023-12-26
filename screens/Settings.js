import React, {useState, useEffect} from 'react';
import { View , StyleSheet, StatusBar, Image,Text, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Toast from "react-native-simple-toast"
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from '../Components/ToggleSwitch';


const Settings = ({navigation}) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('')

    const handleSignOut = async () => {
        try {
          await auth().signOut();
        } catch (error) {
          console.error('Error signing out:', error);
        }
    };

    useEffect(() => {
        // Fetch user data from Firebase when the component mounts
        const fetchUserData = async () => {
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                const userDocument = await firestore().collection('users').doc(currentUser.uid).get();
                setUser(userDocument.data());
            }
        };
        
        fetchUserData();
    }, [user]);

    useEffect(() => {
        if (user) {
          setName(user.firstName);
        }
      }, [user]);

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={"#001f3f"}/>

            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Icon name='arrow-back' size={30} color='#ffffff'/>
                </TouchableOpacity>
                <Text style={styles.settingsText}>Settings</Text>
                <Icon name='arrow-back' size={30} color='#001f3f'/>
            </View>
            <View style={styles.profileView}>
                <Image style={styles.img} source={require("../Components/Profile1.png")} />
                {/* <Image style={styles.img} source={require("./profi1.png")} /> */}
                <View style={styles.textView}>
                    <Text style={styles.name}>{name}</Text>
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
                        <TouchableOpacity style={[styles.editArrow,{marginLeft:140}]} onPress={()=>Toast.show("No need to select any other language, English is good for you", Toast.SHORT)}>
                            <Icon name='chevron-forward' size={30} color='#ffffff'/>
                        </TouchableOpacity>
                </View> 
            </View>

            <Text style={styles.titles}>Terms And Conditions</Text>
            <View style={styles.terms}>
                <TouchableOpacity onPress={()=>Toast.show("You already know everything !", Toast.SHORT)}>
                    <Text style={[styles.pText,{marginLeft:40,marginTop:10}]}>All Stuff You need to Know!</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={()=>handleSignOut()}>
                <Text style={[styles.settingsText,{marginLeft:10,fontSize:22,marginTop:10}]}>Log Out</Text>
                <Text style={[styles.pText,{marginLeft:40}]}>You are Logged in as {name}</Text>
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