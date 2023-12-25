import {Text, View, Image, Pressable, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Toast from "react-native-simple-toast"
import React, {useState, useEffect} from "react"

const EditScreen = ({navigation})=>{
    const currentUser = firebase.auth().currentUser;
    const [userData, setUserData] = useState({
        firstName: '',
        email: '',
        phoneNo: '',
        password: '',
    });
    const [isDisabled, setDisabled] = useState(true)

    useEffect(() => {
        // Fetch user data from Firebase when the component mounts
        const fetchUserData = async () => {
          try {
            const userDocument = await firestore().collection('users').doc(currentUser.uid).get();
            const userDataFromFirestore = userDocument.data();
            setUserData({
              firstName: userDataFromFirestore.firstName,
              email: userDataFromFirestore.email,
              phoneNo: userDataFromFirestore.phoneNo,
              password: userDataFromFirestore.password,
            });
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        fetchUserData();
    }, [currentUser]);

    const handleUpdate = async () => {
        try {
          // Update user data in Firestore
          await firestore().collection('users').doc(currentUser.uid).update({
            firstName: userData.firstName,
            email: userData.email,
            phoneNo: userData.phoneNo,
          });
    
          Toast.show("Data updated successfully", Toast.SHORT)
        } 
        catch (error) {
          console.error('Error updating user data:', error);
          alert(error)
        }
      }

    useEffect(() => {
        setDisabled(!userData.email || !userData.firstName || !userData.phoneNo || userData.phoneNo.trim() === "" || userData.email.trim() === "" || userData.firstName.trim() === "");
    }, [userData]);

    return(
        <View style={myStyles.container}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex:1,width:"100%"}}
            >

                <View style={myStyles.yellowView}>
                    <View style={myStyles.header}>
                        <TouchableOpacity onPress={()=>navigation.pop()}>
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
                    <TextInput style={myStyles.inputStyle} value={userData.firstName} onChangeText={(text)=>setUserData({...userData, firstName:text})} placeholder='Zaki098' placeholderTextColor={"grey"}/> 

                    <View style={myStyles.textWrap}>
                    <Text style={myStyles.textStyle}>Email Id</Text>
                    </View>
                    <TextInput style={myStyles.inputStyle} value={userData.email} onChangeText={(text)=>setUserData({...userData, email:text})} placeholder='zaki098@gmail.com' placeholderTextColor={"grey"} />

                    <View style={myStyles.textWrap}>
                    <Text style={myStyles.textStyle}>Phone Number</Text>
                    </View>
                    <TextInput style={myStyles.inputStyle} value={userData.phoneNo} onChangeText={(text)=>setUserData({...userData, phoneNo:text})} placeholder='+92398788999' placeholderTextColor={"grey"}/>

                    <View style={myStyles.textWrap}>
                    <Text style={myStyles.textStyle}>Password</Text>
                    </View>
                    <TextInput style={myStyles.inputStyle} value={userData.password} onChangeText={(text)=>setUserData({...userData, passworde:text})} secureTextEntry={true} placeholder='AsDfGhJkL' placeholderTextColor={"grey"}/>

                    <TouchableOpacity style={myStyles.updateBtn} onPress={handleUpdate} disabled={isDisabled}>
                        <Text style={myStyles.updateText}>Update</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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