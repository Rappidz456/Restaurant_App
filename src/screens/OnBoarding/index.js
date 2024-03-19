//import liraries
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { OnBoardingData } from '../../data/Data';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const Boarding = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image source={item.image} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{item.text}</Text>
            </View>
        );
    }

    const renderSkipButton = () => {
        return (
            <View style={styles.skipButton}>
                <Text style={styles.skipButtonText}>SKIP</Text>
            </View>
        );
    };

    const OnDone = () => {
        return (
            <View style={styles.doneButton}>
                <TouchableOpacity style={styles.buttonStart} onPress={() => {
                    navigation.navigate('BottomStack')
                }}>
                    <Text style={styles.buttonStartText}>Let’s Start!</Text>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <AppIntroSlider data={OnBoardingData}
            renderItem={renderItem}
            showSkipButton
            renderSkipButton={renderSkipButton}
            renderDoneButton={OnDone}
            activeDotStyle={styles.activeDotStyle}
        />
    );
};

export default Boarding;
