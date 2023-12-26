// Example component using react-native-track-player

import React, { useEffect,useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';

const MusicPlayer = () => {
  const [musicData, setMusicData ] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/obaid-marv/Weather-App/main/data.json");
      const data = await response.json();
      console.log(data)
      setMusicData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    
    fetchData();
  }, []); 

  return (
    <TouchableOpacity  style={{backgroundColor:"white"}} >
      <Text style={{color:"black"}}>{musicData[0]?.artist}</Text>
    </TouchableOpacity>
  );
};

export default MusicPlayer;
