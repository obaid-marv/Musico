import React, {useState} from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import {firebase} from "../../../Firebase";
// import auth, {createUserWithEmailAndPassword, getAuth} from "firebase/auth"


const SignUp = ({navigation}) => {
    // const myauth = getAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [phoneNo , setPhoneNo] = useState(null);

    // const signUpUser = async ()=>{
    //     try {

    //     if(email.length > 0 && password.length >= 6){

            
    //             await createUserWithEmailAndPassword(myauth, email, password)
    //             pastDetailsToFirestore();
    //             alert("Account created successfully");
                
    //         }else{
    //             alert("Please fill all the credentials");
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //         alert(error.message);
    //     }

    //     setEmail(null);
    //     setPhoneNo(null);
    //     setFirstName(null);
    //     setPassword(null);
    //     // .then((value) =>{
    //     //     pastDetailsToFirestore(value.user.uid);
    //     //     console.log(value.user.uid);

    //     // }).catch(error => console.log(error.message));
    // }

    
    // const pastDetailsToFirestore = async() =>{
    //     // user = auth.

    //     const user = getAuth().currentUser;
    
    //     await firebase.firestore().collection("Users").doc(user.uid).set({ 
    //         email: email,
    //         firstName : firstName,
    //         phoneNo:phoneNo,
    //      }).then(() =>{
    //          navigation.navigate("home");

    //      }).catch((error) => {console.log(error.message);})

    // }

    return(
        <View style={styles.container}>


            <Text style = {styles.title}>Sign Up</Text>
            <TextInput style={styles.inputs} value={firstName} onChangeText={text => setFirstName(text)} placeholderTextColor="#FFA500" placeholder='Enter your Username'/>
            <TextInput style={styles.inputs} value={email} onChangeText={text => setEmail(text)} placeholderTextColor="#FFA500" placeholder='Enter your email' />
            <TextInput style={styles.inputs} value={phoneNo} onChangeText={text => setPhoneNo(text)}  placeholderTextColor="#FFA500" placeholder='Enter your Phone Number' />
            <TextInput style={styles.inputs} secureTextEntry value={password} onChangeText={text => setPassword(text)} placeholderTextColor="#FFA500" placeholder='Enter your Password' />
            <TouchableOpacity onPress={()=>{}}>  
                <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>


            <View style={styles.links}>
                    <Text style={styles.pText} >Already have an account?</Text>
                    <Pressable onPress={() =>{navigation.navigate("Login")}}>
                        <Text style={styles.loginBtn}>Login</Text>
                    </Pressable>
            </View>  
            <View style={styles.lineSeparator}>
                <Text style = {styles.colorWhite}></Text>
                <Text style = {styles.colorWhite} >OR</Text>
                <Text style = {styles.colorWhite} ></Text>


            </View>
                <TouchableOpacity>
                    <View style={styles.logoDiv}>
                        <Icon style={styles.logoIcon} name='logo-facebook' size={20} color="white"/>
                        <Text style={styles.logo}>log in with facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    links:{
        marginBottom:10,
        display:"flex",
        flexDirection:"row",
    },
    lineSeparator:{
        display:"flex",
        flexDirection:"row",
    },
    loginBtn:{
        flex:1,
        color:"white",
        fontWeight:"bold",
        marginRight:20,
    },
    colorWhite:{
        color:"white",
        
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
    },
    logo:{
        flex:8,
        color:"white",
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
        marginTop:25,
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
        color:"white",
        fontWeight:"700",
        marginBottom:18,
    },
    pText:{
        color:"#FFA500",
        flex:4,
        marginLeft:34,
        fontSize:12,
    }
});