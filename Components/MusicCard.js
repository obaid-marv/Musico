import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'

const MusicCard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer} onPress={()=>navigation.navigate("MusicPlayer")}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={require("./Havana.jpg")} />
          <View style={styles.textContainer}>
            <Text style={styles.songText}>Havana</Text>
            <Text style={styles.artistText}>Camila</Text>
          </View>
        </View>
        <View style={styles.actionView}>
          <TouchableOpacity style={{marginTop:4, marginRight:8}}>
            <Icon name="heart-outline" size={18} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="skip-back" size={25} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="pause-outline" size={25} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="skip-forward" size={25} color="#ffa500" />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor:"#001f3f"
  },
  pressableContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: 60,
    width: 60,
  },
  imgView: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  songText: {
    fontSize: 16,
    color: "#ffa500",
    fontWeight:"bold"
  },
  artistText: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight:"bold"
  },
  actionView: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-evenly",

  },
});
