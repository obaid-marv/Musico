import React,{useState} from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import { signInWithEmailAndPassword, getAuth} from "firebase/auth"
import auth from '@react-native-firebase/auth';
import Toast from "react-native-simple-toast"


const Login = ({navigation}) => {

// const auth = getAuth();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginUser = async () => {
        try {
            if(!email || email.trim() === ""){
                Toast.show("Email field is empty!!", Toast.SHORT)
            } 
            else if(!password || password.trim() === ""){
                Toast.show("Password field is empty!!", Toast.SHORT)
            } 
            else{
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            console.log('User logged in:', userCredential.user);
            navigation.replace('Main');
            }
        } 
        catch (error) {
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential" ) {
                Toast.show("Invalid email or password", Toast.LONG);
            } 
            else {
                console.error('Error logging in:', error);
                alert(error.message);
            }
        }       
      };
   
    return(
        <View style={styles.container}>
            <View style={styles.mainIconView}>
                <Image style={styles.mainIconStyle} source={require("../Components/MusicoIcon.png")}/>
            </View>

            <Text style = {styles.title1}>Login</Text>
            <Text style = {styles.title2}>Welcome back!</Text>
        <TextInput style={styles.inputs} value={email} onChangeText={text => setEmail(text)} placeholderTextColor="#FFA500" placeholder='Enter your Username/Email' />
            <TextInput style={styles.inputs} value={password} secureTextEntry onChangeText={password => setPassword(password)} placeholderTextColor="#FFA500" placeholder='Enter your Password' />
            <TouchableOpacity style={{width:"83%"}}>
                <Text style={styles.pTextPass} >Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>loginUser()}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>



<View style={styles.links}>
        <Text style={styles.pText} >Don't have an account?</Text>
        <Pressable onPress={()=>{navigation.navigate("Signup")}}>

        <Text style={styles.loginBtn}>Sign Up</Text>
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

export default Login;

const styles = StyleSheet.create({
    links:{
        marginBottom:5,
        display:"flex",
        flexDirection:"row",
    },
    lineSeparator:{
        display:"flex",
        flexDirection:"row",
    },
    loginBtn:{
        flex:1,
        color:"#2F89FC",
        fontWeight:"bold",
        marginRight:35,
    },
    mainIconView:{
        marginBottom:20
    },
    mainIconStyle:{
        height:90,
        width:90
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
    orText:{
        color:"#FFA500",
        marginTop:5
    },
    orLines:{
        marginHorizontal:10,
        color:"#FFA500"
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
        fontWeight:"bold",
        color:"white",
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
    title1:{
        fontSize:26,
        color:"#FFA500",
        fontWeight:"700",
        marginBottom:5,
        marginTop:10
    },
    title2:{
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
    },
    pTextPass:{
        color:"#FFA500",
        fontSize:14,
        textAlign:"left"
    }
});