import React,{useState} from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import { signInWithEmailAndPassword, getAuth} from "firebase/auth"


const Login = ({navigation}) => {

// const auth = getAuth();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const myAuth = auth.getAuth;

    // const loginUser = async() =>{
    //     console.log(email);
    //     console.log( password);

    //     try {
            
    //         const currUser = await signInWithEmailAndPassword(auth, email, password);
    //         console.log("Success");
    //         navigation.replace("player", {
    //             email: currUser.user.email,
    //             uid: currUser.user.uid
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //         alert(error.message);
    //     }
    //     setEmail("");
    //     setPassword("");
        
    // }
 
    return(
        <View style={styles.container}>

            <Text style = {styles.title}>LOG IN</Text>
            <Text style = {styles.title}>Welcome back!</Text>
        <TextInput style={styles.inputs} value={email} onChangeText={text => setEmail(text)} placeholderTextColor="#FFA500" placeholder='Enter your Username/Email' />
            <TextInput style={styles.inputs} value={password} onChangeText={password => setPassword(password)} placeholderTextColor="#FFA500" placeholder='Enter your Password' />
            <TouchableOpacity>
                <Text style={styles.pTextPass} >Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <Text style={styles.btn}>Log in</Text>
            </TouchableOpacity>



<View style={styles.links}>
        <Text style={styles.pText} >Don't have an account?</Text>
        <Pressable onPress={()=>{}}>

        <Text style={styles.loginBtn}>Sign Up</Text>
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

export default Login;

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
    },
    pTextPass:{
        color:"#FFA500",
        fontSize:12,
    }
});