import React, {useState} from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable, ToastAndroid,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import {firebase} from "../../../Firebase";
// import auth, {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [phoneNo , setPhoneNo] = useState(null);


    const handleSignUp = async () => {
        try {
          // Step 1: Create user in Firebase Authentication
          const { user } = await auth().createUserWithEmailAndPassword(email, password);
    
          // Step 2: Create user document in Firestore
          await firestore().collection('users').doc(user.uid).set({
            email,
            firstName,
            phoneNo,
          });
    
          console.log('User created:', user);
          navigation.navigate("Main")
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
    

    return(
        <View style={styles.container}>
            
            <View style={styles.mainIconView}>
                <Image style={styles.mainIconStyle} source={require("../Components/MusicoIcon.png")}/>
            </View>

            <Text style = {styles.title}>Sign Up</Text>
            <TextInput style={styles.inputs} value={firstName} onChangeText={text => setFirstName(text)} placeholderTextColor="#FFA500" placeholder='Enter your Username'/>
            <TextInput style={styles.inputs} value={email} onChangeText={text => setEmail(text)} placeholderTextColor="#FFA500" placeholder='Enter your email' />
            <TextInput style={styles.inputs} value={phoneNo} onChangeText={text => setPhoneNo(text)}  placeholderTextColor="#FFA500" placeholder='Enter your Phone Number' />
            <TextInput style={styles.inputs} secureTextEntry value={password} onChangeText={text => setPassword(text)} placeholderTextColor="#FFA500" placeholder='Enter your Password' />
            <TouchableOpacity onPress={()=>{handleSignUp()}}>  
                <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>


            <View style={styles.links}>
                    <Text style={styles.pText} >Already have an account?</Text>
                    <Pressable onPress={() =>{navigation.navigate("Login")}}>
                        <Text style={styles.loginBtn}>Login</Text>
                    </Pressable>
            </View>  
            <View style={styles.lineSeparator}>
                <Text style = {styles.orLines}>____________________</Text>
                <Text style = {styles.orText} >Or</Text>
                <Text style = {styles.orLines} >____________________</Text>


            </View>
                <TouchableOpacity>
                    <View style={styles.logoDiv}>
                        <Icon style={styles.logoIcon} name='logo-facebook' size={22} color="white"/>
                        <Text style={styles.logo}>Login with facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    links:{
        marginBottom:5,
        display:"flex",
        flexDirection:"row",
    },
    lineSeparator:{
        flexDirection:"row",
    },
    mainIconView:{
        marginBottom:20
    },
    mainIconStyle:{
        height:90,
        width:90
    },
    loginBtn:{
        flex:1,
        color:"#2F89FC",
        fontWeight:"bold",
        marginRight:35,
    },
    orText:{
        color:"#FFA500",
        marginTop:5
    },
    orLines:{
        marginHorizontal:10,
        color:"#FFA500"
    },  
    nextButton:{

        display:"flex",
        flexDirection:"row",
        backgroundColor:"#FFA500",
        alignItems:"center",
        fontWeight:"bold",
        marginTop: 45,
        padding:6,
        borderRadius:30,
        
    },
    logoIcon:{
        flex:1,
    },
    btn:{
        backgroundColor:"#FFA500",
        color:"black",
        width:300,
        marginTop:23,
        marginBottom:15,
        padding:12,
        textAlign:"center",
        borderRadius:10,
        fontWeight:"bold",
        fontSize:16
    },
    logo:{
        flex:8,
        color:"white",
        fontWeight:"bold",
        fontSize:16,
        textAlign:"center"
    },
    inputs:{
        margin:8,
        borderColor:"#FFA500",
        fontWeight:"300",
        width:300,
        padding:8,
        textAlign:"center",
        color:"#FFA500",
        borderRadius:10,
        borderWidth:1,
    },
    logoDiv:{
        display:"flex",
        marginTop:20,
        flexDirection:"row",
        backgroundColor:"blue",
        padding:10,
        borderRadius:15,
        width:300,
    },
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#001F3F",
    },
    title:{
        fontSize:24,
        color:"#FFA500",
        fontWeight:"700",
        marginBottom:18,
    },
    pText:{
        color:"#FFA500",
        flex:4,
        marginLeft:34,
        fontSize:14,
    }
});