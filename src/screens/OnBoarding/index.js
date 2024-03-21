//import liraries
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { OnBoardingData } from '../../data/Data';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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
                <TouchableOpacity onPress={() => {
                    navigation.navigate('BottomStack')
                }}>
                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={styles.buttonStart}>
                        <Text style={styles.buttonStartText}>Let’s Start!</Text>
                    </LinearGradient>
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
