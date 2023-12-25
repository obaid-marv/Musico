import {Text, View, Pressable, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, {useState,useEffect} from 'react'
import Toast from 'react-native-simple-toast';
import MusicCard from "../Components/MusicCard"
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


const AccountScreen =({navigation})=> {
    const [user, setUser] = useState(null);
    const [isEditingName, setIsEditingName] = useState(false);
    const [editedName, setEditedName] = useState('');
    
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
    }, []);

    useEffect(() => {
        if (user) {
          setName(user.firstName);
          setEditedName(user.firstName);
        }
      }, [user]);

    const [name, setName] = useState('')
    
    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleSaveName = () => {
        if(editedName===""){
            setName(name);
            setIsEditingName(false);
            Toast.show('Name field cannot be empty', Toast.SHORT);
        }
        else{     
            setName(editedName);
            setIsEditingName(false);
        }
    };

    const handleCancelEdit = () => {
        setEditedName(name);
        setIsEditingName(false);
    };

    return(
        <View style={myStyles.container}>
            <View style={myStyles.header}>

            <TouchableOpacity style={myStyles.backButton} >
                <Icon name='arrow-back' size={35} color= "#A6A6A6" />
            </TouchableOpacity>

            <Text style={myStyles.headerText}>Account</Text>
            </View>

            <Image style={myStyles.imgStyle} source={require("../Components/Profile.png")} />

            <View style={myStyles.nameView}>
                {isEditingName ? (
                <>
                <TextInput
                style={myStyles.editNameInput}
                value={editedName}
                onChangeText={(text) => setEditedName(text)}
                placeholder="Enter name"
                placeholderTextColor="#A6A6A6"
                />
                <TouchableOpacity onPress={handleSaveName}>
                <FontAwesome5 style={myStyles.editIcon} name="check" size={20} color={'#FFA500'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancelEdit}>
                <FontAwesome5 style={myStyles.editIcon} name="times" size={20} color={'#FFA500'} />
                </TouchableOpacity>
                </>
                ) : (
                <>
                <Text style={myStyles.nameText}>{name}</Text>
                <TouchableOpacity onPress={handleEditName}>
                <FontAwesome5 style={myStyles.editIcon} name="edit" size={20} color={'#FFA500'} />
                </TouchableOpacity>
                </>
                )}
            </View>

            <View style={myStyles.lowerView}>

                <TouchableOpacity style={myStyles.pressableView} onPress={()=>navigation.navigate("Edit")}>
                    <MaterialCommunityIcons style={myStyles.leftIcon} name="pencil" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Edit Profile</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </TouchableOpacity>

                <Pressable style={myStyles.pressableView} onPress={()=>Toast.show('Language is English', Toast.SHORT)}>
                    <Feather style={myStyles.leftIcon} name="globe" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Language</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>
                
                <Pressable style={myStyles.pressableView} onPress={()=>Toast.show('No need to contact us', Toast.SHORT)}>
                    <MaterialCommunityIcons style={myStyles.leftIcon} name="message-outline" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Contact Us</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>

                <Pressable style={myStyles.pressableView} onPress={()=>Toast.show('Nothing here', Toast.SHORT)}>
                    <SimpleLineIcons style={myStyles.leftIcon} name="question" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>FAQS</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </Pressable>

                <TouchableOpacity style={myStyles.pressableView} onPress={()=>navigation.navigate("Settings")}>
                    <Icon style={myStyles.leftIcon} name="settings-outline" size={23} color={"black"}/>
                    <Text style={myStyles.lowerTexts}>Settings</Text>
                    <View style={myStyles.rightIcon}>
                    <Icon  name="chevron-forward" size={23} color={"black"}/>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{marginBottom:5}}>
            <MusicCard/>
            </View>        
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
        marginVertical:4,
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
    editNameInput: {
        color: '#FFA500',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#FFA500',
        width: '50%',
        textAlign: 'center',
        marginRight: 5,
      },
      editIcon: {
        marginLeft: 10,
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