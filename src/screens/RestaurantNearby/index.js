//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { verticalScale, horizontalScale } from '../../utils/ScaleSize';
import LinearGradient from 'react-native-linear-gradient';
import { food } from '../../data/Data';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const RestaurantNearby = () => {
    const [visible, setVisible] = useState(1)
    return (
        <View style={styles.container}>
            <MapView provider={PROVIDER_GOOGLE}
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.inputView}>
                <TextInput placeholder='Search here' style={styles.inputText} placeholderTextColor={'#9C9C9C'} />
            </View>
            <ScrollView horizontal={true} style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonView}>
                    {food.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => {
                                item.id === 1 ? setVisible(1) : setVisible(false)
                            }}>
                                {visible === item.id ? (
                                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={styles.buttonTouch}>
                                        <Text style={styles.buttonText}>{item.name}</Text>
                                    </LinearGradient>
                                ) : <LinearGradient colors={['white', 'white']} angle={180} useAngle={true} style={styles.buttonTouch}>
                                    <Text style={styles.buttonText1}>{item.name}</Text>
                                </LinearGradient>
                                }

                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(50),
    },
    inputText: {
        width: width / 1.15,
        borderWidth: 0.5,
        borderColor: '#F1F1F1',
        height: height / 18,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        paddingLeft: horizontalScale(20),
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: 0.7,
    },
    buttonView: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(25),
        marginTop: verticalScale(25),
        gap: 20
    },
    buttonTouch: {
        width: 98,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F96B1B',
        borderRadius: 12
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14
    },
    buttonText1: {
        color: '#F96B1B',
        fontWeight: '400',
        fontSize: 14
    },
});

export default RestaurantNearby;
