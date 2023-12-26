import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, Pressable, Text,Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import Slider from '@react-native-community/slider';
import TrackPlayer, {useTrackPlayerEvents, usePlaybackState, useProgress} from 'react-native-track-player';
const {width, height} = Dimensions.get('window');

const MusicCard = ({navigation}) => {
  const [activeTrack,setActiveTrack] = useState();
  const [icon2Name, setIcon2Name] = useState("pause");
  const playbackState = usePlaybackState();
  const progress = useProgress();

  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    const { nextTrack } = event;
    console.log(nextTrack);
    if (nextTrack !== null) {
    const track = await TrackPlayer.getTrack(nextTrack);
    setActiveTrack(track);
    }
});

  useEffect(() => {

    if (playbackState.state === "playing") {
    setIcon2Name('pause');
    } else {
    setIcon2Name('play');
    }
}, [playbackState]);

  const skipToNext = async () => {
    try {
    if(!TrackPlayer){
    await TrackPlayer.setupPlayer({});
    }
    
    await TrackPlayer.skipToNext();
    } catch (error) {
    console.error('Error skipping to next track:', error);
    }
};

const skipToPrevious = async () => {
    try {
    if(!TrackPlayer){
    await TrackPlayer.setupPlayer({});
    }
    await TrackPlayer.skipToPrevious();
    } catch (error) {
    console.error('Error skipping to previous track:', error);
    }
};

const togglePlayback = async () => {

  if (playbackState.state === "playing") {
  await TrackPlayer.pause();
  } else {
  await TrackPlayer.play();
  }
};

    
  return (

    <View>
      <Slider
                    style={styles.progressContainer}
                    value={progress.position}
                    minimumValue={0}
                    maximumValue={progress.duration}
                    minimumTrackTintColor="#FFA500"
                    thumbTintColor="#FFA500"
                    maximumTrackTintColor="white"
                    onSlidingComplete={(value) => {
                    // Seek to the selected position when the user releases the slider thumb
                    TrackPlayer.seekTo(value);
                    }}
                />
    <View style={styles.container}>
      
      <Pressable style={styles.pressableContainer} onPress={()=>navigation.navigate("MusicPlayer")}>
        <View style={styles.imgView}>
        {activeTrack?.artwork ? (
                    <Image style={styles.img} source={{ uri: activeTrack.artwork}} />
                    ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FFA500" />
                </View>
                    )}
          <View style={styles.textContainer}>
            <Text style={styles.songText}>{activeTrack?.title}</Text>
            <Text style={styles.artistText}>{activeTrack?.artist}</Text>
          </View>
        </View>
        <View style={styles.actionView}>
          <TouchableOpacity style={{marginTop:4, marginRight:8}}>
            <Icon name="heart-outline" size={18} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>skipToPrevious()}>
            <Feather name="skip-back" size={25} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>togglePlayback()}>
            <Icon name={icon2Name} size={25} color="#ffa500" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>skipToNext()}>
            <Feather name="skip-forward" size={25} color="#ffa500" />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
    </View>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor:"#001f3f",
    elevation:20,
    shadowColor:"#ffffff"
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
    fontSize: 12,
    color: "#ffa500",
    fontWeight:"bold",
    width:"60%"
  },
  actionView: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-evenly",

  },
  loadingContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer:{
    
    width:width,
    height:25,

    flexDirection:'row'
},

});
