import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MusicPlayer from './assets/Source/Screens/MusicPlayer';
import SignUp from './assets/Source/Screens/SignUp';
import StartScreen from './assets/Source/Screens/StartScreen';
import Login from './HomeScreen';

const MusicCard = () => {

    return (
        <View style={styles.container}>
            <Pressable>
                <View>
                    <Image source={require("")} alt='img here' />
                </View>
                <View>

                    <View>

                        <View>

                            <View>
                                <Text>Ttile of song</Text>
                                <Text>Artist</Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name='play-back-circle-outline' size={25} color="Yellow" />
                        </View>

                    </View>

                    <View>

                        <View>
                            <Ionicons name="heart" size={35} color='#A6A6A6' />
                            <Text>No. of likes</Text>
                        </View>

                        <View>
                            <Ionicons name="share-social" size={35} color='#A6A6A6' />
                            <Text>No. of shares</Text>
                        </View>

                        <View>
                            <Ionicons name="file-tray" size={35} color='#A6A6A6' />
                            <Text>NO. of comments</Text>
                        </View>

                        <View>
                            <Ionicons name="download-outline" size={35} color='#A6A6A6' />
                            <Text>No. of downloads</Text>
                        </View>

                    </View>
                </View>



            </Pressable>
        </View>
    );
};

export default MusicCard;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
});