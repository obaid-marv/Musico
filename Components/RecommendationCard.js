import React from 'react';
import { View, StyleSheet, Image, Pressable,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const RecommendationCard = () => {

    return (
        <View style={myStyles.container}>
            <Pressable>
                <View>
                    <Image source={require("./Havana.jpg")}  />
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
                            <Icon name='play-back-circle-outline' size={25} color="Yellow" />
                        </View>

                    </View>

                    <View>

                        <View>
                            <Icon name="heart" size={35} color='#A6A6A6' />
                            <Text>No. of likes</Text>
                        </View>

                        <View>
                            <Icon name="share-social" size={35} color='#A6A6A6' />
                            <Text>No. of shares</Text>
                        </View>

                        <View>
                            <Icon name="file-tray" size={35} color='#A6A6A6' />
                            <Text>NO. of comments</Text>
                        </View>

                        <View>
                            <Icon name="download-outline" size={35} color='#A6A6A6' />
                            <Text>No. of downloads</Text>
                        </View>

                    </View>
                </View>



            </Pressable>
        </View>
    );
};

export default RecommendationCard;

const myStyles = StyleSheet.create({

    container: {
        flex: 1,
    },
    style:{
        color:"white"
    }
});