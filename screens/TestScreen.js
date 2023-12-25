// Example component using react-native-track-player

import React, { useEffect,useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';

const MusicPlayer = () => {
    const [musicData, setMusicData] = useState(null);

    const fetchMusicData = async () => {
        try {
          const musicDoc = await firestore().collection('Music').doc("1").get();
          if (musicDoc.exists) {
            const data = musicDoc.data();
            setMusicData(data);
          } else {
            console.error('Music document not found');
          }
        } catch (error) {
          console.error('Error fetching music data:', error);
        }
      };

    useEffect(()=>{
        fetchMusicData()
    },[])

  return (
    <TouchableOpacity >
      <Text>{musicData?.artist}</Text>
    </TouchableOpacity>
  );
};

export default MusicPlayer;
