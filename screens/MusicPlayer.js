import React, { useEffect, useState} from 'react';
import { StyleSheet,View, Text,SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import TrackPlayer, { usePlaybackState, useTrackPlayerEvents, useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';



const {width, height} = Dimensions.get('window');

const MusicPlayer = ({navigation}) => {
    const playbackState = usePlaybackState();

        const [icon2Name, setIcon2Name] = useState("pause");
        const [iconName, setIconName] = useState("heart-outline");
        const [icon1Name, setIcon1Name] = useState("repeat");
        const [musicData, setMusicData] = useState([]);
        const [activeTrack, setActiveTrack] = useState({});
        const [current,setCurrent] = useState(0);
        const progress = useProgress();
        

        const getAudioFileUrl = async (audioFileName) => {
            try {
            const ref = storage().ref(audioFileName);
            const url = await ref.getDownloadURL();
            return url;
            } catch (error) {
            console.error('Error getting audio file URL:', error);
            throw error;
            }
        };

        const getAllDocuments = async (collectionName) => {
        try {
            const collectionRef = firestore().collection(collectionName);
            const querySnapshot = await collectionRef.get();

            const documents = [];
            querySnapshot.forEach((documentSnapshot) => {
            documents.push({
                artist: documentSnapshot.artist,
                ...documentSnapshot.data(),
            });
            });

            setMusicData(documents);
        } catch (error) {
            console.error('Error getting documents:', error);
            throw error;
        }
        };

        const fetchMusicData = async () => {
            try {
               await getAllDocuments("Music");
               
              
            } catch (error) {
              console.error('Error fetching music data:', error);
            }
          };

        useEffect(()=>{

            fetchMusicData();
        },[])

        useEffect(() => {
            const startPlayback = async () => {
            try {
                await TrackPlayer.setupPlayer({});
                const tracks = [];

                // Loop through each track in musicData and add it to the tracks array
                for (const track of musicData) {
                
                const audioFileUrl = await getAudioFileUrl(track.url);
                tracks.push({
                    id: track.id,
                    url: audioFileUrl,
                    title: track.title,
                    artist: track.artist,
                    artwork: {uri: track.artwork},
                });
                }

                // Add all tracks to TrackPlayer
                await TrackPlayer.add(tracks);

                // Start playing
                await TrackPlayer.play();
            } catch (error) {
                console.log(error);
            }
            };

            if (musicData.length > 0) {
            startPlayback();
            }
        }, [musicData]);

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

        const togglePlayback = async () => {

            if (playbackState.state === "playing") {
            await TrackPlayer.pause();
            } else {
            await TrackPlayer.play();
            }
        };

        const skipToNext = async () => {
            try {
            await TrackPlayer.skipToNext();
            } catch (error) {
            console.error('Error skipping to next track:', error);
            }
        };

        const skipToPrevious = async () => {
            try {
            await TrackPlayer.skipToPrevious();
            } catch (error) {
            console.error('Error skipping to previous track:', error);
            }
        };
            




    return(
        <SafeAreaView style={styles.newcontainer}>
            <View style={styles.mainContainer}>
                <View style={styles.upperContainer}>
                    <TouchableOpacity onPress={()=> {navigation.navigate("Main")}}>
                    <Icon name="arrow-back-sharp" size={35} color='#ffff'/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Now Playing</Text>
                    <Icon name="arrow-back-sharp" size={35} color='#001f3f'/>
                </View>
                <View style={styles.coverWrapper}>
                    {musicData[current]?.artwork ? (
                    <Image style={styles.cover} source={{ uri: activeTrack.artwork}} />
                    ) : (
                    <Text>No artwork available</Text>
                    )}
                </View>
                <View>
                    <Text style={styles.title} >{activeTrack.title}</Text>
                    <Text style={styles.artist} >{activeTrack.artist}</Text>
                
                </View>
                <View style={styles.likerepeat}>
                    <TouchableOpacity onPress={()=>{
                        if(icon1Name=="repeat"){
                            setIcon1Name("infinite");
                        }
                        if(icon1Name=="repeat-one"){
                            setIcon1Name("repeat");
                        }
                    }}>
                    <Icon name={icon1Name} size={20} color='#FFA500'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        if(iconName=="heart-outline"){
                            setIconName("heart");
                        }
                        if(iconName=="heart"){
                            setIconName("heart-outline");
                        }
                    }}>
                    <Icon name={iconName} size={20} color='#FFA500'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>{progress.position}</Text>
                    <Text style={styles.timerText}>{progress.duration}</Text>
                    
                </View>
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
            </View>

            <View style={styles.lrcontainer}>
                
            </View>
            <View style={styles.controlsContainer}>
                <View style={styles.control}>
                    <TouchableOpacity onPress={()=>{skipToPrevious()}}>
                        <Icon name="play-skip-back" size={30} color='#FFA500'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {togglePlayback()}}>
                        <Icon name={icon2Name} size={50} color='#FFA500'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{skipToNext()}}>
                        <Icon name="play-skip-forward" size={30} color='#FFA500'/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default MusicPlayer;

const styles = StyleSheet.create({
    
    upperContainer:{

        marginTop:-40,
        marginBottom:20,
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:"space-between",
        width:'80%',
    },
    newcontainer:{
        flex:1,
        backgroundColor:'#001f3f'
    },

    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
   },
    likerepeat:{
        width:'80%',  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
    },
    controlsContainer:{
        width:width,
        alignItems:'center',
        paddingtop:0,
        paddingBottom:60,
    },
    control:{
        width:'80%',  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
    },
    coverWrapper:{
        alignItems:'center',
        width: 300,
        height: 300,
        marginBottom:5,
    },
    cover:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    title:{
        color:'#FFA500',
        textAlign: 'center',
        fontSize: 19,
        fontWeight:'600',
    },
    artist:{
        color:'#FFA500',
        textAlign: 'center',
        fontSize: 15,
        fontWeight:"bold"
    },
    progressContainer:{
        marginTop:70,
        width:310,
        height:25,
        marginBottom:-100,
        flexDirection:'row'
    },
    timerContainer:{
        marginTop:80,
        marginBottom:-60,
        flexDirection:"row",
        justifyContent:"space-between",
        width:280
    },
    timerText:{
        color:'#FFA500',
    }

});