import React from 'react';

import { View , StyleSheet, Pressable, Image, Button,Text } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons'

const Settings = () => {

    return(
        <View style={styles.container}>
<View>
    <Pressable>

<Icon name="arrow-back-sharp" size={25} color='#000'/>
    </Pressable>
<Text>Settings</Text>
</View>

<View>
    
    <View>
        <Text>Muneeb</Text>
        <Text>View Profile</Text>
    </View>
    <Icon name='arrow-forward-circle-outline' size={25} color= "yellow"/>
</View>
<View>
    <Text>Data saver</Text>
    <View>
        <Text>Audio Quality</Text>
 

    </View>
</View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
});